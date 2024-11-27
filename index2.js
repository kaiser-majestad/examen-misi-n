
const usuarios = [
    { nombre: 'Nelson David ALzate', edad: 25, email: 'alzate@example.com' },
    { nombre: 'Carlos madrid', edad: 30, email: 'carlos@example.com' },
    { nombre: 'arnoby gay', edad: 22, email: 'arnog@example.com' }
  ];
  

  let tablaHTML = '<table>';
  tablaHTML += `
    <tr>
      <th>Nombre</th>
      <th>Edad</th>
      <th>Email</th>
    </tr>
  `;
  
  
  usuarios.map(usuario => {
    tablaHTML += `
      <tr>
        <td>${usuario.nombre}</td>
        <td>${usuario.edad}</td>
        <td>${usuario.email}</td>
      </tr>
    `;
  });
  

  tablaHTML += '</table>';
  

  document.getElementById('tabla-container').innerHTML = tablaHTML;
  