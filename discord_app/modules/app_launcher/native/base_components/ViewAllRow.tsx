// === Module 11271: ViewAllRow ===

// Module 11271 (ViewAllRow)
import noopAll from "noop" /* 19 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import TableRowInner from "TableRowInner" /* 6291 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
let closure_4 = createCacheKey.createStyles({ expandCTALabelContainer: { alignItems: "center" } });
const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/base_components/ViewAllRow.tsx");

export default function ViewAllRow(title) {
  title = title.title;
  let formatToPlainStringResult;
  if (null != title) {
    const intl = getSystemLocale.intl;
    let obj = { title: null };
    obj[0] = title;
    formatToPlainStringResult = intl.formatToPlainString(getSystemLocale.t["bj/2kV"], obj);
  }
  obj = { style: callback().expandCTALabelContainer, children: null };
  obj1 = { color: "text-brand", variant: "text-md/semibold", children: null };
  const intl2 = getSystemLocale.intl;
  obj1[2] = intl2.format(getSystemLocale.t.gVw57p, {});
  obj[1] = jsx(Text.Text, { color: "text-brand", variant: "text-md/semibold", children: null });
  obj[1] = <View style={callback().expandCTALabelContainer}>{null}</View>;
  obj[2] = title.onPress;
  return jsx(TableRowInner.TableRow, { style: callback().expandCTALabelContainer, children: null });
};