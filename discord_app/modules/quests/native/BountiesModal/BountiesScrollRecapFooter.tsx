// === Module 17217: BountiesScrollRecapFooter ===

// Module 17217 (BountiesScrollRecapFooter)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import BountiesScrollGradientRive from "BountiesScrollGradientRive" /* 5273 */;
import Text_Text from "Text/Text" /* 5761 */;
import OrbsIcon from "OrbsIcon" /* 9679 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(5141);
let closure_7 = createStyles.createStyles(() => {
  const obj = { container: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4 }, orbRow: null, rive: null, orbAmount: null };
  const obj2 = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4 };
  obj.orbRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.rive = { flex: 1, width: "100%" };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  let num = 0;
  if (obj4.isIOS()) {
    num = 6;
  }
  obj.orbAmount = { marginTop: num };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx");

export function BountiesScrollRecapFooter(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = closure_7();
  const intl = util.intl;
  const stringResult = intl.string(util.t.d6Rrn6);
  const obj = { style: tmp.container, pointerEvents: "none", accessible: true, accessibilityRole: "text", accessibilityLabel: "" + stringResult + ", +" + orbAmount, children: null };
  items = [hasOwnProperty(Text_Text.Text, { variant: "body-sm/medium", color: "text-brand", accessible: false, children: stringResult }), ];
  const obj2 = { style: tmp.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const items1 = [hasOwnProperty(OrbsIcon.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false }), hasOwnProperty(Text_Text.Text, { variant: "display-sm", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount })];
  obj2.children = items1;
  items[1] = timestampProducer(View, obj2);
  obj.children = items;
  return timestampProducer(View, obj);
}
export function BountiesScrollRecapFooterGradient() {
  const tmp = closure_7();
  items = [AccessibilityStore];
  const obj2 = { style: tmp.rive, children: null };
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj2.children = hasOwnProperty(BountiesScrollGradientRive.BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str });
  return hasOwnProperty(View, obj2);
}