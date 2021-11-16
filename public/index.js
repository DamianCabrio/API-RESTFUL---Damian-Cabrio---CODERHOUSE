document.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const title = document.getElementById("title").value;
  const price = document.getElementById("price").value;
  const thumbnailEl = document.querySelector("#thumbnail");
  const thumbnail = thumbnailEl.files[0];

  const formData = new FormData();
  formData.append("title", title);
  formData.append("price", price);
  formData.append("thumbnail", thumbnail);

  fetch("http://localhost:8080/api/productos", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      form.reset();
    });
});
