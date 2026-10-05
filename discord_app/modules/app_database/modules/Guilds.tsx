// discord_app/modules/app_database/modules/Guilds.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import GuildRecordUtilsAll from "../../../utils/GuildRecordUtils.tsx";
import GuildRecord from "../../../records/GuildRecord.tsx";
import DatabaseDaosDefault from "../DatabaseDaos.tsx";
import GuildRoleRecordUtilsAll from "../../../utils/GuildRoleRecordUtils.tsx";
import GuildRoleUtilsAll from "../../../utils/GuildRoleUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c1, c2, c3;

const updateJoinedAt = GuildRecord.updateJoinedAt;
let tmp2 = new LoggerDefault("Guilds");
let closure_9 = tmp2;
class Guilds {
  constructor() {
    const obj = Object.create(new.target.prototype);
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
      },
    };
    return obj;
  }
  getAsync(arg0) {
    let closure_0 = arg0;
    return (async () => {
      let guildsResult;
      let value;
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_2;
          let tmp;
          c3 = 2;
          if (0 === c2) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              value = undefined;
              closure_2 = undefined;
              const _performance2 = performance;
              tmp = performance.now();
              const obj6 = tmp(c2[7]);
              c2 = 1;
              c3 = 1;
              const obj4 = { value: guildsResult.getMany(), done: false };
              guildsResult = obj6.guilds(tmp);
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const _performance = performance;
            closure_2 = performance.now();
            const _HermesInternal = HermesInternal;
            closure_1_9.verbose("loaded in " + closure_2 - tmp + "ms (guilds: " + value.length + ")");
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp5) {
          c3 = 3;
          throw tmp5;
        }
      }
    })();
  }
  getOneAsync(arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
    return (async () => {
      let guildsResult;
      let v3;
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const obj3 = v3(dependencyMap[7]);
              c1 = 1;
              v3 = 1;
              const obj5 = { value: guildsResult.get(closure_1), done: false };
              guildsResult = obj3.guilds(closure_0);
              return obj5;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            v3 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp8) {
          v3 = 3;
          throw tmp8;
        }
      }
    })();
  }
  handleBackgroundSync(arg0, arg1) {
    const self = this;
    const iter = arg0.guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      if ("unavailable" !== nextResult.data_mode) {
        let guild = GuildStore.getGuild(tmp2.id);
        if (null != guild) {
          let filterRoleDeletesResult;
          let tmp7;
          let unsafeMutableRoles = GuildRoleStore.getUnsafeMutableRoles(tmp2.id);
          if ("partial" === tmp2.data_mode) {
            let obj2 = GuildRoleUtilsAll;
            filterRoleDeletesResult = obj2.filterRoleDeletes(
              tmp2.id,
              unsafeMutableRoles,
              tmp2.partial_updates.roles,
              tmp2.partial_updates.deleted_role_ids,
            );
            tmp7 = importAll;
          } else {
            let obj = GuildRoleRecordUtilsAll;
            filterRoleDeletesResult = obj.fromServerArray(tmp2.id, tmp2.roles);
            tmp7 = importAll;
          }
          let put = self.put;
          let tmp7Result = tmp7(2066);
          let attachSerializedData = tmp7Result.attachSerializedData;
          let tmp7Result3 = tmp7(2066);
          let fromBackgroundSyncResult = tmp7Result3.fromBackgroundSync(tmp2, tmp23);
          let tmp7Result4 = tmp7(2108);
          let result = tmp7Result4.toSerializedPartition(filterRoleDeletesResult);
          let putResult = put(
            attachSerializedData(fromBackgroundSyncResult, result, GuildMemberStore.getSelfMember(tmp2.id)),
            arg1,
          );
        }
      }
      continue;
    }
  }
  handleConnectionOpen(unavailableGuilds, database) {
    const self = this;
    const items = [...unavailableGuilds.unavailableGuilds];
    const obj = DatabaseDaosDefault;
    const guildsTransactionResult = obj.guildsTransaction(database);
    guildsTransactionResult.deleteAllExcept(items);
    const guilds = unavailableGuilds.guilds;
    for (const item10027 of guilds) {
      let putOneResult = self.putOne(item10027, database);
      continue;
    }
  }
  handleGuildCreate(guild, arg1) {
    this.putOne(guild.guild, arg1);
  }
  handleGuildUpdate(guild, arg1) {
    guild = GuildStore.getGuild(guild.guild.id);
    const put = this.put;
    const obj = GuildRecordUtilsAll;
    const fromGuildResult = obj.fromGuild(guild.guild, guild);
    const attachSerializedData = GuildRecordUtilsAll.attachSerializedData;
    GuildRecordUtilsAll;
    const toSerializedPartition = GuildRoleRecordUtilsAll.toSerializedPartition;
    GuildRoleRecordUtilsAll;
    const obj2 = GuildRoleRecordUtilsAll;
    const result = toSerializedPartition(obj2.fromServerArray(guild.guild.id, guild.guild.roles));
    put(attachSerializedData(fromGuildResult, result, GuildMemberStore.getSelfMember(guild.guild.id)), arg1);
  }
  handleGuildDelete(guild, arg1) {
    this.delete(guild.guild.id, arg1);
  }
  handleGuildRoleChange(guildId, arg1) {
    const guild = GuildStore.getGuild(guildId.guildId);
    const unsafeMutableRoles = GuildRoleStore.getUnsafeMutableRoles(guildId.guildId);
    if (null != guild) {
      const self = this;
      const put = this.put;
      const attachSerializedData = GuildRecordUtilsAll.attachSerializedData;
      GuildRecordUtilsAll;
      const obj = {};
      const toSerializedPartition = GuildRoleRecordUtilsAll.toSerializedPartition;
      GuildRoleRecordUtilsAll;
      const merged = Object.assign(unsafeMutableRoles);
      const id = guildId.role.id;
      const obj2 = GuildRoleRecordUtilsAll;
      obj[id] = obj2.fromServer(guildId.guildId, guildId.role);
      const result = toSerializedPartition(obj);
      put(attachSerializedData(guild, result, GuildMemberStore.getSelfMember(guildId.guildId)), arg1);
    }
  }
  handleGuildRoleDelete(guildId, arg1) {
    let roles;
    let closure_0 = guildId;
    const guild = GuildStore.getGuild(guildId.guildId);
    if (null != guild) {
      const obj4 = {};
      const merged = Object.assign(GuildRoleStore.getUnsafeMutableRoles(guildId.guildId));
      delete obj3[guildId.roleId];
      const selfMember = GuildMemberStore.getSelfMember(guildId.guildId);
      let tmp5 = selfMember;
      if (null != selfMember) {
        const obj = { roles: roles.filter((item) => item !== closure_0.roleId) };
        const merged1 = Object.assign(selfMember);
        roles = selfMember.roles;
        tmp5 = obj;
      }
      const self = this;
      const put = this.put;
      const attachSerializedData = GuildRecordUtilsAll.attachSerializedData;
      GuildRecordUtilsAll;
      const obj2 = GuildRoleRecordUtilsAll;
      put(attachSerializedData(guild, obj2.toSerializedPartition(obj4), tmp5), arg1);
    }
  }
  handleGuildMemberAdd(joinedAt, arg1) {
    if (null != joinedAt.joinedAt) {
      if (joinedAt.user.id === AuthenticationStore.getId()) {
        const guild = GuildStore.getGuild(joinedAt.guildId);
        if (null != guild) {
          const self = this;
          const put = this.put;
          const attachSerializedData = GuildRecordUtilsAll.attachSerializedData;
          GuildRecordUtilsAll;
          const tmp9 = updateJoinedAt(guild, joinedAt.joinedAt);
          const obj = GuildRoleRecordUtilsAll;
          const result = obj.toSerializedPartition(GuildRoleStore.getUnsafeMutableRoles(guild.id));
          put(attachSerializedData(tmp9, result, GuildMemberStore.getSelfMember(guild.id)), arg1);
        }
      }
    }
  }
  handleGuildMemberUpdate(user, arg1) {
    if (user.user.id === AuthenticationStore.getId()) {
      const guild = GuildStore.getGuild(user.guildId);
      if (null != guild) {
        const self = this;
        const put = this.put;
        const attachSerializedData = GuildRecordUtilsAll.attachSerializedData;
        GuildRecordUtilsAll;
        const obj2 = { roles: user.roles, userId: user.user.id };
        const obj = GuildRoleRecordUtilsAll;
        put(
          attachSerializedData(guild, obj.toSerializedPartition(GuildRoleStore.getUnsafeMutableRoles(guild.id)), obj2),
          arg1,
        );
      }
    }
  }
  resetInMemoryState() {}
  putOne(members, arg1) {
    let id;
    let roles;
    members = members.members;
    const found = members.find((user) => user.user.id === id.getId());
    const guild = GuildStore.getGuild(members.id);
    if (null != members.properties) {
      ({ id, roles } = members);
      const obj = GuildRoleRecordUtilsAll;
      const fromSyncOperationResult = obj.fromSyncOperation(
        id,
        roles,
        GuildRoleStore.getUnsafeMutableRoles(members.id),
      );
      const attachSerializedData = GuildRecordUtilsAll.attachSerializedData;
      GuildRecordUtilsAll;
      const obj2 = GuildRecordUtilsAll;
      let tmp10 = null;
      const fromServerResult = obj2.fromServer(members, guild);
      const obj3 = GuildRoleRecordUtilsAll;
      const result = obj3.toSerializedPartition(fromSyncOperationResult);
      if (null != found) {
        tmp10 = { userId: found.user.id, roles: found.roles };
        const obj4 = { userId: found.user.id, roles: found.roles };
      }
      const self = this;
      this.put(attachSerializedData(fromServerResult, result, tmp10), arg1);
    }
  }
  put(arg0, database) {
    const obj = DatabaseDaosDefault;
    const guildsTransactionResult = obj.guildsTransaction(database);
    guildsTransactionResult.put(arg0);
  }
  delete(arg0, database) {
    const obj = DatabaseDaosDefault;
    const guildsTransactionResult = obj.guildsTransaction(database);
    guildsTransactionResult.delete(arg0);
  }
}
const prototype = Guilds.prototype;
let obj = Object.create(Guilds.prototype);
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
  },
};
let result = size.fileFinishedImporting("modules/app_database/modules/Guilds.tsx");

export default obj;
