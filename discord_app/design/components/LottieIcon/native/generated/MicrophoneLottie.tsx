// === Module 13677: MicrophoneLottie ===

// Module 13677 (MicrophoneLottie)
import LottieIcon from "LottieIcon" /* 9394 */;
import _mod13678 from "module_13678" /* 13678 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MicrophoneLottie.tsx");

export const MicrophoneLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod13678, ref, layers, markers: items });
});