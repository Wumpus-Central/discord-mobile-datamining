// discord_app/stores/PresenceStore.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import _modDef1332 from "../../_runtime/metro/01332__.js";
import hasRichActivityDefault from "../modules/activities/utils/hasRichActivity.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import UserStore from "UserStore.tsx";

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
    if (hasRichActivityDefault(type2)) {
      num3 = 1;
    }
    let num4 = 0;
    if (tmp3(4601)(type)) {
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
      if (nextResult.type === constants2.PLAYING) {
        let arr = items1.push(tmp4);
      } else {
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
  delete tmp[tmp2];
  delete tmp[tmp2];
  delete tmp[tmp2];
  delete tmp[tmp2];
  delete tmp[tmp2];
  if (null != presencesForGuilds[id]) {
    const _Object3 = Object;
    let values = Object.values(presencesForGuilds[id]);
    const reduced = values.reduce((processedAtTimestamp, processedAtTimestamp2) => {
      processedAtTimestamp = processedAtTimestamp2.processedAtTimestamp;
      processedAtTimestamp2 = processedAtTimestamp.processedAtTimestamp;
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
      if (
        obj.every(presencesForGuilds[id], (status) => {
          let tmp = status.status === constants.OFFLINE;
          if (tmp) {
            let tmp3 = null == status.hiddenActivities;
            if (!tmp3) {
              tmp3 = 0 === status.hiddenActivities.length;
            }
            tmp = tmp3;
          }
          return tmp;
        })
      ) {
        delete tmp3[tmp2];
      } else if (
        values.some((hiddenActivities) => {
          let tmp = null != hiddenActivities.hiddenActivities;
          if (tmp) {
            tmp = hiddenActivities.hiddenActivities.length > 0;
          }
          return tmp;
        })
      ) {
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
          const map = new Map(
            reversed.map((party) => {
              party = party.party;
              let id;
              if (party != null) {
                id = party.id;
              }
              const items = ["" + party.application_id + ":" + id, party];
              return items;
            }),
          );
          const items1 = [];
          HermesBuiltin.arraySpread(map.values(), 0);
          tmp8 = items1;
        }
        closure_14[id] = tmp8;
      }
      obj = _modDef12;
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
      map1 = new Map(
        reversed1.map((party) => {
          party = party.party;
          let id;
          if (party != null) {
            id = party.id;
          }
          const items = ["" + party.application_id + ":" + id, party];
          return items;
        }),
      );
      const items3 = [];
      HermesBuiltin.arraySpread(map1.values(), 0);
      tmp23 = items3;
    }
    closure_14[id] = tmp23;
    if (null != reduced.clientStatus) {
      closure_15[id] = reduced.clientStatus;
    }
  }
}
function flattenPresenceInConnectionOpen(arg0) {
  if (null != presencesForGuilds[arg0]) {
    const _Object = Object;
    const maxByResult = _modDef12.maxBy(
      Object.values(tmp),
      (processedAtTimestamp) => processedAtTimestamp.processedAtTimestamp,
    );
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
      hiddenActivities = maxByResult.hiddenActivities;
      if (hiddenActivities == null) {
        hiddenActivities = [];
      }
      closure_14[arg0] = hiddenActivities;
      if (null != maxByResult.clientStatus) {
        closure_15[arg0] = maxByResult.clientStatus;
      }
    }
  }
}
function updatePresence(arg0) {
  ({ guildId, userId, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = arg0);
  if (userId === AuthenticationStore.getId()) {
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
    let tmp7 = presencesForGuilds[userId];
    if (null == tmp7) {
      if (tmp5) {
        return false;
      } else {
        let obj = {};
        presencesForGuilds[userId] = obj;
        tmp7 = obj;
      }
    }
    if (tmp5) {
      obj = { status, clientStatus, activities: hiddenActivities, hiddenActivities, processedAtTimestamp };
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
        const map = new Map(
          reversed.map((party) => {
            party = party.party;
            let id;
            if (party != null) {
              id = party.id;
            }
            const items = ["" + party.application_id + ":" + id, party];
            return items;
          }),
        );
        const items2 = [];
        HermesBuiltin.arraySpread(map.values(), 0);
        tmp15 = items2;
      }
      let activities2 = sorted;
      if (null != tmp7[guildId]) {
        activities2 = sorted;
        if (_modDef1332(tmp25.activities, sorted)) {
          activities2 = tmp25.activities;
        }
      }
      obj = { status, clientStatus, activities: activities2, hiddenActivities: tmp15, processedAtTimestamp };
      tmp7[guildId] = obj;
    }
    delete tmp2[tmp];
    flattenPresence(userId);
    return true;
  }
}
function updatePresenceInConnectionOpen(arg0) {
  ({ guildId, userId, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = arg0);
  if (userId !== AuthenticationStore.getId()) {
    let tmp3 = status === constants.OFFLINE;
    if (tmp3) {
      let tmp2 = null == hiddenActivities;
      if (!tmp2) {
        tmp2 = 0 === hiddenActivities.length;
      }
      tmp3 = tmp2;
    }
    let tmp5 = presencesForGuilds[userId];
    if (null == tmp5) {
      if (!tmp3) {
        let obj = {};
        presencesForGuilds[userId] = obj;
        tmp5 = obj;
      }
    }
    if (tmp3) {
      obj = { status, clientStatus, activities: hiddenActivities, hiddenActivities, processedAtTimestamp };
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
        const map = new Map(
          reversed.map((party) => {
            party = party.party;
            let id;
            if (party != null) {
              id = party.id;
            }
            const items = ["" + party.application_id + ":" + id, party];
            return items;
          }),
        );
        const items2 = [];
        HermesBuiltin.arraySpread(map.values(), 0);
        tmp13 = items2;
      }
      obj = { status, clientStatus, activities: sorted, hiddenActivities: tmp13, processedAtTimestamp };
      tmp5[guildId] = obj;
    }
  }
}
function clearPresence(id, id) {
  if (id === AuthenticationStore.getId()) {
    return false;
  } else {
    if (null != presencesForGuilds[id]) {
      if (null != tmp5[id]) {
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
function clearPresences(id) {
  const keys = SnowflakeUtilsDefault.keys(closure_10);
  while (tmp2 !== undefined) {
    let tmp5 = clearPresence(id, tmp3);
    continue;
  }
}
const Constants = fn(1074);
({
  StatusTypes: closure_4,
  ActivityTypes: hasOwnProperty,
  ClientTypes: metroRequire,
  ME: closure_7,
  UserFlags: closure_8,
} = Constants);
let closure_9 = Object.freeze([]);
const presencesForGuilds = {};
const statuses = {};
let activities = {};
const filteredActivities = {};
let hiddenActivities = {};
const clientStatuses = {};
const activityMetadata = {};
const Store = initializeDefault.Store;
class PresenceStore extends Store {}
const prototype = PresenceStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(AuthenticationStore, UserStore);
};
prototype["setCurrentUserOnConnectionOpen"] = function setCurrentUserOnConnectionOpen(IDLE, valueResult) {
  closure_11[AuthenticationStore.getId()] = IDLE;
  const id = AuthenticationStore.getId();
  const items = [...valueResult];
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
  const user = UserStore.getUser(arg0);
  let hasFlagResult = null != user;
  if (hasFlagResult) {
    hasFlagResult = user.hasFlag(constants4.BOT_HTTP_INTERACTIONS);
  }
  if (hasFlagResult) {
    UNKNOWN = constants.UNKNOWN;
  }
  if (null == tmp) {
    let tmp11 = statuses[arg0];
    if (tmp11 == null) {
      tmp11 = UNKNOWN;
    }
    return tmp11;
  } else {
    let tmp8 = null;
    if (null != presencesForGuilds[arg0]) {
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
    let tmp8 = filteredActivities[arg0];
    if (tmp8 == null) {
      tmp8 = closure_9;
    }
    return tmp8;
  } else {
    let tmp4 = null;
    if (null != presencesForGuilds[arg0]) {
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
    let tmp6 = activities[arg0];
    if (tmp6 == null) {
      tmp6 = closure_9;
    }
    return tmp6;
  } else {
    let tmp4 = null;
    if (null != presencesForGuilds[arg0]) {
      tmp4 = tmp3[tmp];
    }
    if (null != tmp4) {
      if (null != tmp4.activities) {
        activities = tmp4.activities;
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
    let tmp7 = hiddenActivities[arg0];
    if (tmp7 == null) {
      tmp7 = closure_9;
    }
    hiddenActivities = tmp7;
  } else {
    let tmp4 = null;
    if (null != presencesForGuilds[arg0]) {
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
  activities = this.getActivities(arg0, tmp);
  return activities.filter((type) => type.type !== constants.HANG_STATUS)[0];
};
prototype["getAllApplicationActivities"] = function getAllApplicationActivities(arg0) {
  const items = [];
  let obj = SnowflakeUtilsDefault;
  const keys = obj.keys(filteredActivities);
  for (const item10015 of keys) {
    let tmp4 = filteredActivities[item10015];
    for (const item10023 of tmp4) {
      if (item10023.application_id === arg0) {
        obj = { userId: null, activity: null };
        obj.userId = tmp2;
        obj.activity = tmp7;
        let arr = items.push(obj);
      }
      continue;
    }
    continue;
  }
  return items;
};
prototype["getApplicationActivity"] = function getApplicationActivity(arg0, arg1) {
  closure_0 = arg1;
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = null;
  }
  return this.findActivity(arg0, (application_id) => application_id.application_id === closure_0, tmp, true);
};
prototype["findActivity"] = function findActivity(arg0, _messages) {
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
  activities = this.getActivities(arg0, tmp);
  let combined = activities;
  if (flag) {
    combined = activities.concat(self.getHiddenActivities(arg0, tmp));
  }
  return combined.find(_messages);
};
prototype["getActivityMetadata"] = function getActivityMetadata(arg0) {
  return activityMetadata[arg0];
};
prototype["getUserIds"] = function getUserIds() {
  return SnowflakeUtilsDefault.keys(closure_12);
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
  return clientStatuses[arg0];
};
prototype["getState"] = function getState() {
  return {
    presencesForGuilds,
    statuses,
    activities,
    filteredActivities,
    hiddenActivities,
    activityMetadata,
    clientStatuses,
  };
};
PresenceStore.displayName = "PresenceStore";
const presenceStore = new PresenceStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen() {
    return true;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(arg0) {
    ({ guilds, presences } = arg0);
    const id = AuthenticationStore.getId();
    closure_10 = {};
    closure_16 = {};
    obj = { [id]: obj[id] };
    obj = { [id]: obj[id] };
    obj = { [id]: obj[id] };
    obj1 = { [id]: obj1[id] };
    closure_15 = { [id]: {} };
    const set = new Set();
    let item = guilds.forEach((presences) => {
      presences = presences.presences;
      const item = presences.forEach((status) => {
        const user = status.user;
        updatePresenceInConnectionOpen({
          guildId: presences.id,
          userId: user.id,
          status: status.status,
          clientStatus: status.clientStatus,
          activities: status.activities,
          hiddenActivities: status.hiddenActivities,
          processedAtTimestamp: status.processedAtTimestamp,
        });
        set.add(user.id);
      });
    });
    const item1 = presences.forEach((user) => {
      user = user.user;
      if (null != user) {
        obj = {
          guildId,
          userId: user.id,
          status: tmp,
          clientStatus: tmp2,
          activities: tmp3,
          hiddenActivities: tmp4,
          processedAtTimestamp: tmp5,
        };
        updatePresenceInConnectionOpen(obj);
        set.add(user.id);
      }
    });
    set.delete(id);
    const item2 = set.forEach(flattenPresenceInConnectionOpen);
  },
  OVERLAY_INITIALIZE: function handleOverlayInitialize(presences) {
    ({
      presencesForGuilds: closure_10,
      statuses: closure_11,
      activities: closure_12,
      hiddenActivities: closure_14,
      activityMetadata: closure_16,
    } = presences.presences);
  },
  GUILD_CREATE: function handleGuildCreate(guild) {
    guild = guild.guild;
    const presences = guild.presences;
    const item = presences.forEach((user) => {
      updatePresence({
        guildId: guild.id,
        userId: user.user.id,
        status: user.status,
        clientStatus: user.clientStatus,
        activities: user.activities,
        hiddenActivities: user.hiddenActivities,
        processedAtTimestamp: user.processedAtTimestamp,
      });
    });
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    clearPresences(guild.guild.id);
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(user) {
    const id = user.user.id;
    let flag = false;
    if (id !== AuthenticationStore.getId()) {
      flag = false;
      if (null != presencesForGuilds[id]) {
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
      guildId = guildId.guildId;
      ({ user, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = guildId);
      if (guildId == null) {
        guildId = closure_1_7;
      }
      return updatePresence({
        guildId,
        userId: user.id,
        status,
        clientStatus,
        activities,
        hiddenActivities,
        processedAtTimestamp,
      });
    });
    return mapped.some((item) => item);
  },
  PRESENCES_REPLACE: function handlePresenceReplace(presences) {
    presences = presences.presences;
    clearPresences(guildId);
    const item = presences.forEach((user) => {
      user = user.user;
      if (null != user) {
        const obj = {
          guildId,
          userId: user.id,
          status: tmp,
          clientStatus: tmp2,
          activities: tmp3,
          hiddenActivities: tmp4,
          processedAtTimestamp: tmp5,
        };
        updatePresence(obj);
      }
    });
  },
  ACTIVITY_METADATA_UPDATE: function handleActivityMetadataUpdate(userId) {
    closure_16[userId.userId] = userId.metadata;
    return false;
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(arg0) {
    ({ guildId: importDefault, members } = arg0);
    const item = members.forEach((presence) => {
      if (null != presence.presence) {
        const obj = {
          guildId,
          userId: presence.user_id,
          status: presence.presence.status,
          clientStatus: presence.presence.clientStatus,
          activities: presence.presence.activities,
          hiddenActivities: presence.presence.hiddenActivities,
          processedAtTimestamp: presence.presence.processedAtTimestamp,
        };
        updatePresence(obj);
      }
    });
  },
  THREAD_MEMBERS_UPDATE: function handleThreadMembersUpdate(arg0) {
    ({ guildId: importDefault, addedMembers } = arg0);
    if (addedMembers != null) {
      const item = addedMembers.forEach((presence) => {
        if (null != presence.presence) {
          const obj = {
            guildId,
            userId: presence.userId,
            status: presence.presence.status,
            clientStatus: presence.presence.clientStatus,
            activities: presence.presence.activities,
            hiddenActivities: presence.presence.hiddenActivities,
            processedAtTimestamp: presence.presence.processedAtTimestamp,
          };
          updatePresence(obj);
        }
      });
    }
  },
  SELF_PRESENCE_STORE_UPDATE: function handleCurrentUserPresenceUpdate(status) {
    const id = AuthenticationStore.getId();
    if (statuses[id] === status.status) {
      if (activities[id] === status.activities) {
        if (hiddenActivities[id] === status.hiddenActivities) {
          return false;
        }
      }
    }
    statuses[id] = status.status;
    const items = [...status.activities];
    const sorted = items.sort(sortActivity);
    activities[id] = sorted;
    closure_13[id] = filterPlayingActivities(sorted);
    const items1 = [...status.hiddenActivities];
    hiddenActivities[id] = items1.sort(sortActivity);
    delete tmp[tmp2];
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("stores/PresenceStore.tsx");

export default presenceStore;
export { sortActivity };
