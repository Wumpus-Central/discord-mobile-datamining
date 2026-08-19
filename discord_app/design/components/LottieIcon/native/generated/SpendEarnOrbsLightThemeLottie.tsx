// discord_app/design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx
import LottieIcon from "../LottieIcon.tsx";
import registerAsset from "../../../../../../_runtime/10405_registerAsset.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = fn;
let closure_3 = ["Orbs-Spend_LightTheme", "Orbs-Earn_LightTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: registerAsset, ref, layers: closure_3, markers: items });
});
const result = require("obj132").fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx");

export const SpendEarnOrbsLightThemeLottie = forwardRefResult;