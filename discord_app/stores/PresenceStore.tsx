// discord_app/stores/PresenceStore.tsx
import fetchFingerprint from "fetchFingerprint";
import mergeGuildAvatar from "mergeGuildAvatar";
import ME from "ME";
import { Store } from "initialize";
import { apply } from "../../_runtime/00012_apply.js";
import { isUndefinedOrNull } from "../../_runtime/00659_isUndefinedOrNull.js";
import { hasRichActivity } from "../modules/activities/utils/hasRichActivity.tsx";
import { DISCORD_EPOCH } from "../utils/SnowflakeUtils.tsx";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
function sortActivity(type, type2) {
  type = type2.type;
  let num = 4;
  let num2 = 4;
  if (constants2.CUSTOM_STATUS !== type) {
    num2 = 3;
    if (tmp.COMPETING !== type) {
      num2 = 2;
      if (tmp.STREAMING !== type) {
        num2 = 0;
        if (tmp.PLAYING === type) {
          num2 = 1;
        }
      }
    }
  }
  type2 = type.type;
  if (constants2.CUSTOM_STATUS !== type2) {
    num = 3;
    if (tmp.COMPETING !== type2) {
      num = 2;
      if (tmp.STREAMING !== type2) {
        num = 0;
        if (tmp.PLAYING === type2) {
          num = 1;
        }
      }
    }
  }
  let diff = num2 - num;
  if (!diff) {
    let num3 = 0;
    if (hasRichActivity(type2)) {
      num3 = 1;
    }
    let num4 = 0;
    if (tmp3(4342)(type)) {
      num4 = 1;
    }
    diff = num3 - num4;
    tmp3 = importDefault;
  }
  if (!diff) {
    let num5 = type2.created_at;
    if (num5 == null) {
      num5 = 0;
    }
    let num6 = type.created_at;
    if (num6 == null) {
      num6 = 0;
    }
    diff = num5 - num6;
  }
  return diff;
}
function filterPlayingActivities(arg0) {
  if (0 === arg0.length) {
    return arg0;
  } else {
    const items = [];
    const items1 = [];
    const iter = arg0[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let tmp5 = constants2;
      if (nextResult.type === constants2.PLAYING) {
        let tmp8 = nextResult;
        let arr = items1.push(tmp4);
      } else {
        let tmp6 = nextResult;
        arr = items.push(tmp4);
      }
      continue;
    }
    if (items1.length <= 1) {
      return arg0;
    } else {
      const items2 = [];
      HermesBuiltin.arraySpread(items1, 0);
      const items3 = [];
      items3[HermesBuiltin.arraySpread(items, 0)] = items2.sort(sortActivity)[0];
      return items3.sort(sortActivity);
    }
  }
}
function flattenPresence(id) {
  let activities;
  delete tmp[tmp2];
  delete tmp[tmp2];
  delete tmp[tmp2];
  delete tmp[tmp2];
  delete tmp[tmp2];
  if (null != dependencyMap[id]) {
    const _Object3 = Object;
    let values = Object.values(dependencyMap[id]);
    const reduced = values.reduce((processedAtTimestamp, processedAtTimestamp2) => {
      processedAtTimestamp = processedAtTimestamp2.processedAtTimestamp;
      processedAtTimestamp2 = processedAtTimestamp.processedAtTimestamp;
      let num = 0;
      if (null != processedAtTimestamp2.activities) {
        num = processedAtTimestamp2.activities.length;
      }
      let num2 = 0;
      if (null != processedAtTimestamp.activities) {
        num2 = processedAtTimestamp.activities.length;
      }
      if (processedAtTimestamp > processedAtTimestamp2) {
        let tmp = processedAtTimestamp2;
      } else {
        tmp = processedAtTimestamp;
        if (processedAtTimestamp === processedAtTimestamp2) {
          tmp = processedAtTimestamp;
        }
      }
      return tmp;
    }, values[0]);
    if (reduced.status === constants.OFFLINE) {
      if (obj.every(dependencyMap[id], (status) => {
        let tmp = status.status === constants.OFFLINE;
        if (tmp) {
          let tmp3 = null == status.hiddenActivities;
          if (!tmp3) {
            tmp3 = 0 === status.hiddenActivities.length;
          }
          tmp = tmp3;
        }
        return tmp;
      })) {
        delete tmp3[tmp2];
      } else if (values.some((hiddenActivities) => {
        let tmp = null != hiddenActivities.hiddenActivities;
        if (tmp) {
          tmp = hiddenActivities.hiddenActivities.length > 0;
        }
        return tmp;
      })) {
        const _Object = Object;
        values = Object.values(values);
        const flatMapResult = values.flatMap((hiddenActivities) => {
          hiddenActivities = hiddenActivities.hiddenActivities;
          if (hiddenActivities == null) {
            hiddenActivities = [];
          }
          return hiddenActivities;
        });
        let tmp8 = flatMapResult;
        if (0 !== flatMapResult.length) {
          const items = [];
          HermesBuiltin.arraySpread(flatMapResult, 0);
          const reversed = items.reverse();
          const _Map = Map;
          const map = new Map(reversed.map((party) => {
            party = party.party;
            let id;
            if (party != null) {
              id = party.id;
            }
            const items = ["" + party.application_id + ":" + id, party];
            return items;
          }));
          const items1 = [];
          HermesBuiltin.arraySpread(map.values(), 0);
          tmp8 = items1;
        }
        closure_14[id] = tmp8;
        const tmp7 = closure_14;
      }
      obj = apply;
    }
    ({ status: closure_11[id], activities } = reduced);
    closure_12[id] = activities;
    closure_13[id] = filterPlayingActivities(activities);
    const _Object2 = Object;
    const values1 = Object.values(values);
    const flatMapResult1 = values1.flatMap((hiddenActivities) => {
      hiddenActivities = hiddenActivities.hiddenActivities;
      if (hiddenActivities == null) {
        hiddenActivities = [];
      }
      return hiddenActivities;
    });
    let tmp23 = flatMapResult1;
    if (0 !== flatMapResult1.length) {
      const items2 = [];
      HermesBuiltin.arraySpread(flatMapResult1, 0);
      const reversed1 = items2.reverse();
      const _Map2 = Map;
      const map1 = new Map(reversed1.map((party) => {
        party = party.party;
        let id;
        if (party != null) {
          id = party.id;
        }
        const items = ["" + party.application_id + ":" + id, party];
        return items;
      }));
      const items3 = [];
      HermesBuiltin.arraySpread(map1.values(), 0);
      tmp23 = items3;
    }
    closure_14[id] = tmp23;
    if (null != reduced.clientStatus) {
      closure_15[id] = reduced.clientStatus;
    }
    const tmp22 = closure_14;
  }
}
function flattenPresenceInConnectionOpen(arg0) {
  let activities;
  if (null != dependencyMap[arg0]) {
    const _Object = Object;
    const maxByResult = apply.maxBy(Object.values(tmp), (processedAtTimestamp) => processedAtTimestamp.processedAtTimestamp);
    let tmp3 = maxByResult.status !== constants.OFFLINE;
    if (!tmp3) {
      let tmp2 = null != maxByResult.hiddenActivities;
      if (tmp2) {
        tmp2 = maxByResult.hiddenActivities.length > 0;
      }
      tmp3 = tmp2;
    }
    if (tmp3) {
      ({ status: closure_11[arg0], activities } = maxByResult);
      closure_12[arg0] = activities;
      closure_13[arg0] = filterPlayingActivities(activities);
      let hiddenActivities = maxByResult.hiddenActivities;
      if (hiddenActivities == null) {
        hiddenActivities = [];
      }
      closure_14[arg0] = hiddenActivities;
      if (null != maxByResult.clientStatus) {
        closure_15[arg0] = maxByResult.clientStatus;
      }
      const tmp8 = closure_14;
    }
    const obj = apply;
  }
}
function updatePresence(arg0) {
  let activities;
  let clientStatus;
  let guildId;
  let hiddenActivities;
  let processedAtTimestamp;
  let status;
  let userId;
  ({ guildId, userId, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = arg0);
  if (userId === store.getId()) {
    return false;
  } else {
    let tmp5 = status === constants.OFFLINE;
    if (tmp5) {
      let tmp4 = null == hiddenActivities;
      if (!tmp4) {
        tmp4 = 0 === hiddenActivities.length;
      }
      tmp5 = tmp4;
    }
    let tmp7 = dependencyMap[userId];
    if (null == tmp7) {
      if (tmp5) {
        return false;
      } else {
        let obj = {};
        dependencyMap[userId] = obj;
        tmp7 = obj;
      }
    }
    if (tmp5) {
      obj = { status: null, clientStatus: null, activities: null, hiddenActivities: null, processedAtTimestamp: null };
      obj[0] = status;
      obj[1] = clientStatus;
      obj[2] = closure_9;
      obj[3] = closure_9;
      obj[4] = processedAtTimestamp;
      tmp7[guildId] = obj;
    } else {
      let sorted = activities;
      if (activities.length > 1) {
        const items = [];
        HermesBuiltin.arraySpread(activities, 0);
        sorted = items.sort(sortActivity);
      }
      if (hiddenActivities == null) {
        hiddenActivities = [];
      }
      let tmp15 = hiddenActivities;
      if (0 !== hiddenActivities.length) {
        const items1 = [];
        HermesBuiltin.arraySpread(hiddenActivities, 0);
        const reversed = items1.reverse();
        const _Map = Map;
        const map = new Map(reversed.map((party) => {
          party = party.party;
          let id;
          if (party != null) {
            id = party.id;
          }
          const items = ["" + party.application_id + ":" + id, party];
          return items;
        }));
        const items2 = [];
        HermesBuiltin.arraySpread(map.values(), 0);
        tmp15 = items2;
      }
      let activities2 = sorted;
      if (null != tmp7[guildId]) {
        activities2 = sorted;
        if (isUndefinedOrNull(tmp25.activities, sorted)) {
          activities2 = tmp25.activities;
        }
      }
      obj = { status: null, clientStatus: null, activities: null, hiddenActivities: null, processedAtTimestamp: null };
      obj[0] = status;
      obj[1] = clientStatus;
      obj[2] = activities2;
      obj[3] = tmp15;
      obj[4] = processedAtTimestamp;
      tmp7[guildId] = obj;
    }
    delete tmp2[tmp];
    flattenPresence(userId);
    return true;
  }
}
function updatePresenceInConnectionOpen(arg0) {
  let activities;
  let clientStatus;
  let guildId;
  let hiddenActivities;
  let processedAtTimestamp;
  let status;
  let userId;
  ({ guildId, userId, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = arg0);
  if (userId !== store.getId()) {
    let tmp3 = status === constants.OFFLINE;
    if (tmp3) {
      let tmp2 = null == hiddenActivities;
      if (!tmp2) {
        tmp2 = 0 === hiddenActivities.length;
      }
      tmp3 = tmp2;
    }
    let tmp5 = dependencyMap[userId];
    if (null == tmp5) {
      if (!tmp3) {
        let obj = {};
        dependencyMap[userId] = obj;
        tmp5 = obj;
      }
    }
    if (tmp3) {
      obj = { status: null, clientStatus: null, activities: null, hiddenActivities: null, processedAtTimestamp: null };
      obj[0] = status;
      obj[1] = clientStatus;
      obj[2] = closure_9;
      obj[3] = closure_9;
      obj[4] = processedAtTimestamp;
      tmp5[guildId] = obj;
    } else {
      let sorted = activities;
      if (activities.length > 1) {
        let items = [];
        HermesBuiltin.arraySpread(activities, 0);
        sorted = items.sort(sortActivity);
      }
      if (hiddenActivities == null) {
        hiddenActivities = [];
      }
      let tmp13 = hiddenActivities;
      if (0 !== hiddenActivities.length) {
        const items1 = [];
        HermesBuiltin.arraySpread(hiddenActivities, 0);
        const reversed = items1.reverse();
        const _Map = Map;
        const map = new Map(reversed.map((party) => {
          party = party.party;
          let id;
          if (party != null) {
            id = party.id;
          }
          const items = ["" + party.application_id + ":" + id, party];
          return items;
        }));
        const items2 = [];
        HermesBuiltin.arraySpread(map.values(), 0);
        tmp13 = items2;
      }
      obj = { status: null, clientStatus: null, activities: null, hiddenActivities: null, processedAtTimestamp: null };
      obj[0] = status;
      obj[1] = clientStatus;
      obj[2] = sorted;
      obj[3] = tmp13;
      obj[4] = processedAtTimestamp;
      tmp5[guildId] = obj;
    }
  }
}
function clearPresence(closure_7, id) {
  if (id === store.getId()) {
    return false;
  } else {
    if (null != dependencyMap[id]) {
      if (null != tmp5[closure_7]) {
        delete tmp3[tmp2];
        const _Object = Object;
        if (0 === Object.keys(tmp5).length) {
          delete tmp2[tmp];
        }
        flattenPresence(id);
      }
    }
    return false;
  }
}
function clearPresences(closure_7) {
  const keys = DISCORD_EPOCH.keys(closure_10);
  const obj = DISCORD_EPOCH;
  while (tmp2 !== undefined) {
    let tmp4 = clearPresence;
    let tmp5 = clearPresence(closure_7, tmp3);
    continue;
  }
}
({ StatusTypes: c4, ActivityTypes: c5, ClientTypes: closure_6, ME: error, UserFlags: metroImportAll } = ME);
let closure_9 = Object.freeze([]);
let closure_10 = {};
let closure_11 = {};
let closure_12 = {};
let closure_13 = {};
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
class PresenceStore extends Store {
}
const prototype = PresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint, mergeGuildAvatar);
};
prototype["setCurrentUserOnConnectionOpen"] = function setCurrentUserOnConnectionOpen(closure_17, closure_26) {
  closure_11[store.getId()] = closure_17;
  const id = store.getId();
  const items = [...closure_26];
  const sorted = items.sort(sortActivity);
  closure_12[id] = sorted;
  closure_13[id] = filterPlayingActivities(sorted);
};
prototype["getStatus"] = function getStatus(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  let UNKNOWN = arg2;
  if (arg2 === undefined) {
    UNKNOWN = constants.OFFLINE;
  }
  user = user.getUser(arg0);
  let hasFlagResult = null != user;
  if (hasFlagResult) {
    hasFlagResult = user.hasFlag(constants4.BOT_HTTP_INTERACTIONS);
  }
  if (hasFlagResult) {
    UNKNOWN = constants.UNKNOWN;
  }
  if (null == tmp) {
    let tmp11 = dependencyMap2[arg0];
    if (tmp11 == null) {
      tmp11 = UNKNOWN;
    }
    return tmp11;
  } else {
    let tmp8 = null;
    if (null != dependencyMap[arg0]) {
      tmp8 = tmp7[tmp];
    }
    let status;
    if (tmp8 != null) {
      status = tmp8.status;
    }
    if (status == null) {
      status = UNKNOWN;
    }
    return status;
  }
};
prototype["getActivities"] = function getActivities(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  if (null == tmp) {
    let tmp8 = dependencyMap4[arg0];
    if (tmp8 == null) {
      tmp8 = closure_9;
    }
    return tmp8;
  } else {
    let tmp4 = null;
    if (null != dependencyMap[arg0]) {
      tmp4 = tmp3[tmp];
    }
    if (null != tmp4) {
      if (null != tmp4.activities) {
        let tmp6 = filterPlayingActivities(tmp4.activities);
      }
      return tmp6;
    }
    tmp6 = closure_9;
  }
};
prototype["getUnfilteredActivities"] = function getUnfilteredActivities(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  if (null == tmp) {
    let tmp6 = dependencyMap3[arg0];
    if (tmp6 == null) {
      tmp6 = closure_9;
    }
    return tmp6;
  } else {
    let tmp4 = null;
    if (null != dependencyMap[arg0]) {
      tmp4 = tmp3[tmp];
    }
    if (null != tmp4) {
      if (null != tmp4.activities) {
        let activities = tmp4.activities;
      }
      return activities;
    }
    activities = closure_9;
  }
};
prototype["getHiddenActivities"] = function getHiddenActivities(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  if (null == tmp) {
    let tmp7 = dependencyMap5[arg0];
    if (tmp7 == null) {
      tmp7 = closure_9;
    }
    let hiddenActivities = tmp7;
  } else {
    let tmp4 = null;
    if (null != dependencyMap[arg0]) {
      tmp4 = tmp3[tmp];
    }
    hiddenActivities = undefined;
    if (tmp4 != null) {
      hiddenActivities = tmp4.hiddenActivities;
    }
    if (hiddenActivities == null) {
      hiddenActivities = closure_9;
    }
  }
  return hiddenActivities;
};
prototype["getPrimaryActivity"] = function getPrimaryActivity(arg0) {
  let tmp = arg1;
  if (arg1 === undefined) {
    tmp = null;
  }
  const activities = this.getActivities(arg0, tmp);
  return activities.filter((type) => type.type !== constants.HANG_STATUS)[0];
};
prototype["getAllApplicationActivities"] = function getAllApplicationActivities(arg0) {
  const items = [];
  let obj = DISCORD_EPOCH;
  const keys = obj.keys(dependencyMap4);
  for (const item10015 of keys) {
    let tmp3 = dependencyMap4;
    let tmp4 = dependencyMap4[item10015];
    let tmp5 = tmp4;
    let tmp6 = tmp4;
    for (const item10023 of tmp4) {
      if (item10023.application_id === arg0) {
        obj = { userId: null, activity: null };
        let tmp8 = item10015;
        obj[0] = tmp2;
        let tmp9 = item10023;
        obj[1] = tmp7;
        let arr = items.push(obj);
      }
      continue;
    }
    continue;
  }
  return items;
};
prototype["getApplicationActivity"] = function getApplicationActivity(arg0, arg1) {
  let closure_0 = arg1;
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  return this.findActivity(arg0, (application_id) => application_id.application_id === closure_0, tmp, true);
};
prototype["findActivity"] = function findActivity(arg0, closure_4) {
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  let flag = arg3;
  if (arg3 === undefined) {
    flag = false;
  }
  if (flag == null) {
    flag = false;
  }
  const self = this;
  const activities = this.getActivities(arg0, tmp);
  let combined = activities;
  if (flag) {
    combined = activities.concat(self.getHiddenActivities(arg0, tmp));
  }
  return combined.find(closure_4);
};
prototype["getActivityMetadata"] = function getActivityMetadata(arg0) {
  return table[arg0];
};
prototype["getUserIds"] = function getUserIds() {
  return DISCORD_EPOCH.keys(closure_12);
};
prototype["isMobileOnline"] = function isMobileOnline(id) {
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = tmp[constants3.MOBILE] === constants.ONLINE;
  }
  if (tmp2) {
    tmp2 = tmp[constants3.DESKTOP] !== constants.ONLINE;
  }
  if (tmp2) {
    tmp2 = tmp[constants3.VR] !== constants.ONLINE;
  }
  return tmp2;
};
prototype["isVROnline"] = function isVROnline(id) {
  let tmp2 = null != tmp;
  if (tmp2) {
    tmp2 = tmp[constants3.VR] === constants.ONLINE;
  }
  return tmp2;
};
prototype["getClientStatus"] = function getClientStatus(arg0) {
  return dependencyMap6[arg0];
};
prototype["getState"] = function getState() {
  return { presencesForGuilds: closure_10, statuses: closure_11, activities: closure_12, filteredActivities: closure_13, hiddenActivities: closure_14, activityMetadata: closure_16, clientStatuses: closure_15 };
};
PresenceStore.displayName = "PresenceStore";
const presenceStore = new PresenceStore(require("dispatcher"), {
  CONNECTION_OPEN: function handleConnectionOpen() {
    return true;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(arg0) {
    let guilds;
    let presences;
    ({ guilds, presences } = arg0);
    let set;
    const id = store.getId();
    let closure_10 = {};
    let closure_16 = {};
    obj = { [id]: obj[id] };
    obj = { [id]: obj[id] };
    obj = { [id]: obj[id] };
    obj1 = { [id]: obj1[id] };
    let closure_15 = { [id]: {} };
    set = new Set();
    let item = guilds.forEach((presences) => {
      let closure_0 = presences;
      presences = presences.presences;
      const item = presences.forEach((status) => {
        const user = status.user;
        outer2_22({ guildId: presences.id, userId: user.id, status: status.status, clientStatus: status.clientStatus, activities: status.activities, hiddenActivities: status.hiddenActivities, processedAtTimestamp: status.processedAtTimestamp });
        presences.add(user.id);
      });
    });
    const item1 = presences.forEach((user) => {
      user = user.user;
      if (null != user) {
        const obj = { guildId: null, userId: null, status: null, clientStatus: null, activities: null, hiddenActivities: null, processedAtTimestamp: null };
        obj[0] = outer1_7;
        obj[1] = user.id;
        obj[2] = tmp;
        obj[3] = tmp2;
        obj[4] = tmp3;
        obj[5] = tmp4;
        obj[6] = tmp5;
        outer1_22(obj);
        set.add(user.id);
      }
    });
    set.delete(id);
    const item2 = set.forEach(flattenPresenceInConnectionOpen);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(presences) {
    let closure_10;
    let closure_11;
    let closure_12;
    let closure_14;
    let closure_16;
    ({ presencesForGuilds: closure_10, statuses: closure_11, activities: closure_12, hiddenActivities: closure_14, activityMetadata: closure_16 } = presences.presences);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const presences = guild.presences;
    const item = presences.forEach((user) => {
      outer1_21({ guildId: guild.id, userId: user.user.id, status: user.status, clientStatus: user.clientStatus, activities: user.activities, hiddenActivities: user.hiddenActivities, processedAtTimestamp: user.processedAtTimestamp });
    });
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    clearPresences(guild.guild.id);
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(user) {
    const id = user.user.id;
    let flag = false;
    if (id !== store.getId()) {
      flag = false;
      if (null != dependencyMap[id]) {
        flag = false;
        if (null != tmp5[user.guildId]) {
          delete tmp3[tmp2];
          const _Object = Object;
          if (0 === Object.keys(tmp5).length) {
            delete tmp2[tmp];
          }
          flattenPresence(id);
        }
      }
    }
    return flag;
  },
  PRESENCE_UPDATES: function handlePresenceUpdates(updates) {
    updates = updates.updates;
    const mapped = updates.map((guildId) => {
      let activities;
      let clientStatus;
      let hiddenActivities;
      let processedAtTimestamp;
      let status;
      let user;
      guildId = guildId.guildId;
      ({ user, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = guildId);
      if (guildId == null) {
        guildId = closure_7;
      }
      return closure_21({ guildId, userId: user.id, status, clientStatus, activities, hiddenActivities, processedAtTimestamp });
    });
    return mapped.some((arg0) => arg0);
  },
  PRESENCES_REPLACE: function handlePresenceReplace(presences) {
    presences = presences.presences;
    clearPresences(closure_7);
    const item = presences.forEach((user) => {
      user = user.user;
      if (null != user) {
        const obj = { guildId: null, userId: null, status: null, clientStatus: null, activities: null, hiddenActivities: null, processedAtTimestamp: null };
        obj[0] = closure_7;
        obj[1] = user.id;
        obj[2] = tmp;
        obj[3] = tmp2;
        obj[4] = tmp3;
        obj[5] = tmp4;
        obj[6] = tmp5;
        callback(obj);
      }
    });
  },
  ACTIVITY_METADATA_UPDATE: function handleActivityMetadataUpdate(userId) {
    closure_16[userId.userId] = userId.metadata;
    return false;
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(arg0) {
    let importDefault;
    let members;
    ({ guildId: importDefault, members } = arg0);
    const item = members.forEach((presence) => {
      if (null != presence.presence) {
        const obj = { guildId: null, userId: null, status: null, clientStatus: null, activities: null, hiddenActivities: null, processedAtTimestamp: null };
        obj[0] = closure_0;
        obj[1] = presence.user_id;
        obj[2] = presence.presence.status;
        obj[3] = presence.presence.clientStatus;
        obj[4] = presence.presence.activities;
        obj[5] = presence.presence.hiddenActivities;
        obj[6] = presence.presence.processedAtTimestamp;
        outer1_21(obj);
      }
    });
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(arg0) {
    let addedMembers;
    let importDefault;
    ({ guildId: importDefault, addedMembers } = arg0);
    if (addedMembers != null) {
      const item = addedMembers.forEach((presence) => {
        if (null != presence.presence) {
          const obj = { guildId: null, userId: null, status: null, clientStatus: null, activities: null, hiddenActivities: null, processedAtTimestamp: null };
          obj[0] = closure_0;
          obj[1] = presence.userId;
          obj[2] = presence.presence.status;
          obj[3] = presence.presence.clientStatus;
          obj[4] = presence.presence.activities;
          obj[5] = presence.presence.hiddenActivities;
          obj[6] = presence.presence.processedAtTimestamp;
          outer1_21(obj);
        }
      });
    }
  },
  SELF_PRESENCE_STORE_UPDATE: function handleCurrentUserPresenceUpdate(status) {
    const id = store.getId();
    if (dependencyMap2[id] === status.status) {
      if (dependencyMap3[id] === status.activities) {
        if (dependencyMap5[id] === status.hiddenActivities) {
          return false;
        }
      }
    }
    dependencyMap2[id] = status.status;
    const items = [...status.activities];
    const sorted = items.sort(sortActivity);
    dependencyMap3[id] = sorted;
    closure_13[id] = filterPlayingActivities(sorted);
    const items1 = [...status.hiddenActivities];
    dependencyMap5[id] = items1.sort(sortActivity);
    delete tmp[tmp2];
  }
});
const result = require("ME").fileFinishedImporting("stores/PresenceStore.tsx");

export default presenceStore;
export { sortActivity };