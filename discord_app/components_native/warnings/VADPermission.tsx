// === Module 16921: VADPermission ===

// Module 16921 (VADPermission)
import util from "util" /* 1114 */;
import common_AlertDefault from "common/Alert" /* 4994 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 16918 */;
import noop from "module_19" /* 19 */;

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