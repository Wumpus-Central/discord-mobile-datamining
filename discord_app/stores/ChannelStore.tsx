// discord_app/stores/ChannelStore.tsx
import timestampDefault from "../modules/debug/Logger.tsx";
import DISCORD_EPOCHDefault from "../utils/SnowflakeUtils.tsx";
import applyDefault from "../../_runtime/00012_apply.js";
import initializeDefault from "../../discord_common/js/packages/flux/index.tsx";
import dispatcherDefault from "../Dispatcher.tsx";
import itemsDefault from "../modules/app_database/DatabaseDaos.tsx";
import deserializeChannels from "../modules/cache/deserializeChannels.tsx";
import deserializeChannelsDefault from "../modules/cache/deserializeChannels.tsx";
import _slicedToArray from "../../_runtime/metro/00032__slicedToArray.js";
import asyncGeneratorStep from "../../_runtime/00005_asyncGeneratorStep.js";
import hasChannel from "../modules/app_database/stores/BasicChannelCacheStore.tsx";
import initializeFromUserSettings from "../modules/favorites/FavoriteStore.tsx";
import createChannelRecord from "../records/ChannelRecord.tsx";
import fetchFingerprint from "AuthenticationStore.tsx";
import createGuildRecordFromRust from "GuildStore.tsx";
import mergeGuildAvatar from "UserStore.tsx";
import { ChannelTypes } from "../Constants.tsx";
import { _tryLoadAsync } from "../modules/app_database/app/TryLoad.tsx";

