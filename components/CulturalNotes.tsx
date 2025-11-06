const NOTES = [
  {
    headline: "Lễ phép trước tiên",
    body: "Trong giao tiếp Việt Nam, lời chào thường mở đầu cho mọi câu chuyện. Người Việt tin rằng 'lời chào cao hơn mâm cỗ', nhấn mạnh tầm quan trọng của sự lễ phép."
  },
  {
    headline: "Ngôn ngữ cơ thể",
    body: "Khi nói lời chào, một nụ cười cùng cái gật đầu hoặc chắp tay nhẹ mang lại thiện cảm. Điều này cho thấy bạn tôn trọng người đối diện."
  },
  {
    headline: "Biến tấu vùng miền",
    body: "Ở miền Bắc, 'Chào anh/chị' phổ biến, trong khi miền Nam thường dùng 'Chào anh/chị nha' thân mật. Hiểu sắc thái vùng miền giúp bạn hòa nhập nhanh hơn."
  }
];

export default function CulturalNotes() {
  return (
    <section className="glass-surface px-10 py-12">
      <p className="text-sm uppercase tracking-[0.3em] text-primary-200">
        Văn hóa
      </p>
      <h2 className="font-display text-3xl text-white md:text-4xl">
        Ý nghĩa văn hóa của lời chào
      </h2>
      <p className="mt-4 max-w-2xl text-sm text-primary-100">
        Lời chào là sự kết nối đầu tiên giữa con người với con người. Bằng cách
        hiểu phong tục, bạn thể hiện sự tôn trọng và xây dựng mối quan hệ bền
        chặt hơn.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {NOTES.map((note) => (
          <article
            key={note.headline}
            className="rounded-3xl border border-white/20 bg-white/5 p-6"
          >
            <h3 className="font-display text-xl text-white">{note.headline}</h3>
            <p className="mt-3 text-sm text-primary-100">{note.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
