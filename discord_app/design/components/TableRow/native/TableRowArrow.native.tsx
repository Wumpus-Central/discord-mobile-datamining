// === Module 5571: TableRowArrow ===

// Module 5571 (TableRowArrow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import IconSizes from "IconSizes" /* 4895 */;
import IconSizesDefault from "IconSizes" /* 4895 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
noopAll;
createCacheKey = { icon: null, iconColor: null };
createCacheKey = { width: ThemesDefault.modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: ThemesDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: ThemesDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj1 = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("set").fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = function TableRowArrow() {
  const tmp4 = callback();
  const obj = { style: tmp4.icon, color: tmp4.iconColor.color, source: null, size: null };
  const tmp = importDefault;
  const tmp3 = useIsMobileVisualRefreshExperimentEnabledDefault("TableRowArrow");
  const tmp5 = jsx;
  obj[2] = tmp(tmp3 ? 5572 : 5573);
  obj[3] = IconSizes.IconSizes.CUSTOM;
  return tmp5(IconSizesDefault, obj);
};