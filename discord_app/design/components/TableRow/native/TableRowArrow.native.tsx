// === Module 5614: TableRowArrow ===

// Module 5614 (TableRowArrow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import IconSizes from "IconSizes" /* 4930 */;
import IconSizesDefault from "IconSizes" /* 4930 */;
import registerAssetDefault from "registerAsset" /* 5615 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

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
  const tmp = callback();
  const obj = { style: tmp.icon, color: tmp.iconColor.color, source: registerAssetDefault, size: IconSizes.IconSizes.CUSTOM };
  return jsx(IconSizesDefault, { style: tmp.icon, color: tmp.iconColor.color, source: registerAssetDefault, size: IconSizes.IconSizes.CUSTOM });
};