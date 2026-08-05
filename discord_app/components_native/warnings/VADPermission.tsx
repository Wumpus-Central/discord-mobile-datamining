import { getSystemLocale } from "../../intl/index.native.tsx";
import { componentDidMount } from "../common/Alert.tsx";
// discord_app/components_native/warnings/VADPermission.tsx
import { jsx } from "jsxProd";
import { Component } from "noop";
import importAllResult from "noop";

const require = arg1;
class VADPermission extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.close = function close() {
      callback(table[2]).clearVADWarning();
    };
    return applyArgumentsResult;
  }
}
VADPermission.prototype["render"] = function render() {
  const obj = { title: null, body: null, onConfirm: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[0] = intl.string(getSystemLocale /* getSystemLocale */.t.NYklhr);
  const intl2 = getSystemLocale /* getSystemLocale */.intl;
  obj[1] = intl2.string(getSystemLocale /* getSystemLocale */.t.EJ26Oh);
  obj[2] = this.close;
  return jsx(componentDidMount, { title: null, body: null, onConfirm: null });
};
const result = require("dispatcher").fileFinishedImporting("components_native/warnings/VADPermission.tsx");

export default VADPermission;