// discord_app/modules/activities/useActivityUsers.tsx
import mergeGuildAvatar from "../../stores/UserStore.tsx";
import participantFromServer from "EmbeddedActivitiesStore.tsx";

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/activities/useActivityUsers.tsx");

export default function useActivityUsers(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let items = [closure_3, closure_2];
  const items1 = [arg1, arg0];
  return require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresArray(items, () => {
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