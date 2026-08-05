// discord_app/modules/stage_channels/useRequestToSpeakPermission.tsx
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import ensureGuildLoaded from "ensureGuildLoaded";
import { Permissions } from "ME";

const require = arg1;
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/stage_channels/useRequestToSpeakPermission.tsx");

export const useRequestToSpeakPermission = function useRequestToSpeakPermission(id) {
  let tmp4;
  let tmp5;
  const _require = id;
  const items = [ensureGuildLoaded];
  const items1 = [id];
  const stateFromStores = _require("../../../discord_common/js/packages/flux/index.tsx").useStateFromStores(items, () => outer1_5.getChannel(closure_0), items1);
  let obj = _require("../../../discord_common/js/packages/flux/index.tsx");
  const canEveryoneRoleResult = stateFromStores(3918).canEveryoneRole(Permissions.REQUEST_TO_SPEAK, stateFromStores);
  const obj2 = stateFromStores(3918);
  [tmp4, tmp5] = callback(React.useState(canEveryoneRoleResult), 2);
  const dependencyMap = tmp5;
  if (canEveryoneRoleResult !== tmp4) {
    tmp5(canEveryoneRoleResult);
  }
  const items2 = [
    tmp4,
    (arg0) => {
      if (null != stateFromStores) {
        tmp5(arg0);
        const result = id(id[6]).setEveryoneRolePermissionAllowed(tmp, outer1_6.REQUEST_TO_SPEAK, arg0);
        const obj = id(id[6]);
      }
    }
  ];
  return items2;
};