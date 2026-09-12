// === Module 14225: YouTabLottie ===

// Module 14225 (YouTabLottie)
import LottieIcon from "LottieIcon" /* 10078 */;
import _mod14226 from "module_14226" /* 14226 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/YouTabLottie.tsx");

export const YouTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14226, animation: "all", ref, layers, markers: items });
});