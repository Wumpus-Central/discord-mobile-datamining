// === Module 14192: NotificationsTabLottie ===

// Module 14192 (NotificationsTabLottie)
import LottieIcon from "LottieIcon" /* 10039 */;
import _mod14193 from "module_14193" /* 14193 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export const NotificationsTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14193, animation: "all", ref, layers, markers: items });
});