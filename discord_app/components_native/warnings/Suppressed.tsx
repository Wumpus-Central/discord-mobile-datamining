// discord_app/components_native/warnings/Suppressed.tsx
import initialize from "initialize";
import { jsx } from "jsxProd";
import { Component } from "noop";
import importAllResult from "noop";
import { registerAsset } from "../../../_runtime/15844_registerAsset.js";
import { registerAsset } from "../../../_runtime/15845_registerAsset.js";
import { getSystemLocale } from "../../intl/index.native.tsx";

const require = arg1;
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
    let tmp7 = registerAsset;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = tmp2(1236).intl;
    stringResult1 = intl2.string(tmp2(1236).t.etJjgW);
    tmp6 = importDefault;
    tmp7 = registerAsset;
  }
  return jsx(tmp6(4683), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const result = require("jsxProd").fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;