// === Module 16092: MicrophoneLottie ===

// Module 16092 (MicrophoneLottie)
import LottieIcon from "LottieIcon" /* 12123 */;
import _mod16093 from "module_16093" /* 16093 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MicrophoneLottie.tsx");

export function MicrophoneLottie(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod16093, ref: ref.ref, layers, markers: items });
}