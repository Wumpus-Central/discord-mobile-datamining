import keys from "keys";

let obj = keys.create(() => ({}));
const result = require("set").fileFinishedImporting("modules/instant_invite/InstantInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  const _require = arg0;
  const dependencyMap = arg1;
  let obj = arg2;
  const state = obj.getState();
  obj = _require(705);
  obj.batchUpdates(() => {
    let obj = {};
    const merged = Object.assign(table);
    obj = {};
    const merged1 = Object.assign(table[closure_0]);
    obj[closure_1] = state;
    obj[closure_0] = obj;
    state.setState(obj);
  });
};
export const useInstantInviteSendStates = obj;