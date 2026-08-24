// discord_app/modules/app_database/DatabaseDaos.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../../stores/AuthenticationStore.tsx";

const require = arg1;
const items = [require("module_1956").TableId.KvCache, "guild_basic_channels"];
const items1 = [items, ];
const items2 = [require("module_1956").TableId.KvCache, "basic_channels_stale"];
items1[1] = items2;
const Store = initializeDefault.Store;
class DatabaseDaos extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    f71721 = applyArgumentsResult;
    applyArgumentsResult.database = function database(arg0) {
      let id = arg0;
      if (arg0 == null) {
        id = id.getId();
      }
      return callback(1971).database(id);
    };
    f71721 = (database) => {
      const guildEntityDao = new f71721(1956).GuildEntityDao("guild_channels", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const guildDao = new f71721(1956).GuildDao("guild_channels_temp", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const dao = new f71721(1956).Dao("basic_channels", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const dao = new f71721(1956).Dao("basic_channels_synced", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const dao = new f71721(1956).Dao("cache", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const dao = new f71721(1956).Dao("force_resync_version", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const guildEntityDao = new f71721(1956).GuildEntityDao("guild_emojis", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const entityDao = new f71721(1956).EntityDao("guilds", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const entityDao = new f71721(1956).EntityDao("guilds_requiring_deleted_ids_sync", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const entityDao = new f71721(1956).EntityDao("guilds_requiring_channel_sync", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const messageDao = new f71721(1956).MessageDao("messages", f71721(1956).TableId.Messages, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const guildEntityDao = new f71721(1956).GuildEntityDao("guild_stickers", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const entityDao = new f71721(1956).EntityDao("guild_versions", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const entityDao = new f71721(1956).EntityDao("non_guild_versions", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const entityDao = new f71721(1956).EntityDao("user_settings", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const dao = new f71721(1956).Dao("read_states", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const dao = new f71721(1956).Dao("user_guild_settings", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    f71721 = (database) => {
      const entityDao = new f71721(1956).EntityDao("user_search_items", f71721(1956).TableId.KvCache, database);
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
        tmp5 = f71721(databaseResult);
      }
      return tmp5;
    };
    applyArgumentsResult.channelsTransaction = function channelsTransaction(database) {
      return f71721.channels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.channelsTempTransaction = function channelsTempTransaction(database) {
      return f71721.channelsTemp(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.basicChannelsTransaction = function basicChannelsTransaction(database) {
      return f71721.basicChannels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.syncedBasicChannelsTransaction = function syncedBasicChannelsTransaction(database) {
      return f71721.syncedBasicChannels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.cacheTransaction = function cacheTransaction(database) {
      return f71721.cache(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.forceResyncVersionTransaction = function forceResyncVersionTransaction(database) {
      return f71721.forceResyncVersion(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.emojisTransaction = function emojisTransaction(database) {
      return f71721.emojis(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildsTransaction = function guildsTransaction(database) {
      return f71721.guilds(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.messagesTransaction = function messagesTransaction(database) {
      return f71721.messages(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.stickersTransaction = function stickersTransaction(database) {
      return f71721.stickers(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildVersionsTransaction = function guildVersionsTransaction(database) {
      return f71721.guildVersions(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.nonGuildVersionsTransaction = function nonGuildVersionsTransaction(database) {
      return f71721.nonGuildVersions(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.userSettingsTransaction = function userSettingsTransaction(database) {
      return f71721.userSettings(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.readStatesTransaction = function readStatesTransaction(database) {
      const states = f71721.readStates(database.database);
      return states.upgradeTransaction(database);
    };
    applyArgumentsResult.userGuildSettingsTransaction = function userGuildSettingsTransaction(database) {
      return f71721.userGuildSettings(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSyncTransaction = function guildsRequiringDeletedIdsSyncTransaction(database) {
      const result = f71721.guildsRequiringDeletedIdsSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringChannelSyncTransaction = function guildsRequiringChannelSyncTransaction(database) {
      const result = f71721.guildsRequiringChannelSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.userSearchItemsTransaction = function userSearchItemsTransaction(database) {
      return f71721.userSearchItems(database.database).upgradeTransaction(database);
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