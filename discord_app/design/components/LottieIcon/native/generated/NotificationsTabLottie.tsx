// === Module 14425: NotificationsTabLottie ===

// Module 14425 (NotificationsTabLottie)
import LottieIcon from "LottieIcon" /* 10212 */;
import _mod14426 from "module_14426" /* 14426 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export const NotificationsTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14426, animation: "all", ref, layers, markers: items });
});