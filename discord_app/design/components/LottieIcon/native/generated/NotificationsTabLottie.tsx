// === Module 15827: NotificationsTabLottie ===

// Module 15827 (NotificationsTabLottie)
import LottieIcon from "LottieIcon" /* 11916 */;
import _mod15828 from "module_15828" /* 15828 */;
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
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod15828, animation: "all", ref: ref.ref, layers, markers: items });
}