// === Module 14161: BountiesScrollRecapFooter ===

// Module 14161 (BountiesScrollRecapFooter)
import "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
const require = arg1;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles(() => {
  let obj = { container: null, headerLabel: null, orbRow: null, rive: null, orbAmount: null };
  obj = { flex: 1, alignItems: "center", justifyContent: "center", gap: importDefault(712).space.PX_4 };
  obj[0] = obj;
  obj[1] = { textTransform: "uppercase" };
  obj = { flexDirection: "row", alignItems: "center", gap: importDefault(712).space.PX_4 };
  obj[2] = obj;
  obj[3] = { flex: 1, width: "100%" };
  let num = 0;
  if (obj4.isIOS()) {
    num = 6;
  }
  obj[4] = { marginTop: num };
  return obj;
});
const result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx");

export const BountiesScrollRecapFooter = function BountiesScrollRecapFooter(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = callback3();
  const intl = require(1236) /* getSystemLocale */.intl;
  const stringResult = intl.string(require(1236) /* getSystemLocale */.t.d6Rrn6);
  let obj = { style: tmp.container, pointerEvents: "none", accessible: true, accessibilityRole: "text", accessibilityLabel: "" + stringResult + ", +" + orbAmount, children: null };
  obj = { variant: "text-xs/bold", color: "text-brand", style: tmp.headerLabel, accessible: false, children: stringResult };
  const items = [callback(require(4251) /* Text */.Text, obj), ];
  obj = { style: tmp.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const items1 = [callback(require(8891) /* OrbsIcon */.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false }), ];
  const obj1 = { variant: "display-sm", color: "text-strong", accessible: false, style: tmp.orbAmount, children: null };
  obj1[4] = "+" + orbAmount;
  items1[1] = callback(require(4251) /* Text */.Text, obj1);
  obj[3] = items1;
  items[1] = callback2(View, obj);
  obj[5] = items;
  return callback2(View, obj);
};
export const BountiesScrollRecapFooterGradient = function BountiesScrollRecapFooterGradient() {
  let obj = require(589) /* initialize */;
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  obj = { style: callback3().rive, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj[1] = closure_5(require(3967) /* ManaContext */.BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str });
  return closure_5(View, obj);
};