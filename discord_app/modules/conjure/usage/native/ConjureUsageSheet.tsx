// discord_app/modules/conjure/usage/native/ConjureUsageSheet.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3868 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import ConjureUsageTypes from "../ConjureUsageTypes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ConjureChatStore from "../../chat/ConjureChatStore.tsx";

require = fn;
function RoleRow(arg0) {
  ({ label, usage } = arg0);
  const tmp = closure_7();
  const obj = { style: tmp.row, children: null };
  const items = [
    hasOwnProperty(View, {
      style: tmp.label,
      children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label }),
    }),
  ];
  const obj3 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const obj2 = {
    style: tmp.label,
    children: hasOwnProperty(Text_Text.Text, { variant: "text-sm/medium", color: "text-default", children: label }),
  };
  obj3.children = ConjureUsageTypes.runeCount(usage).toLocaleString();
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj2 = {
  row: { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_8 },
  label: { flexShrink: 1 },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/usage/native/ConjureUsageSheet.tsx");

export default function ConjureUsageSheet(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_7();
  const items = [ConjureChatStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(
    items,
    () => ConjureChatStore.getProjectUsage(projectId),
    items1,
  );
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp2Result = tmp2(10859);
    const tmp2Result8 = tmp2(10859);
    const sumTokenUsageResult = tmp2(10859).sumTokenUsage(stateFromStores.orchestrator, stateFromStores.codegen);
    const tmp2Result9 = tmp2(10859);
    const obj2 = { header: null, children: null };
    const obj3 = { title: null };
    const intl = tmp2(1113).intl;
    obj3.title = intl.string(_modDef3868.p5EGzq);
    obj2.header = closure_5(tmp2(7321).BottomSheetTitleHeader, obj3);
    const obj4 = { children: null };
    const obj5 = { direction: "vertical", spacing: nativeDefault.space.PX_12, children: null };
    const obj6 = { variant: "text-md/semibold", color: "text-default", children: null };
    const intl2 = tmp2(1113).intl;
    const obj7 = { runes: null };
    const sumTokenUsageResult1 = tmp2Result.sumTokenUsage(
      sumTokenUsageResult,
      tmp2(10859).usageOrEmpty(stateFromStores.compaction),
    );
    const tmp2Result10 = tmp2(10859);
    obj7.runes = tmp2(10859).runesFromUsd(stateFromStores.cost_usd).toLocaleString();
    obj6.children = intl2.formatToPlainString(_modDef3868.gMuw5d, obj7);
    const items2 = [closure_5(tmp2(5624).Text, obj6), ,];
    const obj8 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: null };
    const obj9 = { label: null, usage: null };
    const intl3 = tmp2(1113).intl;
    obj9.label = intl3.string(_modDef3868.xtxP0e);
    obj9.usage = stateFromStores.orchestrator;
    const items3 = [closure_5(RoleRow, obj9), , , ,];
    const obj10 = { label: null, usage: null };
    const intl4 = tmp2(1113).intl;
    obj10.label = intl4.string(_modDef3868["9Sj3SX"]);
    obj10.usage = stateFromStores.codegen;
    items3[1] = closure_5(RoleRow, obj10);
    const obj11 = { label: null, usage: null };
    const intl5 = tmp2(1113).intl;
    obj11.label = intl5.string(_modDef3868.ANCEo3);
    const runesFromUsdResult = tmp2(10859).runesFromUsd(stateFromStores.cost_usd);
    obj11.usage = tmp2(10859).usageOrEmpty(stateFromStores.compaction);
    items3[2] = closure_5(RoleRow, obj11);
    const obj12 = { label: null, usage: null };
    const intl6 = tmp2(1113).intl;
    obj12.label = intl6.string(_modDef3868.ugL6D4);
    const tmp2Result11 = tmp2(10859);
    obj12.usage = tmp2(10859).usageOrEmpty(stateFromStores.classifier);
    items3[3] = closure_5(RoleRow, obj12);
    const obj13 = { label: null, usage: null };
    const intl7 = tmp2(1113).intl;
    obj13.label = intl7.string(_modDef3868.DHr5On);
    const tmp2Result12 = tmp2(10859);
    obj13.usage = tmp2(10859).usageOrEmpty(stateFromStores.image);
    items3[4] = closure_5(RoleRow, obj13);
    obj8.children = items3;
    items2[1] = closure_6(tmp2(6027).Stack, obj8);
    const obj14 = { style: tmp.row, children: null };
    const obj15 = { style: tmp.label, children: null };
    const obj16 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl8 = tmp2(1113).intl;
    obj16.children = intl8.string(_modDef3868["8OUg09"]);
    obj15.children = closure_5(tmp2(5624).Text, obj16);
    const items4 = [closure_5(View, obj15)];
    const obj17 = { variant: "text-sm/medium", color: "text-default", children: null };
    const _Math = Math;
    const tmp2Result13 = tmp2(10859);
    const _HermesInternal = HermesInternal;
    obj17.children = "" + Math.round(100 * tmp2(10859).cacheHitRate(sumTokenUsageResult1)) + "%";
    items4[1] = closure_5(tmp2(5624).Text, obj17);
    obj14.children = items4;
    items2[2] = closure_6(View, obj14);
    obj5.children = items2;
    obj4.children = closure_6(tmp2(6027).Stack, obj5);
    obj2.children = closure_5(View, obj4);
    return closure_5(tmp2(7366).ActionSheet, obj2);
  }
  const obj = projectId(504);
}
export const CONJURE_USAGE_SHEET_KEY = "ConjureUsageSheet";
