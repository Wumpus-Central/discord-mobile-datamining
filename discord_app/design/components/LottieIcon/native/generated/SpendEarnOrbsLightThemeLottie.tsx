// === Module 11189: SpendEarnOrbsLightThemeLottie ===

// Module 11189 (SpendEarnOrbsLightThemeLottie)
import LottieIcon from "LottieIcon" /* 10039 */;
import _mod11190 from "module_11190" /* 11190 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const layers = ["Orbs-Spend_LightTheme", "Orbs-Earn_LightTheme"];
const items = [{ name: "earn", start: 0, duration: 180 }, { name: "spend", start: 240, duration: 180 }];
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx");

export const SpendEarnOrbsLightThemeLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod11190, ref, layers, markers: items });
});