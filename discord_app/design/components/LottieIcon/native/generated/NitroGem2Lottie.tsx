// === Module 13511: items ===

// Module 13511 (items)
import LottieIcon from "LottieIcon" /* 10404 */;
import registerAsset from "registerAsset" /* 13512 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = fn;
let closure_3 = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: registerAsset, animation: "all", ref, layers: closure_3, markers: items });
});
const result = require("obj132").fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem2Lottie.tsx");

export const NitroGem2Lottie = forwardRefResult;