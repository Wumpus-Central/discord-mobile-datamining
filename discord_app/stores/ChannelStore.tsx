// === Module 1372: ensureGuildLoaded ===

// Module 1372 (ensureGuildLoaded)
import _slicedToArray from "_slicedToArray";
import fetchFingerprint from "fetchFingerprint";
import hasChannel from "hasChannel";
import initializeFromUserSettings from "initializeFromUserSettings";
import createChannelRecord from "createChannelRecord";
import closure_13 from "fetchFingerprint";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import mergeGuildAvatar from "mergeGuildAvatar";
import { ChannelTypes } from "ME";
import { Store } from "initialize";
import set from "hasChannel";

let c10;
let c9;
let closure_12;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function ensureGuildLoaded(guild_id, Basic, getBasicChannel) {
  let arr;
  let tmp41;
  const _require = guild_id;
  if (null != guild_id) {
    if ("null" !== guild_id) {
      if (!set.has(guild_id)) {
        if (Basic !== closure_35.Basic) {
          const databaseResult = importDefault(1907).database();
          importDefault = databaseResult;
          if (null != databaseResult) {
            const _HermesInternal4 = HermesInternal;
            tmp3.verbose("hydrating guild (guild: " + guild_id + ", trace: " + getBasicChannel + ")");
            const _HermesInternal5 = HermesInternal;
            const result = _require(1926).tryLoadOrResetCacheGateway("ensureGuildLoaded(" + guild_id + ")", () => databaseResult(outer1_2[13]).getSync(closure_1, closure_0), "ensureGuildLoaded");
            if (null == result) {
              set.add(guild_id);
              store.restored(guild_id);
              const _HermesInternal3 = HermesInternal;
              obj3.log("load returned null; early returning (guild: " + guild_id + ", database: " + databaseResult + ")");
            } else {
              [arr, tmp41] = callback(result, 2);
              tmp4(1928)(arr);
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
                let tmp16 = closure_19;
                let tmp15 = item10037;
                if (!Object.hasOwn(closure_19, item10037.id)) {
                  let tmp17 = setGuildChannel;
                  let tmp18 = callback5;
                  let tmp19 = item10037;
                  let tmp20 = setGuildChannel(callback5(tmp15));
                }
                continue;
              }
              const _HermesInternal2 = HermesInternal;
              tmp3.verbose("hydration complete (guild: " + guild_id + ", channels: " + arr.length + ", guilds_loaded: " + closure_34 + ")");
              const tmp4Result = tmp4(10);
            }
            obj3 = tmp3;
            const obj4 = _require(1926);
          }
          const obj = importDefault(1907);
        }
      }
    }
  }
}
function deleteGuildChannels(id) {
  tmp3.fileOnly("Deleting guild channels for " + id);
  if (null != dependencyMap3[id]) {
    const keys = importDefault(11).keys(dependencyMap3[id]);
    for (const item10024 of keys) {
      let tmp13 = closure_19;
      delete tmp4[tmp5];
      continue;
    }
    delete tmp3[tmp2];
    const obj = importDefault(11);
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
  let guild_id;
  let id;
  let id2;
  let merge;
  if (isPrivate.isPrivate()) {
    const id3 = isPrivate.id;
    delete tmp2[tmp];
    const recipients = isPrivate.recipients;
    if (null == recipients.find((arg0) => callback(table[18])(arg0))) {
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
      importDefault(709).dispatch(obj);
      const obj4 = importDefault(709);
    }
    const tmp14 = closure_23;
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
      let obj1 = dependencyMap6[guild_id];
      if (obj1 == null) {
        obj1 = {};
      }
      dependencyMap6[guild_id] = obj1;
      dependencyMap6[guild_id][id] = isPrivate;
      const tmp10 = dependencyMap6;
    } else if (dependencyMap6[guild_id] != null) {
      delete tmp[tmp2];
    }
    const tmp5 = dependencyMap3;
    const tmp8 = dependencyMap8;
  }
}
function setPrivateChannel(recipients) {
  recipients = recipients.recipients;
  if (null != recipients.find((arg0) => callback(table[18])(arg0))) {
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
    importDefault(709).dispatch(obj);
    const obj2 = importDefault(709);
  }
}
function setGuildChannel(item10028) {
  let guild_id;
  let id;
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
    const tmp6 = dependencyMap6;
  } else if (dependencyMap6[guild_id] != null) {
    delete tmp2[tmp];
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
    tmp3.fileOnly("ConnectionOpen contained full channels for " + id + " #:" + channels.items.length);
    deleteGuildChannels(id);
    set.add(id);
    store.restored(id);
    const items = channels.items;
    for (const item10058 of items) {
      let tmp24 = setGuildChannel;
      let tmp25 = setGuildChannel(item10058);
      continue;
    }
  } else if ("update" === op) {
    if (tmp) {
      store.invalidate(id);
    }
    const deletes = channels.deletes;
    for (const item10017 of deletes) {
      let tmp6 = deleteChannel;
      let tmp7 = dependencyMap2;
      let tmp8 = deleteChannel(dependencyMap2[item10017]);
      continue;
    }
    const writes = channels.writes;
    for (const item10028 of writes) {
      let tmp11 = setGuildChannel;
      let tmp12 = setGuildChannel(item10028);
      continue;
    }
    tmp = channels.writes.length > 0 || channels.deletes.length > 0;
  }
  if (null != threads) {
    const tmp27 = threads[Symbol.iterator]();
    while (tmp27 !== undefined) {
      let tmp31 = setThread;
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
  const item = threads.forEach((type) => {
    if (set.has(type.type)) {
      callback2(callback(type));
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
        const tmp20 = dependencyMap8;
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
      let tmp4 = nextResult;
      let tmp5 = closure_23;
      hasItem = !(tmp2.thread.id in closure_23);
    }
    if (hasItem) {
      let tmp6 = set3;
      let tmp7 = nextResult;
      hasItem = set3.has(tmp2.thread.type);
    }
    if (hasItem) {
      let tmp8 = setThread;
      let tmp9 = callback3;
      let tmp10 = nextResult;
      let tmp11 = setThread(callback3(tmp2.thread));
    }
    continue;
  }
}
function handleSearchMessagesSuccess(data) {
  data = data.data;
  let item = data.forEach((arg0) => {
    let channels;
    let messages;
    let threads;
    ({ messages, threads, channels } = arg0);
    let item = messages.forEach((arr) => {
      const item = arr.forEach((thread) => {
        callback(thread.thread);
      });
    });
    const item1 = threads.forEach(closure_46);
    const item2 = channels.forEach((id) => {
      const obj = callback(id);
      const tmp = null != callback2(id.id);
      if (!obj.isPrivate()) {
        if (!tmp) {
          callback3(obj);
        }
      } else {
        table[obj.id] = obj;
      }
    });
  });
}
function addThreadIfMissing(id) {
  let merge;
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
      importDefault(709).dispatch(obj);
      const obj3 = importDefault(709);
    }
    const tmp7 = closure_23;
  }
}
function handleFavoritesUpdate() {
  let closure_28 = {};
  for (const key10006 in initializeFromUserSettings.getFavoriteChannels()) {
    let tmp2 = key10006;
    let tmp3 = store2;
    let categoryRecord = store2.getCategoryRecord(key10006);
    if (null == categoryRecord) {
      continue;
    } else {
      let tmp = closure_28;
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
({ createChannelRecordFromServer: error, isPrivate: metroImportAll, GUILD_CHANNEL_TYPES: c9, THREAD_CHANNEL_TYPES: c10, ALL_CHANNEL_TYPES: unpackModuleId, castChannelRecord: closure_12 } = createChannelRecord);
let closure_17 = new require("initializeFromUserSettings")("ChannelStore");
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
let prototype;
prototype = function ChannelLoader() {
  return Object.create(new.target.prototype);
}.prototype;
prototype["loadAllMissingChannels"] = function loadAllMissingChannels() {
  const guildIds = store3.getGuildIds();
  return this.loadGuildIds(guildIds.filter((arg0) => !set.has(arg0)));
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
  found = items.filter(found(1351).isNotNullish);
  if (0 === found.length) {
    return null;
  } else {
    const databaseResult = importDefault(1907).database();
    importDefault = databaseResult;
    if (null == databaseResult) {
      return null;
    } else if (found.some((arg0) => !set.has(arg0))) {
      const dependencyMap = c31;
      return tmp(1926).tryLoadOrResetCacheGatewayAsync("loadChannels", callback2(function*() {
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
            return { value: "HermesInternal", done: null };
          }
        } else {
          while (true) {
            let num = 2;
            c7 = 2;
            let tmp6 = c6;
            if (0 === c6) {
              if (arg0 === 1) {
                let num10 = 3;
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                let num9 = 3;
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let guildId = tmp;
                let closure_2 = tmp6;
                let lib;
                let closure_1;
                closure_2 = undefined;
                guildId = undefined;
                let tmp45 = outer1_0;
                let mapped = outer1_0.map((arg0) => {
                  let closure_0 = arg0;
                  if (outer1_29.has(arg0)) {
                    return null;
                  } else if (null != outer1_30[arg0]) {
                    const _HermesInternal = HermesInternal;
                    outer1_17.fileOnly("Skipping loading " + arg0 + " because a load is pending");
                    return null;
                  } else {
                    let obj = callback(table[13]);
                    const async = obj.getAsync(callback, arg0);
                    const nextPromise = async.then((channels) => {
                      outer1_17.fileOnly("Lazy loaded channels for " + closure_0 + " #:" + channels.length);
                      return { guildId: closure_0, channels };
                    });
                    outer1_30[arg0] = nextPromise;
                    obj = { guildId: null, promise: null };
                    obj[0] = arg0;
                    obj[1] = nextPromise;
                    return obj;
                  }
                });
                let tmp46 = outer1_0;
                let tmp47 = outer1_2;
                let found = mapped.filter(outer1_0(outer1_2[10]).isNotNullish);
                lib = found;
                let c5 = 1;
                let _Promise = Promise;
                c6 = 2;
                let num17 = 1;
                c7 = 1;
                let obj1 = { value: null, done: false };
                obj1[0] = Promise.all(found.map((promise) => promise.promise));
                return obj1;
              }
            } else if (1 === tmp6) {
              let tmp17 = closure_2;
              let tmp18 = guildId;
              let tmp19 = fetchFingerprint;
              let tmp20 = fetchFingerprint;
              c5 = 0;
              let tmp21 = outer1_17;
              let tmp22 = lib;
              let tmp23 = fetchFingerprint;
              let errorResult = outer1_17.error(`Failed to load channels from disk for ${closure_0.map((guildId) => guildId.guildId)}`, fetchFingerprint);
              let tmp25 = lib;
              closure_1 = lib;
              let tmp26 = lib;
              closure_1 = lib;
              lib = lib[Symbol.iterator]();
              let tmp27 = closure_1;
              let tmp28 = lib;
              while (lib !== undefined) {
                let tmp30 = closure_2;
                let tmp31 = guildId;
                c5 = 2;
                guildId = tmp29;
                let tmp32 = outer1_30;
                let tmp33 = guildId;
                guildId = guildId.guildId;
                delete tmp3[tmp2];
                c5 = 0;
                continue;
              }
              let tmp34 = closure_2;
              let tmp35 = fetchFingerprint;
              throw fetchFingerprint;
            } else if (2 === tmp6) {
              if (arg0 === 1) {
                let num8 = 3;
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                let num7 = 3;
                c7 = 3;
                let obj2 = { value: null, done: true };
                obj2[0] = arg1;
                return obj2;
              } else {
                let tmp41 = closure_2;
                let tmp42 = guildId;
                closure_1 = arg1;
                let tmp43 = outer1_31;
                let tmp44 = closure_2;
                if (outer1_31 !== closure_2) {
                  let tmp14 = outer1_17;
                  let tmp15 = lib;
                  let fileOnlyResult = outer1_17.fileOnly(`lastResetTime has changed, skipping loads for ${closure_0.map((guildId) => guildId.guildId)}`);
                  c5 = 0;
                  let num6 = 3;
                  c7 = 3;
                  return { value: null, done: true };
                } else {
                  let tmp10 = closure_1;
                  closure_2 = closure_1.filter((guildId) => !set.has(guildId.guildId));
                  let tmp11 = outer1_1;
                  let tmp12 = outer1_2;
                  obj1 = outer1_1(outer1_2[14]);
                  let obj3 = { type: "LOAD_CHANNELS", channels: null };
                  let tmp13 = closure_2;
                  obj3[1] = closure_2;
                  c6 = 3;
                  let num5 = 1;
                  c7 = 1;
                  let obj4 = { value: null, done: false };
                  obj4[0] = obj1.dispatch(obj3);
                  return obj4;
                }
              }
            } else if (3 === tmp6) {
              if (arg0 === 1) {
                let num4 = 3;
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 0;
                let num3 = 3;
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c5 = 0;
                let num2 = 3;
                c7 = 3;
                return { value: null, done: true };
              }
            } else {
              let tmp7 = fetchFingerprint;
              let tmp8 = fetchFingerprint;
              c5 = 0;
              let tmp9 = lib;
              lib.return();
              throw fetchFingerprint;
            }
          }
        }
      }));
    } else {
      return null;
    }
    let obj = importDefault(1907);
  }
  tmp = found;
};
let closure_35 = { Basic: 0, [0]: "Basic", Full: 1, [1]: "Full" };
class ChannelStore extends Store {
}
const prototype2 = ChannelStore.prototype;
prototype2["initialize"] = function initialize() {
  this.waitFor(closure_13, hasChannel, initializeFromUserSettings, createGuildRecordFromRust, mergeGuildAvatar);
  const items = [initializeFromUserSettings];
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
    let tmp4 = ensureGuildLoaded;
    let tmp5 = closure_35;
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
    let keys = importDefault(11).keys(closure_21);
    const obj2 = importDefault(11);
  } else {
    let guildBasicChannels = store.getGuildBasicChannels(guild_id);
    if (guildBasicChannels == null) {
      guildBasicChannels = dependencyMap3[guild_id];
    }
    if (guildBasicChannels == null) {
      guildBasicChannels = closure_18;
    }
    keys = importDefault(11).keys(guildBasicChannels);
    const obj = importDefault(11);
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
prototype2["getMutableGuildChannelsForGuild"] = function getMutableGuildChannelsForGuild(id) {
  ensureGuildLoaded(id, closure_35.Full, "getMutableGuildChannelsForGuild");
  let tmp2 = dependencyMap3[id];
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
  const values = importDefault(12).values(tmp);
  return values.sort((id, id2) => callback(table[17]).compare(id.id, id2.id));
};
prototype2["getSortedPrivateChannels"] = function getSortedPrivateChannels() {
  const values = importDefault(12)(closure_21).values();
  const sorted = values.sort((lastMessageId, lastMessageId2) => callback(table[17]).compare(lastMessageId.lastMessageId, lastMessageId2.lastMessageId));
  const obj = importDefault(12)(closure_21);
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
  return importDefault(11).keys(closure_25);
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
  let closure_0 = channelId;
  const values = importDefault(12).values(closure_23);
  return values.filter((parent_id) => parent_id.parent_id === closure_0);
};
prototype2["getAllThreadsForGuild"] = function getAllThreadsForGuild(guildId) {
  let closure_0 = guildId;
  const values = importDefault(12).values(closure_23);
  return values.filter((guild_id) => guild_id.guild_id === closure_0);
};
prototype2["getInitialOverlayState"] = function getInitialOverlayState() {
  const merged = Object.assign(closure_19);
  const merged1 = Object.assign(closure_21);
  const merged2 = Object.assign(closure_23);
  return {};
};
prototype2["getDebugInfo"] = function getDebugInfo() {
  const obj = { loadedGuildIds: null, pendingGuildLoads: null, guildSizes: null };
  obj[0] = Array.from(set).sort(importDefault(11).compare);
  const keys = Object.keys(closure_30);
  obj[1] = keys.sort(importDefault(11).compare);
  const keys1 = Object.keys(closure_20);
  const sorted = keys1.sort(importDefault(11).compare);
  obj[2] = sorted.map((arg0) => {
    let length = null;
    if (null != dependencyMap[arg0]) {
      const _Object = Object;
      length = Object.keys(dependencyMap[arg0]).length;
    }
    return "" + arg0 + ": " + length;
  });
  return obj;
};
ChannelStore.displayName = "ChannelStore";
const channelStore = new ChannelStore(require("dispatcher"), {
  BACKGROUND_SYNC: function handleBackgroundSync(guilds) {
    guilds = guilds.guilds;
    let closure_0 = closure_20;
    let closure_19 = {};
    closure_20 = {};
    let closure_27 = {};
    let closure_24 = {};
    let item = guilds.forEach((data_mode) => {
      const dependencyMap = data_mode;
      if ("unavailable" === data_mode.data_mode) {
        const id2 = data_mode.id;
        let length = null;
        if (null != dependencyMap2[id2]) {
          const _Object2 = Object;
          length = Object.keys(dependencyMap2[id2]).length;
        }
        const _HermesInternal2 = HermesInternal;
        outer1_17.fileOnly("Restoring guild channels b/c unavailable in bg sync, for " + data_mode.id + " #:" + length);
        const item = outer1_1(outer1_2[19]).forEach(dependencyMap[data_mode.id], outer1_43);
        const arr4 = outer1_1(outer1_2[19]);
      } else if ("partial" === data_mode.data_mode) {
        const id = data_mode.id;
        let length1 = null;
        if (null != dependencyMap2[id]) {
          const _Object = Object;
          length1 = Object.keys(dependencyMap2[id]).length;
        }
        const _HermesInternal = HermesInternal;
        outer1_17.fileOnly("Restoring guild channels b/c partial in bg sync, for " + data_mode.id + " #:" + length1);
        const item1 = outer1_1(outer1_2[19]).forEach(dependencyMap[data_mode.id], outer1_43);
        let deleted_channel_ids = data_mode.partial_updates.deleted_channel_ids;
        if (deleted_channel_ids == null) {
          deleted_channel_ids = [];
        }
        if (deleted_channel_ids.length > 0) {
          outer1_36(data_mode.id, outer1_35.Full, "handleBackgroundSync");
          const item2 = deleted_channel_ids.forEach((arg0) => {
            callback(table[arg0]);
          });
        }
        const channels = data_mode.partial_updates.channels;
        if (channels != null) {
          const item3 = channels.forEach((arg0) => {
            let guild_id;
            let id;
            const tmp3 = outer1_7(arg0, data_mode.id);
            ({ id, guild_id } = tmp3);
            outer1_19[id] = tmp3;
            let obj = outer1_20[guild_id];
            if (obj == null) {
              obj = {};
            }
            outer1_20[guild_id] = obj;
            outer1_20[guild_id][id] = tmp3;
            let num = outer1_27[guild_id];
            if (num == null) {
              num = 0;
            }
            outer1_27[guild_id] = num + 1;
            if (null != tmp3.linkedLobby) {
              obj = outer1_24[guild_id];
              if (obj == null) {
                obj = {};
              }
              outer1_24[guild_id] = obj;
              outer1_24[guild_id][id] = tmp3;
              const tmp7 = outer1_24;
            } else if (outer1_24[guild_id] != null) {
              delete tmp2[tmp];
            }
          });
        }
        const arr = outer1_1(outer1_2[19]);
      } else {
        const _HermesInternal3 = HermesInternal;
        outer1_17.fileOnly("BG sync contained full channels for " + data_mode.id + " #:" + data_mode.channels.length);
        outer1_37(data_mode.id);
        outer1_29.add(data_mode.id);
        outer1_5.restored(data_mode.id);
        const channels1 = data_mode.channels;
        const item4 = channels1.forEach((arg0) => {
          let guild_id;
          let id;
          const tmp3 = outer1_7(arg0, data_mode.id);
          ({ id, guild_id } = tmp3);
          outer1_19[id] = tmp3;
          let obj = outer1_20[guild_id];
          if (obj == null) {
            obj = {};
          }
          outer1_20[guild_id] = obj;
          outer1_20[guild_id][id] = tmp3;
          let num = outer1_27[guild_id];
          if (num == null) {
            num = 0;
          }
          outer1_27[guild_id] = num + 1;
          if (null != tmp3.linkedLobby) {
            obj = outer1_24[guild_id];
            if (obj == null) {
              obj = {};
            }
            outer1_24[guild_id] = obj;
            outer1_24[guild_id][id] = tmp3;
            const tmp7 = outer1_24;
          } else if (outer1_24[guild_id] != null) {
            delete tmp2[tmp];
          }
        });
      }
    });
  },
  CACHE_LOADED_LAZY: function handleLazyCacheLoaded(guilds) {
    let arr;
    let tmp5;
    closure_33 = Math.max(closure_33, guilds.guilds.length);
    while (tmp !== undefined) {
      let tmp3 = callback;
      let tmp4 = callback(tmp2, 2);
      [tmp5, arr] = tmp4;
      let tmp6 = tmp3;
      let _HermesInternal = HermesInternal;
      let fileOnlyResult = tmp3.fileOnly("Lazy cache contained full guild channels for " + tmp5 + " #:" + arr.length);
      let tmp8 = set;
      let addResult = set.add(tmp5);
      let tmp10 = arr;
      let tmp11 = arr;
      for (const item10036 of arr) {
        let tmp12 = setChannel;
        let tmp13 = callback5;
        let tmp14 = setChannel(callback5(item10036));
        continue;
      }
      continue;
    }
  },
  CACHE_LOADED: function handleCacheLoaded(guilds) {
    let tmp3;
    closure_33 = Math.max(closure_33, guilds.guilds.length);
    const initialGuildChannels = guilds.initialGuildChannels;
    const items = [guilds.privateChannels, initialGuildChannels];
    const iter = items[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp2 = nextResult;
      tmp3 = nextResult;
      for (const item10021 of nextResult) {
        let tmp4 = setChannel;
        let tmp5 = require;
        let tmp6 = dependencyMap;
        let obj = require(1928) /* deserializeChannels */;
        let tmp7 = callback5;
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
      tmp3.fileOnly("Early cache contained full guild channels for " + guild_id);
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
    let channels;
    let channels2;
    ({ channels, channels: channels2 } = arg0);
    const someResult = channels.some((id) => {
      const tmp = callback(id.id);
      let nsfw;
      if (tmp != null) {
        nsfw = tmp.nsfw;
      }
      let tmp3 = id.nsfw !== nsfw;
      if (!tmp3) {
        let type;
        if (tmp != null) {
          type = tmp.type;
        }
        tmp3 = id.type !== type;
      }
      return tmp3;
    });
    while (tmp2 !== undefined) {
      let tmp4 = setChannel;
      let tmp5 = setChannel(tmp3);
      continue;
    }
    if (someResult) {
      const _Object = Object;
      const values = Object.values(closure_23);
      const item = values.forEach((arg0) => {
        callback2(arg0);
      });
    }
  },
  CONNECTION_OPEN_SUPPLEMENTAL: function handleConnectionOpenSupplemental(lazyPrivateChannels) {
    lazyPrivateChannels = lazyPrivateChannels.lazyPrivateChannels;
    if (null != _null) {
      let closure_21 = {};
      const item = _null.forEach(setPrivateChannel);
    }
    const item1 = lazyPrivateChannels.forEach(setPrivateChannel);
  },
  CONNECTION_OPEN: function handleConnectionOpen(arg0) {
    let c22;
    let initialPrivateChannels;
    let closure_25 = {};
    let closure_19 = {};
    let closure_20 = {};
    let closure_24 = {};
    let closure_23 = {};
    let closure_27 = {};
    let closure_32 = {};
    let closure_30 = {};
    let closure_31 = Date.now();
    ({ initialPrivateChannels: c22, initialPrivateChannels } = arg0);
    const item = initialPrivateChannels.forEach(setPrivateChannel);
    const iter = arg0.guilds[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp4 = nextResult;
      if ("partial" === nextResult.dataMode) {
        let tmp5 = importDefault;
        let tmp6 = dependencyMap;
        let arr = importDefault(12);
        let tmp7 = nextResult;
        let tmp8 = setGuildChannel;
        let item1 = arr.forEach(closure_20[tmp4.id], setGuildChannel);
        let tmp10 = tmp3;
        let tmp11 = guildChannelCount;
        let _HermesInternal = HermesInternal;
        let fileOnlyResult = tmp3.fileOnly("Restoring guild channels for " + tmp4.id + " #:" + guildChannelCount(tmp4.id));
      }
      let tmp13 = handleOneGuildCreate;
      let tmp14 = nextResult;
      let tmp15 = handleOneGuildCreate(tmp4);
      continue;
    }
    handleFavoritesUpdate();
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
    tmp3.fileOnly("GuildDelete of " + guild.guild.id);
    deleteGuildChannels(guild.guild.id);
    set.delete(guild.guild.id);
    store.invalidate(guild.guild.id);
  },
  LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadArchivedThreadsSuccess,
  LOAD_CHANNELS: function handleLoadChannels(arg0) {
    let channels;
    let guildId;
    const iter = arg0.channels[Symbol.iterator]();
    while (iter !== undefined) {
      ({ guildId, channels } = nextResult);
      let tmp2 = tmp3;
      let _HermesInternal = HermesInternal;
      let fileOnlyResult = tmp3.fileOnly("Lazy loaded guild channels for " + guildId);
      let tmp4 = importDefault;
      let tmp5 = dependencyMap;
      let tmp6 = importDefault(1928)(channels);
      let tmp7 = set;
      let addResult = set.add(guildId);
      let tmp9 = store;
      let restoredResult = store.restored(guildId);
      let tmp11 = channels;
      let tmp12 = channels;
      for (const item10033 of channels) {
        let _Object = Object;
        let tmp14 = closure_19;
        let tmp13 = item10033;
        if (!Object.hasOwn(closure_19, item10033.id)) {
          let tmp15 = setGuildChannel;
          let tmp16 = callback5;
          let tmp17 = item10033;
          let tmp18 = setGuildChannel(callback5(tmp13));
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
    tmp3.fileOnly("initializeClear()");
    let closure_25 = {};
    let closure_19 = {};
    let closure_20 = {};
    let closure_27 = {};
    let closure_24 = {};
    let closure_21 = {};
    let closure_32 = {};
    let closure_23 = {};
    const set = new Set();
    let closure_30 = {};
    let closure_31 = Date.now();
  },
  OVERLAY_INITIALIZE: function handleInitialize(arg0) {
    while (tmp !== undefined) {
      let tmp3 = setChannel;
      let tmp4 = require;
      let tmp5 = dependencyMap;
      let obj = require(1928) /* deserializeChannels */;
      let tmp6 = callback5;
      let tmp7 = setChannel(obj.deserializeChannel(callback5(tmp2)));
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
        callback(type);
      }
    });
  },
  THREAD_UPDATE: handleThreadCreateOrUpdate
});
let result = set.fileFinishedImporting("stores/ChannelStore.tsx");

export default channelStore;
export const ChannelLoader = prototype;