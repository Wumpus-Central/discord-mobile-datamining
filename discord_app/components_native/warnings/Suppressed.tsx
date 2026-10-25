// === Module 18378: Suppressed ===

// Module 18378 (Suppressed)
import util from "util" /* 1128 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 18379 */;
import _modDef18380 from "module_18380" /* 18380 */;
import _modDef18381 from "module_18381" /* 18381 */;
import noop from "module_19" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 15062 */;

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
    let tmp7 = _modDef18380;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = util.intl;
    stringResult1 = intl2.string(util.t.etJjgW);
    tmp6 = importDefault;
    tmp7 = _modDef18381;
  }
  return jsx(tmp6(5978), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;