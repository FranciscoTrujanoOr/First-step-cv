 
const bandera = document.getElementById('bandera');

bandera.addEventListener('click', (e)=> {
    cambiarIdioma(e.target.parentElement.dataset.lenguaje);
});

const textosCambiar = document.querySelectorAll("[data-section]");

const cambiarIdioma = async idioma=>{
    const requestJson = await fetch(`./lenguages/${idioma}.json`)
    const text = await requestJson.json();
    
    for( const textoCambiar of textosCambiar ){
        const section = textoCambiar.dataset.section;
        const value = textoCambiar.dataset.value;

        textoCambiar.innerHTML = text [section][value];
    }
};