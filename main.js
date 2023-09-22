// librerias: SeewtAlert2 y Semantic UI

// Arrow function
// evento onclick
const mostrarInfo = () => {
   const { value: nombre } = document.getElementById("nombre");
   const { value: edad } = document.getElementById("edad");
   const { value: genero } = document.getElementById("genero");
   const { value: pais } = document.getElementById("pais");

   const mensaje = `NOMBRE: ${nombre}\n<br>
   EDAD: ${edad}\n<br>
   GENERO: ${genero}\n<br>
   PAIS: ${pais}`;

   Swal.fire({
      title: 'Información del Usuario',
      html: mensaje,
      icon: 'info',
      confirmButtonText: 'Aceptar'
   });
};


// condicionales if + else if.
// objetos
// Dom
const altitudConsejos = [
   {
      rango: [0, 999],
      mensaje: "No se requieren precauciones especiales para altitudes por debajo de 1000 metros."
   },
   {
      rango: [1000, 1999],
      mensaje: "Algunas personas pueden experimentar leves síntomas de mal de altura. Mantente hidratado y descansa si es necesario."
   },
   {
      rango: [2000, 3999],
      mensaje: "El mal de altura es posible. Bebe suficiente agua, evita el esfuerzo intenso y asciende gradualmente."
   },
   {
      rango: [4000, 6000],
      mensaje: "El mal de altura es común. Asciende con cuidado, descansa regularmente y mantente atento a los síntomas graves."
   },
   {
      rango: [6001, Infinity],
      mensaje: "La altitud máxima es de 6000 metros."
   }
];
const mostrarConsejos = () => {
   const altitud = parseFloat(document.getElementById("altitud").value);

   const consejo = altitudConsejos.find(({ rango }) => altitud >= rango[0] && altitud <= rango[1]);

   const mensaje = consejo ? consejo.mensaje : "Altitud no válida";

   alert(mensaje);
};


// objetos
const rutasAlAconcagua = [
   {
      nombre: "Ruta Normal desde Plaza de Mulas",
      altitudMaxima: 1000,
      descripcion: "Descripción de la ruta Normal..."
   },
   {
      nombre: "Ruta Agila del sur",
      altitudMaxima: 2000,
      descripcion: "Descripcion de la ruta Agila del sur..."
   },
   {
      nombre: "Ruta del Glaciar de los Polacos",
      altitudMaxima: 3000,
      descripcion: "Descripción de la ruta del Glaciar de los Polacos..."
   },
   {
      nombre: "Ruta de los Porteadores",
      altitudMaxima: 4000,
      descripcion: "Descripción de la ruta de los Porteadores..."
   },
   {
      nombre: "Ruta del Valle de Vacas",
      altitudMaxima: 5000,
      descripcion: "Descripción de la ruta del Valle de Vacas..."
   },
   {
      nombre: "Ruta de los Refugios",
      altitudMaxima: 6000,
      descripcion: "Descripción de la ruta de los Refugios..."
   }
];
const mostrarRuta = () => {
   const altitud = parseFloat(document.getElementById("altitud").value);

   const rutaRecomendada = rutasAlAconcagua.find(ruta => altitud <= ruta.altitudMaxima) || { nombre: "No encontrada", descripcion: "No se encontró una ruta recomendada para la altitud ingresada." };

   const { nombre, descripcion } = rutaRecomendada;

   alert(`Ruta Recomendada: ${nombre}\nDescripción: ${descripcion}`);
};


// arrays
const precaucionesSegunAltitud = [
   "No se requieren precauciones especiales para altitudes por debajo de 1000 metros.",
   "Algunas personas pueden experimentar leves síntomas de mal de altura. Mantente hidratado y descansa si es necesario.",
   "El mal de altura es posible. Bebe suficiente agua, evita el esfuerzo intenso y asciende gradualmente.",
   "El mal de altura es común. Asciende con cuidado, descansa regularmente y mantente atento a los síntomas graves.",
   "Solo se recomienda esta altura para alpinistas profesionales."
];

