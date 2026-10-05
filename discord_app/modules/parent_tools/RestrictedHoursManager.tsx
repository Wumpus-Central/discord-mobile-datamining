// discord_app/modules/parent_tools/RestrictedHoursManager.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import intl2 from "../../intl/index.native.tsx";
import FamilyCenterModels from "FamilyCenterModels.tsx";
import _modDef2493 from "FamilyCenter.messages.js";
import FamilyCenterRestrictedHoursUtils from "FamilyCenterRestrictedHoursUtils.tsx";
import RestrictedHoursActionCreators from "RestrictedHoursActionCreators.native.tsx";
import NotificationSettingsStore from "../../stores/NotificationSettingsStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import FamilyCenterStore from "FamilyCenterStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";
import size from "../../../_runtime/metro/00002__.js";

let isInRestrictedHours, map;

function scheduleUpcomingWarning() {
  let date1;
  let timeout;
  if (null != timeout) {
    const _clearTimeout = clearTimeout;
    clearTimeout(timeout);
    timeout = null;
  }
  const date = new Date();
  let tmp5 = null;
  if (NotificationSettingsStore.screenDowntimeReminder) {
    const currentUser = UserStore.getCurrentUser();
    let restrictedSchedule;
    if (currentUser != null) {
      restrictedSchedule = currentUser.restrictedSchedule;
    }
    tmp5 = null;
    if (null != restrictedSchedule) {
      const nextStartInfo = restrictedSchedule.getNextStartInfo(date);
      let tmp11 = null;
      const tmp9 = date;
      if (null != nextStartInfo) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const obj = {
          minutesUntil: nextStartInfo.minutesUntil,
          startAtMs: date1.setSeconds(0, 0) + 60 * nextStartInfo.minutesUntil * 1000,
          rule: nextStartInfo.rule,
        };
        tmp11 = obj;
        date1 = new Date(tmp9);
      }
      tmp5 = tmp11;
    }
  }
  if (null != tmp5) {
    if (tmp5.minutesUntil <= 16) {
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp5.rule.ruleId + ":" + tmp5.startAtMs;
      if (combined !== c9) {
        const startAtMs = tmp5.startAtMs;
        const rule = tmp5.rule;
        const intl = intl2.intl;
        const _Date2 = Date;
        const self3 = this;
        const self4 = this;
        const stringResult = intl.string(_modDef2493["0JlDg0"]);
        const JS_DAY_TO_DAY_OF_WEEK = FamilyCenterModels.JS_DAY_TO_DAY_OF_WEEK;
        const date2 = new Date(startAtMs);
        const items = [JS_DAY_TO_DAY_OF_WEEK[date2.getDay(date2)]];
        const tmp22 = JS_DAY_TO_DAY_OF_WEEK[date2.getDay(date2)];
        const obj4 = FamilyCenterRestrictedHoursUtils;
        const _HermesInternal2 = HermesInternal;
        const formatDaysResult = obj4.formatDays(items);
        const obj5 = FamilyCenterRestrictedHoursUtils;
        const str4 = "" + formatDaysResult + " " + obj5.getScheduleRuleDateRange(rule);
        const trimmed = str4.trim();
        const obj2 = { type: "RESTRICTED_HOURS_WARNING", title: stringResult, subtitle: trimmed };
        const obj6 = DispatcherDefault;
        obj6.dispatch(obj2);
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
        Math.max(0, 60 * (tmp5.minutesUntil - 16) * 1000),
      );
    }
  }
}
function checkAndUpdateModal() {
  const result = FamilyCenterStore.isCurrentUserInRestrictedHours();
  if (result !== isInRestrictedHours) {
    isInRestrictedHours = result;
    const obj2 = { type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
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
  let c6 = false;
  c9 = null;
  const obj = DispatcherDefault;
  obj.dispatch({ type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours: false });
  if (null != c8) {
    const _clearTimeout = clearTimeout;
    clearTimeout(c8);
    c8 = null;
  }
}
function handleScheduleUpdate() {
  const result = FamilyCenterStore.isCurrentUserInRestrictedHours();
  if (result !== isInRestrictedHours) {
    isInRestrictedHours = result;
    const obj2 = { type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours };
    const obj = DispatcherDefault;
    obj.dispatch(obj2);
    const obj3 = RestrictedHoursActionCreators;
    if (isInRestrictedHours) {
      const result1 = obj3.openRestrictedHoursModal();
    } else {
      const result2 = obj3.closeRestrictedHoursModal();
    }
    scheduleUpcomingWarning();
  }
  scheduleUpcomingWarning();
}
function handleScreenDowntimeReminderChanged() {
  scheduleUpcomingWarning();
}
const metroRequire = false;
let c7 = null;
let c8 = null;
let c9 = null;
class RestrictedHoursManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    map = new Map();
    const result = map.set(UserStore, handleScheduleUpdate);
    applyArgumentsResult.stores = result.set(FamilyCenterStore, handleScheduleUpdate);
    const obj = {
      POST_CONNECTION_OPEN: handleScheduleUpdate,
      CURRENT_USER_UPDATE: handleScheduleUpdate,
      NOTIFICATIONS_SET_SCREEN_DOWNTIME_REMINDER: handleScreenDowntimeReminderChanged,
      LOGOUT: handleLogout,
    };
    applyArgumentsResult.actions = obj;
    return applyArgumentsResult;
  }
  _initialize() {
    isInRestrictedHours = FamilyCenterStore.isCurrentUserInRestrictedHours();
    const obj = DispatcherDefault;
    const obj2 = { type: "RESTRICTED_HOURS_STATE_CHANGE", isInRestrictedHours };
    obj.dispatch(obj2);
    const tmp3 = isInRestrictedHours;
    if (tmp3) {
      const obj3 = RestrictedHoursActionCreators;
      const result = obj3.openRestrictedHoursModal();
    }
    const interval = setInterval(checkAndUpdateModal, 60000);
    scheduleUpcomingWarning();
  }
  _terminate() {
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
    const obj = RestrictedHoursActionCreators;
    const result = obj.closeRestrictedHoursModal();
    let c6 = false;
  }
}
const prototype = RestrictedHoursManager.prototype;
const restrictedHoursManager = new RestrictedHoursManager();
let result = size.fileFinishedImporting("modules/parent_tools/RestrictedHoursManager.tsx");

export default restrictedHoursManager;
export const getCurrentRestrictedHoursState = function getCurrentRestrictedHoursState() {
  return FamilyCenterStore.isCurrentUserInRestrictedHours();
};
