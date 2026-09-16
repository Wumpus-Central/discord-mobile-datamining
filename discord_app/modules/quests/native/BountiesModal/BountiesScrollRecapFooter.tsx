// discord_app/modules/quests/native/BountiesModal/BountiesScrollRecapFooter.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useTypeConsolidationTextTransform from "../../../design/useTypeConsolidationTextTransform.tsx";
import OrbsIcon from "../../../../design/components/Icon/native/redesign/generated/OrbsIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4638);
let closure_7 = createStyles.createStyles(() => {
  const obj = {
    container: { flex: 1, alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4 },
    headerLabel: { textTransform: "uppercase" },
    orbRow: null,
    rive: null,
    orbAmount: null,
  };
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

export const BountiesScrollRecapFooter = function BountiesScrollRecapFooter(orbAmount) {
  orbAmount = orbAmount.orbAmount;
  const tmp = closure_7();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow(
    "BountiesScrollRecapFooter",
    "text-xs/bold",
  );
  const intl = util.intl;
  const stringResult = intl.string(util.t.d6Rrn6);
  const obj2 = {
    style: tmp.container,
    pointerEvents: "none",
    accessible: true,
    accessibilityRole: "text",
    accessibilityLabel: "" + stringResult + ", +" + orbAmount,
    children: null,
  };
  const obj3 = {
    variant: typeConsolidationEyebrow.variant,
    color: "text-brand",
    style: null,
    accessible: false,
    children: stringResult,
  };
  const items = [tmp.headerLabel, typeConsolidationEyebrow.style];
  obj3.style = items;
  const items1 = [hasOwnProperty(Text_Text.Text, obj3)];
  const obj4 = {
    style: tmp.orbRow,
    accessible: false,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  const items2 = [hasOwnProperty(OrbsIcon.OrbsIcon, { size: "sm", color: "icon-strong", accessible: false })];
  items2[1] = hasOwnProperty(Text_Text.Text, {
    variant: "display-sm",
    color: "text-strong",
    accessible: false,
    style: tmp.orbAmount,
    children: "+" + orbAmount,
  });
  obj4.children = items2;
  items1[1] = timestampProducer(View, obj4);
  obj2.children = items1;
  return timestampProducer(View, obj2);
};
export const BountiesScrollRecapFooterGradient = function BountiesScrollRecapFooterGradient() {
  const tmp = closure_7();
  const items = [AccessibilityStore];
  const obj2 = { style: tmp.rive, children: null };
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let str = "play";
  if (stateFromStores) {
    str = "halt";
  }
  obj2.children = hasOwnProperty(native.BountiesScrollGradientRive, {
    stateMachine: "State Machine 1",
    fit: "fill",
    alignment: "bottom-center",
    withReducedMotion: str,
  });
  return hasOwnProperty(View, obj2);
};
