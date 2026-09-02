// discord_app/modules/app_database/DatabaseDaos.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../../stores/AuthenticationStore.tsx";

const require = arg1;
const items = [
  require("../../../discord_common/js/packages/kv-storage/js/index.tsx").TableId.KvCache,
  "guild_basic_channels",
];
const items1 = [items];
const items2 = [
  require("../../../discord_common/js/packages/kv-storage/js/index.tsx").TableId.KvCache,
  "basic_channels_stale",
];
items1[1] = items2;
const Store = initializeDefault.Store;
class DatabaseDaos extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    f73943 = applyArgumentsResult;
    applyArgumentsResult.database = function database(arg0) {
      let id = arg0;
      if (arg0 == null) {
        id = id.getId();
      }
      return callback(1972).database(id);
    };
    f73943 = (database) => {
      const guildEntityDao = new f73943(1956).GuildEntityDao("guild_channels", f73943(1956).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.channels = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const guildDao = new f73943(1956).GuildDao("guild_channels_temp", f73943(1956).TableId.KvCache, database);
      return guildDao;
    };
    applyArgumentsResult.channelsTemp = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const dao = new f73943(1956).Dao("basic_channels", f73943(1956).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.basicChannels = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const dao = new f73943(1956).Dao("basic_channels_synced", f73943(1956).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.syncedBasicChannels = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const dao = new f73943(1956).Dao("cache", f73943(1956).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.cache = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const dao = new f73943(1956).Dao("force_resync_version", f73943(1956).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.forceResyncVersion = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const guildEntityDao = new f73943(1956).GuildEntityDao("guild_emojis", f73943(1956).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.emojis = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const entityDao = new f73943(1956).EntityDao("guilds", f73943(1956).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guilds = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const entityDao = new f73943(1956).EntityDao(
        "guilds_requiring_deleted_ids_sync",
        f73943(1956).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSync = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const entityDao = new f73943(1956).EntityDao(
        "guilds_requiring_channel_sync",
        f73943(1956).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringChannelSync = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const messageDao = new f73943(1956).MessageDao("messages", f73943(1956).TableId.Messages, database);
      return messageDao;
    };
    applyArgumentsResult.messages = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const guildEntityDao = new f73943(1956).GuildEntityDao("guild_stickers", f73943(1956).TableId.KvCache, database);
      return guildEntityDao;
    };
    applyArgumentsResult.stickers = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const entityDao = new f73943(1956).EntityDao("guild_versions", f73943(1956).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.guildVersions = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const entityDao = new f73943(1956).EntityDao("non_guild_versions", f73943(1956).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.nonGuildVersions = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const entityDao = new f73943(1956).EntityDao("user_settings", f73943(1956).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.userSettings = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const dao = new f73943(1956).Dao("read_states", f73943(1956).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.readStates = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const dao = new f73943(1956).Dao("user_guild_settings", f73943(1956).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.userGuildSettings = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    f73943 = (database) => {
      const entityDao = new f73943(1956).EntityDao("user_search_items", f73943(1956).TableId.KvCache, database);
      return entityDao;
    };
    applyArgumentsResult.userSearchItems = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        databaseResult = closure_1_1(closure_1_2[3]).database(closure_1_3.getId());
        const obj = closure_1_1(closure_1_2[3]);
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f73943(databaseResult);
      }
      return tmp5;
    };
    applyArgumentsResult.channelsTransaction = function channelsTransaction(database) {
      return f73943.channels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.channelsTempTransaction = function channelsTempTransaction(database) {
      return f73943.channelsTemp(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.basicChannelsTransaction = function basicChannelsTransaction(database) {
      return f73943.basicChannels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.syncedBasicChannelsTransaction = function syncedBasicChannelsTransaction(database) {
      return f73943.syncedBasicChannels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.cacheTransaction = function cacheTransaction(database) {
      return f73943.cache(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.forceResyncVersionTransaction = function forceResyncVersionTransaction(database) {
      return f73943.forceResyncVersion(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.emojisTransaction = function emojisTransaction(database) {
      return f73943.emojis(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildsTransaction = function guildsTransaction(database) {
      return f73943.guilds(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.messagesTransaction = function messagesTransaction(database) {
      return f73943.messages(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.stickersTransaction = function stickersTransaction(database) {
      return f73943.stickers(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildVersionsTransaction = function guildVersionsTransaction(database) {
      return f73943.guildVersions(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.nonGuildVersionsTransaction = function nonGuildVersionsTransaction(database) {
      return f73943.nonGuildVersions(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.userSettingsTransaction = function userSettingsTransaction(database) {
      return f73943.userSettings(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.readStatesTransaction = function readStatesTransaction(database) {
      const states = f73943.readStates(database.database);
      return states.upgradeTransaction(database);
    };
    applyArgumentsResult.userGuildSettingsTransaction = function userGuildSettingsTransaction(database) {
      return f73943.userGuildSettings(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSyncTransaction = function guildsRequiringDeletedIdsSyncTransaction(
      database,
    ) {
      const result = f73943.guildsRequiringDeletedIdsSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringChannelSyncTransaction = function guildsRequiringChannelSyncTransaction(
      database,
    ) {
      const result = f73943.guildsRequiringChannelSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.userSearchItemsTransaction = function userSearchItemsTransaction(database) {
      return f73943.userSearchItems(database.database).upgradeTransaction(database);
    };
    return applyArgumentsResult;
  }
}
DatabaseDaos.prototype["initialize"] = function initialize() {
  this.waitFor(closure_3);
};
const databaseDaos = new DatabaseDaos(dispatcherDefault, {});
let result = require("set").fileFinishedImporting("modules/app_database/DatabaseDaos.tsx");

export default databaseDaos;
export const DEPRECATED_KEYSPACES = items1;
