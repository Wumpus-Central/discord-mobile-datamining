// === Module 12518: useRequestToSpeakPermission ===

// Module 12518 (useRequestToSpeakPermission)
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import { Permissions } from "ME" /* 676 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export const useRequestToSpeakPermission = function useRequestToSpeakPermission(id) {
  const _require = id;
  const items = [closure_5];
  const items1 = [id];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_5.getChannel(closure_0), items1);
  let obj = _require(589);
  const canEveryoneRoleResult = stateFromStores(4026).canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
  const obj2 = stateFromStores(4026);
  [tmp4, tmp5] = callback(React.useState(canEveryoneRoleResult), 2);
  dependencyMap = tmp5;
  if (canEveryoneRoleResult !== tmp4) {
    tmp5(canEveryoneRoleResult);
  }
  const items2 = [
    tmp4,
    (arg0) => {
      if (null != stateFromStores) {
        id(arg0);
        const result = id(id[6]).setEveryoneRolePermissionAllowed(tmp, Permissions.REQUEST_TO_SPEAK, arg0);
        const obj = id(id[6]);
      }
    }
  ];
  return items2;
};