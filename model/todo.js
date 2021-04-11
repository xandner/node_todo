const fs = require("fs");
const path = require("path");

const rootDir = require("../utils/path");

const filePath = path.join(rootDir, "data", "todos.json");

class Todo {
    constructor(id, text, completed = false) {
        this.id = id;
        this.text = text;
        this.completed = completed;
    }

    save(callback) {
        fs.readFile(filePath, (err, fileContent) => {
            // if (err) return [];
            const todos = JSON.parse(fileContent);
            todos.push(this);

            fs.writeFile(filePath, JSON.stringify(todos), (err) => {
                if (err) callback(err);
                else return callback([]);
            });
        });
    }

    static fetchAll(callback) {
        fs.readFile(filePath, (err, fileContent) => {
            if (err) return [];
            const todos = JSON.parse(fileContent);
            callback(todos);
        });
    }
    static deleteTodo(id,callback){
        fs.readFile(filePath,(err,fileContent)=>{
            if (err)console.log(err);
            const todos=JSON.parse(fileContent)
            // console.log(todos);
            const filtered=todos.filter(t =>t.id != id)
            console.log('filtered data');
            console.log(filtered);
            fs.writeFile(filePath,JSON.stringify(filtered),(err)=>{
                callback (err)
            })
        })
    }
    static setTodoToComplete
}

module.exports = Todo;
