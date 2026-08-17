// discord_app/components_native/warnings/Suppressed.tsx
import getSystemLocale from "getSystemLocale" /* 1236 */;
import registerAssetDefault from "registerAsset" /* 16135 */;
import registerAssetDefault2 from "registerAsset" /* 16136 */;
import closure_3 from "initialize" /* 13300 */;
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
    const intl3 = tmp2(1236).intl;
    let stringResult1 = intl3.string(tmp2(1236).t["RaFZ3+"]);
    let tmp7 = registerAssetDefault;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = tmp2(1236).intl;
    stringResult1 = intl2.string(tmp2(1236).t.etJjgW);
    tmp6 = importDefault;
    tmp7 = registerAssetDefault2;
  }
  return jsx(tmp6(4763), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const result = require("set").fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;