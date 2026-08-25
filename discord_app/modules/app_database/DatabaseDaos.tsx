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
    f72393 = applyArgumentsResult;
    applyArgumentsResult.database = function database(arg0) {
      let id = arg0;
      if (arg0 == null) {
        id = id.getId();
      }
      return callback(1973).database(id);
    };
    f72393 = (database) => {
      const guildEntityDao = new f72393(1957).GuildEntityDao("guild_channels", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const guildDao = new f72393(1957).GuildDao("guild_channels_temp", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const dao = new f72393(1957).Dao("basic_channels", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const dao = new f72393(1957).Dao("basic_channels_synced", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const dao = new f72393(1957).Dao("cache", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const dao = new f72393(1957).Dao("force_resync_version", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const guildEntityDao = new f72393(1957).GuildEntityDao("guild_emojis", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const entityDao = new f72393(1957).EntityDao("guilds", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const entityDao = new f72393(1957).EntityDao("guilds_requiring_deleted_ids_sync", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const entityDao = new f72393(1957).EntityDao("guilds_requiring_channel_sync", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const messageDao = new f72393(1957).MessageDao("messages", f72393(1957).TableId.Messages, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const guildEntityDao = new f72393(1957).GuildEntityDao("guild_stickers", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const entityDao = new f72393(1957).EntityDao("guild_versions", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const entityDao = new f72393(1957).EntityDao("non_guild_versions", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const entityDao = new f72393(1957).EntityDao("user_settings", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const dao = new f72393(1957).Dao("read_states", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const dao = new f72393(1957).Dao("user_guild_settings", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    f72393 = (database) => {
      const entityDao = new f72393(1957).EntityDao("user_search_items", f72393(1957).TableId.KvCache, database);
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
        tmp5 = f72393(databaseResult);
      }
      return tmp5;
    };
    applyArgumentsResult.channelsTransaction = function channelsTransaction(database) {
      return f72393.channels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.channelsTempTransaction = function channelsTempTransaction(database) {
      return f72393.channelsTemp(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.basicChannelsTransaction = function basicChannelsTransaction(database) {
      return f72393.basicChannels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.syncedBasicChannelsTransaction = function syncedBasicChannelsTransaction(database) {
      return f72393.syncedBasicChannels(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.cacheTransaction = function cacheTransaction(database) {
      return f72393.cache(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.forceResyncVersionTransaction = function forceResyncVersionTransaction(database) {
      return f72393.forceResyncVersion(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.emojisTransaction = function emojisTransaction(database) {
      return f72393.emojis(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildsTransaction = function guildsTransaction(database) {
      return f72393.guilds(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.messagesTransaction = function messagesTransaction(database) {
      return f72393.messages(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.stickersTransaction = function stickersTransaction(database) {
      return f72393.stickers(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildVersionsTransaction = function guildVersionsTransaction(database) {
      return f72393.guildVersions(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.nonGuildVersionsTransaction = function nonGuildVersionsTransaction(database) {
      return f72393.nonGuildVersions(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.userSettingsTransaction = function userSettingsTransaction(database) {
      return f72393.userSettings(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.readStatesTransaction = function readStatesTransaction(database) {
      const states = f72393.readStates(database.database);
      return states.upgradeTransaction(database);
    };
    applyArgumentsResult.userGuildSettingsTransaction = function userGuildSettingsTransaction(database) {
      return f72393.userGuildSettings(database.database).upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSyncTransaction = function guildsRequiringDeletedIdsSyncTransaction(database) {
      const result = f72393.guildsRequiringDeletedIdsSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringChannelSyncTransaction = function guildsRequiringChannelSyncTransaction(database) {
      const result = f72393.guildsRequiringChannelSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.userSearchItemsTransaction = function userSearchItemsTransaction(database) {
      return f72393.userSearchItems(database.database).upgradeTransaction(database);
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