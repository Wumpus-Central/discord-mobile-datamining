// === Module 13952: NotificationsTabLottie ===

// Module 13952 (NotificationsTabLottie)
import LottieIcon from "LottieIcon" /* 9405 */;
import _mod13953 from "module_13953" /* 13953 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export const NotificationsTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod13953, animation: "all", ref, layers, markers: items });
});