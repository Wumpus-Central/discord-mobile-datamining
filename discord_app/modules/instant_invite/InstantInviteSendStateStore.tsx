// discord_app/modules/instant_invite/InstantInviteSendStateStore.tsx
import 00560__ from "../../../_runtime/metro/00560__.js";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

let useInstantInviteSendStates = module_560.create(() => ({}));
const result = size.fileFinishedImporting("modules/instant_invite/InstantInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  _require = arg0;
  dependencyMap = arg1;
  useInstantInviteSendStates = arg2;
  const state = useInstantInviteSendStates.getState();
  require("ReactBatchUpdates").batchUpdates(() => {
    const obj = {};
    const merged = Object.assign(closure_3);
    const obj2 = {};
    const merged1 = Object.assign(closure_3[closure_0]);
    obj2[closure_1] = closure_2;
    obj[closure_0] = obj2;
    obj.setState(obj);
  });
};
export { useInstantInviteSendStates };