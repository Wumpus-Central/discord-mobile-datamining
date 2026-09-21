// === Module 10174: useRequestToSpeakPermission ===

// Module 10174 (useRequestToSpeakPermission)
import StageChannelActionCreators from "StageChannelActionCreators" /* 8669 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2041 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1074).Permissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export const useRequestToSpeakPermission = function useRequestToSpeakPermission(id) {
  _require = id;
  const items = [ChannelStore];
  const items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(closure_0), items1);
  let obj = require("initialize");
  const canEveryoneRoleResult = stateFromStores(4400).canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
  const obj2 = stateFromStores(4400);
  [tmp4, tmp5] = noop.useState(canEveryoneRoleResult);
  dependencyMap = tmp5;
  if (canEveryoneRoleResult !== tmp4) {
    tmp5(canEveryoneRoleResult);
  }
  const items2 = [
    tmp4,
    (arg0) => {
      if (null != stateFromStores) {
        require(arg0);
        const result = StageChannelActionCreators.setEveryoneRolePermissionAllowed(tmp, Permissions.REQUEST_TO_SPEAK, arg0);
      }
    }
  ];
  return items2;
};