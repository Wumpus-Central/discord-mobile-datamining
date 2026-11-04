// === Module 12292: useConjureSafetyRecheck ===

// Module 12292 (useConjureSafetyRecheck)
import util from "util" /* 1113 */;
import _modDef3995 from "module_3995" /* 3995 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 11045 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjureSafetyRecheck.tsx");

export default function useConjureSafetyRecheck(arg0) {
  _require = arg0;
  items = [ConjurePublishStatusStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => ConjurePublishStatusStore.getSafetyRecheck(closure_0), items1);
};
export function getConjureSafetyHoldCopy(status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  if ("cleared" === status) {
    const obj2 = { title: null, body: null };
    const intl3 = util.intl;
    obj2.title = intl3.string(_modDef3995.vVnbEq);
    const intl4 = util.intl;
    obj2.body = intl4.string(_modDef3995["qY/RLI"]);
    let obj = obj2;
  } else {
    obj = { title: null, body: null };
    const intl = util.intl;
    obj.title = intl.string(_modDef3995.ebqlWe);
    const intl2 = util.intl;
    obj.body = intl2.string(_modDef3995.UOr0cK);
  }
  return obj;
}
export function getConjureSafetyRecheckNotice(status) {
  status = undefined;
  if (status != null) {
    status = status.status;
  }
  if (undefined !== status) {
    if ("cleared" !== status) {
      if ("pending" === status) {
        const obj2 = { message: null, type: "info" };
        const intl4 = util.intl;
        obj2.message = intl4.string(_modDef3995.HsOGKK);
        return obj2;
      } else if ("held" === status) {
        const obj3 = { message: null, type: "critical" };
        const intl3 = util.intl;
        const obj4 = { reason: status.reason };
        obj3.message = intl3.formatToPlainString(_modDef3995.t8GlRz, obj4);
        return obj3;
      } else if ("limited" === status) {
        const intl2 = util.intl;
        if ("daily" === status.limit) {
          let ikIoxj = _modDef3995["TtE+rz"];
        } else {
          ikIoxj = _modDef3995.ikIoxj;
        }
        const obj5 = { message: intl2.string(ikIoxj), type: "warning" };
        return obj5;
      } else if ("unavailable" === status) {
        const obj = { message: null, type: "warning" };
        const intl = util.intl;
        obj.message = intl.string(_modDef3995.FxilA2);
        return obj;
      }
    }
  }
  return null;
}