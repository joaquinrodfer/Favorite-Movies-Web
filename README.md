# Favorite Movies Web
---

### Descripción ###

Este proyecto es una página web que muestra una base de datos de películas favoritas. La base de datos está alojada en Notion y se muestra en la página web utilizando su API. La página web está desarrollada con React. La página web está deployada en Render y el enlace es el siguiente: [Favorite Movies Web](https://favorite-movies-website.onrender.com/). Puede dar ciertos problemas al cargar los datos de la API, ya que el servidor también está alojado en Render y al ser gratuito se apaga cuando no se está utilizando. Si esto ocurre, simplemente hay que recargar la página y esperar unos segundos a que el servidor se encienda.

Inicialmente, planeaba realizar el fetching de los datos de la base de datos desde la propia página web, pero Notion no permite realizar peticiones desde el cliente, por lo que tuve que realizar un servidor que hiciera las peticiones a Notion y devolviera los datos a la página web. El servidor está desarrollado con Node.js y Express y el enlace a su repositorio es el siguiente: [Favorite Movies API repo](https://github.com/joaquinrodfer/Notion-Movies-API).

A continuación, muestro una lista de features que me gustaría implementar con el paso del tiempo:
- [ ] Implementar un buscador de películas.
- [ ] Implementar un filtrado de películas por género.
- [x] Implementar un filtrado de películas por valoración
- [ ] Implementar un sistema de votación de películas para que todo el que visite la página pueda dar su opinión.
- [ ] Implementar un sistema que me permita introducir nuevas películas desde la propia página web.

---
### Créditos

Este proyecto ha sido inspirado por el [vídeo de Midudev](https://youtu.be/UZarokfByTs) en el que explica sus métodos para organizarse y, posteriormente, muestra una base de datos de Notion y cómo utiliza su API para mostrarla en su página web.