// discord_app/design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx
import LottieIcon from "../LottieIcon.tsx";
import registerAsset from "../../../../../../_runtime/14024_registerAsset.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = arg1;
let closure_3 = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
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
  "design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx",
);

export const NotificationsTabLottie = forwardRefResult;
