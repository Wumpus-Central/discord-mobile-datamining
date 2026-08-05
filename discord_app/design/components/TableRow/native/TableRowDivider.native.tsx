// discord_app/design/components/TableRow/native/TableRowDivider.native.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { getTableDividerWidth } from "TABLE_ROW_HEIGHT";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../../modules/themes/experiments/MobileVisualRefreshExperiment.tsx";
import { result } from "../../../migrations/native/LegacyTokens.tsx";
import { map } from "../../../tokens/native/useToken.tsx";

const require = arg1;
let closure_6 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  const tmp = getTableDividerWidth(arg1);
  let num = 12;
  if (arg0) {
    num = arg2;
  }
  let prop;
  if (!arg1) {
    prop = Themes.colors.TABLEROW_BACKGROUND_DEFAULT;
  }
  obj = { container: obj, divider: null };
  obj = { backgroundColor: prop, height: tmp, paddingStart: num, marginTop: -tmp };
  obj = { height: tmp, backgroundColor: null };
  if (arg1) {
    let DIVIDER_BACKGROUND = Themes.colors.BORDER_SUBTLE;
  } else {
    DIVIDER_BACKGROUND = result /* result */.DIVIDER_BACKGROUND;
  }
  obj[1] = DIVIDER_BACKGROUND;
  obj[1] = obj;
  return obj;
});
const result = require("TABLE_ROW_HEIGHT").fileFinishedImporting("design/components/TableRow/native/TableRowDivider.native.tsx");

export const TableRowDivider = function TableRowDivider(adjustSpacingForIcon) {
  let flag = adjustSpacingForIcon.adjustSpacingForIcon;
  if (flag === undefined) {
    flag = false;
  }
  let obj = map /* map */;
  const tmp2 = callback(flag, useIsMobileVisualRefreshExperimentEnabled("TableRowDivider"), obj.useToken(Themes.modules.mobile.TABLE_ROW_DIVIDER_PADDING));
  obj = { style: tmp2.container, children: <View {...obj} /> };
  obj = { style: tmp2.divider };
  return <View style={tmp2.divider} />;
};