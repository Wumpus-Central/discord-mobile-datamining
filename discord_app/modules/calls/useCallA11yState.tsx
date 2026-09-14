// === Module 16129: useCallA11yState ===

// Module 16129 (useCallA11yState)
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import CallStore from "CallStore" /* 5359 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useCallA11yState.tsx");

export default function useCallA11yState(arg0) {
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
};