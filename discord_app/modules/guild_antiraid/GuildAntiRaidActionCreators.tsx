// discord_app/modules/guild_antiraid/GuildAntiRaidActionCreators.tsx
import expandEventPropertiesDefault from "../../utils/AnalyticsUtils.tsx";
import collectGuildAnalyticsMetadata from "../app_analytics/AppAnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import createGuildRecordFromRust from "../../stores/GuildStore.tsx";
import { DEFAULT_LOCKDOWN_DURATION } from "GuildAntiRaidConstants.tsx";
import ME from "../../Constants.tsx";

require = fn;
function _setGuildRaidAlerts() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      if (table === 2) {
        table = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
        try {
          table = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              table = 3;
              throw arg1;
            } else if (arg0 === 2) {
              table = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              obj1 = features;
              const _Set = Set;
              const set = new Set(features.features);
              let saveGuildResult = set;
              let saveGuild = closure_1_8;
              if (set.has(closure_1_8.COMMUNITY)) {
                if (callback) {
                  saveGuildResult.delete(saveGuild.RAID_ALERTS_DISABLED);
                } else {
                  saveGuildResult.add(saveGuild.RAID_ALERTS_DISABLED);
                }
                saveGuild = callback(table[6]).saveGuild;
                obj1 = { features: null };
                obj1[0] = saveGuildResult;
                saveGuildResult = saveGuild(obj1.id, obj1, { throwErr: true });
                c3 = 1;
                table = 1;
                const tmp11 = callback(table[6]);
              } else if (!callback) {
                saveGuildResult.delete(saveGuild.NON_COMMUNITY_RAID_ALERTS);
              }
              saveGuildResult.add(saveGuild.NON_COMMUNITY_RAID_ALERTS);
            }
          } else if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            table = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp12) {
          table = tmp;
          throw tmp12;
        }
      }
    })();
  });
  closure_9 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setGuildIncidentActions() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c6 = 0;
    c5 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      let tmp5 = callback2;
      if (!callback2) {
        tmp5 = dependencyMap;
      }
      closure_4 = closure_3;
      if (closure_3 == null) {
        closure_4 = c5;
      }
      let toISOStringResult = null;
      if (tmp5) {
        let obj2 = callback2(3975)();
        toISOStringResult = obj2.add(tmp8, "hours").toISOString();
        const addResult = obj2.add(tmp8, "hours");
      }
      let tmp12 = null;
      if (callback2) {
        tmp12 = toISOStringResult;
      }
      obj1 = { invites_disabled_until: null, dms_disabled_until: null, lockdown_duration_hours: null };
      obj1[0] = tmp12;
      let tmp13 = null;
      if (dependencyMap) {
        tmp13 = toISOStringResult;
      }
      obj1[1] = tmp13;
      let tmp14 = null;
      if (tmp5) {
        tmp14 = tmp8;
      }
      obj1[2] = tmp14;
      const HTTP = callback(530).HTTP;
      obj2 = { url: null, body: null, rejectWithError: null };
      obj2[0] = closure_1_7.GUILD_INCIDENT_ACTIONS(callback);
      obj2[1] = obj1;
      obj2[2] = callback(530).rejectWithMigratedError();
      yield HTTP.put(obj2);
      return arg1;
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleResolveRaid() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c3 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
        try {
          c3 = 2;
          if (0 === guild) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              guild = guild.getGuild(callback);
              let tmp8 = null;
              if (null != guild) {
                tmp8 = callback2(10037)(guild);
              }
              let tmp5 = null;
              if (null != tmp8) {
                const HTTP = callback(530).HTTP;
                obj1 = { url: null, body: null, rejectWithError: null };
                obj1[0] = closure_1_7.GUILD_INCIDENT_REPORT_FALSE_ALARM(callback);
                const obj2 = { alert_message_id: null, reason: null };
                obj2[0] = callback2;
                obj2[1] = dependencyMap;
                obj1[1] = obj2;
                let obj3 = callback(530);
                obj1[2] = obj3.rejectWithMigratedError();
                guild = 1;
                c3 = 1;
                obj3 = { value: null, done: false };
                obj3[0] = HTTP.post(obj1);
                return obj3;
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else {
            tmp5 = arg1;
            if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          }
          c3 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = tmp5;
          return obj4;
        } catch (tmp12) {
          c3 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _handleReportRaid() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0) {
      if (v0 === 2) {
        v0 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
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
        try {
          v0 = 2;
          if (0 === dependencyMap) {
            if (arg0 === 1) {
              v0 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const guild = closure_1_4.getGuild(callback);
              let tmp8 = null;
              if (null != guild) {
                tmp8 = v0(10037)(guild);
              }
              let tmp5 = null;
              if (null != tmp8) {
                const HTTP = callback(530).HTTP;
                obj1 = { url: null, rejectWithError: null };
                obj1[0] = closure_1_7.GUILD_INCIDENT_REPORT_RAID(callback);
                let obj2 = callback(530);
                obj1[1] = obj2.rejectWithMigratedError();
                dependencyMap = 1;
                v0 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = HTTP.post(obj1);
                return obj2;
              }
            }
          } else if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else {
            tmp5 = arg1;
            if (arg0 === 2) {
              v0 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
          }
          v0 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = tmp5;
          return obj3;
        } catch (tmp12) {
          v0 = tmp;
          throw tmp12;
        }
      }
    })();
  });
  closure_12 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_6, Endpoints: error, GuildFeatures: closure_8 } = ME);
const result = require("obj132").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidActionCreators.tsx");

export const trackReportRaidViewed = function trackReportRaidViewed(onChange, onSubmit) {
  let items = onSubmit;
  if (onSubmit === undefined) {
    items = [];
  }
  if (0 !== items.length) {
    const obj = {};
    const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(onChange));
    obj.guild_id = onChange;
    obj.raid_types = items;
    obj.track(constants.GUILD_RAID_REPORTED, obj);
  }
};
export const setGuildRaidAlerts = function setGuildRaidAlerts() {
  const self = this;
  const apply = _setGuildRaidAlerts.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setGuildIncidentActions = function setGuildIncidentActions(id, pauseInvites, pauseDms, time) {
  const self = this;
  const apply = _setGuildIncidentActions.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const handleResolveRaid = function handleResolveRaid(closure_0, closure_1, mostImportantRaidResolutionType) {
  const self = this;
  const apply = _handleResolveRaid.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const handleReportRaid = function handleReportRaid(onChange) {
  const self = this;
  const apply = _handleReportRaid.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};