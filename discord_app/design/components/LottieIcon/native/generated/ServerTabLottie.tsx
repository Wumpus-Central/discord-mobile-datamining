// discord_app/design/components/LottieIcon/native/generated/ServerTabLottie.tsx
import LottieIcon from "../LottieIcon.tsx";
import _mod15824 from "../../../../../../_runtime/metro/15824__.js";
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

export function ServerTabLottie(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod15824, animation: "all", ref: ref.ref, layers, markers: items });
}
