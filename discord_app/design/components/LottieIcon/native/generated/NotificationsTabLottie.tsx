// === Module 13505: items ===

// Module 13505 (items)
import LottieIcon from "LottieIcon" /* 10404 */;
import registerAsset from "registerAsset" /* 13506 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
let closure_3 = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: registerAsset, animation: "all", ref, layers: closure_3, markers: items });
});
const result = require("obj132").fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export const NotificationsTabLottie = forwardRefResult;