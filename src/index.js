import React from 'react';
import ReactDOM from 'react-dom';
import firebase from './config-firebase';
// import "./styles.scss";

const FBProvider = new firebase.firebase_.auth.FacebookAuthProvider();
const GoogleProvider = new firebase.firebase_.auth.GoogleAuthProvider();

const signInWithProvider = authProvider => {
  return new Promise(async (resolve, reject) => {
    try {
      const res = await firebase.auth().signInWithPopup(authProvider);
      if (res) resolve(res);
    } catch (error) {
      reject(error);
    }
  });
};

const App = () => {
  const signInWithFacebook = async () => {
    const result = await signInWithProvider(FBProvider);
    if (result) {
      console.log(result);
    }
  };

  const signInWithGoogle = async () => {
    const result = await signInWithProvider(GoogleProvider);
    if (result) {
      console.log(result);
    }
  };

  return (
    <div className="App d-flex flex-column justify-content-center align-items-center pt-5 h-100">
      <button
        type="button"
        className="font-weight-bold btn btn-primary"
        onClick={signInWithFacebook}
      >
        <i className="fab fa-facebook-f mr-3" />
        Đăng nhập bằng Facebook
      </button>
      <button
        type="button"
        className="font-weight-bold btn mt-4 btn-danger px-4"
        onClick={signInWithGoogle}
      >
        <i className="fab fa-google  mr-3" />
        Đăng nhập bằng Google
      </button>
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
