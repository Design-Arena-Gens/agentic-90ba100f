export default function Footer() {
  return (
    <footer className="mt-20 w-full max-w-6xl">
      <div className="glass-surface flex flex-col gap-4 px-8 py-6 text-sm text-primary-100 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-lg text-white">
          Lan tỏa lời chào Việt Nam
        </p>
        <div className="flex flex-wrap gap-4">
          <span>© {new Date().getFullYear()} Xin Chào Collective</span>
          <span className="opacity-70">Design & Development by AI Companion</span>
        </div>
      </div>
    </footer>
  );
}
