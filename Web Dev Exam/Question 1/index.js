const list    = document.getElementById('comments-list');
const loading = document.getElementById('loading');
const error   = document.getElementById('error');

fetch('https://jsonplaceholder.typicode.com/comments?_limit=8')
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  })
  .then(comments => {
    loading.classList.add('hidden');
    comments.forEach(comment => {
      const li = document.createElement('li');
      li.innerHTML = `
        <strong>${comment.name}</strong>
        <small>${comment.email}</small>
        <p>${comment.body}</p>
      `;
      list.appendChild(li);
    });
    list.classList.remove('hidden');
  })
  .catch(err => {
    console.error(err);
    loading.classList.add('hidden');
    error.classList.remove('hidden');
  });