// === Module 9309: SpendEarnOrbsLottie ===

// Module 9309 (SpendEarnOrbsLottie)
import LottieIcon from "LottieIcon" /* 9307 */;
import _mod9310 from "module_9310" /* 9310 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["Orbs-Spend_DarkTheme", "Orbs-Earn_DarkTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLottie.tsx");

export function SpendEarnOrbsLottie(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod9310, ref: ref.ref, layers, markers: items });
}