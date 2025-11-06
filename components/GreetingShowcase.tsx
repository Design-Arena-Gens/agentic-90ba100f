/* eslint-disable react/jsx-no-target-blank */
"use client";

import { useEffect, useMemo, useState } from "react";

type Greeting = {
  phrase: string;
  context: string;
  timeOfDay: "morning" | "afternoon" | "evening" | "any";
  phonetic: string;
};

const GREETINGS: Greeting[] = [
  {
    phrase: "Chào buổi sáng!",
    context: "Sử dụng khi gặp ai đó trước 11 giờ sáng.",
    timeOfDay: "morning",
    phonetic: "chow boo-ee sahng"
  },
  {
    phrase: "Chào buổi trưa!",
    context: "Nói lời chào thân thiện vào khoảng 11h-13h.",
    timeOfDay: "afternoon",
    phonetic: "chow boo-ee choo-uh"
  },
  {
    phrase: "Chào buổi chiều!",
    context: "Dành cho buổi chiều từ 13h đến 17h.",
    timeOfDay: "afternoon",
    phonetic: "chow boo-ee chee-ehw"
  },
  {
    phrase: "Chào buổi tối!",
    context: "Trao gửi lời chào ấm áp vào buổi tối.",
    timeOfDay: "evening",
    phonetic: "chow boo-ee toy"
  },
  {
    phrase: "Xin chào!",
    context: "Lời chào phổ biến, phù hợp mọi thời điểm.",
    timeOfDay: "any",
    phonetic: "sin chow"
  }
];

const timeToDayPart = (date: Date): Greeting["timeOfDay"] => {
  const hour = date.getHours();
  if (hour < 11) return "morning";
  if (hour < 17) return "afternoon";
  if (hour < 22) return "evening";
  return "any";
};

export default function GreetingShowcase() {
  const [index, setIndex] = useState(0);
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000 * 60);
    return () => clearInterval(timer);
  }, []);

  const greetings = useMemo(() => {
    const currentPart = timeToDayPart(now);
    return GREETINGS.filter(
      (item) => item.timeOfDay === currentPart || item.timeOfDay === "any"
    );
  }, [now]);

  useEffect(() => {
    if (index >= greetings.length) {
      setIndex(0);
    }
  }, [greetings, index]);

  const currentGreeting = greetings[index] ?? GREETINGS[0];

  const rotateGreeting = () => {
    setIndex((prev) => (prev + 1) % greetings.length);
  };

  return (
    <div className="glass-surface grid gap-10 px-10 py-14 md:grid-cols-2">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-primary-200">
          Lời chào hôm nay
        </p>
        <h2 className="font-display text-4xl">
          {currentGreeting.phrase.split(" ").map((part, idx) => (
            <span
              key={part + idx}
              className="inline-block bg-gradient-to-r from-white via-white to-primary-100 bg-clip-text text-transparent"
            >
              {part}
              {idx !== currentGreeting.phrase.split(" ").length - 1 && " "}
            </span>
          ))}
        </h2>
        <p className="text-lg text-primary-100">{currentGreeting.context}</p>
        <div className="flex flex-wrap items-center gap-3 text-sm text-primary-100">
          <span className="rounded-full bg-white/10 px-4 py-2">
            Phát âm: {currentGreeting.phonetic}
          </span>
          <button
            type="button"
            onClick={rotateGreeting}
            className="button-gradient bg-primary-300 text-primary-950 hover:bg-primary-200"
          >
            Nghe thêm lời chào
          </button>
        </div>
        <div className="grid gap-3 text-sm text-primary-100 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-semibold text-white">Bản sắc Việt</p>
            <p className="mt-2 leading-relaxed">
              Người Việt coi trọng lễ nghĩa, nên lời chào luôn được ưu tiên
              trước khi bắt đầu câu chuyện.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="font-semibold text-white">Mẹo nhỏ</p>
            <p className="mt-2 leading-relaxed">
              Thêm kính ngữ như &quot;ạ&quot; ở cuối câu giúp thể hiện sự tôn
              trọng đối với người lớn tuổi.
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-8">
        <div className="absolute left-1/2 top-0 -z-10 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-400/40 blur-3xl" />
        <div className="flex items-center justify-between text-sm text-primary-100">
          <span>Thời gian hiện tại</span>
          <time className="font-medium text-white">
            {now.toLocaleTimeString("vi-VN", {
              hour: "2-digit",
              minute: "2-digit"
            })}
          </time>
        </div>
        <div>
          <p className="font-display text-2xl text-white">Thử luyện tập</p>
          <p className="mt-2 text-sm text-primary-100">
            Lặp lại câu chào và gửi cho một người bạn. Đừng quên mỉm cười!
          </p>
        </div>
        <div className="grid gap-4">
          {GREETINGS.map((greeting) => (
            <div
              key={greeting.phrase}
              className={`rounded-2xl border p-4 transition ${
                greeting.phrase === currentGreeting.phrase
                  ? "border-white/60 bg-white/20 shadow-lg"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <p className="font-semibold text-white">{greeting.phrase}</p>
              <p className="text-xs text-primary-100">{greeting.context}</p>
            </div>
          ))}
        </div>
        <a
          href="https://vdict.com/ch%C3%A0o,1,0,0.html"
          target="_blank"
          rel="noreferrer"
          className="text-sm text-primary-50 underline-offset-4 transition hover:text-white hover:underline"
        >
          Khám phá thêm về &quot;Chào&quot; tại từ điển VDict →
        </a>
      </div>
    </div>
  );
}
