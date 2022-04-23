
    

    const buscarFrase = async () => {
        const res = await fetch("https://api.chucknorris.io/jokes/random");
        console.log(res)
        const frase = await res.json();
        const icono = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVe-yK0oT20UBMsy5emD7zoQo6nAquMOZvHkyD-Wnp&s'
        console.log(frase.value);
        renderizar(frase.value , icono)

        
      };

      let boton = document.querySelector('.boton')
      boton.addEventListener('click' , buscarFrase)

      const renderizar = ( item , img ) => {
          let carta = document.querySelector('.carta')
          carta.innerHTML = `
          <div class="foto">
               <img src="${img}" alt="Chuck Norris">
               <h1>Chuck Norris</h1>
          </div>
          <div class="texto">
               <p>${item}</p>
               <button class="boton" onclick="buscarFrase()">Actualizar</button>
          </div>
          `
      }

      buscarFrase();
       