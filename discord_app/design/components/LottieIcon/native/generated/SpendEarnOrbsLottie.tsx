// === Module 14732: SpendEarnOrbsLottie ===

// Module 14732 (SpendEarnOrbsLottie)
import LottieIcon from "LottieIcon" /* 12123 */;
import _mod14733 from "module_14733" /* 14733 */;
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
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14733, ref: ref.ref, layers, markers: items });
}