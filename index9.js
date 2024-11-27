document.getElementById('myForm').onsubmit = function() {
    var title = document.getElementById('title').value;
    var body = document.getElementById('body').value;
  
    var data = 'title=' + title + '&body=' + body + '&userId=1';
  
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
      body: data  
    })
    .then(response => response.json())  
    .then(post => {
      var row = '<tr><td>' + post.id + '</td><td>' + post.title + '</td><td>' + post.body + '</td></tr>';
      document.getElementById('post-lista').innerHTML += row;
    })
    .catch(error => console.log(error));  
  };
  