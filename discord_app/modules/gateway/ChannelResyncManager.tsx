// === Module 17482: ChannelResyncManager ===

// Module 17482 (ChannelResyncManager)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1091 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import FlagUtils from "FlagUtils" /* 1385 */;
import GuildsRequiringChannelSyncDefault from "GuildsRequiringChannelSync" /* 7757 */;
import PrivateChannelHidingExperiment from "PrivateChannelHidingExperiment" /* 13763 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 4981 */;
import GuildStore from "GuildStore" /* 1980 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5362 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7225 */;

require = fn;
function handleGuildCreate(guild) {
  guild = guild.guild;
  closure_1 = undefined;
  if (true !== guild.unavailable) {
    if (null != dependencyMap4[guild.id]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap4[guild.id]);
    }
    closure_1 = c24;
    const _setTimeout = setTimeout;
    dependencyMap4[guild.id] = setTimeout(() => {
      delete tmp2[tmp];
      if (closure_1 === c24) {
        set.delete(guild.id);
        scheduleGuildResyncs(guild.id);
        scheduleIntegrityCheck(guild.id);
      }
    }, 0);
  }
}
function handlePostConnectionOpen() {
  set.clear();
  scheduleGuildResyncs();
  const guildIds = GuildStore.getGuildIds();
  const item = guildIds.forEach((item) => {
    scheduleIntegrityCheck(item);
  });
}
function handleChannelSync(guild_id) {
  guild_id = guild_id.guild_id;
  if (guild_id.integrity_check) {
    const channels = guild_id.channels;
    let mutableGuildChannelsForGuild;
    set = undefined;
    let items;
    let str2;
    if (dependencyMap[guild_id] != null) {
      str2 = tmp20.requestId;
    }
    if (str2 == null) {
      str2 = "unknown";
    }
    mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(guild_id);
    const _Set = Set;
    set = new Set();
    items = [];
    const item = channels.forEach((flags) => {
      if (null != closure_0[flags.id]) {
        let num = flags.flags;
        if (num == null) {
          num = 0;
        }
        const hasFlagResult = FlagUtils.hasFlag(num, ChannelFlags.OBFUSCATED);
        const hasFlagResult1 = FlagUtils.hasFlag(tmp.flags, ChannelFlags.OBFUSCATED);
        if (hasFlagResult !== hasFlagResult1) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Integrity check failure: " + flags.id + " serverObfuscated: " + hasFlagResult + " != clientObfuscated: " + hasFlagResult1);
          set.add(flags.id);
          const obj2 = { channel_id: flags.id, server_obfuscated: hasFlagResult, client_obfuscated: hasFlagResult1, server_flags: null, client_flags: null, channel_type: null, parent_id: null };
          let num2 = flags.flags;
          if (num2 == null) {
            num2 = 0;
          }
          obj2.server_flags = num2;
          let num3 = tmp.flags;
          if (num3 == null) {
            num3 = 0;
          }
          obj2.client_flags = num3;
          ({ type: obj3.channel_type, parent_id } = flags);
          if (parent_id == null) {
            parent_id = null;
          }
          obj2.parent_id = parent_id;
          items.push(obj2);
        }
        const tmp5Result = FlagUtils;
      } else {
        const _HermesInternal = HermesInternal;
        logger.warn("Integrity check failure: " + flags.id + " was missing.");
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
      let verbose = logger.warn;
    } else {
      verbose = logger.verbose;
    }
    let _HermesInternal = HermesInternal;
    verbose("Integrity check for guild " + guild_id + " completed. Discrepancies found: " + joined);
    const arr = Array.from(set);
    let obj2 = { guild_id, request_id: str2, num_channels_received: channels.length, num_discrepancies_found: set.size, discrepancy_channel_ids: joined, discrepancies_details: json };
    set(items[11]).track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_COMPLETED, obj2);
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
    const obj3 = { guild_id: guild_id.guild_id, request_id: str, num_new_channels: guild_id.channels.length };
    set(items[11]).track(AnalyticEvents.GUILD_CHANNEL_RESYNC_COMPLETED, obj3);
    const guild_id2 = guild_id.guild_id;
    if (null != closure_20[guild_id2]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp11[guild_id2]);
      delete tmp[tmp3];
    }
    if (null != closure_19[guild_id2]) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(tmp14[guild_id2]);
      delete tmp[tmp3];
    }
    scheduleIntegrityCheck(guild_id.guild_id);
    let obj = set(items[11]);
  }
}
function handleLogout(isSwitchingAccount) {
  closure_24 = closure_24 + 1;
  const items = [...Object.keys(closure_19), ...Object.keys(closure_20), ...Object.keys(closure_21), ...Object.keys(closure_22)];
  set = new Set(items);
  const item = set.forEach((guild_id) => {
    if (null != closure_17[guild_id]) {
      let tmp2 = tmp19;
      if (null == dependencyMap[guild_id]) {
        tmp2 = tmp21;
      }
      if (tmp2) {
        const obj6 = { guild_id, request_id: null, requested_user_id: null, cancellation_reason: null, had_scheduled_timer: null, had_pending_timeout: null };
        ({ requestId: obj2.request_id, requestedUserId } = tmp);
        if (requestedUserId == null) {
          requestedUserId = null;
        }
        obj6.requested_user_id = requestedUserId;
        obj6.cancellation_reason = str;
        obj6.had_scheduled_timer = tmp19;
        obj6.had_pending_timeout = tmp21;
        AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_CHANNEL_RESYNC_CANCELED, obj6);
      }
      let tmp12 = tmp9;
      if (null == dependencyMap3[guild_id]) {
        tmp12 = tmp11;
      }
      if (tmp12) {
        const obj7 = { guild_id, request_id: null, requested_user_id: null, cancellation_reason: null, had_scheduled_timer: null, had_pending_timeout: null };
        ({ requestId: obj4.request_id, requestedUserId: requestedUserId2 } = tmp);
        if (requestedUserId2 == null) {
          requestedUserId2 = null;
        }
        obj7.requested_user_id = requestedUserId2;
        obj7.cancellation_reason = str;
        obj7.had_scheduled_timer = tmp9;
        obj7.had_pending_timeout = tmp11;
        AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_CANCELED, obj7);
      }
    }
  });
  const item1 = set.forEach((item) => {
    if (null != dependencyMap2[item]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp4[item]);
      delete tmp3[tmp2];
    }
    if (null != dependencyMap[item]) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(tmp7[item]);
      delete tmp3[tmp2];
    }
    if (null != dependencyMap4[item]) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(tmp10[item]);
      delete tmp3[tmp2];
    }
    if (null != dependencyMap3[item]) {
      const _clearTimeout4 = clearTimeout;
      clearTimeout(tmp13[item]);
      delete tmp[tmp2];
    }
  });
  for (const key10048 in closure_23) {
    let _clearTimeout = clearTimeout;
    let clearTimeoutResult = clearTimeout(dependencyMap4[key10048]);
    delete tmp2[tmp3];
    continue;
  }
  for (const key10051 in closure_17) {
    delete tmp[tmp2];
    continue;
  }
  set.clear();
}
function scheduleGuildResyncs() {
  const self = this;
  const apply = closure_30.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_30 = async function _scheduleGuildResyncs(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          dependencyMap = tmp2;
          closure_1 = tmp3;
          closure_129_0 = closure_0;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_1 = sessionEpoch;
          c3 = 1;
          c4 = 1;
          let obj4 = {
            value: (function getResyncGuilds() {
                      const self = this;
                      const apply = closure_1_31.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(),
            done: false
          };
          return obj4;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        let obj = { value, done: true };
        return obj;
      } else {
        closure_129_2 = value;
        if (closure_129_1 === closure_130_24) {
          const _JSON = JSON;
          const _HermesInternal = HermesInternal;
          closure_130_11.verbose("Resync guilds: " + JSON.stringify(closure_129_2));
          const eligible = closure_129_2.eligible;
          const item = eligible.forEach((id) => {
            if (!tmp2) {
              id = id.id;
              let obj = { guildId: id, requestId: id.requestId, source: "resync", requestedUserId: id.getId() };
              closure_2_17[id] = obj;
              if (null != dependencyMap[id]) {
                let _clearTimeout = clearTimeout;
                clearTimeout(dependencyMap[id]);
              }
              const _Math = Math;
              const _Math2 = Math;
              let _setTimeout = setTimeout;
              dependencyMap[id] = setTimeout(() => {
                delete tmp3[tmp2];
                if (obj.isChannelMetadataObfuscationEnabled("triggerGuildChannelResync")) {
                  let str;
                  if (closure_2_17[id] != null) {
                    str = tmp9.requestId;
                  }
                  if (str == null) {
                    str = "unknown";
                  }
                  if (null == guild.getGuild(id)) {
                    const obj3 = { guild_id: id, request_id: str, failure_reason: "guild_not_found" };
                    closure_2_1(1241).track(constants.GUILD_CHANNEL_RESYNC_FAILED, obj3);
                    if (null != dependencyMap2[id]) {
                      let _clearTimeout2 = clearTimeout;
                      clearTimeout(tmp31[id]);
                      delete tmp4[tmp2];
                    }
                    if (null != dependencyMap[id]) {
                      const _clearTimeout3 = clearTimeout;
                      clearTimeout(dependencyMap[id]);
                      delete tmp3[tmp2];
                    }
                    const obj5 = closure_2_1(1241);
                  } else {
                    const items = [];
                    mutableGuildChannelsForGuild = mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(id);
                    let num2 = 0;
                    let num = 0;
                    const keys = Object.keys();
                    if (keys !== undefined) {
                      num = num2;
                      while (keys[tmp] !== undefined) {
                        let obj7 = closure_2_0(1385);
                        if (obj7.hasFlag(mutableGuildChannelsForGuild[tmp13].flags, constants2.OBFUSCATED)) {
                          let arr = items.push(tmp13);
                        }
                        num2 = num2 + 1;
                        continue;
                      }
                    }
                    const obj4 = { guild_id: id, request_id: str, num_obfuscated_channels: items.length, num_total_channels: num };
                    closure_2_1(1241).track(constants.GUILD_CHANNEL_RESYNC_EXECUTED, obj4);
                    socket = socket.getSocket();
                    const result = socket.triggerGuildChannelResync(id, items);
                    const guild_id = id;
                    if (null != dependencyMap2[id]) {
                      let _clearTimeout = clearTimeout;
                      clearTimeout(dependencyMap2[id]);
                    }
                    const _setTimeout = setTimeout;
                    dependencyMap2[id] = setTimeout(() => {
                      logger.warn("Resync timeout for guild " + guild_id + " with request " + str);
                      closure_2_1(dependencyMap[11]).track(constants.GUILD_CHANNEL_RESYNC_FAILED, { guild_id, request_id: str, failure_reason: "timeout" });
                      if (null != dependencyMap2[guild_id]) {
                        const _clearTimeout = clearTimeout;
                        clearTimeout(tmp7[guild_id]);
                        delete tmp3[tmp2];
                      }
                      if (null != closure_2_19[guild_id]) {
                        const _clearTimeout2 = clearTimeout;
                        clearTimeout(tmp9[guild_id]);
                        delete tmp[tmp2];
                      }
                      const obj = closure_2_1(dependencyMap[11]);
                      const obj2 = { guild_id, request_id: str, failure_reason: "timeout" };
                    }, closure_2_15);
                    closure_2_32(id);
                    let obj2 = closure_2_1(1241);
                  }
                }
                obj = closure_2_0(13763);
              }, Math.ceil(Math.random() * closure_2_12));
            }
            tmp2 = null != closure_1_0 && id.id !== tmp;
          });
          if (closure_129_2.ineligible.length > 0) {
            const ineligible = closure_129_2.ineligible;
            closure_129_3 = ineligible.map((id) => id.id);
            const _JSON2 = JSON;
            const _HermesInternal2 = HermesInternal;
            closure_130_11.verbose("Guilds we are no longer part of are marked for resync. Unmarking them. Guilds: " + JSON.stringify(closure_129_3));
            const obj6 = { type: "UNMARK_RESYNC_GUILDS", guildIds: closure_129_3 };
            closure_130_1(closure_130_2[12]).dispatch(obj6);
            let obj5 = closure_130_1(closure_130_2[12]);
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
};
let closure_31 = async function _getResyncGuilds() {
  closure_0 = tmp4;
  await GuildsRequiringChannelSyncDefault.getAll();
  return value.reduce((ineligible, id) => {
    if (null == guild.getGuild(id.id)) {
      if (!unavailable.isUnavailable(id.id)) {
        ineligible = ineligible.ineligible;
        ineligible.push(id);
      }
      return ineligible;
    }
    const eligible = ineligible.eligible;
    eligible.push(id);
  }, { eligible: [], ineligible: [] });
};
function scheduleIntegrityCheck(guild_id) {
  _require = guild_id;
  if (obj.isChannelMetadataIntegrityCheckEnabled("scheduleIntegrityCheck")) {
    if (null != dependencyMap3[guild_id]) {
      let _clearTimeout = clearTimeout;
      clearTimeout(tmp9[guild_id]);
      delete tmp3[tmp2];
    }
    if (null != dependencyMap2[guild_id]) {
      let _clearTimeout2 = clearTimeout;
      clearTimeout(dependencyMap2[guild_id]);
      delete tmp[tmp2];
    }
    if (null != dependencyMap[guild_id]) {
      let requestId = tmp15.requestId;
    } else {
      const v4Result = tmp4(1255).v4();
      let obj2 = { guildId: guild_id, requestId: v4Result, source: "integrity_check", requestedUserId: AuthenticationStore.getId() };
      tmp14[guild_id] = obj2;
      requestId = v4Result;
      const tmp4Result = tmp4(1255);
    }
    if (!tmp8) {
      let obj3 = { guild_id, request_id: requestId };
      AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_REQUESTED, obj3);
    }
    const _Math = Math;
    const _Math2 = Math;
    let _setTimeout = setTimeout;
    dependencyMap2[guild_id] = setTimeout(() => {
      delete tmp2[tmp];
      if (obj.isChannelMetadataIntegrityCheckEnabled("triggerIntegrityCheck")) {
        if (!set.has(tmp5)) {
          let str;
          if (closure_17[tmp5] != null) {
            str = tmp9.requestId;
          }
          if (str == null) {
            str = "unknown";
          }
          if (null == GuildStore.getGuild(tmp5)) {
            const obj3 = { guild_id: tmp5, request_id: str, failure_reason: "guild_not_found" };
            AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED, obj3);
            if (null != dependencyMap[tmp5]) {
              let _clearTimeout2 = clearTimeout;
              clearTimeout(tmp19[tmp5]);
              delete tmp3[tmp];
            }
            if (null != dependencyMap[tmp5]) {
              const _clearTimeout3 = clearTimeout;
              clearTimeout(dependencyMap[tmp5]);
              delete tmp2[tmp];
            }
          } else {
            const obj5 = { guild_id: tmp5, request_id: str };
            AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_EXECUTED, obj5);
            const socket = GatewayConnectionStore.getSocket();
            const result = socket.triggerGuildChannelResync(tmp5, null);
            guild_id = tmp5;
            if (null != dependencyMap[tmp5]) {
              let _clearTimeout = clearTimeout;
              clearTimeout(dependencyMap[tmp5]);
            }
            const _setTimeout = setTimeout;
            dependencyMap[tmp5] = setTimeout(() => {
              logger.warn("Integrity check timeout for guild " + guild_id + " with request " + str);
              AnalyticsUtilsDefault.track(constants.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED, { guild_id, request_id: str, failure_reason: "timeout" });
              if (null != dependencyMap[guild_id]) {
                const _clearTimeout = clearTimeout;
                clearTimeout(tmp7[guild_id]);
                delete tmp3[tmp2];
              }
              if (null != dependencyMap2[guild_id]) {
                const _clearTimeout2 = clearTimeout;
                clearTimeout(tmp9[guild_id]);
                delete tmp[tmp2];
              }
              const obj2 = { guild_id, request_id: str, failure_reason: "timeout" };
            }, closure_16);
          }
        }
      }
      obj = PrivateChannelHidingExperiment;
    }, closure_13 + Math.ceil(Math.random() * closure_14));
    tmp8 = null != dependencyMap2[guild_id];
  }
  obj = require("PrivateChannelHidingExperiment");
  tmp4 = _require;
}
const AnalyticEvents = fn(1074).AnalyticEvents;
const ChannelFlags = fn(1965).ChannelFlags;
let closure_11 = new LoggerDefault("ChannelResyncManager");
let closure_12 = 2 * DurationsDefault.Millis.SECOND;
let closure_13 = 30 * DurationsDefault.Millis.SECOND;
let closure_14 = 300 * DurationsDefault.Millis.SECOND;
let closure_15 = 30 * DurationsDefault.Millis.SECOND;
let closure_16 = 60 * DurationsDefault.Millis.SECOND;
class ChannelResyncManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { GUILD_CREATE: handleGuildCreate, POST_CONNECTION_OPEN: handlePostConnectionOpen, CHANNEL_SYNC: handleChannelSync, LOGOUT: handleLogout };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
ChannelResyncManager.prototype["__unsafeGetTestState"] = function __unsafeGetTestState() {
  return { scheduledResyncTimerGuildIds: Object.keys(closure_19), pendingResyncTimeoutGuildIds: Object.keys(closure_20), scheduledIntegrityCheckTimerGuildIds: Object.keys(closure_21), pendingIntegrityCheckTimeoutGuildIds: Object.keys(closure_22), pendingGuildCreateDeferredGuildIds: Object.keys(closure_23), guildIdsWithLatestRequest: Object.keys(closure_17), guildsCompletedIntegrityCheck: Array.from(set), sessionEpoch };
};
let dependencyMap = {};
let set = new Set();
let closure_19 = {};
let closure_20 = {};
const dependencyMap2 = {};
const dependencyMap3 = {};
const dependencyMap4 = {};
let c24 = 0;
const channelResyncManager = new ChannelResyncManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/gateway/ChannelResyncManager.tsx");

export default channelResyncManager;