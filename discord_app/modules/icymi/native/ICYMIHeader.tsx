// discord_app/modules/icymi/native/ICYMIHeader.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createICYMIStyles from "createICYMIStyles";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";

let c4;
let c5;
let closure_6;
const require = arg1;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createICYMIStyles.createICYMIStyles((margin) => {
  obj = { text: obj, separator: null };
  obj = { flexDirection: "row", justifyContent: "space-between", marginHorizontal: margin.margin };
  obj = { height: 1, width: "100%", backgroundColor: Themes.colors.BORDER_SUBTLE, marginBottom: Themes.space.PX_16 };
  obj[1] = obj;
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/icymi/native/ICYMIHeader.tsx");

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