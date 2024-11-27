let tareas = ['Comprar leche', 'Estudiar JavaScript', 'Hacer ejercicio'];

function crearListaDeTareas() {
    const container = document.getElementById('container');
    container.innerHTML = ''; 

    
    tareas.map(function(tarea, index) {
        const elemento = document.createElement('div');
        elemento.innerHTML = tarea;

        const eliminar = document.createElement('span');
        eliminar.style.color = 'red';  
        eliminar.innerHTML = ' Eliminar'; 
        
        eliminar.onclick = function() {
            eliminarTarea(index);
        };
        
        elemento.appendChild(eliminar);
        container.appendChild(elemento);
    });
}

function eliminarTarea(index) {
    tareas = tareas.filter(function(tarea, i) {
        return i !== index; 
    });
    crearListaDeTareas();
}


crearListaDeTareas();
