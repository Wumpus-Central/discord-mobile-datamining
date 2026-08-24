// discord_app/design/components/TableRow/native/TableRowArrow.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../../modules/themes/experiments/MobileVisualRefreshExperiment.tsx";
import IconSizes from "../../../void/Icon/native/Icon.tsx";
import IconSizesDefault from "../../../void/Icon/native/Icon.tsx";
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
  const tmp4 = callback();
  const obj = { style: tmp4.icon, color: tmp4.iconColor.color, source: null, size: null };
  const tmp = importDefault;
  const tmp3 = useIsMobileVisualRefreshExperimentEnabledDefault("TableRowArrow");
  const tmp5 = jsx;
  obj[2] = tmp(tmp3 ? 6298 : 6299);
  obj[3] = IconSizes.IconSizes.CUSTOM;
  return tmp5(IconSizesDefault, obj);
};