// === Module 19614: ChannelResyncManager ===

// Module 19614 (ChannelResyncManager)
import LoggerDefault from "Logger" /* 3 */;
import DurationsDefault from "Durations" /* 1088 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1255 */;
import GuildsRequiringChannelSyncDefault from "GuildsRequiringChannelSync" /* 8273 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 4861 */;
import GuildAvailabilityStore from "GuildAvailabilityStore" /* 6135 */;
import GuildStore from "GuildStore" /* 4883 */;
import GatewayConnectionStore from "GatewayConnectionStore" /* 5818 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7444 */;

const require = fn;
function handleGuildCreate(guild) {
  guild = guild.guild;
  closure_1 = undefined;
  if (true !== guild.unavailable) {
    if (null != dependencyMap[guild.id]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(dependencyMap[guild.id]);
    }
    closure_1 = c18;
    const _setTimeout = setTimeout;
    dependencyMap[guild.id] = setTimeout(() => {
      delete tmp2[tmp];
      if (closure_1 === c18) {
        scheduleGuildResyncs(guild.id);
      }
    }, 0);
  }
}
function handlePostConnectionOpen() {
  scheduleGuildResyncs();
}
function handleChannelSync(integrity_check) {
  if (!integrity_check.integrity_check) {
    let str;
    if (closure_14[integrity_check.guild_id] != null) {
      str = tmp5.requestId;
    }
    if (str == null) {
      str = "unknown";
    }
    const obj2 = { guild_id: integrity_check.guild_id, request_id: str, num_new_channels: integrity_check.channels.length };
    AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_CHANNEL_RESYNC_COMPLETED, obj2);
    const guild_id = integrity_check.guild_id;
    if (null != closure_16[guild_id]) {
      const _clearTimeout = clearTimeout;
      clearTimeout(tmp11[guild_id]);
      delete tmp3[tmp2];
    }
    if (null != closure_15[guild_id]) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(tmp14[guild_id]);
      delete tmp[tmp2];
    }
  }
}
function handleLogout(isSwitchingAccount) {
  closure_18 = closure_18 + 1;
  items = [...Object.keys(closure_15), ...Object.keys(closure_16)];
  set = new Set(items);
  const item = set.forEach((guild_id) => {
    if (null != closure_14[guild_id]) {
      let tmp2 = tmp9;
      if (null == dependencyMap[guild_id]) {
        tmp2 = tmp11;
      }
      if (tmp2) {
        const obj3 = { guild_id, request_id: null, requested_user_id: null, cancellation_reason: null, had_scheduled_timer: null, had_pending_timeout: null };
        ({ requestId: obj2.request_id, requestedUserId } = tmp);
        if (requestedUserId == null) {
          requestedUserId = null;
        }
        obj3.requested_user_id = requestedUserId;
        obj3.cancellation_reason = str;
        obj3.had_scheduled_timer = tmp9;
        obj3.had_pending_timeout = tmp11;
        AnalyticsUtilsDefault.track(AnalyticEvents.GUILD_CHANNEL_RESYNC_CANCELED, obj3);
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
      delete tmp[tmp2];
    }
  });
  for (const key10036 in closure_17) {
    let _clearTimeout = clearTimeout;
    let clearTimeoutResult = clearTimeout(dependencyMap[key10036]);
    delete tmp2[tmp3];
    continue;
  }
  for (const key10039 in closure_14) {
    delete tmp[tmp2];
    continue;
  }
}
function scheduleGuildResyncs() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_24 = async function _scheduleGuildResyncs(arg0) {
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
                      const apply = closure_1_25.apply;
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
        if (closure_129_1 === closure_130_18) {
          const _JSON = JSON;
          const _HermesInternal = HermesInternal;
          closure_130_11.verbose("Resync guilds: " + JSON.stringify(closure_129_2));
          const eligible = closure_129_2.eligible;
          const item = eligible.forEach((id) => {
            if (!tmp2) {
              id = id.id;
              let obj = { guildId: id, requestId: id.requestId, requestedUserId: id.getId() };
              closure_2_14[id] = obj;
              if (null != dependencyMap[id]) {
                let _clearTimeout = clearTimeout;
                clearTimeout(dependencyMap[id]);
              }
              const _Math = Math;
              const _Math2 = Math;
              let _setTimeout = setTimeout;
              dependencyMap[id] = setTimeout(() => {
                delete tmp3[tmp2];
                let str;
                if (closure_2_14[id] != null) {
                  str = tmp7.requestId;
                }
                if (str == null) {
                  str = "unknown";
                }
                if (null == guild.getGuild(id)) {
                  let obj2 = { guild_id: id, request_id: str, failure_reason: "guild_not_found" };
                  closure_2_1(1255).track(constants.GUILD_CHANNEL_RESYNC_FAILED, obj2);
                  if (null != dependencyMap2[id]) {
                    let _clearTimeout2 = clearTimeout;
                    clearTimeout(tmp26[id]);
                    delete tmp4[tmp2];
                  }
                  if (null != dependencyMap[id]) {
                    const _clearTimeout3 = clearTimeout;
                    clearTimeout(dependencyMap[id]);
                    delete tmp3[tmp2];
                  }
                  const obj4 = closure_2_1(1255);
                } else {
                  items = [];
                  mutableGuildChannelsForGuild = mutableGuildChannelsForGuild.getMutableGuildChannelsForGuild(id);
                  let num2 = 0;
                  let num = 0;
                  const keys = Object.keys();
                  if (keys !== undefined) {
                    num = num2;
                    while (keys[tmp] !== undefined) {
                      let obj6 = closure_2_0(1404);
                      if (obj6.hasFlag(mutableGuildChannelsForGuild[tmp9].flags, constants2.OBFUSCATED)) {
                        let arr = items.push(tmp9);
                      }
                      num2 = num2 + 1;
                      continue;
                    }
                  }
                  const obj3 = { guild_id: id, request_id: str, num_obfuscated_channels: items.length, num_total_channels: num };
                  closure_2_1(1255).track(constants.GUILD_CHANNEL_RESYNC_EXECUTED, obj3);
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
                    if (null != closure_2_15[guild_id]) {
                      const _clearTimeout2 = clearTimeout;
                      clearTimeout(tmp9[guild_id]);
                      delete tmp[tmp2];
                    }
                    const obj = closure_2_1(dependencyMap[11]);
                    const obj2 = { guild_id, request_id: str, failure_reason: "timeout" };
                  }, closure_2_13);
                  let obj = closure_2_1(1255);
                }
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
            let obj6 = { type: "UNMARK_RESYNC_GUILDS", guildIds: closure_129_3 };
            closure_130_1(closure_130_2[12]).dispatch(obj6);
            const obj5 = closure_130_1(closure_130_2[12]);
          }
        }
        c4 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp9) {
      c4 = tmp;
      throw tmp9;
    }
  }
};
let closure_25 = async function _getResyncGuilds() {
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
const AnalyticEvents = fn(1071).AnalyticEvents;
const ChannelFlags = fn(4868).ChannelFlags;
let closure_11 = new LoggerDefault("ChannelResyncManager");
let closure_12 = 2 * DurationsDefault.Millis.SECOND;
let closure_13 = 30 * DurationsDefault.Millis.SECOND;
class ChannelResyncManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    obj = { GUILD_CREATE: handleGuildCreate, POST_CONNECTION_OPEN: handlePostConnectionOpen, CHANNEL_SYNC: handleChannelSync, LOGOUT: handleLogout };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
ChannelResyncManager.prototype["__unsafeGetTestState"] = function __unsafeGetTestState() {
  return { scheduledResyncTimerGuildIds: Object.keys(closure_15), pendingResyncTimeoutGuildIds: Object.keys(closure_16), pendingGuildCreateDeferredGuildIds: Object.keys(closure_17), guildIdsWithLatestRequest: Object.keys(closure_14), sessionEpoch };
};
let closure_14 = {};
let closure_15 = {};
let closure_16 = {};
let dependencyMap = {};
let c18 = 0;
const channelResyncManager = new ChannelResyncManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/gateway/ChannelResyncManager.tsx");

export default channelResyncManager;