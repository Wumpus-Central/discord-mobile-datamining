// discord_app/modules/billing/native/PaymentFlowWarningMessage.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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