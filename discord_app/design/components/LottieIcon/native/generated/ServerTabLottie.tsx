// === Module 14510: ServerTabLottie ===

// Module 14510 (ServerTabLottie)
import LottieIcon from "LottieIcon" /* 10297 */;
import _mod14511 from "module_14511" /* 14511 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I", "I"];
const items = [{ name: "all", start: 0, duration: 67 }, { name: "easteregg", start: 68, duration: 142 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export const ServerTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14511, animation: "all", ref, layers, markers: items });
});