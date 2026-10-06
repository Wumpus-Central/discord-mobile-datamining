// discord_app/modules/dismissible_content/DismissibleContentFrameworkStore.tsx
import LoggerDefault from "../debug/Logger.tsx";
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import DismissibleContentFatigueConfig from "DismissibleContentFatigueConfig.tsx";
import DismissibleContentTypes from "DismissibleContentTypes.tsx";
import size from "../../../_runtime/metro/00002__.js";

let map;
let map1;
let set;
const AnalyticEvents = Constants.AnalyticEvents;
let tmp2 = new LoggerDefault("DCF");
const React3 = tmp2;
let c5 = false;
let obj = {
  numberOfDCsShownToday: 0,
  dailyCapPeriodStart: null,
  dismissibleContentSeenDuringSession: set,
  dailyCapOverridden: false,
  newUserMinAgeRequiredOverridden: false,
  renderedAtTimestamps: map,
  lastDismissed: null,
  seenForGuildId: map1,
};
set = new Set();
map = new Map();
map1 = new Map();
const PersistedStore = get_initializedDefault.PersistedStore;
class DismissibleContentFrameworkStore extends PersistedStore {
  initialize(numberOfDCsShownToday) {
    let dailyCapOverridden;
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
    new Set();
    obj.seenForGuildId = new Map();
    obj.lastDismissed = null;
    new Map();
  }
  getState() {
    return obj;
  }
  getRenderedAtTimestamp(arg0) {
    const renderedAtTimestamps = obj.renderedAtTimestamps;
    return renderedAtTimestamps.get(arg0);
  }
  hasUserHitDCCap(PASSWORDLESS_UPSELL, guildId) {
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
          const value = seenForGuildId.get(guildId);
          const tmp9 = null != value && value.has(PASSWORDLESS_UPSELL);
          if (tmp9) {
            return false;
          }
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
    const tmp12 = null != obj.dailyCapPeriodStart && obj.dailyCapPeriodStart < date.getTime();
    if (tmp12) {
      obj.numberOfDCsShownToday = 0;
      obj.dailyCapPeriodStart = null;
      c5 = false;
    }
    const tmp17 = tmp16 && !c5;
    if (tmp17) {
      c5 = true;
      const obj2 = { shown_dcs: obj.numberOfDCsShownToday };
      logger.info("Daily cap in effect, suppressing fatigable content until tomorrow", obj2);
    }
    return obj.numberOfDCsShownToday >= 3;
  }
}
const prototype = DismissibleContentFrameworkStore.prototype;
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
DismissibleContentFrameworkStore.displayName = "DismissibleContentFrameworkStore";
DismissibleContentFrameworkStore.persistKey = "DismissibleContentFrameworkStore";
const items = [
  (arg0) => {
    obj = {};
    const merged = Object.assign(arg0);
    return obj;
  },
];
DismissibleContentFrameworkStore.migrations = items;
let obj2 = {
  LOGOUT: function handleLogout() {
    c5 = false;
    obj = {
      dismissibleContentSeenDuringSession: new Set(),
      renderedAtTimestamps: new Map(),
      seenForGuildId: new Map(),
    };
    const merged = Object.assign(obj);
    new Set();
    new Map();
    new Map();
  },
  DCF_DAILY_CAP_OVERRIDE: function handleDailyCapOverride(value) {
    obj.dailyCapOverridden = value.value;
  },
  DCF_NEW_USER_MIN_AGE_REQUIRED_OVERRIDE: function handleNewUserMinAgeRequiredOverride(value) {
    obj.newUserMinAgeRequiredOverridden = value.value;
  },
  DCF_HANDLE_DC_SHOWN: function handleDCShownToUser(arg0) {
    let dismissibleContent;
    let guildId;
    ({ dismissibleContent, guildId } = arg0);
    const renderedAtTimestamps = obj.renderedAtTimestamps;
    const date = new Date();
    const result = renderedAtTimestamps.set(dismissibleContent, date.getTime());
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = DismissibleContentFatigueConfig.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    if (!CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(dismissibleContent)) {
      if (!obj.dailyCapOverridden) {
        const tmp2Result = DismissibleContentTypes;
        const result1 = tmp2Result.isGuildDismissibleContent(dismissibleContent) && null != guildId;
        if (result1) {
          if (!result1) {
            if (result1) {
              const seenForGuildId2 = tmp11.seenForGuildId;
              set = seenForGuildId2.get(guildId);
              if (set == null) {
                const _Set = Set;
                const self = this;
                const self2 = this;
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
              const self3 = this;
              const self4 = this;
              const date1 = new Date();
              date1.setHours(0, 0, 0, 0);
              obj.dailyCapPeriodStart = date1.getTime();
            }
            obj.numberOfDCsShownToday = obj.numberOfDCsShownToday + 1;
            if (3 === obj.numberOfDCsShownToday) {
              obj = { dismissible_content: dismissibleContent, shown_dcs: obj.numberOfDCsShownToday };
              logger.info("Daily cap reached", obj);
            }
            if (obj.numberOfDCsShownToday > 3) {
              const obj2 = {
                cap_type: "daily_cap",
                dismissible_content: dismissibleContent,
                shown_dcs: obj.numberOfDCsShownToday,
              };
              const obj7 = AnalyticsUtilsDefault;
              obj7.track(AnalyticEvents.DCF_CAP_EXCEEDED, obj2);
            }
          } else {
            const seenForGuildId = obj.seenForGuildId;
            const value2 = seenForGuildId.get(guildId);
            null != value2 && value2.has(dismissibleContent);
          }
        } else {
          const dismissibleContentSeenDuringSession = obj.dismissibleContentSeenDuringSession;
        }
      }
    }
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
    const tmp2 = obj;
    if (null != dismissibleContent) {
      obj = { content: dismissibleContent, guildId: tmp };
      tmp3 = obj;
    }
    tmp2.lastDismissed = tmp3;
  },
  DCF_RESET: function resetStore() {
    c5 = false;
    obj.dailyCapPeriodStart = null;
    obj.numberOfDCsShownToday = 0;
    obj.dismissibleContentSeenDuringSession = new Set();
    new Set();
    obj.seenForGuildId = new Map();
    obj.lastDismissed = null;
    new Map();
  },
};
const dismissibleContentFrameworkStore = new DismissibleContentFrameworkStore(DispatcherDefault, obj2);
let result = size.fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkStore.tsx");

export default dismissibleContentFrameworkStore;
