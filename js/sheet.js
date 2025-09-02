const scriptURL = 'https://script.google.com/macros/s/AKfycbz2R-0Bj62MWQwcQp2Kvih59OmtZCrVls0HAGVD_8AveDEZ2ZZjF2jSslauHbDtJECu/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})