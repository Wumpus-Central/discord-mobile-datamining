// discord_app/modules/parent_tools/RestrictedHoursManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import _modDef2396 from "FamilyCenter.messages.js";
import FamilyCenterV3Experiment from "FamilyCenterV3Experiment.tsx";
import RestrictedHoursActionCreators from "RestrictedHoursActionCreators.native.tsx";
import NotificationSettingsStore from "../../stores/NotificationSettingsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import FamilyCenterStore from "FamilyCenterStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

require = fn;
function scheduleUpcomingWarning() {
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = null;
  }
  const date = new Date();
  let obj = FamilyCenterV3Experiment;
  let tmp7 = null;
  if (obj.getIsFamilyCenterV3Enabled({ location: "RestrictedHoursManager" })) {
    tmp7 = null;
    if (NotificationSettingsStore.screenDowntimeReminder) {
      const currentUser = UserStore.getCurrentUser();
      let restrictedSchedule;
      if (currentUser != null) {
        restrictedSchedule = currentUser.restrictedSchedule;
      }
      tmp7 = null;
      if (null != restrictedSchedule) {
        const nextStartInfo = restrictedSchedule.getNextStartInfo(date);
        let tmp14 = null;
        if (null != nextStartInfo) {
          obj = { minutesUntil: nextStartInfo.minutesUntil, startAtMs: null, rule: null };
          const _Date = Date;
          const date1 = new Date(tmp12);
          obj.startAtMs = date1.setSeconds(0, 0) + 60 * nextStartInfo.minutesUntil * 1000;
          obj.rule = nextStartInfo.rule;
          tmp14 = obj;
        }
        tmp7 = tmp14;
        tmp12 = date;
      }
    }
  }
  if (null != tmp7) {
    if (tmp7.minutesUntil <= 16) {
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp7.rule.ruleId + ":" + tmp7.startAtMs;
      if (combined !== c9) {
        ({ startAtMs, rule } = tmp7);
        const intl = tmp5(1114).intl;
        const _Date2 = Date;
        const date2 = new Date(startAtMs);
        tmp5(10083);
        const items = [tmp5(1394).JS_DAY_TO_DAY_OF_WEEK[date2.getDay(date2)]];
        const stringResult = intl.string(_modDef2396["0JlDg0"]);
        const tmp5Result = tmp5(10083);
        const _HermesInternal2 = HermesInternal;
        const formatDaysResult = tmp5Result.formatDays(items);
        const trimmed = "" + tmp5Result.formatDays(items) + " " + tmp5Result.getScheduleRuleDateRange(rule).trim();
        const str4 = "" + tmp5Result.formatDays(items) + " " + tmp5Result.getScheduleRuleDateRange(rule);
        obj = { type: "RESTRICTED_HOURS_WARNING", title: stringResult, subtitle: trimmed };
        DispatcherDefault.dispatch(obj);
        c9 = combined;
      }
      const _setTimeout2 = setTimeout;
      timeout = setTimeout(() => {
        c8 = null;
        scheduleUpcomingWarning();
      }, 60000);
    } else {
      const _Math = Math;
      const _setTimeout = setTimeout;
      timeout = setTimeout(
        () => {
          c8 = null;
          scheduleUpcomingWarning();
        },
        Math.max(0, 60 * (tmp7.minutesUntil - 16) * 1000),
      );
    }
  }
}
function checkAndUpdateModal() {
  const result = FamilyCenterStore.isCurrentUserInRestrictedHours();
  if (result !== isInRestrictedHours) {
    isInRestrictedHours = result;
    const obj = { type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours };
    obj.dispatch(obj);
    const obj3 = RestrictedHoursActionCreators;
    if (isInRestrictedHours) {
      const result1 = obj3.openRestrictedHoursModal();
    } else {
      const result2 = obj3.closeRestrictedHoursModal();
    }
    scheduleUpcomingWarning();
  }
}
function handleLogout() {
  c6 = false;
  c9 = null;
  DispatcherDefault.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: false });
  if (null != c8) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c8);
    c8 = null;
  }
}
function handleScheduleUpdate() {
  const result = FamilyCenterStore.isCurrentUserInRestrictedHours();
  if (result === isInRestrictedHours) {
    scheduleUpcomingWarning();
  } else {
    isInRestrictedHours = result;
    const obj = { type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours };
    obj.dispatch(obj);
    const obj3 = RestrictedHoursActionCreators;
    if (isInRestrictedHours) {
      const result1 = obj3.openRestrictedHoursModal();
    } else {
      const result2 = obj3.closeRestrictedHoursModal();
    }
    scheduleUpcomingWarning();
  }
}
function handleScreenDowntimeReminderChanged() {
  scheduleUpcomingWarning();
}
let c6 = false;
let c7 = null;
let c8 = null;
let c9 = null;
class RestrictedHoursManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    result = map.set(closure_4, handleScheduleUpdate);
    applyArgumentsResult.stores = result.set(closure_5, handleScheduleUpdate);
    obj = {
      POST_CONNECTION_OPEN: handleScheduleUpdate,
      CURRENT_USER_UPDATE: handleScheduleUpdate,
      NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER: handleScreenDowntimeReminderChanged,
      LOGOUT: handleLogout,
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = RestrictedHoursManager.prototype;
prototype["_initialize"] = function _initialize() {
  isInRestrictedHours = FamilyCenterStore.isCurrentUserInRestrictedHours();
  const obj = { type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours };
  obj.dispatch(obj);
  if (isInRestrictedHours) {
    const result = RestrictedHoursActionCreators.openRestrictedHoursModal();
  }
  const interval = setInterval(checkAndUpdateModal, 60000);
  scheduleUpcomingWarning();
};
prototype["_terminate"] = function _terminate() {
  if (null != c7) {
    const _clearInterval = clearInterval;
    clearInterval(c7);
    c7 = null;
  }
  if (null != c8) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c8);
    c8 = null;
  }
  c9 = null;
  const result = RestrictedHoursActionCreators.closeRestrictedHoursModal();
  c6 = false;
};
const restrictedHoursManager = new RestrictedHoursManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/parent_tools/RestrictedHoursManager.tsx");

export default restrictedHoursManager;
export const getCurrentRestrictedHoursState = function getCurrentRestrictedHoursState() {
  return FamilyCenterStore.isCurrentUserInRestrictedHours();
};
