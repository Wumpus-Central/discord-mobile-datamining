// === Module 14259: NitroGem1Lottie ===

// Module 14259 (NitroGem1Lottie)
import LottieIcon from "LottieIcon" /* 10088 */;
import _mod14260 from "module_14260" /* 14260 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem1Lottie.tsx");

export const NitroGem1Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14260, animation: "all", ref, layers, markers: items });
});