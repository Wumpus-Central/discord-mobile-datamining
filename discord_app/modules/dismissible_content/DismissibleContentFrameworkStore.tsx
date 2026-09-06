// discord_app/modules/dismissible_content/DismissibleContentFrameworkStore.tsx
import LoggerDefault from "../debug/Logger.tsx";
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import DismissibleContentTypes from "DismissibleContentTypes.tsx";
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const logger = new LoggerDefault("DCF");
let c5 = false;
let obj = {
  numberOfDCsShownToday: 0,
  dailyCapPeriodStart: null,
  dismissibleContentSeenDuringSession: null,
  dailyCapOverridden: false,
  newUserMinAgeRequiredOverridden: false,
  renderedAtTimestamps: null,
  lastDismissed: null,
  seenForGuildId: null,
};
const tmp2 = new LoggerDefault("DCF");
obj.dismissibleContentSeenDuringSession = new Set();
let set = new Set();
obj.renderedAtTimestamps = new Map();
let map = new Map();
obj.seenForGuildId = new Map();
const PersistedStore = initializeDefault.PersistedStore;
class DismissibleContentFrameworkStore extends PersistedStore {}
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
  set: undefined,
});
Object.defineProperty(prototype, "newUserMinAgeRequiredOverridden", {
  get: function newUserMinAgeRequiredOverridden() {
    return obj.newUserMinAgeRequiredOverridden;
  },
  set: undefined,
});
Object.defineProperty(prototype, "lastDismissed", {
  get: function lastDismissed() {
    return obj.lastDismissed;
  },
  set: undefined,
});
prototype["getRenderedAtTimestamp"] = function getRenderedAtTimestamp(dismissibleContent) {
  const renderedAtTimestamps = obj.renderedAtTimestamps;
  return renderedAtTimestamps.get(dismissibleContent);
};
prototype["hasUserHitDCCap"] = function hasUserHitDCCap(PASSWORDLESS_UPSELL, guildId) {
  if (null != PASSWORDLESS_UPSELL) {
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFatigueConfig.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    return false;
  }
  if (null != PASSWORDLESS_UPSELL) {
    let result = null != guildId;
    if (result) {
      obj = DismissibleContentTypes;
      result = obj.isGuildDismissibleContent(PASSWORDLESS_UPSELL);
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
    obj = { shown_dcs: null };
    obj.shown_dcs = obj.numberOfDCsShownToday;
    logger.info("Daily cap in effect, suppressing fatigable content until tomorrow", obj);
  }
  return obj.numberOfDCsShownToday >= 3;
};
DismissibleContentFrameworkStore.displayName = "DismissibleContentFrameworkStore";
DismissibleContentFrameworkStore.persistKey = "DismissibleContentFrameworkStore";
const items = [
  (arg0) => {
    const merged = Object.assign(arg0);
    return {};
  },
];
DismissibleContentFrameworkStore.migrations = items;
obj = {
  LOGOUT: function handleLogout() {
    c5 = false;
    obj = {};
    const merged = Object.assign(obj);
    obj.dismissibleContentSeenDuringSession = new Set();
    const set = new Set();
    obj.renderedAtTimestamps = new Map();
    const map = new Map();
    obj.seenForGuildId = new Map();
  },
  DCF_DAILY_CAP_OVERRIDE: function handleDailyCapOverride(value) {
    obj.dailyCapOverridden = value.value;
  },
  DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: function handleNewUserMinAgeRequiredOverride(value) {
    obj.newUserMinAgeRequiredOverridden = value.value;
  },
  DCF_HANDLE_DC_SHOWN: function handleDCShownToUser(arg0) {
    ({ dismissibleContent, guildId } = arg0);
    const renderedAtTimestamps = obj.renderedAtTimestamps;
    const result = renderedAtTimestamps.set(dismissibleContent, new Date().getTime());
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFatigueConfig.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    if (!CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(dismissibleContent)) {
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
              const date1 = new Date();
              date1.setHours(0, 0, 0, 0);
              obj.dailyCapPeriodStart = date1.getTime();
            }
            obj.numberOfDCsShownToday = obj.numberOfDCsShownToday + 1;
            if (3 === obj.numberOfDCsShownToday) {
              obj = { dismissible_content: dismissibleContent, shown_dcs: null };
              obj.shown_dcs = obj.numberOfDCsShownToday;
              logger.info("Daily cap reached", obj);
            }
            if (obj.numberOfDCsShownToday > 3) {
              obj = { cap_type: "daily_cap", dismissible_content: dismissibleContent, shown_dcs: null };
              obj.shown_dcs = obj.numberOfDCsShownToday;
              AnalyticsUtilsDefault.track(AnalyticEvents.DCF_CAP_EXCEEDED, obj);
            }
          } else {
            const seenForGuildId = obj.seenForGuildId;
            value = seenForGuildId.get(guildId);
            null != value && value.has(dismissibleContent);
          }
        } else {
          const dismissibleContentSeenDuringSession = obj.dismissibleContentSeenDuringSession;
        }
        const tmp2Result = DismissibleContentTypes;
      }
    }
    const date = new Date();
  },
  DCF_HANDLE_DC_DISMISSED: function handleDCDismissed(dismissibleContent) {
    dismissibleContent = dismissibleContent.dismissibleContent;
    obj.lastDismissed = { content: dismissibleContent, guildId: dismissibleContent.guildId };
    const renderedAtTimestamps = obj.renderedAtTimestamps;
    renderedAtTimestamps.delete(dismissibleContent);
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
  },
};
const dismissibleContentFrameworkStore = new DismissibleContentFrameworkStore(DispatcherDefault, obj);
let result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkStore.tsx");

export default dismissibleContentFrameworkStore;
