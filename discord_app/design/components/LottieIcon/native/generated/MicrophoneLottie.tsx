// discord_app/design/components/LottieIcon/native/generated/MicrophoneLottie.tsx
import LottieIcon from "../LottieIcon.tsx";
import _mod15790 from "../../../../../../_runtime/metro/15790__.js";
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

export function MicrophoneLottie(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod15790, ref: ref.ref, layers, markers: items });
}
