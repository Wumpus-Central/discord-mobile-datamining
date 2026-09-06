// discord_app/design/components/LottieIcon/native/generated/CameraLottie.tsx
import LottieIcon from "../LottieIcon.tsx";
import _mod9949 from "../../../../../../_runtime/metro/09949__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Camera_v03"];
const items = [
  { name: "mute", start: 0, duration: 70 },
  { name: "unmute", start: 100, duration: 70 },
];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/CameraLottie.tsx");

export const CameraLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod9949, ref, layers, markers: items });
});
