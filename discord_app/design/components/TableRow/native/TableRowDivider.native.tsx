import "noop";
import { View } from "get ActivityIndicator";
import { getTableDividerWidth } from "TABLE_ROW_HEIGHT";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_6 = createCacheKey.createStyles((arg0, arg1, arg2) => {
  const tmp = getTableDividerWidth(arg1);
  let num = 12;
  if (arg0) {
    num = arg2;
  }
  let prop;
  if (!arg1) {
    prop = importDefault(712).colors.TABLEROW_BACKGROUND_DEFAULT;
  }
  obj = { container: obj, divider: null };
  obj = { backgroundColor: prop, height: tmp, paddingStart: num, marginTop: -tmp };
  obj = { height: tmp, backgroundColor: null };
  if (arg1) {
    let DIVIDER_BACKGROUND = importDefault(712).colors.BORDER_SUBTLE;
  } else {
    DIVIDER_BACKGROUND = require(5096) /* result */.DIVIDER_BACKGROUND;
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
  let obj = require(3959) /* map */;
  const tmp2 = callback(flag, importDefault(1348)("TableRowDivider"), obj.useToken(importDefault(712).modules.mobile.TABLE_ROW_DIVIDER_PADDING));
  obj = { style: tmp2.container, children: <View {...obj} /> };
  obj = { style: tmp2.divider };
  return <View style={tmp2.divider} />;
};