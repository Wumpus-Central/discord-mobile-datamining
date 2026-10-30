// discord_app/design/components/LottieIcon/native/generated/SpendEarnOrbsLightThemeLottie.tsx
import LottieIcon from "../LottieIcon.tsx";
import _mod14454 from "../../../../../../_runtime/metro/14454__.js";
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

export function SpendEarnOrbsLightThemeLottie(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const merged1 = Object.assign(merged);
  return jsx(LottieIcon.LottieIcon, { dotLottie: _mod14454, ref: ref.ref, layers, markers: items });
}
