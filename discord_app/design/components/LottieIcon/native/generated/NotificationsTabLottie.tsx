// === Module 16143: NotificationsTabLottie ===

// Module 16143 (NotificationsTabLottie)
import LottieIcon from "LottieIcon" /* 12083 */;
import _mod16144 from "module_16144" /* 16144 */;
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
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod16144, animation: "all", ref: ref.ref, layers, markers: items });
}