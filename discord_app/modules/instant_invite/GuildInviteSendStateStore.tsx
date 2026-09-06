// discord_app/modules/instant_invite/GuildInviteSendStateStore.tsx
import set from "../../../_runtime/00002_set.js";
import keys from "../../../_runtime/00560_keys.js";

let obj = keys.create(() => ({}));
const result = set.fileFinishedImporting("modules/instant_invite/GuildInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  const _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  require("../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx").batchUpdates(() => {
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
