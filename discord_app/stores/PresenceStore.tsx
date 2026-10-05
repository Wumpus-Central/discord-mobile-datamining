// discord_app/stores/PresenceStore.tsx
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import _modDef1342 from "../../_runtime/metro/01342__.js";
import hasRichActivityDefault from "../modules/activities/utils/hasRichActivity.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import UserStore from "UserStore.tsx";
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let map, set;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
const f89725 = (party) => {
  party = party.party;
  let id;
  const application_id = party.application_id;
  if (party != null) {
    id = party.id;
  }
  const items = ["" + application_id + ":" + id, party];
  return items;
};
function sortActivity(type, type2) {
  type = type2.type;
  let num = 4;
  let num2 = 4;
  if (hasOwnProperty.CUSTOM_STATUS !== type) {
    num2 = 3;
    if (hasOwnProperty.COMPETING !== type) {
      num2 = 2;
      if (hasOwnProperty.STREAMING !== type) {
        num2 = 0;
        if (hasOwnProperty.PLAYING === type) {
          num2 = 1;
        }
      }
    }
  }
  type2 = type.type;
  if (hasOwnProperty.CUSTOM_STATUS !== type2) {
    num = 3;
    if (hasOwnProperty.COMPETING !== type2) {
      num = 2;
      if (hasOwnProperty.STREAMING !== type2) {
        num = 0;
        if (hasOwnProperty.PLAYING === type2) {
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
    if (hasRichActivityDefault(type)) {
      num4 = 1;
    }
    diff = num3 - num4;
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
      let tmp5 = nextResult;
      if (nextResult.type === hasOwnProperty.PLAYING) {
        let arr = items1.push(tmp5);
      } else {
        let arr2 = items.push(tmp5);
      }
      continue;
    }
    if (items1.length <= 1) {
      return arg0;
    } else {
      const items2 = [];
      HermesBuiltin.arraySpread(items2, items1, 0);
      const items3 = [];
      items3[HermesBuiltin.arraySpread(items3, items, 0)] = items2.sort(sortActivity)[0];
      return items3.sort(sortActivity);
    }
  }
}
function flattenPresence(id) {
  delete statuses[id];
  delete closure_12[id];
  delete filteredActivities[id];
  delete hiddenActivities[id];
  delete clientStatuses[id];
  if (null != presencesForGuilds[id]) {
    const _Object3 = Object;
    const values = Object.values(presencesForGuilds[id]);
    const reduced = values.reduce((processedAtTimestamp, processedAtTimestamp2) => {
      let tmp;
      processedAtTimestamp = processedAtTimestamp2.processedAtTimestamp;
      processedAtTimestamp2 = processedAtTimestamp.processedAtTimestamp;
      if (processedAtTimestamp > processedAtTimestamp2) {
        tmp = processedAtTimestamp2;
      } else {
        tmp = processedAtTimestamp;
        if (processedAtTimestamp === processedAtTimestamp2) {
          tmp = processedAtTimestamp;
        }
      }
      return tmp;
    }, values[0]);
    if (reduced.status === constants.OFFLINE) {
      if (null != reduced.hiddenActivities) {
        let num = 0;
      }
      const obj = _modDef12;
      if (
        obj.every(presencesForGuilds[id], (status) => {
          let tmp = status.status === constants.OFFLINE;
          if (tmp) {
            tmp = null == status.hiddenActivities || 0 === status.hiddenActivities.length;
            const tmp3 = null == status.hiddenActivities || 0 === status.hiddenActivities.length;
          }
          return tmp;
        })
      ) {
        delete presencesForGuilds[id];
      } else if (
        values.some(
          (hiddenActivities) =>
            null != hiddenActivities.hiddenActivities && hiddenActivities.hiddenActivities.length > 0,
        )
      ) {
        const _Object = Object;
        const values3 = Object.values(values);
        const flatMapResult = values3.flatMap((hiddenActivities) => {
          hiddenActivities = hiddenActivities.hiddenActivities;
          if (hiddenActivities == null) {
            hiddenActivities = [];
          }
          return hiddenActivities;
        });
        let num2 = 0;
        let tmp7 = flatMapResult;
        if (0 !== flatMapResult.length) {
          const items = [];
          HermesBuiltin.arraySpread(items, flatMapResult, 0);
          const reversed = items.reverse();
          const _Map = Map;
          const self = this;
          const self2 = this;
          const items1 = [];
          map = new Map(reversed.map(f89725));
          HermesBuiltin.arraySpread(items1, map.values(), 0);
          tmp7 = items1;
        }
        hiddenActivities[id] = tmp7;
      }
    }
    ({ status: closure_11[id], activities } = reduced);
    closure_12[id] = activities;
    filteredActivities[id] = filterPlayingActivities(activities);
    const _Object2 = Object;
    const values4 = Object.values(values);
    const flatMapResult1 = values4.flatMap((hiddenActivities) => {
      hiddenActivities = hiddenActivities.hiddenActivities;
      if (hiddenActivities == null) {
        hiddenActivities = [];
      }
      return hiddenActivities;
    });
    let tmp19 = flatMapResult1;
    if (0 !== flatMapResult1.length) {
      const items2 = [];
      HermesBuiltin.arraySpread(items2, flatMapResult1, 0);
      const reversed1 = items2.reverse();
      const _Map2 = Map;
      const self3 = this;
      const self4 = this;
      const items3 = [];
      map1 = new Map(reversed1.map(f89725));
      HermesBuiltin.arraySpread(items3, map1.values(), 0);
      tmp19 = items3;
    }
    hiddenActivities[id] = tmp19;
    if (null != reduced.clientStatus) {
      clientStatuses[id] = reduced.clientStatus;
    }
  }
}
function flattenPresenceInConnectionOpen(arg0) {
  if (null != presencesForGuilds[arg0]) {
    const _Object = Object;
    const obj = _modDef12;
    const maxByResult = obj.maxBy(
      Object.values(presencesForGuilds[arg0]),
      (processedAtTimestamp) => processedAtTimestamp.processedAtTimestamp,
    );
    let tmp3 = maxByResult.status !== constants.OFFLINE;
    if (!tmp3) {
      tmp3 = null != maxByResult.hiddenActivities && maxByResult.hiddenActivities.length > 0;
      const tmp2 = null != maxByResult.hiddenActivities && maxByResult.hiddenActivities.length > 0;
    }
    if (tmp3) {
      ({ status: closure_11[arg0], activities } = maxByResult);
      closure_12[arg0] = activities;
      filteredActivities[arg0] = filterPlayingActivities(activities);
      hiddenActivities = maxByResult.hiddenActivities;
      if (hiddenActivities == null) {
        hiddenActivities = [];
      }
      closure_14[arg0] = hiddenActivities;
      if (null != maxByResult.clientStatus) {
        clientStatuses[arg0] = maxByResult.clientStatus;
      }
    }
  }
}
function updatePresence(arg0) {
  let clientStatus;
  let processedAtTimestamp;
  let status;
  let userId;
  ({ guildId, userId, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = arg0);
  if (userId === AuthenticationStore.getId()) {
    return false;
  } else {
    let tmp4 = status === constants.OFFLINE;
    if (tmp4) {
      tmp4 = null == hiddenActivities || 0 === hiddenActivities.length;
      const tmp3 = null == hiddenActivities || 0 === hiddenActivities.length;
    }
    let tmp6 = presencesForGuilds[userId];
    if (null == tmp6) {
      if (tmp4) {
        return false;
      } else {
        const obj = {};
        presencesForGuilds[userId] = obj;
        tmp6 = obj;
      }
    }
    if (tmp4) {
      const obj2 = { status, clientStatus, activities: hiddenActivities, hiddenActivities, processedAtTimestamp };
      tmp6[guildId] = obj2;
    } else {
      let sorted = activities;
      if (activities.length > 1) {
        const items = [];
        HermesBuiltin.arraySpread(items, activities, 0);
        sorted = items.sort(sortActivity);
      }
      if (hiddenActivities == null) {
        hiddenActivities = [];
      }
      let tmp14 = hiddenActivities;
      if (0 !== hiddenActivities.length) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, hiddenActivities, 0);
        const reversed = items1.reverse();
        const _Map = Map;
        const self = this;
        const self2 = this;
        const items2 = [];
        map = new Map(reversed.map(f89725));
        HermesBuiltin.arraySpread(items2, map.values(), 0);
        tmp14 = items2;
      }
      let activities2 = sorted;
      if (null != tmp6[guildId]) {
        activities2 = sorted;
        if (_modDef1342(tmp6[guildId].activities, sorted)) {
          activities2 = tmp22.activities;
        }
      }
      const obj3 = { status, clientStatus, activities: activities2, hiddenActivities: tmp14, processedAtTimestamp };
      tmp6[guildId] = obj3;
    }
    delete activityMetadata[userId];
    flattenPresence(userId);
    return true;
  }
}
function updatePresenceInConnectionOpen(arg0) {
  let clientStatus;
  let processedAtTimestamp;
  let status;
  let userId;
  ({ guildId, userId, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = arg0);
  if (userId !== AuthenticationStore.getId()) {
    let tmp4 = status === constants.OFFLINE;
    if (tmp4) {
      tmp4 = null == hiddenActivities || 0 === hiddenActivities.length;
      const tmp3 = null == hiddenActivities || 0 === hiddenActivities.length;
    }
    let tmp6 = presencesForGuilds[userId];
    if (null == tmp6) {
      if (!tmp4) {
        const obj = {};
        presencesForGuilds[userId] = obj;
        tmp6 = obj;
      }
    }
    if (tmp4) {
      const obj2 = { status, clientStatus, activities: hiddenActivities, hiddenActivities, processedAtTimestamp };
      tmp6[guildId] = obj2;
    } else {
      let sorted = activities;
      if (activities.length > 1) {
        let items = [];
        HermesBuiltin.arraySpread(items, activities, 0);
        sorted = items.sort(sortActivity);
      }
      if (hiddenActivities == null) {
        hiddenActivities = [];
      }
      let tmp14 = hiddenActivities;
      if (0 !== hiddenActivities.length) {
        const items1 = [];
        HermesBuiltin.arraySpread(items1, hiddenActivities, 0);
        const reversed = items1.reverse();
        const _Map = Map;
        const self = this;
        const self2 = this;
        const items2 = [];
        map = new Map(reversed.map(f89725));
        HermesBuiltin.arraySpread(items2, map.values(), 0);
        tmp14 = items2;
      }
      const obj3 = { status, clientStatus, activities: sorted, hiddenActivities: tmp14, processedAtTimestamp };
      tmp6[guildId] = obj3;
    }
  }
}
function clearPresence(id, id2) {
  const tmp = id;
  if (id === AuthenticationStore.getId()) {
    return false;
  } else {
    if (null != presencesForGuilds[id]) {
      if (null != presencesForGuilds[id][id]) {
        delete presencesForGuilds[id][id];
        const _Object = Object;
        if (0 === Object.keys(presencesForGuilds[id]).length) {
          delete presencesForGuilds[tmp];
        }
        flattenPresence(id);
      }
    }
    return false;
  }
}
function clearPresences(id) {
  const obj = SnowflakeUtilsDefault;
  const keys = obj.keys(presencesForGuilds);
  const tmp2 = keys[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = clearPresence(id, tmp3);
    continue;
  }
}
({
  StatusTypes: closure_4,
  ActivityTypes: hasOwnProperty,
  ClientTypes: metroRequire,
  ME: metroImportDefault,
  UserFlags: metroImportAll,
} = Constants);
let closure_9 = Object.freeze([]);
const presencesForGuilds = {};
const statuses = {};
let activities = {};
let map1 = {};
let hiddenActivities = {};
const clientStatuses = {};
const activityMetadata = {};
const Store = get_initializedDefault.Store;
class PresenceStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, UserStore);
  }
  setCurrentUserOnConnectionOpen(IDLE, valueResult) {
    statuses[AuthenticationStore.getId()] = IDLE;
    const id = AuthenticationStore.getId();
    const items = [...valueResult];
    const sorted = items.sort(sortActivity);
    activities[id] = sorted;
    filteredActivities[id] = filterPlayingActivities(sorted);
  }
  getStatus(arg0) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = null;
    }
    let UNKNOWN = arg2;
    if (arg2 === undefined) {
      UNKNOWN = constants.OFFLINE;
    }
    const user = UserStore.getUser(arg0);
    const hasFlagResult = null != user && user.hasFlag(metroImportAll.BOT_HTTP_INTERACTIONS);
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
  }
  getActivities(arg0) {
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
        let tmp6;
        if (null != tmp4.activities) {
          tmp6 = filterPlayingActivities(tmp4.activities);
        }
        return tmp6;
      }
      tmp6 = closure_9;
    }
  }
  getUnfilteredActivities(arg0) {
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
  }
  getHiddenActivities(arg0) {
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
  }
  getPrimaryActivity(arg0) {
    let tmp = arg1;
    if (arg1 === undefined) {
      tmp = null;
    }
    activities = this.getActivities(arg0, tmp);
    return activities.filter((type) => type.type !== constants.HANG_STATUS)[0];
  }
  getAllApplicationActivities(arg0) {
    const items = [];
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(filteredActivities);
    for (const item10015 of keys) {
      let tmp4 = filteredActivities[item10015];
      for (const item10023 of tmp4) {
        if (item10023.application_id === arg0) {
          let obj2 = { userId: tmp2, activity: tmp7 };
          let arr = items.push(obj2);
        }
        continue;
      }
      continue;
    }
    return items;
  }
  getApplicationActivity(arg0, arg1) {
    let closure_0 = arg1;
    let tmp = arg2;
    if (arg2 === undefined) {
      tmp = null;
    }
    return this.findActivity(arg0, (application_id) => application_id.application_id === closure_0, tmp, true);
  }
  findActivity(arg0, cResult) {
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
    return combined.find(cResult);
  }
  getActivityMetadata(arg0) {
    return activityMetadata[arg0];
  }
  getUserIds() {
    const obj = SnowflakeUtilsDefault;
    return obj.keys(activities);
  }
  isMobileOnline(id) {
    return (
      null != tmp &&
      tmp[metroRequire.MOBILE] === constants.ONLINE &&
      tmp[metroRequire.DESKTOP] !== constants.ONLINE &&
      tmp[metroRequire.VR] !== constants.ONLINE
    );
  }
  isVROnline(id) {
    return null != tmp && tmp[metroRequire.VR] === constants.ONLINE;
  }
  getClientStatus(arg0) {
    return clientStatuses[arg0];
  }
  getState() {
    return {
      presencesForGuilds,
      statuses,
      activities,
      filteredActivities,
      hiddenActivities,
      activityMetadata,
      clientStatuses,
    };
  }
}
const prototype = PresenceStore.prototype;
PresenceStore.displayName = "PresenceStore";
let obj = {
  CONNECTION_OPEN: function handleConnectionOpen() {
    return true;
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(arg0) {
    let guilds;
    let obj;
    let obj2;
    let obj3;
    let obj4;
    let presences;
    ({ guilds, presences } = arg0);
    const id = AuthenticationStore.getId();
    let closure_10 = {};
    let closure_16 = {};
    obj = { [id]: obj[id] };
    let closure_15 = { [id]: {} };
    obj2 = { [id]: obj2[id] };
    obj3 = { [id]: obj3[id] };
    obj4 = { [id]: obj4[id] };
    set = new Set();
    let item = guilds.forEach((presences) => {
      presences = presences.presences;
      const item = presences.forEach((status) => {
        const user = status.user;
        obj = {
          guildId: presences.id,
          userId: user.id,
          status: status.status,
          clientStatus: status.clientStatus,
          activities: status.activities,
          hiddenActivities: status.hiddenActivities,
          processedAtTimestamp: status.processedAtTimestamp,
        };
        updatePresenceInConnectionOpen(obj);
        set.add(user.id);
      });
    });
    const item1 = presences.forEach((user) => {
      user = user.user;
      if (null != user) {
        obj = {
          guildId: metroImportDefault,
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
    let closure_10;
    let closure_11;
    let closure_14;
    let closure_16;
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
      const obj = {
        guildId: guild.id,
        userId: user.user.id,
        status: user.status,
        clientStatus: user.clientStatus,
        activities: user.activities,
        hiddenActivities: user.hiddenActivities,
        processedAtTimestamp: user.processedAtTimestamp,
      };
      updatePresence(obj);
    });
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    clearPresences(guild.guild.id);
  },
  GUILD_MEMBER_REMOVE: function handleGuildMemberRemove(guildId) {
    guildId = guildId.guildId;
    const id = guildId.user.id;
    let flag = false;
    if (id !== AuthenticationStore.getId()) {
      flag = false;
      if (null != presencesForGuilds[id]) {
        flag = false;
        if (null != presencesForGuilds[id][guildId]) {
          delete presencesForGuilds[id][guildId];
          const _Object = Object;
          if (0 === Object.keys(presencesForGuilds[id]).length) {
            delete presencesForGuilds[id];
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
      let clientStatus;
      let processedAtTimestamp;
      let status;
      let user;
      guildId = guildId.guildId;
      ({ user, status, clientStatus, activities, hiddenActivities, processedAtTimestamp } = guildId);
      if (guildId == null) {
        guildId = closure_1_7;
      }
      const obj = {
        guildId,
        userId: user.id,
        status,
        clientStatus,
        activities,
        hiddenActivities,
        processedAtTimestamp,
      };
      return updatePresence(obj);
    });
    return mapped.some((item) => item);
  },
  PRESENCES_REPLACE: function handlePresenceReplace(presences) {
    presences = presences.presences;
    const tmp = clearPresences(metroImportDefault);
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
    activityMetadata[userId.userId] = userId.metadata;
    return false;
  },
  THREAD_MEMBER_LIST_UPDATE: function handleThreadMemberListUpdate(arg0) {
    let members;
    ({ guildId: importDefault, members } = arg0);
    const item = members.forEach((presence) => {
      if (null != presence.presence) {
        const obj = {
          guildId: importDefault,
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
    let addedMembers;
    ({ guildId: importDefault, addedMembers } = arg0);
    if (addedMembers != null) {
      const item = addedMembers.forEach((presence) => {
        if (null != presence.presence) {
          const obj = {
            guildId: importDefault,
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
    filteredActivities[id] = filterPlayingActivities(sorted);
    const items1 = [...status.hiddenActivities];
    hiddenActivities[id] = items1.sort(sortActivity);
    delete activityMetadata[tmp];
  },
};
const presenceStore = new PresenceStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("stores/PresenceStore.tsx");

export default presenceStore;
export { sortActivity };
