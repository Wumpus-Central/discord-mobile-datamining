// === Module 13960: NitroGem3Lottie ===

// Module 13960 (NitroGem3Lottie)
import LottieIcon from "LottieIcon" /* 9405 */;
import _mod13961 from "module_13961" /* 13961 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem3Lottie.tsx");

export const NitroGem3Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod13961, animation: "all", ref, layers, markers: items });
});