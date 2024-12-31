import './App.css';
import Swal from 'sweetalert2'

/* Library */

function App() {
  const showAlert = () => {
    Swal.fire("Testing Sweet Alert");
  }
  const showAlert2 = () => {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });
  }
  const showAlert3 = () => {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  }
  const showAlert4 = () => {
    Swal.fire({
      imageUrl: "https://placeholder.pics/svg/300x1500",
      imageHeight: 300,
      imageWidth: 500,
      imageAlt: "A tall image"
    });
  }

  const showAlert5 = () => {
    Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true
    });
  }

  const showAlert6 = () => {
    Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true
    });
  }

  const showAlert7 = () => {
    Swal.fire({
      title: "<strong>HTML <u>example</u></strong>",
      icon: "info",
      html: `
        You can use <b>bold text</b>,
        <a href="#" autofocus>links</a>,
        and other HTML tags
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });
  }

  const showAlert8 = () => {
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  }

  const showAlert9 = () => {
    Swal.fire({
      title: "Custom animation with Animate.css",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  }

  const showAlert10 = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  }


  return (
    <div className="App">
      <header>
        <h1>Sweet Alert 2</h1>
      </header>
      <section style={{ display: 'flex', flexDirection: 'column', margin: 'auto', gap: '25px', width: '40vh'}}>
        <button onClick={showAlert}>Try me!</button>
        <button onClick={showAlert2}>Text Under</button>
        <button onClick={showAlert3}>A modal witha  title</button>
        <button onClick={showAlert4}>Window with a long content inside!</button>
        <button onClick={showAlert5}>Draggable modal</button>
        <button onClick={showAlert6}>Custom HTML description</button>
        <button onClick={showAlert7}>Dialog with three buttons</button>
        <button onClick={showAlert8}>Custom positioned dialog</button>
        <button onClick={showAlert9}>Custom animation with Animate.css</button>
        <button onClick={showAlert10}>Confirm dailog witha function attached to onfirm button</button>
      </section>
    </div>
  );
}

export default App;
