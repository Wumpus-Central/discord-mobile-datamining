// === Module 11673: useEmbeddedAppsForChannel ===

// Module 11673 (useEmbeddedAppsForChannel)
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4498 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6663 */;
import noop from "module_19" /* 19 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import UserStore from "UserStore" /* 1377 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 2050 */;

const require = globalThis.__r;

require = fn;
const NO_ACTIVITIES = fn(2050).NO_ACTIVITIES;
fn(558);
let ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      if (null != user) {
        if (null != user.id) {
          if ("" !== user.id) {
            let embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(user.id);
          }
          return embeddedActivitiesForChannel;
        }
      }
      embeddedActivitiesForChannel = NO_ACTIVITIES;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return closure_8(require("initialize").useStateFromStoresArray(first, tmp6), arg1);
}) : ((arg0, arg1) => {
  _require = arg0;
  const items = [EmbeddedActivitiesStore];
  return closure_8(require("initialize").useStateFromStoresArray(items, () => {
    if (null != user) {
      if (null != user.id) {
        if ("" !== user.id) {
          let embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(user.id);
        }
        return embeddedActivitiesForChannel;
      }
    }
    embeddedActivitiesForChannel = NO_ACTIVITIES;
  }), arg1);
});
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr, arg1) => {
  _require = arg1;
  const cResult = require("c").c(15);
  if (cResult[0] !== arr) {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(applicationId) {
        return applicationId.applicationId;
      };
      cResult[2] = fn;
      let tmp4 = fn;
    } else {
      tmp4 = cResult[2];
    }
    const mapped = arr.map(tmp4);
    cResult[0] = arr;
    cResult[1] = mapped;
  } else {
    let tmp8 = useGetOrFetchApplicationsDefault(cResult[1]);
    dependencyMap = tmp8;
    const _Symbol2 = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [];
      cResult[3] = items;
      let tmp10 = items;
    } else {
      tmp10 = cResult[3];
    }
    if (cResult[4] !== arr) {
      const _Set = Set;
      const set = new Set(tmp10);
      importDefault = set;
      const iter = arr[Symbol.iterator]();
      while (iter !== undefined) {
        let userIds = iter.next().userIds;
        for (const item10056 of userIds) {
          let addResult = set.add(item10056);
          continue;
        }
        continue;
      }
      cResult[4] = arr;
      cResult[5] = set;
    } else {
      importDefault = cResult[5];
    }
    const _Symbol3 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [UserStore];
      cResult[6] = items1;
      let tmp22 = items1;
    } else {
      tmp22 = cResult[6];
    }
    if (cResult[7] !== tmp11) {
      const fn2 = function f() {
        const items = [];
        for (const item10006 of closure_1) {
          let arr = items.push(UserStore.getUser(item10006));
          continue;
        }
        return items;
      };
      const items2 = [tmp11];
      cResult[7] = tmp11;
      cResult[8] = fn2;
      cResult[9] = items2;
      let tmp25 = items2;
      let tmp24 = fn2;
    } else {
      tmp24 = cResult[8];
      tmp25 = cResult[9];
    }
    const stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp22, tmp24, tmp25);
    if (cResult[10] === tmp8) {
      if (cResult[11] === stateFromStoresArray) {
        if (cResult[12] === arr) {
          if (cResult[13] === arg1) {
            let tmp28 = cResult[14];
          }
          return tmp28;
        }
      }
    }
    const _Map = Map;
    const obj3 = require("initialize");
    const tmp26 = _require;
    const item = stateFromStoresArray.forEach((id) => {
      if (null != id) {
        const result = map.set(id.id, id);
      }
    });
    const mapped1 = arr.map((embeddedActivity, index) => {
      const items = [];
      while (tmp2 !== undefined) {
        value = map.get(tmp3);
        if (null != value) {
          if (null != closure_0) {
            let tmp7Result = tmp7(tmp6);
            if (null != tmp7Result) {
              let arr = items.push(tmp10);
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
    const found = mapped1.filter(tmp26(1375).isNotNullish);
    cResult[10] = tmp8;
    cResult[11] = stateFromStoresArray;
    cResult[12] = arr;
    cResult[13] = arg1;
    cResult[14] = found;
    tmp28 = found;
    const map = new Map();
  }
  let obj = require("c");
}) : ((arr, arg1) => {
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
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const items = [];
    for (const item10006 of set) {
      arr = items.push(UserStore.getUser(item10006));
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
    return mapped.filter(closure_0(closure_2[9]).isNotNullish);
  }, items2);
});
let closure_8 = tmp4;
ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [EmbeddedActivitiesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      if (null != closure_0) {
        let embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(tmp);
      } else {
        embeddedActivitiesForGuild = NO_ACTIVITIES;
      }
      return embeddedActivitiesForGuild;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  const arr2 = closure_8(require("initialize").useStateFromStores(first, tmp6));
  if (cResult[3] !== arr2) {
    const _Map = Map;
    const map = new Map();
    closure_1 = map;
    const item = arr2.forEach((embeddedActivity) => {
      const embeddedActivityLocationChannelId = embeddedActivityLocationUtils.getEmbeddedActivityLocationChannelId(embeddedActivity.embeddedActivity.location);
      if (null != embeddedActivityLocationChannelId) {
        let items = closure_1.get(embeddedActivityLocationChannelId);
        if (items == null) {
          items = [];
        }
        items.push(embeddedActivity);
        const result = closure_1.set(embeddedActivityLocationChannelId, items);
      }
    });
    cResult[3] = arr2;
    cResult[4] = map;
    const tmp7 = map;
  } else {
    closure_1 = cResult[4];
  }
  return tmp7;
}) : ((arg0) => {
  _require = arg0;
  let items = [EmbeddedActivitiesStore];
  const tmp = closure_8(require("initialize").useStateFromStores(items, () => {
    if (null != closure_0) {
      let embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(tmp);
    } else {
      embeddedActivitiesForGuild = NO_ACTIVITIES;
    }
    return embeddedActivitiesForGuild;
  }));
  closure_1 = tmp;
  const items1 = [tmp];
  return noop.useMemo(() => {
    const map = new Map();
    const item = closure_1.forEach((embeddedActivity) => {
      const embeddedActivityLocationChannelId = map(dependencyMap[7]).getEmbeddedActivityLocationChannelId(embeddedActivity.embeddedActivity.location);
      if (null != embeddedActivityLocationChannelId) {
        let items = map.get(embeddedActivityLocationChannelId);
        if (items == null) {
          items = [];
        }
        items.push(embeddedActivity);
        const result = map.set(embeddedActivityLocationChannelId, items);
      }
      const obj = map(dependencyMap[7]);
    });
    return map;
  }, items1);
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/useEmbeddedAppsForChannel.tsx");

export default tmp2;
export const useEmbeddedAppsByChannel = tmp3;
export const useEmbeddedApps = tmp4;
export const useEmbeddedAppsWithPresence = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7, require("initialize").statesWillNeverBeEqual);
}) : ((arg0) => {
  _require = arg0;
  const items = [PresenceStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => {
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
  }, items1, require("initialize").statesWillNeverBeEqual);
});