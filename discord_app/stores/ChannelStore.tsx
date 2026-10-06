// discord_app/stores/ChannelStore.tsx
import LoggerDefault from "../modules/debug/Logger.tsx";
import AppStartPerformanceDefault from "../../discord_common/js/packages/app-start-performance/AppStartPerformance.tsx";
import SnowflakeUtilsDefault from "../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../_runtime/metro/00012__.js";
import get_initializedDefault from "../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../Dispatcher.tsx";
import Constants from "../Constants.tsx";
import DatabaseDaosDefault from "../modules/app_database/DatabaseDaos.tsx";
import ChannelReaderDefault from "../modules/app_database/modules/channels/ChannelReader.tsx";
import deserializeChannels from "../modules/cache/deserializeChannels.tsx";
import isChangelogUserDefault from "../modules/changelog/utils/isChangelogUser.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import _asyncToGenerator from "../../_runtime/metro/00005__asyncToGenerator.js";
import BasicChannelCacheStore from "../modules/app_database/stores/BasicChannelCacheStore.tsx";
import FavoriteStore from "../modules/favorites/FavoriteStore.tsx";
import ChannelRecord from "../records/ChannelRecord.tsx";
import AuthenticationStore from "AuthenticationStore.tsx";
import GuildStore from "GuildStore.tsx";
import UserStore from "UserStore.tsx";
import size from "../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const deserializeChannelsDefault = deserializeChannels;
let _require, c6, c7, closure_34, dependencyMap, importDefault;

