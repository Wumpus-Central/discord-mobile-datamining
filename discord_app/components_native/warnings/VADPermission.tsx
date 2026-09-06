// discord_app/components_native/warnings/VADPermission.tsx
import util from "../../intl/index.native.tsx";
import common_AlertDefault from "../common/Alert.tsx";
import PermissionActionCreatorsDefault from "../../actions/PermissionActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const Component = noop.Component;
class VADPermission extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.close = function close() {
      PermissionActionCreatorsDefault.clearVADWarning();
    };
    return applyArgumentsResult;
  }
}
VADPermission.prototype["render"] = function render() {
  const obj = { title: null, body: null, onConfirm: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.NYklhr);
  const intl2 = util.intl;
  obj.body = intl2.string(util.t.EJ26Oh);
  obj.onConfirm = this.close;
  return jsx(common_AlertDefault, { title: null, body: null, onConfirm: null });
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/warnings/VADPermission.tsx");

export default VADPermission;
