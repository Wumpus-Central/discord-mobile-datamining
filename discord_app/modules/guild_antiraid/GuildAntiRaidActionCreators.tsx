// discord_app/modules/guild_antiraid/GuildAntiRaidActionCreators.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _modDef4153 from "../../../_runtime/metro/04153__.js";
import AppAnalyticsUtils from "../app_analytics/AppAnalyticsUtils.tsx";
import GuildSettingsActionCreatorsDefault from "../guild_settings/GuildSettingsActionCreators.tsx";
import getGuildSafetyAlertsChannelIdDefault from "getGuildSafetyAlertsChannelId.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import GuildStore from "../../stores/GuildStore.tsx";

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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            let obj1 = features;
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
              obj1 = { features: saveGuildResult };
              saveGuildResult = saveGuild(obj1.id, obj1, { throwErr: true });
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
          obj = { value, done: true };
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
    const obj2 = _modDef4153();
    toISOStringResult = obj2.add(tmp8, "hours").toISOString();
    obj2.add(tmp8, "hours");
  }
  let tmp12 = null;
  if (closure_1) {
    tmp12 = toISOStringResult;
  }
  const obj1 = { invites_disabled_until: tmp12, dms_disabled_until: null, lockdown_duration_hours: null };
  let tmp13 = null;
  if (closure_2) {
    tmp13 = toISOStringResult;
  }
  obj1.dms_disabled_until = tmp13;
  let tmp14 = null;
  if (tmp5) {
    tmp14 = tmp8;
  }
  obj1.lockdown_duration_hours = tmp14;
  const HTTP = HTTPUtils.HTTP;
  const request = {
    url: React5.GUILD_INCIDENT_ACTIONS(closure_0),
    body: obj1,
    rejectWithError: HTTPUtils.rejectWithMigratedError(),
  };
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
        let obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            guild = guild.getGuild(closure_0);
            let tmp8 = null;
            if (null != guild) {
              tmp8 = getGuildSafetyAlertsChannelIdDefault(guild);
            }
            let tmp5 = null;
            if (null != tmp8) {
              const HTTP = HTTPUtils.HTTP;
              const request = {
                url: closure_2_7.GUILD_INCIDENT_REPORT_FALSE_ALARM(closure_0),
                body: null,
                rejectWithError: null,
              };
              const obj1 = { alert_message_id, reason };
              request.body = obj1;
              let obj3 = HTTPUtils;
              request.rejectWithError = obj3.rejectWithMigratedError();
              c4 = 1;
              c3 = 1;
              const obj2 = { value: HTTP.post(request), done: false };
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else {
          tmp5 = value;
          if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          }
        }
        c3 = 3;
        obj3 = { value: tmp5, done: true };
        return obj3;
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
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          guild = guild.getGuild(closure_0);
          let tmp8 = null;
          if (null != guild) {
            tmp8 = getGuildSafetyAlertsChannelIdDefault(guild);
          }
          let tmp5 = null;
          if (null != tmp8) {
            const HTTP = HTTPUtils.HTTP;
            const obj1 = { url: React5.GUILD_INCIDENT_REPORT_RAID(closure_0), rejectWithError: null };
            let obj2 = HTTPUtils;
            obj1.rejectWithError = obj2.rejectWithMigratedError();
            c2 = 1;
            c1 = 1;
            obj2 = { value: HTTP.post(obj1), done: false };
            return obj2;
          }
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else {
        tmp5 = value;
        if (arg0 === 2) {
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
      }
      c1 = 3;
      const obj3 = { value: tmp5, done: true };
      return obj3;
    } catch (tmp12) {
      c1 = tmp;
      throw tmp12;
    }
  }
};
const DEFAULT_LOCKDOWN_DURATION = fn(8016).DEFAULT_LOCKDOWN_DURATION;
const Constants = fn(1074);
({ AnalyticEvents: metroRequire, Endpoints: closure_7, GuildFeatures: closure_8 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidActionCreators.tsx");

export const trackReportRaidViewed = function trackReportRaidViewed(onChange) {
  let items = onSubmit;
  if (onSubmit === undefined) {
    items = [];
  }
  if (0 !== items.length) {
    const obj = {};
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(onChange));
    obj.guild_id = onChange;
    obj.raid_types = items;
    obj.track(constants.GUILD_RAID_REPORTED, obj);
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
