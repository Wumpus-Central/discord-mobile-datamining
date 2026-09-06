// discord_app/modules/activities/useActivityUsers.tsx
import UserStore from "../../stores/UserStore.tsx";
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore.tsx";

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/useActivityUsers.tsx");

export default function useActivityUsers(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  let items = [EmbeddedActivitiesStore, UserStore];
  const items1 = [arg1, arg0];
  return require("useStateFromStores").useStateFromStoresArray(
    items,
    () => {
      if (null == closure_1) {
        return [];
      } else {
        const embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(tmp);
        const found = embeddedActivitiesForChannel.find((applicationId) => applicationId.applicationId === closure_1_0);
        if (null == found) {
          let items = [];
        } else {
          const _Array = Array;
          const mapped = Array.from(found.userIds).map((item) => user.getUser(item));
          items = mapped.filter((item) => null != item);
          const arr = Array.from(found.userIds);
        }
        return items;
      }
    },
    items1,
  );
}
