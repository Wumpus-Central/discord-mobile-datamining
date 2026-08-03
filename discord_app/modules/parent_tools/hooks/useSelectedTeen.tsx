import mergeGuildAvatar from "mergeGuildAvatar";
import freshTeenActivityWithMap from "freshTeenActivityWithMap";

const require = arg1;
const result = require("defaultAreStatesEqual").fileFinishedImporting("modules/parent_tools/hooks/useSelectedTeen.tsx");

export const useSelectedTeen = function useSelectedTeen() {
  const items = [freshTeenActivityWithMap];
  _require = _require(647).useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
  const obj = _require(647);
  const items1 = [mergeGuildAvatar];
  return _require(647).useStateFromStores(items1, () => {
    let user;
    if (null !== closure_0) {
      user = outer1_2.getUser(tmp);
    }
    return user;
  });
};
export const useSelectedTeenId = function useSelectedTeenId() {
  const items = [freshTeenActivityWithMap];
  return require(647) /* defaultAreStatesEqual */.useStateFromStores(items, () => selectedTeenId.getSelectedTeenId());
};