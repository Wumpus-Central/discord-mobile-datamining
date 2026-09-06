// discord_app/modules/parent_tools/native/FamilyCenterActivityTotal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import FamilyCenterUtils from "../FamilyCenterUtils.tsx";
import useFamilyCenterActivities from "../hooks/useFamilyCenterActivities.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
let createStyles = { container: null };
createStyles = {
  display: "flex",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  padding: 12,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_LEDGE);
createStyles.container = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityTotal.tsx");

export default function FamilyCenterActivityTotal(displayType) {
  displayType = displayType.displayType;
  let obj = useFamilyCenterActivities;
  const actionTotalsForDisplayType = obj.useActionTotalsForDisplayType(displayType);
  const tmp = closure_5();
  let num = useFamilyCenterActivities.useFormattedTotalForDisplayType(displayType);
  let str = "text-muted";
  if (actionTotalsForDisplayType > 0) {
    str = "text-brand";
  }
  const activityTypeTextConfigs = FamilyCenterUtils.getActivityTypeTextConfigs();
  value = activityTypeTextConfigs.get(displayType);
  let tooltipHeaderResult;
  if (value != null) {
    tooltipHeaderResult = value.tooltipHeader();
  }
  obj = { style: tmp.container, children: null };
  obj = { variant: "heading-xxl/medium", color: str, children: null };
  if (num == null) {
    num = 0;
  }
  obj.children = num;
  const items = [
    React3(Text_Text.Text, obj),
    React3(Text_Text.Text, { variant: "text-sm/semibold", children: tooltipHeaderResult }),
  ];
  obj.children = items;
  return React4(View, obj);
}
