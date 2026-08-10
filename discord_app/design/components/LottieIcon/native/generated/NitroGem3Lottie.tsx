// discord_app/design/components/LottieIcon/native/generated/NitroGem3Lottie.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { registerAsset } from "../../../../../../_runtime/13403_registerAsset.js";
import { LottieIcon } from "../LottieIcon.tsx";

const require = arg1;
let closure_3 = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const forwardRefResult = require("noop").forwardRef((arg0, arg1) => {
  const obj = { dotLottie: null, animation: "all", ref: null, layers: null, markers: null };
  obj[0] = registerAsset;
  obj[2] = arg1;
  obj[3] = closure_3;
  obj[4] = items;
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: null, animation: "all", ref: null, layers: null, markers: null });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem3Lottie.tsx");

export const NitroGem3Lottie = forwardRefResult;