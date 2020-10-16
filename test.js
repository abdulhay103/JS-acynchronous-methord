const name = document.getElementById("test");
const request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  //   console.log(request, request.readyState);
  if (request.readyState === 4) {
    console.log(request.responseText);
    // const title = re
    // name.request.
  }
});
request.open("GET", "https://jsonplaceholder.typicode.com/todos/1");
request.send();
