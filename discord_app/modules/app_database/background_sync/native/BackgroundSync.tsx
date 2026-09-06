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
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import "ChannelStore";
import ReadStateStore from "../../../../stores/ReadStateStore.tsx";
import AppStateStore from "../../../../stores/native/AppStateStore.tsx";
import FileSystemStore from "../../stores/FileSystemStore.tsx";

require = fn;
let closure_17 = async function _backgroundSync(arg0) {
  let force = arg0;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  let iter = (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp3;
            closure_2 = tmp8;
            closure_130_0 = undefined;
            closure_130_1 = undefined;
            closure_130_2 = undefined;
            let flag = force.force;
            if (flag === undefined) {
              flag = false;
            }
            closure_130_0 = flag;
            let flag2 = tmp193.messagesOnly;
            if (flag2 === undefined) {
              flag2 = false;
            }
            closure_130_1 = flag2;
            let flag3 = tmp193.checkLastMessageId;
            if (flag3 === undefined) {
              flag3 = false;
            }
            closure_130_2 = flag3;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            closure_130_5 = undefined;
            closure_130_6 = undefined;
            closure_130_7 = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "PX_16", done: true };
          }
        } else if (1 === tmp8) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj1 = { value, done: true };
            return obj1;
          } else {
            closure_131_14.verbose("Starting Background Sync");
            if (!closure_130_0) {
              const Storage = closure_131_0(closure_131_2[13]).Storage;
              value = Storage.get(closure_131_16);
              c1 = value;
              if (value == null) {
                c1 = 0;
              }
              closure_130_3 = c1;
              const _Date2 = Date;
              if (closure_130_3 > Date.now()) {
                closure_131_14.log("Skipping Background Sync because of clock skew");
                const Storage2 = closure_131_0(closure_131_2[13]).Storage;
                const _Date4 = Date;
                const result = Storage2.set(closure_131_16, Date.now());
                c7 = 3;
                let obj2 = { value: undefined, done: true };
                return obj2;
              } else {
                const _Date3 = Date;
                if (Date.now() - closure_130_3 < closure_131_15) {
                  closure_131_14.log("Skipping Background Sync because it has been too soon");
                  c7 = 3;
                  let obj3 = { value: undefined, done: true };
                  return obj3;
                }
              }
            }
            const Storage3 = closure_131_0(closure_131_2[13]).Storage;
            const _Date5 = Date;
            const result1 = Storage3.set(closure_131_16, Date.now());
            c6 = 2;
            c7 = 1;
            const obj4 = { value: closure_131_10.refresh(), done: false };
            return obj4;
          }
        } else {
          if (2 === tmp8) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              let obj5 = { value, done: true };
              return obj5;
            } else if (closure_131_10.isLowDisk) {
              closure_131_14.log("Skipping Background Sync because disk is low");
              c7 = 3;
            } else {
              closure_130_4 = {};
              const _Date = Date;
              closure_130_5 = Date.now();
              const _String2 = String;
              closure_130_6 = String(closure_130_5);
              closure_130_7 = -1;
              c5 = 2;
              c6 = 5;
              c7 = 1;
              let obj6 = { value: closure_131_1(closure_131_2[14]).startBackgroundTask(), done: false };
              return obj6;
            }
          } else if (3 !== tmp8) {
            if (4 === tmp8) {
              c5 = 1;
              closure_130_8 = closure_4;
              if (429 === closure_130_8.status) {
                closure_131_14.verbose("Background sync was rate limited");
              } else {
                closure_131_14.error("Background sync encountered error", closure_130_8);
              }
              if (!closure_130_8.timeout) {
                closure_131_1(closure_131_2[17]).captureException(closure_130_8);
                const obj12 = closure_131_1(closure_131_2[17]);
              }
              const _String = String;
              closure_130_4.error = String(closure_130_8.message);
            } else if (5 === tmp8) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 0;
                let obj8 = closure_131_1(closure_131_2[18]);
                obj8.track(closure_131_11.BACKGROUND_SYNC_COMPLETED, closure_130_4);
                closure_131_14.verbose("Finished Background Sync", closure_130_4);
                let obj9 = closure_131_1(closure_131_2[14]);
                obj9.endBackgroundTask(closure_130_7);
                c7 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                closure_130_7 = value;
                if (obj26.isIOS()) {
                  if (closure_130_7 === closure_131_1(closure_131_2[14]).backgroundTaskIdentifierInvalid) {
                    closure_131_14.verbose("Background sync skipped because background task could not be started");
                    c5 = 0;
                    obj5 = closure_131_1(closure_131_2[18]);
                    obj5.track(closure_131_11.BACKGROUND_SYNC_COMPLETED, closure_130_4);
                    closure_131_14.verbose("Finished Background Sync", closure_130_4);
                    obj6 = closure_131_1(closure_131_2[14]);
                    obj6.endBackgroundTask(closure_130_7);
                    c7 = 3;
                    obj8 = { value: undefined, done: true };
                    return obj8;
                  }
                }
                const items = [
                  closure_131_19(closure_130_6, closure_130_4, closure_130_5),
                  closure_131_23(closure_130_6, closure_130_4, closure_130_5, closure_130_2),
                ];
                if (closure_130_1) {
                  let resolved = Promise.resolve();
                } else {
                  resolved = closure_131_21(closure_130_4, closure_130_5, closure_130_0);
                }
                items[2] = resolved;
                all = all(items);
                c6 = 6;
                c7 = 1;
                obj26 = closure_131_0(closure_131_2[15]);
              }
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 0;
              obj2 = closure_131_1(closure_131_2[18]);
              obj2.track(closure_131_11.BACKGROUND_SYNC_COMPLETED, closure_130_4);
              closure_131_14.verbose("Finished Background Sync", closure_130_4);
              obj3 = closure_131_1(closure_131_2[14]);
              obj3.endBackgroundTask(closure_130_7);
              c7 = 3;
              obj9 = { value, done: true };
              return obj9;
            } else {
              obj = closure_131_1(closure_131_2[16]);
              const obj10 = { type: "BACKGROUND_SYNC_FINISHED", messagesOnly: closure_130_1 };
              obj.dispatch(obj10);
              c5 = 1;
            }
            c5 = 0;
            closure_131_1(closure_131_2[18]).track(closure_131_11.BACKGROUND_SYNC_COMPLETED, closure_130_4);
            closure_131_14.verbose("Finished Background Sync", closure_130_4);
            const obj13 = closure_131_1(closure_131_2[18]);
            closure_131_1(closure_131_2[14]).endBackgroundTask(closure_130_7);
            const obj14 = closure_131_1(closure_131_2[14]);
          }
          c5 = 0;
          closure_131_1(closure_131_2[18]).track(closure_131_11.BACKGROUND_SYNC_COMPLETED, closure_130_4);
          closure_131_14.verbose("Finished Background Sync", closure_130_4);
          const obj15 = closure_131_1(closure_131_2[18]);
          closure_131_1(closure_131_2[14]).endBackgroundTask(closure_130_7);
          throw closure_4;
        }
      } catch (tmp170) {
        closure_4 = tmp170;
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp170;
        } else if (tmp === tmp172) {
          c6 = tmp2;
        } else {
          c6 = tmp5;
        }
      }
    }
  })();
  iter.next();
  return iter;
};
function backgroundSyncPrivateChannels() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_20 = async function _backgroundSyncPrivateChannels(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp2;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          let body;
          closure_131_5 = undefined;
          const messagesResult = DatabaseDaosDefault.messages();
          closure_131_3 = messagesResult;
          if (null != messagesResult) {
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: constants.MESSAGE_LOG_PRIVATE_CHANNELS,
              body: null,
              timeout: 5000,
              rejectWithError: false,
            };
            let obj1 = { per_channel_limit, last_synced_message_id: null };
            const Storage2 = Storage4.Storage;
            obj1.last_synced_message_id = Storage2.get(lastSyncedPrivateChannelsMessageId);
            request.body = obj1;
            c5 = 1;
            c6 = 1;
            const obj2 = { value: HTTP.post(request), done: false };
            return obj2;
          } else {
            logger.log("Aborting BG sync because there is no database");
            c6 = 3;
          }
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          body = value.body;
          const _Date2 = Date;
          closure_131_1.time_finish_fetch_private_channel_messages = Date.now() - closure_131_2;
          closure_131_1.num_private_channel_messages = 0;
          const _JSON = JSON;
          closure_131_1.size_private_channel_messages = JSON.stringify(body).length;
          if (null != body.latest_message_id) {
            const Storage = closure_132_0(closure_132_2[13]).Storage;
            const result = Storage.set(closure_132_18, body.latest_message_id);
          }
          closure_131_5 = {};
          let obj5 = closure_132_1(closure_132_2[21]);
          const keys = obj5.keys(body.changes_by_channel_id);
          c5 = 2;
          c6 = 1;
          const obj4 = {
            value: Promise.all(
              keys.map((item) =>
                closure_2_25(closure_1_3, closure_1_5, null, item, closure_1_4.changes_by_channel_id[item]),
              ),
            ),
            done: false,
          };
          return obj4;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj5 = { value, done: true };
          return obj5;
        } else {
          if (!obj14.isEmpty(closure_131_5)) {
            obj1 = closure_132_1(closure_132_2[16]);
            const obj6 = { type: "BACKGROUND_SYNC_CHANNEL_MESSAGES", changesByChannelId: body.changes_by_channel_id };
            obj1.dispatch(obj6);
            c5 = 3;
            c6 = 1;
            const obj7 = {
              value: closure_132_27(closure_131_3, closure_131_5, closure_131_0, closure_131_1, undefined),
              done: false,
            };
            return obj7;
          }
          obj14 = closure_132_1(closure_132_2[22]);
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const _Date = Date;
        closure_131_1.time_save_private_channel_messages = Date.now() - closure_131_2;
      }
      c6 = 3;
      obj = { value, done: true };
      return obj;
    } catch (tmp42) {
      c6 = tmp;
      throw tmp42;
    }
  }
};
function backgroundSyncGuildData() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _backgroundSyncGuildData(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp2;
          closure_3 = tmp5;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          let body;
          let guilds;
          let api_code_version;
          closure_131_11 = undefined;
          const items = [GuildVersionsDefault.getCommittedVersions(), ,];
          items[1] = NonGuildVersionsDefault.getCommittedVersions();
          items[2] = KvCacheVersionDefault.canUseGuildVersions();
          c5 = 1;
          c6 = 1;
          const obj1 = { value: Promise.all(items), done: false };
          return obj1;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          closure_131_3 = value;
          closure_131_4 = closure_132_3(closure_131_3, 3);
          closure_131_5 = closure_131_4[0];
          closure_131_6 = closure_131_4[1];
          closure_131_7 = closure_131_4[2];
          const HTTP = closure_132_0(closure_132_2[20]).HTTP;
          let request = { url: closure_132_12.BACKGROUND_SYNC, body: null, timeout: 5000, rejectWithError: false };
          if (closure_131_7) {
            const obj3 = {
              guild_versions: closure_131_5,
              highest_last_message_id: closure_131_6.highest_last_message_id,
              api_code_version: closure_131_6.api_code_version,
              channel_privacy: closure_132_0(closure_132_2[26]).isChannelMetadataObfuscationEnabled("background-sync"),
            };
            let obj4 = obj3;
            const obj12 = closure_132_0(closure_132_2[26]);
          } else {
            obj4 = { channel_privacy: null };
            let obj9 = closure_132_0(closure_132_2[26]);
            obj4.channel_privacy = obj9.isChannelMetadataObfuscationEnabled("background-sync");
          }
          request.body = obj4;
          request = HTTP.post(request);
          c5 = 2;
          c6 = 1;
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            body = value.body;
            guilds = body.guilds;
            api_code_version = body.api_code_version;
            const _Date2 = Date;
            closure_131_0.time_finish_fetch_guild_data = Date.now() - closure_131_1;
            const _JSON = JSON;
            closure_131_0.size_guild_data = JSON.stringify(guilds).length;
            closure_131_0.num_guilds = guilds.length;
            closure_131_0.num_unavailable_guilds = 0;
            if (0 !== guilds.length) {
              guilds = guilds.map((unavailable) => {
                let tmp = unavailable;
                if (unavailable.unavailable) {
                  closure_1_0.num_unavailable_guilds = closure_1_0.num_unavailable_guilds + 1;
                  const obj = { id: unavailable.id, data_mode: "unavailable" };
                  tmp = obj;
                }
                return tmp;
              });
              const promise = new Promise((arg0) => setTimeout(arg0, 0));
              c5 = 3;
              c6 = 1;
              const obj6 = { value: promise, done: false };
              return obj6;
            } else {
              c6 = 3;
            }
          }
        } else if (3 === tmp5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            if (!closure_131_2) {
              if ("active" === closure_132_9.getState()) {
                closure_132_14.log("Skipping guild data background sync because app is now active");
              }
            }
            closure_131_11 = [];
            obj2 = closure_132_1(closure_132_2[16]);
            const obj8 = {
              type: "BACKGROUND_SYNC",
              guilds,
              emojis: guilds.map((data_mode) => {
                if ("unavailable" === data_mode.data_mode) {
                  let obj = { guildId: data_mode.id, dataMode: "unavailable" };
                } else if ("partial" === data_mode.data_mode) {
                  obj = { dataMode: "partial", guildId: data_mode.id, updatedEntities: null, deletedEntityIds: null };
                  let emojis = data_mode.partial_updates.emojis;
                  if (emojis == null) {
                    emojis = [];
                  }
                  obj.updatedEntities = emojis;
                  let deleted_emoji_ids = data_mode.partial_updates.deleted_emoji_ids;
                  if (deleted_emoji_ids == null) {
                    deleted_emoji_ids = [];
                  }
                  obj.deletedEntityIds = deleted_emoji_ids;
                } else {
                  obj = { dataMode: "full", guildId: null, entities: null };
                  ({ id: obj.guildId, emojis: obj.entities } = data_mode);
                }
                return obj;
              }),
              stickers: guilds.map((data_mode) => {
                if ("unavailable" === data_mode.data_mode) {
                  let obj = { guildId: data_mode.id, dataMode: "unavailable" };
                } else if ("partial" === data_mode.data_mode) {
                  obj = { dataMode: "partial", guildId: data_mode.id, updatedEntities: null, deletedEntityIds: null };
                  let stickers = data_mode.partial_updates.stickers;
                  if (stickers == null) {
                    stickers = [];
                  }
                  obj.updatedEntities = stickers;
                  let deleted_sticker_ids = data_mode.partial_updates.deleted_sticker_ids;
                  if (deleted_sticker_ids == null) {
                    deleted_sticker_ids = [];
                  }
                  obj.deletedEntityIds = deleted_sticker_ids;
                } else {
                  obj = { dataMode: "full", guildId: null, entities: null };
                  ({ id: obj.guildId, stickers: obj.entities } = data_mode);
                }
                return obj;
              }),
              apiCodeVersion: api_code_version,
              promisesForBackgroundSyncToWaitOn: closure_131_11,
            };
            obj2.dispatch(obj8);
            c5 = 4;
            c6 = 1;
            obj9 = { value: Promise.all(closure_131_11), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          obj = closure_132_0(closure_132_2[27]);
          obj.writeCaches(true);
          const _Date = Date;
          closure_131_0.time_save_guild_data = Date.now() - closure_131_1;
        }
        c6 = 3;
        const obj10 = { value, done: true };
        return obj10;
      }
    } catch (tmp47) {
      c6 = tmp;
      throw tmp47;
    }
  }
};
function backgroundSyncGuildChannels() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_24 = async function _backgroundSyncGuildChannels(arg0, value) {
  if (c22 === 2) {
    c22 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    while (true) {
      c22 = 2;
      let tmp4 = c21;
      if (0 === c21) {
        if (arg0 === 1) {
          c22 = 3;
          throw value;
        } else if (arg0 === 2) {
          c22 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_18 = tmp;
          closure_17 = tmp4;
          closure_145_0 = closure_0;
          closure_145_1 = closure_1;
          closure_145_2 = closure_2;
          closure_145_3 = closure_3;
          closure_145_5 = undefined;
          closure_145_6 = undefined;
          closure_145_7 = undefined;
          closure_145_8 = undefined;
          closure_145_9 = undefined;
          closure_145_10 = undefined;
          closure_145_11 = undefined;
          closure_145_12 = undefined;
          closure_145_13 = undefined;
          let body;
          closure_145_15 = undefined;
          closure_145_16 = undefined;
          closure_145_17 = undefined;
          closure_145_18 = undefined;
          closure_145_19 = undefined;
          let changes;
          let obj20 = DatabaseDaosDefault;
          let messagesResult = obj20.messages();
          closure_145_4 = messagesResult;
          if (null != messagesResult) {
            let _Array = Array;
            let tmp128 = _modDef12;
            readStatesByChannel = readStatesByChannel.getReadStatesByChannel();
            let tmp128Result = tmp128(Array.from(readStatesByChannel.values()));
            let found = tmp128Result.filter((channelId) => {
              basicChannel = basicChannel.getBasicChannel(channelId.channelId);
              let tmp2 = null != basicChannel;
              if (tmp2) {
                const tmp4 = closure_1_5(basicChannel.type);
                let tmp5 = !tmp4;
                if (!tmp4) {
                  tmp5 = !closure_1_6(basicChannel.type);
                }
                if (tmp5) {
                  tmp5 = null != channelId.guildId && null != channelId.lastViewed;
                  const tmp7 = null != channelId.guildId && null != channelId.lastViewed;
                }
                tmp2 = tmp5;
              }
              return tmp2;
            });
            let sortByResult = found.sortBy((lastViewed) => -lastViewed.lastViewed);
            let iter = sortByResult.slice(0, 25);
            let valueResult = iter.value();
            closure_145_5 = valueResult;
            let verboseResult = value.verbose(
              "Guild Message Background Syncing for ",
              valueResult.map((channelId) => channelId.channelId),
            );
            if (0 !== valueResult.length) {
              let _Promise = Promise;
              c21 = 1;
              c22 = 1;
              let obj1 = {
                value: Promise.all(
                  valueResult.map((guildId) =>
                    closure_1_4.withoutLogging().getLatest(guildId.guildId, guildId.channelId, 1),
                  ),
                ),
                done: false,
              };
              return obj1;
            }
          } else {
            let logResult = value.log("Aborting BG sync because there is no database");
          }
        }
      } else {
        if (1 === tmp4) {
          if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 === 2) {
            c22 = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            closure_145_6 = value;
            closure_145_7 = {};
            closure_145_8 = 0;
            if (closure_145_8 < closure_145_5.length) {
              do {
                let first = closure_145_6[closure_145_8][0];
                let id;
                if (first != null) {
                  id = first.id;
                }
                c4 = id;
                if (id == null) {
                  c4 = "0";
                }
                closure_145_9 = c4;
                closure_145_10 = closure_145_5[closure_145_8];
                let tmp81 = closure_145_3;
                if (closure_145_3) {
                  let obj8 = closure_146_1(closure_146_2[21]);
                  tmp81 = obj8.compare(closure_145_9, closure_145_10.lastMessageId) >= 0;
                }
                if (!tmp81) {
                  closure_145_7[closure_145_10.channelId] = closure_145_9;
                }
                closure_145_8 = closure_145_8 + 1;
              } while (closure_145_8 < closure_145_5.length);
            }
            let obj9 = closure_146_1(closure_146_2[22]);
            if (!obj9.isEmpty(closure_145_7)) {
              closure_145_11 = {};
              closure_6 = closure_145_6;
              closure_5 = closure_145_6[Symbol.iterator]();
              while (closure_5 !== undefined) {
                c20 = 1;
                closure_145_12 = tmp106;
                closure_8 = closure_145_12;
                let basicChannel = closure_145_12[Symbol.iterator]();
                while (basicChannel !== undefined) {
                  closure_145_13 = tmp112;
                  closure_145_11[closure_145_13.id] = closure_145_13;
                  c20 = 1;
                  continue;
                }
                c20 = 0;
                continue;
              }
              let HTTP = closure_146_0(closure_146_2[20]).HTTP;
              let request = { url: null, body: null, timeout: 5000, rejectWithError: false };
              request.url = closure_146_12.MESSAGE_LOG_GUILD_CHANNELS;
              let obj3 = { per_channel_limit: null, last_synced_message_id_by_channel_id: null };
              obj3.per_channel_limit = closure_146_13;
              obj3.last_synced_message_id_by_channel_id = closure_145_7;
              request.body = obj3;
              c21 = 3;
              c22 = 1;
              let obj4 = { value: HTTP.post(request), done: false };
              return obj4;
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
              let obj5 = { value, done: true };
              return obj5;
            } else {
              body = value.body;
              let _Date2 = Date;
              closure_145_1.time_finish_fetch_guild_channel_messages = Date.now() - closure_145_2;
              closure_145_1.num_guild_channel_messages = 0;
              let _JSON = JSON;
              closure_145_1.size_guild_channel_messages = JSON.stringify(body).length;
              closure_145_15 = {};
              closure_10 = closure_145_5;
              AppStateStore = closure_145_5[Symbol.iterator]();
              while (AppStateStore !== undefined) {
                closure_145_16 = tmp16;
                closure_145_15[closure_145_16.channelId] = closure_145_16.guildId;
                c20 = 0;
                continue;
              }
              closure_145_17 = {};
              closure_145_18 = {};
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
              obj3 = closure_146_1(closure_146_2[22]);
              if (!obj3.isEmpty(closure_145_17)) {
                obj4 = closure_146_1(closure_146_2[16]);
                let obj6 = { type: "BACKGROUND_SYNC_CHANNEL_MESSAGES", changesByChannelId: null };
                obj6.changesByChannelId = closure_145_18;
                let dispatchResult = obj4.dispatch(obj6);
                c21 = 7;
                c22 = 1;
                let obj7 = {
                  value: closure_146_27(closure_145_4, closure_145_17, closure_145_0, closure_145_1, closure_145_15),
                  done: false,
                };
                return obj7;
              }
            }
          } else if (4 === tmp4) {
            c20 = 1;
            basicChannel.return();
            throw backgroundSyncPrivateChannels;
          } else if (5 === tmp4) {
            c20 = 0;
            AppStateStore.return();
            throw backgroundSyncPrivateChannels;
          } else if (6 === tmp4) {
            if (arg0 === 1) {
              c22 = 3;
              throw value;
            } else if (arg0 === 2) {
              c22 = 3;
              obj8 = { value, done: true };
              return obj8;
            }
          } else if (arg0 === 1) {
            c22 = 3;
            throw value;
          } else if (arg0 !== 2) {
            let _Date = Date;
            closure_145_1.time_save_guild_channel_messages = Date.now() - closure_145_2;
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
            closure_145_19 = tmp33;
            changes = body.change_logs_by_channel_id[closure_145_19].changes;
            if (null == changes) {
              continue;
            } else {
              closure_145_18[closure_145_19] = changes;
              let tmp40 = closure_145_4;
              let tmp41 = closure_145_17;
              let tmp44 = closure_145_15[closure_145_19];
              c16 = tmp44;
              let tmp39 = closure_146_25;
              if (tmp44 == null) {
                c16 = null;
              }
              c21 = 6;
              c22 = 1;
              obj9 = {
                value: tmp39(tmp40, tmp41, c16, closure_145_19, body.change_logs_by_channel_id[closure_145_19].changes),
                done: false,
              };
              return obj9;
            }
          }
          closure_15 = tmp33;
          closure_14 = tmp31;
          closure_13 = tmp30;
          closure_12 = tmp29;
          closure_11 = tmp28;
        }
        c22 = 3;
        obj = { value, done: true };
        return obj;
      }
      c22 = 3;
    }
  }
};
function processChannelChanges() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_26 = async function _processChannelChanges(arg0, value) {
  if (c12 === 2) {
    c12 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    while (true) {
      c12 = 2;
      let tmp4 = c11;
      if (0 === c11) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_8 = tmp;
          closure_7 = tmp4;
          closure_135_0 = closure_0;
          closure_135_1 = closure_1;
          closure_135_2 = closure_2;
          closure_135_3 = closure_3;
          let tmp67 = closure_4;
          closure_135_4 = undefined;
          closure_135_5 = undefined;
          closure_135_6 = undefined;
          closure_135_7 = undefined;
          closure_135_8 = undefined;
          closure_135_9 = undefined;
          if (null != closure_4) {
            let new_messages = tmp67.new_messages;
            if (undefined === new_messages) {
              new_messages = [];
            }
            closure_135_4 = new_messages;
            let modified_messages = tmp67.modified_messages;
            if (undefined === modified_messages) {
              modified_messages = [];
            }
            let deleted_message_ids = tmp67.deleted_message_ids;
            if (undefined === deleted_message_ids) {
              deleted_message_ids = [];
            }
            closure_135_5 = deleted_message_ids;
            let obj2 = _modDef12;
            let tmp26 = _slicedToArray(obj2.partition(modified_messages, modules_Messages.isLikelyNotDelta), 2);
            let arr4 = tmp26[1];
            closure_135_6 = arr4;
            let push = new_messages.push;
            let items = [];
            let arraySpreadResult = HermesBuiltin.arraySpread(tmp26[0], 0);
            let applyResult = HermesBuiltin.apply(items, new_messages);
            if (arr4.length > 0) {
              let _Promise = Promise;
              c11 = 1;
              c12 = 1;
              let obj1 = {
                value: Promise.all(
                  arr4.map((channel_id) =>
                    closure_1_0.withoutLogging().get(closure_1_2, channel_id.channel_id, channel_id.id),
                  ),
                ),
                done: false,
              };
              return obj1;
            }
          }
          c12 = 3;
          return { value: "HermesInternal", done: null };
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          obj2 = { value, done: true };
          return obj2;
        } else {
          closure_135_7 = value.filter(closure_136_0(closure_136_2[29]).isNotNullish);
          let _HermesInternal = HermesInternal;
          let verboseResult = closure_136_14.verbose(
            "Fetched " + closure_135_7.length + " modified messages from the database",
          );
          let obj7 = closure_136_1(closure_136_2[22]);
          closure_135_8 = obj7.keyBy(closure_135_7, "id");
          closure_6 = closure_135_6;
          closure_5 = closure_135_6[Symbol.iterator]();
          while (closure_5 !== undefined) {
            c10 = 1;
            closure_135_9 = tmp10;
            if (closure_135_9.id in closure_135_8) {
              obj = {};
              let merged = Object.assign(closure_135_8[closure_135_9.id].message);
              let merged1 = Object.assign(closure_135_9);
              let arr = closure_135_4.push(obj);
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
      let tmp35 = closure_135_4.length > 0;
      if (!tmp35) {
        tmp35 = closure_135_5.length > 0;
      }
      if (tmp35) {
        let items1 = [closure_135_4];
        items1[1] = closure_135_5;
        closure_135_1[closure_135_3] = items1;
      }
    }
  }
};
function writeMessageChanges(transaction, arg1, arg2, arg3, arg4) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = arg3;
  closure_3 = arg4;
  return transaction.transaction((arg0) => {
    closure_0 = arg0;
    for (const key10005 in closure_0) {
      let tmpResult = tmp(key10005);
      continue;
    }
  }, "Background Sync");
}
const ChannelRecord = fn(1961);
({ isPrivate: hasOwnProperty, isThread: metroRequire } = ChannelRecord);
const Constants = fn(1074);
({ AnalyticEvents: closure_11, Endpoints: closure_12, MAX_MESSAGES_PER_CHANNEL: map1 } = Constants);
const StickersStore = fn(5502);
const ChannelStore = fn(1957);
const EmojiStore = fn(5459);
const GuildStore = fn(1979);
let closure_14 = new LoggerDefault("BackgroundSync");
let closure_15 = 4 * DurationsDefault.Millis.HOUR;
const lastSyncTime = "lastSyncTime";
const lastSyncedPrivateChannelsMessageId = "lastSyncedPrivateChannelsMessageId";
const size = fn(2);
let result = size.fileFinishedImporting("modules/app_database/background_sync/native/BackgroundSync.tsx");

export const backgroundSync = function backgroundSync() {
  const self = this;
  const apply = closure_17.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
