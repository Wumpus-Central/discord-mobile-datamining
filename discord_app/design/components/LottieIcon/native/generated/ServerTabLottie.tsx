// === Module 14188: ServerTabLottie ===

// Module 14188 (ServerTabLottie)
import LottieIcon from "LottieIcon" /* 10039 */;
import _mod14189 from "module_14189" /* 14189 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I", "I"];
const items = [{ name: "all", start: 0, duration: 67 }, { name: "easteregg", start: 68, duration: 142 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export const ServerTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14189, animation: "all", ref, layers, markers: items });
});