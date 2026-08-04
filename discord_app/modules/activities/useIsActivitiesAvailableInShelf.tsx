// discord_app/modules/activities/useIsActivitiesAvailableInShelf.tsx
import noop from "noop";

const require = arg1;
const result = require("useIsPrivateChannelWithEnabledActivities").fileFinishedImporting("modules/activities/useIsActivitiesAvailableInShelf.tsx");

export default function useIsActivitiesAvailableInShelf(arg0, arg1) {
  const _require = arg0;
  const isActivitiesEnabledForCurrentPlatform = _require(10547).useIsActivitiesEnabledForCurrentPlatform();
  let tmp3 = null != arg0;
  let obj = _require(10547);
  if (tmp3) {
    tmp3 = "" !== arg0;
  }
  if (!tmp3) {
    tmp3 = tmp2;
  }
  const dependencyMap = tmp3;
  const items = [arg0, isActivitiesEnabledForCurrentPlatform, tmp3];
  const effect = React.useEffect(() => {
    let tmp = tmp3;
    if (tmp3) {
      tmp = isActivitiesEnabledForCurrentPlatform;
    }
    if (tmp) {
      let obj = callback(tmp3[3]);
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