# Ứng dụng Ôn tập Câu hỏi (Review Question)

Đây là một ứng dụng web cá nhân được xây dựng để hỗ trợ việc tạo, quản lý và ôn tập các câu hỏi trắc nghiệm, đặc biệt hữu ích cho việc học Câu hỏi và luyện thi. Ứng dụng sử dụng Firebase Firestore làm cơ sở dữ liệu, cho phép lưu trữ và truy cập dữ liệu một cách linh hoạt.

## ✨ Các tính năng chính

### 1. 📘 Nhập và Quản lý Câu hỏi (`index.html`)

- **Nhập liệu thông minh**: Dán (paste) hàng loạt câu hỏi từ văn bản thô, ứng dụng sẽ tự động phân tích và bóc tách thành các câu hỏi, lựa chọn, đáp án đúng (`正解`) và giải thích.
- **Hỗ trợ nhiều định dạng**:
  - **Câu hỏi đơn**: Các câu hỏi trắc nghiệm độc lập.
  - **Bài đọc**: Một bài đọc chung với nhiều câu hỏi con liên quan.
- **Xem trước & Chỉnh sửa**: Trước khi lưu, một modal xem trước sẽ hiện ra, cho phép bạn kiểm tra, chỉnh sửa và lựa chọn những câu hỏi muốn lưu.
- **Quản lý toàn diện**:
  - **Tìm kiếm**: Tìm kiếm nhanh câu hỏi theo từ khóa, tag.
  - **Sửa/Xóa**: Chỉnh sửa nội dung hoặc xóa từng câu hỏi, hoặc xóa hàng loạt.
  - **Gắn sao (Favorite)**: Đánh dấu các câu hỏi quan trọng để dễ dàng lọc và ôn tập.
  - **Gắn thẻ (Tagging)**: Nhóm các câu hỏi theo bộ đề (ví dụ: "JLPT T7/2017") để quản lý và lọc dễ dàng hơn.
- **Xuất/Nhập dữ liệu**: Xuất toàn bộ cơ sở dữ liệu ra file JSON để sao lưu.

### 2. 📖 Chế độ Ôn tập (`review.html`)

- **Tùy chỉnh phiên học**:
  - Lọc câu hỏi theo từ khóa, tag, hoặc chỉ các câu đã gắn sao.
  - Chọn số lượng câu hỏi muốn làm.
  - Chế độ ngẫu nhiên để xáo trộn thứ tự câu hỏi.
  - Tự động ẩn các câu đã thành thạo (làm > 5 lần, đúng > 75%).
- **Giao diện làm bài hiện đại**:
  - Thanh trạng thái trực quan để theo dõi tiến độ và chuyển đổi giữa các câu.
  - Phản hồi tức thì (đúng/sai) sau mỗi lần chọn đáp án.
  - Hiển thị giải thích (nếu có) sau khi trả lời.
  - Các công cụ hỗ trợ: Đánh dấu cờ (Flag) để xem lại, Quay lại câu trước, Chuyển đến câu chưa trả lời tiếp theo.
- **Khôi phục phiên**: Tự động lưu lại tiến trình, nếu bạn vô tình đóng tab, phiên ôn tập sẽ được khôi phục khi mở lại.
- **Kết quả chi tiết**: Sau khi nộp bài, xem lại điểm số, tỷ lệ phần trăm và danh sách chi tiết các câu trả lời của bạn.

### 3. 📊 Thống kê Hiệu suất (`statistics.html`)

- **Bảng điều khiển tổng quan**: Cung cấp các số liệu chính như tổng số câu hỏi, tỷ lệ đúng chung, số câu đã làm, số câu đã gắn sao.
- **Phân tích hiệu suất**:
  - Liệt kê 10 câu hỏi "khó" nhất (tỷ lệ đúng thấp) và 10 câu "dễ" nhất (tỷ lệ đúng cao).
  - Lọc dữ liệu thống kê theo tag, số lần làm tối thiểu.
  - Bắt đầu một phiên ôn tập nhanh chỉ với các câu hỏi khó hoặc dễ.

## 🚀 Công nghệ sử dụng

- **Frontend**: HTML, CSS, và JavaScript (Vanilla JS).
- **Backend & Database**: Firebase Firestore - Cơ sở dữ liệu NoSQL thời gian thực.
- **Giao diện**:
  - Thiết kế đáp ứng (Responsive) cho cả máy tính và thiết bị di động.
  - Hỗ trợ giao diện Sáng (Light Mode) và Tối (Dark Mode).

## 🔧 Cài đặt và Chạy

1.  **Cấu hình Firebase**:
    - Tạo một dự án trên Firebase Console.
    - Kích hoạt dịch vụ Firestore.
    - Lấy thông tin cấu hình của dự án (API key, project ID, v.v.).
    - Dán thông tin này vào file `/public/js/firebase-init.js`.
2.  **Chạy ứng dụng**:
    - Mở file `public/index.html` bằng trình duyệt hoặc sử dụng một máy chủ web cục bộ (ví dụ: Live Server trong VS Code).