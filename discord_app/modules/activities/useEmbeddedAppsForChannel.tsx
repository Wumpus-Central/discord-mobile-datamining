// === Module 11860: useEmbeddedApps ===

// Module 11860 (useEmbeddedApps)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 5968 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "sortActivity" /* 4569 */;
import closure_5 from "mergeGuildAvatar" /* 1921 */;
import closure_6 from "participantFromServer" /* 1385 */;
import { NO_ACTIVITIES } from "participantFromServer" /* 1385 */;

const require = arg1;
function useEmbeddedApps(arr, arg1) {
  const _require = arr;
  importDefault = arg1;
  let mapped = arr.map((applicationId) => applicationId.applicationId);
  const tmp2 = useGetOrFetchApplicationsDefault(mapped);
  dependencyMap = tmp2;
  const set = new Set([]);
  const iter = arr[Symbol.iterator]();
  while (iter !== undefined) {
    let userIds = iter.next().userIds;
    let tmp3 = userIds;
    let tmp4 = userIds;
    for (const item10027 of userIds) {
      let addResult = set.add(item10027);
      continue;
    }
    continue;
  }
  let items = [closure_5];
  const items1 = [set];
  const stateFromStoresArray = _require(586).useStateFromStoresArray(items, () => {
    const items = [];
    for (const item10006 of set) {
      let tmp = closure_1_5;
      arr = items.push(closure_1_5.getUser(item10006));
      continue;
    }
    return items;
  }, items1);
  const items2 = [arr, tmp2, stateFromStoresArray, arg1];
  return set.useMemo(() => {
    const map = new Map();
    const item = stateFromStoresArray.forEach((id) => {
      if (null != id) {
        const result = map.set(id.id, id);
      }
    });
    const mapped = map.map((arg0, arg1) => {
      const items = [];
      while (tmp2 !== undefined) {
        let tmp4 = map;
        let value = map.get(tmp3);
        if (null != value) {
          if (null != closure_1_1) {
            let tmp8 = value;
            let tmp7Result = tmp7(tmp6);
            if (null != tmp7Result) {
              let tmp11 = tmp7Result;
              arr = items.push(tmp10);
            }
          }
        }
        continue;
      }
      let tmp13 = null;
      if (null != closure_1_2[arg1]) {
        const obj = { embeddedActivity: null, application: null, userParticipantAvatarUrls: null };
        obj[0] = arg0;
        obj[1] = tmp;
        obj[2] = items;
        tmp13 = obj;
      }
      return tmp13;
    });
    return mapped.filter(arr(table[7]).isNotNullish);
  }, items2);
}
let result = require("set").fileFinishedImporting("modules/activities/useEmbeddedAppsForChannel.tsx");

export default function useEmbeddedAppsForChannel(arg0, arg1) {
  const _require = arg0;
  const items = [closure_6];
  return useEmbeddedApps(_require(586).useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      if (null != tmp.id) {
        if ("" !== tmp.id) {
          let embeddedActivitiesForChannel = closure_1_6.getEmbeddedActivitiesForChannel(tmp.id);
        }
        return embeddedActivitiesForChannel;
      }
    }
    embeddedActivitiesForChannel = closure_1_7;
  }), arg1);
};
export const useEmbeddedAppsByChannel = function useEmbeddedAppsByChannel(arg0) {
  const _require = arg0;
  let items = [closure_6];
  const tmp = useEmbeddedApps(_require(586).useStateFromStores(items, () => {
    if (null != closure_0) {
      let embeddedActivitiesForGuild = closure_1_6.getEmbeddedActivitiesForGuild(tmp);
    } else {
      embeddedActivitiesForGuild = closure_1_7;
    }
    return embeddedActivitiesForGuild;
  }));
  closure_1 = tmp;
  const items1 = [tmp];
  return React.useMemo(() => {
    const map = new Map();
    const item = closure_1.forEach((embeddedActivity) => {
      const embeddedActivityLocationChannelId = map(closure_1_2[5]).getEmbeddedActivityLocationChannelId(embeddedActivity.embeddedActivity.location);
      if (null != embeddedActivityLocationChannelId) {
        let items = map.get(embeddedActivityLocationChannelId);
        if (items == null) {
          items = [];
        }
        items.push(embeddedActivity);
        const result = map.set(embeddedActivityLocationChannelId, items);
        const obj2 = map;
      }
    });
    return map;
  }, items1);
};
export { useEmbeddedApps };
export const useEmbeddedAppsWithPresence = function useEmbeddedAppsWithPresence(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const items1 = [arg0];
  return _require(586).useStateFromStores(items, () => {
    const map = new Map();
    const item = map.forEach((embeddedActivity) => {
      let value;
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
      obj.presenceActivity = closure_1_4.findActivity(value, (application_id) => {
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
    });
    return map;
  }, items1, _require(586).statesWillNeverBeEqual);
};