let c10;
let c9;
let closure_12;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
const f85863 = (item) => isChangelogUserDefault(item);
function ensureGuildLoaded(guild_id, Full, getBasicChannel) {
  let arr;
  let tmp41;
  _require = guild_id;
  if (null != guild_id) {
    if ("null" !== guild_id) {
      if (!set.has(guild_id)) {
        if (Full !== closure_35.Basic) {
          let obj = DatabaseDaosDefault;
          const databaseResult = obj.database();
          importDefault = databaseResult;
          if (null != databaseResult) {
            const _HermesInternal4 = HermesInternal;
            closure_17.verbose("hydrating guild (guild: " + guild_id + ", trace: " + getBasicChannel + ")");
            const _HermesInternal5 = HermesInternal;
            const obj4 = require("TryLoad");
            const result = obj4.tryLoadOrResetCacheGateway(
              "ensureGuildLoaded(" + guild_id + ")",
              () => {
                const obj = ChannelReaderDefault;
                return obj.getSync(importDefault, guild_id);
              },
              "ensureGuildLoaded",
            );
            if (null == result) {
              set.add(guild_id);
              BasicChannelCacheStore.restored(guild_id);
              const _HermesInternal3 = HermesInternal;
              closure_17.log(
                "load returned null; early returning (guild: " + guild_id + ", database: " + databaseResult + ")",
              );
            } else {
              [arr, tmp41] = result;
              _slicedToArray(result, 2);
              deserializeChannelsDefault(arr);
              if (Full !== tmp2.Basic) {
                closure_34 = closure_34 + 1;
              }
              set.add(guild_id);
              BasicChannelCacheStore.restored(guild_id);
              const _HermesInternal = HermesInternal;
              const tmp4Result = AppStartPerformanceDefault;
              tmp4Result.mark("\u2757", "loaded guild channels (guild: " + guild_id + ")", tmp41);
              for (const item10037 of arr) {
                let _Object = Object;
                if (!Object.hasOwn(closure_19, item10037.id)) {
                  let tmp20 = setGuildChannel(closure_12(item10037));
                }
                continue;
              }
              const _HermesInternal2 = HermesInternal;
              closure_17.verbose(
                "hydration complete (guild: " +
                  guild_id +
                  ", channels: " +
                  arr.length +
                  ", guilds_loaded: " +
                  closure_34 +
                  ")",
              );
            }
          }
        }
      }
    }
  }
}
function deleteGuildChannels(id) {
  closure_17.fileOnly("Deleting guild channels for " + id);
  if (null != closure_20[id]) {
    const obj = SnowflakeUtilsDefault;
    const keys = obj.keys(closure_20[id]);
    for (const item10024 of keys) {
      delete closure_19[item10024];
      continue;
    }
    delete closure_20[id];
  }
  if (null != closure_24[id]) {
    delete closure_24[id];
  }
}
function getBasicChannel(arg0) {
  const Basic = closure_35.Basic;
  if (!Object.hasOwn(closure_19, arg0)) {
    const _Object = Object;
    if (!Object.hasOwn(closure_21, arg0)) {
      const _Object2 = Object;
      if (!Object.hasOwn(closure_23, arg0)) {
        const _Object3 = Object;
        if (!Object.hasOwn(closure_28, arg0)) {
          if (Basic === closure_35.Full) {
            const basicChannel = BasicChannelCacheStore.getBasicChannel(arg0);
            let guild_id;
            if (basicChannel != null) {
              guild_id = basicChannel.guild_id;
            }
            if (null != guild_id) {
              ensureGuildLoaded(basicChannel.guild_id, Basic, "getBasicChannel");
            }
          }
        }
      }
    }
  }
  let basicChannel1 = closure_19[arg0];
  if (basicChannel1 == null) {
    basicChannel1 = closure_21[arg0];
  }
  if (basicChannel1 == null) {
    basicChannel1 = closure_23[arg0];
  }
  if (basicChannel1 == null) {
    basicChannel1 = closure_28[arg0];
  }
  if (basicChannel1 == null) {
    basicChannel1 = BasicChannelCacheStore.getBasicChannel(arg0);
  }
  return basicChannel1;
}
function getChannel(arg0) {
  const Full = closure_35.Full;
  if (!Object.hasOwn(closure_19, arg0)) {
    const _Object = Object;
    if (!Object.hasOwn(closure_21, arg0)) {
      const _Object2 = Object;
      if (!Object.hasOwn(closure_23, arg0)) {
        const _Object3 = Object;
        if (!Object.hasOwn(closure_28, arg0)) {
          if (Full === closure_35.Full) {
            const basicChannel = BasicChannelCacheStore.getBasicChannel(arg0);
            let guild_id;
            if (basicChannel != null) {
              guild_id = basicChannel.guild_id;
            }
            if (null != guild_id) {
              ensureGuildLoaded(basicChannel.guild_id, Full, "getChannel");
            }
          }
        }
      }
    }
  }
  let tmp11 = closure_19[arg0];
  if (tmp11 == null) {
    tmp11 = closure_21[arg0];
  }
  if (tmp11 == null) {
    tmp11 = closure_23[arg0];
  }
  if (tmp11 == null) {
    tmp11 = closure_28[arg0];
  }
  if (tmp11 == null) {
    tmp11 = closure_32[arg0];
  }
  return tmp11;
}
function setChannel(isPrivate) {
  let guild_id;
  let id;
  let id2;
  let merge;
  let type;
  if (isPrivate.isPrivate()) {
    delete closure_32[isPrivate.id];
    const recipients = isPrivate.recipients;
    if (null == recipients.find(f85863)) {
      closure_21[isPrivate.id] = isPrivate;
      if (isPrivate.type === ChannelTypes.DM) {
        closure_25[isPrivate.getRecipientId()] = isPrivate.id;
      }
      closure_26 = closure_26 + 1;
    }
  } else if (isPrivate.isThread()) {
    let nsfw;
    ({ id: id2, merge } = isPrivate);
    if (closure_19[isPrivate.parent_id] != null) {
      nsfw = tmp12.nsfw;
    }
    const obj2 = { nsfw: true === nsfw, parentChannelThreadType: type };
    type = undefined;
    if (closure_19[isPrivate.parent_id] != null) {
      type = tmp12.type;
    }
    closure_23[id2] = merge(obj2);
    if (isPrivate.isScheduledForDeletion()) {
      const obj3 = { type: "THREAD_DELETE", channel: isPrivate };
      const obj4 = DispatcherDefault;
      obj4.dispatch(obj3);
    }
  } else if (set.has(isPrivate.type)) {
    ({ id, guild_id } = isPrivate);
    closure_19[id] = isPrivate;
    let obj = closure_20[guild_id];
    if (obj == null) {
      obj = {};
    }
    closure_20[guild_id] = obj;
    closure_20[guild_id][id] = isPrivate;
    let num = closure_27[guild_id];
    if (num == null) {
      num = 0;
    }
    closure_27[guild_id] = num + 1;
    if (null != isPrivate.linkedLobby) {
      let obj5 = closure_24[guild_id];
      if (obj5 == null) {
        obj5 = {};
      }
      closure_24[guild_id] = obj5;
      closure_24[guild_id][id] = isPrivate;
    } else if (closure_24[guild_id] != null) {
      delete closure_24[guild_id][id];
    }
  }
}
function setPrivateChannel(recipients) {
  recipients = recipients.recipients;
  if (null != recipients.find(f85863)) {
    return false;
  } else {
    closure_21[recipients.id] = recipients;
    if (recipients.type === ChannelTypes.DM) {
      closure_25[recipients.getRecipientId()] = recipients.id;
    }
    closure_26 = closure_26 + 1;
  }
}
function setThread(isScheduledForDeletion) {
  let id;
  let merge;
  let type;
  let nsfw;
  ({ id, merge } = isScheduledForDeletion);
  if (closure_19[isScheduledForDeletion.parent_id] != null) {
    nsfw = tmp.nsfw;
  }
  const obj = { nsfw: true === nsfw, parentChannelThreadType: type };
  type = undefined;
  if (closure_19[isScheduledForDeletion.parent_id] != null) {
    type = tmp.type;
  }
  closure_23[id] = merge(obj);
  if (isScheduledForDeletion.isScheduledForDeletion()) {
    const obj3 = { type: "THREAD_DELETE", channel: isScheduledForDeletion };
    const obj2 = DispatcherDefault;
    obj2.dispatch(obj3);
  }
}
function setGuildChannel(item10028) {
  let guild_id;
  let id;
  ({ id, guild_id } = item10028);
  closure_19[id] = item10028;
  let obj = closure_20[guild_id];
  if (obj == null) {
    obj = {};
  }
  closure_20[guild_id] = obj;
  closure_20[guild_id][id] = item10028;
  let num = closure_27[guild_id];
  if (num == null) {
    num = 0;
  }
  closure_27[guild_id] = num + 1;
  if (null != item10028.linkedLobby) {
    let obj2 = closure_24[guild_id];
    if (obj2 == null) {
      obj2 = {};
    }
    closure_24[guild_id] = obj2;
    closure_24[guild_id][id] = item10028;
  } else if (closure_24[guild_id] != null) {
    delete closure_24[guild_id][id];
  }
}
function handleOneGuildCreate(arg0) {
  let channels;
  let id;
  let threads;
  ({ id, channels, threads } = arg0);
  const op = channels.op;
  if ("full_sync" === op) {
    const _HermesInternal = HermesInternal;
    closure_17.fileOnly("ConnectionOpen contained full channels for " + id + " #:" + channels.items.length);
    deleteGuildChannels(id);
    set.add(id);
    BasicChannelCacheStore.restored(id);
    const items = channels.items;
    for (const item10058 of items) {
      let tmp25 = setGuildChannel(item10058);
      continue;
    }
  } else if ("update" === op) {
    const tmp = channels.writes.length > 0 || channels.deletes.length > 0;
    if (tmp) {
      BasicChannelCacheStore.invalidate(id);
    }
    const deletes = channels.deletes;
    for (const item10017 of deletes) {
      let tmp8 = deleteChannel(closure_19[item10017]);
      continue;
    }
    const writes = channels.writes;
    for (const item10028 of writes) {
      let tmp12 = setGuildChannel(item10028);
      continue;
    }
  }
  if (null != threads) {
    const tmp27 = threads[Symbol.iterator]();
    while (tmp27 !== undefined) {
      let tmp32 = setThread(tmp29);
      continue;
    }
  }
}
function handleThreadCreateOrUpdate(channel) {
  let bitrate;
  if (unpackModuleId.has(channel.channel.type)) {
    let channel2;
    const tmp2 = getChannel(channel.channel.id);
    if (null == tmp2) {
      channel2 = channel.channel;
    } else {
      channel = channel.channel;
      const merge = tmp2.merge;
      const obj = { bitrate };
      const merged = Object.assign(channel.toJS());
      bitrate = channel.channel.bitrate;
      if (bitrate == null) {
        bitrate = tmp2.bitrate;
      }
      channel2 = merge(obj);
    }
    setChannel(channel2);
  } else {
    return false;
  }
}
function handleLoadArchivedThreadsSuccess(threads) {
  threads = threads.threads;
  const item = threads.forEach((type) => {
    if (set.has(type.type)) {
      setChannel(closure_1_7(type));
    }
  });
}
function deleteChannel(guild_id) {
  if (null != guild_id) {
    const guild_id2 = guild_id.guild_id;
    if (guild_id.id in closure_21) {
      delete closure_21[guild_id.id];
    }
    if (guild_id.id in closure_19) {
      delete closure_19[guild_id.id];
    }
    if (guild_id.id in closure_23) {
      delete closure_23[guild_id.id];
    }
    if (null != guild_id2) {
      const tmp4 = null != closure_20[guild_id2] && guild_id.id in closure_20[guild_id2];
      if (tmp4) {
        delete closure_20[guild_id2][guild_id.id];
      }
      const tmp8 = null != closure_24[guild_id2] && guild_id.id in closure_24[guild_id2];
      if (tmp8) {
        delete closure_24[guild_id2][guild_id.id];
      }
    }
    if (null != guild_id.guild_id) {
      if (!set2.has(guild_id.type)) {
        let num = closure_27[guild_id.guild_id];
        guild_id = guild_id.guild_id;
        if (num == null) {
          num = 0;
        }
        closure_27[guild_id] = num + 1;
      }
    }
    if (metroImportAll(guild_id.type)) {
      closure_26 = closure_26 + 1;
    }
  }
}
function handleDeleteChannel(channel) {
  channel = channel.channel;
  let obj = closure_19[channel.id];
  if (obj == null) {
    obj = closure_21[channel.id];
  }
  if (obj == null) {
    obj = closure_23[channel.id];
  }
  if (null == obj) {
    return false;
  } else {
    deleteChannel(obj);
    if (!("basicPermissions" in obj)) {
      if (obj.type === ChannelTypes.DM) {
        const recipientId = obj.getRecipientId();
        if (closure_25[recipientId] === obj.id) {
          delete closure_25[tmp6];
        }
      }
    }
  }
}
function handleLoadMessages(arg0) {
  const iter = arg0.messages[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let hasItem = null != nextResult.thread;
    if (hasItem) {
      hasItem = !(tmp2.thread.id in closure_23);
    }
    if (hasItem) {
      hasItem = unpackModuleId.has(tmp2.thread.type);
    }
    if (hasItem) {
      let tmp11 = setThread(metroImportDefault(tmp2.thread));
    }
    continue;
  }
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let item = data.forEach((item) => {
    let channels;
    let messages;
    let threads;
    ({ messages, threads, channels } = item);
    item = messages.forEach((arr) => {
      const item = arr.forEach((thread) => {
        closure_1_46(thread.thread);
      });
    });
    const item1 = threads.forEach(addThreadIfMissing);
    const item2 = channels.forEach((id) => {
      const obj = closure_1_7(id);
      const tmp = null != closure_1_39(id.id);
      if (!obj.isPrivate()) {
        if (!tmp) {
          closure_1_40(obj);
        }
      } else {
        closure_1_32[obj.id] = obj;
      }
    });
  });
}
function addThreadIfMissing(id) {
  let merge;
  let type;
  const hasItem = null != id && !(id.id in closure_23) && unpackModuleId.has(id.type);
  if (hasItem) {
    const obj = metroImportDefault(id);
    let nsfw;
    ({ id, merge } = obj);
    if (closure_19[obj.parent_id] != null) {
      nsfw = tmp6.nsfw;
    }
    const obj2 = { nsfw: true === nsfw, parentChannelThreadType: type };
    type = undefined;
    if (closure_19[obj.parent_id] != null) {
      type = tmp6.type;
    }
    closure_23[id] = merge(obj2);
    if (obj.isScheduledForDeletion()) {
      const obj4 = { type: "THREAD_DELETE", channel: obj };
      const obj3 = DispatcherDefault;
      obj3.dispatch(obj4);
    }
  }
}
function handleFavoritesUpdate() {
  closure_28 = {};
  for (const key10006 in FavoriteStore.getFavoriteChannels()) {
    let categoryRecord = FavoriteStore.getCategoryRecord(key10006);
    if (null == categoryRecord) {
      continue;
    } else {
      closure_28[key10006] = categoryRecord;
      continue;
    }
    continue;
  }
}
function guildChannelCount(id) {
  let length = null;
  if (null != closure_20[id]) {
    const _Object = Object;
    length = Object.keys(closure_20[id]).length;
  }
  return length;
}
({
  createChannelRecordFromServer: metroImportDefault,
  isPrivate: metroImportAll,
  GUILD_CHANNEL_TYPES: c9,
  THREAD_CHANNEL_TYPES: c10,
  ALL_CHANNEL_TYPES: unpackModuleId,
  castChannelRecord: closure_12,
} = ChannelRecord);
const ChannelTypes = Constants.ChannelTypes;
let tmp3 = new LoggerDefault("ChannelStore");
let closure_17 = tmp3;
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let c22 = null;
let closure_23 = {};
let closure_24 = {};
let closure_25 = {};
let closure_26 = 0;
let closure_27 = {};
let closure_28 = {};
let set = new Set();
let closure_30 = {};
let closure_31 = 0;
let closure_32 = {};
let closure_33 = 0;
let c34 = 0;
class ChannelLoader {
  static loadAllMissingChannels() {
    const guildIds = GuildStore.getGuildIds();
    return this.loadGuildIds(guildIds.filter((item) => !set.has(item)));
  }
  static loadGuildFromChannelId(channel_id) {
    let guildIds = null;
    if (null != channel_id) {
      const loadGuildIds = ChannelLoader.loadGuildIds;
      const tmp4 = getBasicChannel(channel_id);
      let guild_id;
      if (tmp4 != null) {
        guild_id = tmp4.guild_id;
      }
      const items = [guild_id];
      guildIds = loadGuildIds(items);
    }
    return guildIds;
  }
  static loadGuildIds(items) {
    let closure_2;
    let found;
    const tmp = found;
    found = items.filter(found(1375).isNotNullish);
    if (0 === found.length) {
      let tmp8 = null;
      return null;
    } else {
      const tmp3 = importDefault;
      let obj = DatabaseDaosDefault;
      let databaseResult = obj.database();
      importDefault = databaseResult;
      if (null == databaseResult) {
        return null;
      } else if (found.some((item) => !set.has(item))) {
        dependencyMap = closure_31;
        let str = "loadChannels";
        const tmpResult = tmp(2098);
        return tmpResult.tryLoadOrResetCacheGatewayAsync(
          "loadChannels",
          _asyncToGenerator(async () => {
            let closure_1;
            if (c7 === 2) {
              c7 = 3;
              const str = "Generator functions may not be called on executing generators";
              throw new TypeError("Generator functions may not be called on executing generators");
            } else {
              const str2 = "Failed to load channels from disk for ";
              if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  return { value: "IconComponent", done: null };
                }
              } else {
                while (true) {
                  let channels;
                  c7 = 2;
                  let tmp4 = c6;
                  if (0 === c6) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c7 = 3;
                      let obj4 = { value, done: true };
                      return obj4;
                    } else {
                      let closure_3 = tmp;
                      found = undefined;
                      databaseResult = undefined;
                      channels = undefined;
                      let c3;
                      let mapped = found.map((guildId) => {
                        closure_0 = guildId;
                        if (set.has(guildId)) {
                          return null;
                        } else if (null != closure_2_30[guildId]) {
                          const _HermesInternal = HermesInternal;
                          closure_2_17.fileOnly("Skipping loading " + guildId + " because a load is pending");
                          return null;
                        } else {
                          const obj = closure_1(channels[13]);
                          const async = obj.getAsync(closure_1_1, guildId);
                          const nextPromise = async.then((channels) => {
                            closure_2_17.fileOnly("Lazy loaded channels for " + guildId + " #:" + channels.length);
                            return { guildId, channels };
                          });
                          closure_2_30[guildId] = nextPromise;
                          return { guildId, promise: nextPromise };
                        }
                      });
                      found = mapped.filter(found(channels[10]).isNotNullish);
                      let c5 = 1;
                      let _Promise = Promise;
                      c6 = 2;
                      c7 = 1;
                      let obj5 = { value: Promise.all(found.map((promise) => promise.promise)), done: false };
                      return obj5;
                    }
                  } else if (1 === tmp4) {
                    c5 = 0;
                    let closure_4 = _asyncToGenerator;
                    let errorResult = closure_1_17.error(
                      `Failed to load channels from disk for ${found.map((guildId) => guildId.guildId)}`,
                      closure_4,
                    );
                    databaseResult = found;
                    found = found[Symbol.iterator]();
                    while (found !== undefined) {
                      c5 = 2;
                      c3 = tmp27;
                      delete closure_1_30[c3.guildId];
                      c5 = 0;
                      continue;
                    }
                    throw closure_4;
                  } else if (2 === tmp4) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c5 = 0;
                      c7 = 3;
                      let obj6 = { value, done: true };
                      return obj6;
                    } else {
                      databaseResult = value;
                      if (closure_1_31 !== closure_131_2) {
                        let fileOnlyResult = closure_1_17.fileOnly(
                          `lastResetTime has changed, skipping loads for ${found.map((guildId) => guildId.guildId)}`,
                        );
                        c5 = 0;
                        c7 = 3;
                        return { value: null, done: true };
                      } else {
                        channels = databaseResult.filter((guildId) => !set.has(guildId.guildId));
                        let obj2 = databaseResult(channels[14]);
                        let obj7 = { type: "LOAD_CHANNELS", channels };
                        c6 = 3;
                        c7 = 1;
                        let obj8 = { value: obj2.dispatch(obj7), done: false };
                        return obj8;
                      }
                    }
                  } else if (3 === tmp4) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c5 = 0;
                      c7 = 3;
                      let obj = { value, done: true };
                      return obj;
                    } else {
                      c5 = 0;
                      c7 = 3;
                      return { value: null, done: true };
                    }
                  } else {
                    c5 = 0;
                    found.return();
                    throw _asyncToGenerator;
                  }
                }
              }
            }
          }),
        );
      } else {
        return null;
      }
    }
  }
}
const __initData4 = { Basic: 0, [0]: "Basic", Full: 1, [1]: "Full" };
const Store = get_initializedDefault.Store;
class ChannelStore extends Store {
  initialize() {
    this.waitFor(AuthenticationStore, BasicChannelCacheStore, FavoriteStore, GuildStore, UserStore);
    const items = [FavoriteStore];
    this.syncWith(items, handleFavoritesUpdate);
  }
  hasChannel(arg0) {
    return null != getBasicChannel(arg0);
  }
  getBasicChannel(arg0) {
    if (null != arg0) {
      return getBasicChannel(arg0);
    }
  }
  getChannel(arg0) {
    if (null != arg0) {
      return getChannel(arg0);
    }
  }
  loadAllGuildAndPrivateChannelsFromDisk() {
    const guildIds = GuildStore.getGuildIds();
    const tmp2 = guildIds[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp6 = ensureGuildLoaded(tmp3, closure_35.Full, "loadAllGuildAndPrivateChannelsFromDisk");
      continue;
    }
    const obj = {};
    const merged = Object.assign(closure_19);
    const merged1 = Object.assign(closure_21);
    return obj;
  }
  getChannelIds(guild_id) {
    let keys1;
    ensureGuildLoaded(guild_id, closure_35.Basic, "getChannelIds");
    if (null == guild_id) {
      const obj = SnowflakeUtilsDefault;
      keys1 = obj.keys(closure_21);
    } else {
      const keys = SnowflakeUtilsDefault.keys;
      SnowflakeUtilsDefault;
      let guildBasicChannels = BasicChannelCacheStore.getGuildBasicChannels(guild_id);
      if (guildBasicChannels == null) {
        guildBasicChannels = closure_20[guild_id];
      }
      if (guildBasicChannels == null) {
        guildBasicChannels = closure_18;
      }
      keys1 = keys(guildBasicChannels);
    }
    return keys1;
  }
  getMutablePrivateChannels() {
    return closure_21;
  }
  getMutableBasicGuildChannelsForGuild(guildId) {
    ensureGuildLoaded(guildId, closure_35.Basic, "getMutableBasicGuildChannelsForGuild");
    let guildBasicChannels = BasicChannelCacheStore.getGuildBasicChannels(guildId);
    if (guildBasicChannels == null) {
      guildBasicChannels = closure_20[guildId];
    }
    if (guildBasicChannels == null) {
      guildBasicChannels = closure_18;
    }
    return guildBasicChannels;
  }
  getMutableGuildChannelsForGuild(id) {
    ensureGuildLoaded(id, closure_35.Full, "getMutableGuildChannelsForGuild");
    let tmp2 = closure_20[id];
    if (tmp2 == null) {
      tmp2 = closure_18;
    }
    return tmp2;
  }
  getSortedLinkedChannelsForGuild(guild_id) {
    let tmp2 = closure_24[guild_id];
    const values = _modDef12.values;
    _modDef12;
    if (tmp2 == null) {
      tmp2 = closure_18;
    }
    const values2 = values(tmp2);
    return values2.sort((id, id2) => {
      const obj = SnowflakeUtilsDefault;
      return obj.compare(id.id, id2.id);
    });
  }
  getSortedPrivateChannels() {
    let obj = _modDef12(closure_21);
    const values = obj.values();
    const sorted = values.sort((lastMessageId, lastMessageId2) => {
      const obj = SnowflakeUtilsDefault;
      return obj.compare(lastMessageId.lastMessageId, lastMessageId2.lastMessageId);
    });
    const iter = sorted.reverse();
    return iter.value();
  }
  getDMFromUserId(id) {
    if (null != id) {
      return closure_25[id];
    }
  }
  getDMChannelFromUserId(id) {
    if (null != id) {
      const self = this;
      return this.getChannel(closure_25[id]);
    }
  }
  getMutableDMsByUserIds() {
    return closure_25;
  }
  getDMUserIds() {
    const obj = SnowflakeUtilsDefault;
    return obj.keys(closure_25);
  }
  getPrivateChannelsVersion() {
    return closure_26;
  }
  getGuildChannelsVersion(arg0) {
    let num = closure_27[arg0];
    if (num == null) {
      num = 0;
    }
    return num;
  }
  getAllThreadsForParent(channelId) {
    let closure_0 = channelId;
    const obj = _modDef12;
    const values = obj.values(closure_23);
    return values.filter((parent_id) => parent_id.parent_id === closure_0);
  }
  getAllThreadsForGuild(guildId) {
    let closure_0 = guildId;
    const obj = _modDef12;
    const values = obj.values(closure_23);
    return values.filter((guild_id) => guild_id.guild_id === closure_0);
  }
  getInitialOverlayState() {
    const obj = {};
    const merged = Object.assign(closure_19);
    const merged1 = Object.assign(closure_21);
    const merged2 = Object.assign(closure_23);
    return obj;
  }
  getDebugInfo() {
    let arr;
    let keys;
    let sorted;
    const obj = {
      loadedGuildIds: arr.sort(SnowflakeUtilsDefault.compare),
      pendingGuildLoads: keys.sort(SnowflakeUtilsDefault.compare),
      guildSizes: sorted.map((item) => {
        let length = null;
        if (null != closure_1_20[item]) {
          const _Object = Object;
          length = Object.keys(closure_1_20[item]).length;
        }
        return "" + item + ": " + length;
      }),
    };
    arr = Array.from(set);
    keys = Object.keys(closure_30);
    const keys1 = Object.keys(closure_20);
    sorted = keys1.sort(SnowflakeUtilsDefault.compare);
    return obj;
  }
}
const prototype = ChannelStore.prototype;
ChannelStore.displayName = "ChannelStore";
let obj = {
  BACKGROUND_SYNC: function handleBackgroundSync(guilds) {
    let Full;
    guilds = guilds.guilds;
    let closure_0 = closure_20;
    closure_19 = {};
    closure_20 = {};
    closure_27 = {};
    closure_24 = {};
    let item = guilds.forEach((data_mode) => {
      closure_0 = data_mode;
      if ("unavailable" === data_mode.data_mode) {
        const id4 = data_mode.id;
        let length = null;
        const fileOnly2 = closure_17.fileOnly;
        const id3 = data_mode.id;
        if (null != closure_20[id4]) {
          const _Object2 = Object;
          length = Object.keys(closure_20[id4]).length;
        }
        const _HermesInternal2 = HermesInternal;
        fileOnly2("Restoring guild channels b/c unavailable in bg sync, for " + id3 + " #:" + length);
        const arr4 = _modDef12;
        const item = arr4.forEach(closure_0[data_mode.id], setGuildChannel);
      } else if ("partial" === data_mode.data_mode) {
        const id2 = data_mode.id;
        let length1 = null;
        const fileOnly = closure_17.fileOnly;
        const id = data_mode.id;
        if (null != closure_20[id2]) {
          const _Object = Object;
          length1 = Object.keys(closure_20[id2]).length;
        }
        const _HermesInternal = HermesInternal;
        fileOnly("Restoring guild channels b/c partial in bg sync, for " + id + " #:" + length1);
        const arr = _modDef12;
        const item1 = arr.forEach(closure_0[data_mode.id], setGuildChannel);
        let deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
        if (deleted_channel_ids == null) {
          deleted_channel_ids = [];
        }
        let num = 0;
        if (deleted_channel_ids.length > 0) {
          ensureGuildLoaded(data_mode.id, Full.Full, "handleBackgroundSync");
          const item2 = deleted_channel_ids.forEach((item) => {
            closure_1_45(closure_1_19[item]);
          });
        }
        const channels = data_mode.partial_updates.channels;
        if (channels != null) {
          const item3 = channels.forEach((item) => {
            let guild_id;
            let id;
            const tmp = closure_2_7(item, user.id);
            ({ id, guild_id } = tmp);
            closure_2_19[id] = tmp;
            let obj = closure_2_20[guild_id];
            if (obj == null) {
              obj = {};
            }
            closure_2_20[guild_id] = obj;
            closure_2_20[guild_id][id] = tmp;
            let num = closure_2_27[guild_id];
            if (num == null) {
              num = 0;
            }
            closure_2_27[guild_id] = num + 1;
            if (null != tmp.linkedLobby) {
              let obj2 = closure_2_24[guild_id];
              if (obj2 == null) {
                obj2 = {};
              }
              closure_2_24[guild_id] = obj2;
              closure_2_24[guild_id][id] = tmp;
            } else if (closure_2_24[guild_id] != null) {
              delete closure_2_24[guild_id][id];
            }
          });
        }
      } else {
        const _HermesInternal3 = HermesInternal;
        closure_17.fileOnly("BG sync contained full channels for " + data_mode.id + " #:" + data_mode.channels.length);
        deleteGuildChannels(data_mode.id);
        set.add(data_mode.id);
        BasicChannelCacheStore.restored(data_mode.id);
        const channels1 = data_mode.channels;
        const item4 = channels1.forEach((item) => {
          let guild_id;
          let id;
          const tmp = closure_2_7(item, user.id);
          ({ id, guild_id } = tmp);
          closure_2_19[id] = tmp;
          let obj = closure_2_20[guild_id];
          if (obj == null) {
            obj = {};
          }
          closure_2_20[guild_id] = obj;
          closure_2_20[guild_id][id] = tmp;
          let num = closure_2_27[guild_id];
          if (num == null) {
            num = 0;
          }
          closure_2_27[guild_id] = num + 1;
          if (null != tmp.linkedLobby) {
            let obj2 = closure_2_24[guild_id];
            if (obj2 == null) {
              obj2 = {};
            }
            closure_2_24[guild_id] = obj2;
            closure_2_24[guild_id][id] = tmp;
          } else if (closure_2_24[guild_id] != null) {
            delete closure_2_24[guild_id][id];
          }
        });
      }
    });
  },
  CACHE_LOADED_LAZY: function handleLazyCacheLoaded(guilds) {
    let arr;
    let tmp5;
    closure_33 = Math.max(closure_33, guilds.guilds.length);
    const tmp = guilds.guildChannels[Symbol.iterator]();
    while (tmp !== undefined) {
      let tmp4 = _slicedToArray(tmp2, 2);
      [tmp5, arr] = tmp4;
      let _HermesInternal = HermesInternal;
      let fileOnlyResult = closure_17.fileOnly(
        "Lazy cache contained full guild channels for " + tmp5 + " #:" + arr.length,
      );
      let addResult = set.add(tmp5);
      for (const item10036 of arr) {
        let tmp14 = setChannel(closure_12(item10036));
        continue;
      }
      continue;
    }
  },
  CACHE_LOADED: function handleCacheLoaded(guilds) {
    closure_33 = Math.max(closure_33, guilds.guilds.length);
    const initialGuildChannels = guilds.initialGuildChannels;
    const items = [guilds.privateChannels, initialGuildChannels];
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      for (const item10021 of nextResult) {
        let obj = deserializeChannels;
        let tmp8 = setChannel(obj.deserializeChannel(closure_12(item10021)));
        continue;
      }
      continue;
    }
    const first = initialGuildChannels[0];
    let guild_id;
    if (first != null) {
      guild_id = first.guild_id;
    }
    if (null != guild_id) {
      const _HermesInternal = HermesInternal;
      closure_17.fileOnly("Early cache contained full guild channels for " + guild_id);
      set.add(guild_id);
    }
  },
  CHANNEL_CREATE: function handleChannelCreate(channel) {
    setChannel(channel.channel);
  },
  CHANNEL_DELETE: handleDeleteChannel,
  CHANNEL_RECIPIENT_ADD: function handleAddRecipient(channelId) {
    const obj = getChannel(channelId.channelId);
    let isPrivateResult;
    const id = AuthenticationStore.getId();
    if (obj != null) {
      isPrivateResult = obj.isPrivate();
    }
    let flag = isPrivateResult;
    if (flag) {
      setChannel(obj.addRecipient(channelId.user.id, channelId.nick, id));
      flag = true;
    }
    return flag;
  },
  CHANNEL_RECIPIENT_REMOVE: function handleRemoveRecipient(channelId) {
    const obj = getChannel(channelId.channelId);
    let isPrivateResult;
    if (obj != null) {
      isPrivateResult = obj.isPrivate();
    }
    let flag = isPrivateResult;
    if (flag) {
      setChannel(obj.removeRecipient(channelId.user.id));
      flag = true;
    }
    return flag;
  },
  CHANNEL_UPDATES: function handleUpdateChannels(arg0) {
    let channels;
    let channels2;
    let tmp3;
    ({ channels, channels: channels2 } = arg0);
    const someResult = channels.some((id) => {
      const tmp = getChannel(id.id);
      let nsfw1;
      const nsfw = id.nsfw;
      if (tmp != null) {
        nsfw1 = tmp.nsfw;
      }
      let tmp3 = nsfw !== nsfw1;
      if (!tmp3) {
        let type1;
        const type = id.type;
        if (tmp != null) {
          type1 = tmp.type;
        }
        tmp3 = type !== type1;
      }
      return tmp3;
    });
    const tmp2 = channels2[Symbol.iterator]();
    while (tmp2 !== undefined) {
      let tmp5 = setChannel(tmp3);
      continue;
    }
    if (someResult) {
      const _Object = Object;
      const values = Object.values(closure_23);
      const item = values.forEach((item) => {
        setChannel(item);
      });
    }
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(lazyPrivateChannels) {
    lazyPrivateChannels = lazyPrivateChannels.lazyPrivateChannels;
    if (null != _null) {
      closure_21 = {};
      const item = _null.forEach(setPrivateChannel);
    }
    const item1 = lazyPrivateChannels.forEach(setPrivateChannel);
  },
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    let c22;
    let initialPrivateChannels;
    closure_25 = {};
    closure_19 = {};
    closure_20 = {};
    closure_24 = {};
    closure_23 = {};
    closure_27 = {};
    closure_32 = {};
    closure_30 = {};
    closure_31 = Date.now();
    ({ initialPrivateChannels: c22, initialPrivateChannels } = arg0);
    const item = initialPrivateChannels.forEach(setPrivateChannel);
    const iter = arg0.guilds[Symbol.iterator]();
    const nextResult = iter.next();
    const tmp = closure_20;
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if ("partial" === nextResult.dataMode) {
        let arr = _modDef12;
        let item1 = arr.forEach(tmp[tmp4.id], setGuildChannel);
        let _HermesInternal = HermesInternal;
        let fileOnlyResult = closure_17.fileOnly(
          "Restoring guild channels for " + tmp4.id + " #:" + guildChannelCount(tmp4.id),
        );
      }
      let tmp15 = handleOneGuildCreate(tmp4);
      continue;
    }
    handleFavoritesUpdate();
  },
  CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: function handlePutOverwriteSuccess(overwrite) {
    overwrite = overwrite.overwrite;
    const tmp = getChannel(overwrite.channelId);
    if (null == tmp) {
      return false;
    } else {
      const obj = {};
      set = tmp.set;
      const merged = Object.assign(tmp.permissionOverwrites);
      obj[overwrite.id] = overwrite;
      setChannel(set("permissionOverwrites", obj));
    }
  },
  CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: function handleDeleteOverwriteSuccess(overwriteId) {
    overwriteId = overwriteId.overwriteId;
    const obj = getChannel(overwriteId.channelId);
    if (null == obj) {
      return false;
    } else {
      const obj3 = {};
      const merged = Object.assign(obj.permissionOverwrites);
      delete obj2[overwriteId];
      setChannel(obj.set("permissionOverwrites", obj3));
    }
  },
  GUILD_CREATE: function handleCreateGuild(guild) {
    handleOneGuildCreate(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    closure_17.fileOnly("GuildDelete of " + guild.guild.id);
    deleteGuildChannels(guild.guild.id);
    set.delete(guild.guild.id);
    BasicChannelCacheStore.invalidate(guild.guild.id);
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_CHANNELS: function handleLoadChannels(arg0) {
    let channels;
    let guildId;
    const iter = arg0.channels[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      ({ guildId, channels } = nextResult);
      let _HermesInternal = HermesInternal;
      let fileOnlyResult = closure_17.fileOnly("Lazy loaded guild channels for " + guildId);
      let tmp6 = deserializeChannelsDefault(channels);
      let addResult = set.add(guildId);
      let restoredResult = BasicChannelCacheStore.restored(guildId);
      for (const item10033 of channels) {
        let _Object = Object;
        if (!Object.hasOwn(closure_19, item10033.id)) {
          let tmp18 = setGuildChannel(closure_12(item10033));
        }
        continue;
      }
      continue;
    }
    return false;
  },
  LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
  LOAD_MESSAGES_SUCCESS: handleLoadMessages,
  LOAD_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOGOUT: function handleLogout() {
    closure_17.fileOnly("initializeClear()");
    closure_25 = {};
    closure_19 = {};
    closure_20 = {};
    closure_27 = {};
    closure_24 = {};
    closure_21 = {};
    closure_32 = {};
    closure_23 = {};
    new Set();
    closure_30 = {};
    closure_31 = Date.now();
  },
  OVERLAY_INITIALIZE: function handleInitialize(arg0) {
    const tmp = arg0.channels[Symbol.iterator]();
    while (tmp !== undefined) {
      let obj = deserializeChannels;
      let tmp7 = setChannel(obj.deserializeChannel(closure_12(tmp2)));
      continue;
    }
  },
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_DELETE: handleDeleteChannel,
  THREAD_LIST_SYNC: function handleThreadListSync(threads) {
    threads = threads.threads;
    const item = threads.forEach((type) => {
      if (set.has(type.type)) {
        setChannel(type);
      }
    });
  },
  THREAD_UPDATE: handleThreadCreateOrUpdate,
};
const channelStore = new ChannelStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("stores/ChannelStore.tsx");

export default channelStore;
export { ChannelLoader };
