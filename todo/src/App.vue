<template>
  <div id="app">
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <input
          class="new-todo"
          autofocus=""
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodoRef"
          @keyup.enter="addTodo"
        />
      </header>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox" v-model="allDoneRef"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list" v-for="item in filteredTodoRef" :key="item.id">
          <li class="todo" :class="{ editing: editingTodoRef === item }">
            <div class="view">
              <input class="toggle" type="checkbox" v-model="item.completed" />
              <label @dblclick="editing(item)">{{ item.title }}</label>
              <button class="destroy" @click="delTodo(item)"></button>
            </div>
            <input
              class="edit"
              type="text"
              v-model="item.title"
              @blur="doneEdit(item)"
              @keyup.enter="doneEdit(item)"
              @keyup.esc="escapeEdit(item)"
            />
          </li>
        </ul>
      </section>
      <footer class="footer">
        <span class="todo-count">
          <strong>{{ leftTodoRef }}</strong>
          <span>item{{ leftTodoRef === 1 ? "" : "s" }} left</span>
        </span>
        <ul class="filters">
          <li>
            <a href="#/all" :class="{ selected: selectRef === 'all' }">All</a>
          </li>
          <li>
            <a href="#/active" :class="{ selected: selectRef === 'active' }"
              >Active</a
            >
          </li>
          <li>
            <a
              href="#/completed"
              :class="{ selected: selectRef === 'completed' }"
              >Completed</a
            >
          </li>
        </ul>
        <button class="clear-completed" v-show="clearCompletedRef > 0" @click="clearCompleted">
          Clear completed
        </button>
      </footer>
    </section>
  </div>
  
</template>

<script>
import useTodoList from "./composition/useTodoList";
import useNewTodo from "./composition/useNewTodo";
import filterTodo from "./composition/filterTodo";
import useEditingTodo from "./composition/useEditingTodo";
import removeTodo from "./composition/removeTodo";
export default {
  setup() {
    const { todoListRef } = useTodoList();
    return {
      ...useNewTodo(todoListRef),
      ...filterTodo(todoListRef),
      ...useEditingTodo(todoListRef),
      ...removeTodo(todoListRef)
    };
  },
};
</script>
