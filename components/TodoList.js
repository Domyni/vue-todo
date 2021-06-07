app.component('todo-list', {
    template:
    /*html*/
    `
    <div class="display-todo">
        <h1>Todo List</h1>
        <todo-item @add-todo="addToList"></todo-item>
        <p v-if="list.length === 0"> Looks like your list is empty ...</p>
        <ul>
            <li v-for="(item, index) in list" :key="index" @click.self="isDone(index)" :class="{done: item.completed}"> 
                {{ item.newTodo }}
                <button class="remove-btn" v-if="item.completed" @click="deleteItem(index)"> Remove </button>
            </li>
        </ul>
        <div class="todo-footer">
            <p v-if="list.length !== 0"> Need remove a todo ?, click on the item and select remove.</p>
            <button class="clear-btn" v-if="list.length !== 0" @click="clearList"> Clear List</button>
        <div/>
    </div>
    `,

    data() {
        return {
            list: [],
        }
    },

    methods: {
        addToList(todo) {
            if(todo.newTodo === "") {
                alert("Please fill out todo list before adding!");
                return;
            };
            this.list.push(todo);
        },
        deleteItem(index) {
            this.list.splice(index, 1);
        },
        isDone(index) {
            if (this.list[index].completed === false) {
                this.list[index].completed = true;
            } else {
                this.list[index].completed = false;
            }
        },
        clearList() {
            let isConfirmed = confirm("Confirm clearing all in the list?");
            if (isConfirmed) {
                this.list = [];
                return;
            }
            return;
        }
    }
})
