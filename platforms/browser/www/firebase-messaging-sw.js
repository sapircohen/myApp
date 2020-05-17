// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.14.4/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyAHP5sM11l8_bgnoaA8Th2qb9hbNbmZ3lg",
    authDomain: "r2r-push.firebaseapp.com",
    databaseURL: "https://r2r-push.firebaseio.com",
    projectId: "r2r-push",
    storageBucket: "r2r-push.appspot.com",
    messagingSenderId: "234437974144",
    appId: "1:234437974144:web:bc2592b6b8d8ba8d9bee65",
    measurementId: "G-YVYGGHC28N"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
    const notification = JSON.parse(payload.data.notification);
    const notificationTitle = notification.title;
    const notificationOptions = {
      body: notification.body
    };
    //Show the notification :)
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });

//   function alertPushMsg2(data) {
//     // data:
//     // data.data.gcm.notification.msgID: "14424"
//     // data.data.gcm.notification.rideID: "1"
//     // data.data.gcm.notification.status: "Canceled"
//     //data.data.gcm.notification.coldstart;
//     //data.data.gcm.notification.foreground;
//     //data.notification.title;
//     //data.notification.body

//     var message = '';
    

//     userIDForPush_ = parseInt(localStorage.userId);
//     msgIDForPush_ = parseInt(data.data["gcm.notification.msgID"]);


//     if (data.data["gcm.notification.status"] == "Canceled") {
//         popupDialog(data.notification.title, data.notification.body, null, false, 'sendPushReaction');

//         if (window.location.href.toString().indexOf("#myRides") != -1) {
//             myRidesPrint = true;
//         }
//         getMyRidesList();
//     }
//     //Backup to primary
//     else if (data.data["gcm.notification.status"] == "PrimaryCanceled") {
//         //check first if this ride still needprimary driver

//         backupRide = myRides.filter(function (r) { return r.Id == data.data["gcm.notification.rideID"] })[0].rideId;
//         backupRideMSG = data.notification.body;
//         backupRideTITLE = data.notification.title;
//         isPrimaryStillCanceled();
//     }
//     else {
//         popupDialog(data.notification.title, data.notification.body, null, false, 'sendPushReaction');
//     }
// }
  