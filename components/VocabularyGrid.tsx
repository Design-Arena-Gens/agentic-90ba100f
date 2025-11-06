const VOCABULARY = [
  {
    title: "Chào cậu",
    description: "Cách chào thân mật giữa những người bạn thân thiết.",
    nuance: "Thân thiết"
  },
  {
    title: "Chào anh/chị",
    description: "Kính trọng nhẹ nhàng dành cho người lớn tuổi hơn hoặc đồng nghiệp.",
    nuance: "Trang trọng"
  },
  {
    title: "Chào em",
    description: "Thể hiện sự quan tâm với người nhỏ tuổi hơn trong gia đình hoặc công việc.",
    nuance: "Thân mật"
  },
  {
    title: "Chào cô/chú",
    description: "Dùng khi gặp người lớn tuổi hơn nhiều, thể hiện sự kính trọng.",
    nuance: "Kính trọng"
  },
  {
    title: "Chào cả nhà",
    description: "Chào hỏi nhiều người cùng lúc trong gia đình hoặc tập thể thân thiết.",
    nuance: "Tập thể"
  },
  {
    title: "Chào quý khách",
    description: "Công thức lịch sự trong dịch vụ, thể hiện sự chuyên nghiệp.",
    nuance: "Dịch vụ"
  }
];

export default function VocabularyGrid() {
  return (
    <div className="glass-surface px-10 py-12">
      <div className="flex flex-col gap-3 text-left md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-primary-200">
            Vốn từ
          </p>
          <h2 className="font-display text-3xl text-white md:text-4xl">
            Các biến thể của &quot;Chào&quot; theo ngữ cảnh
          </h2>
        </div>
        <p className="max-w-xl text-sm text-primary-100">
          Trong tiếng Việt, cách chào hỏi linh hoạt dựa trên mối quan hệ và vị
          trí xã hội. Ghi nhớ sắc thái giúp bạn dễ dàng hòa nhập và kết nối hơn.
        </p>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {VOCABULARY.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/20 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:border-white/40 hover:bg-white/10"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl text-white">{item.title}</h3>
              <span className="rounded-full bg-primary-400/30 px-3 py-1 text-xs text-white">
                {item.nuance}
              </span>
            </div>
            <p className="mt-3 text-sm text-primary-100">{item.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
