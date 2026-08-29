"use client";

import { useEffect, useState } from "react";

type Priority = "Low" | "Medium" | "High";
type Category = "Work" | "Study" | "Personal" | "Other";
type Filter =
  | "All"
  | "Today"
  | "Upcoming"
  | "Overdue"
  | "Completed";

type Task = {
  id: number;
  title: string;
  priority: Priority;
  category: Category;
  dueDate: string;
  completed: boolean;
};

const defaultTasks: Task[] = [];

export default function Home() {
  const [task, setTask] = useState("");
  const [priority, setPriority] =
    useState<Priority>("Medium");

  const [category, setCategory] =
    useState<Category>("Personal");

  const [dueDate, setDueDate] = useState("");

  const [tasks, setTasks] =
    useState<Task[]>([]);

  const [filter, setFilter] =
    useState<Filter>("All");

  const [search, setSearch] =
    useState("");

  const [loaded, setLoaded] =
    useState(false);

  const [editingId, setEditingId] =
    useState<number | null>(null);

  // -----------------------------
  // LOAD TASKS
  // -----------------------------

  useEffect(() => {
    const savedTasks =
      localStorage.getItem("taskflow-tasks");

    if (savedTasks) {
      try {
        const oldTasks = JSON.parse(savedTasks);

        const updatedTasks = oldTasks.map(
          (item: Task) => ({
            ...item,
            category:
              item.category || "Other",
            dueDate:
              item.dueDate || "",
          })
        );

        setTasks(updatedTasks);
      } catch {
        setTasks(defaultTasks);
      }
    } else {
      setTasks(defaultTasks);
    }

    setLoaded(true);
  }, []);

  // -----------------------------
  // SAVE TASKS
  // -----------------------------

  useEffect(() => {
    if (loaded) {
      localStorage.setItem(
        "taskflow-tasks",
        JSON.stringify(tasks)
      );
    }
  }, [tasks, loaded]);

  // -----------------------------
  // ADD TASK
  // -----------------------------

  function addTask() {
    if (!task.trim()) return;

    const newTask: Task = {
      id: Date.now(),
      title: task.trim(),
      priority,
      category,
      dueDate,
      completed: false,
    };

    setTasks((current) => [
      ...current,
      newTask,
    ]);

    clearForm();
  }

  // -----------------------------
  // EDIT TASK
  // -----------------------------

  function startEditing(item: Task) {
    setEditingId(item.id);

    setTask(item.title);
    setPriority(item.priority);
    setCategory(item.category);
    setDueDate(item.dueDate);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function saveEdit() {
    if (
      !task.trim() ||
      editingId === null
    ) {
      return;
    }

    setTasks((current) =>
      current.map((item) =>
        item.id === editingId
          ? {
              ...item,
              title: task.trim(),
              priority,
              category,
              dueDate,
            }
          : item
      )
    );

    clearForm();
  }

  function cancelEdit() {
    clearForm();
  }

  // -----------------------------
  // CLEAR FORM
  // -----------------------------

  function clearForm() {
    setTask("");
    setPriority("Medium");
    setCategory("Personal");
    setDueDate("");
    setEditingId(null);
  }

  // -----------------------------
  // COMPLETE TASK
  // -----------------------------

  function toggleTask(id: number) {
    setTasks((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              completed:
                !item.completed,
            }
          : item
      )
    );
  }

  // -----------------------------
  // DELETE
  // -----------------------------

  function deleteTask(id: number) {
    setTasks((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );

    if (editingId === id) {
      clearForm();
    }
  }

  // -----------------------------
  // CLEAR COMPLETED
  // -----------------------------

  function clearCompleted() {
    setTasks((current) =>
      current.filter(
        (item) => !item.completed
      )
    );
  }

  // -----------------------------
  // TODAY
  // -----------------------------

  function getToday() {
    const now = new Date();

    const year =
      now.getFullYear();

    const month = String(
      now.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      now.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  // -----------------------------
  // DATE CHECKS
  // -----------------------------

  function isOverdue(item: Task) {
    if (
      !item.dueDate ||
      item.completed
    ) {
      return false;
    }

    return item.dueDate < getToday();
  }

  function isToday(item: Task) {
    return (
      item.dueDate === getToday()
    );
  }

  function isUpcoming(item: Task) {
    if (
      !item.dueDate ||
      item.completed
    ) {
      return false;
    }

    return item.dueDate > getToday();
  }

  // -----------------------------
  // DATE FORMAT
  // -----------------------------

  function formatDate(date: string) {
    if (!date) return "";

    const [year, month, day] =
      date.split("-");

    return `${day}/${month}/${year}`;
  }

  // -----------------------------
  // STATISTICS
  // -----------------------------

  const totalTasks = tasks.length;

  const completedTasks =
    tasks.filter(
      (item) => item.completed
    ).length;

  const activeTasks =
    tasks.filter(
      (item) => !item.completed
    ).length;

  const overdueTasks =
    tasks.filter(
      (item) => isOverdue(item)
    ).length;

  const progress =
    totalTasks === 0
      ? 0
      : Math.round(
          (completedTasks /
            totalTasks) *
            100
        );

  // -----------------------------
  // FILTER TASKS
  // -----------------------------

  const visibleTasks =
    tasks.filter((item) => {
      let matchesFilter = true;

      if (filter === "Today") {
        matchesFilter =
          isToday(item) &&
          !item.completed;
      }

      if (filter === "Upcoming") {
        matchesFilter =
          isUpcoming(item);
      }

      if (filter === "Overdue") {
        matchesFilter =
          isOverdue(item);
      }

      if (filter === "Completed") {
        matchesFilter =
          item.completed;
      }

      const matchesSearch =
        item.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      return (
        matchesFilter &&
        matchesSearch
      );
    });

  // -----------------------------
  // PRIORITY STYLE
  // -----------------------------

  function priorityStyle(
    value: Priority
  ) {
    if (value === "High") {
      return "bg-red-500/10 text-red-400 border-red-500/20";
    }

    if (value === "Medium") {
      return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
    }

    return "bg-green-500/10 text-green-400 border-green-500/20";
  }

  // -----------------------------
  // CATEGORY ICON
  // -----------------------------

  function categoryIcon(
    value: Category
  ) {
    if (value === "Work") return "💼";
    if (value === "Study") return "🎓";
    if (value === "Personal") return "👤";

    return "📌";
  }

  // -----------------------------
  // LOADING
  // -----------------------------

  if (!loaded) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 text-white">
        <p className="text-zinc-400">
          Loading TaskFlow...
        </p>
      </main>
    );
  }

  // -----------------------------
  // UI
  // -----------------------------

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">

        {/* HEADER */}

        <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="flex items-center gap-3">

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-xl font-black text-black">
                ✓
              </div>

              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                TaskFlow
              </h1>

            </div>

            <p className="mt-3 text-zinc-400">
              Organize your day. Get things done.
            </p>

          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
            {activeTasks} active tasks
          </div>

        </header>


        {/* STAT CARDS */}

        <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

          {/* TOTAL */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">

            <p className="text-sm text-zinc-500">
              Total
            </p>

            <p className="mt-2 text-2xl font-bold">
              {totalTasks}
            </p>

          </div>


          {/* ACTIVE */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">

            <p className="text-sm text-zinc-500">
              Active
            </p>

            <p className="mt-2 text-2xl font-bold">
              {activeTasks}
            </p>

          </div>


          {/* COMPLETED */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">

            <p className="text-sm text-zinc-500">
              Completed
            </p>

            <p className="mt-2 text-2xl font-bold">
              {completedTasks}
            </p>

          </div>


          {/* OVERDUE */}

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">

            <p className="text-sm text-zinc-500">
              Overdue
            </p>

            <p className={`mt-2 text-2xl font-bold ${
              overdueTasks > 0
                ? "text-red-400"
                : ""
            }`}>
              {overdueTasks}
            </p>

          </div>

        </section>


        {/* PROGRESS */}

        <section className="mt-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <div className="flex items-center justify-between">

            <div>

              <p className="text-sm text-zinc-500">
                Overall progress
              </p>

              <p className="mt-1 text-xl font-bold">
                {completedTasks} of{" "}
                {totalTasks} completed
              </p>

            </div>

            <p className="text-2xl font-bold">
              {progress}%
            </p>

          </div>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-800">

            <div
              className="h-full rounded-full bg-white transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

        </section>


        {/* ADD TASK */}

        <section className="mt-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-5">

          <div className="mb-4">

            <h2 className="text-lg font-semibold">
              {editingId !== null
                ? "Edit Task"
                : "Create a task"}
            </h2>

          </div>


          <input
            value={task}
            onChange={(e) =>
              setTask(e.target.value)
            }
            onKeyDown={(e) => {

              if (e.key === "Enter") {

                if (
                  editingId !== null
                ) {
                  saveEdit();
                } else {
                  addTask();
                }

              }

            }}
            placeholder="What do you need to do?"
            className="w-full rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3.5 outline-none transition placeholder:text-zinc-600 focus:border-zinc-600"
          />


          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">

            {/* PRIORITY */}

            <select
              value={priority}
              onChange={(e) =>
                setPriority(
                  e.target.value as Priority
                )
              }
              className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none"
            >
              <option value="Low">
                🟢 Low Priority
              </option>

              <option value="Medium">
                🟡 Medium Priority
              </option>

              <option value="High">
                🔴 High Priority
              </option>

            </select>


            {/* CATEGORY */}

            <select
              value={category}
              onChange={(e) =>
                setCategory(
                  e.target.value as Category
                )
              }
              className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none"
            >

              <option value="Work">
                💼 Work
              </option>

              <option value="Study">
                🎓 Study
              </option>

              <option value="Personal">
                👤 Personal
              </option>

              <option value="Other">
                📌 Other
              </option>

            </select>


            {/* DATE */}

            <input
              type="date"
              value={dueDate}
              onChange={(e) =>
                setDueDate(
                  e.target.value
                )
              }
              className="rounded-xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-sm outline-none"
            />

          </div>


          {/* ACTION BUTTONS */}

          {editingId !== null ? (

            <div className="mt-3 grid grid-cols-2 gap-3">

              <button
                onClick={saveEdit}
                className="rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
              >
                ✓ Save Changes
              </button>

              <button
                onClick={cancelEdit}
                className="rounded-xl border border-zinc-700 bg-zinc-950 px-5 py-3 font-semibold text-zinc-300 transition hover:bg-zinc-800"
              >
                Cancel
              </button>

            </div>

          ) : (

            <button
              onClick={addTask}
              className="mt-3 w-full rounded-xl bg-white px-5 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              + Add Task
            </button>

          )}

        </section>


        {/* SEARCH */}

        <div className="mt-6">

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="🔎 Search your tasks..."
            className="w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3.5 outline-none placeholder:text-zinc-600 focus:border-zinc-600"
          />

        </div>


        {/* FILTERS */}

        <div className="mt-5 flex flex-wrap gap-2">

          {(
            [
              "All",
              "Today",
              "Upcoming",
              "Overdue",
              "Completed",
            ] as Filter[]
          ).map((item) => (

            <button
              key={item}
              onClick={() =>
                setFilter(item)
              }
              className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                filter === item
                  ? "bg-white text-black"
                  : "bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white"
              }`}
            >
              {item}
            </button>

          ))}

        </div>


        {/* TASK HEADER */}

        <div className="mt-8 flex items-center justify-between">

          <div>

            <h2 className="text-xl font-semibold">
              {filter === "All"
                ? "All Tasks"
                : `${filter} Tasks`}
            </h2>

            <p className="mt-1 text-sm text-zinc-600">
              {visibleTasks.length} tasks
            </p>

          </div>


          {completedTasks > 0 && (

            <button
              onClick={clearCompleted}
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              Clear completed
            </button>

          )}

        </div>


        {/* TASK LIST */}

        <section className="mt-4">

          {visibleTasks.length === 0 ? (

            <div className="rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/50 px-6 py-14 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-900 text-2xl">
                ✓
              </div>

              <h3 className="mt-4 font-semibold">
                No tasks here
              </h3>

              <p className="mt-1 text-sm text-zinc-600">
                Add a task to get started.
              </p>

            </div>

          ) : (

            <div className="space-y-3">

              {visibleTasks.map(
                (item) => (

                  <div
                    key={item.id}
                    className={`group rounded-2xl border bg-zinc-900 p-4 transition hover:border-zinc-700 ${
                      isOverdue(item)
                        ? "border-red-500/20"
                        : "border-zinc-800"
                    }`}
                  >

                    <div className="flex items-start gap-4">

                      {/* CHECK */}

                      <button
                        onClick={() =>
                          toggleTask(
                            item.id
                          )
                        }
                        aria-label="Complete task"
                        className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition ${
                          item.completed
                            ? "border-white bg-white text-black"
                            : "border-zinc-700 hover:border-zinc-400"
                        }`}
                      >
                        {item.completed
                          ? "✓"
                          : ""}
                      </button>


                      {/* CONTENT */}

                      <div className="min-w-0 flex-1">

                        <p
                          className={`break-words font-medium ${
                            item.completed
                              ? "text-zinc-600 line-through"
                              : "text-zinc-200"
                          }`}
                        >
                          {item.title}
                        </p>


                        <div className="mt-3 flex flex-wrap gap-2">

                          {/* PRIORITY */}

                          <span
                            className={`rounded-full border px-2.5 py-1 text-xs ${priorityStyle(
                              item.priority
                            )}`}
                          >
                            {item.priority}
                          </span>


                          {/* CATEGORY */}

                          <span className="rounded-full border border-zinc-800 bg-zinc-950 px-2.5 py-1 text-xs text-zinc-400">
                            {categoryIcon(
                              item.category
                            )}{" "}
                            {item.category}
                          </span>


                          {/* DATE */}

                          {item.dueDate && (

                            <span
                              className={`rounded-full border px-2.5 py-1 text-xs ${
                                isOverdue(
                                  item
                                )
                                  ? "border-red-500/20 bg-red-500/10 text-red-400"
                                  : isToday(
                                      item
                                    )
                                  ? "border-yellow-500/20 bg-yellow-500/10 text-yellow-400"
                                  : "border-zinc-800 bg-zinc-950 text-zinc-400"
                              }`}
                            >

                              📅{" "}
                              {formatDate(
                                item.dueDate
                              )}

                              {isOverdue(
                                item
                              ) &&
                                " • Overdue"}

                              {isToday(
                                item
                              ) &&
                                !item.completed &&
                                " • Today"}

                            </span>

                          )}

                        </div>

                      </div>


                      {/* ACTIONS */}

                      <div className="flex shrink-0 gap-1">

                        <button
                          onClick={() =>
                            startEditing(
                              item
                            )
                          }
                          className="rounded-lg px-2.5 py-2 text-xs text-zinc-500 transition hover:bg-zinc-800 hover:text-white"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            deleteTask(
                              item.id
                            )
                          }
                          className="rounded-lg px-2.5 py-2 text-xs text-zinc-500 transition hover:bg-red-500/10 hover:text-red-400"
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  </div>

                )
              )}

            </div>

          )}

        </section>


        {/* FOOTER */}

        <footer className="mt-16 border-t border-zinc-900 pt-6 text-center">

          <p className="text-xs text-zinc-600">
            TaskFlow • Simple productivity,
            completely free.
          </p>

        </footer>

      </div>

    </main>
  );
}