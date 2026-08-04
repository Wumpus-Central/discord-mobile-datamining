import noop from "noop";
import sortActivity from "sortActivity";
import mergeGuildAvatar from "mergeGuildAvatar";
import participantFromServer from "participantFromServer";
import { NO_ACTIVITIES } from "participantFromServer";

const require = arg1;
function useEmbeddedApps(arr, arg1) {
  const _require = arr;
  const importDefault = arg1;
  let mapped = arr.map((applicationId) => applicationId.applicationId);
  const tmp2 = importDefault(5616)(mapped);
  const dependencyMap = tmp2;
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
  let items = [mergeGuildAvatar];
  const items1 = [set];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
    const items = [];
    for (const item10006 of set) {
      let tmp = outer1_5;
      let arr = items.push(outer1_5.getUser(item10006));
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
          if (null != outer1_1) {
            let tmp8 = value;
            let tmp7Result = tmp7(tmp6);
            if (null != tmp7Result) {
              let tmp11 = tmp7Result;
              let arr = items.push(tmp10);
            }
          }
        }
        continue;
      }
      let tmp13 = null;
      if (null != outer1_2[arg1]) {
        const obj = { embeddedActivity: null, application: null, userParticipantAvatarUrls: null };
        obj[0] = arg0;
        obj[1] = tmp;
        obj[2] = items;
        tmp13 = obj;
      }
      return tmp13;
    });
    return mapped.filter(arr(tmp2[7]).isNotNullish);
  }, items2);
}
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/activities/useEmbeddedAppsForChannel.tsx");

export default function useEmbeddedAppsForChannel(arg0, arg1) {
  const _require = arg0;
  const items = [participantFromServer];
  return useEmbeddedApps(_require(589).useStateFromStoresArray(items, () => {
    if (null != closure_0) {
      if (null != tmp.id) {
        if ("" !== tmp.id) {
          let embeddedActivitiesForChannel = outer1_6.getEmbeddedActivitiesForChannel(tmp.id);
        }
        return embeddedActivitiesForChannel;
      }
    }
    embeddedActivitiesForChannel = outer1_7;
  }), arg1);
};
export const useEmbeddedAppsByChannel = function useEmbeddedAppsByChannel(arg0) {
  const _require = arg0;
  let items = [participantFromServer];
  const tmp = useEmbeddedApps(_require(589).useStateFromStores(items, () => {
    if (null != closure_0) {
      let embeddedActivitiesForGuild = outer1_6.getEmbeddedActivitiesForGuild(tmp);
    } else {
      embeddedActivitiesForGuild = outer1_7;
    }
    return embeddedActivitiesForGuild;
  }));
  const importDefault = tmp;
  const items1 = [tmp];
  return React.useMemo(() => {
    const map = new Map();
    const item = tmp.forEach((embeddedActivity) => {
      const embeddedActivityLocationChannelId = map(outer1_2[5]).getEmbeddedActivityLocationChannelId(embeddedActivity.embeddedActivity.location);
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
  const items = [sortActivity];
  const items1 = [arg0];
  return _require(589).useStateFromStores(items, () => {
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
      obj.presenceActivity = outer1_4.findActivity(value, (application_id) => {
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
  }, items1, _require(589).statesWillNeverBeEqual);
};