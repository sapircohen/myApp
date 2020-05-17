
  // Your web app's Firebase configuration
  export const firebaseConfig = {
    apiKey: "AIzaSyAHP5sM11l8_bgnoaA8Th2qb9hbNbmZ3lg",
    authDomain: "r2r-push.firebaseapp.com",
    databaseURL: "https://r2r-push.firebaseio.com",
    projectId: "r2r-push",
    storageBucket: "r2r-push.appspot.com",
    messagingSenderId: "234437974144",
    appId: "1:234437974144:web:bc2592b6b8d8ba8d9bee65",
    measurementId: "G-YVYGGHC28N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();
  messaging
  .requestPermission()
  .then(() => {
    message.innerHTML = "Notifications allowed";
    return messaging.getToken();
  })
  .then(token => {
    tokenString.innerHTML = "Token Is : " + token;
  })
  .catch(err => {
    errorMessage.innerHTML = errorMessage.innerHTML + "; " + err;
    console.log("No permission to send push", err);
  });