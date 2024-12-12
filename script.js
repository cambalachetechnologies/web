document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger");
    const menuOverlay = document.getElementById("menu-overlay");
    const closeBtn = document.getElementById("close-btn");
  
    // Función para abrir el menú
    burger.addEventListener("click", () => {
      menuOverlay.style.display = "flex";
    });
  
    // Función para cerrar el menú
    closeBtn.addEventListener("click", () => {
      menuOverlay.style.display = "none";
    });
  
    // Cerrar el menú si el usuario hace clic fuera de la caja del menú
    menuOverlay.addEventListener("click", (e) => {
      if (e.target === menuOverlay) {
        menuOverlay.style.display = "none";
      }
    });
  });
  
// Función para manejar cada dropdown de manera independiente
function handleDropdownInteraction(dropdownSelector, textWrapperSelector) {
  const textWrapper = document.querySelector(textWrapperSelector);
  const dropdown = document.querySelector(dropdownSelector);
  
  if (!textWrapper || !dropdown) return; // Asegurarse de que los elementos existen
  
  let timeout;

  // Mostrar el submenú al pasar el mouse sobre el text-wrapper
  textWrapper.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // Limpiar cualquier temporizador previo
    dropdown.classList.add('visible'); // Mostrar el submenú
  });

  // Mantener el submenú abierto cuando el mouse esté sobre él
  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // Evitar que se oculte mientras el mouse está encima
  });

  // Ocultar el submenú con un retraso al salir del área interactiva
  textWrapper.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdown.classList.remove('visible'); // Ocultar el submenú
    }, 2000); // Tiempo en milisegundos (2 segundos)
  });

  dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdown.classList.remove('visible'); // Ocultar el submenú
    }, 2000); // Tiempo en milisegundos (2 segundos)
  });
}

// Llamar a la función para cada par text-wrapper y dropdown
handleDropdownInteraction('.inicio .drop-down', '.inicio .text-wrapper-87');
handleDropdownInteraction('.sobrenosotros .drop-down', '.sobrenosotros .text-wrapper-61');
handleDropdownInteraction('.servicios .drop-down', '.servicios .text-wrapper-82');
handleDropdownInteraction('.industrias-cg .drop-down', '.industrias-cg .text-wrapper-52');
handleDropdownInteraction('.notavitalcan .drop-down', '.notavitalcan .text-weapper-95');
handleDropdownInteraction('.text-weapper-95 .drop-down', '.text-weapper-95');
handleDropdownInteraction('.contacto .drop-down', '.contacto .text-weapper-56');


// Función para manejar cada dropdown de manera independiente
function handleDropdownInteraction(dropdownSelector, textWrapperSelector) {
  const textWrapper = document.querySelector(textWrapperSelector);
  const dropdown = document.querySelector(dropdownSelector);
  
  if (!textWrapper || !dropdown) return; // Asegurarse de que los elementos existen
  
  let timeout;

  // Mostrar el submenú al pasar el mouse sobre el text-wrapper
  textWrapper.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // Limpiar cualquier temporizador previo
    dropdown.classList.add('visible'); // Mostrar el submenú
  });

  // Mantener el submenú abierto cuando el mouse esté sobre él
  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // Evitar que se oculte mientras el mouse está encima
  });

  // Ocultar el submenú con un retraso al salir del área interactiva
  textWrapper.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdown.classList.remove('visible'); // Ocultar el submenú
    }, 2000); // Tiempo en milisegundos (2 segundos)
  });

  dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdown.classList.remove('visible'); // Ocultar el submenú
    }, 2000); // Tiempo en milisegundos (2 segundos)
  });
}

// Llamar a la función para cada par text-wrapper y dropdown
handleDropdownInteraction('.sobre-nosotros .drop-down', '.sobre-nosotros .text-wrapper-61');

