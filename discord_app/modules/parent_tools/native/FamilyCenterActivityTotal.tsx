import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getEmptyActivityFormatter } from "../FamilyCenterUtils.tsx";
import { useActionsForDisplayType } from "../hooks/useFamilyCenterActivities.tsx";
// discord_app/modules/parent_tools/native/FamilyCenterActivityTotal.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c3;
let c4;
const require = arg1;
({ jsx: c3, jsxs: c4 } = jsxProd);
createCacheKey = { container: null };
createCacheKey = { display: "flex", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGHEST, padding: 12, justifyContent: "center", alignItems: "center", borderRadius: require("Themes").radii.md };
const merged = Object.assign(require("Themes").shadows.SHADOW_LEDGE);
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityTotal.tsx");

export default function FamilyCenterActivityTotal(displayType) {
  displayType = displayType.displayType;
  let obj = useActionsForDisplayType /* useActionsForDisplayType */;
  const actionTotalsForDisplayType = obj.useActionTotalsForDisplayType(displayType);
  const tmp = createCacheKey();
  let num = useActionsForDisplayType /* useActionsForDisplayType */.useFormattedTotalForDisplayType(displayType);
  let str = "text-muted";
  if (actionTotalsForDisplayType > 0) {
    str = "text-brand";
  }
  const obj2 = useActionsForDisplayType /* useActionsForDisplayType */;
  const activityTypeTextConfigs = getEmptyActivityFormatter /* getEmptyActivityFormatter */.getActivityTypeTextConfigs();
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
  const items = [closure_3(Text /* Text */.Text, obj), closure_3(Text /* Text */.Text, { variant: "text-sm/semibold", children: tooltipHeaderResult })];
  obj[1] = items;
  return closure_4(View, obj);
};