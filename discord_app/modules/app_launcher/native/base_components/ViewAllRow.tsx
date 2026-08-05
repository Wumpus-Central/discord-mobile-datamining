import { TableRowInner } from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
// discord_app/modules/app_launcher/native/base_components/ViewAllRow.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ expandCTALabelContainer: { alignItems: "center" } });
const result = require("jsxProd").fileFinishedImporting("modules/app_launcher/native/base_components/ViewAllRow.tsx");

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
  const obj1 = { color: "text-brand", variant: "text-md/semibold", children: null };
  const intl2 = tmp3(1236).intl;
  obj1[2] = intl2.format(getSystemLocale /* getSystemLocale */.t.gVw57p, {});
  obj[1] = jsx(Text /* Text */.Text, { color: "text-brand", variant: "text-md/semibold", children: null });
  obj[1] = <View style={callback().expandCTALabelContainer}>{null}</View>;
  obj[2] = title.onPress;
  return jsx(TableRowInner /* TableRowInner */.TableRow, { style: callback().expandCTALabelContainer, children: null });
};