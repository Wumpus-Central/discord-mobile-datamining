// === Module 5565: TableRowDivider ===

// Module 5565 (TableRowDivider)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import map from "map" /* 4197 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { TABLE_DIVIDER_WIDTH } from "TABLE_ROW_HEIGHT" /* 5566 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
let closure_6 = createCacheKey.createStyles((arg0, arg1) => {
  let obj = { height: TABLE_DIVIDER_WIDTH, paddingStart: null, marginTop: null };
  let num = 12;
  if (arg0) {
    num = arg1;
  }
  obj = { container: obj, divider: num };
  obj[2] = -TABLE_DIVIDER_WIDTH;
  obj = { height: tmp, backgroundColor: ThemesDefault.colors.BORDER_SUBTLE };
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
  const tmp = callback(flag, obj.useToken(ThemesDefault.modules.mobile.TABLE_ROW_DIVIDER_PADDING));
  obj = { style: tmp.container, children: <View {...obj} /> };
  obj = { style: tmp.divider };
  return <View style={tmp.divider} />;
};