// === Module 7650: Guilds ===

// Module 7650 (Guilds)
import LoggerDefault from "Logger" /* 3 */;
import GuildRecordUtilsAll from "GuildRecordUtils" /* 1971 */;
import DatabaseDaosDefault from "DatabaseDaos" /* 1986 */;
import GuildRoleRecordUtilsAll from "GuildRoleRecordUtils" /* 2017 */;
import GuildRoleUtilsAll from "GuildRoleUtils" /* 2019 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import GuildMemberStore from "GuildMemberStore" /* 2021 */;
import GuildRoleStore from "GuildRoleStore" /* 2015 */;
import GuildStore from "GuildStore" /* 1979 */;

const updateJoinedAt = fn(1975).updateJoinedAt;
let closure_9 = new LoggerDefault("Guilds");
class Guilds {
  constructor() {
    obj = Object.create(new.target.prototype);
    closure_0 = obj;
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
  closure_0 = arg0;
  return (async () => {
    closure_1 = tmp5;
    const _performance2 = performance;
    closure_128_0 = performance.now();
    tmp2(dependencyMap[7]);
    closure_128_1 = await tmp2(c2[7]).guilds(tmp2).getMany();
    const _performance = performance;
    closure_128_2 = performance.now();
    const _HermesInternal = HermesInternal;
    closure_1_9.verbose("loaded in " + closure_128_2 - closure_128_0 + "ms (guilds: " + closure_128_1.length + ")");
    return closure_128_1;
  })();
};
prototype["getOneAsync"] = function getOneAsync(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  return (async () => {
    await v3(closure_1_2[7]).guilds(closure_0).get(closure_1);
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
      let guild = GuildStore.getGuild(tmp2.id);
      if (null != guild) {
        let unsafeMutableRoles = GuildRoleStore.getUnsafeMutableRoles(tmp2.id);
        if ("partial" === tmp2.data_mode) {
          let obj2 = GuildRoleUtilsAll;
          let filterRoleDeletesResult = obj2.filterRoleDeletes(tmp2.id, unsafeMutableRoles, tmp2.partial_updates.roles, tmp2.partial_updates.deleted_role_ids);
          let tmp7 = importAll;
        } else {
          let obj = GuildRoleRecordUtilsAll;
          filterRoleDeletesResult = obj.fromServerArray(tmp2.id, tmp2.roles);
          tmp7 = importAll;
        }
        tmp7(1971);
        let tmp7Result = tmp7(1971);
        let fromBackgroundSyncResult = tmp7Result.fromBackgroundSync(tmp2, tmp22);
        let tmp7Result1 = tmp7(2017);
        let result = tmp7Result1.toSerializedPartition(filterRoleDeletesResult);
        let putResult = self.put(tmp7Result.attachSerializedData(fromBackgroundSyncResult, result, GuildMemberStore.getSelfMember(tmp2.id)), arg1);
      }
    }
    continue;
  }
};
prototype["handleConnectionOpen"] = function handleConnectionOpen(unavailableGuilds, database) {
  const self = this;
  const items = [...unavailableGuilds.unavailableGuilds];
  DatabaseDaosDefault.guildsTransaction(database).deleteAllExcept(items);
  for (const item10027 of tmp2) {
    let putOneResult = self.putOne(item10027, arg1);
    continue;
  }
};
prototype["handleGuildCreate"] = function handleGuildCreate(guild, arg1) {
  this.putOne(guild.guild, arg1);
};
prototype["handleGuildUpdate"] = function handleGuildUpdate(guild, arg1) {
  guild = GuildStore.getGuild(guild.guild.id);
  const fromGuildResult = GuildRecordUtilsAll.fromGuild(guild.guild, guild);
  const obj2 = GuildRecordUtilsAll;
  const obj3 = GuildRoleRecordUtilsAll;
  const result = obj3.toSerializedPartition(GuildRoleRecordUtilsAll.fromServerArray(guild.guild.id, guild.guild.roles));
  this.put(obj2.attachSerializedData(fromGuildResult, result, GuildMemberStore.getSelfMember(guild.guild.id)), arg1);
};
prototype["handleGuildDelete"] = function handleGuildDelete(guild, arg1) {
  this.delete(guild.guild.id, arg1);
};
prototype["handleGuildRoleChange"] = function handleGuildRoleChange(guildId, arg1) {
  const guild = GuildStore.getGuild(guildId.guildId);
  const unsafeMutableRoles = GuildRoleStore.getUnsafeMutableRoles(guildId.guildId);
  if (null != guild) {
    const self = this;
    const obj = {};
    const merged = Object.assign(unsafeMutableRoles);
    const obj2 = GuildRoleRecordUtilsAll;
    obj[guildId.role.id] = GuildRoleRecordUtilsAll.fromServer(guildId.guildId, guildId.role);
    const result = obj2.toSerializedPartition(obj);
    this.put(obj.attachSerializedData(guild, result, GuildMemberStore.getSelfMember(guildId.guildId)), arg1);
  }
};
prototype["handleGuildRoleDelete"] = function handleGuildRoleDelete(guildId, arg1) {
  const guild = GuildStore.getGuild(guildId.guildId);
  if (null != guild) {
    let obj = {};
    const merged = Object.assign(GuildRoleStore.getUnsafeMutableRoles(guildId.guildId));
    const roleId = guildId.roleId;
    delete tmp2[tmp];
    const selfMember = GuildMemberStore.getSelfMember(guildId.guildId);
    let tmp7 = selfMember;
    if (null != selfMember) {
      obj = {};
      const merged1 = Object.assign(selfMember);
      const roles = selfMember.roles;
      obj.roles = roles.filter((item) => item !== guildId.roleId);
      tmp7 = obj;
    }
    const self = this;
    const obj2 = GuildRecordUtilsAll;
    this.put(obj2.attachSerializedData(guild, GuildRoleRecordUtilsAll.toSerializedPartition(obj), tmp7), arg1);
  }
};
prototype["handleGuildMemberAdd"] = function handleGuildMemberAdd(joinedAt, arg1) {
  if (null != joinedAt.joinedAt) {
    if (joinedAt.user.id === AuthenticationStore.getId()) {
      const guild = GuildStore.getGuild(joinedAt.guildId);
      if (null != guild) {
        const self = this;
        const obj = GuildRecordUtilsAll;
        const tmp8 = updateJoinedAt(guild, joinedAt.joinedAt);
        const result = GuildRoleRecordUtilsAll.toSerializedPartition(GuildRoleStore.getUnsafeMutableRoles(guild.id));
        this.put(obj.attachSerializedData(tmp8, result, GuildMemberStore.getSelfMember(guild.id)), arg1);
      }
    }
  }
};
prototype["handleGuildMemberUpdate"] = function handleGuildMemberUpdate(user, arg1) {
  if (user.user.id === AuthenticationStore.getId()) {
    const guild = GuildStore.getGuild(user.guildId);
    if (null != guild) {
      const self = this;
      const obj = { roles: user.roles, userId: user.user.id };
      this.put(obj.attachSerializedData(guild, GuildRoleRecordUtilsAll.toSerializedPartition(GuildRoleStore.getUnsafeMutableRoles(guild.id)), obj), arg1);
    }
  }
};
prototype["resetInMemoryState"] = function resetInMemoryState() {

};
prototype["putOne"] = function putOne(members, arg1) {
  members = members.members;
  const found = members.find((user) => user.user.id === id.getId());
  const guild = GuildStore.getGuild(members.id);
  if (null != members.properties) {
    let obj = GuildRoleRecordUtilsAll;
    ({ id, roles } = members);
    const fromSyncOperationResult = obj.fromSyncOperation(id, roles, GuildRoleStore.getUnsafeMutableRoles(members.id));
    const obj2 = GuildRecordUtilsAll;
    const fromServerResult = GuildRecordUtilsAll.fromServer(members, guild);
    let tmp9 = null;
    const result = GuildRoleRecordUtilsAll.toSerializedPartition(fromSyncOperationResult);
    if (null != found) {
      obj = { userId: found.user.id, roles: found.roles };
      tmp9 = obj;
    }
    const self = this;
    this.put(obj2.attachSerializedData(fromServerResult, result, tmp9), arg1);
  }
};
prototype["put"] = function put(arg0, database) {
  DatabaseDaosDefault.guildsTransaction(database).put(arg0);
};
prototype["delete"] = function delete(arg0, database) {
  DatabaseDaosDefault.guildsTransaction(database).delete(arg0);
};
let size = Object.create(Guilds.prototype);
let closure_129_0 = size;
size.actions = {
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
size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/modules/Guilds.tsx");

export default size;