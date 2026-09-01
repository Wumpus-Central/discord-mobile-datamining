// === Module 11666: ViewAllRow ===

// Module 11666 (ViewAllRow)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4474 */;
import TableRowInner from "TableRowInner" /* 5599 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ expandCTALabelContainer: { alignItems: "center" } });
const result = require("set").fileFinishedImporting("modules/app_launcher/native/base_components/ViewAllRow.tsx");

export default function ViewAllRow(title) {
  title = title.title;
  let formatToPlainStringResult;
  if (null != title) {
    const intl = tmp3(1236).intl;
    let obj = { title: null };
    obj[0] = title;
    formatToPlainStringResult = intl.formatToPlainString(tmp3(1236).t["bj/2kV"], obj);
  }
  obj = { accessibilityLabel: formatToPlainStringResult, label: null, onPress: null, end: true };
  obj = { style: callback().expandCTALabelContainer, children: null };
  obj1 = { color: "text-brand", variant: "text-md/semibold", children: null };
  const intl2 = tmp3(1236).intl;
  obj1[2] = intl2.format(getSystemLocale.t.gVw57p, {});
  obj[1] = jsx(Text.Text, { color: "text-brand", variant: "text-md/semibold", children: null });
  obj[1] = <View style={callback().expandCTALabelContainer}>{null}</View>;
  obj[2] = title.onPress;
  return jsx(TableRowInner.TableRow, { style: callback().expandCTALabelContainer, children: null });
};