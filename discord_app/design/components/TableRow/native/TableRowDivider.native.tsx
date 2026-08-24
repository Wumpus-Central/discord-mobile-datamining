// discord_app/design/components/TableRow/native/TableRowDivider.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../../modules/themes/experiments/MobileVisualRefreshExperiment.tsx";
import map from "../../../tokens/native/useToken.tsx";
import result2 from "../../../migrations/native/LegacyTokens.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { getTableDividerWidth } from "TableRowConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

require = arg1;
noopAll;
let closure_6 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  const tmp = getTableDividerWidth(arg1);
  let num = 12;
  if (arg0) {
    num = arg2;
  }
  let prop;
  if (!arg1) {
    prop = ThemesDefault.colors.TABLEROW_BACKGROUND_DEFAULT;
  }
  obj = { container: obj, divider: null };
  obj = { backgroundColor: prop, height: tmp, paddingStart: num, marginTop: -tmp };
  obj = { height: tmp, backgroundColor: null };
  if (arg1) {
    let DIVIDER_BACKGROUND = ThemesDefault.colors.BORDER_SUBTLE;
  } else {
    DIVIDER_BACKGROUND = result2.DIVIDER_BACKGROUND;
  }
  obj[1] = DIVIDER_BACKGROUND;
  obj[1] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("design/components/TableRow/native/TableRowDivider.native.tsx");

export const TableRowDivider = function TableRowDivider(adjustSpacingForIcon) {
  let flag = adjustSpacingForIcon.adjustSpacingForIcon;
  if (flag === undefined) {
    flag = false;
  }
  let obj = map;
  const tmp2 = callback(flag, useIsMobileVisualRefreshExperimentEnabledDefault("TableRowDivider"), obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING));
  obj = { style: tmp2.container, children: <View {...obj} /> };
  obj = { style: tmp2.divider };
  return <View style={tmp2.divider} />;
};