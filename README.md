# coreu.ai

Website CoreU — **Tiến Đến Toàn Diện**. Astro (site tĩnh) deploy trên Vercel. Học viên học trên Skool, thanh toán VietQR trên web (đợt 2).

## Chạy thử

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # ra thư mục dist/ + .vercel/output
```

## Cấu trúc

```
src/content/courses/*.md   mỗi khoá học là 1 file (giá, lợi ích, lộ trình, FAQ, skoolUrl)
src/data/site.ts           thông tin chung: email, SĐT, link Skool, FAQ, cảm nhận học viên
src/styles/global.css      token thương hiệu (màu, font Montserrat, nút, hiệu ứng)
src/components/            Header, Footer, CourseCard, Faq, CtaBand, Logo
src/pages/                 /, /khoa-hoc, /khoa-hoc/[slug], /ve-coreu, /cam-on, /chinh-sach, /dieu-khoan
```

**Thêm khoá mới:** copy 1 file trong `src/content/courses/`, đổi tên file (thành slug URL) và nội dung. Đặt `draft: true` để ẩn.

## Việc cần làm (TODO)

- [ ] Thay nội dung nháp của 3 khoá học bằng khoá thật
- [ ] Logo SVG chính thức → `src/components/Logo.astro`, `public/favicon.svg`
- [ ] Link Skool thật → `src/data/site.ts` và `skoolUrl` từng khoá
- [ ] Cảm nhận học viên thật → `testimonials` trong `src/data/site.ts` (rỗng thì tự ẩn)
- [ ] Rà soát pháp lý `/chinh-sach`, `/dieu-khoan`
- [ ] Đợt 2: `/api/checkout` + `/api/payos-webhook` (PayOS VietQR → Supabase → MailerLite → Skool)
- [ ] Đợt 3: GA4 + Meta Pixel, trỏ domain coreu.ai sang Vercel
