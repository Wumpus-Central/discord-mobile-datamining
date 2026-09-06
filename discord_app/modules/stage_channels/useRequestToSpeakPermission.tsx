// === Module 9916: useRequestToSpeakPermission ===

// Module 9916 (useRequestToSpeakPermission)
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import closure_5 from "ensureGuildLoaded" /* 1957 */;
import { Permissions } from "ME" /* 1074 */;

const require = arg1;
let result = require("set").fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export const useRequestToSpeakPermission = function useRequestToSpeakPermission(id) {
  const _require = id;
  const items = [closure_5];
  const items1 = [id];
  const stateFromStores = _require(504).useStateFromStores(items, () => closure_1_5.getChannel(closure_0), items1);
  let obj = _require(504);
  const canEveryoneRoleResult = stateFromStores(4204).canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
  const obj2 = stateFromStores(4204);
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