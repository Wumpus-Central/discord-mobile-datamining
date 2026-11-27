// === Module 15433: ServerTabLottie ===

// Module 15433 (ServerTabLottie)
import LottieIcon from "LottieIcon" /* 9449 */;
import _mod15434 from "module_15434" /* 15434 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I", "I"];
const items = [{ name: "all", start: 0, duration: 67 }, { name: "easteregg", start: 68, duration: 142 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export function ServerTabLottie(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod15434, animation: "all", ref: ref.ref, layers, markers: items });
}