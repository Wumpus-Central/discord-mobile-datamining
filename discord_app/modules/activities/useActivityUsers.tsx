// === Module 16577: useActivityUsers ===

// Module 16577 (useActivityUsers)
import closure_2 from "mergeGuildAvatar" /* 1922 */;
import closure_3 from "participantFromServer" /* 1390 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/useActivityUsers.tsx");

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
      const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === closure_0);
      if (null == found) {
        let items = [];
      } else {
        const _Array = Array;
        const mapped = Array.from(found.userIds).map((arg0) => user.getUser(arg0));
        items = mapped.filter((arg0) => null != arg0);
        const arr = Array.from(found.userIds);
      }
      return items;
    }
  }, items1);
};