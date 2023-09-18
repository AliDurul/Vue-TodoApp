<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
      <div class="todo-item-left" @dblclick="editTodo(todo)">
        <input type="checkbox" v-model="todo.completed" />

        <div
          v-if="!todo.editing"
          class="todo-item-label"
          :class="{ completed: todo.completed }"
        >
          {{ todo.title }}
        </div>
        <input
          v-focus
          v-else
          class="todo-item-edit"
          v-model="todo.title"
          type="text"
          @keyup.enter="doneEdit(todo)"
          @keyup.esc="cancelEdit(todo)"
          @blur="doneEdit(todo)"
        />
      </div>

      <div class="remove-item" @click="removeTodo(index)">&times;</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoList",

  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      beforeEditCache: "",
      todos: [
        {
          id: 1,
          title: "finish vue ",
          completed: false,
          editing: false,
        },
        {
          id: 2,
          title: "Get jon ",
          completed: true,
          editing: false,
        },
      ],
    };
  },
  directives: {
    focus: {
      // directive definition
      inserted: function (el) {
        el.focus();
      },
    },
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) return;

      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        editing: false, 
      });
      this.newTodo = "";
      this.idForTodo += 1;
    },

    removeTodo(index) {
      console.log(index);
      this.todos.splice(index, 1);
    },
    editTodo(todo) {
      this.beforeEditCache = todo.title;
      todo.editing = !todo.editing;
    },
    doneEdit(todo) {
      if (todo.title.trim().length == 0) todo.title = this.beforeEditCache;
      todo.editing = false;
    },
    cancelEdit(todo) {
      todo.title = this.beforeEditCache;
      todo.editing = false;
    },
  },
};
</script>

<style lang="scss">
.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;

  &:focus {
    outline: none;
  }
}

.todo-item {
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.remove-item {
  cursor: pointer;
  margin-left: 14px;
  &:hover {
    color: black;
  }
}

.todo-item-left {
  display: flex;
  align-items: center;
}

.todo-item-label {
  padding: 10px;
  border: 1px solid white;
  margin-left: 12px;
}

.todo-item-edit {
  font-size: 24px;
  color: #2c3e50;
  margin-left: 12px;
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  font-family: Arial, Helvetica, sans-serif;

  &:focus {
    outline: none;
  }
}

.completed {
  text-decoration: line-through;
  color: grey;
}
</style>
