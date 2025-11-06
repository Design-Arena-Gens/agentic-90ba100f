import Link from "next/link";
import { Suspense } from "react";
import GreetingShowcase from "@/components/GreetingShowcase";
import VocabularyGrid from "@/components/VocabularyGrid";
import CulturalNotes from "@/components/CulturalNotes";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-12 text-white">
      <section className="glass-surface relative max-w-5xl px-12 py-16 text-center">
        <div className="absolute -top-20 left-1/2 z-[-1] h-72 w-72 -translate-x-1/2 rounded-full bg-primary-500/40 blur-3xl" />
        <div className="absolute -bottom-24 right-0 z-[-1] h-72 w-72 rounded-full bg-primary-200/30 blur-3xl" />
        <div className="space-y-6">
          <p className="text-sm uppercase tracking-[0.5em] text-primary-200">
            Xin chào
          </p>
          <h1 className="font-display text-5xl leading-tight md:text-6xl">
            Thắp sáng ngày mới với lời chào ấm áp từ Việt Nam
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-100">
            Khám phá ý nghĩa văn hóa của câu chào &quot;Chào&quot;, luyện tập qua
            phát âm chuẩn, và chia sẻ năng lượng tích cực đến mọi người trên
            toàn thế giới.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#hoc"
              className="button-gradient bg-primary-400 text-primary-950 hover:bg-primary-300"
            >
              Bắt đầu hành trình
            </Link>
            <Link
              href="#vanhoa"
              className="border border-white/20 px-6 py-3 font-medium text-primary-100 transition hover:border-white/40 hover:text-white"
            >
              Tìm hiểu văn hóa
            </Link>
          </div>
        </div>
        <div className="mt-12 grid gap-6 text-left md:grid-cols-3">
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 shadow-lg">
            <h3 className="font-display text-lg">Phát âm chuẩn</h3>
            <p className="mt-2 text-sm text-primary-100">
              Làm quen với những điểm nhấn đặc biệt trong tiếng Việt qua hướng
              dẫn minh hoạ sinh động.
            </p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 shadow-lg">
            <h3 className="font-display text-lg">Ngữ cảnh phong phú</h3>
            <p className="mt-2 text-sm text-primary-100">
              Hiểu và áp dụng &quot;Chào&quot; đúng tình huống để bày tỏ sự tôn
              trọng và thân thiện.
            </p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/5 p-6 shadow-lg">
            <h3 className="font-display text-lg">Kết nối toàn cầu</h3>
            <p className="mt-2 text-sm text-primary-100">
              Gửi thông điệp yêu thương bằng tiếng Việt tới bạn bè quốc tế chỉ
              với một cú nhấp chuột.
            </p>
          </div>
        </div>
      </section>

      <section id="hoc" className="mt-20 w-full max-w-6xl">
        <Suspense fallback={<div className="text-center">Đang tải...</div>}>
          <GreetingShowcase />
        </Suspense>
      </section>

      <section className="mt-20 w-full max-w-6xl">
        <VocabularyGrid />
      </section>

      <section id="vanhoa" className="mt-20 w-full max-w-6xl">
        <CulturalNotes />
      </section>

      <Footer />
    </main>
  );
}
