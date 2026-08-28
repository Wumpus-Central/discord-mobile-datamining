// discord_app/modules/app_database/DatabaseDaos.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../../Dispatcher.tsx";
import closure_3 from "../../stores/AuthenticationStore.tsx";

const require = arg1;
const items = [require("../../../discord_common/js/packages/kv-storage/js/index.tsx").TableId.KvCache, "guild_basic_channels"];
const items1 = [items, ];
const items2 = [require("../../../discord_common/js/packages/kv-storage/js/index.tsx").TableId.KvCache, "basic_channels_stale"];
items1[1] = items2;
const Store = initializeDefault.Store;
class DatabaseDaos extends Store {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    f72830 = applyArgumentsResult;
    applyArgumentsResult.database = function database(arg0) {
      let id = arg0;
      if (arg0 == null) {
        id = id.getId();
      }
      return callback(1974).database(id);
    };
    f72830 = (database) => {
      const guildEntityDao = new f72830(1958).GuildEntityDao("guild_channels", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const guildDao = new f72830(1958).GuildDao("guild_channels_temp", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const dao = new f72830(1958).Dao("basic_channels", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const dao = new f72830(1958).Dao("basic_channels_synced", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const dao = new f72830(1958).Dao("cache", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const dao = new f72830(1958).Dao("force_resync_version", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const guildEntityDao = new f72830(1958).GuildEntityDao("guild_emojis", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const entityDao = new f72830(1958).EntityDao("guilds", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const entityDao = new f72830(1958).EntityDao("guilds_requiring_deleted_ids_sync", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const entityDao = new f72830(1958).EntityDao("guilds_requiring_channel_sync", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const messageDao = new f72830(1958).MessageDao("messages", f72830(1958).TableId.Messages, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const guildEntityDao = new f72830(1958).GuildEntityDao("guild_stickers", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const entityDao = new f72830(1958).EntityDao("guild_versions", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const entityDao = new f72830(1958).EntityDao("non_guild_versions", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const entityDao = new f72830(1958).EntityDao("user_settings", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const dao = new f72830(1958).Dao("read_states", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const dao = new f72830(1958).Dao("user_guild_settings", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    f72830 = (database) => {
      const entityDao = new f72830(1958).EntityDao("user_search_items", f72830(1958).TableId.KvCache, database);
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
        tmp5 = f72830(databaseResult);
      }
      return tmp5;
    };
    applyArgumentsResult.channelsTransaction = function channelsTransaction(database) {
      return f72830.channels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.channelsTempTransaction = function channelsTempTransaction(database) {
      return f72830.channelsTemp(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.basicChannelsTransaction = function basicChannelsTransaction(database) {
      return f72830.basicChannels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.syncedBasicChannelsTransaction = function syncedBasicChannelsTransaction(database) {
      return f72830.syncedBasicChannels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.cacheTransaction = function cacheTransaction(database) {
      return f72830.cache(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.forceResyncVersionTransaction = function forceResyncVersionTransaction(database) {
      return f72830.forceResyncVersion(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.emojisTransaction = function emojisTransaction(database) {
      return f72830.emojis(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildsTransaction = function guildsTransaction(database) {
      return f72830.guilds(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.messagesTransaction = function messagesTransaction(database) {
      return f72830.messages(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.stickersTransaction = function stickersTransaction(database) {
      return f72830.stickers(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildVersionsTransaction = function guildVersionsTransaction(database) {
      return f72830.guildVersions(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.nonGuildVersionsTransaction = function nonGuildVersionsTransaction(database) {
      return f72830.nonGuildVersions(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.userSettingsTransaction = function userSettingsTransaction(database) {
      return f72830.userSettings(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.readStatesTransaction = function readStatesTransaction(database) {
      const states = f72830.readStates(database.database);
      return states.upgradeTransaction(database);
    };
    applyArgumentsResult.userGuildSettingsTransaction = function userGuildSettingsTransaction(database) {
      return f72830.userGuildSettings(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSyncTransaction = function guildsRequiringDeletedIdsSyncTransaction(database) {
      const result = f72830.guildsRequiringDeletedIdsSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringChannelSyncTransaction = function guildsRequiringChannelSyncTransaction(database) {
      const result = f72830.guildsRequiringChannelSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.userSearchItemsTransaction = function userSearchItemsTransaction(database) {
      return f72830.userSearchItems(database.database).upgradeTransaction(database);
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