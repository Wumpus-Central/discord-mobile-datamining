// === Module 9894: InstantInviteSendStateStore ===

// Module 9894 (InstantInviteSendStateStore)
import module_560 from "module_560" /* 560 */;
import size from "module_2" /* 2 */;

let useInstantInviteSendStates = module_560.create(() => ({}));
const result = size.fileFinishedImporting("modules/instant_invite/InstantInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  useInstantInviteSendStates = arg2;
  const state = useInstantInviteSendStates.getState();
  require("ReactBatchUpdates").batchUpdates(() => {
    let obj = {};
    const merged = Object.assign(closure_3);
    obj = {};
    const merged1 = Object.assign(closure_3[closure_0]);
    obj[closure_1] = closure_2;
    obj[closure_0] = obj;
    obj.setState(obj);
  });
};
export { useInstantInviteSendStates };