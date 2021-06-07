app.component('todo-item', {
    template:
    /*html*/
    `
    <form @submit.prevent="onSubmit">
        <input type="text" placeholder="Type in your todo here" v-model="newTodo"/>
        <button class="add-btn" type="submit"> Add </button>
    </form>
    `,

    data() {
        return {
            newTodo: "",
            completed: false
        }
    },

    methods: {
        onSubmit() {
            let todo = {
                newTodo: this.newTodo,
                completed: this.completed
            };
            this.$emit("add-todo", todo);
            this.newTodo = "";
        }
    }
})