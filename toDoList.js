let userInput = prompt("What would you like to do?");
const todos = [];

while (userInput !== "quit" && userInput !== "q") {
    if (userInput === 'list') {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log("************")
    }
    else if (userInput === "new") {
        const newTodo = prompt("What would you like to add?")
        todos.push(newTodo);
        console.log(`${newTodo} added to list!`)
    }

    else if (userInput === "delete") {
        let deleteTodo = parseInt(prompt("What would you like to delete?"));
        while (deleteTodo > userInput.length) {
            deleteTodo = parseInt(prompt("Enter correct index"));
        }
        console.log("************")
        if (!Number.isNaN(deleteTodo)) {
            const deleted = todos.splice(deleteTodo, 1);
            console.log(`Deleted ${deleted[0]}`);
        } else {
            console.log("Unknown index");
        }
    }
    userInput = prompt("What would you like to do?");
}
console.log("You quit!");
