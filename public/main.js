// main.js
const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

update.addEventListener('click', _ => {
    fetch('/quotes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Frank',
        quote: 'Well, I don’t know how many years on this Earth I got left. I’m gonna get real weird with it. '
      })
    })
    .then(res => {
        if (res.ok) return res.json()
      })
    .then(response => {
        console.log(response)
        window.location.reload(true)
    })
  })

  deleteButton.addEventListener('click', _ => {
    fetch('/quotes', {
        method: 'delete',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Frank'
        })
      })
        .then(res => {
          if (res.ok) return res.json()
        })
        .then(response => {
            if (response === 'No quote to delete') {
              messageDiv.textContent = 'No Frank quote to delete'
            } else {
              window.location.reload(true)
            }
          })
        .catch(error => console.error(error)) 
      })