// discord_app/components_native/warnings/VADPermission.tsx
import getSystemLocale from "../../intl/index.native.tsx";
import componentDidMountDefault from "../common/Alert.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../_runtime/00019_noop.js";

require = fn;
const Component = importAllResult.Component;
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
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.NYklhr);
  const intl2 = getSystemLocale.intl;
  obj[1] = intl2.string(getSystemLocale.t.EJ26Oh);
  obj[2] = this.close;
  return jsx(componentDidMountDefault, { title: null, body: null, onConfirm: null });
};
const result = require("obj132").fileFinishedImporting("components_native/warnings/VADPermission.tsx");

export default VADPermission;