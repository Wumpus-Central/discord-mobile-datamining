// === Module 15998: useCallA11yState ===

// Module 15998 (useCallA11yState)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5444 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  let tmp7;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CallStore, AuthenticationStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      const call = CallStore.getCall(closure_0);
      const id = AuthenticationStore.getId();
      let hasItem = null != call && null != id;
      if (hasItem) {
        const ringing = call.ringing;
        hasItem = ringing.includes(id);
      }
      const obj2 = { isIncomingCall: hasItem, isOngoingCall: CallStore.isCallActive(closure_0) && !hasItem };
      CallStore.isCallActive(closure_0) && !hasItem;
      return obj2;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(504);
  return tmpResult.useStateFromStoresObject(first, tmp7);
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  const items = [CallStore, AuthenticationStore];
  const obj = require("get initialized");
  return obj.useStateFromStoresObject(items, () => {
    const call = CallStore.getCall(closure_0);
    const id = AuthenticationStore.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    const obj2 = { isIncomingCall: hasItem, isOngoingCall: CallStore.isCallActive(closure_0) && !hasItem };
    CallStore.isCallActive(closure_0) && !hasItem;
    return obj2;
  });
});
const result = size.fileFinishedImporting("modules/calls/useCallA11yState.tsx");

export default tmp2;