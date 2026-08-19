// === Module 11233: useEmbeddedApps ===

// Module 11233 (useEmbeddedApps)
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 7145 */;
import noop from "noop" /* 19 */;
import sortActivity from "sortActivity" /* 4559 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import participantFromServer from "participantFromServer" /* 1390 */;
import { NO_ACTIVITIES } from "participantFromServer" /* 1390 */;

const require = fn;
function useEmbeddedApps(arr, arg1) {
  const _require = arr;
  importDefault = arg1;
  let mapped = arr.map((item, index) => item.applicationId);
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
  let items = [closure_5];
  const items1 = [set];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
    const items = [];
    for (const item10006 of set) {
      arr = items.push(closure_1_5.getUser(item10006));
      continue;
    }
    return items;
  }, items1);
  const items2 = [arr, tmp2, stateFromStoresArray, arg1];
  return set.useMemo(() => {
    const map = new Map();
    const item = stateFromStoresArray.forEach((item, index) => {
      if (null != item) {
        const result = map.set(item.id, item);
      }
    });
    const mapped = map.map((item, index) => {
      const items = [];
      while (tmp2 !== undefined) {
        let value = map.get(tmp3);
        if (null != value) {
          if (null != closure_1_1) {
            let tmp7Result = tmp7(tmp6);
            if (null != tmp7Result) {
              arr = items.push(tmp10);
            }
          }
        }
        continue;
      }
      let tmp13 = null;
      if (null != closure_1_2[index]) {
        const obj = { embeddedActivity: null, application: null, userParticipantAvatarUrls: null };
        obj[0] = item;
        obj[1] = tmp;
        obj[2] = items;
        tmp13 = obj;
      }
      return tmp13;
    });
    return mapped.filter(arr(table[7]).isNotNullish);
  }, items2);
}
let result = require("obj132").fileFinishedImporting("modules/activities/useEmbeddedAppsForChannel.tsx");

export default function useEmbeddedAppsForChannel(arg0, arg1) {
  const _require = arg0;
  const items = [closure_6];
  return useEmbeddedApps(_require(589).useStateFromStoresArray(items, () => {
    if (null != user) {
      if (null != user.id) {
        if ("" !== user.id) {
          let embeddedActivitiesForChannel = closure_1_6.getEmbeddedActivitiesForChannel(user.id);
        }
        return embeddedActivitiesForChannel;
      }
    }
    embeddedActivitiesForChannel = NO_ACTIVITIES;
  }), arg1);
};
export const useEmbeddedAppsByChannel = function useEmbeddedAppsByChannel(arg0) {
  const _require = arg0;
  let items = [closure_6];
  const tmp = useEmbeddedApps(_require(589).useStateFromStores(items, () => {
    if (null != closure_0) {
      let embeddedActivitiesForGuild = closure_1_6.getEmbeddedActivitiesForGuild(tmp);
    } else {
      embeddedActivitiesForGuild = NO_ACTIVITIES;
    }
    return embeddedActivitiesForGuild;
  }));
  closure_1 = tmp;
  const items1 = [tmp];
  return React.useMemo(() => {
    const map = new Map();
    const item = closure_1.forEach((item, index) => {
      const embeddedActivityLocationChannelId = map(closure_1_2[5]).getEmbeddedActivityLocationChannelId(item.embeddedActivity.location);
      if (null != embeddedActivityLocationChannelId) {
        let items = map.get(embeddedActivityLocationChannelId);
        if (items == null) {
          items = [];
        }
        items.push(item);
        const result = map.set(embeddedActivityLocationChannelId, items);
      }
      const obj = map(closure_1_2[5]);
    });
    return map;
  }, items1);
};
export { useEmbeddedApps };
export const useEmbeddedAppsWithPresence = function useEmbeddedAppsWithPresence(arg0) {
  const _require = arg0;
  const items = [closure_4];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
    const map = new Map();
    const item = map.forEach((item, index) => {
      let value;
      if (item != null) {
        const userIds = item.embeddedActivity.userIds;
        value = userIds.values().next().value;
        const iter = userIds.values();
      }
      let id;
      if (item != null) {
        let application = item.application;
        if (application != null) {
          id = application.id;
        }
      }
      const obj = {};
      const merged = Object.assign(item);
      obj.presenceActivity = closure_1_4.findActivity(value, (application_id) => {
        let id;
        if (item != null) {
          const application = item.application;
          if (application != null) {
            id = application.id;
          }
        }
        return application_id.application_id === id;
      });
      const result = map.set(id, obj);
      const findActivityResult = closure_1_4.findActivity(value, (application_id) => {
        let id;
        if (item != null) {
          const application = item.application;
          if (application != null) {
            id = application.id;
          }
        }
        return application_id.application_id === id;
      });
    });
    return map;
  }, items1, _require(589).statesWillNeverBeEqual);
};