// === Module 14739: FamilyCenterActivityTotal ===

// Module 14739 (FamilyCenterActivityTotal)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import Text from "Text" /* 4474 */;
import getEmptyActivityFormatter from "getEmptyActivityFormatter" /* 7348 */;
import useActionsForDisplayType from "useActionsForDisplayType" /* 14738 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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