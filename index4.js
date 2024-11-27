function fetchPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(function(response) {
        return response.json(); 
      })
      .then(function(posts) {
        var postLista = document.getElementById('post-lista'); 
        for (var i = 0; i < posts.length; i++) 
            
            {
          var listaItem = document.createElement('li'); 
          listaItem.textContent = posts[i].title; 

          
          postLista.appendChild(listaItem); 
        }
      });
  }
  
  document.addEventListener('DOMContentLoaded', fetchPosts);
  