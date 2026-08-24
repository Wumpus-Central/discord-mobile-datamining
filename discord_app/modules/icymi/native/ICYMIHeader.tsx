// === Module 15774: ICYMIHeader ===

// Module 15774 (ICYMIHeader)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createICYMIStyles from "createICYMIStyles" /* 15708 */;

require = arg1;
noopAll;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createICYMIStyles.createICYMIStyles((margin) => {
  obj = { text: obj, separator: null };
  obj = { flexDirection: "row", justifyContent: "space-between", marginHorizontal: margin.margin };
  obj = { height: 1, width: "100%", backgroundColor: ThemesDefault.colors.BORDER_SUBTLE, marginBottom: ThemesDefault.space.PX_16 };
  obj[1] = obj;
  return obj;
});
const result = require("set").fileFinishedImporting("modules/icymi/native/ICYMIHeader.tsx");

export default function ICYMIHeader() {
  const tmp = callback3();
  let obj = { children: null };
  obj = { style: tmp.separator };
  const items = [callback(View, obj), ];
  obj = { style: tmp.text, variant: "heading-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t["jnXV/V"]);
  items[1] = callback(Text.Text, obj);
  obj[0] = items;
  return callback2(closure_5, obj);
};