function time() {
      const hour = new Date();
      document.querySelector(".marquee").innerHTML = hour.toLocaleTimeString();
      setTimeout(function() {time()}, 1000);
    };
    
    time(); // Llamar a la función para iniciarla inmediatamente