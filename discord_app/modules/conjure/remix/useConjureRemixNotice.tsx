// discord_app/modules/conjure/remix/useConjureRemixNotice.tsx
import _modDef3865 from "../intl/ConjureUntranslated.messages.js";
import conjureRemixConnection from "conjureRemixConnection.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureRemixStore from "ConjureRemixStore.tsx";

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/remix/useConjureRemixNotice.tsx");

export default function useConjureRemixNotice(arg0) {
  _require = arg0;
  const items = [ConjureRemixStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () =>
    ConjureRemixStore.getFailure(closure_0),
  );
  [][0] = arg0;
  let tmp5 = null;
  if (null != stateFromStores) {
    const obj2 = { message: null, retry: null };
    const intl = tmp(1114).intl;
    const obj3 = { reason: stateFromStores };
    obj2.message = intl.format(_modDef3865.Up6Ssw, obj3);
    const obj4 = { text: null, onClick: null };
    const intl2 = tmp(1114).intl;
    obj4.text = intl2.string(_modDef3865["ywA+ET"]);
    obj4.onClick = tmp4;
    obj2.retry = obj4;
    tmp5 = obj2;
  }
  return tmp5;
}
export function useConjureRemixStartedAt(projectId) {
  _require = projectId;
  const items = [ConjureRemixStore];
  const items1 = [projectId];
  return require("initialize").useStateFromStores(items, () => ConjureRemixStore.getSetupStartedAt(closure_0), items1);
}
