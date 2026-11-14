// === Module 10047: SpendEarnOrbsLightThemeLottie ===

// Module 10047 (SpendEarnOrbsLightThemeLottie)
import LottieIcon from "LottieIcon" /* 10048 */;
import _mod10049 from "module_10049" /* 10049 */;
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
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod10049, ref: ref.ref, layers, markers: items });
}