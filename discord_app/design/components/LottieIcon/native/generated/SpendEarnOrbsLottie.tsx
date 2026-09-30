// === Module 10762: SpendEarnOrbsLottie ===

// Module 10762 (SpendEarnOrbsLottie)
import LottieIcon from "LottieIcon" /* 9606 */;
import _mod10763 from "module_10763" /* 10763 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["Orbs-Spend_DarkTheme", "Orbs-Earn_DarkTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx");

export const SpendEarnOrbsLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod10763, ref, layers, markers: items });
});