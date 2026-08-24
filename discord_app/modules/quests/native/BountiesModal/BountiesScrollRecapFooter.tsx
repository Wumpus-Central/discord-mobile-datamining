// discord_app/modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import ManaContext from "../../../../../discord_common/js/packages/design/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import OrbsIcon from "../../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_4 from "../../../a11y/AccessibilityStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles(() => {
  let obj = { container: null, headerLabel: null, orbRow: null, rive: null, orbAmount: null };
  obj = { flex: 1, alignItems: "center", justifyContent: "center", gap: ThemesDefault.space.PX_4 };
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
const result = require("set").fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx");

export const BountiesScrollRecapFooter = function BountiesScrollRecapFooter(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = callback3();
  const intl = getSystemLocale.intl;
  const stringResult = intl.string(getSystemLocale.t.d6Rrn6);
  let obj = { style: tmp.container, pointerEvents: "none", accessible: true, accessibilityRole: "text", accessibilityLabel: "" + stringResult + ", +" + orbAmount, children: null };
  obj = { variant: "text-xs/bold", color: "text-brand", style: tmp.headerLabel, accessible: false, children: stringResult };
  const items = [callback(Text.Text, obj), ];
  obj = { style: tmp.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const items1 = [callback(OrbsIcon.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false }), callback(Text.Text, { variant: "display-sm", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount })];
  obj[3] = items1;
  items[1] = callback2(View, obj);
  obj[5] = items;
  return callback2(View, obj);
};
export const BountiesScrollRecapFooterGradient = function BountiesScrollRecapFooterGradient() {
  let obj = initialize;
  const items = [closure_4];
  obj = { style: callback3().rive, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj[1] = closure_5(ManaContext.BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str });
  return closure_5(View, obj);
};