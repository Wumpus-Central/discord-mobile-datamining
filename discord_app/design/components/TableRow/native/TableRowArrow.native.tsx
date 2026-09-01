// discord_app/design/components/TableRow/native/TableRowArrow.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import IconSizes from "../../../void/Icon/native/Icon.tsx";
import IconSizesDefault from "../../../void/Icon/native/Icon.tsx";
import registerAssetDefault from "../../../../../_runtime/05607_registerAsset.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

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