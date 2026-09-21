// === Module 12085: GuildAntiRaidActionCreators ===

// Module 12085 (GuildAntiRaidActionCreators)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import HTTPUtils from "HTTPUtils" /* 1271 */;
import _modDef4348 from "module_4348" /* 4348 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4936 */;
import GuildSettingsActionCreatorsDefault from "GuildSettingsActionCreators" /* 9855 */;
import getGuildSafetyAlertsChannelIdDefault from "getGuildSafetyAlertsChannelId" /* 10358 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import GuildStore from "GuildStore" /* 2063 */;

require = fn;
let closure_9 = async function _setGuildRaidAlerts(arg0, arg1) {
  let features = arg0;
  closure_1 = arg1;
  c3 = 0;
  c2 = 0;
  return (async (arg0, value) => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let obj4 = features;
            const _Set = Set;
            const set = new Set(features.features);
            let saveGuildResult = set;
            let saveGuild = constants;
            if (set.has(constants.COMMUNITY)) {
              if (closure_1) {
                saveGuildResult.delete(saveGuild.RAID_ALERTS_DISABLED);
              } else {
                saveGuildResult.add(saveGuild.RAID_ALERTS_DISABLED);
              }
              saveGuild = GuildSettingsActionCreatorsDefault.saveGuild;
              obj4 = { features: saveGuildResult };
              saveGuildResult = saveGuild(obj4.id, obj4, { throwErr: true });
              c3 = 1;
              c2 = 1;
            } else if (!closure_1) {
              saveGuildResult.delete(saveGuild.NON_COMMUNITY_RAID_ALERTS);
            }
            saveGuildResult.add(saveGuild.NON_COMMUNITY_RAID_ALERTS);
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c2 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp12) {
        c2 = tmp;
        throw tmp12;
      }
    }
  })();
};
let closure_10 = async function _setGuildIncidentActions() {
  let tmp5 = closure_1;
  if (!closure_1) {
    tmp5 = closure_2;
  }
  closure_4 = closure_3;
  if (closure_3 == null) {
    closure_4 = DEFAULT_LOCKDOWN_DURATION;
  }
  let toISOStringResult = null;
  if (tmp5) {
    _modDef4348();
    toISOStringResult = _modDef4348().add(tmp8, "hours").toISOString();
    _modDef4348().add(tmp8, "hours");
  }
  let tmp12 = null;
  if (closure_1) {
    tmp12 = toISOStringResult;
  }
  const obj5 = { invites_disabled_until: tmp12, dms_disabled_until: null, lockdown_duration_hours: null };
  let tmp13 = null;
  if (closure_2) {
    tmp13 = toISOStringResult;
  }
  obj5.dms_disabled_until = tmp13;
  let tmp14 = null;
  if (tmp5) {
    tmp14 = tmp8;
  }
  obj5.lockdown_duration_hours = tmp14;
  const HTTP = HTTPUtils.HTTP;
  const request = { url: React5.GUILD_INCIDENT_ACTIONS(closure_0), body: obj5, rejectWithError: HTTPUtils.rejectWithMigratedError() };
  await HTTP.put(request);
  return value;
};
let closure_11 = async function _handleResolveRaid(arg0) {
  closure_0 = arg0;
  c4 = 0;
  c3 = 0;
  return (async (arg0, value, arg2) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            guild = guild.getGuild(closure_0);
            let tmp8 = null;
            if (null != guild) {
              tmp8 = getGuildSafetyAlertsChannelIdDefault(guild);
            }
            let tmp5 = null;
            if (null != tmp8) {
              const HTTP = HTTPUtils.HTTP;
              const request = { url: closure_2_7.GUILD_INCIDENT_REPORT_FALSE_ALARM(closure_0), body: null, rejectWithError: null };
              const obj5 = { alert_message_id, reason };
              request.body = obj5;
              request.rejectWithError = HTTPUtils.rejectWithMigratedError();
              c4 = 1;
              c3 = 1;
              const obj6 = { value: HTTP.post(request), done: false };
              return obj6;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else {
          tmp5 = value;
          if (arg0 === 2) {
            c3 = 3;
            const obj = { value, done: true };
            return obj;
          }
        }
        c3 = 3;
        const obj7 = { value: tmp5, done: true };
        return obj7;
      } catch (tmp12) {
        c3 = tmp;
        throw tmp12;
      }
    }
  })();
};
let closure_12 = async function _handleReportRaid(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          guild = guild.getGuild(closure_0);
          let tmp8 = null;
          if (null != guild) {
            tmp8 = getGuildSafetyAlertsChannelIdDefault(guild);
          }
          let tmp5 = null;
          if (null != tmp8) {
            const HTTP = HTTPUtils.HTTP;
            const obj5 = { url: React5.GUILD_INCIDENT_REPORT_RAID(closure_0), rejectWithError: HTTPUtils.rejectWithMigratedError() };
            c2 = 1;
            c1 = 1;
            const obj6 = { value: HTTP.post(obj5), done: false };
            return obj6;
          }
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else {
        tmp5 = value;
        if (arg0 === 2) {
          c1 = 3;
          const obj = { value, done: true };
          return obj;
        }
      }
      c1 = 3;
      const obj7 = { value: tmp5, done: true };
      return obj7;
    } catch (tmp12) {
      c1 = tmp;
      throw tmp12;
    }
  }
};
const DEFAULT_LOCKDOWN_DURATION = fn(8274).DEFAULT_LOCKDOWN_DURATION;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Endpoints: closure_7, GuildFeatures: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidActionCreators.tsx");

export const trackReportRaidViewed = function trackReportRaidViewed(guildId, arg1) {
  let items = arg1;
  if (arg1 === undefined) {
    items = [];
  }
  if (0 !== items.length) {
    const obj2 = {};
    const obj = AnalyticsUtilsDefault;
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj2.guild_id = guildId;
    obj2.raid_types = items;
    obj.track(constants.GUILD_RAID_REPORTED, obj2);
  }
};
export const setGuildRaidAlerts = function setGuildRaidAlerts() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setGuildIncidentActions = function setGuildIncidentActions() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const handleResolveRaid = function handleResolveRaid() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const handleReportRaid = function handleReportRaid() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};