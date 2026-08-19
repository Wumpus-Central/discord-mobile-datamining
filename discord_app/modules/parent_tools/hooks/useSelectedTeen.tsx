// discord_app/modules/parent_tools/hooks/useSelectedTeen.tsx
import defaultAreStatesEqual from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import freshTeenActivityWithMap from "../FamilyCenterStore.tsx";
import { defaultAreStatesEqual } from "../../../../discord_common/js/packages/flux/useStateFromStores.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export const useSelectedTeen = function useSelectedTeen() {
  const items = [closure_3];
  _require = require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
  const obj = defaultAreStatesEqual;
  const items1 = [closure_2];
  return require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items1, () => {
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