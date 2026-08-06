// discord_app/modules/app_database/modules/Guilds.tsx
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { updateJoinedAt } from "GuildNSFWContentLevel";
import fetchFingerprint from "fetchFingerprint";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRoleRecordFromRust from "createGuildRoleRecordFromRust";
import closure_8 from "createGuildRecordFromRust";
import set from "fetchFingerprint";

let c9 = new require("trackCommunicationDisabled")("Guilds");
class Guilds {
  constructor() {
    obj = Object.create(new.target.prototype);
    Guilds = obj;
    obj.actions = {
      BACKGROUND_SYNC(arg0, arg1) {
            return obj.handleBackgroundSync(arg0, arg1);
          },
      CONNECTION_OPEN(arg0, arg1) {
            return obj.handleConnectionOpen(arg0, arg1);
          },
      GUILD_CREATE(arg0, arg1) {
            return obj.handleGuildCreate(arg0, arg1);
          },
      GUILD_DELETE(arg0, arg1) {
            return obj.handleGuildDelete(arg0, arg1);
          },
      GUILD_MEMBER_ADD(arg0, arg1) {
            return obj.handleGuildMemberAdd(arg0, arg1);
          },
      GUILD_MEMBER_UPDATE(arg0, arg1) {
            return obj.handleGuildMemberUpdate(arg0, arg1);
          },
      GUILD_ROLE_CREATE(arg0, arg1) {
            return obj.handleGuildRoleChange(arg0, arg1);
          },
      GUILD_ROLE_DELETE(arg0, arg1) {
            return obj.handleGuildRoleDelete(arg0, arg1);
          },
      GUILD_ROLE_UPDATE(arg0, arg1) {
            return obj.handleGuildRoleChange(arg0, arg1);
          },
      GUILD_UPDATE(arg0, arg1) {
            return obj.handleGuildUpdate(arg0, arg1);
          }
    };
    return obj;
  }
}
const prototype = Guilds.prototype;
prototype["getAsync"] = function getAsync(arg0) {
  let closure_0 = arg0;
  return callback(function*() {
    let length = tmp5;
    let closure_0 = tmp2;
    const _performance2 = performance;
    closure_0 = performance.now();
    const obj6 = outer1_0(table[7]);
    length = yield outer1_0(table[7]).guilds(outer1_0).getMany();
    const _performance = performance;
    const _HermesInternal = HermesInternal;
    outer1_9.verbose("loaded in " + closure_2 - closure_0 + "ms (guilds: " + length.length + ")");
    return length;
  })();
};
prototype["getOneAsync"] = function getOneAsync(closure_0, closure_2) {
  let closure_1 = closure_2;
  return callback(function*() {
    const obj2 = v0(outer1_2[7]);
    yield obj2.guilds(v0).get(c1);
    return arg1;
  })();
};
prototype["handleBackgroundSync"] = function handleBackgroundSync(arg0, arg1) {
  const self = this;
  const iter = arg0.guilds[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if ("unavailable" !== nextResult.data_mode) {
      let tmp19 = store4;
      let tmp20 = nextResult;
      let guild = store4.getGuild(tmp2.id);
      if (null != guild) {
        let tmp23 = store3;
        let tmp24 = nextResult;
        let unsafeMutableRoles = store3.getUnsafeMutableRoles(tmp2.id);
        if ("partial" === tmp2.data_mode) {
          let tmp8 = importAll;
          let tmp9 = dependencyMap;
          let obj2 = importAll(1968);
          let tmp10 = nextResult;
          let tmp11 = unsafeMutableRoles;
          let tmp12 = obj2;
          let filterRoleDeletesResult = obj2.filterRoleDeletes(tmp2.id, unsafeMutableRoles, tmp2.partial_updates.roles, tmp2.partial_updates.deleted_role_ids);
          let tmp4 = dependencyMap;
          let tmp7 = importAll;
        } else {
          let tmp3 = importAll;
          tmp4 = dependencyMap;
          let obj = importAll(1966);
          let tmp5 = nextResult;
          filterRoleDeletesResult = obj.fromServerArray(tmp2.id, tmp2.roles);
          tmp7 = importAll;
        }
        let tmp7Result = tmp7(1411);
        tmp7Result = tmp7(1411);
        let tmp13 = nextResult;
        let tmp14 = guild;
        let fromBackgroundSyncResult = tmp7Result.fromBackgroundSync(tmp2, tmp22);
        let tmp7Result1 = tmp7(1966);
        let tmp17 = store2;
        let result = tmp7Result1.toSerializedPartition(filterRoleDeletesResult);
        let putResult = self.put(tmp7Result.attachSerializedData(fromBackgroundSyncResult, result, store2.getSelfMember(tmp2.id)), arg1);
      }
    }
    continue;
  }
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(unavailableGuilds, database) {
  const self = this;
  const items = [...unavailableGuilds.unavailableGuilds];
  obj = obj(1936);
  obj.guildsTransaction(database).deleteAllExcept(items);
  for (const item10027 of tmp2) {
    let putOneResult = self.putOne(item10027, arg1);
    continue;
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild) {
  this.putOne(guild.guild, arg1);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild) {
  guild = store4.getGuild(guild.guild.id);
  const obj = importAll(1411);
  const fromGuildResult = importAll(1411).fromGuild(guild.guild, guild);
  const obj2 = importAll(1411);
  const obj3 = importAll(1966);
  const result = obj3.toSerializedPartition(importAll(1966).fromServerArray(guild.guild.id, guild.guild.roles));
  this.put(obj2.attachSerializedData(fromGuildResult, result, store2.getSelfMember(guild.guild.id)), arg1);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild) {
  this.delete(guild.guild.id, arg1);
};
prototype["handleGuildRoleChange"] = function handleGuildRoleChange(guildId) {
  const guild = store4.getGuild(guildId.guildId);
  const unsafeMutableRoles = store3.getUnsafeMutableRoles(guildId.guildId);
  if (null != guild) {
    const self = this;
    let obj = importAll(1411);
    obj = {};
    const merged = Object.assign(unsafeMutableRoles);
    const obj2 = importAll(1966);
    obj[guildId.role.id] = importAll(1966).fromServer(guildId.guildId, guildId.role);
    const result = obj2.toSerializedPartition(obj);
    this.put(obj.attachSerializedData(guild, result, store2.getSelfMember(guildId.guildId)), arg1);
    const obj4 = importAll(1966);
  }
};
prototype["handleGuildRoleDelete"] = function handleGuildRoleDelete(guildId) {
  let closure_0 = guildId;
  const guild = store4.getGuild(guildId.guildId);
  if (null != guild) {
    let obj = {};
    const merged = Object.assign(store3.getUnsafeMutableRoles(guildId.guildId));
    const roleId = guildId.roleId;
    delete tmp2[tmp];
    const selfMember = store2.getSelfMember(guildId.guildId);
    let tmp7 = selfMember;
    if (null != selfMember) {
      obj = {};
      const merged1 = Object.assign(selfMember);
      const roles = selfMember.roles;
      obj.roles = roles.filter((arg0) => arg0 !== guildId.roleId);
      tmp7 = obj;
    }
    const self = this;
    const obj2 = importAll(1411);
    this.put(obj2.attachSerializedData(guild, importAll(1966).toSerializedPartition(obj), tmp7), arg1);
    const obj3 = importAll(1966);
  }
};
prototype["handleGuildMemberAdd"] = function handleGuildMemberAdd(joinedAt) {
  if (null != joinedAt.joinedAt) {
    if (joinedAt.user.id === store.getId()) {
      const guild = store4.getGuild(joinedAt.guildId);
      if (null != guild) {
        const self = this;
        const obj = importAll(1411);
        const tmp8 = updateJoinedAt(guild, joinedAt.joinedAt);
        const result = importAll(1966).toSerializedPartition(store3.getUnsafeMutableRoles(guild.id));
        this.put(obj.attachSerializedData(tmp8, result, store2.getSelfMember(guild.id)), arg1);
        const obj2 = importAll(1966);
      }
    }
  }
};
prototype["handleGuildMemberUpdate"] = function handleGuildMemberUpdate(user) {
  if (user.user.id === store.getId()) {
    const guild = store4.getGuild(user.guildId);
    if (null != guild) {
      const self = this;
      let obj = importAll(1411);
      obj = { roles: null, userId: null };
      obj[0] = user.roles;
      obj[1] = user.user.id;
      this.put(obj.attachSerializedData(guild, importAll(1966).toSerializedPartition(store3.getUnsafeMutableRoles(guild.id)), obj), arg1);
      const obj2 = importAll(1966);
    }
  }
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
prototype["putOne"] = function putOne(members) {
  let id;
  let roles;
  members = members.members;
  const found = members.find((user) => user.user.id === id.getId());
  const guild = store4.getGuild(members.id);
  if (null != members.properties) {
    let obj = importAll(1966);
    ({ id, roles } = members);
    const fromSyncOperationResult = obj.fromSyncOperation(id, roles, store3.getUnsafeMutableRoles(members.id));
    const obj2 = importAll(1411);
    const obj3 = importAll(1411);
    const fromServerResult = importAll(1411).fromServer(members, guild);
    let tmp9 = null;
    const result = importAll(1966).toSerializedPartition(fromSyncOperationResult);
    if (null != found) {
      obj = { userId: null, roles: null };
      obj[0] = found.user.id;
      obj[1] = found.roles;
      tmp9 = obj;
    }
    const self = this;
    this.put(obj2.attachSerializedData(fromServerResult, result, tmp9), arg1);
    const obj4 = importAll(1966);
  }
};
prototype["put"] = function put(arg0, database) {
  obj = obj(1936);
  obj.guildsTransaction(database).put(arg0);
};
prototype["delete"] = function delete(arg0, database) {
  obj = obj(1936);
  obj.guildsTransaction(database).delete(arg0);
};
let set = Object.create(Guilds.prototype);
set.actions = {
  BACKGROUND_SYNC(arg0, arg1) {
    return obj.handleBackgroundSync(arg0, arg1);
  },
  CONNECTION_OPEN(arg0, arg1) {
    return obj.handleConnectionOpen(arg0, arg1);
  },
  GUILD_CREATE(arg0, arg1) {
    return obj.handleGuildCreate(arg0, arg1);
  },
  GUILD_DELETE(arg0, arg1) {
    return obj.handleGuildDelete(arg0, arg1);
  },
  GUILD_MEMBER_ADD(arg0, arg1) {
    return obj.handleGuildMemberAdd(arg0, arg1);
  },
  GUILD_MEMBER_UPDATE(arg0, arg1) {
    return obj.handleGuildMemberUpdate(arg0, arg1);
  },
  GUILD_ROLE_CREATE(arg0, arg1) {
    return obj.handleGuildRoleChange(arg0, arg1);
  },
  GUILD_ROLE_DELETE(arg0, arg1) {
    return obj.handleGuildRoleDelete(arg0, arg1);
  },
  GUILD_ROLE_UPDATE(arg0, arg1) {
    return obj.handleGuildRoleChange(arg0, arg1);
  },
  GUILD_UPDATE(arg0, arg1) {
    return obj.handleGuildUpdate(arg0, arg1);
  }
};
let result = set.fileFinishedImporting("modules/app_database/modules/Guilds.tsx");

export default set;