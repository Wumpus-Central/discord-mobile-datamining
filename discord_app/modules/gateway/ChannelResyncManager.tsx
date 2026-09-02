// === Module 17144: handleGuildCreate ===

// Module 17144 (handleGuildCreate)
import timestampDefault from "timestamp" /* 3 */;
import setDefault from "set" /* 684 */;
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import initializeDefault from "initialize" /* 5494 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "fetchFingerprint" /* 1215 */;
import closure_5 from "ensureGuildLoaded" /* 1386 */;
import closure_6 from "handleConnectionOpen" /* 4855 */;
import closure_7 from "createGuildRecordFromRust" /* 1908 */;
import closure_8 from "_handleConnectionOpen" /* 5229 */;
import { AnalyticEvents } from "ME" /* 673 */;
import { ChannelFlags } from "set" /* 1393 */;
import set from "set" /* 2 */;

const require = arg1;
function handleGuildCreate(guild) {
  guild = guild.guild;
  closure_1 = undefined;
  if (true !== guild.unavailable) {
    if (null != dependencyMap4[guild.id]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp[guild.id]);
    }
    closure_1 = c24;
    const _setTimeout = setTimeout;
    dependencyMap4[guild.id] = setTimeout(() => {
      delete tmp2[tmp];
      if (closure_1 === closure_1_24) {
        closure_1_18.delete(tmp3.id);
        closure_1_29(tmp3.id);
        closure_1_32(tmp3.id);
      }
    }, 0);
  }
}
function handlePostConnectionOpen() {
  set.clear();
  scheduleGuildResyncs();
  guildIds = guildIds.getGuildIds();
  const item = guildIds.forEach((arg0) => {
    callback(arg0);
  });
}
function handleChannelSync(guild_id) {
  guild_id = guild_id.guild_id;
  if (guild_id.integrity_check) {
    const channels = guild_id.channels;
    let mutableGuildChannelsForGuild2;
    set = undefined;
    let items;
    let str2;
    if (dependencyMap[guild_id] != null) {
      str2 = tmp20.requestId;
    }
    if (str2 == null) {
      str2 = "unknown";
    }
    mutableGuildChannelsForGuild2 = mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(guild_id);
    const _Set = Set;
    set = new Set();
    items = [];
    const item = channels.forEach((flags) => {
      if (null != dependencyMap[flags.id]) {
        let obj = dependencyMap(items[15]);
        let num = flags.flags;
        if (num == null) {
          num = 0;
        }
        const hasFlagResult = obj.hasFlag(num, closure_1_10.OBFUSCATED);
        const hasFlagResult1 = dependencyMap(items[15]).hasFlag(tmp.flags, closure_1_10.OBFUSCATED);
        if (hasFlagResult !== hasFlagResult1) {
          const _HermesInternal2 = HermesInternal;
          closure_1_11.warn("Integrity check failure: " + flags.id + " serverObfuscated: " + hasFlagResult + " != clientObfuscated: " + hasFlagResult1);
          set.add(flags.id);
          obj = { channel_id: null, server_obfuscated: null, client_obfuscated: null, server_flags: null, client_flags: null, channel_type: null, parent_id: null };
          obj[0] = flags.id;
          obj[1] = hasFlagResult;
          obj[2] = hasFlagResult1;
          let num2 = flags.flags;
          if (num2 == null) {
            num2 = 0;
          }
          obj[3] = num2;
          let num3 = tmp.flags;
          if (num3 == null) {
            num3 = 0;
          }
          obj[4] = num3;
          ({ type: obj3[5], parent_id } = flags);
          if (parent_id == null) {
            parent_id = null;
          }
          obj[6] = parent_id;
          items.push(obj);
        }
        const tmp5 = dependencyMap;
        const tmp5Result = dependencyMap(items[15]);
        const tmp6 = items;
      } else {
        const _HermesInternal = HermesInternal;
        closure_1_11.warn("Integrity check failure: " + flags.id + " was missing.");
      }
    });
    const _Array = Array;
    const joined = Array.from(set).join(", ");
    let json = null;
    if (items.length > 0) {
      const _JSON = JSON;
      json = JSON.stringify(items);
    }
    if (set.size > 0) {
      let verbose = closure_11.warn;
    } else {
      verbose = closure_11.verbose;
    }
    let _HermesInternal = HermesInternal;
    verbose("Integrity check for guild " + guild_id + " completed. Discrepancies found: " + joined);
    const arr = Array.from(set);
    let obj = { guild_id: null, request_id: null, num_channels_received: null, num_discrepancies_found: null, discrepancy_channel_ids: null, discrepancies_details: null };
    obj[0] = guild_id;
    obj[1] = str2;
    obj[2] = channels.length;
    obj[3] = set.size;
    obj[4] = joined;
    obj[5] = json;
    set(items[11]).track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_COMPLETED, obj);
    if (null != dependencyMap3[guild_id]) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(tmp38[guild_id]);
      delete tmp[tmp2];
    }
    if (null != dependencyMap2[guild_id]) {
      const _clearTimeout4 = clearTimeout;
      clearTimeout(tmp40[guild_id]);
      delete tmp[tmp2];
    }
    set.add(guild_id);
    const obj4 = set(items[11]);
  } else {
    let str;
    if (dependencyMap[guild_id] != null) {
      str = tmp5.requestId;
    }
    if (str == null) {
      str = "unknown";
    }
    obj = set(items[11]);
    obj = { guild_id: null, request_id: null, num_new_channels: null };
    obj[0] = guild_id.guild_id;
    obj[1] = str;
    obj[2] = guild_id.channels.length;
    obj.track(AnalyticEvents.GUILD_CHANNEL_RESYNC_COMPLETED, obj);
    const guild_id2 = guild_id.guild_id;
    if (null != table2[guild_id2]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp11[guild_id2]);
      delete tmp[tmp3];
    }
    if (null != table[guild_id2]) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(tmp14[guild_id2]);
      delete tmp[tmp3];
    }
    scheduleIntegrityCheck(guild_id.guild_id);
  }
}
function handleLogout(isSwitchingAccount) {
  closure_24 = closure_24 + 1;
  let str = "logout";
  if (true === isSwitchingAccount.isSwitchingAccount) {
    str = "account_switch";
  }
  const items = [...Object.keys(closure_19), ...Object.keys(closure_20), ...Object.keys(closure_21), ...Object.keys(closure_22)];
  set = new Set(items);
  const item = set.forEach((arg0) => {
    if (null != closure_1_17[arg0]) {
      let tmp2 = tmp19;
      if (null == closure_1_19[arg0]) {
        tmp2 = tmp21;
      }
      if (tmp2) {
        let obj = closure_1_1(closure_1_2[11]);
        obj = { guild_id: null, request_id: null, requested_user_id: null, cancellation_reason: null, had_scheduled_timer: null, had_pending_timeout: null };
        obj[0] = arg0;
        ({ requestId: obj2[1], requestedUserId } = tmp);
        if (requestedUserId == null) {
          requestedUserId = null;
        }
        obj[2] = requestedUserId;
        obj[3] = str;
        obj[4] = tmp19;
        obj[5] = tmp21;
        obj.track(closure_1_9.GUILD_CHANNEL_RESYNC_CANCELED, obj);
      }
      let tmp12 = tmp9;
      if (null == closure_1_21[arg0]) {
        tmp12 = tmp11;
      }
      if (tmp12) {
        obj = { guild_id: null, request_id: null, requested_user_id: null, cancellation_reason: null, had_scheduled_timer: null, had_pending_timeout: null };
        obj[0] = arg0;
        ({ requestId: obj4[1], requestedUserId: requestedUserId2 } = tmp);
        if (requestedUserId2 == null) {
          requestedUserId2 = null;
        }
        obj[2] = requestedUserId2;
        obj[3] = str;
        obj[4] = tmp9;
        obj[5] = tmp11;
        closure_1_1(closure_1_2[11]).track(closure_1_9.GUILD_CHANNEL_INTEGRITY_CHECK_CANCELED, obj);
        const obj3 = closure_1_1(closure_1_2[11]);
      }
    }
  });
  const item1 = set.forEach((arg0) => {
    if (null != table2[arg0]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp4[arg0]);
      delete tmp3[tmp2];
    }
    if (null != table[arg0]) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(tmp7[arg0]);
      delete tmp3[tmp2];
    }
    if (null != table4[arg0]) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(tmp10[arg0]);
      delete tmp3[tmp2];
    }
    if (null != table3[arg0]) {
      const _clearTimeout4 = clearTimeout;
      clearTimeout(tmp13[arg0]);
      delete tmp[tmp2];
    }
  });
  for (const key10048 in closure_23) {
    let tmp7 = key10048;
    let _clearTimeout = clearTimeout;
    let tmp8 = dependencyMap4;
    let clearTimeoutResult = clearTimeout(dependencyMap4[key10048]);
    delete tmp2[tmp3];
    continue;
  }
  for (const key10051 in closure_17) {
    let tmp10 = key10051;
    let tmp11 = closure_17;
    delete tmp[tmp2];
    continue;
  }
  set.clear();
}
function scheduleGuildResyncs() {
  const self = this;
  const apply = _scheduleGuildResyncs.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _scheduleGuildResyncs() {
  let self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
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
        try {
          c4 = 2;
          if (0 === closure_3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp2;
              let callback = tmp3;
              closure_2 = undefined;
              closure_3 = undefined;
              callback = closure_1_24;
              closure_3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = (function getResyncGuilds() {
                const self = this;
                const apply = closure_31.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })();
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = arg1;
            if (callback === closure_24) {
              const _JSON = JSON;
              const _HermesInternal = HermesInternal;
              closure_11.verbose("Resync guilds: " + JSON.stringify(closure_2));
              const eligible = closure_2.eligible;
              const item = eligible.forEach((id) => {
                if (!tmp2) {
                  id = id.id;
                  let obj = { guildId: null, requestId: null, source: "resync", requestedUserId: null };
                  obj[0] = id;
                  obj[1] = id.requestId;
                  obj[3] = id.getId();
                  closure_1_17[id] = obj;
                  if (null != closure_1_19[id]) {
                    let _clearTimeout = clearTimeout;
                    clearTimeout(tmp5[id]);
                  }
                  const _Math = Math;
                  const _Math2 = Math;
                  let _setTimeout = setTimeout;
                  closure_1_19[id] = setTimeout(() => {
                    delete tmp3[tmp2];
                    let obj = id(closure_1_2[14]);
                    if (obj.isChannelMetadataObfuscationEnabled("triggerGuildChannelResync")) {
                      let str;
                      if (closure_1_17[tmp6] != null) {
                        str = tmp9.requestId;
                      }
                      if (str == null) {
                        str = "unknown";
                      }
                      if (null == closure_1_7.getGuild(tmp6)) {
                        obj = { guild_id: null, request_id: null, failure_reason: "guild_not_found" };
                        obj[0] = tmp6;
                        obj[1] = str;
                        closure_1_1(closure_1_2[11]).track(closure_1_9.GUILD_CHANNEL_RESYNC_FAILED, obj);
                        if (null != closure_1_20[tmp6]) {
                          let _clearTimeout2 = clearTimeout;
                          clearTimeout(tmp31[tmp6]);
                          delete tmp4[tmp2];
                        }
                        if (null != tmp5[tmp6]) {
                          const _clearTimeout3 = clearTimeout;
                          clearTimeout(tmp5[tmp6]);
                          delete tmp3[tmp2];
                        }
                        const obj5 = closure_1_1(closure_1_2[11]);
                      } else {
                        const items = [];
                        const mutableGuildChannelsForGuild = closure_1_5.getMutableGuildChannelsForGuild(tmp6);
                        let num2 = 0;
                        let num = 0;
                        const keys = Object.keys();
                        if (keys !== undefined) {
                          num = num2;
                          while (keys[tmp] !== undefined) {
                            let tmp40 = tmp13;
                            let tmp41 = id;
                            let tmp42 = closure_1_2;
                            let obj7 = id(closure_1_2[15]);
                            let tmp43 = closure_1_10;
                            if (obj7.hasFlag(mutableGuildChannelsForGuild[tmp13].flags, closure_1_10.OBFUSCATED)) {
                              let arr = items.push(tmp13);
                            }
                            num2 = num2 + 1;
                            continue;
                          }
                        }
                        obj = { guild_id: null, request_id: null, num_obfuscated_channels: null, num_total_channels: null };
                        obj[0] = tmp6;
                        obj[1] = str;
                        obj[2] = items.length;
                        obj[3] = num;
                        closure_1_1(closure_1_2[11]).track(closure_1_9.GUILD_CHANNEL_RESYNC_EXECUTED, obj);
                        const socket = closure_1_8.getSocket();
                        const result = socket.triggerGuildChannelResync(tmp6, items);
                        closure_0 = tmp6;
                        if (null != closure_1_20[tmp6]) {
                          let _clearTimeout = clearTimeout;
                          clearTimeout(tmp21[tmp6]);
                        }
                        const _setTimeout = setTimeout;
                        closure_1_20[tmp6] = setTimeout(() => { ... }, closure_1_15);
                        closure_1_32(tmp6);
                        const obj2 = closure_1_1(closure_1_2[11]);
                      }
                    }
                  }, Math.ceil(Math.random() * closure_1_12));
                }
              });
              if (closure_2.ineligible.length > 0) {
                const ineligible = closure_2.ineligible;
                closure_3 = ineligible.map((id) => id.id);
                const _JSON2 = JSON;
                const _HermesInternal2 = HermesInternal;
                closure_11.verbose("Guilds we are no longer part of are marked for resync. Unmarking them. Guilds: " + JSON.stringify(closure_3));
                let obj2 = { type: "UNMARK_RESYNC_GUILDS", guildIds: null };
                obj2[1] = closure_3;
                callback(closure_2[12]).dispatch(obj2);
                let obj5 = callback(closure_2[12]);
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          c4 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  closure_30 = tmp;
  let apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _getResyncGuilds() {
  const self = this;
  const tmp = callback(function*() {
    closure_0 = tmp4;
    const obj3 = v0(table[13]);
    yield obj3.getAll();
    const obj = { eligible: null, ineligible: null };
    obj[0] = [];
    obj[1] = [];
    return arg1.reduce((ineligible, id) => {
      if (null == guild.getGuild(id.id)) {
        if (!unavailable.isUnavailable(id.id)) {
          ineligible = ineligible.ineligible;
          ineligible.push(id);
        }
        return ineligible;
      }
      const eligible = ineligible.eligible;
      eligible.push(id);
    }, obj);
  });
  closure_31 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function scheduleIntegrityCheck(guild_id) {
  const _require = guild_id;
  let obj = _require(13547);
  if (obj.isChannelMetadataIntegrityCheckEnabled("scheduleIntegrityCheck")) {
    if (null != dependencyMap3[guild_id]) {
      let _clearTimeout = clearTimeout;
      clearTimeout(tmp9[guild_id]);
      delete tmp3[tmp2];
    }
    if (null != dependencyMap2[guild_id]) {
      let _clearTimeout2 = clearTimeout;
      clearTimeout(tmp6[guild_id]);
      delete tmp[tmp2];
    }
    if (null != dependencyMap[guild_id]) {
      let requestId = tmp15.requestId;
    } else {
      const v4Result = _require(511).v4();
      obj = { guildId: null, requestId: null, source: "integrity_check", requestedUserId: null };
      obj[0] = guild_id;
      obj[1] = v4Result;
      obj[3] = id.getId();
      tmp14[guild_id] = obj;
      requestId = v4Result;
      const tmp4Result = _require(511);
    }
    if (!tmp8) {
      obj = { guild_id: null, request_id: null };
      obj[0] = guild_id;
      obj[1] = requestId;
      expandEventPropertiesDefault.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_REQUESTED, obj);
      let obj4 = expandEventPropertiesDefault;
    }
    const _Math = Math;
    const _Math2 = Math;
    let _setTimeout = setTimeout;
    dependencyMap2[guild_id] = setTimeout(() => {
      delete tmp2[tmp];
      let obj = guild_id(closure_1_2[14]);
      if (obj.isChannelMetadataIntegrityCheckEnabled("triggerIntegrityCheck")) {
        if (!closure_1_18.has(tmp5)) {
          let str;
          if (closure_1_17[tmp5] != null) {
            str = tmp9.requestId;
          }
          if (str == null) {
            str = "unknown";
          }
          if (null == closure_1_7.getGuild(tmp5)) {
            obj = { guild_id: null, request_id: null, failure_reason: "guild_not_found" };
            obj[0] = tmp5;
            obj[1] = str;
            closure_1_1(tmp6[11]).track(closure_1_9.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED, obj);
            if (null != closure_1_22[tmp5]) {
              let _clearTimeout2 = clearTimeout;
              clearTimeout(tmp19[tmp5]);
              delete tmp3[tmp];
            }
            if (null != tmp4[tmp5]) {
              const _clearTimeout3 = clearTimeout;
              clearTimeout(tmp4[tmp5]);
              delete tmp2[tmp];
            }
            const obj2 = closure_1_1(tmp6[11]);
          } else {
            obj = { guild_id: null, request_id: null };
            obj[0] = tmp5;
            obj[1] = str;
            closure_1_1(tmp6[11]).track(closure_1_9.GUILD_CHANNEL_INTEGRITY_CHECK_EXECUTED, obj);
            const socket = closure_1_8.getSocket();
            const result = socket.triggerGuildChannelResync(tmp5, null);
            guild_id = tmp5;
            if (null != closure_1_22[tmp5]) {
              let _clearTimeout = clearTimeout;
              clearTimeout(tmp29[tmp5]);
            }
            const _setTimeout = setTimeout;
            closure_1_22[tmp5] = setTimeout(() => {
              closure_1_11.warn("Integrity check timeout for guild " + closure_0 + " with request " + str);
              let obj = str(closure_1_2[11]);
              obj = { guild_id: closure_0, request_id: str, failure_reason: "timeout" };
              obj.track(closure_1_9.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED, obj);
              if (null != closure_1_22[closure_0]) {
                const _clearTimeout = clearTimeout;
                clearTimeout(tmp7[tmp4]);
                delete tmp3[tmp2];
              }
              if (null != closure_1_21[closure_0]) {
                const _clearTimeout2 = clearTimeout;
                clearTimeout(tmp9[tmp4]);
                delete tmp[tmp2];
              }
            }, closure_1_16);
            const obj4 = closure_1_1(tmp6[11]);
          }
        }
      }
    }, closure_13 + Math.ceil(Math.random() * closure_14));
    tmp8 = null != dependencyMap2[guild_id];
  }
}
let closure_11 = new timestampDefault("ChannelResyncManager");
let closure_12 = 2 * setDefault.Millis.SECOND;
let closure_13 = 30 * setDefault.Millis.SECOND;
let closure_14 = 300 * setDefault.Millis.SECOND;
let closure_15 = 30 * setDefault.Millis.SECOND;
let closure_16 = 60 * setDefault.Millis.SECOND;
initializeDefault;
class ChannelResyncManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { GUILD_CREATE: handleGuildCreate, POST_CONNECTION_OPEN: handlePostConnectionOpen, CHANNEL_SYNC: handleChannelSync, LOGOUT: handleLogout };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
ChannelResyncManager.prototype["__unsafeGetTestState"] = function __unsafeGetTestState() {
  return { scheduledResyncTimerGuildIds: Object.keys(closure_19), pendingResyncTimeoutGuildIds: Object.keys(closure_20), scheduledIntegrityCheckTimerGuildIds: Object.keys(closure_21), pendingIntegrityCheckTimeoutGuildIds: Object.keys(closure_22), pendingGuildCreateDeferredGuildIds: Object.keys(closure_23), guildIdsWithLatestRequest: Object.keys(closure_17), guildsCompletedIntegrityCheck: Array.from(set), sessionEpoch: c24 };
};
let closure_17 = {};
let set = new Set();
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let closure_22 = {};
let closure_23 = {};
let c24 = 0;
const channelResyncManager = new ChannelResyncManager();
let result = set.fileFinishedImporting("modules/gateway/ChannelResyncManager.tsx");

export default channelResyncManager;