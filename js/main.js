const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        { text: "Work out", done: true },
        { text: "Team meating", done: false },
        { text: "Hand off the project", done: true },
        { text: "Read 5 pages", done: false },
      ],

      newTask: {
        text: "",
        done: false,
      },
    };
  },

  methods: {
    addTask() {
      const newTaskCopy = {
        ...this.newTask,
      };

      const newTaskCopy2 = {
        text: this.newTask.text,
        done: false,
      };

      this.tasks.push(newTaskCopy);
      this.newTask.text = "";
    },

    removeTask(i) {
      this.tasks.splice(i, 1);
    },

    doneToDo(task) {
      task.done = !task.done;
    },
  },
}).mount("#app");
