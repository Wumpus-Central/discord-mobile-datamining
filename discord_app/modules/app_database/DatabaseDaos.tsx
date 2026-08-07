// discord_app/modules/app_database/DatabaseDaos.tsx
import fetchFingerprint from "fetchFingerprint";
import { Store } from "initialize";

const require = arg1;
const items = [require("module_1937").TableId.KvCache, "guild_basic_channels"];
const items1 = [items, ];
const items2 = [require("module_1937").TableId.KvCache, "basic_channels_stale"];
items1[1] = items2;
class DatabaseDaos extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    f71107 = applyArgumentsResult;
    applyArgumentsResult.database = function database(arg0) {
      let id = arg0;
      if (arg0 == null) {
        id = id.getId();
      }
      return callback(1952).database(id);
    };
    f71107 = (database) => {
      const guildEntityDao = new f71107(1937).GuildEntityDao("guild_channels", f71107(1937).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.channels = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const guildDao = new f71107(1937).GuildDao("guild_channels_temp", f71107(1937).TableId.KvCache, database);
      return guildDao;
    };
    applyArgumentsResult.channelsTemp = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const dao = new f71107(1937).Dao("basic_channels", f71107(1937).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.basicChannels = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const dao = new f71107(1937).Dao("basic_channels_synced", f71107(1937).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.syncedBasicChannels = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const dao = new f71107(1937).Dao("cache", f71107(1937).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.cache = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const dao = new f71107(1937).Dao("force_resync_version", f71107(1937).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.forceResyncVersion = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const guildEntityDao = new f71107(1937).GuildEntityDao("guild_emojis", f71107(1937).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.emojis = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const entityDao = new f71107(1937).EntityDao("guilds", f71107(1937).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guilds = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const entityDao = new f71107(1937).EntityDao("guilds_requiring_deleted_ids_sync", f71107(1937).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSync = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const entityDao = new f71107(1937).EntityDao("guilds_requiring_channel_sync", f71107(1937).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringChannelSync = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const messageDao = new f71107(1937).MessageDao("messages", f71107(1937).TableId.Messages, database);
      return messageDao;
    };
    applyArgumentsResult.messages = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const guildEntityDao = new f71107(1937).GuildEntityDao("guild_stickers", f71107(1937).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.stickers = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const entityDao = new f71107(1937).EntityDao("guild_versions", f71107(1937).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildVersions = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const entityDao = new f71107(1937).EntityDao("non_guild_versions", f71107(1937).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.nonGuildVersions = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const entityDao = new f71107(1937).EntityDao("user_settings", f71107(1937).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.userSettings = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const dao = new f71107(1937).Dao("read_states", f71107(1937).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.readStates = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const dao = new f71107(1937).Dao("user_guild_settings", f71107(1937).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.userGuildSettings = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    f71107 = (database) => {
      const entityDao = new f71107(1937).EntityDao("user_search_items", f71107(1937).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.userSearchItems = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = outer1_1(outer1_2[3]).database(outer1_3.getId());
        const obj = outer1_1(outer1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f71107(databaseResult);
      }
      return tmp5;
    };
    applyArgumentsResult.channelsTransaction = function channelsTransaction(database) {
      return f71107.channels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.channelsTempTransaction = function channelsTempTransaction(database) {
      return f71107.channelsTemp(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.basicChannelsTransaction = function basicChannelsTransaction(database) {
      return f71107.basicChannels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.syncedBasicChannelsTransaction = function syncedBasicChannelsTransaction(database) {
      return f71107.syncedBasicChannels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.cacheTransaction = function cacheTransaction(database) {
      return f71107.cache(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.forceResyncVersionTransaction = function forceResyncVersionTransaction(database) {
      return f71107.forceResyncVersion(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.emojisTransaction = function emojisTransaction(database) {
      return f71107.emojis(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildsTransaction = function guildsTransaction(database) {
      return f71107.guilds(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.messagesTransaction = function messagesTransaction(database) {
      return f71107.messages(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.stickersTransaction = function stickersTransaction(database) {
      return f71107.stickers(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildVersionsTransaction = function guildVersionsTransaction(database) {
      return f71107.guildVersions(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.nonGuildVersionsTransaction = function nonGuildVersionsTransaction(database) {
      return f71107.nonGuildVersions(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.userSettingsTransaction = function userSettingsTransaction(database) {
      return f71107.userSettings(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.readStatesTransaction = function readStatesTransaction(database) {
      const states = f71107.readStates(database.database);
      return states.upgradeTransaction(database);
    };
    applyArgumentsResult.userGuildSettingsTransaction = function userGuildSettingsTransaction(database) {
      return f71107.userGuildSettings(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSyncTransaction = function guildsRequiringDeletedIdsSyncTransaction(database) {
      const result = f71107.guildsRequiringDeletedIdsSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringChannelSyncTransaction = function guildsRequiringChannelSyncTransaction(database) {
      const result = f71107.guildsRequiringChannelSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.userSearchItemsTransaction = function userSearchItemsTransaction(database) {
      return f71107.userSearchItems(database.database).upgradeTransaction(database);
    };
    return applyArgumentsResult;
  }
}
DatabaseDaos.prototype["initialize"] = function initialize() {
  this.waitFor(fetchFingerprint);
};
const databaseDaos = new DatabaseDaos(require("dispatcher"), {});
let result = require("initialize").fileFinishedImporting("modules/app_database/DatabaseDaos.tsx");

export default databaseDaos;
export const DEPRECATED_KEYSPACES = items1;