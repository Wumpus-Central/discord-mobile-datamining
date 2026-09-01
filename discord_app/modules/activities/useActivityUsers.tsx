// discord_app/modules/activities/useActivityUsers.tsx
import closure_2 from "../../stores/UserStore.tsx";
import closure_3 from "EmbeddedActivitiesStore.tsx";

const require = arg1;
const result = require("set").fileFinishedImporting("modules/activities/useActivityUsers.tsx");

export default function useActivityUsers(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let items = [closure_3, closure_2];
  const items1 = [arg1, arg0];
  return require("../../../discord_common/js/packages/flux/useStateFromStores.tsx").useStateFromStoresArray(
    items,
    () => {
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
    },
    items1,
  );
}
