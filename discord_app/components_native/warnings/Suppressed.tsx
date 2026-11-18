// === Module 19108: Suppressed ===

// Module 19108 (Suppressed)
import util from "util" /* 1113 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 19109 */;
import _modDef19110 from "module_19110" /* 19110 */;
import _modDef19111 from "module_19111" /* 19111 */;
import noop from "module_19" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 14959 */;

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
    let tmp7 = _modDef19110;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = util.intl;
    stringResult1 = intl2.string(util.t.etJjgW);
    tmp6 = importDefault;
    tmp7 = _modDef19111;
  }
  return jsx(tmp6(5840), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;