// discord_app/design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx
import LottieIcon from "../LottieIcon.tsx";
import _mod11095 from "../../../../../../_runtime/metro/11095__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const layers = ["Orbs-Spend_LightTheme", "Orbs-Earn_LightTheme"];
const items = [
  { name: "earn", start: 0, duration: 180 },
  { name: "spend", start: 240, duration: 180 },
];
const size = fn(2);
const result = size.fileFinishedImporting(
  "design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx",
);

export const SpendEarnOrbsLightThemeLottie = noop.forwardRef((arg0, ref) => {
  const merged = Object.assign(arg0);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod11095, ref, layers, markers: items });
});
