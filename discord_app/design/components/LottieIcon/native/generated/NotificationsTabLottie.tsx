// === Module 16085: NotificationsTabLottie ===

// Module 16085 (NotificationsTabLottie)
import LottieIcon from "LottieIcon" /* 12092 */;
import _mod16086 from "module_16086" /* 16086 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export function NotificationsTabLottie(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod16086, animation: "all", ref: ref.ref, layers, markers: items });
}