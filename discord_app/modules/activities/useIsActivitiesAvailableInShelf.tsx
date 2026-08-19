// === Module 8698: useIsActivitiesAvailableInShelf ===

// Module 8698 (useIsActivitiesAvailableInShelf)
import noop from "noop" /* 19 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/useIsActivitiesAvailableInShelf.tsx");

export default function useIsActivitiesAvailableInShelf(arg0, arg1) {
  const _require = arg0;
  const isActivitiesEnabledForCurrentPlatform = _require(8699).useIsActivitiesEnabledForCurrentPlatform();
  let tmp3 = null != arg0;
  let obj = _require(8699);
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
      callback(table[3]);
      const obj = { guildId: null };
      obj[0] = callback;
      const shelf = obj.fetchShelf(obj);
    }
  }, items);
  if (tmp3) {
    tmp3 = isActivitiesEnabledForCurrentPlatform;
  }
  return tmp3;
};