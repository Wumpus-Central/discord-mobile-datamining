// discord_app/modules/parent_tools/hooks/useSelectedTeen.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export const useSelectedTeen = function useSelectedTeen() {
  const items = [freshTeenActivityWithMap];
  _require = _require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
  const obj = _require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx");
  const items1 = [mergeGuildAvatar];
  return _require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStores(items1, () => {
    let user;
    if (null !== closure_0) {
      user = outer1_2.getUser(tmp);
    }
    return user;
  });
};
export const useSelectedTeenId = function useSelectedTeenId() {
  const items = [freshTeenActivityWithMap];
  return require("../../../../discord_common/js/packages/flux/useStateFromStores.tsx") /* defaultAreStatesEqual */.useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
};