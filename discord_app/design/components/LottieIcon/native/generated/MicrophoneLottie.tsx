// === Module 13507: items ===

// Module 13507 (items)
import LottieIcon from "LottieIcon" /* 10404 */;
import registerAsset from "registerAsset" /* 13508 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
let closure_3 = ["I"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: registerAsset, ref, layers: closure_3, markers: items });
});
const result = require("obj132").fileFinishedImporting("design/components/LottieIcon/native/generated/MicrophoneLottie.tsx");

export const MicrophoneLottie = forwardRefResult;