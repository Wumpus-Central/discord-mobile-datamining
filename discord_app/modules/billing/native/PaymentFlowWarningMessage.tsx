// === Module 7620: PaymentFlowWarningMessage ===

// Module 7620 (PaymentFlowWarningMessage)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4440 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, icon: null, text: null };
createCacheKey = { padding: 10, marginVertical: 5, borderRadius: ThemesDefault.radii.xs, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginRight: 10 };
createCacheKey[2] = { flexShrink: 1 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/billing/native/PaymentFlowWarningMessage.tsx");

export default function PaymentFlowWarningMessage(children) {
  const tmp = callback3();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon, color: ThemesDefault.unsafe_rawColors.YELLOW_300, width: 16, height: 16 };
  const items = [callback(Button.WarningCircle, obj), ];
  obj = { variant: "text-sm/medium", style: tmp.text, children: children.message };
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};