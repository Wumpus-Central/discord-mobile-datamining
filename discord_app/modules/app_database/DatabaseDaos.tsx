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
        tmp5 = f85796(databaseResult);
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
    const f85779 = (database) => {
      const guildEntityDao = new f85779(closure_1_2[1]).GuildEntityDao(
        "guild_channels",
        f85779(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return guildEntityDao;
    };
    applyArgumentsResult.channels = channels;
    const f85780 = (database) => {
      const guildDao = new f85780(closure_1_2[1]).GuildDao(
        "guild_channels_temp",
        f85780(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return guildDao;
    };
    applyArgumentsResult.channelsTemp = channels;
    const f85781 = (database) => {
      const dao = new f85781(closure_1_2[1]).Dao("basic_channels", f85781(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.basicChannels = channels;
    const f85782 = (database) => {
      const dao = new f85782(closure_1_2[1]).Dao(
        "basic_channels_synced",
        f85782(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return dao;
    };
    applyArgumentsResult.syncedBasicChannels = channels;
    const f85783 = (database) => {
      const dao = new f85783(closure_1_2[1]).Dao("cache", f85783(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.cache = channels;
    const f85784 = (database) => {
      const dao = new f85784(closure_1_2[1]).Dao(
        "force_resync_version",
        f85784(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return dao;
    };
    applyArgumentsResult.forceResyncVersion = channels;
    const f85785 = (database) => {
      const guildEntityDao = new f85785(closure_1_2[1]).GuildEntityDao(
        "guild_emojis",
        f85785(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return guildEntityDao;
    };
    applyArgumentsResult.emojis = channels;
    const f85786 = (database) => {
      const entityDao = new f85786(closure_1_2[1]).EntityDao(
        "guilds",
        f85786(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.guilds = channels;
    const f85787 = (database) => {
      const entityDao = new f85787(closure_1_2[1]).EntityDao(
        "guilds_requiring_deleted_ids_sync",
        f85787(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringDeletedIdsSync = channels;
    const f85788 = (database) => {
      const entityDao = new f85788(closure_1_2[1]).EntityDao(
        "guilds_requiring_channel_sync",
        f85788(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.guildsRequiringChannelSync = channels;
    const f85789 = (database) => {
      const messageDao = new f85789(closure_1_2[1]).MessageDao(
        "messages",
        f85789(closure_1_2[1]).TableId.Messages,
        database,
      );
      return messageDao;
    };
    applyArgumentsResult.messages = channels;
    const f85790 = (database) => {
      const guildEntityDao = new f85790(closure_1_2[1]).GuildEntityDao(
        "guild_stickers",
        f85790(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return guildEntityDao;
    };
    applyArgumentsResult.stickers = channels;
    const f85791 = (database) => {
      const entityDao = new f85791(closure_1_2[1]).EntityDao(
        "guild_versions",
        f85791(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.guildVersions = channels;
    const f85792 = (database) => {
      const entityDao = new f85792(closure_1_2[1]).EntityDao(
        "non_guild_versions",
        f85792(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.nonGuildVersions = channels;
    const f85793 = (database) => {
      const entityDao = new f85793(closure_1_2[1]).EntityDao(
        "user_settings",
        f85793(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return entityDao;
    };
    applyArgumentsResult.userSettings = channels;
    const f85794 = (database) => {
      const dao = new f85794(closure_1_2[1]).Dao("read_states", f85794(closure_1_2[1]).TableId.KvCache, database);
      return dao;
    };
    applyArgumentsResult.readStates = channels;
    const f85795 = (database) => {
      const dao = new f85795(closure_1_2[1]).Dao(
        "user_guild_settings",
        f85795(closure_1_2[1]).TableId.KvCache,
        database,
      );
      return dao;
    };
    applyArgumentsResult.userGuildSettings = channels;
    const f85796 = (database) => {
      const entityDao = new f85796(closure_1_2[1]).EntityDao(
        "user_search_items",
        f85796(closure_1_2[1]).TableId.KvCache,
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
