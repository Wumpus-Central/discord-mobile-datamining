// discord_app/modules/parent_tools/native/FamilyCenterActivityTotal.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import getEmptyActivityFormatter from "../FamilyCenterUtils.tsx";
import useActionsForDisplayType from "../hooks/useFamilyCenterActivities.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { display: "flex", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGHEST, padding: 12, justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.md };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_LEDGE);
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityTotal.tsx");

export default function FamilyCenterActivityTotal(displayType) {
  displayType = displayType.displayType;
  let obj = useActionsForDisplayType;
  const actionTotalsForDisplayType = obj.useActionTotalsForDisplayType(displayType);
  const tmp = callback();
  let num = useActionsForDisplayType.useFormattedTotalForDisplayType(displayType);
  let str = "text-muted";
  if (actionTotalsForDisplayType > 0) {
    str = "text-brand";
  }
  const obj2 = useActionsForDisplayType;
  const activityTypeTextConfigs = getEmptyActivityFormatter.getActivityTypeTextConfigs();
  const value = activityTypeTextConfigs.get(displayType);
  let tooltipHeaderResult;
  if (value != null) {
    tooltipHeaderResult = value.tooltipHeader();
  }
  obj = { style: tmp.container, children: null };
  obj = { variant: "heading-xxl/medium", color: str, children: null };
  if (num == null) {
    num = 0;
  }
  obj[2] = num;
  const items = [closure_3(Text.Text, obj), closure_3(Text.Text, { variant: "text-sm/semibold", children: tooltipHeaderResult })];
  obj[1] = items;
  return closure_4(View, obj);
};