//const comandos = require('./comandos.json').ComandosGitGithub


//const comandoRenglon = document.getElementsByClassName("comandoRenglon")


let comandos = []


fetch('comandos.json')
    .then((res) => {
        return res.json();
    })
    .then((comandosCargados) => {
        comandos = comandosCargados
        separarComandos(comandos)

    })
    .catch((err) => {
        console.error(err);
    })



//console.log(comandos[0].descripcion)


// Extraemos los datos con ciclo for
let listadoComandos

function separarComandos(comandos) {
    let listado = ""
    for (let i = 0; i < comandos.length; i++) {
        // console.log(comandos[i].categorias)
        // console.log(comandos[i].descripcion)
        // console.log(comandos[i].code)
        listado = listado + `
        <li class="comandoRenglon" data-categoria="${comandos[i].categorias}">
            <div class="li-content">
                <p>${comandos[i].descripcion}</p>
            </div>
            <div class="code">
                <code>$ ${comandos[i].code}</code>
            </div>
        </li>
        `

    }
    document.getElementById("comandoRenglon").innerHTML = listado
}