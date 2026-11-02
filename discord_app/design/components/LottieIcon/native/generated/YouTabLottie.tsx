// === Module 15829: YouTabLottie ===

// Module 15829 (YouTabLottie)
import LottieIcon from "LottieIcon" /* 11917 */;
import _mod15830 from "module_15830" /* 15830 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/YouTabLottie.tsx");

export function YouTabLottie(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod15830, animation: "all", ref: ref.ref, layers, markers: items });
}