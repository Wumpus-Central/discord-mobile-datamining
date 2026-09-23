// discord_app/modules/vibegrations/native/VibegrationsUsageSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef3712 from "../intl/VibegrationsUntranslated.messages.js";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import VibegrationsTypes from "../VibegrationsTypes.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import VibegrationsChatStore from "../stores/VibegrationsChatStore.tsx";

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
  obj3.children = VibegrationsTypes.runeCount(usage).toLocaleString();
  items[1] = hasOwnProperty(Text_Text.Text, obj3);
  obj.children = items;
  return timestampProducer(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  row: { flexDirection: "row", alignItems: "baseline", justifyContent: "space-between", gap: nativeDefault.space.PX_8 },
  label: { flexShrink: 1 },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/vibegrations/native/VibegrationsUsageSheet.tsx");

export default function VibegrationsUsageSheet(projectId) {
  projectId = projectId.projectId;
  const tmp = closure_7();
  const items = [VibegrationsChatStore];
  const items1 = [projectId];
  const stateFromStores = projectId(504).useStateFromStores(
    items,
    () => VibegrationsChatStore.getProjectUsage(projectId),
    items1,
  );
  if (null == stateFromStores) {
    return null;
  } else {
    const tmp2Result = tmp2(5361);
    const tmp2Result7 = tmp2(5361);
    const sumTokenUsageResult = tmp2(5361).sumTokenUsage(stateFromStores.orchestrator, stateFromStores.codegen);
    const tmp2Result8 = tmp2(5361);
    const obj2 = { header: null, children: null };
    const obj3 = { title: null };
    const intl = tmp2(1115).intl;
    obj3.title = intl.string(_modDef3712["9yoLWZ"]);
    obj2.header = closure_5(tmp2(7480).BottomSheetTitleHeader, obj3);
    const obj4 = { children: null };
    const obj5 = { direction: "vertical", spacing: nativeDefault.space.PX_12, children: null };
    const obj6 = { variant: "text-md/semibold", color: "text-default", children: null };
    const intl2 = tmp2(1115).intl;
    const obj7 = { runes: null };
    const sumTokenUsageResult1 = tmp2Result.sumTokenUsage(
      sumTokenUsageResult,
      tmp2(5361).usageOrEmpty(stateFromStores.compaction),
    );
    const tmp2Result9 = tmp2(5361);
    obj7.runes = tmp2(5361).runesFromUsd(stateFromStores.cost_usd).toLocaleString();
    obj6.children = intl2.formatToPlainString(_modDef3712["4PFO2p"], obj7);
    const items2 = [closure_5(tmp2(4823).Text, obj6), ,];
    const obj8 = { direction: "vertical", spacing: nativeDefault.space.PX_4, children: null };
    const obj9 = { label: null, usage: null };
    const intl3 = tmp2(1115).intl;
    obj9.label = intl3.string(_modDef3712.hk4jJr);
    obj9.usage = stateFromStores.orchestrator;
    const items3 = [closure_5(RoleRow, obj9), , ,];
    const obj10 = { label: null, usage: null };
    const intl4 = tmp2(1115).intl;
    obj10.label = intl4.string(_modDef3712.R9aduM);
    obj10.usage = stateFromStores.codegen;
    items3[1] = closure_5(RoleRow, obj10);
    const obj11 = { label: null, usage: null };
    const intl5 = tmp2(1115).intl;
    obj11.label = intl5.string(_modDef3712.Tj6b30);
    const runesFromUsdResult = tmp2(5361).runesFromUsd(stateFromStores.cost_usd);
    obj11.usage = tmp2(5361).usageOrEmpty(stateFromStores.compaction);
    items3[2] = closure_5(RoleRow, obj11);
    const obj12 = { label: null, usage: null };
    const intl6 = tmp2(1115).intl;
    obj12.label = intl6.string(_modDef3712.vVUMwj);
    const tmp2Result10 = tmp2(5361);
    obj12.usage = tmp2(5361).usageOrEmpty(stateFromStores.classifier);
    items3[3] = closure_5(RoleRow, obj12);
    obj8.children = items3;
    items2[1] = closure_6(tmp2(5269).Stack, obj8);
    const obj13 = { style: tmp.row, children: null };
    const obj14 = { style: tmp.label, children: null };
    const obj15 = { variant: "text-sm/normal", color: "text-muted", children: null };
    const intl7 = tmp2(1115).intl;
    obj15.children = intl7.string(_modDef3712["kILb+R"]);
    obj14.children = closure_5(tmp2(4823).Text, obj15);
    const items4 = [closure_5(View, obj14)];
    const obj16 = { variant: "text-sm/medium", color: "text-default", children: null };
    const _Math = Math;
    const tmp2Result11 = tmp2(5361);
    const _HermesInternal = HermesInternal;
    obj16.children = "" + Math.round(100 * tmp2(5361).cacheHitRate(sumTokenUsageResult1)) + "%";
    items4[1] = closure_5(tmp2(4823).Text, obj16);
    obj13.children = items4;
    items2[2] = closure_6(View, obj13);
    obj5.children = items2;
    obj4.children = closure_6(tmp2(5269).Stack, obj5);
    obj2.children = closure_5(View, obj4);
    return closure_5(tmp2(7528).ActionSheet, obj2);
  }
  const obj = projectId(504);
}
export const VIBEGRATIONS_USAGE_SHEET_KEY = "VibegrationsUsageSheet";
