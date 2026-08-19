// === Module 14401: BountiesScrollRecapFooter ===

// Module 14401 (BountiesScrollRecapFooter)
import noopAll from "noop" /* 19 */;
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ManaContext from "ManaContext" /* 4104 */;
import Text from "Text" /* 4734 */;
import OrbsIcon from "OrbsIcon" /* 9238 */;
import { View } from "get ActivityIndicator" /* 17 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles(() => {
  let obj = { flex: 1, alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_4 };
  obj[0] = obj;
  obj[1] = { textTransform: "uppercase" };
  obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
  obj[2] = obj;
  obj[3] = { flex: 1, width: "100%" };
  let num = 0;
  if (obj4.isIOS()) {
    num = 6;
  }
  obj[4] = { marginTop: num };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx");

export const BountiesScrollRecapFooter = function BountiesScrollRecapFooter(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = callback3();
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t.d6Rrn6);
  { style: tmp.container, pointerEvents: "none", accessible: true, accessibilityRole: "text", accessibilityLabel: "" + stringResult + ", +" + orbAmount, children: null };
  let obj = { variant: "text-xs/bold", color: "text-brand", style: tmp.headerLabel, accessible: false, children: stringResult };
  const items = [callback(Text.Text, obj), ];
  obj = { style: tmp.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const items1 = [callback(OrbsIcon.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false }), callback(Text.Text, { variant: "display-sm", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount })];
  obj[3] = items1;
  items[1] = callback2(View, obj);
  obj[5] = items;
  return callback2(View, obj);
};
export const BountiesScrollRecapFooterGradient = function BountiesScrollRecapFooterGradient() {
  const items = [closure_4];
  const obj = { style: callback3().rive, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj[1] = callback(ManaContext.BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str });
  return callback(View, obj);
};