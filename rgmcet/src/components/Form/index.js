import './index.css';

const Form = () => {
  function Submit(e) {
    const formEl = document.querySelector('form');
    e.preventDefault();
    console.log('Submitted');

    // Show success message immediately
    let paraEl = document.getElementById('msg-success');
    paraEl.textContent = 'Submitting...';

    const formData = new FormData(formEl);
    const apiUrl =
      'https://script.google.com/macros/s/AKfycbydHOM1rmESCw2rNxqs4IxfyAYkvBL6EWhB5Dw9jyvFkJr3TGos-I-SjygoagbkGqJ72w/exec';
    fetch(apiUrl, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          // Handle non-successful responses (e.g., HTTP status code other than 200)
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        // Update success message after successful submission
        paraEl.textContent = 'Success';
      })
      .catch((error) => {
        console.error('Error:', error);
        // Update error message if request fails
        paraEl.textContent = 'Error submitting the form';
      });
  }

  return (
    <form className="form" onSubmit={(e) => Submit(e)}>
      <div className="form-row">
        <div className="form-group col-md-7">
          <label htmlFor="inputEmail4">Name</label>
          <input type="text" className="form-control" name="Name" />
        </div>
        <div className="form-group col-md-7">
          <label htmlFor="inputEmail4">RedNo</label>
          <input type="text" className="form-control" name="RegNo" />
        </div>
        <div className="form-group col-md-7">
          <label htmlFor="inputEmail4">Email</label>
          <input
            type="email"
            className="form-control"
            id="inputEmail4"
            name="Email"
          />
        </div>
        <div className="form-group col-md-7">
          <label htmlFor="inputPassword4">Phone</label>
          <input type="text" className="form-control" name="Phone" />
        </div>
      </div>
      <p className="text-success" id="msg-success"></p>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
