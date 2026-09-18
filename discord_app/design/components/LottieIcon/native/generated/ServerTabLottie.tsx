// === Module 14354: ServerTabLottie ===

// Module 14354 (ServerTabLottie)
import LottieIcon from "LottieIcon" /* 10193 */;
import _mod14355 from "module_14355" /* 14355 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I", "I"];
const items = [{ name: "all", start: 0, duration: 67 }, { name: "easteregg", start: 68, duration: 142 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export const ServerTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14355, animation: "all", ref, layers, markers: items });
});