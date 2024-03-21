import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts/1";

interface Todo {
  id: number;
  title: string;
body: string;

}

axios.get(url).then((response) => {
  const todo = response.data as Todo

  const id = todo.id
  const title = todo.title
  const body = todo.body

  logTodo(id, title, body)

});


const logTodo = (id: number, title: string, body: string) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Has a body of: ${body}
  `);
}
