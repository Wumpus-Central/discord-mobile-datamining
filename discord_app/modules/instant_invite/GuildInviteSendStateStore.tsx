// === Module 12815: setSendState ===

// Module 12815 (setSendState)
import set from "set" /* 2 */;
import keys from "keys" /* 641 */;

let obj = keys.create(() => ({}));
const result = set.fileFinishedImporting("modules/instant_invite/GuildInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  const _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  _require(702).batchUpdates(() => {
    state.setState((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj = {};
      const merged1 = Object.assign(arg0[closure_0]);
      obj[closure_1] = closure_2;
      obj[closure_0] = obj;
      return obj;
    });
  });
};
export const useGuildInviteSendStates = obj;