// discord_app/modules/app_database/background_sync/native/BackgroundSync.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import _modDef12 from "../../../../../_runtime/metro/00012__.js";
import Storage4 from "../../../../../discord_common/js/packages/storage/Storage.tsx";
import DurationsDefault from "../../../../utils/Durations.tsx";
import HTTPUtils from "../../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import DatabaseDaosDefault from "../../DatabaseDaos.tsx";
import modules_Messages from "../../modules/Messages.tsx";
import GuildVersionsDefault from "../../modules/GuildVersions.tsx";
import KvCacheVersionDefault from "../../modules/KvCacheVersion.tsx";
import NonGuildVersionsDefault from "../../modules/NonGuildVersions.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import ChannelRecord from "../../../../records/ChannelRecord.tsx";
import "ChannelStore";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";
import FileSystemStore from "../../stores/FileSystemStore.tsx";
import Constants from "../../../../Constants.tsx";
import StickersStore from "../../../stickers/StickersStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import EmojiStore from "../../../emojis/EmojiStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let basicChannel, c1, c11, c21, c22, closure_13, config, readStatesByChannel;

let closure_12;
let hasOwnProperty;
let map1;
let metroRequire;
let unpackModuleId;
let obj = function _backgroundSync() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    const force = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    const iter = (async (arg0) => {
      let closure_5;
      let closure_6;
      let closure_7;
      let obj18;
      let value;
      closure_131_14.verbose("Starting Background Sync");
      const tmp184 = flag;
      if (!tmp184) {
        const Storage = closure_131_0(closure_131_2[13]).Storage;
        value = Storage.get(closure_131_16);
        c1 = value;
        if (value == null) {
          c1 = 0;
        }
        closure_3 = c1;
        const _Date2 = Date;
        if (closure_3 > Date.now()) {
          closure_131_14.log("Skipping Background Sync because of clock skew");
          const Storage2 = closure_131_0(closure_131_2[13]).Storage;
          const _Date4 = Date;
          const result = Storage2.set(closure_131_16, Date.now());
          c7 = 3;
          return { value: undefined, done: true };
        } else {
          const _Date3 = Date;
          if (Date.now() - closure_3 < closure_131_15) {
            closure_131_14.log("Skipping Background Sync because it has been too soon");
            c7 = 3;
            return { value: undefined, done: true };
          }
        }
      }
      const Storage3 = closure_131_0(closure_131_2[13]).Storage;
      const _Date5 = Date;
      const result1 = Storage3.set(closure_131_16, Date.now());
      await closure_131_10.refresh();
      if (2 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          return { value, done: true };
        } else if (closure_131_10.isLowDisk) {
          closure_131_14.log("Skipping Background Sync because disk is low");
        } else {
          closure_4 = {};
          const _Date = Date;
          closure_5 = Date.now();
          const _String2 = String;
          closure_6 = String(closure_5);
          closure_7 = -1;
          c5 = 2;
          c6 = 5;
          c7 = 1;
          const obj21 = { value: obj18.startBackgroundTask(), done: false };
          obj18 = closure_131_1(closure_131_2[14]);
          return obj21;
        }
      } else if (3 === c6) {
        c5 = 0;
        const obj16 = closure_131_1(closure_131_2[18]);
        obj16.track(closure_131_11.BACKGROUND_SYNC_COMPLETED, closure_4);
        closure_131_14.verbose("Finished Background Sync", closure_4);
        const obj17 = closure_131_1(closure_131_2[14]);
        obj17.endBackgroundTask(closure_7);
        throw closure_4;
      } else {
        if (4 === c6) {
          c5 = 1;
          config = closure_4;
          if (429 === config.status) {
            closure_131_14.verbose("Background sync was rate limited");
          } else {
            closure_131_14.error("Background sync encountered error", config);
          }
          if (!config.timeout) {
            const obj13 = closure_131_1(closure_131_2[17]);
            obj13.captureException(config);
          }
          const _String = String;
          closure_4.error = String(config.message);
        } else if (5 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 0;
            const obj10 = closure_131_1(closure_131_2[18]);
            obj10.track(closure_131_11.BACKGROUND_SYNC_COMPLETED, closure_4);
            closure_131_14.verbose("Finished Background Sync", closure_4);
            const obj11 = closure_131_1(closure_131_2[14]);
            obj11.endBackgroundTask(closure_7);
            c7 = 3;
            return { value, done: true };
          } else {
            let resolved;
            closure_7 = value;
            const obj27 = closure_131_0(closure_131_2[15]);
            if (obj27.isIOS()) {
              if (closure_7 === closure_131_1(closure_131_2[14]).backgroundTaskIdentifierInvalid) {
                closure_131_14.verbose("Background sync skipped because background task could not be started");
                c5 = 0;
                const obj7 = closure_131_1(closure_131_2[18]);
                obj7.track(closure_131_11.BACKGROUND_SYNC_COMPLETED, closure_4);
                closure_131_14.verbose("Finished Background Sync", closure_4);
                const obj8 = closure_131_1(closure_131_2[14]);
                obj8.endBackgroundTask(closure_7);
                c7 = 3;
                return { value: undefined, done: true };
              }
            }
            const items = [
              closure_131_19(closure_6, closure_4, closure_5),
              closure_131_23(closure_6, closure_4, closure_5, flag3),
            ];
            const tmp41 = flag2;
            if (tmp41) {
              resolved = Promise.resolve();
            } else {
              resolved = closure_131_21(closure_4, closure_5, flag);
            }
            items[2] = resolved;
            c6 = 6;
            c7 = 1;
            const obj24 = { value: all(items), done: false };
            return obj24;
          }
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          const obj3 = closure_131_1(closure_131_2[18]);
          obj3.track(closure_131_11.BACKGROUND_SYNC_COMPLETED, closure_4);
          closure_131_14.verbose("Finished Background Sync", closure_4);
          const obj4 = closure_131_1(closure_131_2[14]);
          obj4.endBackgroundTask(closure_7);
          c7 = 3;
          return { value, done: true };
        } else {
          const obj26 = { type: "BACKGROUND_SYNC_FINISHED", messagesOnly: flag2 };
          obj = closure_131_1(closure_131_2[16]);
          obj.dispatch(obj26);
          c5 = 1;
        }
        c5 = 0;
        const obj14 = closure_131_1(closure_131_2[18]);
        obj14.track(closure_131_11.BACKGROUND_SYNC_COMPLETED, closure_4);
        closure_131_14.verbose("Finished Background Sync", closure_4);
        const obj15 = closure_131_1(closure_131_2[14]);
        obj15.endBackgroundTask(closure_7);
      }
      await "IconComponent";
      closure_3 = tmp;
      return "Reflect";
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
function backgroundSyncPrivateChannels() {
  return obj(...arguments);
}
obj = function _backgroundSyncPrivateChannels() {
  let logger;
  let per_channel_limit;
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let Storage2;
    let obj5;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let body;
        let closure_5;
        let c3;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_4 = tmp;
            let closure_3 = tmp4;
            body = undefined;
            closure_5 = undefined;
            const obj15 = DatabaseDaosDefault;
            const messagesResult = obj15.messages();
            c3 = messagesResult;
            if (null != messagesResult) {
              const HTTP = HTTPUtils.HTTP;
              const request = {
                url: constants.MESSAGE_LOG_PRIVATE_CHANNELS,
                body: obj5,
                timeout: 5000,
                rejectWithError: false,
              };
              obj5 = { per_channel_limit, last_synced_message_id: Storage2.get(lastSyncedPrivateChannelsMessageId) };
              const post = HTTP.post;
              Storage2 = Storage4.Storage;
              c5 = 1;
              c6 = 1;
              const obj7 = { value: post(request), done: false };
              return obj7;
            } else {
              logger.log("Aborting BG sync because there is no database");
            }
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            body = value.body;
            const _Date2 = Date;
            closure_1.time_finish_fetch_private_channel_messages = Date.now() - closure_2;
            closure_1.num_private_channel_messages = 0;
            const _JSON = JSON;
            closure_1.size_private_channel_messages = JSON.stringify(body).length;
            if (null != body.latest_message_id) {
              const Storage = closure_132_0(closure_132_2[13]).Storage;
              const result = Storage.set(closure_132_18, body.latest_message_id);
            }
            closure_5 = {};
            const obj6 = closure_132_1(closure_132_2[21]);
            const keys = obj6.keys(body.changes_by_channel_id);
            c5 = 2;
            c6 = 1;
            const obj9 = {
              value: all(
                keys.map((item) =>
                  closure_2_25(closure_1_3, closure_1_5, null, item, closure_1_4.changes_by_channel_id[item]),
                ),
              ),
              done: false,
            };
            return obj9;
          }
        } else if (2 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj10 = { value, done: true };
            return obj10;
          } else {
            const obj14 = closure_132_1(closure_132_2[22]);
            if (!obj14.isEmpty(closure_5)) {
              const obj11 = {
                type: "BACKGROUND_SYNC_CHANNEL_MESSAGES",
                changesByChannelId: body.changes_by_channel_id,
              };
              const obj2 = closure_132_1(closure_132_2[16]);
              obj2.dispatch(obj11);
              c5 = 3;
              c6 = 1;
              const obj12 = { value: closure_132_27(c3, closure_5, closure_0, closure_1, undefined), done: false };
              return obj12;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const _Date = Date;
          closure_1.time_save_private_channel_messages = Date.now() - closure_2;
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp41) {
        c6 = 3;
        throw tmp41;
      }
    }
  });
  return obj(...arguments);
};
function backgroundSyncGuildData() {
  return obj(...arguments);
}
obj = function _backgroundSyncGuildData() {
  obj = _asyncToGenerator(async function (arg0, arg1, arg2) {
    let obj11;
    let obj7;
    let obj9;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let closure_3;
        let closure_4;
        let guild_versions;
        let closure_6;
        let closure_7;
        let body;
        let guilds;
        let api_code_version;
        let promisesForBackgroundSyncToWaitOn;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            closure_3 = undefined;
            closure_4 = undefined;
            guild_versions = undefined;
            closure_6 = undefined;
            closure_7 = undefined;
            body = undefined;
            guilds = undefined;
            api_code_version = undefined;
            promisesForBackgroundSyncToWaitOn = undefined;
            const items = [, ,];
            const obj18 = GuildVersionsDefault;
            items[0] = obj18.getCommittedVersions();
            const obj19 = NonGuildVersionsDefault;
            items[1] = obj19.getCommittedVersions();
            const obj20 = KvCacheVersionDefault;
            items[2] = obj20.canUseGuildVersions();
            c5 = 1;
            c6 = 1;
            const obj4 = { value: all(items), done: false };
            return obj4;
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_3 = value;
            closure_4 = closure_132_3(closure_3, 3);
            guild_versions = closure_4[0];
            closure_6 = closure_4[1];
            closure_7 = closure_4[2];
            const HTTP = closure_132_0(closure_132_2[20]).HTTP;
            const request = { url: closure_132_12.BACKGROUND_SYNC, body: obj7, timeout: 5000, rejectWithError: false };
            const post = HTTP.post;
            if (closure_7) {
              const obj6 = {
                guild_versions,
                highest_last_message_id: closure_6.highest_last_message_id,
                api_code_version: closure_6.api_code_version,
                channel_privacy: obj11.isChannelMetadataObfuscationEnabled("background-sync"),
              };
              obj11 = closure_132_0(closure_132_2[26]);
              obj7 = obj6;
            } else {
              obj7 = { channel_privacy: obj9.isChannelMetadataObfuscationEnabled("background-sync") };
              obj9 = closure_132_0(closure_132_2[26]);
            }
            c5 = 2;
            c6 = 1;
            const obj8 = { value: post(request), done: false };
            return obj8;
          }
        } else {
          if (2 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              body = value.body;
              guilds = body.guilds;
              api_code_version = body.api_code_version;
              const _Date2 = Date;
              closure_0.time_finish_fetch_guild_data = Date.now() - closure_1;
              const _JSON = JSON;
              closure_0.size_guild_data = JSON.stringify(guilds).length;
              closure_0.num_guilds = guilds.length;
              closure_0.num_unavailable_guilds = 0;
              if (0 !== guilds.length) {
                guilds = guilds.map((unavailable) => {
                  let tmp = unavailable;
                  if (unavailable.unavailable) {
                    closure_1_0.num_unavailable_guilds = closure_1_0.num_unavailable_guilds + 1;
                    tmp = { id: unavailable.id, data_mode: "unavailable" };
                    obj = { id: unavailable.id, data_mode: "unavailable" };
                  }
                  return tmp;
                });
                const self = this;
                const self2 = this;
                const promise = new Promise((arg0) => setTimeout(arg0, 0));
                c5 = 3;
                c6 = 1;
                const obj12 = { value: promise, done: false };
                return obj12;
              }
            }
          } else if (3 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj13 = { value, done: true };
              return obj13;
            } else {
              if (!closure_2) {
                const str = "active";
                if ("active" === closure_132_9.getState()) {
                  closure_132_14.log("Skipping guild data background sync because app is now active");
                }
              }
              promisesForBackgroundSyncToWaitOn = [];
              const obj14 = {
                type: "BACKGROUND_SYNC",
                guilds,
                emojis: guilds.map((data_mode) => {
                  let deleted_emoji_ids;
                  let emojis;
                  if ("unavailable" === data_mode.data_mode) {
                    obj = { guildId: data_mode.id, dataMode: "unavailable" };
                    const obj2 = { guildId: data_mode.id, dataMode: "unavailable" };
                  } else if ("partial" === data_mode.data_mode) {
                    const obj3 = {
                      dataMode: "partial",
                      guildId: data_mode.id,
                      updatedEntities: emojis,
                      deletedEntityIds: deleted_emoji_ids,
                    };
                    emojis = data_mode.partial_updates.emojis;
                    if (emojis == null) {
                      emojis = [];
                    }
                    deleted_emoji_ids = data_mode.partial_updates.deleted_emoji_ids;
                    if (deleted_emoji_ids == null) {
                      deleted_emoji_ids = [];
                    }
                    obj = obj3;
                  } else {
                    obj = { dataMode: "full", guildId: null, entities: null };
                    ({ id: obj.guildId, emojis: obj.entities } = data_mode);
                  }
                  return obj;
                }),
                stickers: guilds.map((data_mode) => {
                  let deleted_sticker_ids;
                  let stickers;
                  if ("unavailable" === data_mode.data_mode) {
                    obj = { guildId: data_mode.id, dataMode: "unavailable" };
                    const obj2 = { guildId: data_mode.id, dataMode: "unavailable" };
                  } else if ("partial" === data_mode.data_mode) {
                    const obj3 = {
                      dataMode: "partial",
                      guildId: data_mode.id,
                      updatedEntities: stickers,
                      deletedEntityIds: deleted_sticker_ids,
                    };
                    stickers = data_mode.partial_updates.stickers;
                    if (stickers == null) {
                      stickers = [];
                    }
                    deleted_sticker_ids = data_mode.partial_updates.deleted_sticker_ids;
                    if (deleted_sticker_ids == null) {
                      deleted_sticker_ids = [];
                    }
                    obj = obj3;
                  } else {
                    obj = { dataMode: "full", guildId: null, entities: null };
                    ({ id: obj.guildId, stickers: obj.entities } = data_mode);
                  }
                  return obj;
                }),
                apiCodeVersion: api_code_version,
                promisesForBackgroundSyncToWaitOn,
              };
              const dispatch = closure_132_1(closure_132_2[16]).dispatch;
              const tmp22 = closure_132_1(closure_132_2[16]);
              dispatch(obj14);
              c5 = 4;
              c6 = 1;
              const obj15 = { value: Promise.all(promisesForBackgroundSyncToWaitOn), done: false };
              return obj15;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj16 = { value, done: true };
            return obj16;
          } else {
            obj = closure_132_0(closure_132_2[27]);
            obj.writeCaches(true);
            const _Date = Date;
            closure_0.time_save_guild_data = Date.now() - closure_1;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp45) {
        c6 = 3;
        throw tmp45;
      }
    }
  });
  return obj(...arguments);
};
function backgroundSyncGuildChannels() {
  return obj(...arguments);
}
obj = function _backgroundSyncGuildChannels() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let obj8;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c22 === 2) {
      c22 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        let c5;
        let closure_6;
        let last_synced_message_id_by_channel_id;
        let closure_8;
        let closure_9;
        let closure_10;
        let closure_11;
        let c12;
        let id;
        let body;
        let _null;
        let closure_17;
        let changesByChannelId;
        let closure_19;
        let changes;
        let c4;
        c22 = 2;
        let tmp4 = c21;
        if (0 === c21) {
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 === 2) {
            c22 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            c5 = undefined;
            closure_6 = undefined;
            last_synced_message_id_by_channel_id = undefined;
            closure_8 = undefined;
            closure_9 = undefined;
            closure_10 = undefined;
            closure_11 = undefined;
            c12 = undefined;
            id = undefined;
            body = undefined;
            closure_15 = undefined;
            _null = undefined;
            closure_17 = undefined;
            changesByChannelId = undefined;
            closure_19 = undefined;
            changes = undefined;
            let obj20 = DatabaseDaosDefault;
            let messagesResult = obj20.messages();
            c4 = messagesResult;
            if (null != messagesResult) {
              let _Array = Array;
              let tmp128 = _modDef12;
              readStatesByChannel = readStatesByChannel.getReadStatesByChannel();
              let tmp128Result = tmp128(from(readStatesByChannel.values()));
              let found = tmp128Result.filter((channelId) => {
                basicChannel = basicChannel.getBasicChannel(channelId.channelId);
                let tmp2 = null != basicChannel;
                if (tmp2) {
                  let tmp5 = !closure_1_5(basicChannel.type);
                  closure_1_5(basicChannel.type);
                  if (tmp5) {
                    tmp5 = !closure_1_6(basicChannel.type);
                  }
                  if (tmp5) {
                    tmp5 = null != channelId.guildId && null != channelId.lastViewed;
                  }
                  tmp2 = tmp5;
                }
                return tmp2;
              });
              let sortByResult = found.sortBy((lastViewed) => -lastViewed.lastViewed);
              let iter = sortByResult.slice(0, 25);
              let valueResult = iter.value();
              c5 = valueResult;
              let verboseResult = closure_2_14.verbose(
                "Guild Message Background Syncing for ",
                valueResult.map((channelId) => channelId.channelId),
              );
              if (0 !== valueResult.length) {
                let _Promise = Promise;
                c21 = 1;
                c22 = 1;
                let obj6 = {
                  value: Promise.all(
                    valueResult.map((guildId) => {
                      const withoutLoggingResult = closure_1_4.withoutLogging();
                      return withoutLoggingResult.getLatest(guildId.guildId, guildId.channelId, 1);
                    }),
                  ),
                  done: false,
                };
                return obj6;
              }
            } else {
              let logResult = closure_2_14.log("Aborting BG sync because there is no database");
            }
          }
        } else {
          let closure_5;
          if (1 === tmp4) {
            if (arg0 === 1) {
              c22 = 3;
              throw value;
            } else if (arg0 === 2) {
              c22 = 3;
              let obj7 = { value, done: true };
              return obj7;
            } else {
              closure_6 = value;
              last_synced_message_id_by_channel_id = {};
              closure_8 = 0;
              if (closure_8 < c5.length) {
                do {
                  let first = closure_6[closure_8][0];
                  id = undefined;
                  if (first != null) {
                    id = first.id;
                  }
                  c4 = id;
                  if (id == null) {
                    c4 = "0";
                  }
                  closure_9 = c4;
                  closure_10 = c5[closure_8];
                  let tmp81 = closure_3;
                  if (tmp81) {
                    let obj9 = closure_146_1(closure_146_2[21]);
                    tmp81 = obj9.compare(closure_9, closure_10.lastMessageId) >= 0;
                  }
                  if (!tmp81) {
                    last_synced_message_id_by_channel_id[closure_10.channelId] = closure_9;
                  }
                  closure_8 = closure_8 + 1;
                } while (closure_8 < c5.length);
              }
              let obj10 = closure_146_1(closure_146_2[22]);
              if (!obj10.isEmpty(last_synced_message_id_by_channel_id)) {
                closure_11 = {};
                closure_5 = closure_6[Symbol.iterator]();
                while (closure_5 !== undefined) {
                  let c20 = 1;
                  c12 = tmp106;
                  closure_8 = c12;
                  last_synced_message_id_by_channel_id = c12[Symbol.iterator]();
                  while (last_synced_message_id_by_channel_id !== undefined) {
                    id = tmp112;
                    closure_11[id.id] = id;
                    c20 = 1;
                    continue;
                  }
                  c20 = 0;
                  continue;
                }
                let HTTP = closure_146_0(closure_146_2[20]).HTTP;
                let request = {
                  url: closure_146_12.MESSAGE_LOG_GUILD_CHANNELS,
                  body: obj8,
                  timeout: 5000,
                  rejectWithError: false,
                };
                obj8 = { per_channel_limit: closure_146_13, last_synced_message_id_by_channel_id };
                c21 = 3;
                c22 = 1;
                let obj11 = { value: HTTP.post(request), done: false };
                return obj11;
              }
            }
          } else if (2 === tmp4) {
            c20 = 0;
            closure_5.return();
            throw backgroundSyncPrivateChannels;
          } else {
            if (3 === tmp4) {
              if (arg0 === 1) {
                c22 = 3;
                throw value;
              } else if (arg0 === 2) {
                c22 = 3;
                let obj12 = { value, done: true };
                return obj12;
              } else {
                body = value.body;
                let _Date2 = Date;
                closure_1.time_finish_fetch_guild_channel_messages = Date.now() - closure_2;
                closure_1.num_guild_channel_messages = 0;
                let _JSON = JSON;
                closure_1.size_guild_channel_messages = JSON.stringify(body).length;
                closure_15 = {};
                closure_10 = c5;
                closure_9 = c5[Symbol.iterator]();
                while (closure_9 !== undefined) {
                  _null = tmp16;
                  closure_15[_null.channelId] = _null.guildId;
                  c20 = 0;
                  continue;
                }
                closure_17 = {};
                changesByChannelId = {};
                let change_logs_by_channel_id = body.change_logs_by_channel_id;
                closure_12 = change_logs_by_channel_id;
                let tmp25 = closure_13;
                let tmp26 = closure_14;
                let tmp24 = change_logs_by_channel_id;
                let keys = Object.keys();
                if (keys === undefined) {
                  closure_14 = tmp26;
                  closure_13 = tmp25;
                  closure_12 = change_logs_by_channel_id;
                  closure_11 = keys;
                } else {
                  closure_14 = tmp26;
                  closure_13 = tmp25;
                  closure_12 = tmp24;
                  closure_11 = keys;
                }
                let obj4 = closure_146_1(closure_146_2[22]);
                if (!obj4.isEmpty(closure_17)) {
                  let obj5 = closure_146_1(closure_146_2[16]);
                  let obj13 = { type: "BACKGROUND_SYNC_CHANNEL_MESSAGES", changesByChannelId };
                  let dispatchResult = obj5.dispatch(obj13);
                  c21 = 7;
                  c22 = 1;
                  let obj14 = { value: closure_146_27(c4, closure_17, closure_0, closure_1, closure_15), done: false };
                  return obj14;
                }
              }
            } else if (4 === tmp4) {
              c20 = 1;
              last_synced_message_id_by_channel_id.return();
              throw backgroundSyncPrivateChannels;
            } else if (5 === tmp4) {
              c20 = 0;
              closure_9.return();
              throw backgroundSyncPrivateChannels;
            } else if (6 === tmp4) {
              if (arg0 === 1) {
                c22 = 3;
                throw value;
              } else if (arg0 === 2) {
                c22 = 3;
                let obj15 = { value, done: true };
                return obj15;
              }
            } else if (arg0 === 1) {
              c22 = 3;
              throw value;
            } else if (arg0 === 2) {
              c22 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let tmp5 = closure_17;
              let _Date = Date;
              closure_1.time_save_guild_channel_messages = Date.now() - closure_2;
            }
            let tmp28 = closure_11;
            let tmp29 = closure_12;
            let tmp30 = closure_13;
            let tmp31 = closure_14;
            let tmp33 = closure_11[closure_13];
            while (tmp33 !== undefined) {
              closure_15 = tmp33;
              closure_14 = tmp31;
              closure_13 = tmp30;
              closure_12 = tmp29;
              closure_11 = tmp28;
              closure_19 = tmp33;
              changes = body.change_logs_by_channel_id[closure_19].changes;
              if (null == changes) {
                continue;
              } else {
                changesByChannelId[closure_19] = changes;
                let tmp40 = c4;
                let tmp41 = closure_17;
                let tmp44 = closure_15[closure_19];
                _null = tmp44;
                if (tmp44 == null) {
                  _null = null;
                }
                c21 = 6;
                c22 = 1;
                let obj16 = {
                  value: closure_146_25(
                    tmp40,
                    tmp41,
                    _null,
                    closure_19,
                    body.change_logs_by_channel_id[closure_19].changes,
                  ),
                  done: false,
                };
                return obj16;
              }
            }
            closure_15 = tmp33;
            closure_14 = tmp31;
            closure_13 = tmp30;
            closure_12 = tmp29;
            closure_11 = tmp28;
          }
        }
        c22 = 3;
        return { value: "IconComponent", done: null };
      }
    }
  });
  return obj(...arguments);
};
function processChannelChanges() {
  return obj(...arguments);
}
obj = function _processChannelChanges() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3, arg4) => {
    let closure_0;
    let closure_2;
    let closure_1 = arg1;
    let closure_3 = arg3;
    let closure_4 = arg4;
    if (c12 === 2) {
      c12 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        let new_messages;
        let deleted_message_ids;
        let arr4;
        let length;
        let closure_8;
        let user;
        c12 = 2;
        let tmp5 = c11;
        if (0 === c11) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            new_messages = undefined;
            deleted_message_ids = undefined;
            arr4 = undefined;
            length = undefined;
            closure_8 = undefined;
            user = undefined;
            if (null != closure_4) {
              new_messages = closure_4.new_messages;
              if (undefined === new_messages) {
                new_messages = [];
              }
              let modified_messages = closure_4.modified_messages;
              if (undefined === modified_messages) {
                modified_messages = [];
              }
              deleted_message_ids = closure_4.deleted_message_ids;
              if (undefined === deleted_message_ids) {
                deleted_message_ids = [];
              }
              let obj3 = _modDef12;
              let tmp27 = _slicedToArray(obj3.partition(modified_messages, modules_Messages.isLikelyNotDelta), 2);
              arr4 = tmp27[1];
              let push2 = new_messages.push;
              let items = [];
              let arraySpreadResult = HermesBuiltin.arraySpread(items, tmp27[0], 0);
              let applyResult = HermesBuiltin.apply(push2, items, new_messages);
              if (arr4.length > 0) {
                let _Promise = Promise;
                c11 = 1;
                c12 = 1;
                let obj5 = {
                  value: Promise.all(
                    arr4.map((channel_id) => {
                      const withoutLoggingResult = closure_1_0.withoutLogging();
                      return withoutLoggingResult.get(closure_1_2, channel_id.channel_id, channel_id.id);
                    }),
                  ),
                  done: false,
                };
                return obj5;
              }
            }
            c12 = 3;
            return { value: "IconComponent", done: null };
          }
        } else {
          let closure_5;
          if (1 === tmp5) {
            if (arg0 === 1) {
              c12 = 3;
              throw value;
            } else if (arg0 === 2) {
              c12 = 3;
              let obj6 = { value, done: true };
              return obj6;
            } else {
              length = value.filter(closure_136_0(closure_136_2[29]).isNotNullish);
              let _HermesInternal = HermesInternal;
              let verboseResult = closure_136_14.verbose(
                "Fetched " + length.length + " modified messages from the database",
              );
              let obj7 = closure_136_1(closure_136_2[22]);
              closure_8 = obj7.keyBy(length, "id");
              let closure_6 = arr4;
              closure_5 = arr4[Symbol.iterator]();
              while (closure_5 !== undefined) {
                let c10 = 1;
                user = tmp11;
                if (user.id in closure_8) {
                  obj = {};
                  let push = new_messages.push;
                  let merged = Object.assign(closure_8[user.id].message);
                  let merged1 = Object.assign(user);
                  let arr = push(obj);
                }
                c10 = 0;
                continue;
              }
            }
          } else {
            c10 = 0;
            closure_5.return();
            throw AppStateStore;
          }
        }
        let tmp36 = new_messages.length > 0;
        if (!tmp36) {
          tmp36 = deleted_message_ids.length > 0;
        }
        if (tmp36) {
          let items1 = [new_messages];
          items1[1] = deleted_message_ids;
          closure_1[closure_3] = items1;
        }
      }
    }
  });
  return obj(...arguments);
};
function writeMessageChanges(transaction, arg1, arg2, arg3, arg4) {
  let closure_0 = arg1;
  let closure_1 = arg2;
  let closure_2 = arg3;
  let closure_3 = arg4;
  return transaction.transaction((arg0) => {
    closure_0 = arg0;
    for (const key10005 in closure_0) {
      let tmpResult = tmp(key10005);
      continue;
    }
  }, "Background Sync");
}
({ isPrivate: hasOwnProperty, isThread: metroRequire } = ChannelRecord);
({ AnalyticEvents: unpackModuleId, Endpoints: closure_12, MAX_MESSAGES_PER_CHANNEL: map1 } = Constants);
let tmp8 = new LoggerDefault("BackgroundSync");
let closure_14 = tmp8;
let closure_15 = 4 * DurationsDefault.Millis.HOUR;
const lastSyncTime = "lastSyncTime";
const lastSyncedPrivateChannelsMessageId = "lastSyncedPrivateChannelsMessageId";
let result = size.fileFinishedImporting("modules/app_database/background_sync/native/BackgroundSync.tsx");

export const backgroundSync = function backgroundSync() {
  return obj(...arguments);
};
