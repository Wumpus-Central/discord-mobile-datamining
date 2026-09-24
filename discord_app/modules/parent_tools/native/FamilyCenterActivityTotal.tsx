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
const createStyles = fn(4829);
let obj2 = { container: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LEDGE);
obj2.container = {
  display: "flex",
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGHEST,
  padding: 12,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
};
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityTotal.tsx");

export default function FamilyCenterActivityTotal(displayType) {
  displayType = displayType.displayType;
  const tmp = closure_5();
  const actionTotalsForDisplayType = useFamilyCenterActivities.useActionTotalsForDisplayType(displayType);
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
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { variant: "heading-xxl/medium", color: str, children: null };
  if (num == null) {
    num = 0;
  }
  obj4.children = num;
  const items = [
    React3(Text_Text.Text, obj4),
    React3(Text_Text.Text, { variant: "text-sm/semibold", children: tooltipHeaderResult }),
  ];
  obj3.children = items;
  return React4(View, obj3);
}
