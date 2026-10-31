// === Module 11718: useIsActivitiesAvailableInShelf ===

// Module 11718 (useIsActivitiesAvailableInShelf)
import fetchShelf from "fetchShelf" /* 11721 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useIsActivitiesAvailableInShelf.tsx");

export default function useIsActivitiesAvailableInShelf(guildId, arg1) {
  _require = guildId;
  const isActivitiesEnabledForCurrentPlatform = require("useIsActivitiesEnabledForCurrentPlatform").useIsActivitiesEnabledForCurrentPlatform();
  let tmp3 = null != guildId;
  let obj = require("useIsActivitiesEnabledForCurrentPlatform");
  if (tmp3) {
    tmp3 = "" !== guildId;
  }
  if (!tmp3) {
    tmp3 = tmp2;
  }
  dependencyMap = tmp3;
  const items = [guildId, isActivitiesEnabledForCurrentPlatform, tmp3];
  const effect = noop.useEffect(() => {
    let tmp = closure_2;
    if (closure_2) {
      tmp = isActivitiesEnabledForCurrentPlatform;
    }
    if (tmp) {
      const obj2 = { guildId };
      const shelf = fetchShelf.fetchShelf(obj2);
    }
  }, items);
  if (tmp3) {
    tmp3 = isActivitiesEnabledForCurrentPlatform;
  }
  return tmp3;
};