// === Module 16377: useCallA11yState ===

// Module 16377 (useCallA11yState)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5755 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useCallA11yState.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useCallA11yState(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [CallStore, AuthenticationStore];
    cResult[0] = items;
    let first = items;
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
      return obj2;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresObject(first, tmp7);
}) : (function useCallA11yState(arg0) {
  _require = arg0;
  const items = [CallStore, AuthenticationStore];
  return require("initialize").useStateFromStoresObject(items, () => {
    const call = CallStore.getCall(closure_0);
    const id = AuthenticationStore.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    const obj2 = { isIncomingCall: hasItem, isOngoingCall: CallStore.isCallActive(closure_0) && !hasItem };
    return obj2;
  });
});