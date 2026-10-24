// === Module 4810: DismissibleContentFrameworkStore ===

// Module 4810 (DismissibleContentFrameworkStore)
import LoggerDefault from "Logger" /* 3 */;
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1087 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig" /* 4811 */;
import DismissibleContentTypes from "DismissibleContentTypes" /* 4814 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
const logger = new LoggerDefault("DCF");
let c5 = false;
let obj = { numberOfDCsShownToday: 0, dailyCapPeriodStart: null, dismissibleContentSeenDuringSession: null, dailyCapOverridden: false, newUserMinAgeRequiredOverridden: false, upsellBackoffOverridden: false, shownContent: null, lastDismissed: null, seenForGuildId: null };
const tmp2 = new LoggerDefault("DCF");
obj.dismissibleContentSeenDuringSession = new Set();
let set = new Set();
obj.shownContent = new Map();
let map = new Map();
obj.seenForGuildId = new Map();
const PersistedStore = initializeDefault.PersistedStore;
class DismissibleContentFrameworkStore extends PersistedStore {
}
const prototype = DismissibleContentFrameworkStore.prototype;
prototype["initialize"] = function initialize(numberOfDCsShownToday) {
  if (null != numberOfDCsShownToday) {
    let num = numberOfDCsShownToday.numberOfDCsShownToday;
    if (num == null) {
      num = 0;
    }
    obj.numberOfDCsShownToday = num;
    ({ dailyCapPeriodStart: obj.dailyCapPeriodStart, dailyCapOverridden } = numberOfDCsShownToday);
    if (dailyCapOverridden == null) {
      dailyCapOverridden = false;
    }
    obj.dailyCapOverridden = dailyCapOverridden;
    let flag = numberOfDCsShownToday.newUserMinAgeRequiredOverridden;
    if (flag == null) {
      flag = false;
    }
    obj.newUserMinAgeRequiredOverridden = flag;
    let flag2 = numberOfDCsShownToday.upsellBackoffOverridden;
    if (flag2 == null) {
      flag2 = false;
    }
    obj.upsellBackoffOverridden = flag2;
  }
  obj.dismissibleContentSeenDuringSession = new Set();
  const set = new Set();
  obj.seenForGuildId = new Map();
  obj.lastDismissed = null;
  const map = new Map();
};
prototype["getState"] = function getState() {
  return obj;
};
Object.defineProperty(prototype, "dailyCapOverridden", {
  get: function dailyCapOverridden() {
    return obj.dailyCapOverridden;
  },
  set: undefined
});
Object.defineProperty(prototype, "newUserMinAgeRequiredOverridden", {
  get: function newUserMinAgeRequiredOverridden() {
    return obj.newUserMinAgeRequiredOverridden;
  },
  set: undefined
});
Object.defineProperty(prototype, "upsellBackoffOverridden", {
  get: function upsellBackoffOverridden() {
    return obj.upsellBackoffOverridden;
  },
  set: undefined
});
Object.defineProperty(prototype, "lastDismissed", {
  get: function lastDismissed() {
    return obj.lastDismissed;
  },
  set: undefined
});
prototype["getRenderedAtTimestamp"] = function getRenderedAtTimestamp(content) {
  const shownContent = obj.shownContent;
  value = shownContent.get(content);
  let renderedAt;
  if (value != null) {
    renderedAt = value.renderedAt;
  }
  return renderedAt;
};
prototype["hasTrackedActionedEvent"] = function hasTrackedActionedEvent(content) {
  const shownContent = obj.shownContent;
  value = shownContent.get(content);
  let flag;
  if (value != null) {
    flag = value.actionTracked;
  }
  if (flag == null) {
    flag = false;
  }
  return flag;
};
prototype["hasUserHitDCCap"] = function hasUserHitDCCap(PASSWORDLESS_UPSELL, guildId) {
  if (null != PASSWORDLESS_UPSELL) {
    obj = DismissibleContentFatigueConfig;
    return false;
  }
  if (null != PASSWORDLESS_UPSELL) {
    let result = null != guildId;
    if (result) {
      result = DismissibleContentTypes.isGuildDismissibleContent(PASSWORDLESS_UPSELL);
    }
    if (result) {
      if (null != guildId) {
        const seenForGuildId = obj.seenForGuildId;
        value = seenForGuildId.get(guildId);
        if (tmp9) {
          return false;
        }
        tmp9 = null != value && value.has(PASSWORDLESS_UPSELL);
      }
    }
    if (!result) {
      const dismissibleContentSeenDuringSession = obj.dismissibleContentSeenDuringSession;
      if (dismissibleContentSeenDuringSession.has(PASSWORDLESS_UPSELL)) {
        return false;
      }
    }
  }
  const date = new Date();
  date.setHours(0, 0, 0, 0);
  let tmp12 = null != obj.dailyCapPeriodStart;
  if (tmp12) {
    tmp12 = obj.dailyCapPeriodStart < date.getTime();
  }
  if (tmp12) {
    obj.numberOfDCsShownToday = 0;
    obj.dailyCapPeriodStart = null;
    c5 = false;
  }
  let tmp17 = tmp16;
  if (obj.numberOfDCsShownToday >= 3) {
    tmp17 = !c5;
  }
  if (tmp17) {
    c5 = true;
    const obj3 = { shown_dcs: obj.numberOfDCsShownToday };
    logger.info("Daily cap in effect, suppressing fatigable content until tomorrow", obj3);
  }
  return obj.numberOfDCsShownToday >= 3;
};
DismissibleContentFrameworkStore.displayName = "DismissibleContentFrameworkStore";
DismissibleContentFrameworkStore.persistKey = "DismissibleContentFrameworkStore";
const items = [
  (arg0) => {
    const merged = Object.assign(arg0);
    return {};
  }
];
DismissibleContentFrameworkStore.migrations = items;
const dismissibleContentFrameworkStore = new DismissibleContentFrameworkStore(DispatcherDefault, {
  LOGOUT: function handleLogout() {
    c5 = false;
    obj = {};
    const merged = Object.assign(obj);
    obj.dismissibleContentSeenDuringSession = new Set();
    const set = new Set();
    obj.shownContent = new Map();
    const map = new Map();
    obj.seenForGuildId = new Map();
  },
  DCF_DAILY_CAP_OVERRIDE: function handleDailyCapOverride(value) {
    obj.dailyCapOverridden = value.value;
  },
  DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: function handleNewUserMinAgeRequiredOverride(value) {
    obj.newUserMinAgeRequiredOverridden = value.value;
  },
  DCF_UPSELL_BACKOFF_OVERRIDE: function handleUpsellBackoffOverride(value) {
    obj.upsellBackoffOverridden = value.value;
  },
  DCF_HANDLE_DC_SHOWN: function handleDCShownToUser(arg0) {
    ({ dismissibleContent, guildId } = arg0);
    const shownContent = obj.shownContent;
    obj = { renderedAt: Date.now(), actionTracked: false };
    const result = shownContent.set(dismissibleContent, obj);
    if (!obj2.bypassesFatigue(dismissibleContent)) {
      if (!obj.dailyCapOverridden) {
        let result1 = DismissibleContentTypes.isGuildDismissibleContent(dismissibleContent);
        if (result1) {
          result1 = null != guildId;
        }
        if (result1) {
          if (!result1) {
            if (result1) {
              const seenForGuildId2 = tmp11.seenForGuildId;
              let set = seenForGuildId2.get(guildId);
              if (set == null) {
                const _Set = Set;
                set = new Set();
              }
              set.add(dismissibleContent);
              const seenForGuildId3 = obj.seenForGuildId;
              const result2 = seenForGuildId3.set(guildId, set);
            } else {
              const dismissibleContentSeenDuringSession2 = tmp11.dismissibleContentSeenDuringSession;
              dismissibleContentSeenDuringSession2.add(dismissibleContent);
            }
            if (null == obj.dailyCapPeriodStart) {
              const _Date = Date;
              const date = new Date();
              date.setHours(0, 0, 0, 0);
              obj.dailyCapPeriodStart = date.getTime();
            }
            obj.numberOfDCsShownToday = obj.numberOfDCsShownToday + 1;
            if (3 === obj.numberOfDCsShownToday) {
              const obj3 = { dismissible_content: dismissibleContent, shown_dcs: obj.numberOfDCsShownToday };
              logger.info("Daily cap reached", obj3);
            }
            if (obj.numberOfDCsShownToday > 3) {
              const obj4 = { cap_type: "daily_cap", dismissible_content: dismissibleContent, shown_dcs: obj.numberOfDCsShownToday };
              AnalyticsUtilsDefault.track(AnalyticEvents.DCF_CAP_EXCEEDED, obj4);
            }
          } else {
            const seenForGuildId = obj.seenForGuildId;
            value2 = seenForGuildId.get(guildId);
            null != value2 && value2.has(dismissibleContent);
          }
        } else {
          const dismissibleContentSeenDuringSession = obj.dismissibleContentSeenDuringSession;
        }
        const tmp2Result = DismissibleContentTypes;
      }
    }
    obj2 = DismissibleContentFatigueConfig;
  },
  DCF_HANDLE_DC_DISMISSED: function handleDCDismissed(dismissibleContent) {
    dismissibleContent = dismissibleContent.dismissibleContent;
    obj.lastDismissed = { content: dismissibleContent, guildId: dismissibleContent.guildId };
    const shownContent = obj.shownContent;
    shownContent.delete(dismissibleContent);
  },
  DCF_HANDLE_DC_ACTIONED: function handleDCActioned(dismissibleContent) {
    const shownContent = obj.shownContent;
    value = shownContent.get(dismissibleContent.dismissibleContent);
    if (null != value) {
      if (!value.actionTracked) {
        value.actionTracked = true;
      }
    }
    return false;
  },
  DCF_OVERRIDE_LAST_DC_DISMISSED: function handleResetLastDCDismissed(dismissibleContent) {
    dismissibleContent = dismissibleContent.dismissibleContent;
    let tmp3 = null;
    if (null != dismissibleContent) {
      obj = { content: dismissibleContent, guildId: tmp };
      tmp3 = obj;
    }
    obj.lastDismissed = tmp3;
  },
  DCF_RESET: function resetStore() {
    c5 = false;
    obj.dailyCapPeriodStart = null;
    obj.numberOfDCsShownToday = 0;
    obj.dismissibleContentSeenDuringSession = new Set();
    const set = new Set();
    obj.seenForGuildId = new Map();
    obj.lastDismissed = null;
  }
});
let result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkStore.tsx");

export default dismissibleContentFrameworkStore;