// === Module 17330: ChannelResyncManager ===

// Module 17330 (ChannelResyncManager)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1090 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import GuildsRequiringChannelSyncDefault from "GuildsRequiringChannelSync" /* 7652 */;
import PrivateChannelHidingExperiment from "PrivateChannelHidingExperiment" /* 13668 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 4902 */;
import GuildStore from "GuildStore" /* 1979 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5277 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
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
      if (closure_1 === c24) {
        set.delete(tmp3.id);
        scheduleGuildResyncs(tmp3.id);
        scheduleIntegrityCheck(tmp3.id);
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
        let obj = FlagUtils;
        let num = flags.flags;
        if (num == null) {
          num = 0;
        }
        const hasFlagResult = obj.hasFlag(num, ChannelFlags.OBFUSCATED);
        const hasFlagResult1 = FlagUtils.hasFlag(tmp.flags, ChannelFlags.OBFUSCATED);
        if (hasFlagResult !== hasFlagResult1) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Integrity check failure: " + flags.id + " serverObfuscated: " + hasFlagResult + " != clientObfuscated: " + hasFlagResult1);
          set.add(flags.id);
          obj = { channel_id: flags.id, server_obfuscated: hasFlagResult, client_obfuscated: hasFlagResult1, server_flags: null, client_flags: null, channel_type: null, parent_id: null };
          let num2 = flags.flags;
          if (num2 == null) {
            num2 = 0;
          }
          obj.server_flags = num2;
          let num3 = tmp.flags;
          if (num3 == null) {
            num3 = 0;
          }
          obj.client_flags = num3;
          ({ type: obj3.channel_type, parent_id } = flags);
          if (parent_id == null) {
            parent_id = null;
          }
          obj.parent_id = parent_id;
          items.push(obj);
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
    let obj = { guild_id, request_id: str2, num_channels_received: channels.length, num_discrepancies_found: set.size, discrepancy_channel_ids: joined, discrepancies_details: json };
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
    set(items[11]);
    obj = { guild_id: guild_id.guild_id, request_id: str, num_new_channels: guild_id.channels.length };
    obj.track(AnalyticEvents.GUILD_CHANNEL_RESYNC_COMPLETED, obj);
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
  const item = set.forEach((guild_id) => {
    if (null != closure_17[guild_id]) {
      let tmp2 = tmp19;
      if (null == dependencyMap[guild_id]) {
        tmp2 = tmp21;
      }
      if (tmp2) {
        let obj = { guild_id, request_id: null, requested_user_id: null, cancellation_reason: null, had_scheduled_timer: null, had_pending_timeout: null };
        ({ requestId: obj2.request_id, requestedUserId } = tmp);
        if (requestedUserId == null) {
          requestedUserId = null;
        }
        obj.requested_user_id = requestedUserId;
        obj.cancellation_reason = str;
        obj.had_scheduled_timer = tmp19;
        obj.had_pending_timeout = tmp21;
        obj.track(AnalyticEvents.GUILD_CHANNEL_RESYNC_CANCELED, obj);
      }
      let tmp12 = tmp9;
      if (null == dependencyMap3[guild_id]) {
        tmp12 = tmp11;
      }
      if (tmp12) {
        obj = { guild_id, request_id: null, requested_user_id: null, cancellation_reason: null, had_scheduled_timer: null, had_pending_timeout: null };
        ({ requestId: obj4.request_id, requestedUserId: requestedUserId2 } = tmp);
        if (requestedUserId2 == null) {
          requestedUserId2 = null;
        }
        obj.requested_user_id = requestedUserId2;
        obj.cancellation_reason = str;
        obj.had_scheduled_timer = tmp9;
        obj.had_pending_timeout = tmp11;
        AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_CANCELED, obj);
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
let closure_30 = async function _scheduleGuildResyncs(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          dependencyMap = tmp2;
          closure_1 = tmp3;
          closure_129_0 = closure_0;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_1 = sessionEpoch;
          c3 = 1;
          c4 = 1;
          const obj1 = {
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
          return obj1;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj = { value, done: true };
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
              if (null != closure_2_19[id]) {
                let _clearTimeout = clearTimeout;
                clearTimeout(tmp5[id]);
              }
              const _Math = Math;
              const _Math2 = Math;
              let _setTimeout = setTimeout;
              closure_2_19[id] = setTimeout(() => {
                delete tmp3[tmp2];
                let obj = closure_2_0(13668);
                if (obj.isChannelMetadataObfuscationEnabled("triggerGuildChannelResync")) {
                  let str;
                  if (closure_2_17[tmp6] != null) {
                    str = tmp9.requestId;
                  }
                  if (str == null) {
                    str = "unknown";
                  }
                  if (null == guild.getGuild(tmp6)) {
                    obj = { guild_id: tmp6, request_id: str, failure_reason: "guild_not_found" };
                    closure_2_1(1242).track(constants.GUILD_CHANNEL_RESYNC_FAILED, obj);
                    if (null != dependencyMap2[tmp6]) {
                      let _clearTimeout2 = clearTimeout;
                      clearTimeout(tmp31[tmp6]);
                      delete tmp4[tmp2];
                    }
                    if (null != tmp5[tmp6]) {
                      const _clearTimeout3 = clearTimeout;
                      clearTimeout(tmp5[tmp6]);
                      delete tmp3[tmp2];
                    }
                    const obj5 = closure_2_1(1242);
                  } else {
                    const items = [];
                    mutableGuildChannelsForGuild = mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(tmp6);
                    let num2 = 0;
                    let num = 0;
                    const keys = Object.keys();
                    if (keys !== undefined) {
                      num = num2;
                      while (keys[tmp] !== undefined) {
                        let obj7 = closure_2_0(1384);
                        if (obj7.hasFlag(mutableGuildChannelsForGuild[tmp13].flags, constants2.OBFUSCATED)) {
                          let arr = items.push(tmp13);
                        }
                        num2 = num2 + 1;
                        continue;
                      }
                    }
                    obj = { guild_id: tmp6, request_id: str, num_obfuscated_channels: items.length, num_total_channels: num };
                    closure_2_1(1242).track(constants.GUILD_CHANNEL_RESYNC_EXECUTED, obj);
                    socket = socket.getSocket();
                    const result = socket.triggerGuildChannelResync(tmp6, items);
                    const guild_id = tmp6;
                    if (null != dependencyMap2[tmp6]) {
                      let _clearTimeout = clearTimeout;
                      clearTimeout(tmp21[tmp6]);
                    }
                    const _setTimeout = setTimeout;
                    dependencyMap2[tmp6] = setTimeout(() => {
                      logger.warn("Resync timeout for guild " + guild_id + " with request " + str);
                      closure_2_1(dependencyMap[11]);
                      const obj = { guild_id, request_id: str, failure_reason: "timeout" };
                      obj.track(constants.GUILD_CHANNEL_RESYNC_FAILED, obj);
                      if (null != dependencyMap2[guild_id]) {
                        const _clearTimeout = clearTimeout;
                        clearTimeout(tmp7[tmp4]);
                        delete tmp3[tmp2];
                      }
                      if (null != closure_2_19[guild_id]) {
                        const _clearTimeout2 = clearTimeout;
                        clearTimeout(tmp9[tmp4]);
                        delete tmp[tmp2];
                      }
                    }, closure_2_15);
                    closure_2_32(tmp6);
                    const obj2 = closure_2_1(1242);
                  }
                }
              }, Math.ceil(Math.random() * closure_2_12));
            }
          });
          if (closure_129_2.ineligible.length > 0) {
            const ineligible = closure_129_2.ineligible;
            closure_129_3 = ineligible.map((id) => id.id);
            const _JSON2 = JSON;
            const _HermesInternal2 = HermesInternal;
            closure_130_11.verbose("Guilds we are no longer part of are marked for resync. Unmarking them. Guilds: " + JSON.stringify(closure_129_3));
            let obj2 = { type: "UNMARK_RESYNC_GUILDS", guildIds: closure_129_3 };
            closure_130_1(closure_130_2[12]).dispatch(obj2);
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
  }, { eligible: [], ineligible: [] });
};
function scheduleIntegrityCheck(guild_id) {
  _require = guild_id;
  let obj = require("PrivateChannelHidingExperiment");
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
      const v4Result = require("v1").v4();
      obj = { guildId: guild_id, requestId: v4Result, source: "integrity_check", requestedUserId: AuthenticationStore.getId() };
      tmp14[guild_id] = obj;
      requestId = v4Result;
      const tmp4Result = require("v1");
    }
    if (!tmp8) {
      obj = { guild_id, request_id: requestId };
      AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_REQUESTED, obj);
    }
    const _Math = Math;
    const _Math2 = Math;
    let _setTimeout = setTimeout;
    dependencyMap2[guild_id] = setTimeout(() => {
      delete tmp2[tmp];
      let obj = PrivateChannelHidingExperiment;
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
            obj = { guild_id: tmp5, request_id: str, failure_reason: "guild_not_found" };
            AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED, obj);
            if (null != dependencyMap[tmp5]) {
              let _clearTimeout2 = clearTimeout;
              clearTimeout(tmp19[tmp5]);
              delete tmp3[tmp];
            }
            if (null != tmp4[tmp5]) {
              const _clearTimeout3 = clearTimeout;
              clearTimeout(tmp4[tmp5]);
              delete tmp2[tmp];
            }
          } else {
            obj = { guild_id: tmp5, request_id: str };
            AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_EXECUTED, obj);
            const socket = GatewayConnectionStore.getSocket();
            const result = socket.triggerGuildChannelResync(tmp5, null);
            guild_id = tmp5;
            if (null != dependencyMap[tmp5]) {
              let _clearTimeout = clearTimeout;
              clearTimeout(tmp29[tmp5]);
            }
            const _setTimeout = setTimeout;
            dependencyMap[tmp5] = setTimeout(() => {
              logger.warn("Integrity check timeout for guild " + guild_id + " with request " + str);
              require("AnalyticsUtils");
              const obj = { guild_id, request_id: str, failure_reason: "timeout" };
              obj.track(constants.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED, obj);
              if (null != dependencyMap[guild_id]) {
                const _clearTimeout = clearTimeout;
                clearTimeout(tmp7[tmp4]);
                delete tmp3[tmp2];
              }
              if (null != dependencyMap2[guild_id]) {
                const _clearTimeout2 = clearTimeout;
                clearTimeout(tmp9[tmp4]);
                delete tmp[tmp2];
              }
            }, closure_16);
          }
        }
      }
    }, closure_13 + Math.ceil(Math.random() * closure_14));
    tmp8 = null != dependencyMap2[guild_id];
  }
}
const AnalyticEvents = fn(1074).AnalyticEvents;
const ChannelFlags = fn(1964).ChannelFlags;
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