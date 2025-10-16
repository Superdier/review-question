// 1. Cấu hình Firebase của bạn
// Các giá trị này sẽ được Vercel tự động thay thế khi deploy
const firebaseConfig = {
  apiKey: "%VITE_FIREBASE_API_KEY%",
  authDomain: "%VITE_FIREBASE_AUTH_DOMAIN%",
  projectId: "%VITE_FIREBASE_PROJECT_ID%",
  storageBucket: "%VITE_FIREBASE_STORAGE_BUCKET%",
  messagingSenderId: "%VITE_FIREBASE_MESSAGING_SENDER_ID%",
  appId: "%VITE_FIREBASE_APP_ID%",
  measurementId: "%VITE_FIREBASE_MEASUREMENT_ID%"
};

// 2. Khởi tạo Firebase và Firestore
try {
    firebase.initializeApp(firebaseConfig);
    var db = firebase.firestore();
    var serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
    var questionsCollection = db.collection("questions");
} catch (e) {
    console.error("Lỗi khởi tạo Firebase:", e);
    alert("Không thể kết nối đến cơ sở dữ liệu. Vui lòng kiểm tra cấu hình Firebase và kết nối mạng.");
}