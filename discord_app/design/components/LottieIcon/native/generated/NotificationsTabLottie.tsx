// === Module 15974: NotificationsTabLottie ===

// Module 15974 (NotificationsTabLottie)
import LottieIcon from "LottieIcon" /* 12054 */;
import _mod15975 from "module_15975" /* 15975 */;
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
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod15975, animation: "all", ref: ref.ref, layers, markers: items });
}