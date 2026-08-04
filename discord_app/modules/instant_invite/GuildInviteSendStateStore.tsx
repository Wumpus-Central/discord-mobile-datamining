// discord_app/modules/instant_invite/GuildInviteSendStateStore.tsx
import keys from "keys";

let obj = keys.create(() => ({}));
const result = require("set").fileFinishedImporting("modules/instant_invite/GuildInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  const _require = arg0;
  const dependencyMap = arg1;
  let closure_2 = arg2;
  _require(705).batchUpdates(() => {
    state.setState((arg0) => {
      let obj = {};
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