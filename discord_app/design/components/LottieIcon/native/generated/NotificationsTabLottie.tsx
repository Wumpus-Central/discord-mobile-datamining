// === Module 14144: NotificationsTabLottie ===

// Module 14144 (NotificationsTabLottie)
import LottieIcon from "LottieIcon" /* 9953 */;
import _mod14145 from "module_14145" /* 14145 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export const NotificationsTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14145, animation: "all", ref, layers, markers: items });
});