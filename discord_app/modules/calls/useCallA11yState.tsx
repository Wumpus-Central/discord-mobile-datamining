// === Module 15029: useCallA11yState ===

// Module 15029 (useCallA11yState)
import fetchFingerprint from "fetchFingerprint";
import callConnect from "callConnect";

const require = arg1;
const result = require("initialize").fileFinishedImporting("modules/calls/useCallA11yState.tsx");

export default function useCallA11yState(arg0) {
  const _require = arg0;
  const items = [callConnect, fetchFingerprint];
  return _require(589).useStateFromStoresObject(items, () => {
    let obj = outer1_3;
    const call = outer1_3.getCall(closure_0);
    const id = outer1_2.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    obj = { isIncomingCall: hasItem, isOngoingCall: null };
    obj[1] = obj.isCallActive(closure_0) && !hasItem;
    return obj;
  });
};