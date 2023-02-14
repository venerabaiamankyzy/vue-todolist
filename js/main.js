const { createApp } = Vue;

createApp({
  data() {
    return {
      tasks: [
        { text: "Work out", done: true },
        { text: "Team meating", done: true },
        { text: "Hand off the project", done: false },
      ],

      newTask: "",
      taskHaveToDO: "lineThrough",
    };
  },

  methods: {
    addTask() {
      // console.log(this.newTask);
      this.tasks.push({ text: this.newTask, done: true });
    },

    removeTask(i) {
      this.tasks.splice(i, 1);
    },

    lineThrough(i) {
      if (this.tasks[i].done) {
        return;
      } else {
        return this.taskHaveToDO;
      }
    },
  },
}).mount("#app");
