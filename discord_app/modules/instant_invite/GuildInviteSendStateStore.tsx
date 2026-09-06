// discord_app/modules/instant_invite/GuildInviteSendStateStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

const useGuildInviteSendStates = module_560.create(() => ({}));
const result = size.fileFinishedImporting("modules/instant_invite/GuildInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  require("ReactBatchUpdates").batchUpdates(() => {
    obj.setState((arg0) => {
      let obj = {};
      const merged = Object.assign(arg0);
      obj = {};
      const merged1 = Object.assign(arg0[closure_1_0]);
      obj[closure_1_1] = closure_1_2;
      obj[closure_1_0] = obj;
      return obj;
    });
  });
};
export { useGuildInviteSendStates };