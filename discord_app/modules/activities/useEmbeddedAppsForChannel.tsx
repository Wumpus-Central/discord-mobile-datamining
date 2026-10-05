// === Module 11673: useEmbeddedAppsForChannel ===

// Module 11673 (useEmbeddedAppsForChannel)
import EmbeddedActivitiesStore2 from "EmbeddedActivitiesStore" /* 2050 */;
import embeddedActivityLocationUtils from "embeddedActivityLocationUtils" /* 4498 */;
import useGetOrFetchApplicationsDefault from "useGetOrFetchApplications" /* 6663 */;
import react from "react" /* 19 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const EmbeddedActivitiesStore = EmbeddedActivitiesStore2;
let _require, application_id, dependencyMap, findActivity, importDefault, map, set;

const NO_ACTIVITIES = EmbeddedActivitiesStore2.NO_ACTIVITIES;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let first;
  let tmp6;
  let user;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(3);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [EmbeddedActivitiesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function u() {
      if (null != user) {
        if (null != user.id) {
          let embeddedActivitiesForChannel;
          if ("" !== user.id) {
            embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(user.id);
          }
          return embeddedActivitiesForChannel;
        }
      }
      embeddedActivitiesForChannel = NO_ACTIVITIES;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  return closure_8(tmpResult.useStateFromStoresArray(first, tmp6), arg1);
}) : ((arg0, arg1) => {
  let user;
  _require = arg0;
  const items = [EmbeddedActivitiesStore];
  const obj = require("get initialized");
  return closure_8(obj.useStateFromStoresArray(items, () => {
    if (null != user) {
      if (null != user.id) {
        let embeddedActivitiesForChannel;
        if ("" !== user.id) {
          embeddedActivitiesForChannel = EmbeddedActivitiesStore.getEmbeddedActivitiesForChannel(user.id);
        }
        return embeddedActivitiesForChannel;
      }
    }
    embeddedActivitiesForChannel = NO_ACTIVITIES;
  }), arg1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arg0) {
  let closure_0;
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  const tmp = _require;
  let obj = require("react");
  const cResult = obj.c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [EmbeddedActivitiesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      let embeddedActivitiesForGuild;
      if (null != closure_0) {
        embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(tmp);
      } else {
        embeddedActivitiesForGuild = NO_ACTIVITIES;
      }
      return embeddedActivitiesForGuild;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const arr2 = closure_8(tmpResult.useStateFromStores(first, tmp6));
  if (cResult[3] !== arr2) {
    const _Map = Map;
    const self = this;
    const self2 = this;
    map = new Map();
    let closure_1 = map;
    const item = arr2.forEach((embeddedActivity) => {
      const obj = embeddedActivityLocationUtils;
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(embeddedActivity.embeddedActivity.location);
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
    tmp7 = map;
  } else {
    closure_1 = cResult[4];
  }
  return tmp7;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("get initialized");
  let items = [EmbeddedActivitiesStore];
  const tmp = closure_8(obj.useStateFromStores(items, () => {
    let embeddedActivitiesForGuild;
    if (null != closure_0) {
      embeddedActivitiesForGuild = EmbeddedActivitiesStore.getEmbeddedActivitiesForGuild(tmp);
    } else {
      embeddedActivitiesForGuild = NO_ACTIVITIES;
    }
    return embeddedActivitiesForGuild;
  }));
  let closure_1 = tmp;
  const items1 = [tmp];
  return react.useMemo(() => {
    map = new Map();
    const item = closure_1.forEach((embeddedActivity) => {
      const obj = closure_2_0(closure_2_2[7]);
      const embeddedActivityLocationChannelId = obj.getEmbeddedActivityLocationChannelId(embeddedActivity.embeddedActivity.location);
      if (null != embeddedActivityLocationChannelId) {
        let items = map.get(embeddedActivityLocationChannelId);
        if (items == null) {
          items = [];
        }
        items.push(embeddedActivity);
        const result = map.set(embeddedActivityLocationChannelId, items);
      }
    });
    return map;
  }, items1);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function(arr, arg1) {
  let closure_0;
  let closure_1;
  let closure_2;
  let tmp18;
  let tmp20;
  let tmp21;
  let tmp3;
  let tmp8;
  _require = arg1;
  let obj = require("react");
  const cResult = obj.c(15);
  if (cResult[0] !== arr) {
    let tmp5;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function s(applicationId) {
        return applicationId.applicationId;
      };
      cResult[2] = fn;
      tmp5 = fn;
    } else {
      tmp5 = cResult[2];
    }
    const mapped = arr.map(tmp5);
    cResult[0] = arr;
    cResult[1] = mapped;
    tmp3 = mapped;
  } else {
    tmp3 = cResult[1];
  }
  const tmp7 = useGetOrFetchApplicationsDefault(tmp3);
  dependencyMap = tmp7;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [];
    cResult[3] = items;
    tmp8 = items;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== arr) {
    const _Set = Set;
    const self = this;
    const self2 = this;
    const tmp10 = tmp8;
    set = new Set(tmp8);
    let tmp11 = set;
    importDefault = set;
    const iter = arr[Symbol.iterator]();
    let tmp13 = arr;
    while (iter !== undefined) {
      let userIds = iter.next().userIds;
      for (const item10055 of userIds) {
        let addResult = set.add(item10055);
        continue;
      }
      continue;
    }
    cResult[4] = arr;
    cResult[5] = set;
  } else {
    importDefault = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [UserStore];
    cResult[6] = items1;
    tmp18 = items1;
  } else {
    tmp18 = cResult[6];
  }
  if (cResult[7] !== tmp9) {
    const fn2 = function f() {
      const items = [];
      for (const item10006 of closure_1) {
        let arr = items.push(UserStore.getUser(item10006));
        continue;
      }
      return items;
    };
    const items2 = [tmp9];
    cResult[7] = tmp9;
    cResult[8] = fn2;
    cResult[9] = items2;
    tmp21 = items2;
    tmp20 = fn2;
  } else {
    tmp20 = cResult[8];
    tmp21 = cResult[9];
  }
  const obj3 = require("get initialized");
  const stateFromStoresArray = obj3.useStateFromStoresArray(tmp18, tmp20, tmp21);
  const tmp22 = _require;
  if (cResult[10] === tmp7) {
    if (cResult[11] === stateFromStoresArray) {
      if (cResult[12] === arr) {
        let tmp24;
        if (cResult[13] === arg1) {
          tmp24 = cResult[14];
        }
        return tmp24;
      }
    }
  }
  map = new Map();
  const item = stateFromStoresArray.forEach((id) => {
    if (null != id) {
      const result = map.set(id.id, id);
    }
  });
  const mapped1 = arr.map((embeddedActivity, index) => {
    const items = [];
    const tmp2 = embeddedActivity.userIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let value = map.get(tmp3);
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
      tmp13 = { embeddedActivity, application: closure_2[index], userParticipantAvatarUrls: items };
      const obj = { embeddedActivity, application: closure_2[index], userParticipantAvatarUrls: items };
    }
    return tmp13;
  });
  const found = mapped1.filter(tmp22(1375).isNotNullish);
  cResult[10] = tmp7;
  cResult[11] = stateFromStoresArray;
  cResult[12] = arr;
  cResult[13] = arg1;
  cResult[14] = found;
  tmp24 = found;
}) : ((arr, arg1) => {
  let closure_1;
  let closure_2;
  _require = arr;
  importDefault = arg1;
  let mapped = arr.map((applicationId) => applicationId.applicationId);
  let tmp2 = useGetOrFetchApplicationsDefault(mapped);
  dependencyMap = tmp2;
  set = new Set([]);
  const iter = arr[Symbol.iterator]();
  while (iter !== undefined) {
    let userIds = iter.next().userIds;
    let tmp3 = userIds;
    for (const item10027 of userIds) {
      let addResult = set.add(item10027);
      continue;
    }
    continue;
  }
  let items = [UserStore];
  const items1 = [set];
  const obj2 = require("get initialized");
  const stateFromStoresArray = obj2.useStateFromStoresArray(items, () => {
    const items = [];
    for (const item10006 of set) {
      arr = items.push(UserStore.getUser(item10006));
      continue;
    }
    return items;
  }, items1);
  const items2 = [arr, tmp2, stateFromStoresArray, arg1];
  return set.useMemo(() => {
    map = new Map();
    const item = stateFromStoresArray.forEach((id) => {
      if (null != id) {
        const result = map.set(id.id, id);
      }
    });
    const mapped = map.map((embeddedActivity, index) => {
      const items = [];
      const tmp2 = embeddedActivity.userIds[Symbol.iterator]();
      while (tmp2 !== undefined) {
        let value = map.get(tmp3);
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
        tmp13 = { embeddedActivity, application: closure_2[index], userParticipantAvatarUrls: items };
        const obj = { embeddedActivity, application: closure_2[index], userParticipantAvatarUrls: items };
      }
      return tmp13;
    });
    return mapped.filter(arr(closure_2[9]).isNotNullish);
  }, items2);
});
let closure_8 = tmp4;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  let tmp6;
  let tmp7;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PresenceStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function o() {
      map = new Map();
      const item = closure_0.forEach((embeddedActivity) => {
        closure_0 = embeddedActivity;
        let value;
        findActivity = findActivity.findActivity;
        if (embeddedActivity != null) {
          const userIds = embeddedActivity.embeddedActivity.userIds;
          const iter = userIds.values();
          value = iter.next().value;
        }
        let id;
        const findActivityResult = findActivity(value, (application_id) => {
          let id;
          application_id = application_id.application_id;
          if (application != null) {
            application = application.application;
            if (application != null) {
              id = application.id;
            }
          }
          return application_id === id;
        });
        set = map.set;
        if (embeddedActivity != null) {
          let application = embeddedActivity.application;
          if (application != null) {
            id = application.id;
          }
        }
        const obj = { presenceActivity: findActivityResult };
        const merged = Object.assign(embeddedActivity);
        const result = set(id, obj);
      });
      return map;
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  return tmpResult.useStateFromStores(first, tmp6, tmp7, require("get initialized").statesWillNeverBeEqual);
}) : ((arg0) => {
  _require = arg0;
  let obj = require("get initialized");
  const items = [PresenceStore];
  const items1 = [arg0];
  return obj.useStateFromStores(items, () => {
    map = new Map();
    const item = closure_0.forEach((embeddedActivity) => {
      closure_0 = embeddedActivity;
      let value;
      findActivity = findActivity.findActivity;
      if (embeddedActivity != null) {
        const userIds = embeddedActivity.embeddedActivity.userIds;
        const iter = userIds.values();
        value = iter.next().value;
      }
      let id;
      const findActivityResult = findActivity(value, (application_id) => {
        let id;
        application_id = application_id.application_id;
        if (application != null) {
          application = application.application;
          if (application != null) {
            id = application.id;
          }
        }
        return application_id === id;
      });
      set = map.set;
      if (embeddedActivity != null) {
        let application = embeddedActivity.application;
        if (application != null) {
          id = application.id;
        }
      }
      const obj = { presenceActivity: findActivityResult };
      const merged = Object.assign(embeddedActivity);
      const result = set(id, obj);
    });
    return map;
  }, items1, require("get initialized").statesWillNeverBeEqual);
});
let result = size.fileFinishedImporting("modules/activities/useEmbeddedAppsForChannel.tsx");

export default tmp2;
export const useEmbeddedAppsByChannel = tmp3;
export const useEmbeddedApps = tmp4;
export const useEmbeddedAppsWithPresence = tmp5;