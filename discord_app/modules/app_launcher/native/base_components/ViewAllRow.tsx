// discord_app/modules/app_launcher/native/base_components/ViewAllRow.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import TableRowInner from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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