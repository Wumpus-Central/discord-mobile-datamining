import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
let closure_4 = createCacheKey.createStyles({ container: { flex: 0, alignSelf: "center", marginBottom: 16 } });
const result = require("jsxProd").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

export default function ShieldElement(element) {
  element = element.element;
  let tmp2 = null;
  if (null != element) {
    tmp2 = null;
    if ("success" === element.type) {
      const obj = { style: null, children: null };
      obj[0] = tmp.container;
      obj[1] = jsx(require(5936) /* AccountAgeTier10LargeBadge */.ShieldSpotIllustration, { width: 100, height: 100 });
      tmp2 = <View style={null}>{null}</View>;
    }
  }
  return tmp2;
};