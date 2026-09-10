// discord_app/stores/ChannelMemberStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import BigFlagUtilsAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import MurmurHashV3Default from "../../_runtime/01241_MurmurHashV3.js";
import PermissionUtilsAll from "../utils/PermissionUtils.tsx";
import ExperimentStore from "../modules/experiments/ExperimentStore.tsx";
import ApplicationStreamingStore from "ApplicationStreamingStore.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import ChannelStore from "ChannelStore.tsx";
import GuildMemberCountStore from "GuildMemberCountStore.tsx";
import GuildMemberStore from "GuildMemberStore.tsx";
import GuildRoleStore from "GuildRoleStore.tsx";
import GuildStore from "GuildStore.tsx";
import PresenceStore from "PresenceStore.tsx";
import SelfPresenceStore from "SelfPresenceStore.tsx";
import UserStore from "UserStore.tsx";

let require = fn;
function getMemberListId(arg0) {
  const channel = ChannelStore.getChannel(arg0);
  if (null == channel) {
    let memberListId = everyone;
  } else if (null == channel.memberListId) {
    if (obj.canEveryone(constants2.VIEW_CHANNEL, channel)) {
    } else {
      const obj2 = MurmurHashV3Default;
      const reduced = _modDef12(channel.permissionOverwrites).reduce((arr, id) => {
        id = id.id;
        ({ allow, deny } = id);
        if (obj.has(allow, constants.VIEW_CHANNEL)) {
          const _HermesInternal2 = HermesInternal;
          arr = arr.push("allow:" + id);
        } else {
          if (tmpResult.has(deny, constants.VIEW_CHANNEL)) {
            const _HermesInternal = HermesInternal;
            arr = arr.push("deny:" + id);
          }
          tmpResult = BigFlagUtilsAll;
        }
        return arr;
      }, []);
      const sorted = reduced.sort();
      let str = ",";
      let arr = _modDef12(channel.permissionOverwrites);
      str = obj2.v3(sorted.join(",")).toString();
      const str2 = obj2.v3(sorted.join(","));
    }
    obj = PermissionUtilsAll;
  } else {
    memberListId = channel.memberListId;
  }
  return memberListId;
}
function handleConnectionOpen() {
  merged.reset();
}
function handleApplicationStreamUpdate() {
  allApplicationStreams = ApplicationStreamingStore.getAllApplicationStreams();
  const combined = allApplicationStreams.concat(allApplicationStreams);
  let item = combined.forEach((item) => {
    item = merged.forEach(null, (rebuildMember) => rebuildMember.rebuildMember(item.ownerId));
  });
}
function handleLocalPresenceUpdate() {
  const id = AuthenticationStore.getId();
  const item = merged.forEach(null, (rebuildMember) => rebuildMember.rebuildMember(closure_0));
}
const Constants = fn(1074);
({ StatusTypes: closure_15, Permissions: closure_16 } = Constants);
const everyone = "everyone";
let MemberListRowTypes = { GROUP: "GROUP", MEMBER: "MEMBER", CONTENT_INVENTORY: "CONTENT_INVENTORY", CONTENT_INVENTORY_GROUP: "CONTENT_INVENTORY_GROUP", HIDDEN_CONTENT_INVENTORY: "HIDDEN_CONTENT_INVENTORY", CONTENT_INVENTORY_LEADERBOARD: "CONTENT_INVENTORY_LEADERBOARD" };
class MemberList {
  constructor(arg0, arg1) {
    merged = Object.assign({ rows: null, groups: null, members: null, version: 0 });
    merged[0] = [];
    merged[1] = [];
    merged[2] = {};
    merged.guildId = global;
    merged.listId = fn;
    updateOwnerIdResult = merged.updateOwnerId();
    return merged;
  }
}
const prototype = MemberList.prototype;
prototype["updateOwnerId"] = function updateOwnerId() {
  const self = this;
  const guild = GuildStore.getGuild(this.guildId);
  if (null == guild) {
    return false;
  } else {
    const guildVisualOwnerId = PermissionUtilsAll.getGuildVisualOwnerId(guild);
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
  _require = 0;
  this.groups = groups.map((count) => {
    let num = count.count;
    if (num == null) {
      num = 0;
    }
    const bound = Math.max(0, num);
    id = id + (bound + 1);
    id = count.id;
    if (constants.ONLINE !== id) {
      if (constants.OFFLINE !== id) {
        if (constants.UNKNOWN !== id) {
          const guild = GuildStore.getGuild(tmp3);
          let role = null;
          if (null != guild) {
            role = GuildRoleStore.getRole(guild.id, id);
          }
          let obj = { type: null, key: null, id: null, title: null, count: null, index: null };
          obj.type = obj.GROUP;
          obj.key = id;
          obj.id = id;
          let str = "";
          if (null != role) {
            str = role.name;
          }
          obj.title = str;
          obj.count = bound;
          obj.index = tmp;
        }
        return obj;
      }
    }
    obj = { type: obj.GROUP, key: id, id };
    Object.defineProperty(obj, "title", {
      get: () => {
        if (constants.ONLINE === id) {
          const intl3 = id(1114).intl;
          return intl3.string(id(1114).t.WbGtnH);
        } else if (tmp2.OFFLINE === tmp) {
          const intl2 = id(1114).intl;
          return intl2.string(id(1114).t.Vv0abJ);
        } else {
          const intl = id(1114).intl;
          return intl.string(id(1114).t["UQMV/E"]);
        }
      },
      set: undefined
    });
    obj.count = bound;
    obj.index = id;
  });
  this.rows.length = _require;
};
prototype["sync"] = function sync(arg0, arr) {
  const self = this;
  [require] = arg0;
  const item = arr.forEach((item, index) => self.update(nextResult + index, item));
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
          const guild = GuildStore.getGuild(tmp16);
          let role = null;
          if (null != guild) {
            role = GuildRoleStore.getRole(guild.id, id);
          }
          let obj = { type: null, key: null, id: null, title: null, count: null, index: "accessible" };
          obj.type = obj.GROUP;
          obj.key = id;
          obj.id = id;
          let str = "";
          if (null != role) {
            str = role.name;
          }
          obj.title = str;
          obj.count = count;
        }
        tmp15(arg0, 0, obj);
      }
    }
    obj = { type: null, key: null, id: null };
    obj.type = obj.GROUP;
    obj.key = id;
    obj.id = id;
    id = "title";
    Object.defineProperty(obj, "title", {
      get: () => {
          if (constants.ONLINE === id) {
            const intl3 = id(1114).intl;
            return intl3.string(id(1114).t.WbGtnH);
          } else if (tmp2.OFFLINE === tmp) {
            const intl2 = id(1114).intl;
            return intl2.string(id(1114).t.Vv0abJ);
          } else {
            const intl = id(1114).intl;
            return intl.string(id(1114).t["UQMV/E"]);
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
      const tmp26 = id2 === AuthenticationStore.getId();
      const isMobileOnlineResult = PresenceStore.isMobileOnline(id2);
      if (tmp26) {
        let status = SelfPresenceStore.getStatus();
      } else {
        status = PresenceStore.getStatus(id2, guildId);
      }
      if (tmp26) {
        let activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(id2, guildId);
      }
      const streamForUser = ApplicationStreamingStore.getStreamForUser(id2, guildId);
      const user = UserStore.getUser(id2);
      let tmp9 = null;
      if (null != user) {
        obj = { type: null };
        obj.type = obj.MEMBER;
        merged = Object.assign(GuildMemberStore.getMember(guildId, id2));
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
      isVROnlineResult = PresenceStore.isVROnline(id2);
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
          const guild = GuildStore.getGuild(tmp20);
          let role = null;
          if (null != guild) {
            role = GuildRoleStore.getRole(guild.id, id2);
          }
          obj = { type: null, key: null, id: null, title: null, count: null, index: "accessible" };
          obj.type = obj.GROUP;
          obj.key = id2;
          obj.id = id2;
          let str = "";
          if (null != role) {
            str = role.name;
          }
          obj.title = str;
          obj.count = count;
        }
        tmp19[arg0] = obj;
      }
    }
    obj = { type: null, key: null, id: null };
    obj.type = obj.GROUP;
    obj.key = id2;
    obj.id = id2;
    id2 = "title";
    Object.defineProperty(obj, "title", {
      get: () => {
          if (constants.ONLINE === id) {
            const intl3 = id(1114).intl;
            return intl3.string(id(1114).t.WbGtnH);
          } else if (tmp2.OFFLINE === tmp) {
            const intl2 = id(1114).intl;
            return intl2.string(id(1114).t.Vv0abJ);
          } else {
            const intl = id(1114).intl;
            return intl.string(id(1114).t["UQMV/E"]);
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
      const tmp29 = id3 === AuthenticationStore.getId();
      const isMobileOnlineResult = PresenceStore.isMobileOnline(id3);
      if (tmp29) {
        let status = SelfPresenceStore.getStatus();
      } else {
        status = PresenceStore.getStatus(id3, guildId);
      }
      if (tmp29) {
        let activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(id3, guildId);
      }
      const streamForUser = ApplicationStreamingStore.getStreamForUser(id3, guildId);
      const user = UserStore.getUser(id3);
      let tmp14 = null;
      if (null != user) {
        obj = { type: null };
        obj.type = obj.MEMBER;
        merged = Object.assign(GuildMemberStore.getMember(guildId, id3));
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
      isVROnlineResult = PresenceStore.isVROnline(id3);
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
prototype["rebuildMember"] = function rebuildMember(id) {
  const self = this;
  if (null != this.members[id]) {
    const guildId = self.guildId;
    const tmp18 = id === AuthenticationStore.getId();
    const isMobileOnlineResult = PresenceStore.isMobileOnline(id);
    if (tmp18) {
      let status = SelfPresenceStore.getStatus();
    } else {
      status = PresenceStore.getStatus(id, guildId);
    }
    if (tmp18) {
      let activities = SelfPresenceStore.getActivities();
    } else {
      activities = PresenceStore.getActivities(id, guildId);
    }
    const streamForUser = ApplicationStreamingStore.getStreamForUser(id, guildId);
    const user = UserStore.getUser(id);
    let tmp10 = null;
    if (null != user) {
      const obj = { type: null };
      obj.type = obj.MEMBER;
      merged = Object.assign(GuildMemberStore.getMember(guildId, id));
      obj.user = user;
      obj.status = status;
      obj.activities = activities;
      obj.applicationStream = streamForUser;
      obj.isOwner = self.ownerId === id;
      obj.isMobileOnline = isMobileOnlineResult;
      obj.isVROnline = isVROnlineResult;
      tmp10 = obj;
    }
    const merged1 = Object.assign(tmp, tmp10);
    self.version = self.version + 1;
    isVROnlineResult = PresenceStore.isVROnline(id);
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
  const findIndexResult = groups.findIndex((id) => id.id === str);
  if (null != this.groups[findIndexResult]) {
    ({ count, index } = tmp2);
    if (constants.ONLINE !== str) {
      if (constants.OFFLINE !== str) {
        if (constants.UNKNOWN !== str) {
          const guild = GuildStore.getGuild(tmp11);
          let role = null;
          if (null != guild) {
            role = GuildRoleStore.getRole(guild.id, str);
          }
          let obj = { type: null, key: null, id: null, title: null, count: null, index: null };
          obj.type = obj.GROUP;
          obj.key = str;
          obj.id = str;
          let str2 = "";
          if (null != role) {
            str2 = role.name;
          }
          obj.title = str2;
          obj.count = count;
          obj.index = index;
        }
        tmp10(findIndexResult, 1, obj);
        self.version = self.version + 1;
      }
    }
    obj = { type: null, key: null, id: null };
    obj.type = obj.GROUP;
    obj.key = str;
    obj.id = str;
    str = "title";
    Object.defineProperty(obj, "title", {
      get: () => {
          if (constants.ONLINE === id) {
            const intl3 = id(1114).intl;
            return intl3.string(id(1114).t.WbGtnH);
          } else if (tmp2.OFFLINE === tmp) {
            const intl2 = id(1114).intl;
            return intl2.string(id(1114).t.Vv0abJ);
          } else {
            const intl = id(1114).intl;
            return intl.string(id(1114).t["UQMV/E"]);
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
    merged = Object.assign({ _guildLists: null });
    merged[0] = {};
    return merged;
  }
}
const prototype2 = MemberLists.prototype;
prototype2["get"] = function get(guildId, listId) {
  let tmp = this._guildLists[guildId];
  if (null == tmp) {
    let obj = {};
    this._guildLists[guildId] = obj;
    tmp = obj;
  }
  let tmp2 = tmp[listId];
  if (null == tmp2) {
    if (typeof MemberList === "function") {
      merged = Object.assign({ rows: null, groups: null, members: null, version: 0 });
      merged[0] = [];
      merged[1] = [];
      merged[2] = {};
      merged.guildId = guildId;
      merged.listId = listId;
      merged.updateOwnerId();
      obj = { id: constants.UNKNOWN, count: 0 };
      const items = [obj];
      merged.setGroups(items);
      tmp[listId] = merged;
      tmp2 = merged;
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  }
  return tmp2;
};
prototype2["forEach"] = function forEach(arg0, arg1) {
  const self = this;
  closure_0 = arg1;
  if (null == arg0) {
    let item = _modDef12.forEach(self._guildLists, (arg0) => {
      const item = _modDef12.forEach(arg0, closure_0);
    });
  } else if (null != self._guildLists[arg0]) {
    const item1 = _modDef12.forEach(tmp, arg1);
  }
};
prototype2["delete"] = function delete(arg0) {
  delete tmp2[tmp];
};
prototype2["reset"] = function reset() {
  this._guildLists = {};
};
let merged = Object.assign({ _guildLists: null });
merged[0] = {};
let allApplicationStreams = [];
const Store = initializeDefault.Store;
class ChannelMemberStore extends Store {
}
const prototype3 = ChannelMemberStore.prototype;
prototype3["initialize"] = function initialize() {
  this.waitFor(UserStore, GuildStore, GuildRoleStore, ChannelStore, GuildMemberStore, PresenceStore, SelfPresenceStore, AuthenticationStore, GuildMemberCountStore, ApplicationStreamingStore, ExperimentStore);
  const items = [SelfPresenceStore];
  this.syncWith(items, handleLocalPresenceUpdate);
  const items1 = [ApplicationStreamingStore];
  this.syncWith(items1, handleApplicationStreamUpdate);
};
prototype3["getProps"] = function getProps(arg0, arg1) {
  value = merged.get(arg0, getMemberListId(arg1));
  return { listId: "" + value.guildId + ":" + value.listId, groups: value.groups, rows: value.rows, version: value.version };
};
prototype3["getRows"] = function getRows(arg0, arg1) {
  return merged.get(arg0, getMemberListId(arg1)).rows;
};
ChannelMemberStore.displayName = "ChannelMemberStore";
MemberListRowTypes = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMemberListUpdate(guildId) {
    value = merged.get(guildId.guildId, guildId.id);
    const require = value;
    const ops = guildId.ops;
    const item = ops.forEach((op) => {
      op = op.op;
      if ("SYNC" === op) {
        value.sync(op.range, op.items);
      } else if ("INVALIDATE" === op) {
        value.invalidate(op.range);
      } else if ("INSERT" === op) {
        value.insert(op.index, op.item);
      } else if ("UPDATE" === op) {
        value.update(op.index, op.item);
      } else if ("DELETE" === op) {
        value.delete(op.index);
      }
    });
    value.setGroups(guildId.groups);
  },
  GUILD_UPDATE: function handleGuildUpdate(guild) {
    const item = merged.forEach(guild.guild.id, (updateOwnerId) => {
      if (updateOwnerId.updateOwnerId()) {
        updateOwnerId.rebuildMembers();
      }
    });
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    merged.delete(guild.guild.id);
  },
  GUILD_ROLE_UPDATE: function handleGuildRoleUpdate(role) {
    role = role.role;
    const item = merged.forEach(role.guildId, (rebuildGroup) => {
      rebuildGroup.rebuildGroup(role.id);
      rebuildGroup.rebuildMembers();
    });
  },
  GUILD_MEMBER_UPDATE: function handleMemberUpdate(user) {
    user = user.user;
    const item = merged.forEach(user.guildId, (rebuildMember) => rebuildMember.rebuildMember(user.id));
  },
  CHANNEL_UPDATES: function handleChannelUpdates() {
    return true;
  }
};
const channelMemberStore = new ChannelMemberStore(DispatcherDefault, MemberListRowTypes);
const size = fn(2);
const result = size.fileFinishedImporting("stores/ChannelMemberStore.tsx");

export default channelMemberStore;
export const EVERYONE_ID = "everyone";
export const EVERYONE_CHANNEL_ID = 0;
export { MemberListRowTypes };