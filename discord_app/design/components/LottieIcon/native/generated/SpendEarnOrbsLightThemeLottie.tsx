// === Module 14453: SpendEarnOrbsLightThemeLottie ===

// Module 14453 (SpendEarnOrbsLightThemeLottie)
import LottieIcon from "LottieIcon" /* 11878 */;
import _mod14454 from "module_14454" /* 14454 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["Orbs-Spend_LightTheme", "Orbs-Earn_LightTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx");

export function SpendEarnOrbsLightThemeLottie(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14454, ref: ref.ref, layers, markers: items });
}