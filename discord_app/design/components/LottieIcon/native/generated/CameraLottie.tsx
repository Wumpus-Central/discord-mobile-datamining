// discord_app/design/components/LottieIcon/native/generated/CameraLottie.tsx
import LottieIcon from "../LottieIcon.tsx";
import registerAsset from "../../../../../../_runtime/09978_registerAsset.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";

require = arg1;
let closure_3 = ["IconAnimation_Camera_v03"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const forwardRefResult = importAllResult.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: registerAsset, ref, layers: closure_3, markers: items });
});
const result = require("set").fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = forwardRefResult;