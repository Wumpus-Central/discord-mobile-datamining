// discord_app/modules/parent_tools/RestrictedHoursManager.tsx
import dispatcherDefault from "../../Dispatcher.tsx";
import messagesProxyDefault from "FamilyCenter.messages.js";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import apexExperiment from "FamilyCenterV3Experiment.tsx";
import closeRestrictedHoursModal from "RestrictedHoursActionCreators.native.tsx";
import closure_3 from "../../stores/NotificationSettingsStore.tsx";
import closure_4 from "../../stores/UserStore.tsx";
import closure_5 from "FamilyCenterStore.tsx";

require = arg1;
function scheduleUpcomingWarning() {
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = null;
  }
  const date = new Date();
  let obj = apexExperiment;
  let tmp7 = null;
  if (obj.getIsFamilyCenterV3Enabled({ location: "RestrictedHoursManager" })) {
    tmp7 = null;
    if (obj.screenDowntimeReminder) {
      currentUser = currentUser.getCurrentUser();
      let restrictedSchedule;
      if (currentUser != null) {
        restrictedSchedule = currentUser.restrictedSchedule;
      }
      tmp7 = null;
      if (null != restrictedSchedule) {
        const nextStartInfo = restrictedSchedule.getNextStartInfo(date);
        let tmp14 = null;
        if (null != nextStartInfo) {
          obj = { minutesUntil: null, startAtMs: null, rule: null };
          obj[0] = nextStartInfo.minutesUntil;
          const _Date = Date;
          const date1 = new Date(tmp12);
          obj[1] = date1.setSeconds(0, 0) + 60 * nextStartInfo.minutesUntil * 1000;
          obj[2] = nextStartInfo.rule;
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
      if (combined !== combined) {
        ({ startAtMs, rule } = tmp7);
        const intl = tmp5(1236).intl;
        const _Date2 = Date;
        const date2 = new Date(startAtMs);
        let tmp5Result = tmp5(10166);
        const items = [tmp5(1944).JS_DAY_TO_DAY_OF_WEEK[date2.getDay(date2)]];
        const stringResult = intl.string(messagesProxyDefault["0JlDg0"]);
        tmp5Result = tmp5(10166);
        const _HermesInternal2 = HermesInternal;
        const formatDaysResult = tmp5Result.formatDays(items);
        const trimmed = "" + tmp5Result.formatDays(items) + " " + tmp5Result.getScheduleRuleDateRange(rule).trim();
        const str4 = "" + tmp5Result.formatDays(items) + " " + tmp5Result.getScheduleRuleDateRange(rule);
        obj = { type: "RESTRICTED_HOURS_WARNING", title: null, subtitle: null };
        obj[1] = stringResult;
        obj[2] = trimmed;
        dispatcherDefault.dispatch(obj);
        const obj7 = dispatcherDefault;
      }
      const _setTimeout2 = setTimeout;
      timeout = setTimeout(() => {
        c8 = null;
        callback();
      }, 60000);
    } else {
      const _Math = Math;
      const _setTimeout = setTimeout;
      timeout = setTimeout(() => {
        c8 = null;
        callback();
      }, Math.max(0, 60 * (tmp7.minutesUntil - 16) * 1000));
    }
  }
}
function checkAndUpdateModal() {
  const result = closure_5.isCurrentUserInRestrictedHours();
  if (result !== c6) {
    c6 = result;
    let obj = dispatcherDefault;
    obj = { type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: null };
    obj[1] = c6;
    obj.dispatch(obj);
    const obj3 = closeRestrictedHoursModal;
    if (c6) {
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
  dispatcherDefault.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: false });
  if (null != c8) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c8);
    c8 = null;
  }
}
function handleScheduleUpdate() {
  const result = closure_5.isCurrentUserInRestrictedHours();
  if (result === c6) {
    scheduleUpcomingWarning();
  } else {
    c6 = result;
    let obj = dispatcherDefault;
    obj = { type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: null };
    obj[1] = c6;
    obj.dispatch(obj);
    const obj3 = closeRestrictedHoursModal;
    if (c6) {
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
initializeDefault;
class RestrictedHoursManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    map = new Map();
    result = map.set(closure_4, handleScheduleUpdate);
    applyArgumentsResult.stores = result.set(closure_5, handleScheduleUpdate);
    obj = { POST_CONNECTION_OPEN: handleScheduleUpdate, CURRENT_USER_UPDATE: handleScheduleUpdate, NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER: handleScreenDowntimeReminderChanged, LOGOUT: handleLogout };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
}
const prototype = RestrictedHoursManager.prototype;
prototype["_initialize"] = function _initialize() {
  closure_6 = closure_5.isCurrentUserInRestrictedHours();
  let obj = dispatcherDefault;
  obj = { type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: closure_6 };
  obj.dispatch(obj);
  if (closure_6) {
    const result = closeRestrictedHoursModal.openRestrictedHoursModal();
    const obj3 = closeRestrictedHoursModal;
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
  const result = closeRestrictedHoursModal.closeRestrictedHoursModal();
  c6 = false;
};
const restrictedHoursManager = new RestrictedHoursManager();
let result = require("set").fileFinishedImporting("modules/parent_tools/RestrictedHoursManager.tsx");

export default restrictedHoursManager;
export const getCurrentRestrictedHoursState = function getCurrentRestrictedHoursState() {
  return closure_5.isCurrentUserInRestrictedHours();
};