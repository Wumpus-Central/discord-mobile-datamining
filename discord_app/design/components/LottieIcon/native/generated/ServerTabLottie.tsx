// === Module 16323: ServerTabLottie ===

// Module 16323 (ServerTabLottie)
import LottieIcon from "LottieIcon" /* 9981 */;
import _mod16324 from "module_16324" /* 16324 */;
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
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod16324, animation: "all", ref: ref.ref, layers, markers: items });
}