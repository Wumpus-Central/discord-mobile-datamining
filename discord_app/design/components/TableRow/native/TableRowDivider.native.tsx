// discord_app/design/components/TableRow/native/TableRowDivider.native.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../tokens/native/useToken.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { TABLE_DIVIDER_WIDTH } from "TableRowConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../Styles/native/createStyles.tsx";

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
