// discord_app/design/components/LottieIcon/native/generated/MicrophoneLottie.tsx
import LottieIcon from "../LottieIcon.tsx";
import _mod14144 from "../../../../../../_runtime/metro/14144__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [
  { name: "mute", start: 0, duration: 70 },
  { name: "unmute", start: 100, duration: 70 },
];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/MicrophoneLottie.tsx");

export const MicrophoneLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14144, ref, layers, markers: items });
});
