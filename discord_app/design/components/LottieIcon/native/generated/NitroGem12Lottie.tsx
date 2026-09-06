// discord_app/design/components/LottieIcon/native/generated/NitroGem12Lottie.tsx
import LottieIcon from "../LottieIcon.tsx";
import registerAsset from "../../../../../../_runtime/14156_registerAsset.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = arg1;
let closure_3 = ["G"];
const items = [{ name: "all", start: 0, duration: 71 }];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, {
    dotLottie: registerAsset,
    animation: "all",
    ref,
    layers: closure_3,
    markers: items,
  });
});
const result = require("set").fileFinishedImporting(
  "design/components/LottieIcon/native/generated/NitroGem12Lottie.tsx",
);

export const NitroGem12Lottie = forwardRefResult;
