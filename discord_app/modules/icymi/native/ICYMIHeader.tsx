// discord_app/modules/icymi/native/ICYMIHeader.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createICYMIStyles from "createICYMIStyles.tsx";

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