// === Module 10953: useRequestToSpeakPermission ===

// Module 10953 (useRequestToSpeakPermission)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import { Permissions } from "ME" /* 676 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export const useRequestToSpeakPermission = function useRequestToSpeakPermission(id) {
  const _require = id;
  const items = [closure_5];
  const items1 = [id];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_5.getChannel(closure_0), items1);
  let obj = _require(589);
  const canEveryoneRoleResult = stateFromStores(4094).canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
  const obj2 = stateFromStores(4094);
  [tmp4, tmp5] = callback(React.useState(canEveryoneRoleResult), 2);
  dependencyMap = tmp5;
  if (canEveryoneRoleResult !== tmp4) {
    tmp5(canEveryoneRoleResult);
  }
  const items2 = [
    tmp4,
    (arg0) => {
      if (null != stateFromStores) {
        tmp5(arg0);
        const result = id(id[6]).setEveryoneRolePermissionAllowed(tmp, closure_1_6.REQUEST_TO_SPEAK, arg0);
        const obj = id(id[6]);
      }
    }
  ];
  return items2;
};