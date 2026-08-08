// discord_app/modules/guild_antiraid/GuildAntiRaidActionCreators.tsx
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { DEFAULT_LOCKDOWN_DURATION } from "GUILD_REPORT_RAID_MOBILE_KEY";
import ME from "ME";
import { expandEventProperties } from "../../utils/AnalyticsUtils.tsx";
import { collectGuildAnalyticsMetadata } from "../app_analytics/AppAnalyticsUtils.tsx";

let closure_6;
let error;
let metroImportAll;
const require = arg1;
function _setGuildRaidAlerts() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
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
          return { value: "HermesInternal", done: null };
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
              let obj1 = features;
              const _Set = Set;
              const set = new Set(features.features);
              let saveGuildResult = set;
              let saveGuild = outer1_8;
              if (set.has(outer1_8.COMMUNITY)) {
                if (tmp18) {
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
              } else if (!tmp18) {
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
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp12) {
          table = tmp;
          throw tmp12;
        }
      }
    })();
  });
  const _setGuildRaidAlerts = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let collectGuildAnalyticsMetadata = arg3;
    let c6 = 0;
    let c5 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      let tmp5 = callback2;
      if (!callback2) {
        tmp5 = tmp26;
      }
      let createGuildRecordFromRust = tmp27;
      if (collectGuildAnalyticsMetadata == null) {
        createGuildRecordFromRust = c5;
      }
      let toISOStringResult = null;
      if (tmp5) {
        let obj2 = callback2(3883)();
        toISOStringResult = obj2.add(tmp8, "hours").toISOString();
        const addResult = obj2.add(tmp8, "hours");
      }
      let tmp12 = null;
      if (callback2) {
        tmp12 = toISOStringResult;
      }
      const obj1 = { invites_disabled_until: null, dms_disabled_until: null, lockdown_duration_hours: null };
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
      obj2[0] = outer1_7.GUILD_INCIDENT_ACTIONS(callback);
      obj2[1] = obj1;
      obj2[2] = callback(530).rejectWithMigratedError();
      yield HTTP.put(obj2);
      return arg1;
    })();
  });
  const _setGuildIncidentActions = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c3 = 0;
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
          return { value: "HermesInternal", done: null };
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
                tmp8 = callback2(9775)(guild);
              }
              let tmp5 = null;
              if (null != tmp8) {
                const HTTP = callback(530).HTTP;
                const obj1 = { url: null, body: null, rejectWithError: null };
                obj1[0] = outer1_7.GUILD_INCIDENT_REPORT_FALSE_ALARM(tmp18);
                const obj2 = { alert_message_id: null, reason: null };
                obj2[0] = tmp19;
                obj2[1] = tmp20;
                obj1[1] = obj2;
                let obj3 = callback(530);
                obj1[2] = obj3.rejectWithMigratedError();
                guild = 1;
                c3 = 1;
                obj3 = { value: null, done: false };
                obj3[0] = HTTP.post(obj1);
                return obj3;
              }
              tmp18 = callback;
              tmp19 = callback2;
              tmp20 = dependencyMap;
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
  const _handleResolveRaid = tmp;
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
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
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
          return { value: "HermesInternal", done: null };
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
              const guild = outer1_4.getGuild(callback);
              let tmp8 = null;
              if (null != guild) {
                tmp8 = v0(9775)(guild);
              }
              let tmp5 = null;
              if (null != tmp8) {
                const HTTP = callback(530).HTTP;
                const obj1 = { url: null, rejectWithError: null };
                obj1[0] = outer1_7.GUILD_INCIDENT_REPORT_RAID(tmp18);
                let obj2 = callback(530);
                obj1[1] = obj2.rejectWithMigratedError();
                dependencyMap = 1;
                v0 = 1;
                obj2 = { value: null, done: false };
                obj2[0] = HTTP.post(obj1);
                return obj2;
              }
              tmp18 = callback;
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
  const _handleReportRaid = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: closure_6, Endpoints: error, GuildFeatures: metroImportAll } = ME);
const result = require("GUILD_REPORT_RAID_MOBILE_KEY").fileFinishedImporting("modules/guild_antiraid/GuildAntiRaidActionCreators.tsx");

export const trackReportRaidViewed = function trackReportRaidViewed(onChange, onSubmit) {
  let items = onSubmit;
  if (onSubmit === undefined) {
    items = [];
  }
  if (0 !== items.length) {
    let obj = expandEventProperties;
    obj = {};
    const merged = Object.assign(collectGuildAnalyticsMetadata.collectGuildAnalyticsMetadata(onChange));
    obj.guild_id = onChange;
    obj.raid_types = items;
    obj.track(constants.GUILD_RAID_REPORTED, obj);
    const obj3 = collectGuildAnalyticsMetadata;
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