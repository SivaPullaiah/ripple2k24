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
      'https://script.google.com/macros/s/AKfycbxMEvM4i-VZ6ZGXlHEj1LHKa6JAyKRKPNibgvwz-YqNSCvuf0JD51aFBHqneEJmbh563g/exec';
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
    <div className="container">
      <div className="row">
        <div className="why-register col-xs-12 col-sm-12 col-md-7 col-lg-7">
          <h1>Ripple 2k24</h1>
        </div>

        <div className="submitForm col-xs-12 col-sm-12 col-md-5 col-lg-5 d-flex flex-row justify-content-center align-items-center">
          <form className="form" onSubmit={(e) => Submit(e)}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">
                  {' '}
                  <p className="labelName">Name</p>
                </label>
                <input
                  type="text"
                  className="form-control inputEle"
                  name="Name"
                  id="name"
                  placeholder="Enter Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="regno">
                  {' '}
                  <p className="labelName">RegNo</p>
                </label>
                <input
                  type="text"
                  className="form-control inputEle"
                  name="RegNo"
                  id="regno"
                  placeholder="Enter your Reg.No"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  {' '}
                  <p className="labelName">Email</p>
                </label>
                <input
                  type="email"
                  className="form-control inputEle"
                  id="email"
                  name="Email"
                  placeholder="Enter your email adress"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  {' '}
                  <p className="labelName">Phone</p>
                </label>
                <input
                  type="text"
                  className="form-control inputEle"
                  name="Phone"
                  id="phone"
                  placeholder="Enter 10 Digit Mobile Number"
                  required
                />
              </div>
            </div>
            <div className="form-group col-md-7">
              <label htmlFor="selectOption">
                {' '}
                <p className="labelName">Select Option</p>
              </label>
              <select className="form-control" id="selectOption" name="Event">
                <option value="coding">Coding</option>
                <option value="webdesign">Web Design</option>
                <option value="poster">Poster</option>
              </select>
            </div>
            <p className="text-success" id="msg-success"></p>
            <button type="submit" className="btn btn-primary w-100">
              <span className="submit-text">Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
