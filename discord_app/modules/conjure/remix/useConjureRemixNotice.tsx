// === Module 13470: useConjureRemixNotice ===

// Module 13470 (useConjureRemixNotice)
import _modDef4079 from "module_4079" /* 4079 */;
import conjureRemixConnection from "conjureRemixConnection" /* 10917 */;
import noop from "module_19" /* 19 */;
import ConjureRemixStore from "ConjureRemixStore" /* 7314 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixNotice.tsx");

export default function useConjureRemixNotice(arg0) {
  _require = arg0;
  items = [ConjureRemixStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureRemixStore.getFailure(closure_0));
  [][0] = arg0;
  let tmp5 = null;
  if (null != stateFromStores) {
    const obj2 = { message: null, retry: null };
    const intl = tmp(1113).intl;
    const obj3 = { reason: stateFromStores };
    obj2.message = intl.format(_modDef4079.Up6Ssw, obj3);
    const obj4 = { text: null, onClick: null };
    const intl2 = tmp(1113).intl;
    obj4.text = intl2.string(_modDef4079["ywA+ET"]);
    obj4.onClick = tmp4;
    obj2.retry = obj4;
    tmp5 = obj2;
  }
  return tmp5;
};
export function useConjureRemixStartedAt(projectId) {
  _require = projectId;
  items = [ConjureRemixStore];
  const items1 = [projectId];
  return require("initialize").useStateFromStores(items, () => ConjureRemixStore.getSetupStartedAt(closure_0), items1);
}