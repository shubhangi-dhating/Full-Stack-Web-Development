function addPost() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (title === "" || content === "") {
    alert("Please fill all fields");
    return;
  }

  const postDiv = document.createElement("div");
  postDiv.classList.add("post");

  postDiv.innerHTML = `
    <h3>${title}</h3>
    <p>${content}</p>
  `;

  document.getElementById("posts").prepend(postDiv);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";
}
