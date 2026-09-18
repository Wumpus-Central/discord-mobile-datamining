// === Module 14364: NitroGem2Lottie ===

// Module 14364 (NitroGem2Lottie)
import LottieIcon from "LottieIcon" /* 10193 */;
import _mod14365 from "module_14365" /* 14365 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem2Lottie.tsx");

export const NitroGem2Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14365, animation: "all", ref, layers, markers: items });
});