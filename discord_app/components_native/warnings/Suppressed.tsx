// === Module 18120: Suppressed ===

// Module 18120 (Suppressed)
import util from "util" /* 1128 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 18121 */;
import _modDef18122 from "module_18122" /* 18122 */;
import _modDef18123 from "module_18123" /* 18123 */;
import noop from "module_19" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 14879 */;

require = fn;
const jsx = fn(21).jsx;
const Component = noop.Component;
class Suppressed extends Component {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.close = function close() {
      PermissionActionCreatorsDefault.clearSuppressWarning();
    };
    return applyArgumentsResult;
  }
}
Suppressed.prototype["render"] = function render() {
  const intl = util.intl;
  const string = intl.string;
  const t = util.t;
  if (isAFKChannelResult) {
    let stringResult = string(t.KuYcnU);
    const intl3 = util.intl;
    let stringResult1 = intl3.string(util.t["RaFZ3+"]);
    let tmp7 = _modDef18122;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = util.intl;
    stringResult1 = intl2.string(util.t.etJjgW);
    tmp6 = importDefault;
    tmp7 = _modDef18123;
  }
  return jsx(tmp6(5936), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;