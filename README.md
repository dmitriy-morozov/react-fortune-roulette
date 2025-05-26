# React Fortune Roulette

A customizable fortune wheel (roulette) React component built with **framer-motion**. Perfect for gamification, reward
systems, promotions, and mini-games.

> 🎯 **This is a fork of** [`react-roulette-game`](https://github.com/WreewanMorhee/ReactRoulette), modernized for:
> - React 18+
> - TypeScript support
> - framer-motion v11+
> - Better UX & structure

## 🚀 Demo

▶ **Try it live**:  
👉 [https://dmitriy-morozov.github.io/react-fortune-roulette-demo/](https://dmitriy-morozov.github.io/react-fortune-roulette-demo/)


## ✨ Features

- Fully animated with [framer-motion](https://www.framer.com/motion/)
- Customizable wheel, pointer, and highlight images
- "Try Again" mode
- Configurable spin duration and spin limit
- Callbacks for spin start, completion, and gift receiving

---

## 📦 Installation

```bash
npm install react-fortune-roulette
```

## 🚀 Usage

```tsx
import { Roulette, RouletteProps } from "react-fortune-roulette";

const App = () => {
  return (
    <Roulette
      wheelImageBase="/images/wheel-base.png"
      wheelImageOverlay="/images/wheel-overlay.png"
      pointerImage="/images/pointer.png"
      highlightImage="/images/highlight.png"
      prizeList={['Baseball', 'Rugby', 'Tennis', 'Soccer', 'Badminton', 'Basketball']}
      spinsLimit={3}
      duration={5}
      onStart={() => console.log("Spin started")}
      onComplete={(prize) => console.log("Spin complete:", prize)}
      onReceiveGift={(prize) => console.log("Gift received:", prize)}
      startText="Spin the Wheel!"
      tryAgainText="Try Again!"
      receiveGiftText="Claim your Prize!"
    />
  );
};
```

## 📌 Props

| Prop                      | Type                      | Default            | Description                                                                                                                                 |
|---------------------------|---------------------------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------|
| `wheelImageBase`          | `string`                  | **required**       | Background image of the base wheel.                                                                                                         |
| `wheelImageOverlay`       | `string`                  | **required**       | Foreground overlay image of the wheel.                                                                                                      |
| `highlightImage`          | `string`                  | **required**       | Image shown as blinking highlight effect after spinning.                                                                                    |
| `pointerImage`            | `string`                  | **required**       | Static pointer image placed on top of the wheel.                                                                                            |
| `prizeList`               | `string[]`                | **required**       | Array of prize values, the order is counter-clockwise to your roulette. Include `"try_again"` to enable "Try Again" logic.                  |
| `spinsLimit`              | `number`                  | `1`                | Number of spins allowed.                                                                                                                    |
| `duration`                | `number`                  | `6`                | Duration of the total spin animation (in seconds).                                                                                          |
| `isShowReceiveGiftButton` | `boolean`                 | `true`             | Whether to show the "Receive Gift" button after spinning. If `false`, the gift should be handled directly inside the `onComplete` callback. |
| `startText`               | `string`                  | `"Start!"`         | Label text for the Start button.                                                                                                            |
| `tryAgainText`            | `string`                  | `"Try Again"`      | Label text for the Try Again button.                                                                                                        |
| `receiveGiftText`         | `string`                  | `"Receive a gift"` | Label text for the Receive Gift button.                                                                                                     |
| `onStart`                 | `() => void`              | `() => {}`         | Callback triggered when the spin begins.                                                                                                    |
| `onComplete`              | `(prize: string) => void` | `() => {}`         | Callback triggered when the spin ends and a prize is selected.                                                                              |
| `onReceiveGift`           | `(prize: string) => void` | `() => {}`         | Callback triggered when the user receives a gift (if not `"try_again"`).                                                                    |

### wheelImageBase
usage: roulette's body image, its zIndex is smaller than highlight;
HIGHLY RECOMMENDED: the ratio of this image should be square

<img src="https://raw.githubusercontent.com/dmitriy-morozov/react-fortune-roulette/refs/heads/master/assets/wheel_image_base.png" alt="wheel_image_base" width="400" />

### wheelImageOverlay
usage: roulette's body image, its zIndex is bigger than highlight;
HIGHLY RECOMMENDED: the ratio of this image should be square

<img src="https://raw.githubusercontent.com/dmitriy-morozov/react-fortune-roulette/refs/heads/master/assets/wheel_image_overlay.png" alt="wheel_image_overlay" width="400" />

### highlightImage 
usage: when roulette rotate over, hightlight will bling bling, its purpose is to highlight the winning-prize;      
HIGHLY RECOMMENDED: the ratio of this image should be square

<img src="https://raw.githubusercontent.com/dmitriy-morozov/react-fortune-roulette/refs/heads/master/assets/highlight.png" alt="highlight" width="400" />

### pointerImage
usage: roulette's pointer, to point the winning-prize;       
HIGHLY RECOMMENDED: the ratio of this image should be square

<img src="https://raw.githubusercontent.com/dmitriy-morozov/react-fortune-roulette/refs/heads/master/assets/pointer.png" alt="Preview" width="400" />

#### PS1: you can put your roulette's body image on one of them or both; just due to different design, something will be under the highlight and something will be on the highlight, so let you have more option to combine your roulette
#### PS2: your roulette should put like this: 
<img src="https://raw.githubusercontent.com/dmitriy-morozov/react-fortune-roulette/refs/heads/master/assets/correct.jpeg" alt="Correct" width="500" />

#### not like this:
<img src="https://raw.githubusercontent.com/dmitriy-morozov/react-fortune-roulette/refs/heads/master/assets/incorrect.jpeg" alt="Incorrect" width="500" />

#### PS: the prize you win always on top, so your pointer should always point toward that one, like this:
<img src="https://raw.githubusercontent.com/dmitriy-morozov/react-fortune-roulette/refs/heads/master/assets/pointer.jpeg" alt="Preview" width="500" />


## 🎨 Styling

This component includes default SCSS styles that are automatically imported when you use the package — no need for
manual imports.

If you want to customize the appearance, you can override the following class names in your project's CSS or SCSS:

```css
.roulette-container
.roulette-box
.roulette-board
.roulette-highlight-area
.roulette-pointer
.roulette-btn
.start-btn
.try-again-btn
.gift-btn
```
