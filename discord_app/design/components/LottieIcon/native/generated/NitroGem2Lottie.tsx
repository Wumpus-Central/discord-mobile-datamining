// === Module 14425: NitroGem2Lottie ===

// Module 14425 (NitroGem2Lottie)
import LottieIcon from "LottieIcon" /* 10206 */;
import _mod14426 from "module_14426" /* 14426 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["I"];
const items = [{ name: "all", start: 0, duration: 71 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NitroGem2Lottie.tsx");

export const NitroGem2Lottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14426, animation: "all", ref, layers, markers: items });
});