const scriptURL = 'https://script.google.com/macros/s/AKfycbwzzpLRKpx_-C8DDQtUVZhGnrGVuqxIkRCQCt32VRUq5kg-PQbgtcFNhjRfsh8GrC6g/exec'

const form = document.forms['companies-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})