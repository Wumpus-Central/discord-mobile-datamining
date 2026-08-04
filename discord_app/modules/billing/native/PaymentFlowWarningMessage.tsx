// discord_app/modules/billing/native/PaymentFlowWarningMessage.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, icon: null, text: null };
createCacheKey = { padding: 10, marginVertical: 5, borderRadius: require("Themes").radii.xs, display: "flex", flexDirection: "row", alignItems: "center", backgroundColor: require("result").DARK_PRIMARY_630_LIGHT_PRIMARY_230 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginRight: 10 };
createCacheKey[2] = { flexShrink: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/billing/native/PaymentFlowWarningMessage.tsx");

export default function PaymentFlowWarningMessage(children) {
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.icon, color: null, width: 16, height: 16 };
  obj[1] = importDefault(712).unsafe_rawColors.YELLOW_300;
  const items = [callback(require(1297) /* Button */.WarningCircle, obj), ];
  obj = { variant: "text-sm/medium", style: tmp.text, children: children.message };
  items[1] = callback(require(4189) /* Text */.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
};