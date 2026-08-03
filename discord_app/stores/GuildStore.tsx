// === Module 1862: createGuildRecordFromRust ===

// Module 1862 (createGuildRecordFromRust)
import isValueEqual from "isValueEqual";
import { LibdiscoreStore } from "identity";
import GuildNSFWContentLevel from "GuildNSFWContentLevel";
import fetchFingerprint from "fetchFingerprint";
import { FAVORITES_GUILD_RECORD } from "date";
import { LibdiscoreBatchStoreRefactorExperiment } from "items";

let c4;
let c5;
let closure_6;
let error;
let metroImportAll;
function createGuildRecordFromRust(features) {
  const obj = {};
  const merged = Object.assign(features);
  obj.features = require(1414) /* areSetsEqual */.toSetInplace(features.features);
  let date = null;
  if (null != features.joinedAt) {
    const _Date = Date;
    date = new Date(features.joinedAt);
  }
  obj.joinedAt = date;
  let date1 = null;
  if (null != features.premiumProgressBarEnabledUserUpdatedAt) {
    const _Date2 = Date;
    date1 = new Date(features.premiumProgressBarEnabledUserUpdatedAt);
  }
  obj.premiumProgressBarEnabledUserUpdatedAt = date1;
  return closure_4(closure_6, obj);
}
({ constructInPlace: c4, set: c5 } = isValueEqual);
({ GuildRecordTypeTag: closure_6, updateJoinedAt: error, updateGameApplications: metroImportAll } = GuildNSFWContentLevel);
class GuildStore extends LibdiscoreStore {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.database = applyArgumentsResult.addKVDatabase("guilds", createGuildRecordFromRust);
    applyArgumentsResult.getGuild = function getGuild(guildId) {
      if (null != guildId) {
        if (obj.isFavoritesGuildId(guildId)) {
          let value = outer1_10;
        } else {
          const database = applyArgumentsResult.database;
          value = database.get(guildId);
        }
        return value;
      }
    };
    database = applyArgumentsResult.database;
    applyArgumentsResult.getGuilds = database.memoized((arg0) => {
      const merged = Object.assign(arg0);
      return {};
    });
    database2 = applyArgumentsResult.database;
    applyArgumentsResult.getGuildsArray = database2.memoized((arg0) => Object.values(arg0));
    database3 = applyArgumentsResult.database;
    applyArgumentsResult.getGuildIds = database3.memoized((arg0) => callback(table[7]).keys(arg0));
    return applyArgumentsResult;
  }
}
const prototype = GuildStore.prototype;
prototype["stateWrapper"] = function stateWrapper() {
  return this.database;
};
prototype["getGuildCount"] = function getGuildCount() {
  const database = this.database;
  return database.length();
};
GuildStore.displayName = "GuildStore";
const guildStore = new GuildStore({
  BACKGROUND_SYNC(arg0, get) {
    const iter = arg0.guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      let value = get.get(nextResult.id);
      let tmp5 = null != value;
      let tmp4 = value;
      if (tmp5) {
        let tmp6 = nextResult;
        tmp5 = "unavailable" !== tmp2.data_mode;
      }
      if (tmp5) {
        let tmp7 = nextResult;
        let tmp8 = importAll;
        let tmp9 = dependencyMap;
        let obj = importAll(1411);
        let tmp10 = value;
        let result = get.set(tmp2.id, obj.fromBackgroundSync(tmp2, tmp4));
      }
      continue;
    }
  },
  LOGOUT(arg0, clear) {
    clear.clear();
  },
  RESET_SOCKET(arg0, clear) {
    clear.clear();
  },
  CONNECTION_OPEN(arg0, getAllRecords) {
    let guilds;
    let unavailableGuilds;
    ({ guilds, unavailableGuilds } = arg0);
    const allRecords = getAllRecords.getAllRecords();
    const set = new Set(Object.keys(allRecords));
    const iter = guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      let deleteResult = set.delete(nextResult.id);
      if (null == nextResult.properties) {
        let tmp6 = nextResult;
        if (null == allRecords[tmp4.id]) {
          let _Error = Error;
          let tmp11 = new.target;
          let str = "Guild data was missing from store, but hash was still available.";
          let tmp12 = new.target;
          let error = new Error("Guild data was missing from store, but hash was still available.");
          let tmp14 = error;
          throw error;
        }
      }
      let tmp7 = nextResult;
      let tmp8 = importAll;
      let tmp9 = dependencyMap;
      let obj2 = importAll(1411);
      let result = getAllRecords.set(tmp4.id, obj2.fromServer(tmp4, allRecords[tmp4.id]));
      continue;
    }
    for (const item10053 of unavailableGuilds) {
      let deleteResult1 = set.delete(item10053);
      continue;
    }
    for (const item10061 of set) {
      let removeResult = arg1.remove(item10061);
      continue;
    }
  },
  OVERLAY_INITIALIZE(guilds, clear) {
    let additionalFields;
    let properties;
    guilds = guilds.guilds;
    clear.clear();
    if (null != guilds) {
      const iter = guilds[Symbol.iterator]();
      while (iter !== undefined) {
        ({ properties, additionalFields } = nextResult);
        let tmp5 = additionalFields;
        let tmp6 = importAll;
        let tmp7 = dependencyMap;
        let obj = importAll(1411);
        let date = null;
        if (null != additionalFields.joinedAt) {
          let _Date = Date;
          let tmp9 = additionalFields;
          let tmp10 = new.target;
          let tmp11 = new.target;
          date = new Date(tmp5.joinedAt);
        }
        obj = { joinedAt: null, premiumSubscriberCount: null };
        obj[0] = date;
        let tmp12 = additionalFields;
        obj[1] = tmp5.premiumSubscriberCount;
        let result = clear.set(properties.id, obj.fromGuildPropertiesWithAdditionalFields(properties, obj));
        continue;
      }
      nextResult = iter.next();
    }
  },
  CACHE_LOADED(arg0, clear) {
    clear.clear();
    for (const item10009 of tmp) {
      let tmp3 = importAll;
      let tmp4 = dependencyMap;
      let obj = importAll(1411);
      let result = arg1.set(item10009.id, obj.fromSerializedGuildRecord(item10009));
      continue;
    }
  },
  CACHE_LOADED_LAZY(guilds, clear) {
    guilds = guilds.guilds;
    if (0 !== guilds.length) {
      clear.clear();
      for (const item10011 of guilds) {
        let tmp5 = importAll;
        let tmp6 = dependencyMap;
        let obj = importAll(1411);
        let result = arg1.set(item10011.id, obj.fromSerializedGuildRecord(item10011));
        continue;
      }
    }
  },
  GUILD_CREATE(guild, get) {
    guild = guild.guild;
    const value = get.get(guild.id);
    if (null == guild.properties) {
      if (null == value) {
        const _Error = Error;
        const error = new Error("Guild data was missing from store, but hash was still available.");
        throw error;
      }
    }
    const result = get.set(guild.id, importAll(1411).fromServer(guild, value));
  },
  GUILD_UPDATE(guild, get) {
    guild = guild.guild;
    const value = get.get(guild.id);
    const result = get.set(guild.id, importAll(1411).fromGuild(guild, value));
  },
  GUILD_THEME_PREVIEW_SAVE_SUCCESS(guildId, get) {
    guildId = guildId.guildId;
    const value = get.get(guildId);
    if (null != value) {
      const result = get.set(guildId, callback(value, "guildTheme", guildId.guildTheme));
    }
  },
  GUILD_SETTINGS_GUILD_THEME_SAVE_SUCCESS(guildId, get) {
    guildId = guildId.guildId;
    const value = get.get(guildId);
    if (null != value) {
      const result = get.set(guildId, callback(value, "guildTheme", guildId.guildTheme));
    }
  },
  GUILD_DELETE(guild, remove) {
    guild = guild.guild;
    if (!guild.unavailable) {
      remove.remove(guild.id);
    }
  },
  GUILD_MEMBER_ADD(user, get) {
    let guildId;
    let joinedAt;
    ({ guildId, joinedAt } = user);
    id = id.getId();
    const value = get.get(guildId);
    if (id === user.user.id) {
      if (null != value) {
        let date = joinedAt;
        if (typeof joinedAt !== "ge") {
          const _Date = Date;
          date = new Date(joinedAt);
        }
        if (tmp5) {
          const result = get.set(guildId, callback2(value, date));
        }
        tmp5 = date !== value.joinedAt && null != date;
      }
    }
  },
  GUILD_OFFICIAL_GAME_APPLICATIONS_UPDATE(guildId, get) {
    guildId = guildId.guildId;
    const value = get.get(guildId);
    if (null != value) {
      const result = get.set(guildId, callback3(value, guildId.gameApplicationIds));
    }
  }
}, LibdiscoreBatchStoreRefactorExperiment.getCachedBridgedStoreMode());
let result = require("GuildNSFWContentLevel").fileFinishedImporting("stores/GuildStore.tsx");

export default guildStore;