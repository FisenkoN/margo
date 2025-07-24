type Props = {
  onNext: () => void;
};

const Intro = ({ onNext }: Props) => (
  <div className="relative w-full h-screen overflow-hidden">
    {/* Фон із блюром і затемненням */}
    <div
      className="absolute inset-0 w-full h-full bg-center bg-cover scale-110"
      style={{
        backgroundImage: "url('/margo-intro.jpg')",
        filter: 'blur(6px) brightness(0.3)',
      }}
    />

    {/* Контент */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
      <h1
        className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]"
        style={{ color: '#fff' }}
      >
        🌸 Марго, вітаю в Саду Душі
      </h1>

      <p
        className="text-xl md:text-2xl max-w-2xl mb-10 leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]"
        style={{ color: '#fff' }}
      >
        Тут усе про тебе. Твої мрії, вибори, моменти.
        <br /> Я не керую — я просто поруч. І завжди був.
      </p>

      <button
        onClick={onNext}
        className="border border-white/70 bg-white/10 hover:bg-white/20 font-semibold py-3 px-10 rounded-full shadow-lg text-lg transition-transform duration-200 hover:scale-105"
      >
        Почати шлях
      </button>
    </div>
  </div>
);

export default Intro;
