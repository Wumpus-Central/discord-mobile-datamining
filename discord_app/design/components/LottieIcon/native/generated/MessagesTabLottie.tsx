// === Module 14001: items ===

// Module 14001 (items)
import LottieIcon from "LottieIcon" /* 10061 */;
import registerAsset from "registerAsset" /* 14002 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
let closure_3 = ["I"];
const items = [{ name: "all", start: 0, duration: 67 }];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: registerAsset, animation: "all", ref, layers: closure_3, markers: items });
});
const result = require("set").fileFinishedImporting("design/components/LottieIcon/native/generated/MessagesTabLottie.tsx");

export const MessagesTabLottie = forwardRefResult;