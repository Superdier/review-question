// 1. Cấu hình Firebase của bạn
// Các giá trị này sẽ được Vercel tự động thay thế khi deploy
const firebaseConfig = {
  apiKey: "AIzaSyBe50FKA_JjkyYBvb1qzCacnOsyLNVjaLk",
  authDomain: "review-a3790.firebaseapp.com",
  projectId: "review-a3790",
  storageBucket: "review-a3790.firebasestorage.app",
  messagingSenderId: "130813969585",
  appId: "1:130813969585:web:783a138ecb19d3c2cd8e90",
  measurementId: "G-R8PY6X3DKN"
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