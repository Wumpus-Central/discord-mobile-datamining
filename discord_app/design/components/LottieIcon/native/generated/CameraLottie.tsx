// === Module 12082: CameraLottie ===

// Module 12082 (CameraLottie)
import LottieIcon from "LottieIcon" /* 12083 */;
import _mod12084 from "module_12084" /* 12084 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Camera_v03"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export function CameraLottie(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod12084, ref: ref.ref, layers, markers: items });
}