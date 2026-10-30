// === Module 11849: useRequestToSpeakPermission ===

// Module 11849 (useRequestToSpeakPermission)
import StageChannelActionCreators from "StageChannelActionCreators" /* 7937 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4858 */;

const require = globalThis.__r;

require = fn;
const Permissions = fn(1072).Permissions;
const size = fn(2);
let result = size.fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export function useRequestToSpeakPermission(id) {
  _require = id;
  const items = [ChannelStore];
  const items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ChannelStore.getChannel(closure_0), items1);
  let obj = require("initialize");
  const canEveryoneRoleResult = stateFromStores(4946).canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
  const obj2 = stateFromStores(4946);
  [tmp4, tmp5] = noop.useState(canEveryoneRoleResult);
  dependencyMap = tmp5;
  if (canEveryoneRoleResult !== tmp4) {
    tmp5(canEveryoneRoleResult);
  }
  const items2 = [
    tmp4,
    function setRequestToSpeakEnabled(arg0) {
      if (null != stateFromStores) {
        require(arg0);
        const result = StageChannelActionCreators.setEveryoneRolePermissionAllowed(tmp, Permissions.REQUEST_TO_SPEAK, arg0);
      }
    }
  ];
  return items2;
}