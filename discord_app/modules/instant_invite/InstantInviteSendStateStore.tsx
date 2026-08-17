// discord_app/modules/instant_invite/InstantInviteSendStateStore.tsx
import set from "set" /* 2 */;
import keys from "keys" /* 644 */;
import { batchUpdates } from "../../../discord_common/js/shared/utils/ReactBatchUpdates.native.tsx";

let obj = keys.create(() => ({}));
const result = set.fileFinishedImporting("modules/instant_invite/InstantInviteSendStateStore.tsx");

export const setSendState = function setSendState(arg0, arg1, arg2) {
  const _require = arg0;
  dependencyMap = arg1;
  obj = arg2;
  const state = obj.getState();
  obj = _batchUpdates;
  obj.batchUpdates(() => {
    obj = {};
    const merged = Object.assign(table);
    obj = {};
    const merged1 = Object.assign(table[closure_0]);
    obj[closure_1] = state;
    obj[closure_0] = obj;
    state.setState(obj);
  });
};
export const useInstantInviteSendStates = obj;