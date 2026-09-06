// discord_app/design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx
import LottieIcon from "../LottieIcon.tsx";
import registerAsset from "../../../../../../_runtime/11097_registerAsset.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = arg1;
let closure_3 = ["Orbs-Spend_DarkTheme", "Orbs-Earn_DarkTheme"];
const items = [
  { name: "earn", start: 0, duration: 180 },
  { name: "spend", start: 240, duration: 180 },
];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: registerAsset, ref, layers: closure_3, markers: items });
});
const result = require("set").fileFinishedImporting(
  "design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx",
);

export const SpendEarnOrbsLottie = forwardRefResult;
