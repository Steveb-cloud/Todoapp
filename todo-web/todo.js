const form = document.getElementById("form-tarea");
const tabla = document.getElementById("tabla-tareas").getElementsByTagName('tbody')[0];
let contador = 1;

// Cargar tareas existentes al iniciar
window.onload = async () => {
    try {
        const res = await fetch("http://localhost:3000/todos");
        const tareas = await res.json();

        // Mostrar en la consola los todos obtenidos del back-end
        console.log("Tareas cargadas desde el servidor:", tareas);

        // Agregar las tareas a la tabla
        tareas.forEach(t => agregarFila(t.name, t.description)); 
    } catch (error) {
        console.error("Error al cargar las tareas:", error);
    }
};

// Al enviar el formulario
form.addEventListener("submit", async function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();

    if (nombre && descripcion) {
        const nuevaTarea = { name: nombre, description: descripcion };

        try {
            const res = await fetch("http://localhost:3000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(nuevaTarea)
            });

            if (res.ok) {
                const tareaCreada = await res.json();
                agregarFila(tareaCreada.name, tareaCreada.description);
                form.reset();
            } else {
                alert("Error al agregar tarea");
            }
        } catch (error) {
            alert("Error de red al agregar tarea");
            console.error("Error de red:", error);
        }
    }
});

// Agrega una fila a la tabla
function agregarFila(nombre, descripcion) {
    const fila = tabla.insertRow();
    fila.innerHTML = `
        <td>${contador++}</td>
        <td>${nombre}</td>
        <td>${descripcion}</td>
    `;
}
