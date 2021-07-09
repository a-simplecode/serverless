import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css'
import { ToastContainer, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return <>
  <Component {...pageProps} />
  <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={true}
      rtl={false}
      pauseOnHover
      transition={Slide}
    />
  </>
}

export default MyApp
