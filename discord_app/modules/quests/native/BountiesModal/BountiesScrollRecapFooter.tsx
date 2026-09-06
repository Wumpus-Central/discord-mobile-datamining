// === Module 15047: BountiesScrollRecapFooter ===

// Module 15047 (BountiesScrollRecapFooter)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 4271 */;
import Text_Text from "Text/Text" /* 4556 */;
import OrbsIcon from "OrbsIcon" /* 8837 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles(() => {
  let obj = { container: null, headerLabel: null, orbRow: null, rive: null, orbAmount: null };
  obj = { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4 };
  obj.container = obj;
  obj.headerLabel = { textTransform: "uppercase" };
  obj = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
  obj.orbRow = obj;
  obj.rive = { flex: 1, width: "100%" };
  let num = 0;
  if (obj4.isIOS()) {
    num = 6;
  }
  obj.orbAmount = { marginTop: num };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx");

export const BountiesScrollRecapFooter = function BountiesScrollRecapFooter(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = closure_7();
  const intl = util.intl;
  const stringResult = intl.string(util.t.d6Rrn6);
  let obj = { style: tmp.container, pointerEvents: "none", accessible: true, accessibilityRole: "text", accessibilityLabel: "" + stringResult + ", +" + orbAmount, children: null };
  obj = { variant: "text-xs/bold", color: "text-brand", style: tmp.headerLabel, accessible: false, children: stringResult };
  const items = [hasOwnProperty(Text_Text.Text, obj), ];
  obj = { style: tmp.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const items1 = [hasOwnProperty(OrbsIcon.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false }), hasOwnProperty(Text_Text.Text, { variant: "display-sm", color: "text-strong", accessible: false, style: tmp.orbAmount, children: "+" + orbAmount })];
  obj.children = items1;
  items[1] = timestampProducer(View, obj);
  obj.children = items;
  return timestampProducer(View, obj);
};
export const BountiesScrollRecapFooterGradient = function BountiesScrollRecapFooterGradient() {
  const items = [AccessibilityStore];
  const obj = { style: closure_7().rive, children: null };
  const stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj.children = hasOwnProperty(native.BountiesScrollGradientRive, { stateMachine: "State Machine 1", fit: "fill", alignment: "bottom-center", withReducedMotion: str });
  return hasOwnProperty(View, obj);
};