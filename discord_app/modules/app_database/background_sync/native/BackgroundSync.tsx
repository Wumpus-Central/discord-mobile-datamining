// === Module 16830: _backgroundSync ===

// Module 16830 (_backgroundSync)
import timestampDefault from "timestamp" /* 3 */;
import setDefault from "set" /* 687 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "asyncGeneratorStep" /* 5 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import closure_7 from "ensureGuildLoaded" /* 1391 */;
import closure_8 from "generateOldThreadCutoff" /* 4461 */;
import closure_9 from "getState" /* 7104 */;
import closure_10 from "result" /* 7171 */;
import ME from "ME" /* 676 */;
import loadSavedGuildStickers from "loadSavedGuildStickers" /* 5409 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getEmojiToGroupId from "getEmojiToGroupId" /* 5366 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;

const require = arg1;
function _backgroundSync() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    const iter = (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp6;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp7 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
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
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_3 = tmp3;
                let flag3 = tmp8;
                let flag;
                let callback;
                flag3 = undefined;
                throwTypeErrorResult = flag;
                flag = flag.force;
                if (flag === undefined) {
                  flag = false;
                }
                let flag2 = throwTypeErrorResult.messagesOnly;
                if (flag2 === undefined) {
                  flag2 = false;
                }
                callback = flag2;
                flag3 = throwTypeErrorResult.checkLastMessageId;
                if (flag3 === undefined) {
                  flag3 = false;
                }
                closure_3 = undefined;
                closure_4 = undefined;
                c5 = undefined;
                c6 = undefined;
                c7 = undefined;
                c6 = 1;
                c7 = 1;
                return { value: "ct", done: true };
              }
            } else if (1 === tmp8) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = arg1;
                return obj1;
              } else {
                throwTypeErrorResult = flag3;
                throwTypeErrorResult = closure_3;
                throwTypeErrorResult = closure_14;
                throwTypeErrorResult = closure_14.verbose("Starting Background Sync");
                throwTypeErrorResult = flag;
                if (!flag) {
                  throwTypeErrorResult = closure_3;
                  throwTypeErrorResult = flag;
                  throwTypeErrorResult = flag3;
                  const Storage = flag(flag3[13]).Storage;
                  throwTypeErrorResult = closure_16;
                  throwTypeErrorResult = Storage.get(closure_16);
                  callback = throwTypeErrorResult;
                  if (throwTypeErrorResult == null) {
                    callback = 0;
                  }
                  throwTypeErrorResult = flag3;
                  throwTypeErrorResult = callback;
                  closure_3 = callback;
                  throwTypeErrorResult = closure_3;
                  const _Date2 = Date;
                  if (closure_3 > Date.now()) {
                    throwTypeErrorResult = closure_3;
                    throwTypeErrorResult = closure_14;
                    throwTypeErrorResult = closure_14.log("Skipping Background Sync because of clock skew");
                    throwTypeErrorResult = flag;
                    throwTypeErrorResult = flag3;
                    const Storage2 = flag(flag3[13]).Storage;
                    throwTypeErrorResult = closure_16;
                    const _Date4 = Date;
                    throwTypeErrorResult = Storage2.set(closure_16, Date.now());
                    c7 = 3;
                    let obj2 = { value: null, done: true };
                    obj2[0] = undefined;
                    return obj2;
                  } else {
                    throwTypeErrorResult = flag3;
                    throwTypeErrorResult = closure_3;
                    const _Date3 = Date;
                    throwTypeErrorResult = closure_3;
                    throwTypeErrorResult = closure_15;
                    if (Date.now() - closure_3 < closure_15) {
                      throwTypeErrorResult = closure_3;
                      throwTypeErrorResult = closure_14;
                      throwTypeErrorResult = closure_14.log("Skipping Background Sync because it has been too soon");
                      c7 = 3;
                      let obj3 = { value: null, done: true };
                      obj3[0] = undefined;
                      return obj3;
                    }
                  }
                }
                throwTypeErrorResult = closure_3;
                throwTypeErrorResult = flag;
                throwTypeErrorResult = flag3;
                const Storage3 = flag(flag3[13]).Storage;
                throwTypeErrorResult = closure_16;
                const _Date5 = Date;
                throwTypeErrorResult = Storage3.set(closure_16, Date.now());
                throwTypeErrorResult = closure_10;
                c6 = 2;
                c7 = 1;
                const obj4 = { value: null, done: false };
                obj4[0] = closure_10.refresh();
                return obj4;
              }
            } else {
              if (2 === tmp8) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c7 = 3;
                  let obj5 = { value: null, done: true };
                  obj5[0] = arg1;
                  return obj5;
                } else {
                  throwTypeErrorResult = closure_3;
                  throwTypeErrorResult = closure_10;
                  if (closure_10.isLowDisk) {
                    throwTypeErrorResult = closure_3;
                    throwTypeErrorResult = closure_14;
                    throwTypeErrorResult = closure_14.log("Skipping Background Sync because disk is low");
                    c7 = 3;
                  } else {
                    throwTypeErrorResult = flag3;
                    closure_4 = {};
                    const _Date = Date;
                    c5 = Date.now();
                    const _String2 = String;
                    throwTypeErrorResult = c5;
                    c6 = String(c5);
                    c7 = -1;
                    throwTypeErrorResult = closure_3;
                    c5 = 2;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = flag3;
                    c6 = 5;
                    c7 = 1;
                    let obj6 = { value: null, done: false };
                    obj6[0] = callback(flag3[14]).startBackgroundTask();
                    return obj6;
                  }
                }
              } else if (3 !== tmp8) {
                if (4 === tmp8) {
                  c5 = 1;
                  const config = closure_4;
                  if (429 === config.status) {
                    closure_14.verbose("Background sync was rate limited");
                  } else {
                    closure_14.error("Background sync encountered error", config);
                  }
                  if (!config.timeout) {
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = flag3;
                    throwTypeErrorResult = config;
                    throwTypeErrorResult = callback(flag3[17]).captureException(config);
                    const obj12 = callback(flag3[17]);
                  }
                  throwTypeErrorResult = flag3;
                  throwTypeErrorResult = closure_4;
                  const _String = String;
                  throwTypeErrorResult = config;
                  closure_4.error = String(config.message);
                } else if (5 === tmp8) {
                  if (arg0 === 1) {
                    c7 = 3;
                    throw arg1;
                  } else if (arg0 === 2) {
                    c5 = 0;
                    let obj8 = callback(flag3[18]);
                    obj8.track(constants.BACKGROUND_SYNC_COMPLETED, closure_4);
                    closure_14.verbose("Finished Background Sync", closure_4);
                    let obj9 = callback(flag3[14]);
                    obj9.endBackgroundTask(c7);
                    c7 = 3;
                    const obj7 = { value: null, done: true };
                    obj7[0] = arg1;
                    return obj7;
                  } else {
                    throwTypeErrorResult = flag3;
                    throwTypeErrorResult = closure_3;
                    c7 = arg1;
                    throwTypeErrorResult = flag;
                    throwTypeErrorResult = flag3;
                    if (obj26.isIOS()) {
                      if (c7 === callback(flag3[14]).backgroundTaskIdentifierInvalid) {
                        closure_14.verbose("Background sync skipped because background task could not be started");
                        c5 = 0;
                        obj5 = callback(flag3[18]);
                        obj5.track(constants.BACKGROUND_SYNC_COMPLETED, closure_4);
                        closure_14.verbose("Finished Background Sync", closure_4);
                        obj6 = callback(flag3[14]);
                        obj6.endBackgroundTask(c7);
                        c7 = 3;
                        obj8 = { value: null, done: true };
                        obj8[0] = undefined;
                        return obj8;
                      }
                    }
                    const items = [callback2(c6, closure_4, c5), callback4(c6, closure_4, c5, flag3), ];
                    if (callback) {
                      let resolved = Promise.resolve();
                    } else {
                      resolved = callback3(closure_4, c5, flag);
                    }
                    items[2] = resolved;
                    all = all(items);
                    c6 = 6;
                    c7 = 1;
                    obj26 = flag(flag3[15]);
                  }
                } else if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  c5 = 0;
                  obj2 = callback(flag3[18]);
                  obj2.track(constants.BACKGROUND_SYNC_COMPLETED, closure_4);
                  closure_14.verbose("Finished Background Sync", closure_4);
                  obj3 = callback(flag3[14]);
                  obj3.endBackgroundTask(c7);
                  c7 = 3;
                  obj9 = { value: null, done: true };
                  obj9[0] = arg1;
                  return obj9;
                } else {
                  obj = callback(flag3[16]);
                  const obj10 = { type: "BACKGROUND_SYNC_FINISHED", messagesOnly: null };
                  obj10[1] = callback;
                  obj.dispatch(obj10);
                  c5 = 1;
                }
                c5 = 0;
                throwTypeErrorResult = flag3;
                throwTypeErrorResult = closure_3;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = flag3;
                throwTypeErrorResult = constants;
                throwTypeErrorResult = closure_4;
                throwTypeErrorResult = callback(flag3[18]).track(constants.BACKGROUND_SYNC_COMPLETED, closure_4);
                throwTypeErrorResult = closure_14;
                throwTypeErrorResult = closure_4;
                throwTypeErrorResult = closure_14.verbose("Finished Background Sync", closure_4);
                throwTypeErrorResult = callback;
                throwTypeErrorResult = flag3;
                const obj13 = callback(flag3[18]);
                throwTypeErrorResult = c7;
                throwTypeErrorResult = callback(flag3[14]).endBackgroundTask(c7);
                const obj14 = callback(flag3[14]);
              }
              throwTypeErrorResult = flag3;
              throwTypeErrorResult = closure_3;
              throwTypeErrorResult = closure_4;
              throwTypeErrorResult = closure_4;
              c5 = 0;
              throwTypeErrorResult = callback;
              throwTypeErrorResult = flag3;
              throwTypeErrorResult = constants;
              throwTypeErrorResult = closure_4;
              throwTypeErrorResult = callback(flag3[18]).track(constants.BACKGROUND_SYNC_COMPLETED, closure_4);
              throwTypeErrorResult = closure_14;
              throwTypeErrorResult = closure_4;
              throwTypeErrorResult = closure_14.verbose("Finished Background Sync", closure_4);
              throwTypeErrorResult = callback;
              throwTypeErrorResult = flag3;
              const obj15 = callback(flag3[18]);
              throwTypeErrorResult = c7;
              throwTypeErrorResult = callback(flag3[14]).endBackgroundTask(c7);
              throw closure_4;
            }
          } catch (throwTypeErrorResult) {
            closure_4 = throwTypeErrorResult;
            if (tmp4 === c5) {
              throwTypeErrorResult = tmp2;
              c7 = tmp2;
              throw throwTypeErrorResult;
            } else if (throwTypeErrorResult === throwTypeErrorResult) {
              c6 = tmp2;
            } else {
              c6 = tmp5;
            }
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_17 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function backgroundSyncPrivateChannels() {
  const self = this;
  const apply = _backgroundSyncPrivateChannels.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _backgroundSyncPrivateChannels() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
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
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              body = tmp2;
              c3 = tmp5;
              c3 = undefined;
              body = undefined;
              c5 = undefined;
              const messagesResult = callback2(1957).messages();
              c3 = messagesResult;
              if (null != messagesResult) {
                const HTTP = callback(530).HTTP;
                obj1 = { url: null, body: null, timeout: 5000, rejectWithError: false };
                obj1[0] = closure_1_12.MESSAGE_LOG_PRIVATE_CHANNELS;
                const obj2 = { per_channel_limit: null, last_synced_message_id: null };
                obj2[0] = closure_1_13;
                const Storage2 = callback(595).Storage;
                obj2[1] = Storage2.get(closure_1_18);
                obj1[1] = obj2;
                c5 = 1;
                c6 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.post(obj1);
                return obj3;
              } else {
                closure_1_14.log("Aborting BG sync because there is no database");
                c6 = 3;
              }
              const obj15 = callback2(1957);
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = body;
              return obj4;
            } else {
              body = body.body;
              const _Date2 = Date;
              callback2.time_finish_fetch_private_channel_messages = Date.now() - dependencyMap;
              callback2.num_private_channel_messages = 0;
              const _JSON = JSON;
              callback2.size_private_channel_messages = JSON.stringify(body).length;
              if (null != body.latest_message_id) {
                const Storage = callback(595).Storage;
                const result = Storage.set(closure_18, body.latest_message_id);
              }
              c5 = {};
              let obj5 = callback2(11);
              const keys = obj5.keys(body.changes_by_channel_id);
              c5 = 2;
              c6 = 1;
              obj5 = { value: null, done: false };
              obj5[0] = Promise.all(keys.map((arg0) => closure_1_25(c3, c5, null, arg0, body.changes_by_channel_id[arg0])));
              return obj5;
            }
          } else if (2 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj6 = { value: null, done: true };
              obj6[0] = body;
              return obj6;
            } else {
              if (!obj14.isEmpty(c5)) {
                obj1 = callback2(709);
                const obj7 = { type: "BACKGROUND_SYNC_CHANNEL_MESSAGES", changesByChannelId: null };
                obj7[1] = body.changes_by_channel_id;
                obj1.dispatch(obj7);
                c5 = 3;
                c6 = 1;
                const obj8 = { value: null, done: false };
                obj8[0] = callback3(c3, c5, callback, callback2, undefined);
                return obj8;
              }
              obj14 = callback2(12);
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw body;
          } else if (arg0 !== 2) {
            const _Date = Date;
            callback2.time_save_private_channel_messages = Date.now() - dependencyMap;
          }
          c6 = 3;
          obj = { value: null, done: true };
          obj[0] = body;
          return obj;
        } catch (tmp42) {
          c6 = tmp;
          throw tmp42;
        }
      }
    })();
  });
  closure_20 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function backgroundSyncGuildData() {
  const self = this;
  const apply = _backgroundSyncGuildData.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _backgroundSyncGuildData() {
  const self = this;
  let tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c5 = 0;
    c6 = 0;
    return (function*(arg0, body) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
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
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let dependencyMap2 = tmp2;
              let callback3 = tmp5;
              callback3 = undefined;
              dependencyMap2 = undefined;
              c5 = undefined;
              c6 = undefined;
              closure_7 = undefined;
              body = undefined;
              let guilds;
              let api_code_version;
              closure_11 = undefined;
              const items = [callback2(7345).getCommittedVersions(), , ];
              const obj18 = callback2(7345);
              items[1] = callback2(7348).getCommittedVersions();
              const obj19 = callback2(7348);
              items[2] = callback2(7346).canUseGuildVersions();
              c5 = 1;
              c6 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = Promise.all(items);
              return obj1;
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 === 2) {
              c6 = 3;
              let obj2 = { value: null, done: true };
              obj2[0] = body;
              return obj2;
            } else {
              callback3 = body;
              dependencyMap2 = callback3(callback3, 3);
              c5 = 32;
              c6 = 5;
              closure_7 = 1395;
              const HTTP = callback(530).HTTP;
              let obj3 = { url: null, body: null, timeout: 5000, rejectWithError: false };
              obj3[0] = constants.BACKGROUND_SYNC;
              if (closure_7) {
                const obj4 = { guild_versions: null, highest_last_message_id: null, api_code_version: null, channel_privacy: null };
                obj4[0] = c5;
                obj4[1] = c6.highest_last_message_id;
                obj4[2] = c6.api_code_version;
                let obj11 = callback(13257);
                obj4[3] = obj11.isChannelMetadataObfuscationEnabled("background-sync");
                let obj5 = obj4;
              } else {
                obj5 = { channel_privacy: null };
                let obj9 = callback(13257);
                obj5[0] = obj9.isChannelMetadataObfuscationEnabled("background-sync");
              }
              obj3[1] = obj5;
              obj3 = HTTP.post(obj3);
              c5 = 2;
              c6 = 1;
            }
          } else {
            if (2 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw body;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = body;
                return obj6;
              } else {
                body = body.body;
                guilds = body.guilds;
                api_code_version = body.api_code_version;
                const _Date2 = Date;
                callback.time_finish_fetch_guild_data = Date.now() - callback2;
                const _JSON = JSON;
                callback.size_guild_data = JSON.stringify(guilds).length;
                callback.num_guilds = guilds.length;
                callback.num_unavailable_guilds = 0;
                if (0 !== guilds.length) {
                  guilds = guilds.map((unavailable) => {
                    let tmp = unavailable;
                    if (unavailable.unavailable) {
                      obj.num_unavailable_guilds = obj.num_unavailable_guilds + 1;
                      obj = { id: null, data_mode: "unavailable" };
                      obj[0] = unavailable.id;
                      tmp = obj;
                    }
                    return tmp;
                  });
                  const promise = new Promise((arg0) => setTimeout(arg0, 0));
                  c5 = 3;
                  c6 = 1;
                  const obj7 = { value: null, done: false };
                  obj7[0] = promise;
                  return obj7;
                } else {
                  c6 = 3;
                }
              }
            } else if (3 === tmp5) {
              if (arg0 === 1) {
                c6 = 3;
                throw body;
              } else if (arg0 === 2) {
                c6 = 3;
                const obj8 = { value: null, done: true };
                obj8[0] = body;
                return obj8;
              } else {
                if (!dependencyMap) {
                  if ("active" === guilds.getState()) {
                    logger.log("Skipping guild data background sync because app is now active");
                  }
                }
                closure_11 = [];
                obj2 = callback2(709);
                obj9 = { type: "BACKGROUND_SYNC", guilds: null, emojis: null, stickers: null, apiCodeVersion: null, promisesForBackgroundSyncToWaitOn: null };
                obj9[1] = guilds;
                obj9[2] = guilds.map((data_mode) => {
                  if ("unavailable" === data_mode.data_mode) {
                    let obj = { guildId: null, dataMode: "unavailable" };
                    obj[0] = data_mode.id;
                  } else if ("partial" === data_mode.data_mode) {
                    obj = { dataMode: "partial", guildId: null, updatedEntities: null, deletedEntityIds: null };
                    obj[1] = data_mode.id;
                    let emojis = data_mode.partial_updates.emojis;
                    if (emojis == null) {
                      emojis = [];
                    }
                    obj[2] = emojis;
                    let deleted_emoji_ids = data_mode.partial_updates.deleted_emoji_ids;
                    if (deleted_emoji_ids == null) {
                      deleted_emoji_ids = [];
                    }
                    obj[3] = deleted_emoji_ids;
                  } else {
                    obj = { dataMode: "full", guildId: null, entities: null };
                    ({ id: obj[1], emojis: obj[2] } = data_mode);
                  }
                  return obj;
                });
                obj9[3] = guilds.map((data_mode) => {
                  if ("unavailable" === data_mode.data_mode) {
                    let obj = { guildId: null, dataMode: "unavailable" };
                    obj[0] = data_mode.id;
                  } else if ("partial" === data_mode.data_mode) {
                    obj = { dataMode: "partial", guildId: null, updatedEntities: null, deletedEntityIds: null };
                    obj[1] = data_mode.id;
                    let stickers = data_mode.partial_updates.stickers;
                    if (stickers == null) {
                      stickers = [];
                    }
                    obj[2] = stickers;
                    let deleted_sticker_ids = data_mode.partial_updates.deleted_sticker_ids;
                    if (deleted_sticker_ids == null) {
                      deleted_sticker_ids = [];
                    }
                    obj[3] = deleted_sticker_ids;
                  } else {
                    obj = { dataMode: "full", guildId: null, entities: null };
                    ({ id: obj[1], stickers: obj[2] } = data_mode);
                  }
                  return obj;
                });
                obj9[4] = api_code_version;
                obj9[5] = closure_11;
                obj2.dispatch(obj9);
                c5 = 4;
                c6 = 1;
                const obj10 = { value: null, done: false };
                obj10[0] = Promise.all(closure_11);
                return obj10;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw body;
            } else if (arg0 !== 2) {
              obj = callback(15103);
              obj.writeCaches(true);
              const _Date = Date;
              callback.time_save_guild_data = Date.now() - callback2;
            }
            c6 = 3;
            obj11 = { value: null, done: true };
            obj11[0] = body;
            return obj11;
          }
        } catch (tmp47) {
          c6 = tmp;
          throw tmp47;
        }
      }
    })();
  });
  closure_22 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function backgroundSyncGuildChannels() {
  const self = this;
  const apply = _backgroundSyncGuildChannels.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _backgroundSyncGuildChannels() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c21 = 0;
    c22 = 0;
    c20 = 0;
    return (function*(arg0, body) {
      if (c22 === 2) {
        c22 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = body;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp2;
        throwTypeErrorResult = globalThis;
        throwTypeErrorResult = null;
        if (tmp3 === 3) {
          if (arg0 === 1) {
            throw body;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = body;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            let num = 2;
            c22 = 2;
            let tmp4 = c21;
            if (0 === c21) {
              if (arg0 === 1) {
                let num16 = 3;
                c22 = 3;
                throw body;
              } else if (arg0 === 2) {
                let num15 = 3;
                c22 = 3;
                obj = { value: null, done: true };
                obj[0] = body;
                return obj;
              } else {
                closure_18 = throwTypeErrorResult;
                closure_17 = tmp4;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                throwTypeErrorResult = closure_3;
                c4 = undefined;
                let lib;
                let dependencyMap2;
                closure_7 = undefined;
                closure_8 = undefined;
                closure_9 = undefined;
                closure_10 = undefined;
                let table;
                let lib2;
                let id;
                body = undefined;
                let table2;
                c16 = undefined;
                closure_17 = undefined;
                closure_18 = undefined;
                closure_19 = undefined;
                let changes;
                throwTypeErrorResult = callback2;
                throwTypeErrorResult = dependencyMap;
                let obj20 = callback2(1957);
                throwTypeErrorResult = obj20.messages();
                c4 = throwTypeErrorResult;
                if (null != throwTypeErrorResult) {
                  throwTypeErrorResult = callback2;
                  throwTypeErrorResult = dependencyMap;
                  let _Array = Array;
                  throwTypeErrorResult = closure_1_8;
                  throwTypeErrorResult = callback2(12);
                  let readStatesByChannel = closure_1_8.getReadStatesByChannel();
                  let throwTypeErrorResultResult = throwTypeErrorResult(Array.from(readStatesByChannel.values()));
                  let found = throwTypeErrorResultResult.filter((channelId) => {
                    basicChannel = basicChannel.getBasicChannel(channelId.channelId);
                    let tmp2 = null != basicChannel;
                    if (tmp2) {
                      const tmp4 = callback(basicChannel.type);
                      let tmp5 = !tmp4;
                      if (!tmp4) {
                        tmp5 = !callback2(basicChannel.type);
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
                  lib = valueResult;
                  throwTypeErrorResult = closure_1_14;
                  throwTypeErrorResult = closure_1_14.verbose("Guild Message Background Syncing for ", valueResult.map((channelId) => channelId.channelId));
                  if (0 !== valueResult.length) {
                    let _Promise = Promise;
                    c21 = 1;
                    let num14 = 1;
                    c22 = 1;
                    obj1 = { value: null, done: false };
                    obj1[0] = Promise.all(valueResult.map((guildId) => v0.withoutLogging().getLatest(guildId.guildId, guildId.channelId, 1)));
                    return obj1;
                  }
                } else {
                  throwTypeErrorResult = closure_1_14;
                  throwTypeErrorResult = closure_1_14.log("Aborting BG sync because there is no database");
                }
              }
            } else {
              if (1 === tmp4) {
                if (arg0 === 1) {
                  let num12 = 3;
                  c22 = 3;
                  throw body;
                } else if (arg0 === 2) {
                  let num11 = 3;
                  c22 = 3;
                  let obj2 = { value: null, done: true };
                  obj2[0] = body;
                  return obj2;
                } else {
                  throwTypeErrorResult = closure_17;
                  dependencyMap2 = body;
                  closure_7 = {};
                  closure_8 = 0;
                  throwTypeErrorResult = closure_8;
                  throwTypeErrorResult = lib;
                  if (closure_8 < lib.length) {
                    do {
                      let tmp72 = closure_17;
                      let tmp73 = dependencyMap2;
                      let tmp74 = closure_8;
                      let first = dependencyMap2[closure_8][0];
                      id = undefined;
                      if (first != null) {
                        id = first.id;
                      }
                      c4 = id;
                      if (id == null) {
                        c4 = "0";
                      }
                      let tmp77 = closure_17;
                      let tmp78 = c4;
                      closure_9 = c4;
                      let tmp79 = lib;
                      let tmp80 = closure_8;
                      closure_10 = lib[closure_8];
                      let tmp81 = closure_3;
                      if (closure_3) {
                        let tmp82 = closure_17;
                        let tmp83 = closure_18;
                        let tmp84 = callback2;
                        let tmp85 = dependencyMap;
                        let obj8 = callback2(11);
                        let tmp86 = closure_9;
                        let tmp87 = closure_10;
                        tmp81 = obj8.compare(closure_9, closure_10.lastMessageId) >= 0;
                      }
                      if (!tmp81) {
                        let tmp88 = closure_17;
                        let tmp89 = closure_7;
                        let tmp90 = closure_10;
                        let tmp91 = closure_9;
                        closure_7[closure_10.channelId] = closure_9;
                      }
                      let tmp92 = closure_17;
                      let tmp93 = closure_8;
                      closure_8 = closure_8 + 1;
                      let tmp94 = closure_8;
                      let tmp95 = lib;
                    } while (closure_8 < lib.length);
                  }
                  let tmp96 = closure_17;
                  let tmp97 = closure_18;
                  let tmp98 = callback2;
                  let tmp99 = dependencyMap;
                  let obj9 = callback2(12);
                  throwTypeErrorResult = closure_7;
                  if (!obj9.isEmpty(closure_7)) {
                    throwTypeErrorResult = closure_17;
                    table = {};
                    throwTypeErrorResult = dependencyMap2;
                    throwTypeErrorResult = dependencyMap2;
                    lib = dependencyMap2[Symbol.iterator]();
                    throwTypeErrorResult = dependencyMap2;
                    throwTypeErrorResult = lib;
                    while (lib !== undefined) {
                      throwTypeErrorResult = closure_17;
                      changes = 1;
                      lib2 = throwTypeErrorResult;
                      throwTypeErrorResult = lib2;
                      closure_8 = lib2;
                      throwTypeErrorResult = lib2;
                      closure_8 = lib2;
                      closure_7 = lib2[Symbol.iterator]();
                      throwTypeErrorResult = closure_8;
                      throwTypeErrorResult = closure_7;
                      while (closure_7 !== undefined) {
                        throwTypeErrorResult = closure_17;
                        changes = 2;
                        id = throwTypeErrorResult;
                        throwTypeErrorResult = table;
                        throwTypeErrorResult = id;
                        throwTypeErrorResult = id;
                        table[id.id] = id;
                        changes = 1;
                        continue;
                      }
                      changes = 0;
                      continue;
                    }
                    throwTypeErrorResult = closure_17;
                    throwTypeErrorResult = closure_18;
                    throwTypeErrorResult = callback;
                    throwTypeErrorResult = dependencyMap;
                    let HTTP = callback(530).HTTP;
                    let obj3 = { url: null, body: null, timeout: 5000, rejectWithError: false };
                    throwTypeErrorResult = lib2;
                    obj3[0] = lib2.MESSAGE_LOG_GUILD_CHANNELS;
                    let obj4 = { per_channel_limit: null, last_synced_message_id_by_channel_id: null };
                    throwTypeErrorResult = id;
                    obj4[0] = id;
                    throwTypeErrorResult = closure_7;
                    obj4[1] = closure_7;
                    obj3[1] = obj4;
                    c21 = 3;
                    let num10 = 1;
                    c22 = 1;
                    let obj5 = { value: null, done: false };
                    obj5[0] = HTTP.post(obj3);
                    return obj5;
                  }
                }
              } else if (2 === tmp4) {
                let tmp69 = closure_19;
                let tmp70 = closure_19;
                changes = 0;
                let tmp71 = lib;
                lib.return();
                throw closure_19;
              } else {
                if (3 === tmp4) {
                  if (arg0 === 1) {
                    let num9 = 3;
                    c22 = 3;
                    throw body;
                  } else if (arg0 === 2) {
                    let num8 = 3;
                    c22 = 3;
                    let obj6 = { value: null, done: true };
                    obj6[0] = body;
                    return obj6;
                  } else {
                    throwTypeErrorResult = closure_17;
                    body = body.body;
                    throwTypeErrorResult = callback2;
                    let _Date2 = Date;
                    throwTypeErrorResult = dependencyMap;
                    callback2.time_finish_fetch_guild_channel_messages = Date.now() - dependencyMap;
                    throwTypeErrorResult = callback2;
                    callback2.num_guild_channel_messages = 0;
                    throwTypeErrorResult = callback2;
                    let _JSON = JSON;
                    throwTypeErrorResult = body;
                    callback2.size_guild_channel_messages = JSON.stringify(body).length;
                    table2 = {};
                    throwTypeErrorResult = lib;
                    closure_10 = lib;
                    throwTypeErrorResult = lib;
                    closure_10 = lib;
                    closure_9 = lib[Symbol.iterator]();
                    let tmp14 = closure_10;
                    let tmp15 = closure_9;
                    while (closure_9 !== undefined) {
                      let tmp17 = closure_17;
                      changes = 3;
                      c16 = tmp16;
                      let tmp18 = table2;
                      let tmp19 = c16;
                      let tmp20 = c16;
                      table2[c16.channelId] = c16.guildId;
                      changes = 0;
                      continue;
                    }
                    let tmp21 = closure_17;
                    closure_17 = {};
                    closure_18 = {};
                    let tmp22 = body;
                    let change_logs_by_channel_id = body.change_logs_by_channel_id;
                    lib2 = change_logs_by_channel_id;
                    let tmp23 = table;
                    let tmp25 = id;
                    let tmp26 = body;
                    let tmp24 = change_logs_by_channel_id;
                    let keys = Object.keys();
                    if (keys === undefined) {
                      body = tmp26;
                      id = tmp25;
                      lib2 = change_logs_by_channel_id;
                      table = keys;
                    } else {
                      throwTypeErrorResult = tmp26;
                      body = tmp26;
                      throwTypeErrorResult = tmp25;
                      id = tmp25;
                      throwTypeErrorResult = change_logs_by_channel_id;
                      lib2 = tmp24;
                      throwTypeErrorResult = keys;
                      table = keys;
                    }
                    let tmp52 = closure_17;
                    let tmp53 = closure_18;
                    let tmp54 = callback2;
                    let tmp55 = dependencyMap;
                    obj3 = callback2(12);
                    let tmp56 = closure_17;
                    if (!obj3.isEmpty(closure_17)) {
                      let tmp57 = closure_17;
                      let tmp58 = closure_18;
                      let tmp59 = callback2;
                      let tmp60 = dependencyMap;
                      obj4 = callback2(709);
                      let obj7 = { type: "BACKGROUND_SYNC_CHANNEL_MESSAGES", changesByChannelId: null };
                      let tmp61 = closure_18;
                      obj7[1] = closure_18;
                      let dispatchResult = obj4.dispatch(obj7);
                      let tmp63 = callback3;
                      let tmp64 = c4;
                      let tmp65 = closure_17;
                      let tmp66 = callback;
                      let tmp67 = callback2;
                      let tmp68 = table2;
                      let num6 = 0;
                      c21 = 7;
                      let num7 = 1;
                      c22 = 1;
                      obj8 = { value: null, done: false };
                      obj8[0] = callback3(c4, closure_17, callback, callback2, table2);
                      return obj8;
                    }
                  }
                } else if (4 === tmp4) {
                  let tmp11 = closure_19;
                  let tmp12 = closure_19;
                  changes = 1;
                  let tmp13 = closure_7;
                  closure_7.return();
                  throw closure_19;
                } else if (5 === tmp4) {
                  let tmp8 = closure_19;
                  let tmp9 = closure_19;
                  changes = 0;
                  let tmp10 = closure_9;
                  closure_9.return();
                  throw closure_19;
                } else if (6 === tmp4) {
                  if (arg0 === 1) {
                    let num4 = 3;
                    c22 = 3;
                    throw body;
                  } else if (arg0 === 2) {
                    let num27 = 3;
                    c22 = 3;
                    obj9 = { value: null, done: true };
                    obj9[0] = body;
                    return obj9;
                  }
                } else if (arg0 === 1) {
                  let num3 = 3;
                  c22 = 3;
                  throw body;
                } else if (arg0 !== 2) {
                  let tmp5 = closure_17;
                  let tmp6 = callback2;
                  let _Date = Date;
                  let tmp7 = dependencyMap;
                  callback2.time_save_guild_channel_messages = Date.now() - dependencyMap;
                }
                let tmp28 = table;
                let tmp29 = lib2;
                let tmp30 = id;
                let tmp31 = body;
                let tmp32 = table2;
                let tmp33 = table[id];
                while (tmp33 !== undefined) {
                  throwTypeErrorResult = tmp33;
                  table2 = tmp33;
                  throwTypeErrorResult = tmp31;
                  body = tmp31;
                  throwTypeErrorResult = tmp30;
                  id = tmp30;
                  throwTypeErrorResult = tmp29;
                  lib2 = tmp29;
                  throwTypeErrorResult = tmp28;
                  table = tmp28;
                  throwTypeErrorResult = closure_17;
                  closure_19 = tmp33;
                  throwTypeErrorResult = body;
                  throwTypeErrorResult = closure_19;
                  changes = body.change_logs_by_channel_id[closure_19].changes;
                  throwTypeErrorResult = changes;
                  if (null == changes) {
                    continue;
                  } else {
                    let tmp34 = closure_17;
                    let tmp35 = closure_18;
                    let tmp36 = closure_18;
                    let tmp37 = closure_19;
                    let tmp38 = changes;
                    closure_18[closure_19] = changes;
                    let tmp40 = c4;
                    let tmp41 = closure_17;
                    let tmp42 = table2;
                    let tmp43 = closure_19;
                    let tmp44 = table2[closure_19];
                    c16 = tmp44;
                    let tmp39 = closure_25;
                    if (tmp44 == null) {
                      c16 = null;
                    }
                    let tmp45 = closure_17;
                    let tmp46 = c16;
                    let tmp47 = closure_19;
                    let tmp48 = body;
                    let tmp49 = closure_19;
                    let tmp50 = tmp40;
                    let tmp51 = tmp41;
                    c21 = 6;
                    let num5 = 1;
                    c22 = 1;
                    let obj10 = { value: null, done: false };
                    obj10[0] = tmp39(tmp40, tmp41, c16, closure_19, body.change_logs_by_channel_id[closure_19].changes);
                    return obj10;
                  }
                }
                table2 = tmp33;
                body = tmp31;
                id = tmp30;
                lib2 = tmp29;
                table = tmp28;
              }
              let num2 = 3;
              c22 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            }
            let num13 = 3;
            c22 = 3;
          }
        }
      }
    })();
  });
  closure_24 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function processChannelChanges() {
  const self = this;
  const apply = _processChannelChanges.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _processChannelChanges() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3, arg4) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    closure_4 = arg4;
    c11 = 0;
    c12 = 0;
    c10 = 0;
    return (function*(arg0, arr) {
      if (c12 === 2) {
        c12 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arr;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arr;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        while (true) {
          let num = 2;
          c12 = 2;
          let tmp4 = c11;
          if (0 === c11) {
            if (arg0 === 1) {
              let num8 = 3;
              c12 = 3;
              throw arr;
            } else if (arg0 === 2) {
              let num7 = 3;
              c12 = 3;
              obj = { value: null, done: true };
              obj[0] = arr;
              return obj;
            } else {
              let table = tmp;
              let length = tmp4;
              let tmp64 = callback;
              let tmp65 = callback2;
              let tmp66 = dependencyMap;
              let tmp67 = callback3;
              let tmp68 = new_messages;
              new_messages = undefined;
              closure_5 = undefined;
              let dependencyMap2;
              length = undefined;
              table = undefined;
              let user;
              if (null != new_messages) {
                new_messages = tmp68.new_messages;
                if (undefined === new_messages) {
                  new_messages = [];
                }
                let modified_messages = tmp68.modified_messages;
                if (undefined === modified_messages) {
                  modified_messages = [];
                }
                let deleted_message_ids = tmp68.deleted_message_ids;
                if (undefined === deleted_message_ids) {
                  deleted_message_ids = [];
                }
                closure_5 = deleted_message_ids;
                let tmp21 = callback2;
                let tmp22 = dependencyMap;
                let obj2 = callback2(12);
                let tmp23 = callback;
                let tmp24 = dependencyMap;
                let tmp25 = callback3;
                let tmp26 = callback3(obj2.partition(modified_messages, callback(7169).isLikelyNotDelta), 2);
                let arr4 = tmp26[1];
                dependencyMap2 = arr4;
                let push = new_messages.push;
                let items = [];
                let tmp27 = items;
                let num4 = 0;
                let arraySpreadResult = HermesBuiltin.arraySpread(tmp26[0], 0);
                let tmp29 = push;
                let tmp30 = items;
                let tmp31 = new_messages;
                let applyResult = HermesBuiltin.apply(items, new_messages);
                if (arr4.length > 0) {
                  let _Promise = Promise;
                  c11 = 1;
                  let num6 = 1;
                  c12 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = Promise.all(arr4.map((channel_id) => closure_0.withoutLogging().get(closure_2, channel_id.channel_id, channel_id.id)));
                  return obj1;
                }
              }
              let num5 = 3;
              c12 = 3;
              return { value: "HermesInternal", done: null };
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              let num3 = 3;
              c12 = 3;
              throw arr;
            } else if (arg0 === 2) {
              let num2 = 3;
              c12 = 3;
              obj2 = { value: null, done: true };
              obj2[0] = arr;
              return obj2;
            } else {
              let tmp49 = length;
              let tmp50 = table;
              let tmp51 = callback;
              let tmp52 = dependencyMap;
              length = arr.filter(callback(1370).isNotNullish);
              let tmp53 = closure_14;
              let tmp54 = length;
              let _HermesInternal = HermesInternal;
              let verboseResult = closure_14.verbose("Fetched " + length.length + " modified messages from the database");
              let tmp56 = callback2;
              let tmp57 = dependencyMap;
              let obj7 = callback2(12);
              let tmp58 = length;
              table = obj7.keyBy(length, "id");
              let tmp59 = dependencyMap2;
              let tmp60 = dependencyMap2;
              closure_5 = dependencyMap2[Symbol.iterator]();
              let tmp8 = dependencyMap2;
              let tmp9 = closure_5;
              while (closure_5 !== undefined) {
                let tmp61 = length;
                c10 = 1;
                user = tmp10;
                let tmp62 = user;
                let tmp63 = table;
                if (user.id in table) {
                  let tmp11 = length;
                  let tmp12 = new_messages;
                  obj = {};
                  let tmp13 = table;
                  let tmp14 = user;
                  let tmp15 = obj;
                  let merged = Object.assign(table[user.id].message);
                  let tmp17 = user;
                  let tmp18 = obj;
                  let merged1 = Object.assign(user);
                  arr = new_messages.push(obj);
                }
                c10 = 0;
                continue;
              }
            }
          } else {
            let tmp5 = user;
            let tmp6 = user;
            c10 = 0;
            let tmp7 = closure_5;
            closure_5.return();
            throw user;
          }
          let tmp33 = length;
          let tmp34 = new_messages;
          let tmp35 = new_messages.length > 0;
          if (!tmp35) {
            let tmp36 = length;
            let tmp37 = closure_5;
            tmp35 = closure_5.length > 0;
          }
          if (tmp35) {
            let tmp38 = length;
            let tmp39 = callback2;
            let tmp40 = callback3;
            let tmp41 = new_messages;
            let items1 = [new_messages, ];
            let tmp42 = closure_5;
            items1[1] = closure_5;
            callback2[callback3] = items1;
          }
        }
      }
    })();
  });
  closure_26 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function writeMessageChanges(transaction) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_2 = arg3;
  closure_3 = arg4;
  return transaction.transaction((arg0) => {
    closure_0 = arg0;
    for (const key10005 in closure_0) {
      let tmp2 = key10005;
      let tmpResult = tmp(key10005);
      continue;
    }
  }, "Background Sync");
}
({ isPrivate: c5, isThread: closure_6 } = createChannelRecord);
({ AnalyticEvents: unpackModuleId, Endpoints: closure_12, MAX_MESSAGES_PER_CHANNEL: map1 } = ME);
let closure_14 = new timestampDefault("BackgroundSync");
let closure_15 = 4 * setDefault.Millis.HOUR;
const lastSyncTime = "lastSyncTime";
const lastSyncedPrivateChannelsMessageId = "lastSyncedPrivateChannelsMessageId";
let tmp8 = new timestampDefault("BackgroundSync");
let result = require("set").fileFinishedImporting("modules/app_database/background_sync/native/BackgroundSync.tsx");

export const backgroundSync = function backgroundSync(arg0) {
  const self = this;
  const apply = _backgroundSync.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};