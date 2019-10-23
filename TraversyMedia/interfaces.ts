// function showToDo(todo: { title: string; text: string }) {
//   console.log('Title is ' + todo.title + ' and text is ' + todo.text);
// }
// var myToDo = { title: 'Hello World', text: 'Bonjour' };
// showToDo(myToDo);

interface Todo {
  title: string;
  text: string;
}
function showToDo(todo: Todo) {
  console.log('Title is ' + todo.title + ' and text is ' + todo.text);
}
var myToDo = { title: 'Hello', text: 'Bonjour' };
showToDo(myToDo);
