// === Module 9554: InstantInviteSendStateStore ===

// Module 9554 (InstantInviteSendStateStore)
import module_570 from "module_570" /* 570 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, state;

let obj = module_570.create(() => ({}));
const result = size.fileFinishedImporting("modules/instant_invite/InstantInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  let closure_0;
  let closure_1;
  let closure_2;
  let closure_3;
  _require = arg0;
  dependencyMap = arg1;
  state = arg2;
  const state2 = state.getState();
  let obj = require("react-native");
  obj.batchUpdates(() => {
    const obj = {};
    const setState = obj.setState;
    const merged = Object.assign(closure_3);
    const obj2 = {};
    const merged1 = Object.assign(closure_3[closure_0]);
    obj2[closure_1] = closure_2;
    obj[closure_0] = obj2;
    setState(obj);
  });
};
export const useInstantInviteSendStates = obj;