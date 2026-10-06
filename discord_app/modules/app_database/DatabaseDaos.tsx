// discord_app/modules/app_database/DatabaseDaos.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import _mod2079 from "../../../discord_common/js/packages/kv-storage/js/index.tsx";
import DatabaseManagerDefault from "system/DatabaseManager.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const items = [_mod2079.TableId.KvCache, "guild_basic_channels"];
const items1 = [items];
const items2 = [_mod2079.TableId.KvCache, "basic_channels_stale"];
items1[1] = items2;
const Store = get_initializedDefault.Store;
class DatabaseDaos extends Store {
  constructor() {
    const channels = (arg0) => {
      let databaseResult = arg0;
      if (arg0 == null) {
        const obj = DatabaseManagerDefault;
        databaseResult = obj.database(AuthenticationStore.getId());
      }
      let tmp5 = null;
      if (null != databaseResult) {
        tmp5 = f85930(databaseResult);
      }
      return tmp5;
    };
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.database = function database(arg0) {
      let id = arg0;
      const database = DatabaseManagerDefault.database;
      DatabaseManagerDefault;
      if (arg0 == null) {
        id = AuthenticationStore.getId();
      }
      return database(id);
    };
    const f85913 = (database) => {
      const guildEntityDao = new f85913(closure_1_2[1]).GuildEntityDao(
        "guild_channels",
        f85913(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return guildEntityDao;
    };
    applyArgumentsResult.channels = channels;
    const f85914 = (database) => {
      const guildDao = new f85914(closure_1_2[1]).GuildDao(
        "guild_channels_temp",
        f85914(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return guildDao;
    };
    applyArgumentsResult.channelsTemp = channels;
    const f85915 = (database) => {
      const dao = new f85915(closure_1_2[1]).Dao("basic_channels", f85915(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.basicChannels = channels;
    const f85916 = (database) => {
      const dao = new f85916(closure_1_2[1]).Dao(
        "basic_channels_synced",
        f85916(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return dao;
    };
    applyArgumentsResult.syncedBasicChannels = channels;
    const f85917 = (database) => {
      const dao = new f85917(closure_1_2[1]).Dao("cache", f85917(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.cache = channels;
    const f85918 = (database) => {
      const dao = new f85918(closure_1_2[1]).Dao(
        "force_resync_version",
        f85918(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return dao;
    };
    applyArgumentsResult.forceResyncVersion = channels;
    const f85919 = (database) => {
      const guildEntityDao = new f85919(closure_1_2[1]).GuildEntityDao(
        "guild_emojis",
        f85919(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return guildEntityDao;
    };
    applyArgumentsResult.emojis = channels;
    const f85920 = (database) => {
      const entityDao = new f85920(closure_1_2[1]).EntityDao(
        "guilds",
        f85920(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.guilds = channels;
    const f85921 = (database) => {
      const entityDao = new f85921(closure_1_2[1]).EntityDao(
        "guilds_requiring_deleted_ids_sync",
        f85921(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSync = channels;
    const f85922 = (database) => {
      const entityDao = new f85922(closure_1_2[1]).EntityDao(
        "guilds_requiring_channel_sync",
        f85922(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringChannelSync = channels;
    const f85923 = (database) => {
      const messageDao = new f85923(closure_1_2[1]).MessageDao(
        "messages",
        f85923(closure_1_2[1]).TableId.Messages,
        database,
      );
      return messageDao;
    };
    applyArgumentsResult.messages = channels;
    const f85924 = (database) => {
      const guildEntityDao = new f85924(closure_1_2[1]).GuildEntityDao(
        "guild_stickers",
        f85924(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return guildEntityDao;
    };
    applyArgumentsResult.stickers = channels;
    const f85925 = (database) => {
      const entityDao = new f85925(closure_1_2[1]).EntityDao(
        "guild_versions",
        f85925(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.guildVersions = channels;
    const f85926 = (database) => {
      const entityDao = new f85926(closure_1_2[1]).EntityDao(
        "non_guild_versions",
        f85926(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.nonGuildVersions = channels;
    const f85927 = (database) => {
      const entityDao = new f85927(closure_1_2[1]).EntityDao(
        "user_settings",
        f85927(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.userSettings = channels;
    const f85928 = (database) => {
      const dao = new f85928(closure_1_2[1]).Dao("read_states", f85928(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.readStates = channels;
    const f85929 = (database) => {
      const dao = new f85929(closure_1_2[1]).Dao(
        "user_guild_settings",
        f85929(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return dao;
    };
    applyArgumentsResult.userGuildSettings = channels;
    const f85930 = (database) => {
      const entityDao = new f85930(closure_1_2[1]).EntityDao(
        "user_search_items",
        f85930(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.userSearchItems = channels;
    applyArgumentsResult.channelsTransaction = function channelsTransaction(database) {
      const channelsResult = require.channels(database.database);
      return channelsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.channelsTempTransaction = function channelsTempTransaction(database) {
      const channelsTempResult = require.channelsTemp(database.database);
      return channelsTempResult.upgradeTransaction(database);
    };
    applyArgumentsResult.basicChannelsTransaction = function basicChannelsTransaction(database) {
      const basicChannelsResult = require.basicChannels(database.database);
      return basicChannelsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.syncedBasicChannelsTransaction = function syncedBasicChannelsTransaction(database) {
      const syncedBasicChannelsResult = require.syncedBasicChannels(database.database);
      return syncedBasicChannelsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.cacheTransaction = function cacheTransaction(database) {
      const cacheResult = require.cache(database.database);
      return cacheResult.upgradeTransaction(database);
    };
    applyArgumentsResult.forceResyncVersionTransaction = function forceResyncVersionTransaction(database) {
      const forceResyncVersionResult = require.forceResyncVersion(database.database);
      return forceResyncVersionResult.upgradeTransaction(database);
    };
    applyArgumentsResult.emojisTransaction = function emojisTransaction(database) {
      const emojisResult = require.emojis(database.database);
      return emojisResult.upgradeTransaction(database);
    };
    applyArgumentsResult.guildsTransaction = function guildsTransaction(database) {
      const guildsResult = require.guilds(database.database);
      return guildsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.messagesTransaction = function messagesTransaction(database) {
      const messagesResult = require.messages(database.database);
      return messagesResult.upgradeTransaction(database);
    };
    applyArgumentsResult.stickersTransaction = function stickersTransaction(database) {
      const stickersResult = require.stickers(database.database);
      return stickersResult.upgradeTransaction(database);
    };
    applyArgumentsResult.guildVersionsTransaction = function guildVersionsTransaction(database) {
      const guildVersionsResult = require.guildVersions(database.database);
      return guildVersionsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.nonGuildVersionsTransaction = function nonGuildVersionsTransaction(database) {
      const nonGuildVersionsResult = require.nonGuildVersions(database.database);
      return nonGuildVersionsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.userSettingsTransaction = function userSettingsTransaction(database) {
      const userSettingsResult = require.userSettings(database.database);
      return userSettingsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.readStatesTransaction = function readStatesTransaction(database) {
      const states = require.readStates(database.database);
      return states.upgradeTransaction(database);
    };
    applyArgumentsResult.userGuildSettingsTransaction = function userGuildSettingsTransaction(database) {
      const userGuildSettingsResult = require.userGuildSettings(database.database);
      return userGuildSettingsResult.upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSyncTransaction = function guildsRequiringDeletedIdsSyncTransaction(
      database,
    ) {
      const result = require.guildsRequiringDeletedIdsSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.guildsRequiringChannelSyncTransaction = function guildsRequiringChannelSyncTransaction(
      database,
    ) {
      const result = require.guildsRequiringChannelSync(database.database);
      return result.upgradeTransaction(database);
    };
    applyArgumentsResult.userSearchItemsTransaction = function userSearchItemsTransaction(database) {
      const userSearchItemsResult = require.userSearchItems(database.database);
      return userSearchItemsResult.upgradeTransaction(database);
    };
    return applyArgumentsResult;
  }
  initialize() {
    this.waitFor(AuthenticationStore);
  }
}
const prototype = DatabaseDaos.prototype;
const databaseDaos = new DatabaseDaos(DispatcherDefault, {});
let result = size.fileFinishedImporting("modules/app_database/DatabaseDaos.tsx");

export default databaseDaos;
export const DEPRECATED_KEYSPACES = items1;
