// === Module 17474: ChannelResyncManager ===

// Module 17474 (ChannelResyncManager)
import LoggerDefault from "Logger" /* 3 */;
import Constants from "Constants" /* 1085 */;
import DurationsDefault from "Durations" /* 1102 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import GuildsRequiringChannelSyncDefault from "GuildsRequiringChannelSync" /* 7136 */;
import PrivateChannelHidingExperiment from "PrivateChannelHidingExperiment" /* 13479 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 5618 */;
import GuildStore from "GuildStore" /* 2074 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5436 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c1, c2, c3, c4, closure_24;

function handleGuildCreate(guild) {
  guild = guild.guild;
  let closure_1;
  if (true !== guild.unavailable) {
    if (null != closure_23[guild.id]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_23[guild.id]);
    }
    closure_1 = c24;
    const _setTimeout = setTimeout;
    closure_23[guild.id] = setTimeout(() => {
      delete closure_23[guild.id];
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
  let closure_0;
  let items;
  guild_id = guild_id.guild_id;
  if (guild_id.integrity_check) {
    let verbose;
    const channels = guild_id.channels;
    let mutableGuildChannelsForGuild;
    set = undefined;
    items = undefined;
    let str2;
    if (closure_17[guild_id] != null) {
      str2 = tmp17.requestId;
    }
    if (str2 == null) {
      str2 = "unknown";
    }
    mutableGuildChannelsForGuild = ChannelStore.getMutableGuildChannelsForGuild(guild_id);
    const _Set = Set;
    const self = this;
    const self2 = this;
    set = new Set();
    items = [];
    const item = channels.forEach((flags) => {
      let num2;
      let num3;
      let parent_id;
      if (null != closure_0[flags.id]) {
        let num = flags.flags;
        const hasFlag = FlagUtils.hasFlag;
        FlagUtils;
        if (num == null) {
          num = 0;
        }
        const hasFlagResult = hasFlag(num, ChannelFlags.OBFUSCATED);
        const tmp5Result = FlagUtils;
        const hasFlagResult1 = tmp5Result.hasFlag(closure_0[flags.id].flags, ChannelFlags.OBFUSCATED);
        if (hasFlagResult !== hasFlagResult1) {
          const _HermesInternal2 = HermesInternal;
          logger.warn("Integrity check failure: " + flags.id + " serverObfuscated: " + hasFlagResult + " != clientObfuscated: " + hasFlagResult1);
          set.add(flags.id);
          obj = { channel_id: flags.id, server_obfuscated: hasFlagResult, client_obfuscated: hasFlagResult1, server_flags: num2, client_flags: num3, channel_type: null, parent_id };
          num2 = flags.flags;
          const push = items.push;
          if (num2 == null) {
            num2 = 0;
          }
          num3 = tmp.flags;
          if (num3 == null) {
            num3 = 0;
          }
          ({ type: obj2.channel_type, parent_id } = flags);
          if (parent_id == null) {
            parent_id = null;
          }
          push(obj);
        }
      } else {
        const _HermesInternal = HermesInternal;
        logger.warn("Integrity check failure: " + flags.id + " was missing.");
      }
    });
    const _Array = Array;
    const arr = Array.from(set);
    const joined = arr.join(", ");
    let num2 = 0;
    let json = null;
    if (items.length > 0) {
      const _JSON = JSON;
      json = JSON.stringify(items);
    }
    if (set.size > 0) {
      verbose = logger.warn;
    } else {
      verbose = logger.verbose;
    }
    let _HermesInternal = HermesInternal;
    verbose("Integrity check for guild " + guild_id + " completed. Discrepancies found: " + joined);
    const obj2 = { guild_id, request_id: str2, num_channels_received: channels.length, num_discrepancies_found: set.size, discrepancy_channel_ids: joined, discrepancies_details: json };
    const obj4 = set(items[11]);
    obj4.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_COMPLETED, obj2);
    if (null != closure_22[guild_id]) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(closure_22[guild_id]);
      delete closure_22[guild_id];
    }
    if (null != closure_21[guild_id]) {
      const _clearTimeout4 = clearTimeout;
      clearTimeout(closure_21[guild_id]);
      delete closure_21[guild_id];
    }
    set.add(guild_id);
  } else {
    let str;
    if (closure_17[guild_id] != null) {
      str = tmp2.requestId;
    }
    if (str == null) {
      str = "unknown";
    }
    obj = set(items[11]);
    const obj3 = { guild_id: guild_id.guild_id, request_id: str, num_new_channels: guild_id.channels.length };
    obj.track(AnalyticEvents.GUILD_CHANNEL_RESYNC_COMPLETED, obj3);
    const guild_id2 = guild_id.guild_id;
    if (null != closure_20[guild_id2]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_20[guild_id2]);
      delete closure_20[guild_id2];
    }
    if (null != closure_19[guild_id2]) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(closure_19[guild_id2]);
      delete closure_19[guild_id2];
    }
    let num = 0;
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
    let requestedUserId;
    let requestedUserId2;
    if (null != closure_17[guild_id]) {
      const tmp2 = null != closure_19[guild_id] || null != closure_20[guild_id];
      if (tmp2) {
        obj = { guild_id, request_id: null, requested_user_id: requestedUserId, cancellation_reason: str, had_scheduled_timer: null != closure_19[guild_id], had_pending_timeout: null != closure_20[guild_id] };
        ({ requestId: obj.request_id, requestedUserId } = closure_17[guild_id]);
        const track = AnalyticsUtilsDefault.track;
        const GUILD_CHANNEL_RESYNC_CANCELED = AnalyticEvents.GUILD_CHANNEL_RESYNC_CANCELED;
        AnalyticsUtilsDefault;
        if (requestedUserId == null) {
          requestedUserId = null;
        }
        track(GUILD_CHANNEL_RESYNC_CANCELED, obj);
      }
      const tmp13 = null != closure_21[guild_id] || null != closure_22[guild_id];
      if (tmp13) {
        const obj3 = { guild_id, request_id: null, requested_user_id: requestedUserId2, cancellation_reason: str, had_scheduled_timer: null != closure_21[guild_id], had_pending_timeout: null != closure_22[guild_id] };
        ({ requestId: obj2.request_id, requestedUserId: requestedUserId2 } = closure_17[guild_id]);
        const track2 = AnalyticsUtilsDefault.track;
        const GUILD_CHANNEL_INTEGRITY_CHECK_CANCELED = AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_CANCELED;
        AnalyticsUtilsDefault;
        if (requestedUserId2 == null) {
          requestedUserId2 = null;
        }
        track2(GUILD_CHANNEL_INTEGRITY_CHECK_CANCELED, obj3);
      }
    }
  });
  const item1 = set.forEach((item) => {
    if (null != closure_1_20[item]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_1_20[item]);
      delete closure_1_20[item];
    }
    if (null != closure_1_19[item]) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(closure_1_19[item]);
      delete closure_1_19[item];
    }
    if (null != closure_1_22[item]) {
      const _clearTimeout3 = clearTimeout;
      clearTimeout(closure_1_22[item]);
      delete closure_1_22[item];
    }
    if (null != closure_1_21[item]) {
      const _clearTimeout4 = clearTimeout;
      clearTimeout(closure_1_21[item]);
      delete closure_1_21[item];
    }
  });
  for (const key10048 in closure_23) {
    let _clearTimeout = clearTimeout;
    let clearTimeoutResult = clearTimeout(closure_23[key10048]);
    delete closure_23[key10048];
    continue;
  }
  for (const key10051 in closure_17) {
    delete closure_17[key10051];
    continue;
  }
  set.clear();
}
function scheduleGuildResyncs() {
  return obj(...arguments);
}
let obj = function _scheduleGuildResyncs() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_2;
    function getResyncGuilds() {
      return closure_1_31(...arguments);
    }
    if (c4 === 2) {
      c4 = 3;
      let str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else {
      const tmp10 = arg0;
      if (tmp4 === 3) {
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
          let tmp;
          let guildIds;
          let closure_1;
          let num = 2;
          c4 = 2;
          let num2 = 0;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              guildIds = undefined;
              closure_1 = sessionEpoch;
              c3 = 1;
              c4 = 1;
              let obj4 = { value: getResyncGuilds(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            tmp = value;
            if (closure_1 === closure_130_24) {
              const _JSON = JSON;
              const _HermesInternal = HermesInternal;
              closure_130_11.verbose("Resync guilds: " + JSON.stringify(tmp));
              const eligible = tmp.eligible;
              const item = eligible.forEach((id) => {
                let constants2;
                let guild;
                const tmp2 = null != closure_1_0 && id.id !== tmp;
                if (!tmp2) {
                  id = id.id;
                  obj = { guildId: id, requestId: id.requestId, source: "resync", requestedUserId: id.getId() };
                  closure_2_17[id] = obj;
                  if (null != closure_2_19[id]) {
                    const tmp6 = globalThis;
                    let _clearTimeout = clearTimeout;
                    const clearTimeoutResult = clearTimeout(closure_2_19[id]);
                  }
                  const _Math = Math;
                  const _Math2 = Math;
                  let _setTimeout = setTimeout;
                  closure_2_19[id] = setTimeout(() => {
                    let logger;
                    delete closure_2_19[id];
                    obj = closure_2_0(closure_2_2[14]);
                    if (obj.isChannelMetadataObfuscationEnabled("triggerGuildChannelResync")) {
                      let str;
                      if (closure_2_17[id] != null) {
                        str = tmp6.requestId;
                      }
                      if (str == null) {
                        str = "unknown";
                      }
                      if (null == guild.getGuild(id)) {
                        const obj3 = { guild_id: id, request_id: str, failure_reason: "guild_not_found" };
                        const obj5 = closure_2_1(closure_2_2[11]);
                        obj5.track(constants.GUILD_CHANNEL_RESYNC_FAILED, obj3);
                        if (null != closure_2_20[id]) {
                          let _clearTimeout2 = clearTimeout;
                          clearTimeout(closure_2_20[id]);
                          delete closure_2_20[id];
                        }
                        if (null != closure_2_19[id]) {
                          const _clearTimeout3 = clearTimeout;
                          clearTimeout(closure_2_19[id]);
                          delete closure_2_19[id];
                        }
                      } else {
                        const items = [];
                        mutableGuildChannelsForGuild = mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(id);
                        let num2 = 0;
                        let num = 0;
                        const keys = Object.keys();
                        if (keys !== undefined) {
                          num = num2;
                          while (keys[tmp] !== undefined) {
                            let tmp38 = mutableGuildChannelsForGuild[tmp10];
                            let obj7 = closure_2_0(closure_2_2[15]);
                            if (obj7.hasFlag(tmp38.flags, constants2.OBFUSCATED)) {
                              let arr = items.push(tmp10);
                            }
                            num2 = num2 + 1;
                            continue;
                          }
                        }
                        let obj2 = closure_2_1(closure_2_2[11]);
                        const obj4 = { guild_id: id, request_id: str, num_obfuscated_channels: items.length, num_total_channels: num };
                        obj2.track(constants.GUILD_CHANNEL_RESYNC_EXECUTED, obj4);
                        socket = socket.getSocket();
                        const result = socket.triggerGuildChannelResync(id, items);
                        closure_0 = id;
                        if (null != closure_2_20[id]) {
                          let _clearTimeout = clearTimeout;
                          clearTimeout(closure_2_20[id]);
                        }
                        const _setTimeout = setTimeout;
                        closure_2_20[id] = setTimeout(() => {
                          logger.warn("Resync timeout for guild " + guild_id + " with request " + str);
                          obj = closure_2_1(closure_2_2[11]);
                          const obj2 = { guild_id, request_id: str, failure_reason: "timeout" };
                          obj.track(constants.GUILD_CHANNEL_RESYNC_FAILED, obj2);
                          if (null != closure_2_20[guild_id]) {
                            const _clearTimeout = clearTimeout;
                            clearTimeout(closure_2_20[guild_id]);
                            delete closure_2_20[guild_id];
                          }
                          if (null != closure_2_19[guild_id]) {
                            const _clearTimeout2 = clearTimeout;
                            clearTimeout(closure_2_19[guild_id]);
                            delete closure_2_19[guild_id];
                          }
                        }, closure_2_15);
                        closure_2_32(id);
                      }
                    }
                  }, Math.ceil(Math.random() * closure_2_12));
                }
              });
              if (tmp.ineligible.length > 0) {
                const ineligible = tmp.ineligible;
                guildIds = ineligible.map((id) => id.id);
                const _JSON2 = JSON;
                const _HermesInternal2 = HermesInternal;
                closure_130_11.verbose("Guilds we are no longer part of are marked for resync. Unmarking them. Guilds: " + JSON.stringify(guildIds));
                let obj5 = closure_130_1(closure_130_2[12]);
                const obj6 = { type: "UNMARK_RESYNC_GUILDS", guildIds };
                obj5.dispatch(obj6);
              }
            }
            c4 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp8) {
          c4 = 3;
          throw tmp8;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _getResyncGuilds() {
  obj = _asyncToGenerator(async () => {
    let obj4;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp3;
            c1 = 1;
            c2 = 1;
            const obj5 = { value: obj4.getAll(), done: false };
            obj4 = GuildsRequiringChannelSyncDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          obj = { eligible: [], ineligible: [] };
          c2 = 3;
          const obj7 = {
            value: value.reduce((ineligible, id) => {
                    if (null == guild.getGuild(id.id)) {
                      if (!unavailable.isUnavailable(id.id)) {
                        ineligible = ineligible.ineligible;
                        ineligible.push(id);
                      }
                      return ineligible;
                    }
                    const eligible = ineligible.eligible;
                    eligible.push(id);
                  }, obj),
            done: true
          };
          return obj7;
        }
      } catch (tmp7) {
        c2 = 3;
        throw tmp7;
      }
    }
  });
  return obj(...arguments);
};
function scheduleIntegrityCheck(guild_id) {
  _require = guild_id;
  const tmp2 = _require;
  obj = require("PrivateChannelHidingExperiment");
  if (obj.isChannelMetadataIntegrityCheckEnabled("scheduleIntegrityCheck")) {
    let requestId;
    const tmp6 = null != closure_21[guild_id];
    if (null != closure_22[guild_id]) {
      let _clearTimeout = clearTimeout;
      const clearTimeoutResult = clearTimeout(closure_22[guild_id]);
      delete closure_22[guild_id];
    }
    if (null != closure_21[guild_id]) {
      let _clearTimeout2 = clearTimeout;
      const clearTimeoutResult1 = clearTimeout(closure_21[guild_id]);
      delete closure_21[guild_id];
    }
    if (null != closure_17[guild_id]) {
      requestId = tmp13.requestId;
    } else {
      const tmp2Result = tmp2(1266);
      const v4Result = tmp2Result.v4();
      let obj2 = { guildId: guild_id, requestId: v4Result, source: "integrity_check", requestedUserId: AuthenticationStore.getId() };
      tmp12[guild_id] = obj2;
      requestId = v4Result;
    }
    if (!tmp6) {
      let obj4 = AnalyticsUtilsDefault;
      let obj3 = { guild_id, request_id: requestId };
      const trackResult = obj4.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_REQUESTED, obj3);
    }
    const _Math = Math;
    const _Math2 = Math;
    let _setTimeout = setTimeout;
    closure_21[guild_id] = setTimeout(() => {
      let logger;
      delete closure_21[guild_id];
      obj = PrivateChannelHidingExperiment;
      if (obj.isChannelMetadataIntegrityCheckEnabled("triggerIntegrityCheck")) {
        if (!set.has(guild_id)) {
          let str;
          if (closure_17[guild_id] != null) {
            str = tmp6.requestId;
          }
          if (str == null) {
            str = "unknown";
          }
          if (null == GuildStore.getGuild(guild_id)) {
            let obj2 = AnalyticsUtilsDefault;
            const obj3 = { guild_id, request_id: str, failure_reason: "guild_not_found" };
            obj2.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED, obj3);
            if (null != closure_22[guild_id]) {
              let _clearTimeout2 = clearTimeout;
              clearTimeout(closure_22[tmp2]);
              delete closure_22[guild_id];
            }
            if (null != closure_21[guild_id]) {
              const _clearTimeout3 = clearTimeout;
              clearTimeout(closure_21[tmp2]);
              delete closure_21[guild_id];
            }
          } else {
            const obj5 = { guild_id, request_id: str };
            const obj4 = AnalyticsUtilsDefault;
            obj4.track(AnalyticEvents.GUILD_CHANNEL_INTEGRITY_CHECK_EXECUTED, obj5);
            const socket = GatewayConnectionStore.getSocket();
            const result = socket.triggerGuildChannelResync(tmp2, null);
            guild_id = tmp2;
            if (null != closure_22[guild_id]) {
              let _clearTimeout = clearTimeout;
              clearTimeout(closure_22[guild_id]);
            }
            const _setTimeout = setTimeout;
            closure_22[guild_id] = setTimeout(() => {
              logger.warn("Integrity check timeout for guild " + guild_id + " with request " + str);
              obj = closure_2_1(closure_2_2[11]);
              const obj2 = { guild_id, request_id: str, failure_reason: "timeout" };
              obj.track(constants.GUILD_CHANNEL_INTEGRITY_CHECK_FAILED, obj2);
              if (null != closure_2_22[guild_id]) {
                const _clearTimeout = clearTimeout;
                clearTimeout(closure_2_22[guild_id]);
                delete closure_2_22[guild_id];
              }
              if (null != closure_2_21[guild_id]) {
                const _clearTimeout2 = clearTimeout;
                clearTimeout(closure_2_21[guild_id]);
                delete closure_2_21[guild_id];
              }
            }, closure_16);
          }
        }
      }
    }, closure_13 + Math.ceil(Math.random() * closure_14));
  }
}
const AnalyticEvents = Constants.AnalyticEvents;
const ChannelFlags = ChannelConstants.ChannelFlags;
let tmp2 = new LoggerDefault("ChannelResyncManager");
let closure_11 = tmp2;
let closure_12 = 2 * DurationsDefault.Millis.SECOND;
let closure_13 = 30 * DurationsDefault.Millis.SECOND;
let closure_14 = 300 * DurationsDefault.Millis.SECOND;
let closure_15 = 30 * DurationsDefault.Millis.SECOND;
let closure_16 = 60 * DurationsDefault.Millis.SECOND;
class ChannelResyncManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    obj = { GUILD_CREATE: handleGuildCreate, POST_CONNECTION_OPEN: handlePostConnectionOpen, CHANNEL_SYNC: handleChannelSync, LOGOUT: handleLogout };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
  __unsafeGetTestState() {
    obj = { scheduledResyncTimerGuildIds: Object.keys(closure_19), pendingResyncTimeoutGuildIds: Object.keys(closure_20), scheduledIntegrityCheckTimerGuildIds: Object.keys(closure_21), pendingIntegrityCheckTimeoutGuildIds: Object.keys(closure_22), pendingGuildCreateDeferredGuildIds: Object.keys(closure_23), guildIdsWithLatestRequest: Object.keys(closure_17), guildsCompletedIntegrityCheck: Array.from(set), sessionEpoch };
    return obj;
  }
}
const prototype = ChannelResyncManager.prototype;
let closure_17 = {};
let set = new Set();
let closure_19 = {};
let closure_20 = {};
let closure_21 = {};
let closure_22 = {};
let closure_23 = {};
let c24 = 0;
const channelResyncManager = new ChannelResyncManager();
let result = size.fileFinishedImporting("modules/gateway/ChannelResyncManager.tsx");

export default channelResyncManager;