require = fn;
function ensureGuildLoaded(guild_id, Basic, getBasicChannel) {
  const _require = guild_id;
  if (null != guild_id) {
    if ("null" !== guild_id) {
      if (!set.has(guild_id)) {
        if (Basic !== closure_35.Basic) {
          const databaseResult = itemsDefault.database();
          importDefault = databaseResult;
          if (null != databaseResult) {
            const _HermesInternal4 = HermesInternal;
            closure_17.verbose("hydrating guild (guild: " + guild_id + ", trace: " + getBasicChannel + ")");
            const _HermesInternal5 = HermesInternal;
            const result = require("../modules/app_database/app/TryLoad.tsx").tryLoadOrResetCacheGateway("ensureGuildLoaded(" + guild_id + ")", () => databaseResult(dependencyMap[13]).getSync(closure_1, closure_0), "ensureGuildLoaded");
            if (null == result) {
              set.add(guild_id);
              store.restored(guild_id);
              const _HermesInternal3 = HermesInternal;
              closure_17.log("load returned null; early returning (guild: " + guild_id + ", database: " + databaseResult + ")");
            } else {
              [arr, tmp41] = callback(result, 2);
              tmp4(1976)(arr);
              if (Basic !== tmp2.Basic) {
                closure_34 = closure_34 + 1;
              }
              set.add(guild_id);
              store.restored(guild_id);
              const tmp40 = callback(result, 2);
              const _HermesInternal = HermesInternal;
              tmp4(10).mark("\u2757", "loaded guild channels (guild: " + guild_id + ")", tmp41);
              for (const item10037 of arr) {
                let _Object = Object;
                if (!Object.hasOwn(closure_19, item10037.id)) {
                  let tmp20 = setGuildChannel(callback5(item10037));
                }
                continue;
              }
              const _HermesInternal2 = HermesInternal;
              closure_17.verbose("hydration complete (guild: " + guild_id + ", channels: " + arr.length + ", guilds_loaded: " + closure_34 + ")");
              const tmp4Result = tmp4(10);
            }
            const obj4 = _tryLoadAsync;
          }
        }
      }
    }
  }
}
function deleteGuildChannels(id) {
  closure_17.fileOnly("Deleting guild channels for " + id);
  if (null != dependencyMap3[id]) {
    const keys = DISCORD_EPOCHDefault.keys(dependencyMap3[id]);
    for (const item10024 of keys) {
      delete tmp4[tmp5];
      continue;
    }
    delete tmp3[tmp2];
  }
  if (null != dependencyMap6[id]) {
    delete tmp[tmp2];
  }
}
function getBasicChannel(arg0) {
  const Basic = closure_35.Basic;
  if (!Object.hasOwn(dependencyMap2, arg0)) {
    const _Object = Object;
    if (!Object.hasOwn(dependencyMap4, arg0)) {
      const _Object2 = Object;
      if (!Object.hasOwn(dependencyMap5, arg0)) {
        const _Object3 = Object;
        if (!Object.hasOwn(dependencyMap9, arg0)) {
          if (Basic === closure_35.Full) {
            const basicChannel = store.getBasicChannel(arg0);
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
  let basicChannel1 = dependencyMap2[arg0];
  if (basicChannel1 == null) {
    basicChannel1 = dependencyMap4[arg0];
  }
  if (basicChannel1 == null) {
    basicChannel1 = dependencyMap5[arg0];
  }
  if (basicChannel1 == null) {
    basicChannel1 = dependencyMap9[arg0];
  }
  if (basicChannel1 == null) {
    basicChannel1 = store.getBasicChannel(arg0);
  }
  return basicChannel1;
}
function getChannel(arg0) {
  const Full = closure_35.Full;
  if (!Object.hasOwn(dependencyMap2, arg0)) {
    const _Object = Object;
    if (!Object.hasOwn(dependencyMap4, arg0)) {
      const _Object2 = Object;
      if (!Object.hasOwn(dependencyMap5, arg0)) {
        const _Object3 = Object;
        if (!Object.hasOwn(dependencyMap9, arg0)) {
          if (Full === closure_35.Full) {
            const basicChannel = store.getBasicChannel(arg0);
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
  let tmp11 = dependencyMap2[arg0];
  if (tmp11 == null) {
    tmp11 = dependencyMap4[arg0];
  }
  if (tmp11 == null) {
    tmp11 = dependencyMap5[arg0];
  }
  if (tmp11 == null) {
    tmp11 = dependencyMap9[arg0];
  }
  if (tmp11 == null) {
    tmp11 = table[arg0];
  }
  return tmp11;
}
function setChannel(isPrivate) {
  if (isPrivate.isPrivate()) {
    const id3 = isPrivate.id;
    delete tmp2[tmp];
    const recipients = isPrivate.recipients;
    if (null == recipients.find((item, index) => callback(table[18])(item))) {
      closure_21[isPrivate.id] = isPrivate;
      if (isPrivate.type === ChannelTypes.DM) {
        closure_25[isPrivate.getRecipientId()] = isPrivate.id;
      }
      closure_26 = closure_26 + 1;
    }
  } else if (isPrivate.isThread()) {
    let nsfw;
    ({ id: id2, merge } = isPrivate);
    if (dependencyMap2[isPrivate.parent_id] != null) {
      nsfw = tmp13.nsfw;
    }
    let obj = { nsfw: null, parentChannelThreadType: null };
    obj[0] = true === nsfw;
    let type;
    if (dependencyMap2[isPrivate.parent_id] != null) {
      type = tmp13.type;
    }
    obj[1] = type;
    closure_23[id2] = merge(obj);
    if (isPrivate.isScheduledForDeletion()) {
      obj = { type: "THREAD_DELETE", channel: null };
      obj[1] = isPrivate;
      dispatcherDefault.dispatch(obj);
    }
  } else if (set.has(isPrivate.type)) {
    ({ id, guild_id } = isPrivate);
    dependencyMap2[id] = isPrivate;
    obj = dependencyMap3[guild_id];
    if (obj == null) {
      obj = {};
    }
    dependencyMap3[guild_id] = obj;
    dependencyMap3[guild_id][id] = isPrivate;
    let num = dependencyMap8[guild_id];
    if (num == null) {
      num = 0;
    }
    dependencyMap8[guild_id] = num + 1;
    if (null != isPrivate.linkedLobby) {
      obj1 = dependencyMap6[guild_id];
      if (obj1 == null) {
        obj1 = {};
      }
      dependencyMap6[guild_id] = obj1;
      dependencyMap6[guild_id][id] = isPrivate;
    } else if (dependencyMap6[guild_id] != null) {
      delete tmp[tmp2];
    }
  }
}
function setPrivateChannel(recipients) {
  recipients = recipients.recipients;
  if (null != recipients.find((item, index) => callback(table[18])(item))) {
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
  let nsfw;
  ({ id, merge } = isScheduledForDeletion);
  if (dependencyMap2[isScheduledForDeletion.parent_id] != null) {
    nsfw = tmp.nsfw;
  }
  let obj = { nsfw: true === nsfw, parentChannelThreadType: null };
  let type;
  if (dependencyMap2[isScheduledForDeletion.parent_id] != null) {
    type = tmp.type;
  }
  obj[1] = type;
  closure_23[id] = merge(obj);
  if (isScheduledForDeletion.isScheduledForDeletion()) {
    obj = { type: "THREAD_DELETE", channel: null };
    obj[1] = isScheduledForDeletion;
    dispatcherDefault.dispatch(obj);
  }
}
function setGuildChannel(item10028) {
  ({ id, guild_id } = item10028);
  closure_19[id] = item10028;
  let obj = dependencyMap3[guild_id];
  if (obj == null) {
    obj = {};
  }
  dependencyMap3[guild_id] = obj;
  dependencyMap3[guild_id][id] = item10028;
  let num = dependencyMap8[guild_id];
  if (num == null) {
    num = 0;
  }
  dependencyMap8[guild_id] = num + 1;
  if (null != item10028.linkedLobby) {
    obj = dependencyMap6[guild_id];
    if (obj == null) {
      obj = {};
    }
    dependencyMap6[guild_id] = obj;
    dependencyMap6[guild_id][id] = item10028;
  } else if (dependencyMap6[guild_id] != null) {
    delete tmp2[tmp];
  }
}
function handleOneGuildCreate(arg0) {
  ({ id, channels, threads } = arg0);
  const op = channels.op;
  if ("full_sync" === op) {
    const _HermesInternal = HermesInternal;
    closure_17.fileOnly("ConnectionOpen contained full channels for " + id + " #:" + channels.items.length);
    deleteGuildChannels(id);
    set.add(id);
    store.restored(id);
    const items = channels.items;
    for (const item10058 of items) {
      let tmp25 = setGuildChannel(item10058);
      continue;
    }
  } else if ("update" === op) {
    if (tmp) {
      store.invalidate(id);
    }
    const deletes = channels.deletes;
    for (const item10017 of deletes) {
      let tmp8 = deleteChannel(dependencyMap2[item10017]);
      continue;
    }
    const writes = channels.writes;
    for (const item10028 of writes) {
      let tmp12 = setGuildChannel(item10028);
      continue;
    }
    tmp = channels.writes.length > 0 || channels.deletes.length > 0;
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
  if (set3.has(channel.channel.type)) {
    let obj = getChannel(channel.channel.id);
    if (null == obj) {
      let channel2 = channel.channel;
    } else {
      obj = {};
      channel = channel.channel;
      const merged = Object.assign(channel.toJS());
      let bitrate = channel.channel.bitrate;
      if (bitrate == null) {
        bitrate = obj.bitrate;
      }
      obj.bitrate = bitrate;
      channel2 = obj.merge(obj);
    }
    setChannel(channel2);
  } else {
    return false;
  }
}
function handleLoadArchivedThreadsSuccess(threads) {
  threads = threads.threads;
  const item = threads.forEach((item, index) => {
    if (set.has(item.type)) {
      callback2(callback(item));
    }
  });
}
function deleteChannel(guild_id) {
  if (null != guild_id) {
    guild_id = guild_id.guild_id;
    if (guild_id.id in closure_21) {
      const id = guild_id.id;
      delete tmp3[tmp];
    }
    if (guild_id.id in closure_19) {
      const id2 = guild_id.id;
      delete tmp3[tmp];
    }
    if (guild_id.id in closure_23) {
      const id3 = guild_id.id;
      delete tmp3[tmp];
    }
    if (null != guild_id) {
      let tmp10 = null != dependencyMap3[guild_id];
      if (tmp10) {
        tmp10 = guild_id.id in dependencyMap3[guild_id];
      }
      if (tmp10) {
        const id4 = guild_id.id;
        delete tmp3[tmp];
      }
      let tmp15 = null != dependencyMap6[guild_id];
      if (tmp15) {
        tmp15 = guild_id.id in dependencyMap6[guild_id];
      }
      if (tmp15) {
        const id5 = guild_id.id;
        delete tmp2[tmp];
      }
    }
    if (null != guild_id.guild_id) {
      if (!set2.has(guild_id.type)) {
        let num = dependencyMap8[guild_id.guild_id];
        if (num == null) {
          num = 0;
        }
        dependencyMap8[guild_id.guild_id] = num + 1;
      }
    }
    if (callback4(guild_id.type)) {
      closure_26 = closure_26 + 1;
    }
  }
}
function handleDeleteChannel(channel) {
  channel = channel.channel;
  let obj = dependencyMap2[channel.id];
  if (obj == null) {
    obj = dependencyMap4[channel.id];
  }
  if (obj == null) {
    obj = dependencyMap5[channel.id];
  }
  if (null == obj) {
    return false;
  } else {
    deleteChannel(obj);
    if (!("basicPermissions" in obj)) {
      if (obj.type === ChannelTypes.DM) {
        if (dependencyMap7[obj.getRecipientId(obj)] === obj.id) {
          delete tmp[tmp2];
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
      hasItem = set3.has(tmp2.thread.type);
    }
    if (hasItem) {
      let tmp11 = setThread(callback3(tmp2.thread));
    }
    continue;
  }
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let item = data.forEach((item, index) => {
    ({ messages, threads, channels } = item);
    item = messages.forEach((item, index) => {
      item = item.forEach((item, index) => {
        callback(item.thread);
      });
    });
    const item1 = threads.forEach(closure_46);
    const item2 = channels.forEach((item, index) => {
      const obj = callback(item);
      if (!obj.isPrivate()) {
        if (!tmp) {
          callback3(obj);
        }
      } else {
        table[obj.id] = obj;
      }
      tmp = null != callback2(item.id);
    });
  });
}
function addThreadIfMissing(id) {
  let hasItem = null != id;
  if (hasItem) {
    hasItem = !(id.id in closure_23);
  }
  if (hasItem) {
    hasItem = set3.has(id.type);
  }
  if (hasItem) {
    let obj = callback3(id);
    let nsfw;
    ({ id, merge } = obj);
    if (dependencyMap2[obj.parent_id] != null) {
      nsfw = tmp6.nsfw;
    }
    obj = { nsfw: null, parentChannelThreadType: null };
    obj[0] = true === nsfw;
    let type;
    if (dependencyMap2[obj.parent_id] != null) {
      type = tmp6.type;
    }
    obj[1] = type;
    closure_23[id] = merge(obj);
    if (obj.isScheduledForDeletion()) {
      obj = { type: "THREAD_DELETE", channel: null };
      obj[1] = obj;
      dispatcherDefault.dispatch(obj);
    }
  }
}
function handleFavoritesUpdate() {
  closure_28 = {};
  for (const key10006 in closure_6.getFavoriteChannels()) {
    let categoryRecord = store2.getCategoryRecord(key10006);
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
  if (null != dependencyMap3[id]) {
    const _Object = Object;
    length = Object.keys(dependencyMap3[id]).length;
  }
  return length;
}
({ createChannelRecordFromServer: error, isPrivate: closure_8, GUILD_CHANNEL_TYPES: c9, THREAD_CHANNEL_TYPES: c10, ALL_CHANNEL_TYPES: unpackModuleId, castChannelRecord: closure_12 } = createChannelRecord);
let closure_17 = new timestampDefault("ChannelStore");
let closure_18 = {};
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let c22 = null;
let closure_23 = {};
let closure_24 = {};
let closure_25 = {};
let c26 = 0;
let closure_27 = {};
let closure_28 = {};
let set = new Set();
let closure_30 = {};
let c31 = 0;
let closure_32 = {};
let c33 = 0;
let c34 = 0;
const prototype = function ChannelLoader() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["loadAllMissingChannels"] = function loadAllMissingChannels() {
  const guildIds = store3.getGuildIds();
  return this.loadGuildIds(guildIds.filter((item, index) => !set.has(item)));
};
prototype["loadGuildFromChannelId"] = function loadGuildFromChannelId(channel_id) {
  let guildIds = null;
  if (null != channel_id) {
    const tmp4 = getBasicChannel(channel_id);
    let guild_id;
    if (tmp4 != null) {
      guild_id = tmp4.guild_id;
    }
    const items = [guild_id];
    guildIds = prototype.loadGuildIds(items);
  }
  return guildIds;
};
prototype["loadGuildIds"] = function loadGuildIds(items) {
  found = items.filter(found(1370).isNotNullish);
  if (0 === found.length) {
    return null;
  } else {
    const databaseResult = itemsDefault.database();
    importDefault = databaseResult;
    if (null == databaseResult) {
      return null;
    } else if (found.some((item, index) => !set.has(item))) {
      dependencyMap = c31;
      return tmp(1974).tryLoadOrResetCacheGatewayAsync("loadChannels", callback2(function*() {
        if (c7 === 2) {
          c7 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp5 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          while (true) {
            c7 = 2;
            let tmp6 = c6;
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
                closure_1 = undefined;
                closure_2 = undefined;
                let guildId;
                let mapped = closure_1_0.map((item, index) => {
                  closure_0 = item;
                  if (closure_1_29.has(item)) {
                    return null;
                  } else if (null != closure_1_30[item]) {
                    const _HermesInternal = HermesInternal;
                    closure_1_17.fileOnly("Skipping loading " + item + " because a load is pending");
                    return null;
                  } else {
                    let obj = callback(table[13]);
                    const async = obj.getAsync(callback, item);
                    const nextPromise = async.then((result) => {
                      closure_1_17.fileOnly("Lazy loaded channels for " + closure_0 + " #:" + result.length);
                      return { guildId: closure_0, channels: result };
                    });
                    closure_1_30[item] = nextPromise;
                    obj = { guildId: null, promise: null };
                    obj[0] = item;
                    obj[1] = nextPromise;
                    return obj;
                  }
                });
                found = mapped.filter(closure_1_0(closure_1_2[10]).isNotNullish);
                let lib = found;
                c5 = 1;
                let _Promise = Promise;
                c6 = 2;
                c7 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = Promise.all(found.map((item, index) => item.promise));
                return obj1;
              }
            } else if (1 === tmp6) {
              c5 = 0;
              let errorResult = closure_1_17.error(`Failed to load channels from disk for ${closure_0.map((item, index) => item.guildId)}`, closure_4);
              closure_1 = lib;
              lib = lib[Symbol.iterator]();
              while (lib !== undefined) {
                c5 = 2;
                guildId = tmp29;
                guildId = guildId.guildId;
                delete tmp3[tmp2];
                c5 = 0;
                continue;
              }
              throw closure_4;
            } else if (2 === tmp6) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                closure_1 = arg1;
                if (closure_1_31 !== closure_2) {
                  let fileOnlyResult = closure_1_17.fileOnly(`lastResetTime has changed, skipping loads for ${closure_0.map((item, index) => item.guildId)}`);
                  c5 = 0;
                  c7 = 3;
                  return { value: null, done: true };
                } else {
                  closure_2 = closure_1.filter((item, index) => !set.has(item.guildId));
                  obj1 = closure_1_1(closure_1_2[14]);
                  let obj3 = { type: "LOAD_CHANNELS", channels: null };
                  obj3[1] = closure_2;
                  c6 = 3;
                  c7 = 1;
                  let obj4 = { value: null, done: false };
                  obj4[0] = obj1.dispatch(obj3);
                  return obj4;
                }
              }
            } else if (3 === tmp6) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c5 = 0;
                c7 = 3;
                return { value: null, done: true };
              }
            } else {
              c5 = 0;
              lib.return();
              throw closure_4;
            }
          }
        }
      }));
    } else {
      return null;
    }
  }
  tmp = found;
};
let closure_35 = { Basic: 0, [0]: "Basic", Full: 1, [1]: "Full" };
const Store = initializeDefault.Store;
class ChannelStore extends Store {
}
const prototype2 = ChannelStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(closure_13, closure_5, closure_6, closure_14, closure_15);
  const items = [closure_6];
  this.syncWith(items, handleFavoritesUpdate);
};
prototype2["hasChannel"] = function hasChannel(arg0) {
  return null != getBasicChannel(arg0);
};
prototype2["getBasicChannel"] = function getBasicChannel(arg0) {
  if (null != arg0) {
    return getBasicChannel(arg0);
  }
};
prototype2["getChannel"] = function getChannel(arg0) {
  if (null != arg0) {
    return getChannel(arg0);
  }
};
prototype2["loadAllGuildAndPrivateChannelsFromDisk"] = function loadAllGuildAndPrivateChannelsFromDisk() {
  const guildIds = store3.getGuildIds();
  while (tmp2 !== undefined) {
    let tmp6 = ensureGuildLoaded(tmp3, closure_35.Full, "loadAllGuildAndPrivateChannelsFromDisk");
    continue;
  }
  const merged = Object.assign(closure_19);
  const merged1 = Object.assign(closure_21);
  return {};
};
prototype2["getChannelIds"] = function getChannelIds(guild_id) {
  ensureGuildLoaded(guild_id, closure_35.Basic, "getChannelIds");
  if (null == guild_id) {
    let keys = DISCORD_EPOCHDefault.keys(closure_21);
  } else {
    let guildBasicChannels = store.getGuildBasicChannels(guild_id);
    if (guildBasicChannels == null) {
      guildBasicChannels = dependencyMap3[guild_id];
    }
    if (guildBasicChannels == null) {
      guildBasicChannels = closure_18;
    }
    keys = DISCORD_EPOCHDefault.keys(guildBasicChannels);
  }
  return keys;
};
prototype2["getMutablePrivateChannels"] = function getMutablePrivateChannels() {
  return closure_21;
};
prototype2["getMutableBasicGuildChannelsForGuild"] = function getMutableBasicGuildChannelsForGuild(guildId) {
  ensureGuildLoaded(guildId, closure_35.Basic, "getMutableBasicGuildChannelsForGuild");
  let guildBasicChannels = store.getGuildBasicChannels(guildId);
  if (guildBasicChannels == null) {
    guildBasicChannels = dependencyMap3[guildId];
  }
  if (guildBasicChannels == null) {
    guildBasicChannels = closure_18;
  }
  return guildBasicChannels;
};
prototype2["getMutableGuildChannelsForGuild"] = function getMutableGuildChannelsForGuild(closure_0) {
  ensureGuildLoaded(closure_0, closure_35.Full, "getMutableGuildChannelsForGuild");
  let tmp2 = dependencyMap3[closure_0];
  if (tmp2 == null) {
    tmp2 = closure_18;
  }
  return tmp2;
};
prototype2["getSortedLinkedChannelsForGuild"] = function getSortedLinkedChannelsForGuild(guild_id) {
  let tmp = dependencyMap6[guild_id];
  if (tmp == null) {
    tmp = closure_18;
  }
  const values = applyDefault.values(tmp);
  return values.sort((id, id2) => callback(table[17]).compare(id.id, id2.id));
};
prototype2["getSortedPrivateChannels"] = function getSortedPrivateChannels() {
  const values = applyDefault(closure_21).values();
  const sorted = values.sort((lastMessageId, lastMessageId2) => callback(table[17]).compare(lastMessageId.lastMessageId, lastMessageId2.lastMessageId));
  const obj = applyDefault(closure_21);
  return sorted.reverse().value();
};
prototype2["getDMFromUserId"] = function getDMFromUserId(id) {
  if (null != id) {
    return dependencyMap7[id];
  }
};
prototype2["getDMChannelFromUserId"] = function getDMChannelFromUserId(id) {
  if (null != id) {
    const self = this;
    return this.getChannel(dependencyMap7[id]);
  }
};
prototype2["getMutableDMsByUserIds"] = function getMutableDMsByUserIds() {
  return closure_25;
};
prototype2["getDMUserIds"] = function getDMUserIds() {
  return DISCORD_EPOCHDefault.keys(closure_25);
};
prototype2["getPrivateChannelsVersion"] = function getPrivateChannelsVersion() {
  return c26;
};
prototype2["getGuildChannelsVersion"] = function getGuildChannelsVersion(arg0) {
  let num = dependencyMap8[arg0];
  if (num == null) {
    num = 0;
  }
  return num;
};
prototype2["getAllThreadsForParent"] = function getAllThreadsForParent(channelId) {
  closure_0 = channelId;
  const values = applyDefault.values(closure_23);
  return values.filter((item, index) => item.parent_id === closure_0);
};
prototype2["getAllThreadsForGuild"] = function getAllThreadsForGuild(guildId) {
  closure_0 = guildId;
  const values = applyDefault.values(closure_23);
  return values.filter((item, index) => item.guild_id === closure_0);
};
prototype2["getInitialOverlayState"] = function getInitialOverlayState() {
  const merged = Object.assign(closure_19);
  const merged1 = Object.assign(closure_21);
  const merged2 = Object.assign(closure_23);
  return {};
};
prototype2["getDebugInfo"] = function getDebugInfo() {
  const obj = { loadedGuildIds: Array.from(set).sort(DISCORD_EPOCHDefault.compare), pendingGuildLoads: null, guildSizes: null };
  const keys = Object.keys(closure_30);
  obj[1] = keys.sort(DISCORD_EPOCHDefault.compare);
  const keys1 = Object.keys(closure_20);
  const sorted = keys1.sort(DISCORD_EPOCHDefault.compare);
  obj[2] = sorted.map((item, index) => {
    let length = null;
    if (null != dependencyMap[item]) {
      const _Object = Object;
      length = Object.keys(dependencyMap[item]).length;
    }
    return "" + item + ": " + length;
  });
  return obj;
};
ChannelStore.displayName = "ChannelStore";
const channelStore = new ChannelStore(dispatcherDefault, {
  BACKGROUND_SYNC: function handleBackgroundSync(guilds) {
    guilds = guilds.guilds;
    closure_0 = closure_20;
    closure_19 = {};
    closure_20 = {};
    closure_27 = {};
    closure_24 = {};
    let item = guilds.forEach((item, index) => {
      dependencyMap = item;
      if ("unavailable" === item.data_mode) {
        const id2 = item.id;
        let length = null;
        if (null != dependencyMap2[id2]) {
          const _Object2 = Object;
          length = Object.keys(dependencyMap2[id2]).length;
        }
        const _HermesInternal2 = HermesInternal;
        closure_1_17.fileOnly("Restoring guild channels b/c unavailable in bg sync, for " + item.id + " #:" + length);
        item = importDefault(closure_1_2[19]).forEach(dependencyMap[item.id], setGuildChannel);
        const arr4 = importDefault(closure_1_2[19]);
      } else if ("partial" === item.data_mode) {
        const id = item.id;
        let length1 = null;
        if (null != dependencyMap2[id]) {
          const _Object = Object;
          length1 = Object.keys(dependencyMap2[id]).length;
        }
        const _HermesInternal = HermesInternal;
        closure_1_17.fileOnly("Restoring guild channels b/c partial in bg sync, for " + item.id + " #:" + length1);
        const item1 = importDefault(closure_1_2[19]).forEach(dependencyMap[item.id], setGuildChannel);
        let deleted_channel_ids = item.partial_updates.deleted_channel_ids;
        if (deleted_channel_ids == null) {
          deleted_channel_ids = [];
        }
        if (deleted_channel_ids.length > 0) {
          ensureGuildLoaded(item.id, closure_1_35.Full, "handleBackgroundSync");
          const item2 = deleted_channel_ids.forEach((item, index) => {
            callback(table[item]);
          });
        }
        const channels = item.partial_updates.channels;
        if (channels != null) {
          const item3 = channels.forEach((item, index) => {
            const tmp3 = closure_1_7(item, item.id);
            ({ id, guild_id } = tmp3);
            closure_1_19[id] = tmp3;
            let obj = closure_1_20[guild_id];
            if (obj == null) {
              obj = {};
            }
            closure_1_20[guild_id] = obj;
            closure_1_20[guild_id][id] = tmp3;
            let num = closure_1_27[guild_id];
            if (num == null) {
              num = 0;
            }
            closure_1_27[guild_id] = num + 1;
            if (null != tmp3.linkedLobby) {
              obj = closure_1_24[guild_id];
              if (obj == null) {
                obj = {};
              }
              closure_1_24[guild_id] = obj;
              closure_1_24[guild_id][id] = tmp3;
            } else if (closure_1_24[guild_id] != null) {
              delete tmp2[tmp];
            }
          });
        }
        const arr = importDefault(closure_1_2[19]);
      } else {
        const _HermesInternal3 = HermesInternal;
        closure_1_17.fileOnly("BG sync contained full channels for " + item.id + " #:" + item.channels.length);
        deleteGuildChannels(item.id);
        set.add(item.id);
        closure_1_5.restored(item.id);
        const channels1 = item.channels;
        const item4 = channels1.forEach((item, index) => {
          const tmp3 = closure_1_7(item, item.id);
          ({ id, guild_id } = tmp3);
          closure_1_19[id] = tmp3;
          let obj = closure_1_20[guild_id];
          if (obj == null) {
            obj = {};
          }
          closure_1_20[guild_id] = obj;
          closure_1_20[guild_id][id] = tmp3;
          let num = closure_1_27[guild_id];
          if (num == null) {
            num = 0;
          }
          closure_1_27[guild_id] = num + 1;
          if (null != tmp3.linkedLobby) {
            obj = closure_1_24[guild_id];
            if (obj == null) {
              obj = {};
            }
            closure_1_24[guild_id] = obj;
            closure_1_24[guild_id][id] = tmp3;
          } else if (closure_1_24[guild_id] != null) {
            delete tmp2[tmp];
          }
        });
      }
    });
  },
  CACHE_LOADED_LAZY: function handleLazyCacheLoaded(guilds) {
    closure_33 = Math.max(closure_33, guilds.guilds.length);
    while (tmp !== undefined) {
      let tmp4 = callback(tmp2, 2);
      [tmp5, arr] = tmp4;
      let _HermesInternal = HermesInternal;
      let fileOnlyResult = closure_17.fileOnly("Lazy cache contained full guild channels for " + tmp5 + " #:" + arr.length);
      let addResult = set.add(tmp5);
      for (const item10036 of arr) {
        let tmp14 = setChannel(callback5(item10036));
        continue;
      }
      continue;
    }
    tmp = guilds.guildChannels[Symbol.iterator]();
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
        let tmp8 = setChannel(obj.deserializeChannel(callback5(item10021)));
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
    id = id.getId();
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
    ({ channels, channels: channels2 } = arg0);
    const someResult = channels.some((item, index) => {
      const tmp = callback(item.id);
      let nsfw;
      if (tmp != null) {
        nsfw = tmp.nsfw;
      }
      let tmp3 = item.nsfw !== nsfw;
      if (!tmp3) {
        let type;
        if (tmp != null) {
          type = tmp.type;
        }
        tmp3 = item.type !== type;
      }
      return tmp3;
    });
    while (tmp2 !== undefined) {
      let tmp5 = setChannel(tmp3);
      continue;
    }
    if (someResult) {
      const _Object = Object;
      const values = Object.values(closure_23);
      const item = values.forEach((item, index) => {
        callback2(item);
      });
    }
    tmp2 = channels2[Symbol.iterator]();
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
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if ("partial" === nextResult.dataMode) {
        let arr = applyDefault;
        let item1 = arr.forEach(tmp[tmp4.id], setGuildChannel);
        let _HermesInternal = HermesInternal;
        let fileOnlyResult = closure_17.fileOnly("Restoring guild channels for " + tmp4.id + " #:" + guildChannelCount(tmp4.id));
      }
      let tmp15 = handleOneGuildCreate(tmp4);
      continue;
    }
    handleFavoritesUpdate();
    tmp = closure_20;
  },
  CHANNEL_PERMISSIONS_PUT_OVERWRITE_SUCCESS: function handlePutOverwriteSuccess(overwrite) {
    overwrite = overwrite.overwrite;
    let obj = getChannel(overwrite.channelId);
    if (null == obj) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj.permissionOverwrites);
      obj[overwrite.id] = overwrite;
      setChannel(obj.set("permissionOverwrites", obj));
    }
  },
  CHANNEL_PERMISSIONS_DELETE_OVERWRITE_SUCCESS: function handleDeleteOverwriteSuccess(channelId) {
    let obj = getChannel(channelId.channelId);
    if (null == obj) {
      return false;
    } else {
      obj = {};
      const merged = Object.assign(obj.permissionOverwrites);
      delete tmp2[tmp];
      setChannel(obj.set("permissionOverwrites", obj));
    }
  },
  GUILD_CREATE: function handleCreateGuild(guild) {
    handleOneGuildCreate(guild.guild);
  },
  GUILD_DELETE: function handleGuildDelete(guild) {
    closure_17.fileOnly("GuildDelete of " + guild.guild.id);
    deleteGuildChannels(guild.guild.id);
    set.delete(guild.guild.id);
    store.invalidate(guild.guild.id);
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_CHANNELS: function handleLoadChannels(arg0) {
    const iter = arg0.channels[Symbol.iterator]();
    while (iter !== undefined) {
      ({ guildId, channels } = nextResult);
      let _HermesInternal = HermesInternal;
      let fileOnlyResult = closure_17.fileOnly("Lazy loaded guild channels for " + guildId);
      let tmp6 = deserializeChannelsDefault(channels);
      let addResult = set.add(guildId);
      let restoredResult = store.restored(guildId);
      for (const item10033 of channels) {
        let _Object = Object;
        if (!Object.hasOwn(closure_19, item10033.id)) {
          let tmp18 = setGuildChannel(callback5(item10033));
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
    set = new Set();
    closure_30 = {};
    closure_31 = Date.now();
  },
  OVERLAY_INITIALIZE: function handleInitialize(arg0) {
    while (tmp !== undefined) {
      let obj = deserializeChannels;
      let tmp7 = setChannel(obj.deserializeChannel(callback5(tmp2)));
      continue;
    }
    tmp = arg0.channels[Symbol.iterator]();
  },
  SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleSearchMessagesSuccess,
  THREAD_CREATE: handleThreadCreateOrUpdate,
  THREAD_DELETE: handleDeleteChannel,
  THREAD_LIST_SYNC: function handleThreadListSync(threads) {
    threads = threads.threads;
    const item = threads.forEach((item, index) => {
      if (set.has(item.type)) {
        callback(item);
      }
    });
  },
  THREAD_UPDATE: handleThreadCreateOrUpdate
});
let tmp3 = new timestampDefault("ChannelStore");
let result = require("obj132").fileFinishedImporting("stores/ChannelStore.tsx");

export default channelStore;
export const ChannelLoader = prototype;