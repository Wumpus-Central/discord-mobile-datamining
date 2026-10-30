// === Module 15789: MicrophoneLottie ===

// Module 15789 (MicrophoneLottie)
import LottieIcon from "LottieIcon" /* 11878 */;
import _mod15790 from "module_15790" /* 15790 */;
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
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod15790, ref: ref.ref, layers, markers: items });
}