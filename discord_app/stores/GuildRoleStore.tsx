// === Module 2106: GuildRoleStore ===

// Module 2106 (GuildRoleStore)
import libdiscoreExperiments from "libdiscoreExperiments" /* 559 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import PlainRecord from "PlainRecord" /* 2067 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import LibdiscoreStore2 from "LibdiscoreStore" /* 2075 */;
import GuildRoleRecord from "GuildRoleRecord" /* 2107 */;
import GuildRoleRecordUtilsAll from "GuildRoleRecordUtils" /* 2108 */;
import GuildRoleUtilsAll from "GuildRoleUtils" /* 2110 */;
import size from "module_2" /* 2 */;

let set;

function createGuildRoleRecordFromRust(permissions) {
  let deserializer;
  const obj = { permissions: deserializer.deserialize(permissions.permissions) };
  const merged = Object.assign(permissions);
  deserializer = BigFlagUtilsAll;
  return constructInPlace(GuildRoleRecordTypeTag, obj);
}
function syncRoles(id, roles, setPartition) {
  const tmp = "update" === roles.op && 0 === roles.writes.length && 0 === roles.deletes.length;
  if (!tmp) {
    setPartition = setPartition.setPartition;
    const obj = GuildRoleRecordUtilsAll;
    setPartition(id, obj.fromSyncOperation(id, roles, setPartition.getPartition(id)));
  }
}
function checkGuildRolesExist(cache_loaded, id, partitionLength) {
  if (0 === partitionLength.partitionLength(id)) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const self = this;
    const self2 = this;
    const error = new Error("Guild data was missing from store for guild " + id + ": missing roles. (phase: " + cache_loaded + ")");
    throw error;
  }
}
const constructInPlace = PlainRecord.constructInPlace;
const LibdiscoreStore = LibdiscoreStore2.LibdiscoreStore;
const getGuildEveryoneRoleId = GuildRecord.getGuildEveryoneRoleId;
const GuildRoleRecordTypeTag = GuildRoleRecord.GuildRoleRecordTypeTag;
class GuildRoleStore extends LibdiscoreStore {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.database = applyArgumentsResult.addKKVDatabase("guild_roles", createGuildRoleRecordFromRust);
    const database = applyArgumentsResult.database;
    applyArgumentsResult.getSortedRoles = database.memoizedPartition((arg0, arg1) => {
      const obj = GuildRoleUtilsAll;
      return obj.sortGuildRoleRecords(Object.values(arg1));
    });
    const database2 = applyArgumentsResult.database;
    applyArgumentsResult.getRolesSnapshot = database2.memoizedPartition((arg0, arg1) => {
      const obj = {};
      const merged = Object.assign(arg1);
      return obj;
    });
    return applyArgumentsResult;
  }
  stateWrapper() {
    return this.database;
  }
  serializeAllGuildRoles() {
    const database = this.database;
    return database.mapPartitions(GuildRoleRecordUtilsAll.toSerializedPartition);
  }
  getUnsafeMutableRoles(id) {
    const database = this.database;
    return database.getPartition(id);
  }
  getManyRoles(guildId, selectedRoleIds) {
    const database = this.database;
    return database.getManyRecords(guildId, selectedRoleIds);
  }
  getRole(id, guildEveryoneRoleId) {
    const database = this.database;
    return database.getRecord(id, guildEveryoneRoleId);
  }
  getNumRoles(id) {
    const database = this.database;
    return database.partitionLength(id);
  }
  getEveryoneRole(guild) {
    const database = this.database;
    const record = database.getRecord(guild.id, getGuildEveryoneRoleId(guild));
    if (null == record) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error("Guild does not have an @everyone role");
      throw error;
    } else {
      return record;
    }
  }
  partitionVersion(arg0) {
    const database = this.database;
    return database.partitionVersion(arg0);
  }
}
const prototype = GuildRoleStore.prototype;
GuildRoleStore.displayName = "GuildRoleStore";
let obj = {
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
      if (tmp5) {
        let filterRoleDeletesResult;
        let setPartition = getNullablePartition.setPartition;
        let id = tmp2.id;
        if ("partial" === tmp2.data_mode) {
          let obj2 = GuildRoleUtilsAll;
          filterRoleDeletesResult = obj2.filterRoleDeletes(tmp2.id, tmp4, tmp2.partial_updates.roles, tmp2.partial_updates.deleted_role_ids);
        } else {
          let obj = GuildRoleRecordUtilsAll;
          filterRoleDeletesResult = obj.fromServerArray(tmp2.id, tmp2.roles);
        }
        let setPartitionResult = setPartition(id, filterRoleDeletesResult);
      }
      continue;
    }
  },
  OVERLAY_INITIALIZE(serializedGuildRoles, clear) {
    clear.clear();
    serializedGuildRoles = serializedGuildRoles.serializedGuildRoles;
    for (const item10009 of serializedGuildRoles) {
      let partitionKey = item10009.partitionKey;
      let values = item10009.values;
      let setPartition = clear.setPartition;
      let obj = GuildRoleRecordUtilsAll;
      let setPartitionResult = setPartition(partitionKey, obj.fromSerializedPartition(partitionKey, values));
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
    let guilds;
    let unavailableGuilds;
    ({ guilds, unavailableGuilds } = arg0);
    set = new Set(guilds.map((id) => id.id));
    for (const item10017 of unavailableGuilds) {
      let addResult = set.add(item10017);
      continue;
    }
    const partitionKeys = getPartitionKeys.getPartitionKeys();
    for (const item10028 of partitionKeys) {
      if (!set.has(item10028)) {
        let removePartitionResult = getPartitionKeys.removePartition(item10028);
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
  CACHE_LOADED(guilds, clear) {
    guilds = guilds.guilds;
    clear.clear();
    const iter = guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let id = nextResult.id;
      let roles = nextResult.roles;
      let setPartition = clear.setPartition;
      let obj = GuildRoleRecordUtilsAll;
      let setPartitionResult = setPartition(id, obj.fromSerializedPartition(id, roles));
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
        let roles = nextResult.roles;
        let setPartition = clear.setPartition;
        let obj = GuildRoleRecordUtilsAll;
        let setPartitionResult = setPartition(id, obj.fromSerializedPartition(id, roles));
        let tmp11 = checkGuildRolesExist("cache_loaded_lazy", id, clear);
        continue;
      }
    }
  },
  GUILD_CREATE(guild, setPartition) {
    let id;
    let roles;
    ({ id, roles } = guild.guild);
    const tmp = "update" === roles.op && 0 === roles.writes.length && 0 === roles.deletes.length;
    if (!tmp) {
      setPartition = setPartition.setPartition;
      const obj = GuildRoleRecordUtilsAll;
      setPartition(id, obj.fromSyncOperation(id, roles, setPartition.getPartition(id)));
    }
    if (0 === setPartition.partitionLength(id)) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const self = this;
      const self2 = this;
      const error = new Error("Guild data was missing from store for guild " + id + ": missing roles. (phase: " + "guild_create" + ")");
      throw error;
    }
  },
  GUILD_UPDATE(guild, setPartition) {
    guild = guild.guild;
    const id = guild.id;
    const roles = guild.roles;
    setPartition = setPartition.setPartition;
    const obj = GuildRoleRecordUtilsAll;
    setPartition(id, obj.fromServerArray(id, roles));
  },
  GUILD_DELETE(guild, removePartition) {
    if (!guild.guild.unavailable) {
      removePartition.removePartition(tmp);
    }
  },
  GUILD_ROLE_CREATE(guildId, setRecord) {
    setRecord = setRecord.setRecord;
    guildId = guildId.guildId;
    const id = guildId.role.id;
    const obj = GuildRoleRecordUtilsAll;
    setRecord(guildId, id, obj.fromServer(guildId.guildId, guildId.role));
  },
  GUILD_ROLE_UPDATE(guildId, setRecord) {
    setRecord = setRecord.setRecord;
    guildId = guildId.guildId;
    const id = guildId.role.id;
    const obj = GuildRoleRecordUtilsAll;
    setRecord(guildId, id, obj.fromServer(guildId.guildId, guildId.role));
  },
  GUILD_ROLE_DELETE(guildId, removeRecord) {
    removeRecord.removeRecord(guildId.guildId, guildId.roleId);
  }
};
const LibdiscoreBatchStoreRefactorExperiment = libdiscoreExperiments.LibdiscoreBatchStoreRefactorExperiment;
const guildRoleStore = new GuildRoleStore(obj, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
const result = size.fileFinishedImporting("stores/GuildRoleStore.tsx");

export default guildRoleStore;