// discord_app/stores/ChannelMemberStore.tsx
import _modDef12 from "../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import BigFlagUtilsAll from "../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import _modDef1251 from "../../_runtime/metro/01251__.js";
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
import Constants from "../Constants.tsx";
import size from "../../_runtime/metro/00002__.js";

let _require, op;

let closure_15;
let closure_16;
function getMemberListId(arg0) {
  let memberListId;
  const channel = ChannelStore.getChannel(arg0);
  if (null == channel) {
    memberListId = everyone;
  } else if (null == channel.memberListId) {
    let str1;
    let obj = PermissionUtilsAll;
    if (obj.canEveryone(constants2.VIEW_CHANNEL, channel)) {
      str1 = everyone;
    } else {
      const v3 = _modDef1251.v3;
      let arr = _modDef12(channel.permissionOverwrites);
      const reduced = arr.reduce((arr, id) => {
        let allow;
        let deny;
        id = id.id;
        ({ allow, deny } = id);
        const obj = BigFlagUtilsAll;
        if (obj.has(allow, constants.VIEW_CHANNEL)) {
          const _HermesInternal2 = HermesInternal;
          arr = arr.push("allow:" + id);
        } else {
          const tmpResult = BigFlagUtilsAll;
          if (tmpResult.has(deny, constants.VIEW_CHANNEL)) {
            const _HermesInternal = HermesInternal;
            arr.push("deny:" + id);
          }
        }
        return arr;
      }, []);
      const sorted = reduced.sort();
      const str2 = v3(sorted.join(","));
      str1 = str2.toString();
    }
    memberListId = str1;
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
    let closure_0 = item;
    item = merged.forEach(null, (rebuildMember) => rebuildMember.rebuildMember(ownerId.ownerId));
  });
}
function handleLocalPresenceUpdate() {
  const id = AuthenticationStore.getId();
  const item = merged.forEach(null, (rebuildMember) => rebuildMember.rebuildMember(closure_0));
}
({ StatusTypes: closure_15, Permissions: closure_16 } = Constants);
const everyone = "everyone";
const MemberListRowTypes = {
  GROUP: "GROUP",
  MEMBER: "MEMBER",
  CONTENT_INVENTORY: "CONTENT_INVENTORY",
  CONTENT_INVENTORY_GROUP: "CONTENT_INVENTORY_GROUP",
  HIDDEN_CONTENT_INVENTORY: "HIDDEN_CONTENT_INVENTORY",
  CONTENT_INVENTORY_LEADERBOARD: "CONTENT_INVENTORY_LEADERBOARD",
};
class MemberList {
  constructor(guildId, listId) {
    merged = Object.assign({ rows: null, groups: null, members: null, version: 0 });
    merged[0] = [];
    merged[1] = [];
    merged[2] = {};
    merged.guildId = guildId;
    merged.listId = listId;
    merged.updateOwnerId();
    return merged;
  }
  updateOwnerId() {
    const self = this;
    const guild = GuildStore.getGuild(this.guildId);
    if (null == guild) {
      return false;
    } else {
      const obj = PermissionUtilsAll;
      const guildVisualOwnerId = obj.getGuildVisualOwnerId(guild);
      let flag = self.ownerId !== guildVisualOwnerId;
      if (flag) {
        self.ownerId = guildVisualOwnerId;
        flag = true;
      }
      return flag;
    }
  }
  setGroups(groups) {
    const self = this;
    _require = 0;
    this.groups = groups.map((count) => {
      let obj;
      let str;
      const tmp = closure_0;
      let num = count.count;
      const _Math = Math;
      if (num == null) {
        num = 0;
      }
      const maxResult = max(0, num);
      closure_0 = closure_0 + (maxResult + 1);
      const id = count.id;
      if (constants.ONLINE !== id) {
        if (constants.OFFLINE !== id) {
          if (constants.UNKNOWN !== id) {
            const guild = GuildStore.getGuild(tmp3);
            let role = null;
            if (null != guild) {
              role = GuildRoleStore.getRole(guild.id, id);
            }
            obj = { type: obj.GROUP, key: id, id, title: str, count: maxResult, index: tmp };
            str = "";
            if (null != role) {
              str = role.name;
            }
          }
          return obj;
        }
      }
      const obj2 = { type: obj.GROUP, key: id, id, count: maxResult, index: tmp };
      Object.defineProperty(obj2, "title", {
        get: () => {
          if (constants.ONLINE === id) {
            const intl3 = closure_2_0(closure_2_3[12]).intl;
            return intl3.string(closure_2_0(closure_2_3[12]).t.WbGtnH);
          } else if (tmp2.OFFLINE === tmp) {
            const intl2 = closure_2_0(closure_2_3[12]).intl;
            return intl2.string(closure_2_0(closure_2_3[12]).t.Vv0abJ);
          } else {
            const intl = closure_2_0(closure_2_3[12]).intl;
            return intl.string(closure_2_0(closure_2_3[12]).t["UQMV/E"]);
          }
        },
        set: undefined,
      });
      obj = obj2;
    });
    this.rows.length = _require;
  }
  sync(arg0, arr) {
    let nextResult;
    let require;
    const self = this;
    [require] = arg0;
    const item = arr.forEach((item, index) => self.update(require + index, item));
  }
  invalidate(arg0) {
    let sum;
    let tmp;
    let tmp2;
    [tmp, tmp2] = arg0;
    const self = this;
    if (sum <= tmp2) {
      while (null != self.rows[sum]) {
        delete self.rows[tmp4];
        if (tmp3.type === obj.MEMBER) {
          delete self.members[tmp3.user.id];
        }
        sum = sum + 1;
        if (sum > tmp2) {
          break;
        }
      }
    }
    self.version = self.version + 1;
  }
  insert(arg0, arg1) {
    let count;
    let group;
    let id;
    let member;
    let obj;
    let str;
    const self = this;
    ({ group, member } = arg1);
    if (null != group) {
      const rows = self.rows;
      ({ id, count } = group);
      if (constants.ONLINE !== id) {
        if (constants.OFFLINE !== id) {
          let obj2;
          if (constants.UNKNOWN !== id) {
            const guild = GuildStore.getGuild(tmp16);
            let role = null;
            if (null != guild) {
              role = GuildRoleStore.getRole(guild.id, id);
            }
            obj2 = { type: obj.GROUP, key: id, id, title: str, count, index: "applicationId" };
            str = "";
            if (null != role) {
              str = role.name;
            }
          }
          tmp15(arg0, 0, obj2);
        }
      }
      const obj3 = { type: obj.GROUP, key: id, id, count, index: undefined };
      Object.defineProperty(obj3, "title", {
        get: () => {
          if (constants.ONLINE === id) {
            const intl3 = closure_2_0(closure_2_3[12]).intl;
            return intl3.string(closure_2_0(closure_2_3[12]).t.WbGtnH);
          } else if (tmp2.OFFLINE === tmp) {
            const intl2 = closure_2_0(closure_2_3[12]).intl;
            return intl2.string(closure_2_0(closure_2_3[12]).t.Vv0abJ);
          } else {
            const intl = closure_2_0(closure_2_3[12]).intl;
            return intl.string(closure_2_0(closure_2_3[12]).t["UQMV/E"]);
          }
        },
        set: undefined,
      });
      obj2 = obj3;
    } else if (null != member) {
      let status;
      let activities;
      const guildId = self.guildId;
      const id2 = member.user.id;
      const ownerId = self.ownerId;
      const tmp26 = id2 === AuthenticationStore.getId();
      const isMobileOnlineResult = PresenceStore.isMobileOnline(id2);
      const isVROnlineResult = PresenceStore.isVROnline(id2);
      if (tmp26) {
        status = SelfPresenceStore.getStatus();
      } else {
        status = PresenceStore.getStatus(id2, guildId);
      }
      if (tmp26) {
        activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(id2, guildId);
      }
      const streamForUser = ApplicationStreamingStore.getStreamForUser(id2, guildId);
      const user = UserStore.getUser(id2);
      let tmp9 = null;
      if (null != user) {
        obj = {
          type: obj.MEMBER,
          user,
          status,
          activities,
          applicationStream: streamForUser,
          isOwner: ownerId === id2,
          isMobileOnline: isMobileOnlineResult,
          isVROnline: isVROnlineResult,
        };
        merged = Object.assign(GuildMemberStore.getMember(guildId, id2));
        tmp9 = obj;
      }
      if (null != tmp9) {
        const rows1 = self.rows;
        rows1.splice(arg0, 0, tmp9);
        self.members[member.user.id] = tmp9;
      }
    }
    self.version = self.version + 1;
  }
  update(arg0, arg1) {
    let count;
    let group;
    let id;
    let member;
    let obj;
    let str;
    const self = this;
    ({ group, member } = arg1);
    const tmp2 = null != tmp && tmp.type === obj.MEMBER;
    if (tmp2) {
      delete self.members[this.rows[arg0].user.id];
    }
    if (null != group) {
      ({ id, count } = group);
      if (constants.ONLINE !== id) {
        if (constants.OFFLINE !== id) {
          let obj2;
          if (constants.UNKNOWN !== id) {
            const guild = GuildStore.getGuild(tmp18);
            let role = null;
            if (null != guild) {
              role = GuildRoleStore.getRole(guild.id, id);
            }
            obj2 = { type: obj.GROUP, key: id, id, title: str, count, index: "applicationId" };
            str = "";
            if (null != role) {
              str = role.name;
            }
          }
          tmp17[arg0] = obj2;
        }
      }
      const obj3 = { type: obj.GROUP, key: id, id, count, index: undefined };
      Object.defineProperty(obj3, "title", {
        get: () => {
          if (constants.ONLINE === id) {
            const intl3 = closure_2_0(closure_2_3[12]).intl;
            return intl3.string(closure_2_0(closure_2_3[12]).t.WbGtnH);
          } else if (tmp2.OFFLINE === tmp) {
            const intl2 = closure_2_0(closure_2_3[12]).intl;
            return intl2.string(closure_2_0(closure_2_3[12]).t.Vv0abJ);
          } else {
            const intl = closure_2_0(closure_2_3[12]).intl;
            return intl.string(closure_2_0(closure_2_3[12]).t["UQMV/E"]);
          }
        },
        set: undefined,
      });
      obj2 = obj3;
    } else if (null != member) {
      let status;
      let activities;
      const guildId = self.guildId;
      const id2 = member.user.id;
      const ownerId = self.ownerId;
      const tmp27 = id2 === AuthenticationStore.getId();
      const isMobileOnlineResult = PresenceStore.isMobileOnline(id2);
      const isVROnlineResult = PresenceStore.isVROnline(id2);
      if (tmp27) {
        status = SelfPresenceStore.getStatus();
      } else {
        status = PresenceStore.getStatus(id2, guildId);
      }
      if (tmp27) {
        activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(id2, guildId);
      }
      const streamForUser = ApplicationStreamingStore.getStreamForUser(id2, guildId);
      const user = UserStore.getUser(id2);
      let tmp12 = null;
      if (null != user) {
        obj = {
          type: obj.MEMBER,
          user,
          status,
          activities,
          applicationStream: streamForUser,
          isOwner: ownerId === id2,
          isMobileOnline: isMobileOnlineResult,
          isVROnline: isVROnlineResult,
        };
        merged = Object.assign(GuildMemberStore.getMember(guildId, id2));
        tmp12 = obj;
      }
      if (null != tmp12) {
        self.rows[arg0] = tmp12;
        self.members[member.user.id] = tmp12;
      }
    }
    self.version = self.version + 1;
  }
  delete(arg0) {
    const self = this;
    if (null != this.rows[arg0]) {
      if (this.rows[arg0].type === obj.MEMBER) {
        delete self.members[this.rows[arg0].user.id];
      }
      const rows = self.rows;
      rows.splice(arg0, 1);
      self.version = self.version + 1;
    }
  }
  rebuildMember(id) {
    let obj;
    const self = this;
    if (null != this.members[id]) {
      let status;
      let activities;
      const guildId = self.guildId;
      const _Object = Object;
      const ownerId = self.ownerId;
      const tmp18 = id === AuthenticationStore.getId();
      const isMobileOnlineResult = PresenceStore.isMobileOnline(id);
      const isVROnlineResult = PresenceStore.isVROnline(id);
      if (tmp18) {
        status = SelfPresenceStore.getStatus();
      } else {
        status = PresenceStore.getStatus(id, guildId);
      }
      if (tmp18) {
        activities = SelfPresenceStore.getActivities();
      } else {
        activities = PresenceStore.getActivities(id, guildId);
      }
      const streamForUser = ApplicationStreamingStore.getStreamForUser(id, guildId);
      const user = UserStore.getUser(id);
      let tmp10 = null;
      if (null != user) {
        obj = {
          type: obj.MEMBER,
          user,
          status,
          activities,
          applicationStream: streamForUser,
          isOwner: ownerId === id,
          isMobileOnline: isMobileOnlineResult,
          isVROnline: isVROnlineResult,
        };
        merged = Object.assign(GuildMemberStore.getMember(guildId, id));
        tmp10 = obj;
      }
      assign(this.members[id], tmp10);
      self.version = self.version + 1;
    }
  }
  rebuildMembers() {
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
  }
  rebuildGroup(id) {
    let count;
    let index;
    let obj;
    let str;
    const self = this;
    let closure_0 = id;
    const groups = this.groups;
    const findIndexResult = groups.findIndex((id) => id.id === closure_0);
    if (null != this.groups[findIndexResult]) {
      const groups2 = self.groups;
      ({ count, index } = this.groups[findIndexResult]);
      closure_0 = id;
      if (constants.ONLINE !== id) {
        if (constants.OFFLINE !== id) {
          if (constants.UNKNOWN !== id) {
            const guild = GuildStore.getGuild(tmp11);
            let role = null;
            if (null != guild) {
              role = GuildRoleStore.getRole(guild.id, id);
            }
            obj = { type: obj.GROUP, key: id, id, title: str, count, index };
            str = "";
            if (null != role) {
              str = role.name;
            }
          }
          tmp10(findIndexResult, 1, obj);
          self.version = self.version + 1;
        }
      }
      const obj2 = { type: obj.GROUP, key: id, id, count, index };
      Object.defineProperty(obj2, "title", {
        get: () => {
          if (constants.ONLINE === id) {
            const intl3 = closure_2_0(closure_2_3[12]).intl;
            return intl3.string(closure_2_0(closure_2_3[12]).t.WbGtnH);
          } else if (tmp2.OFFLINE === tmp) {
            const intl2 = closure_2_0(closure_2_3[12]).intl;
            return intl2.string(closure_2_0(closure_2_3[12]).t.Vv0abJ);
          } else {
            const intl = closure_2_0(closure_2_3[12]).intl;
            return intl.string(closure_2_0(closure_2_3[12]).t["UQMV/E"]);
          }
        },
        set: undefined,
      });
      obj = obj2;
    }
  }
}
const prototype = MemberList.prototype;
class MemberLists {
  constructor() {
    merged = Object.assign({ _guildLists: null });
    merged[0] = {};
    return merged;
  }
  get(guildId, listId) {
    let tmp = this._guildLists[guildId];
    if (null == tmp) {
      const obj = {};
      this._guildLists[guildId] = obj;
      tmp = obj;
    }
    let tmp2 = tmp[listId];
    if (null == tmp2) {
      const self = this;
      if (typeof MemberList === "function") {
        merged = Object.assign({ rows: null, groups: null, members: null, version: 0 });
        merged[0] = [];
        merged[1] = [];
        merged[2] = {};
        merged.guildId = guildId;
        merged.listId = listId;
        merged.updateOwnerId();
        const items = [{ id: constants.UNKNOWN, count: 0 }];
        const obj2 = { id: constants.UNKNOWN, count: 0 };
        merged.setGroups(items);
        tmp[listId] = merged;
        tmp2 = merged;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    }
    return tmp2;
  }
  forEach(arg0, arg1) {
    const self = this;
    let closure_0 = arg1;
    if (null == arg0) {
      const arr2 = _modDef12;
      let item = arr2.forEach(self._guildLists, (arg0) => {
        const arr = _modDef12;
        const item = arr.forEach(arg0, closure_0);
      });
    } else if (null != self._guildLists[arg0]) {
      let arr = _modDef12;
      const item1 = arr.forEach(tmp, arg1);
    }
  }
  delete(arg0) {
    delete this._guildLists[arg0];
  }
  reset() {
    this._guildLists = {};
  }
}
const prototype2 = MemberLists.prototype;
let merged = Object.assign({ _guildLists: null });
merged[0] = {};
let allApplicationStreams = [];
const Store = get_initializedDefault.Store;
class ChannelMemberStore extends Store {
  initialize() {
    this.waitFor(
      UserStore,
      GuildStore,
      GuildRoleStore,
      ChannelStore,
      GuildMemberStore,
      PresenceStore,
      SelfPresenceStore,
      AuthenticationStore,
      GuildMemberCountStore,
      ApplicationStreamingStore,
      ExperimentStore,
    );
    const items = [SelfPresenceStore];
    this.syncWith(items, handleLocalPresenceUpdate);
    const items1 = [ApplicationStreamingStore];
    this.syncWith(items1, handleApplicationStreamUpdate);
  }
  getProps(arg0, arg1) {
    const value = merged.get(arg0, getMemberListId(arg1));
    const obj = {
      listId: "" + value.guildId + ":" + value.listId,
      groups: value.groups,
      rows: value.rows,
      version: value.version,
    };
    return obj;
  }
  getRows(arg0, arg1) {
    return merged.get(arg0, getMemberListId(arg1)).rows;
  }
}
const prototype3 = ChannelMemberStore.prototype;
ChannelMemberStore.displayName = "ChannelMemberStore";
let obj2 = {
  CONNECTION_OPEN: handleConnectionOpen,
  OVERLAY_INITIALIZE: handleConnectionOpen,
  GUILD_MEMBER_LIST_UPDATE: function handleGuildMemberListUpdate(guildId) {
    const value = merged.get(guildId.guildId, guildId.id);
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
  },
};
const channelMemberStore = new ChannelMemberStore(DispatcherDefault, obj2);
const result = size.fileFinishedImporting("stores/ChannelMemberStore.tsx");

export default channelMemberStore;
export const EVERYONE_ID = "everyone";
export const EVERYONE_CHANNEL_ID = 0;
export { MemberListRowTypes };
