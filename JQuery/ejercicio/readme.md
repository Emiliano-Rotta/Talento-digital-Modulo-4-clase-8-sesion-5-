Consigna:

Crea una página web que gestione una lista de tareas utilizando jQuery. La página debe incluir lo siguiente:

Un encabezado con el título "Mis Tareas".
Una lista (<ul>) con al menos 3 tareas iniciales.
Tres botones con las siguientes funcionalidades:
Botón 1: "Agregar Tarea". Al hacer clic en este botón, se debe agregar una nueva tarea al final de la lista. La tarea agregada debe tener el texto "Nueva tarea: Leer un libro".
Botón 2: "Cambiar Texto de una Tarea". Al hacer clic en este botón, se debe modificar el texto de la segunda tarea en la lista por "Tarea modificada: Llamar a María".
Botón 3: "Eliminar Última Tarea". Al hacer clic en este botón, se debe eliminar la última tarea de la lista.
Cada vez que se realice una acción (agregar, modificar o eliminar una tarea), se debe mostrar en la consola el número total de tareas actuales.


Este es el html 

<body>
    <h1>Mis Tareas</h1>
    <ul id="listaTareas">
        <li>Tarea 1: Comprar pan</li>
        <li>Tarea 2: Llamar a Juan</li>
        <li>Tarea 3: Terminar proyecto</li>
    </ul>
    <button id="btn1">Agregar Tarea</button>
    <button id="btn2">Cambiar Texto de una Tarea</button>
    <button id="btn3">Eliminar Última Tarea</button>

</body>