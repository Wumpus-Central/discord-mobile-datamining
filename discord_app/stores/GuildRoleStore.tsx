// === Module 1983: createGuildRoleRecordFromRust ===

// Module 1983 (createGuildRoleRecordFromRust)
import obj132 from "obj132" /* 2 */;
import fromStringAll from "fromString" /* 506 */;
import isValueEqual from "isValueEqual" /* 1431 */;
import GuildNSFWContentLevel from "GuildNSFWContentLevel" /* 1434 */;
import identity from "identity" /* 1911 */;
import items from "items" /* 1914 */;
import GuildRoleRecordTypeTag2 from "GuildRoleRecordTypeTag" /* 1984 */;
import fromServerArrayAll from "fromServerArray" /* 1985 */;
import compareGuildRolesAll from "compareGuildRoles" /* 1987 */;

function createGuildRoleRecordFromRust(permissions) {
  const obj = {};
  const merged = Object.assign(permissions);
  const deserializer = fromStringAll;
  obj.permissions = deserializer.deserialize(permissions.permissions);
  return constructInPlace(GuildRoleRecordTypeTag, obj);
}
function syncRoles(id, roles, setPartition) {
  let tmp = "update" === roles.op;
  if (tmp) {
    tmp = 0 === roles.writes.length;
  }
  if (tmp) {
    tmp = 0 === roles.deletes.length;
  }
  if (!tmp) {
    setPartition.setPartition(id, fromServerArrayAll.fromSyncOperation(id, roles, setPartition.getPartition(id)));
  }
}
function checkGuildRolesExist(cache_loaded, id, partitionLength) {
  if (0 === partitionLength.partitionLength(id)) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    error = new Error("Guild data was missing from store for guild " + id + ": missing roles. (phase: " + cache_loaded + ")");
    throw error;
  }
}
const constructInPlace = isValueEqual.constructInPlace;
const LibdiscoreStore = identity.LibdiscoreStore;
const getGuildEveryoneRoleId = GuildNSFWContentLevel.getGuildEveryoneRoleId;
const GuildRoleRecordTypeTag = GuildRoleRecordTypeTag2.GuildRoleRecordTypeTag;
class GuildRoleStore extends LibdiscoreStore {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.database = applyArgumentsResult.addKKVDatabase("guild_roles", createGuildRoleRecordFromRust);
    database = applyArgumentsResult.database;
    applyArgumentsResult.getSortedRoles = database.memoizedPartition((arg0, arg1) => callback(table[6]).sortGuildRoleRecords(Object.values(arg1)));
    database2 = applyArgumentsResult.database;
    applyArgumentsResult.getRolesSnapshot = database2.memoizedPartition((arg0, arg1) => {
      const merged = Object.assign(arg1);
      return {};
    });
    return applyArgumentsResult;
  }
}
const prototype = GuildRoleStore.prototype;
prototype["stateWrapper"] = function stateWrapper() {
  return this.database;
};
prototype["serializeAllGuildRoles"] = function serializeAllGuildRoles() {
  const database = this.database;
  return database.mapPartitions(fromServerArrayAll.toSerializedPartition);
};
prototype["getUnsafeMutableRoles"] = function getUnsafeMutableRoles(id) {
  const database = this.database;
  return database.getPartition(id);
};
prototype["getManyRoles"] = function getManyRoles(guildId, selectedRoleIds) {
  const database = this.database;
  return database.getManyRecords(guildId, selectedRoleIds);
};
prototype["getRole"] = function getRole(id, guildEveryoneRoleId) {
  const database = this.database;
  return database.getRecord(id, guildEveryoneRoleId);
};
prototype["getNumRoles"] = function getNumRoles(id) {
  const database = this.database;
  return database.partitionLength(id);
};
prototype["getEveryoneRole"] = function getEveryoneRole(guild) {
  const database = this.database;
  const record = database.getRecord(guild.id, getGuildEveryoneRoleId(guild));
  if (null == record) {
    const _Error = Error;
    error = new Error("Guild does not have an @everyone role");
    throw error;
  } else {
    return record;
  }
};
prototype["partitionVersion"] = function partitionVersion(arg0) {
  const database = this.database;
  return database.partitionVersion(arg0);
};
GuildRoleStore.displayName = "GuildRoleStore";
const LibdiscoreBatchStoreRefactorExperiment = items.LibdiscoreBatchStoreRefactorExperiment;
const guildRoleStore = new GuildRoleStore({
  BACKGROUND_SYNC(arg0, getNullablePartition) {
    const iter = arg0.guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let nullablePartition = getNullablePartition.getNullablePartition(nextResult.id);
      let tmp5 = null != nullablePartition;
      let tmp4 = nullablePartition;
      if (tmp5) {
        tmp5 = "unavailable" !== tmp2.data_mode;
      }
      if (!tmp5) {
        continue;
      } else {
        if ("partial" === tmp2.data_mode) {
          let obj2 = compareGuildRolesAll;
          let filterRoleDeletesResult = obj2.filterRoleDeletes(tmp2.id, tmp4, tmp2.partial_updates.roles, tmp2.partial_updates.deleted_role_ids);
        } else {
          let obj = fromServerArrayAll;
          filterRoleDeletesResult = obj.fromServerArray(tmp2.id, tmp2.roles);
        }
        let setPartitionResult = getNullablePartition.setPartition(tmp2.id, filterRoleDeletesResult);
      }
    }
  },
  OVERLAY_INITIALIZE(arg0, clear) {
    clear.clear();
    for (const item10009 of tmp2) {
      let partitionKey = item10009.partitionKey;
      let obj = fromServerArrayAll;
      let setPartitionResult = arg1.setPartition(partitionKey, obj.fromSerializedPartition(partitionKey, item10009.values));
      continue;
    }
  },
  LOGOUT(arg0, clear) {
    clear.clear();
  },
  RESET_SOCKET(arg0, clear) {
    clear.clear();
  },
  CONNECTION_OPEN(arg0, getPartitionKeys) {
    ({ guilds, unavailableGuilds } = arg0);
    const set = new Set(guilds.map((item, index) => item.id));
    for (const item10017 of unavailableGuilds) {
      let addResult = set.add(item10017);
      continue;
    }
    const partitionKeys = getPartitionKeys.getPartitionKeys();
    for (const item10028 of partitionKeys) {
      if (!set.has(item10028)) {
        let removePartitionResult = arg1.removePartition(item10028);
      }
      continue;
    }
    const iter = guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let id = nextResult.id;
      let tmp8 = syncRoles(id, nextResult.roles, getPartitionKeys);
      let tmp10 = checkGuildRolesExist("connection_open", id, getPartitionKeys);
      continue;
    }
  },
  CACHE_LOADED(arg0, clear) {
    clear.clear();
    const iter = arg0.guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let id = nextResult.id;
      let obj = fromServerArrayAll;
      let setPartitionResult = clear.setPartition(id, obj.fromSerializedPartition(id, nextResult.roles));
      let tmp7 = checkGuildRolesExist("cache_loaded", id, clear);
      continue;
    }
  },
  CACHE_LOADED_LAZY(guilds, clear) {
    if (0 !== guilds.guilds.length) {
      clear.clear();
      guilds = guilds.guilds;
      const iter = guilds[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let id = nextResult.id;
        let obj = fromServerArrayAll;
        let setPartitionResult = clear.setPartition(id, obj.fromSerializedPartition(id, nextResult.roles));
        let tmp11 = checkGuildRolesExist("cache_loaded_lazy", id, clear);
        continue;
      }
    }
  },
  GUILD_CREATE(guild, setPartition) {
    ({ id, roles } = guild.guild);
    let tmp = "update" === roles.op;
    if (tmp) {
      tmp = 0 === roles.writes.length;
    }
    if (tmp) {
      tmp = 0 === roles.deletes.length;
    }
    if (!tmp) {
      setPartition.setPartition(id, fromServerArrayAll.fromSyncOperation(id, roles, setPartition.getPartition(id)));
    }
    if (0 === setPartition.partitionLength(id)) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      error = new Error("Guild data was missing from store for guild " + id + ": missing roles. (phase: " + "guild_create" + ")");
      throw error;
    }
  },
  GUILD_UPDATE(guild, setPartition) {
    guild = guild.guild;
    const id = guild.id;
    setPartition.setPartition(id, fromServerArrayAll.fromServerArray(id, guild.roles));
  },
  GUILD_DELETE(guild, removePartition) {
    if (!guild.guild.unavailable) {
      removePartition.removePartition(tmp);
    }
  },
  GUILD_ROLE_CREATE(guildId, setRecord) {
    setRecord.setRecord(guildId.guildId, guildId.role.id, fromServerArrayAll.fromServer(guildId.guildId, guildId.role));
  },
  GUILD_ROLE_UPDATE(guildId, setRecord) {
    setRecord.setRecord(guildId.guildId, guildId.role.id, fromServerArrayAll.fromServer(guildId.guildId, guildId.role));
  },
  GUILD_ROLE_DELETE(guildId, removeRecord) {
    removeRecord.removeRecord(guildId.guildId, guildId.roleId);
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
const result = obj132.fileFinishedImporting("stores/GuildRoleStore.tsx");

export default guildRoleStore;