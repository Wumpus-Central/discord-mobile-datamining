// discord_app/modules/parent_tools/hooks/useSelectedTeen.tsx
import defaultAreStatesEqual from "defaultAreStatesEqual" /* 647 */;
import closure_2 from "mergeGuildAvatar" /* 1922 */;
import closure_3 from "freshTeenActivityWithMap" /* 5296 */;
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

require = arg1;
const result = require("set").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export const useSelectedTeen = function useSelectedTeen() {
  const items = [closure_3];
  _require = _defaultAreStatesEqual.useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
  const obj = _defaultAreStatesEqual;
  const items1 = [closure_2];
  return _defaultAreStatesEqual.useStateFromStores(items1, () => {
    let user;
    if (null !== closure_0) {
      user = closure_1_2.getUser(tmp);
    }
    return user;
  });
};
export const useSelectedTeenId = function useSelectedTeenId() {
  const items = [closure_3];
  return defaultAreStatesEqual.useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
};