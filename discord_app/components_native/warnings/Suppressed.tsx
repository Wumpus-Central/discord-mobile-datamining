// discord_app/components_native/warnings/Suppressed.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import registerAssetDefault from "../../../_runtime/16135_registerAsset.js";
import registerAssetDefault2 from "../../../_runtime/16136_registerAsset.js";
import initialize from "../../stores/PermissionSpeakStore.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../_runtime/00019_noop.js";

require = fn;
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
    const intl3 = getSystemLocale.intl;
    let stringResult1 = intl3.string(getSystemLocale.t["RaFZ3+"]);
    let tmp7 = registerAssetDefault;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = getSystemLocale.intl;
    stringResult1 = intl2.string(getSystemLocale.t.etJjgW);
    tmp6 = importDefault;
    tmp7 = registerAssetDefault2;
  }
  return jsx(tmp6(4763), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const result = require("obj132").fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;