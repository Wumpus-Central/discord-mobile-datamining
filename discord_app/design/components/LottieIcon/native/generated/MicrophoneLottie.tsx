// === Module 14265: MicrophoneLottie ===

// Module 14265 (MicrophoneLottie)
import LottieIcon from "LottieIcon" /* 10099 */;
import _mod14266 from "module_14266" /* 14266 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MicrophoneLottie.tsx");

export const MicrophoneLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14266, ref, layers, markers: items });
});