// Sincronizar eventos de hover entre el contenedor y el dropdown
document.querySelectorAll('.contacto .dropdown-container').forEach(container => {
  let timeout;

  // Mantener visible mientras el mouse esté sobre el contenedor
  container.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
    const dropdown = container.querySelector('.drop-down');
    dropdown.classList.add('visible');
  });

  // Retraso antes de ocultar el menú
  container.addEventListener('mouseleave', () => {
    const dropdown = container.querySelector('.drop-down');
    timeout = setTimeout(() => {
      dropdown.classList.remove('visible');
    }, 500); // Retraso de 0.5 segundos
  });
});

// Llamar a la función para la sección novedades
handleDropdownInteraction('.novedades .drop-down', '.novedades .text-wrapper-85');

// Función para manejar el dropdown
function handleDropdownInteraction(dropdownSelector, textWrapperSelector) {
  const textWrapper = document.querySelector(textWrapperSelector);
  const dropdown = document.querySelector(dropdownSelector);
  
  if (!textWrapper || !dropdown) return; // Asegurar que los elementos existen
  
  let timeout;

  // Mostrar el submenú al pasar el mouse sobre el text-wrapper
  textWrapper.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // Limpiar cualquier temporizador previo
    dropdown.style.opacity = '1'; // Mostrar el submenú
    dropdown.style.pointerEvents = 'auto'; // Habilitar interactividad
  });

  // Mantener el submenú abierto cuando el mouse esté sobre él
  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // Evitar que se oculte mientras el mouse está encima
  });

  // Ocultar el submenú con un retraso al salir del área interactiva
  textWrapper.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdown.style.opacity = '0'; // Ocultar el submenú
      dropdown.style.pointerEvents = 'none'; // Deshabilitar interactividad
    }, 2000); // Tiempo en milisegundos (2 segundos)
  });

  dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdown.style.opacity = '0'; // Ocultar el submenú
      dropdown.style.pointerEvents = 'none'; // Deshabilitar interactividad
    }, 2000); // Tiempo en milisegundos (2 segundos)
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const textWrapper = document.querySelector('.notavitalcan .text-wrapper-95');
  const dropdown = document.querySelector('.notavitalcan .drop-down');
  
  if (!textWrapper || !dropdown) return; // Verificar si los elementos existen

  let timeout;

  // Mostrar el submenú al pasar el mouse sobre el contenedor
  textWrapper.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // Limpiar cualquier temporizador previo
    dropdown.classList.add('visible'); // Hacer visible el submenú
  });

  // Mantener el submenú abierto cuando el mouse esté sobre él
  dropdown.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // Prevenir que se oculte mientras el mouse está sobre el submenú
  });

  // Ocultar el submenú con un retraso al salir del área interactiva
  textWrapper.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdown.classList.remove('visible'); // Ocultar el submenú
    }, 2000); // Tiempo en milisegundos (2 segundos)
  });

  dropdown.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdown.classList.remove('visible'); // Ocultar el submenú
    }, 2000); // Tiempo en milisegundos (2 segundos)
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const dropdownContainer = document.querySelector('.industrias-hc .dropdown-container');
  const dropdownMenu = document.querySelector('.industrias-hc .drop-down');

  if (!dropdownContainer || !dropdownMenu) return;

  let timeout;

  // Mostrar el submenú al pasar el mouse
  dropdownContainer.addEventListener('mouseenter', () => {
    clearTimeout(timeout); // Limpiar temporizador anterior
    dropdownMenu.classList.add('visible');
  });

  // Mantener el submenú visible mientras el mouse está sobre él
  dropdownMenu.addEventListener('mouseenter', () => {
    clearTimeout(timeout);
  });

  // Ocultar el submenú al salir del área interactiva con retraso
  dropdownContainer.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdownMenu.classList.remove('visible');
    }, 2000); // Tiempo de espera antes de ocultar (2 segundos)
  });

  dropdownMenu.addEventListener('mouseleave', () => {
    timeout = setTimeout(() => {
      dropdownMenu.classList.remove('visible');
    }, 2000);
  });
});





