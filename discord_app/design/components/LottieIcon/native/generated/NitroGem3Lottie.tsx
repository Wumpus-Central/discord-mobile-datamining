// === Module 14149: NitroGem3Lottie ===

// Module 14149 (NitroGem3Lottie)
import LottieIcon from "LottieIcon" /* 9948 */;
import _mod14150 from "module_14150" /* 14150 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem3Lottie.tsx");

export const NitroGem3Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14150, animation: "all", ref, layers, markers: items });
});