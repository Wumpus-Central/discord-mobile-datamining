// === Module 14356: YouTabLottie ===

// Module 14356 (YouTabLottie)
import LottieIcon from "LottieIcon" /* 10193 */;
import _mod14357 from "module_14357" /* 14357 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/YouTabLottie.tsx");

export const YouTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14357, animation: "all", ref, layers, markers: items });
});