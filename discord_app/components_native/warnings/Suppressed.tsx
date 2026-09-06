// === Module 16917: Suppressed ===

// Module 16917 (Suppressed)
import util from "util" /* 1114 */;
import PermissionActionCreatorsDefault from "PermissionActionCreators" /* 16918 */;
import _modDef16919 from "module_16919" /* 16919 */;
import _modDef16920 from "module_16920" /* 16920 */;
import noop from "module_19" /* 19 */;
import PermissionSpeakStore from "PermissionSpeakStore" /* 13751 */;

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
    const intl3 = tmp2(1114).intl;
    let stringResult1 = intl3.string(tmp2(1114).t["RaFZ3+"]);
    let tmp7 = _modDef16919;
    let tmp6 = importDefault;
  } else {
    stringResult = string(t.FJSZVM);
    const intl2 = tmp2(1114).intl;
    stringResult1 = intl2.string(tmp2(1114).t.etJjgW);
    tmp6 = importDefault;
    tmp7 = _modDef16920;
  }
  return jsx(tmp6(4994), { title: stringResult, body: stringResult1, iconSource: tmp7, onConfirm: this.close });
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/warnings/Suppressed.tsx");

export default Suppressed;