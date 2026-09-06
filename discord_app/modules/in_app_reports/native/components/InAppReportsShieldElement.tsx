// === Module 8648: ShieldElement ===

// Module 8648 (ShieldElement)
import noopAll from "noop" /* 19 */;
import AccountAgeTier10LargeBadge from "AccountAgeTier10LargeBadge" /* 5692 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
noopAll;
let closure_4 = createCacheKey.createStyles({ container: { flex: 0, alignSelf: "center", marginBottom: 16 } });
const result = require("set").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default function ShieldElement(element) {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      const obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj[1] = jsx(AccountAgeTier10LargeBadge.ShieldSpotIllustration, { width: 100, height: 100 });
      tmp2 = <View style={null}>{null}</View>;
    }
  }
  return tmp2;
};