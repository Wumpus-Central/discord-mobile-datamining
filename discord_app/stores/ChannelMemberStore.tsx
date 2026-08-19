// === Module 7249: getMemberListId ===

// Module 7249 (getMemberListId)
import applyDefault from "apply" /* 12 */;
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import MurmurHashV3Default from "MurmurHashV3" /* 1217 */;
import applyOverwritesAll from "applyOverwrites" /* 4026 */;
import getHash from "getHash" /* 4288 */;
import reset from "reset" /* 4652 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import handleInviteData from "handleInviteData" /* 4295 */;
import trackCommunicationDisabled from "trackCommunicationDisabled" /* 1990 */;
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust" /* 1983 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import sortActivity from "sortActivity" /* 4559 */;
import filterPlayingActivities from "filterPlayingActivities" /* 7250 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

let require = fn;
function getMemberListId(arg0) {
  channel = channel.getChannel(arg0);
  if (null == channel) {
    let memberListId = everyone;
  } else if (null == channel.memberListId) {
    if (obj.canEveryone(constants2.VIEW_CHANNEL, channel)) {
    } else {
      const obj2 = MurmurHashV3Default;
      const reduced = applyDefault(channel.permissionOverwrites).reduce((acc, item, index) => {
        const id = item.id;
        ({ allow, deny } = item);
        if (obj.has(allow, constants.VIEW_CHANNEL)) {
          const _HermesInternal2 = HermesInternal;
          acc.push("allow:" + id);
        } else {
          if (tmpResult.has(deny, constants.VIEW_CHANNEL)) {
            const _HermesInternal = HermesInternal;
            acc.push("deny:" + id);
          }
          tmpResult = callback(table[16]);
        }
        return acc;
      }, []);
      const sorted = reduced.sort();
      const arr = applyDefault(channel.permissionOverwrites);
      const str = obj2.v3(sorted.join(",")).toString();
      const str2 = obj2.v3(sorted.join(","));
    }
    obj = applyOverwritesAll;
  } else {
    memberListId = channel.memberListId;
  }
  return memberListId;
}
function handleConnectionOpen() {
  obj.reset();
}
function handleApplicationStreamUpdate() {
  const allApplicationStreams = authStore.getAllApplicationStreams();
  const combined = allApplicationStreams.concat(allApplicationStreams);
  let item = combined.forEach((item, index) => {
    closure_0 = item;
    item = closure_21.forEach(null, (rebuildMember) => rebuildMember.rebuildMember(item.ownerId));
  });
}
function handleLocalPresenceUpdate() {
  const id = store.getId();
  const item = obj.forEach(null, (rebuildMember) => rebuildMember.rebuildMember(closure_0));
}
({ StatusTypes: closure_15, Permissions: closure_16 } = ME);
const everyone = "everyone";
let obj = { GROUP: "GROUP", MEMBER: "MEMBER", CONTENT_INVENTORY: "CONTENT_INVENTORY", CONTENT_INVENTORY_GROUP: "CONTENT_INVENTORY_GROUP", HIDDEN_CONTENT_INVENTORY: "HIDDEN_CONTENT_INVENTORY", CONTENT_INVENTORY_LEADERBOARD: "CONTENT_INVENTORY_LEADERBOARD" };
class MemberList {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj[0] = [];
    obj[1] = [];
    obj[2] = {};
    obj.guildId = global;
    obj.listId = fn;
    updateOwnerIdResult = obj.updateOwnerId();
    return obj;
  }
}
const prototype = MemberList.prototype;
prototype["updateOwnerId"] = function updateOwnerId() {
  const self = this;
  const guild = store4.getGuild(this.guildId);
  if (null == guild) {
    return false;
  } else {
    const guildVisualOwnerId = applyOverwritesAll.getGuildVisualOwnerId(guild);
    let flag = self.ownerId !== guildVisualOwnerId;
    if (flag) {
      self.ownerId = guildVisualOwnerId;
      flag = true;
    }
    return flag;
  }
};
prototype["setGroups"] = function setGroups(groups) {
  const self = this;
  c0 = 0;
  this.groups = groups.map((item, index) => {
    let num = item.count;
    if (num == null) {
      num = 0;
    }
    const bound = Math.max(0, num);
    const id = item.id;
    if (closure_1_15.ONLINE !== id) {
      if (closure_1_15.OFFLINE !== id) {
        if (closure_1_15.UNKNOWN !== id) {
          const guild = closure_1_11.getGuild(tmp3);
          let role = null;
          if (null != guild) {
            role = closure_1_10.getRole(guild.id, id);
          }
          obj = { type: null, key: null, id: null, title: null, count: null, index: null };
          obj[0] = closure_1_18.GROUP;
          obj[1] = id;
          obj[2] = id;
          let str = "";
          if (null != role) {
            str = role.name;
          }
          obj[3] = str;
          obj[4] = bound;
          obj[5] = tmp;
        }
        return obj;
      }
    }
    obj = { type: closure_1_18.GROUP, key: id, id };
    Object.defineProperty(obj, "title", {
      get: () => {
        if (closure_1_15.ONLINE === id) {
          const intl3 = id(closure_1_3[12]).intl;
          return intl3.string(id(closure_1_3[12]).t.WbGtnH);
        } else if (tmp2.OFFLINE === tmp) {
          const intl2 = id(closure_1_3[12]).intl;
          return intl2.string(id(closure_1_3[12]).t.Vv0abJ);
        } else {
          const intl = id(closure_1_3[12]).intl;
          return intl.string(id(closure_1_3[12]).t["UQMV/E"]);
        }
      },
      set: undefined
    });
    obj.count = bound;
    obj.index = id;
  });
  this.rows.length = c0;
};
prototype["sync"] = function sync(arg0, arr) {
  const self = this;
  [require] = arg0;
  const item = arr.forEach((item, index) => self.update(closure_0 + index, item));
};
prototype["invalidate"] = function invalidate(arg0) {
  let sum;
  [tmp4, tmp5] = arg0;
  const self = this;
  if (sum <= tmp5) {
    while (null != self.rows[sum]) {
      let rows = self.rows;
      delete tmp3[tmp];
      if (tmp6.type === obj.MEMBER) {
        let members = self.members;
        let id = tmp6.user.id;
        delete tmp3[tmp2];
      }
      sum = sum + 1;
      if (sum > tmp5) {
        break;
      }
    }
  }
  self.version = self.version + 1;
};
prototype["insert"] = function insert(arg0, arg1) {
  const self = this;
  ({ group, member } = arg1);
  if (null != group) {
    ({ id, count } = group);
    if (constants.ONLINE !== id) {
      if (constants.OFFLINE !== id) {
        if (constants.UNKNOWN !== id) {
          const guild = store4.getGuild(tmp16);
          let role = null;
          if (null != guild) {
            role = store3.getRole(guild.id, id);
          }
          obj = { type: null, key: null, id: null, title: null, count: null, index: "l" };
          obj[0] = obj.GROUP;
          obj[1] = id;
          obj[2] = id;
          let str = "";
          if (null != role) {
            str = role.name;
          }
          obj[3] = str;
          obj[4] = count;
        }
        tmp15(arg0, 0, obj);
      }
    }
    obj = { type: null, key: null, id: null };
    obj[0] = obj.GROUP;
    obj[1] = id;
    obj[2] = id;
    id = "title";
    Object.defineProperty(obj, "title", {
      get: () => {
          if (closure_1_15.ONLINE === id) {
            const intl3 = id(closure_1_3[12]).intl;
            return intl3.string(id(closure_1_3[12]).t.WbGtnH);
          } else if (tmp2.OFFLINE === tmp) {
            const intl2 = id(closure_1_3[12]).intl;
            return intl2.string(id(closure_1_3[12]).t.Vv0abJ);
          } else {
            const intl = id(closure_1_3[12]).intl;
            return intl.string(id(closure_1_3[12]).t["UQMV/E"]);
          }
        },
      set: undefined
    });
    obj.count = count;
    obj.index = undefined;
  } else {
    if (null != member) {
      const guildId = self.guildId;
      const id2 = member.user.id;
      const tmp26 = id2 === store.getId();
      const isMobileOnlineResult = store.isMobileOnline(id2);
      if (tmp26) {
        let status = store5.getStatus();
      } else {
        status = store.getStatus(id2, guildId);
      }
      if (tmp26) {
        let activities = store5.getActivities();
      } else {
        activities = store.getActivities(id2, guildId);
      }
      const streamForUser = authStore.getStreamForUser(id2, guildId);
      const user = authStore2.getUser(id2);
      let tmp9 = null;
      if (null != user) {
        obj = { type: null };
        obj[0] = obj.MEMBER;
        const merged = Object.assign(store2.getMember(guildId, id2));
        obj.user = user;
        obj.status = status;
        obj.activities = activities;
        obj.applicationStream = streamForUser;
        obj.isOwner = self.ownerId === id2;
        obj.isMobileOnline = isMobileOnlineResult;
        obj.isVROnline = isVROnlineResult;
        tmp9 = obj;
      }
      if (null != tmp9) {
        const rows = self.rows;
        rows.splice(arg0, 0, tmp9);
        self.members[member.user.id] = tmp9;
      }
      isVROnlineResult = store.isVROnline(id2);
    }
    self.version = self.version + 1;
  }
};
prototype["update"] = function update(arg0, arg1) {
  const self = this;
  ({ group, member } = arg1);
  let tmp4 = null != tmp3;
  if (tmp4) {
    tmp4 = tmp3.type === obj.MEMBER;
  }
  if (tmp4) {
    const members = self.members;
    const id = tmp3.user.id;
    delete tmp2[tmp];
  }
  if (null != group) {
    ({ id: id2, count } = group);
    if (constants.ONLINE !== id2) {
      if (constants.OFFLINE !== id2) {
        if (constants.UNKNOWN !== id2) {
          const guild = store4.getGuild(tmp20);
          let role = null;
          if (null != guild) {
            role = store3.getRole(guild.id, id2);
          }
          obj = { type: null, key: null, id: null, title: null, count: null, index: "l" };
          obj[0] = obj.GROUP;
          obj[1] = id2;
          obj[2] = id2;
          let str = "";
          if (null != role) {
            str = role.name;
          }
          obj[3] = str;
          obj[4] = count;
        }
        tmp19[arg0] = obj;
      }
    }
    obj = { type: null, key: null, id: null };
    obj[0] = obj.GROUP;
    obj[1] = id2;
    obj[2] = id2;
    id2 = "title";
    Object.defineProperty(obj, "title", {
      get: () => {
          if (closure_1_15.ONLINE === id) {
            const intl3 = id(closure_1_3[12]).intl;
            return intl3.string(id(closure_1_3[12]).t.WbGtnH);
          } else if (tmp2.OFFLINE === tmp) {
            const intl2 = id(closure_1_3[12]).intl;
            return intl2.string(id(closure_1_3[12]).t.Vv0abJ);
          } else {
            const intl = id(closure_1_3[12]).intl;
            return intl.string(id(closure_1_3[12]).t["UQMV/E"]);
          }
        },
      set: undefined
    });
    obj.count = count;
    obj.index = undefined;
  } else {
    if (null != member) {
      const guildId = self.guildId;
      const id3 = member.user.id;
      const tmp29 = id3 === store.getId();
      const isMobileOnlineResult = store.isMobileOnline(id3);
      if (tmp29) {
        let status = store5.getStatus();
      } else {
        status = store.getStatus(id3, guildId);
      }
      if (tmp29) {
        let activities = store5.getActivities();
      } else {
        activities = store.getActivities(id3, guildId);
      }
      const streamForUser = authStore.getStreamForUser(id3, guildId);
      const user = authStore2.getUser(id3);
      let tmp14 = null;
      if (null != user) {
        obj = { type: null };
        obj[0] = obj.MEMBER;
        const merged = Object.assign(store2.getMember(guildId, id3));
        obj.user = user;
        obj.status = status;
        obj.activities = activities;
        obj.applicationStream = streamForUser;
        obj.isOwner = self.ownerId === id3;
        obj.isMobileOnline = isMobileOnlineResult;
        obj.isVROnline = isVROnlineResult;
        tmp14 = obj;
      }
      if (null != tmp14) {
        self.rows[arg0] = tmp14;
        self.members[member.user.id] = tmp14;
      }
      isVROnlineResult = store.isVROnline(id3);
    }
    self.version = self.version + 1;
  }
};
prototype["delete"] = function delete(arg0) {
  const self = this;
  if (null != this.rows[arg0]) {
    if (tmp3.type === obj.MEMBER) {
      const members = self.members;
      const id = tmp3.user.id;
      delete tmp2[tmp];
    }
    const rows = self.rows;
    rows.splice(arg0, 1);
    self.version = self.version + 1;
  }
};
prototype["rebuildMember"] = function rebuildMember(closure_0) {
  const self = this;
  if (null != this.members[closure_0]) {
    const guildId = self.guildId;
    const tmp18 = closure_0 === store.getId();
    const isMobileOnlineResult = store.isMobileOnline(closure_0);
    if (tmp18) {
      let status = store5.getStatus();
    } else {
      status = store.getStatus(closure_0, guildId);
    }
    if (tmp18) {
      let activities = store5.getActivities();
    } else {
      activities = store.getActivities(closure_0, guildId);
    }
    const streamForUser = authStore.getStreamForUser(closure_0, guildId);
    const user = authStore2.getUser(closure_0);
    let tmp10 = null;
    if (null != user) {
      obj = { type: null };
      obj[0] = obj.MEMBER;
      const merged = Object.assign(store2.getMember(guildId, closure_0));
      obj.user = user;
      obj.status = status;
      obj.activities = activities;
      obj.applicationStream = streamForUser;
      obj.isOwner = self.ownerId === closure_0;
      obj.isMobileOnline = isMobileOnlineResult;
      obj.isVROnline = isVROnlineResult;
      tmp10 = obj;
    }
    const merged1 = Object.assign(tmp, tmp10);
    self.version = self.version + 1;
    isVROnlineResult = store.isVROnline(closure_0);
  }
};
prototype["rebuildMembers"] = function rebuildMembers() {
  let length;
  const self = this;
  const keys = Object.keys(this.members);
  let num = 0;
  if (0 < keys.length) {
    do {
      let rebuildMemberResult = self.rebuildMember(keys[num]);
      num = num + 1;
      length = keys.length;
    } while (num < length);
  }
};
prototype["rebuildGroup"] = function rebuildGroup(id) {
  const self = this;
  let str = id;
  const groups = this.groups;
  const findIndexResult = groups.findIndex((item, index) => item.id === str);
  if (null != this.groups[findIndexResult]) {
    ({ count, index } = tmp2);
    if (constants.ONLINE !== str) {
      if (constants.OFFLINE !== str) {
        if (constants.UNKNOWN !== str) {
          const guild = store4.getGuild(tmp11);
          let role = null;
          if (null != guild) {
            role = store3.getRole(guild.id, str);
          }
          obj = { type: null, key: null, id: null, title: null, count: null, index: null };
          obj[0] = obj.GROUP;
          obj[1] = str;
          obj[2] = str;
          let str2 = "";
          if (null != role) {
            str2 = role.name;
          }
          obj[3] = str2;
          obj[4] = count;
          obj[5] = index;
        }
        tmp10(findIndexResult, 1, obj);
        self.version = self.version + 1;
      }
    }
    obj = { type: null, key: null, id: null };
    obj[0] = obj.GROUP;
    obj[1] = str;
    obj[2] = str;
    str = "title";
    Object.defineProperty(obj, "title", {
      get: () => {
          if (closure_1_15.ONLINE === id) {
            const intl3 = id(closure_1_3[12]).intl;
            return intl3.string(id(closure_1_3[12]).t.WbGtnH);
          } else if (tmp2.OFFLINE === tmp) {
            const intl2 = id(closure_1_3[12]).intl;
            return intl2.string(id(closure_1_3[12]).t.Vv0abJ);
          } else {
            const intl = id(closure_1_3[12]).intl;
            return intl.string(id(closure_1_3[12]).t["UQMV/E"]);
          }
        },
      set: undefined
    });
    obj.count = count;
    obj.index = index;
  }
};
class MemberLists {
  constructor() {
    obj = Object.create(new.target.prototype);
    obj[0] = {};
    return obj;
  }
}
const prototype2 = MemberLists.prototype;
prototype2["get"] = function get(guildId, listId) {
  let tmp = this._guildLists[guildId];
  if (null == tmp) {
    obj = {};
    this._guildLists[guildId] = obj;
    tmp = obj;
  }
  let tmp2 = tmp[listId];
  if (null == tmp2) {
    if (typeof MemberList !== "function") {
      HermesBuiltin.throwTypeError();
    }
    obj = Object.create(MemberList.prototype);
    obj[0] = [];
    obj[1] = [];
    obj[2] = {};
    obj.guildId = guildId;
    obj.listId = listId;
    obj.updateOwnerId();
    obj = { id: null, count: 0 };
    obj[0] = constants.UNKNOWN;
    const items = [obj];
    obj.setGroups(items);
    tmp[listId] = obj;
    tmp2 = obj;
  }
  return tmp2;
};
prototype2["forEach"] = function forEach(arg0, arg1) {
  const self = this;
  closure_0 = arg1;
  if (null == arg0) {
    let item = applyDefault.forEach(self._guildLists, (arg0) => {
      const item = applyDefault.forEach(arg0, closure_0);
    });
  } else if (null != self._guildLists[arg0]) {
    const item1 = applyDefault.forEach(tmp, arg1);
  }
};
prototype2["delete"] = function delete(arg0) {
  delete tmp2[tmp];
};
prototype2["reset"] = function reset() {
  this._guildLists = {};
};
obj = Object.create(MemberLists.prototype);
obj[0] = {};
let closure_22 = [];
const Store = initializeDefault.Store;
class ChannelMemberStore extends Store {
}
const prototype3 = ChannelMemberStore.prototype;
prototype3["initialize"] = function initialize() {
  this.waitFor(closure_14, closure_11, closure_10, closure_7, closure_9, closure_12, closure_13, closure_6, closure_8, closure_5, closure_4);
  const items = [closure_13];
  this.syncWith(items, handleLocalPresenceUpdate);
  const items1 = [closure_5];
  this.syncWith(items1, handleApplicationStreamUpdate);
};
prototype3["getProps"] = function getProps(arg0, arg1) {
  const value = obj.get(arg0, getMemberListId(arg1));
  obj = { listId: "" + value.guildId + ":" + value.listId, groups: value.groups, rows: value.rows, version: value.version };
  return obj;
};
prototype3["getRows"] = function getRows(arg0, arg1) {
  return obj.get(arg0, getMemberListId(arg1)).rows;
};
ChannelMemberStore.displayName = "ChannelMemberStore";
obj = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMemberListUpdate(guildId) {
    const value = obj.get(guildId.guildId, guildId.id);
    require = value;
    const ops = guildId.ops;
    const item = ops.forEach((item, index) => {
      const op = item.op;
      if ("SYNC" === op) {
        value.sync(item.range, item.items);
      } else if ("INVALIDATE" === op) {
        value.invalidate(item.range);
      } else if ("INSERT" === op) {
        value.insert(item.index, item.item);
      } else if ("UPDATE" === op) {
        value.update(item.index, item.item);
      } else if ("DELETE" === op) {
        value.delete(item.index);
      }
    });
    value.setGroups(guildId.groups);
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    const item = obj.forEach(guild.guild.id, (updateOwnerId) => {
      if (updateOwnerId.updateOwnerId()) {
        updateOwnerId.rebuildMembers();
      }
    });
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    obj.delete(guild.guild.id);
  },
  GUILD_ROLE_UPDATE: function handleGuildRoleUpdate(role) {
    role = role.role;
    const item = obj.forEach(role.guildId, (rebuildGroup) => {
      rebuildGroup.rebuildGroup(role.id);
      rebuildGroup.rebuildMembers();
    });
  },
  GUILD_MEMBER_UPDATE: function handleMemberUpdate(user) {
    user = user.user;
    const item = obj.forEach(user.guildId, (rebuildMember) => rebuildMember.rebuildMember(user.id));
  },
  CHANNEL_UPDATES: function handleChannelUpdates() {
    return true;
  }
};
const channelMemberStore = new ChannelMemberStore(dispatcherDefault, obj);
const result = require("obj132").fileFinishedImporting("stores/ChannelMemberStore.tsx");

export default channelMemberStore;
export const EVERYONE_ID = "everyone";
export const EVERYONE_CHANNEL_ID = 0;
export const MemberListRowTypes = obj;