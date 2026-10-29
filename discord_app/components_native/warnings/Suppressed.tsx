// === Module 18896: Suppressed ===

// Module 18896 (Suppressed)
import util from "util" /* 1125 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 18897 */;
import _modDef18898 from "module_18898" /* 18898 */;
import _modDef18899 from "module_18899" /* 18899 */;
import noop from "module_19" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 15556 */;

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
    let tmp7 = _modDef18898;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = util.intl;
    stringResult1 = intl2.string(util.t.etJjgW);
    tmp6 = importDefault;
    tmp7 = _modDef18899;
  }
  return jsx(tmp6(6018), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;