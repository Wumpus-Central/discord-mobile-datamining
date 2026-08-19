// === Module 16365: useActivityUsers ===

// Module 16365 (useActivityUsers)
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import participantFromServer from "participantFromServer" /* 1390 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/useActivityUsers.tsx");

export default function useActivityUsers(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let items = [closure_3, closure_2];
  const items1 = [arg1, arg0];
  return _require(647).useStateFromStoresArray(items, () => {
    if (null == closure_1) {
      return [];
    } else {
      const embeddedActivitiesForChannel = closure_1_3.getEmbeddedActivitiesForChannel(tmp);
      const found = embeddedActivitiesForChannel.find((item, index) => item.applicationId === closure_0);
      if (null == found) {
        let items = [];
      } else {
        const _Array = Array;
        const mapped = Array.from(found.userIds).map((item, index) => user.getUser(item));
        items = mapped.filter((item, index) => null != item);
        const arr = Array.from(found.userIds);
      }
      return items;
    }
  }, items1);
};