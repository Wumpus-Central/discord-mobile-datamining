// discord_app/modules/activities/useEmbeddedAppsForChannel.tsx
import useGetOrFetchApplicationsDefault from "../applications/useGetOrFetchApplications.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import PresenceStore from "../../stores/PresenceStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore.tsx";

const require = fn;
function useEmbeddedApps(arr, arg1) {
  _require = arr;
  importDefault = arg1;
  let mapped = arr.map((applicationId) => applicationId.applicationId);
  const tmp2 = useGetOrFetchApplicationsDefault(mapped);
  dependencyMap = tmp2;
  const set = new Set([]);
  const iter = arr[Symbol.iterator]();
  while (iter !== undefined) {
    let userIds = iter.next().userIds;
    for (const item10027 of userIds) {
      let addResult = set.add(item10027);
      continue;
    }
    continue;
  }
  let items = [UserStore];
  const items1 = [set];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items,
    () => {
      const items = [];
      for (const item10006 of set) {
        arr = items.push(UserStore.getUser(item10006));
        continue;
      }
      return items;
    },
    items1,
  );
  const items2 = [arr, tmp2, stateFromStoresArray, arg1];
  return set.useMemo(() => {
    const map = new Map();
    const item = stateFromStoresArray.forEach((id) => {
      if (null != id) {
        const result = map.set(id.id, id);
      }
    });
    const mapped = map.map((embeddedActivity, index) => {
      const items = [];
      while (tmp2 !== undefined) {
        value = map.get(tmp3);
        if (null != value) {
          if (null != closure_1) {
            let tmp7Result = tmp7(tmp6);
            if (null != tmp7Result) {
              arr = items.push(tmp10);
            }
          }
        }
        continue;
      }
      let tmp13 = null;
      if (null != closure_2[index]) {
        const obj = { embeddedActivity, application: tmp, userParticipantAvatarUrls: items };
        tmp13 = obj;
      }
      return tmp13;
    });
    return mapped.filter(closure_0(closure_2[7]).isNotNullish);
  }, items2);
}
const NO_ACTIVITIES = fn(1956).NO_ACTIVITIES;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/useEmbeddedAppsForChannel.tsx");

export default function useEmbeddedAppsForChannel(arg0, arg1) {
  _require = arg0;
  const items = [EmbeddedActivitiesStore];
  return useEmbeddedApps(
    require("initialize").useStateFromStoresArray(items, () => {
      if (null != user) {
        if (null != user.id) {
          if ("" !== user.id) {
            let embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(user.id);
          }
          return embeddedActivitiesForChannel;
        }
      }
      embeddedActivitiesForChannel = NO_ACTIVITIES;
    }),
    arg1,
  );
}
export const useEmbeddedAppsByChannel = function useEmbeddedAppsByChannel(arg0) {
  _require = arg0;
  let items = [EmbeddedActivitiesStore];
  const tmp = useEmbeddedApps(
    require("initialize").useStateFromStores(items, () => {
      if (null != closure_0) {
        let embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(tmp);
      } else {
        embeddedActivitiesForGuild = NO_ACTIVITIES;
      }
      return embeddedActivitiesForGuild;
    }),
  );
  closure_1 = tmp;
  const items1 = [tmp];
  return noop.useMemo(() => {
    const map = new Map();
    const item = closure_1.forEach((embeddedActivity) => {
      const embeddedActivityLocationChannelId = map(dependencyMap[5]).getEmbeddedActivityLocationChannelId(
        embeddedActivity.embeddedActivity.location,
      );
      if (null != embeddedActivityLocationChannelId) {
        let items = map.get(embeddedActivityLocationChannelId);
        if (items == null) {
          items = [];
        }
        items.push(embeddedActivity);
        const result = map.set(embeddedActivityLocationChannelId, items);
      }
      const obj = map(dependencyMap[5]);
    });
    return map;
  }, items1);
};
export { useEmbeddedApps };
export const useEmbeddedAppsWithPresence = function useEmbeddedAppsWithPresence(arg0) {
  _require = arg0;
  const items = [PresenceStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const map = new Map();
      const item = closure_0.forEach((embeddedActivity) => {
        value = undefined;
        if (embeddedActivity != null) {
          const userIds = embeddedActivity.embeddedActivity.userIds;
          value = userIds.values().next().value;
          const iter = userIds.values();
        }
        let id;
        if (embeddedActivity != null) {
          let application = embeddedActivity.application;
          if (application != null) {
            id = application.id;
          }
        }
        const obj = {};
        const merged = Object.assign(embeddedActivity);
        obj.presenceActivity = PresenceStore.findActivity(value, (application_id) => {
          let id;
          if (embeddedActivity != null) {
            const application = embeddedActivity.application;
            if (application != null) {
              id = application.id;
            }
          }
          return application_id.application_id === id;
        });
        const result = map.set(id, obj);
        const findActivityResult = PresenceStore.findActivity(value, (application_id) => {
          let id;
          if (embeddedActivity != null) {
            const application = embeddedActivity.application;
            if (application != null) {
              id = application.id;
            }
          }
          return application_id.application_id === id;
        });
      });
      return map;
    },
    items1,
    require("initialize").statesWillNeverBeEqual,
  );
};
