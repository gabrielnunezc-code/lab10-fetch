async function mostrarPosts() {
  const lista = document.querySelector("#posts");
  try {
    // 1. Obtener las publicaciones del usuario 1
    const respuesta = await fetch(
      "https://jsonplaceholder.typicode.com/posts?userId=1"
    );
    // 2. Convierte la respuesta a JSON
    // 3. Muestra los títulos en la lista con map, join e innerHTML
  } catch (error) {
    // 4. Muestra el mensaje "No se pudo cargar la información"
  }
}

mostrarPosts();
