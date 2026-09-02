// === Module 16732: render ===

// Module 16732 (render)
import getSystemLocale from "getSystemLocale" /* 1233 */;
import registerAssetDefault from "registerAsset" /* 16734 */;
import registerAssetDefault2 from "registerAsset" /* 16735 */;
import closure_3 from "initialize" /* 13628 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
const Component = importAllResult.Component;
class Suppressed extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.close = function close() {
      callback(table[3]).clearSuppressWarning();
    };
    return applyArgumentsResult;
  }
}
Suppressed.prototype["render"] = function render() {
  const intl = getSystemLocale.intl;
  const string = intl.string;
  const t = getSystemLocale.t;
  if (isAFKChannelResult) {
    let stringResult = string(t.KuYcnU);
    const intl3 = tmp2(1233).intl;
    let stringResult1 = intl3.string(tmp2(1233).t["RaFZ3+"]);
    let tmp7 = registerAssetDefault;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = tmp2(1233).intl;
    stringResult1 = intl2.string(tmp2(1233).t.etJjgW);
    tmp6 = importDefault;
    tmp7 = registerAssetDefault2;
  }
  return jsx(tmp6(4947), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const result = require("set").fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;