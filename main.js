const peliculas = [
    {
        id: 1,
        titulo: " Fantasía",
        autor: " Disney",
        genero: " Fantasía, Infantil",
        año: 1992,
        resena:
            " Este filme estrenado en 1940, representa el experimento más audaz de Disney hasta la fecha. En el mismo se plasma la visión de Disney al mezclar la imaginación animada con la música clásica. Lo que había comenzado como un vehículo para mejorar la carrera de Mickey Mouse, se ha convertido en todo un clásico de la animación.",
        calificacion: 3.9,
        image: "./src/Images/fantasia.jpeg",
    },
    {
        id: 2,
        titulo: " Encanto",
        autor: " Disney",
        genero: " Animación, Aventura, Comedia",
        año: 2021,
        resena:
            " Encanto sigue a una joven llamada Mirabel que vive en una mágica casa en las montañas de Colombia. La película cuenta la historia de su familia, todos dotados de habilidades mágicas únicas, excepto ella. Cuando la magia que protege su hogar corre peligro, Mirabel deberá descubrir su propósito especial y salvar a su familia.",
        calificacion: 4.8,
        image: "./src/Images/encanto.jpeg",
    },
    {
        id: 3,
        titulo: " Moana",
        autor: " Disney",
        genero: " Animación, Aventura, Comedia musical",
        año: 2016,
        resena:
            "Moana es una joven navegante que se embarca en una audaz aventura en el océano para salvar a su pueblo. En su viaje, se une al semidiós Maui y juntos enfrentan peligrosas criaturas y desafíos marinos mientras buscan restaurar el corazón de Te Fiti y devolver la vida a su isla.",
        calificacion: 4.9,
        image: "./src/Images/Moana.webp",
    },
    {
        id: 4,
        titulo: " Frozen",
        autor: " Disney",
        genero: " Animación, Aventura, Comedia musical",
        año: 2013,
        resena:
            " Frozen es una película de animación que cuenta la historia de dos hermanas, Elsa y Anna, y su aventura para salvar su reino de un invierno eterno. Elsa, la hermana mayor, tiene el poder de controlar el hielo y la nieve, pero sus poderes se descontrolan, lo que sumerge al reino en un invierno perpetuo. Anna, junto con un montañero llamado Kristoff, su reno Sven y un muñeco de nieve encantado llamado Olaf, se embarcan en un viaje para encontrar a Elsa y deshacer el hechizo. La película es conocida por su emotiva historia, sus personajes memorables y su icónica banda sonora.",
        calificacion: 4.7,
        image: "./src/Images/frozen.avif",
    },
    {
        id: 5,
        titulo: " La princesa y el sapo",
        autor: " Disney",
        genero: " Animación, Aventura, Comedia musical",
        año: 2009,
        resena:
            " La princesa y el sapo es una historia de cuento de hadas ambientada en la ciudad de Nueva Orleans durante la década de 1920. Sigue a Tiana, una joven camarera que sueña con abrir su propio restaurante, y a un príncipe convertido en sapo por un malvado brujo. Juntos, emprenden un viaje para deshacer el hechizo y encontrar el amor verdadero.",
        calificacion: 4.9,
        image: "./src/Images/la-princesa-y-el-sapo.jpg",
    },
    {
        id: 6,
        titulo: " Enredados",
        autor: " Disney",
        genero: " Animación, Aventura, Comedia musical",
        año: 2010,
        resena:
            " Enredados cuenta la historia de Rapunzel, una princesa con un largo cabello mágico que ha sido encerrada en una torre por una malvada bruja. Cuando conoce a Flynn Rider, un ladrón encantador, ambos se embarcan en una aventura llena de acción, romance y autodescubrimiento.",
        calificacion: 4.8,
        image: "./src/Images/enredados.jpg",
    },
];

function mostrarPeliculas(peliculas_para_mostrar) {
    const listadePeliculas = document.getElementById("listadePeliculas");
    listadePeliculas.innerHTML = "";

    if (peliculas_para_mostrar.length === 0) {
        listadePeliculas.innerHTML = "<p>No se encontraron resultados</p>";
    } else {
        peliculas_para_mostrar.forEach((pelicula) => {
            const peliculaCard = `
            <div class="col-md-4 mb-4">
            <div class="card">
    <img src="${pelicula.image}" class="card-img-top" alt="${pelicula.titulo}">
    <div class="card-body">
        <h5 class="card-title" style="text-align: center;"><strong>${pelicula.titulo}</strong></h5>
        <h6 class="card-subtitle" style="text-align: left;">${pelicula.resena}</h6>
        <p class="card-text"><strong>Año: </strong> ${pelicula.año}</p>
        <p class="card-text"><strong>Género: </strong> ${pelicula.genero}</p>
        <p class="card-text"><strong>Calificación: </strong> ${pelicula.calificacion}</p>
        <button type="button" class="btn btn-primary">Detalles</button>
    </div>
</div>
            `;
            listadePeliculas.innerHTML += peliculaCard;
        });
    }
}

// Funcion para buscar las peliculas
function busquedaPelicula(query) {
    const terminoBusqueda = query.trim().toLowerCase();

    // Filtrar
    const filtroPelicula = peliculas.filter((pelicula) => {
        return (
            pelicula.titulo.toLowerCase().includes(terminoBusqueda) ||
            pelicula.autor.toLowerCase().includes(terminoBusqueda) ||
            String(pelicula.año).includes(terminoBusqueda)
        );
    });

    // Mostrar las peliculas filtradas
    mostrarPeliculas(filtroPelicula);
}

document.addEventListener("DOMContentLoaded", () => {
    mostrarPeliculas(peliculas);
});

const searchInput = document.getElementById("busqueda");
searchInput.addEventListener("input", () => {
    busquedaPelicula(busqueda.value);
});
