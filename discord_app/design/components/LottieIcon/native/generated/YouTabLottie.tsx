// === Module 16083: YouTabLottie ===

// Module 16083 (YouTabLottie)
import LottieIcon from "LottieIcon" /* 12092 */;
import _mod16084 from "module_16084" /* 16084 */;
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
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod16084, animation: "all", ref: ref.ref, layers, markers: items });
}