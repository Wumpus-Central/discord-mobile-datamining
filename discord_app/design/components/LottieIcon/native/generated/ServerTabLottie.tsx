// discord_app/design/components/LottieIcon/native/generated/ServerTabLottie.tsx
import LottieIcon from "../LottieIcon.tsx";
import _mod14138 from "../../../../../../_runtime/metro/14138__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const layers = ["I", "I"];
const items = [
  { name: "all", start: 0, duration: 67 },
  { name: "easteregg", start: 68, duration: 142 },
];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/ServerTabLottie.tsx");

export const ServerTabLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14138, animation: "all", ref, layers, markers: items });
});
