async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    // 1. Obtener las publicaciones del usuario 1
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    // Verificar si la petición fue exitosa
    if (!respuesta.ok) {
      throw new Error("Error al obtener las publicaciones");
    }
    // 2. Convertir la respuesta a JSON
    const posts = await respuesta.json();
    // 3. Mostrar los títulos usando map, join e innerHTML
    lista.innerHTML = posts.map((post) => `<li>${post.title}</li>`).join("");
  } catch (error) {
    // 4. Mostrar un mensaje si ocurre un error
    lista.innerHTML = "<li>No se pudo cargar la información</li>";
  }
}

mostrarPosts();
