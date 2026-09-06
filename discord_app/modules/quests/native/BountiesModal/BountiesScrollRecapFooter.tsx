// discord_app/modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import OrbsIcon from "../../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

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
  let obj = {
    style: tmp.container,
    pointerEvents: "none",
    accessible: true,
    accessibilityRole: "text",
    accessibilityLabel: "" + stringResult + ", +" + orbAmount,
    children: null,
  };
  obj = {
    variant: "text-xs/bold",
    color: "text-brand",
    style: tmp.headerLabel,
    accessible: false,
    children: stringResult,
  };
  const items = [hasOwnProperty(Text_Text.Text, obj)];
  obj = { style: tmp.orbRow, accessible: false, importantForAccessibility: "no-hide-descendants", children: null };
  const items1 = [
    hasOwnProperty(OrbsIcon.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false }),
    hasOwnProperty(Text_Text.Text, {
      variant: "display-sm",
      color: "text-strong",
      accessible: false,
      style: tmp.orbAmount,
      children: "+" + orbAmount,
    }),
  ];
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
  obj.children = hasOwnProperty(native.BountiesScrollGradientRive, {
    stateMachine: "State Machine 1",
    fit: "fill",
    alignment: "bottom-center",
    withReducedMotion: str,
  });
  return hasOwnProperty(View, obj);
};
