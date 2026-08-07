// discord_app/design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";
import { registerAsset } from "../../../../../../_runtime/10080_registerAsset.js";
import { LottieIcon } from "../LottieIcon.tsx";

const require = arg1;
let closure_3 = ["Orbs-Spend_DarkTheme", "Orbs-Earn_DarkTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const forwardRefResult = require("noop").forwardRef((arg0, arg1) => {
  const obj = { dotLottie: null, ref: null, layers: null, markers: null };
  obj[0] = registerAsset;
  obj[1] = arg1;
  obj[2] = closure_3;
  obj[3] = items;
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: null, ref: null, layers: null, markers: null });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx");

export const SpendEarnOrbsLottie = forwardRefResult;