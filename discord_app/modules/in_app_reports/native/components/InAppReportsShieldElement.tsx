// discord_app/modules/in_app_reports/native/components/InAppReportsShieldElement.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import AccountAgeTier10LargeBadge from "../../../../design/assets/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
noopAll;
let closure_4 = createCacheKey.createStyles({ container: { flex: 0, alignSelf: "center", marginBottom: 16 } });
const result = require("obj132").fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsShieldElement.tsx");

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