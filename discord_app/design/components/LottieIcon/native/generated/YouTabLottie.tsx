// === Module 13950: YouTabLottie ===

// Module 13950 (YouTabLottie)
import LottieIcon from "LottieIcon" /* 9405 */;
import _mod13951 from "module_13951" /* 13951 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/YouTabLottie.tsx");

export const YouTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod13951, animation: "all", ref, layers, markers: items });
});