// discord_app/design/components/TableRow/native/TableRowArrow.native.tsx
import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../../modules/themes/experiments/MobileVisualRefreshExperiment.tsx";
import { IconSizes } from "../../../void/Icon/native/Icon.tsx";

const require = arg1;
createCacheKey = { icon: null, iconColor: null };
createCacheKey = { width: require("Themes").modules.mobile.TABLE_ROW_ARROW_WIDTH, height: 24, marginStart: require("Themes").modules.mobile.TABLE_ROW_ARROW_MARGIN_START, marginEnd: require("Themes").modules.mobile.TABLE_ROW_ARROW_MARGIN_END };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { color: require("Themes").colors.INTERACTIVE_TEXT_DEFAULT };
const result = require("createCacheKey").fileFinishedImporting("design/components/TableRow/native/TableRowArrow.native.tsx");

export const TableRowArrow = function TableRowArrow() {
  const tmp4 = createCacheKey();
  const obj = { style: tmp4.icon, color: tmp4.iconColor.color, source: null, size: null };
  const tmp = importDefault;
  const tmp3 = useIsMobileVisualRefreshExperimentEnabled("TableRowArrow");
  const tmp5 = jsx;
  obj[2] = tmp(tmp3 ? 6298 : 6299);
  obj[3] = IconSizes.IconSizes.CUSTOM;
  return tmp5(IconSizes, obj);
};