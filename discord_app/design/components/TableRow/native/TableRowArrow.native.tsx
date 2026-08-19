// === Module 6297: TableRowArrow ===

// Module 6297 (TableRowArrow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import IconSizes from "IconSizes" /* 4747 */;
import IconSizesDefault from "IconSizes" /* 4747 */;
import { jsx } from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { width: ThemesDefault.modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: ThemesDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: ThemesDefault.modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = function TableRowArrow() {
  const tmp4 = callback();
  const obj = { style: tmp4.icon, color: tmp4.iconColor.color, source: null, size: null };
  const tmp3 = useIsMobileVisualRefreshExperimentEnabledDefault("TableRowArrow");
  obj[2] = importDefault(tmp3 ? 6298 : 6299);
  obj[3] = IconSizes.IconSizes.CUSTOM;
  return jsx(IconSizesDefault, { style: tmp4.icon, color: tmp4.iconColor.color, source: null, size: null });
};