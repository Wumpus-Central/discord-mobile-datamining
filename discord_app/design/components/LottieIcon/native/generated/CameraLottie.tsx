// discord_app/design/components/LottieIcon/native/generated/CameraLottie.tsx
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
let closure_3 = ["IconAnimation_Camera_v03"];
const items = [{ name: "mute", start: 0, duration: 70 }, { name: "unmute", start: 100, duration: 70 }];
const forwardRefResult = require("noop").forwardRef((arg0, arg1) => {
  const obj = { dotLottie: null, ref: null, layers: null, markers: null };
  obj[0] = require(10717) /* registerAsset */;
  obj[1] = arg1;
  obj[2] = closure_3;
  obj[3] = items;
  const merged = Object.assign(arg0);
  return jsx(require(10059) /* LottieIcon */.LottieIcon, { dotLottie: null, ref: null, layers: null, markers: null });
});
const result = require("LottieIcon").fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = forwardRefResult;