// Dom
const mostrarRutaYPrecauciones = () => {
   const altitud = parseFloat(document.getElementById("altitud").value);
   const rutaRecomendada = rutasAlAconcagua.find(ruta => altitud <= ruta.altitudMaxima);
   const indicePrecaucion = Math.min(Math.floor(altitud / 1000), precaucionesSegunAltitud.length - 1);
   const resultadoElement = document.getElementById("resultado");
   if (rutaRecomendada) {
      const resultado = `
         <p>Ruta Recomendada: ${rutaRecomendada.nombre}</p>
         <p>Descripción: ${rutaRecomendada.descripcion}</p>
         <p>Precauciones: ${precaucionesSegunAltitud[indicePrecaucion]}</p>
      `;
      resultadoElement.innerHTML = resultado;
   } else {
      resultadoElement.textContent = "No se encontró una ruta recomendada para la altitud ingresada. Altitud máxima 6000m.";
   }
};


// Evento Click
// storaje
const contenedor = document.createElement("div");
contenedor.className = "ui segment";

const botonReiniciar = document.createElement("button");
botonReiniciar.textContent = "Reiniciar Programa";
botonReiniciar.className = "ui button primary";

botonReiniciar.addEventListener("click", () => {
   Swal.fire({
      title: 'Reiniciar Programa',
      text: '¿Estás seguro de que deseas reiniciar el programa?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, reiniciar',
      cancelButtonText: 'Cancelar'
   }).then((result) => {
      if (result.isConfirmed) {
         let contador = localStorage.getItem("contador");
         if (contador === null) {
            contador = 1;
         } else {
            contador = parseInt(contador) + 1;
         }
         localStorage.setItem("contador", contador);

         Swal.fire('Reiniciado', 'La página se ha reiniciado correctamente.', 'success');
         location.reload();
      }
   });
});
contenedor.appendChild(botonReiniciar);
document.body.appendChild(contenedor);


// Local Storage
const guardarDatosEnLocalStorage = () => {
   const nombre = document.getElementById("nombre").value;
   const edad = document.getElementById("edad").value;
   const genero = document.getElementById("genero").value;
   const pais = document.getElementById("pais").value;

   const datosUsuario = {
      nombre,
      edad,
      genero,
      pais,
   };

   localStorage.setItem("datosUsuario", JSON.stringify(datosUsuario));
};

document.getElementById("botonGuardar").addEventListener("click", guardarDatosEnLocalStorage);
const mostrarDatosGuardados = () => {
   const nombreGuardadoElement = document.getElementById("nombreGuardado");
   const edadGuardadaElement = document.getElementById("edadGuardada");
   const generoGuardadoElement = document.getElementById("generoGuardado");
   const paisGuardadoElement = document.getElementById("paisGuardado");

   // Obtén los datos del LocalStorage
   const datosUsuarioJSON = localStorage.getItem("datosUsuario");
   if (datosUsuarioJSON) {
      const datosUsuario = JSON.parse(datosUsuarioJSON);

      // Actualiza los elementos en el div
      nombreGuardadoElement.textContent = datosUsuario.nombre;
      edadGuardadaElement.textContent = datosUsuario.edad;
      generoGuardadoElement.textContent = datosUsuario.genero;
      paisGuardadoElement.textContent = datosUsuario.pais;
   }
};

// Llama a esta función para mostrar los datos almacenados al cargar la página
mostrarDatosGuardados();


//fetch
//API externa
const obtenerUsuarios = () => {
   const url = 'https://jsonplaceholder.typicode.com/users';

   return fetch(url)
      .then(response => {
         if (!response.ok) {
            throw new Error('Error en la solicitud');
         }
         return response.json();
      })
      .then(data => {
         return data;
      })
      .catch(error => {
         console.error('Error:', error);
         throw error;
      });
};

obtenerUsuarios()
   .then(usuarios => {
      
      const datosUsuariosDiv = document.getElementById('datosUsuarios');

      
      usuarios.forEach((usuario, indice) => {
         
         const usuarioInfo = `Aydunte ${indice + 1}: NOMBRE - ${usuario.name}, EMAIL - ${usuario.email}`;

         const usuarioParrafo = document.createElement('p');
         usuarioParrafo.textContent = usuarioInfo;

         datosUsuariosDiv.appendChild(usuarioParrafo);
      });

      console.log('Usuarios obtenidos:', usuarios);
   })
   .catch(error => {
      console.error('Error al obtener usuarios:', error);
   });



















