// discord_app/modules/calls/useCallA11yState.tsx
import fetchFingerprint from "../../stores/AuthenticationStore.tsx";
import callConnect from "../../stores/CallStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/calls/useCallA11yState.tsx");

export default function useCallA11yState(arg0) {
  const _require = arg0;
  const items = [closure_3, closure_2];
  return require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStoresObject(items, () => {
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