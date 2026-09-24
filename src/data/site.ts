export const site = {
  name: 'CoreU',
  domain: 'coreu.ai',
  tagline: 'Tiến Đến Toàn Diện',
  description:
    'CoreU là cộng đồng học tập giúp bạn làm chủ AI và kỹ năng của kỷ nguyên số — bài bản, tinh gọn, đơn giản, và luôn có người đồng hành.',
  email: 'we@qqpath.com',
  phone: '0946 54 1402',
  phoneHref: 'tel:+84946541402',
  // TODO: điền link cộng đồng Skool chính
  skoolUrl: 'https://www.skool.com/',
};

// TODO: chỉ thêm cảm nhận THẬT của học viên (tên + vai trò + trích dẫn, có sự đồng ý).
// Mảng rỗng thì section cảm nhận tự ẩn.
export const testimonials: { quote: string; name: string; role: string }[] = [];

export const faqs = [
  {
    q: 'Mình chưa biết gì về AI, học có theo kịp không?',
    a: 'Hoàn toàn được. Mỗi khoá đi từ nền tảng, từng bước một, kèm bài tập áp dụng ngay vào công việc thật của bạn.',
  },
  {
    q: 'Học ở đâu, xem lại được không?',
    a: 'Bài học và cộng đồng nằm trên Skool. Bạn học trên điện thoại hoặc máy tính, xem lại bao nhiêu lần tuỳ thích.',
  },
  {
    q: 'Thanh toán như thế nào?',
    a: 'Quét mã VietQR bằng app ngân hàng bất kỳ. Hệ thống xác nhận tự động và gửi lời mời vào lớp qua email trong vài phút.',
  },
  {
    q: 'Nếu mình cần hỗ trợ trong lúc học?',
    a: 'Bạn đặt câu hỏi ngay trong cộng đồng Skool. Đội ngũ CoreU và các bạn học cùng luôn sẵn sàng đồng hành.',
  },
];
