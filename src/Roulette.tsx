import {useState, useEffect} from "react";
import {motion, useAnimation} from "framer-motion";
import "./roulette.css";

export type RouletteProps = {
  onStart?: () => void;
  onComplete?: (prize: string) => void;
  onReceiveGift?: (prize: string) => void;
  startText?: string;
  tryAgainText?: string;
  receiveGiftText?: string;
  wheelImageBase: string;
  wheelImageOverlay: string;
  highlightImage: string;
  pointerImage: string;
  prizeList: string[];
  spinsLimit?: number;
  duration?: number;
};

export const Roulette = ({
                           onStart = () => {
                           },
                           onComplete = () => {
                           },
                           onReceiveGift = () => {
                           },
                           startText = "Start!",
                           tryAgainText = "Try Again",
                           receiveGiftText = "Receive a gift",
                           wheelImageBase,
                           wheelImageOverlay,
                           highlightImage,
                           pointerImage,
                           prizeList,
                           spinsLimit = 1,
                           duration = 6,
                         }: RouletteProps) => {
  const [spinCount, setSpinCount] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const [wonPrize, setWonPrize] = useState<string | null>(null);
  const wheelControls = useAnimation();
  const highlightControls = useAnimation();

  const canSpin = spinsLimit === undefined || spinCount < spinsLimit;

  const triggerSpin = async () => {
    const total = prizeList.length;
    const selectedIndex = Math.floor(Math.random() * total);
    const selectedPrize = prizeList[selectedIndex];
    const prizeAngle = (360 * selectedIndex) / total;

    await wheelControls.start({
      rotate: 360 * 10,
      transition: {duration: duration / 2, ease: "easeIn"},
    });

    await wheelControls.start({
      rotate: 360 * 15 + prizeAngle,
      transition: {duration: duration / 2, ease: "easeOut"},
    });

    highlightControls.start({
      opacity: [0, 1],
      transition: {duration: 0.5, repeat: Infinity, repeatType: "reverse"},
    });

    setSpinning(false);
    setWonPrize(selectedPrize);
    if (selectedPrize === "try_again") setShowTryAgain(true);
    onComplete(selectedPrize);
  };

  useEffect(() => {
    if (spinning) {
      highlightControls.stop();
      highlightControls.set({opacity: 0});
      triggerSpin();
    }
  }, [spinning]);

  const handleStart = () => {
    if (!canSpin) return;
    setSpinning(true);
    setShowTryAgain(false);
    setSpinCount((prev) => prev + 1);
    onStart();
  };

  const handleTryAgain = () => {
    if (!showTryAgain) return;
    setSpinning(true);
    setShowTryAgain(false);
  };

  const handleReceiveGift = () => {
    if (wonPrize && wonPrize !== "try_again") {
      onReceiveGift(wonPrize);
      setWonPrize(null);
    }
  };

  return (
    <div className="roulette-container">
      <div className="roulette-box">
        <motion.div
          className="roulette-board"
          style={{backgroundImage: `url(${wheelImageBase})`}}
          animate={wheelControls}
        />
        <motion.div
          className="roulette-highlight-area"
          style={{backgroundImage: `url(${highlightImage})`}}
          animate={highlightControls}
        />
        <motion.div
          className="roulette-board"
          style={{backgroundImage: `url(${wheelImageOverlay})`}}
          animate={wheelControls}
        />
        <div
          className="roulette-pointer"
          style={{backgroundImage: `url(${pointerImage})`}}
        />
      </div>

      <div className="roulette-actions">
        {showTryAgain ? (
          <button
            className="roulette-btn try-again-btn"
            type="button"
            onClick={handleTryAgain}
          >
            {tryAgainText}
          </button>
        ) : !spinning && canSpin ? (
          <button
            className="roulette-btn start-btn"
            type="button"
            onClick={handleStart}
          >
            {startText}
          </button>
        ) : null}

        {wonPrize && wonPrize !== "try_again" && !spinning && (
          <button
            className="roulette-btn gift-btn"
            type="button"
            onClick={handleReceiveGift}
          >
            {receiveGiftText}
          </button>
        )}
      </div>
    </div>
  );
};
