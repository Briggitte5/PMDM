window.onload = () => {
    document.getElementById("submitCiudad").addEventListener('click', tiempo);
    
};

function tiempo (tem){

    tem.preventDefault();
    var minombre = document.getElementById("idNombre").value;
    var miciudad = document.getElementById("idCiudad").value;
    var mipais = document.getElementById("idPais").value;


    if( minombre.length > 0 && mipais.length > 0 && miciudad.length > 0 ) {

    document.getElementById('ciudad').innerHTML = miciudad;
    document.getElementById('pais').innerHTML = mipais;
    document.getElementById('name').innerHTML = minombre;
    consultaAPI(miciudad, mipais); 

    }


    if( minombre.length == 0 || mipais.length == 0 || miciudad.length == 0 ) {
          
        Swal.fire({
          title: 'Faltan datos!',
          text: 'Necesita agregar todos los campos',
          icon: 'error',
          confirmButtonText: 'X'
        })
    }
}


function consultaAPI (idciudad, idpais)
{
    const appId ='5bad9f73e5cc1712d36879c2d9809f9f';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${idciudad},${idpais}&appid=${appId}&lang=es`;

    fetch(url)
    .then((respuesta) => {
        return respuesta.json();
    })
    .then(datos => {
        verTiempo(datos);
        console.log(datos);
    })
    .catch((error) => {
        console.error(error);
    });  
}

function verTiempo(data) {
  
    var celcius = Math.round(parseFloat(data.main.temp) - 273.15);
    var max = Math.round(parseFloat(data.main.temp_max) - 273.15);
    var min = Math.round(parseFloat(data.main.temp_min) - 273.15);

    document.getElementById('tiempo').innerHTML = '<p> El tiempo que hace es '+celcius+'. Las maximas son de '+max+' y las minimas de '+min+'</p>';

}

