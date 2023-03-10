  const form = document.querySelector('form');
  const name = document.querySelector('#name');
  const email = document.querySelector('#email');
  const phone = document.querySelector('#phone');
  const gender = document.querySelector('#gender');
  const dob = document.querySelector('#dob');
  const program = document.querySelector('#program');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!name.value || !email.value || !phone.value || gender.value === '' || !dob.value || program.value === '') {
      alert('Please fill out all fields.');
    } else {
      form.submit();
    }
  });

