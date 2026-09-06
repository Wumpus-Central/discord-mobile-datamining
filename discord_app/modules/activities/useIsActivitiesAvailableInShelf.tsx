// discord_app/modules/activities/useIsActivitiesAvailableInShelf.tsx
import EmbeddedActivitiesActionCreators from "EmbeddedActivitiesActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useIsActivitiesAvailableInShelf.tsx");

export default function useIsActivitiesAvailableInShelf(guildId, arg1) {
  _require = guildId;
  const isActivitiesEnabledForCurrentPlatform =
    require("useIsActivitiesEnabledForCurrentPlatform").useIsActivitiesEnabledForCurrentPlatform();
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
      const obj = { guildId };
      const shelf = obj.fetchShelf(obj);
    }
  }, items);
  if (tmp3) {
    tmp3 = isActivitiesEnabledForCurrentPlatform;
  }
  return tmp3;
}
