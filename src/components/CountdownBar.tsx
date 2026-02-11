import { useState, useEffect } from "react";

const CHECKOUT_URL = "https://pay.kiwify.com.br/MPz6JS7?afid=IPBBrNj7";

const CountdownBar = () => {
  const [time, setTime] = useState(15 * 60); // 15 minutes

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1 : 15 * 60));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(time / 60).toString().padStart(2, "0");
  const seconds = (time % 60).toString().padStart(2, "0");

  return (
    <div className="gradient-gold py-2 px-4 text-center sticky top-0 z-50">
      <a href={CHECKOUT_URL} className="flex items-center justify-center gap-2 text-primary-foreground font-bold text-sm md:text-base">
        <span>⚡🔥 PROMOÇÃO NUNCA VISTA ANTES</span>
        <span className="ml-2">ACABA EM:</span>
        <span className="bg-primary-foreground/20 px-3 py-0.5 rounded font-mono text-lg">
          {minutes}:{seconds}
        </span>
        <span>⚡</span>
      </a>
    </div>
  );
};

export default CountdownBar;
