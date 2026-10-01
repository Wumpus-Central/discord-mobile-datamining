// === Module 14163: NitroGem3Lottie ===

// Module 14163 (NitroGem3Lottie)
import LottieIcon from "LottieIcon" /* 9600 */;
import _mod14164 from "module_14164" /* 14164 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem3Lottie.tsx");

export const NitroGem3Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14164, animation: "all", ref, layers, markers: items });
});