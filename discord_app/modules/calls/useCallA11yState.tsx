// discord_app/modules/calls/useCallA11yState.tsx
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import CallStore from "../../stores/CallStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/calls/useCallA11yState.tsx");

export default function useCallA11yState(arg0) {
  _require = arg0;
  const items = [CallStore, AuthenticationStore];
  return require("initialize").useStateFromStoresObject(items, () => {
    let obj = CallStore;
    const call = CallStore.getCall(closure_0);
    const id = AuthenticationStore.getId();
    let hasItem = null != call && null != id;
    if (hasItem) {
      const ringing = call.ringing;
      hasItem = ringing.includes(id);
    }
    obj = { isIncomingCall: hasItem, isOngoingCall: obj.isCallActive(closure_0) && !hasItem };
    return obj;
  });
}
