// discord_app/modules/activities/useIsActivitiesAvailableInShelf.tsx
import closure_3 from "noop" /* 19 */;
import { useIsActivitiesEnabledForCurrentPlatform } from "useIsActivitiesEnabledForCurrentPlatform.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/useIsActivitiesAvailableInShelf.tsx");

export default function useIsActivitiesAvailableInShelf(arg0, arg1) {
  const _require = arg0;
  const isActivitiesEnabledForCurrentPlatform = _useIsActivitiesEnabledForCurrentPlatform.useIsActivitiesEnabledForCurrentPlatform();
  let tmp3 = null != arg0;
  let obj = _useIsActivitiesEnabledForCurrentPlatform;
  if (tmp3) {
    tmp3 = "" !== arg0;
  }
  if (!tmp3) {
    tmp3 = tmp2;
  }
  dependencyMap = tmp3;
  const items = [arg0, isActivitiesEnabledForCurrentPlatform, tmp3];
  const effect = React.useEffect(() => {
    let tmp = table;
    if (table) {
      tmp = isActivitiesEnabledForCurrentPlatform;
    }
    if (tmp) {
      let obj = callback(table[3]);
      obj = { guildId: null };
      obj[0] = callback;
      const shelf = obj.fetchShelf(obj);
    }
  }, items);
  if (tmp3) {
    tmp3 = isActivitiesEnabledForCurrentPlatform;
  }
  return tmp3;
};