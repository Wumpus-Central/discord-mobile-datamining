// === Module 15553: useCallA11yState ===

// Module 15553 (useCallA11yState)
import closure_2 from "fetchFingerprint" /* 1218 */;
import closure_3 from "callConnect" /* 5187 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/calls/useCallA11yState.tsx");

export default function useCallA11yState(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return _require(589).useStateFromStoresObject(items, () => {
    let obj = closure_1_3;
    const call = closure_1_3.getCall(closure_0);
    const id = closure_1_2.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    obj = { isIncomingCall: hasItem, isOngoingCall: obj.isCallActive(closure_0) && !hasItem };
    return obj;
  });
};