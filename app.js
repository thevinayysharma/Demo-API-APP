var root = document.getElementById('root');

var logo = document.createElement('img');
logo.src = "https://raw.githubusercontent.com/taniarascia/sandbox/master/ghibli/logo.png";

var container = document.createElement('div');
container.setAttribute('class', 'container');

root.appendChild(logo);
root.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true);

request.onload = function showMovie () {     //processing

  var data = JSON.parse(this.response);

  if (request.status >= 200 && request.status < 400) {

    data.forEach(movie => {
      var card = document.createElement('div');
      card.setAttribute('class', 'card');

      var h1 = document.createElement('h1');
      h1.textContent = movie.title;

      var p = document.createElement('p');
      movie.description = movie.description.substring(0, 300);
      p.textContent = `${movie.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });

  } else {
    var errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Oops!, it's not working!`;
    root.appendChild(errorMessage);
  }
}

request.send();



