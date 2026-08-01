// === Module 1362: set ===

// Module 1362 (set)
import { AnalyticEvents } from "ME";
import { PersistedStore } from "initialize";
import set from "isSingleUseDismissibleContent";

let obj = { numberOfDCsShownToday: 0, dailyCapPeriodStart: null, dismissibleContentSeenDuringSession: null, dailyCapOverridden: false, newUserMinAgeRequiredOverridden: false, renderedAtTimestamps: null, lastDismissed: null, seenForGuildId: null };
let set = new Set();
obj[2] = set;
obj[5] = new Map();
let map = new Map();
obj[7] = new Map();
class DismissibleContentFrameworkStore extends PersistedStore {
}
const prototype = DismissibleContentFrameworkStore.prototype;
prototype["initialize"] = function initialize(numberOfDCsShownToday) {
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
    const tmp = obj;
    const tmp3 = obj;
    const tmp4 = obj;
  }
  obj.dismissibleContentSeenDuringSession = new Set();
  const set = new Set();
  obj.seenForGuildId = new Map();
  obj.lastDismissed = null;
};
prototype["getState"] = function getState() {
  return obj;
};
Object.defineProperty(prototype, "dailyCapOverridden", {
  get: function dailyCapOverridden(FlashList, arg1) {
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
Object.defineProperty(prototype, "lastDismissed", {
  get: function lastDismissed() {
    return obj.lastDismissed;
  },
  set: undefined
});
prototype["getRenderedAtTimestamp"] = function getRenderedAtTimestamp(closure_0) {
  const renderedAtTimestamps = obj.renderedAtTimestamps;
  return renderedAtTimestamps.get(closure_0);
};
prototype["hasUserHitDCCap"] = function hasUserHitDCCap(PASSWORDLESS_UPSELL, closure_1) {
  if (null != PASSWORDLESS_UPSELL) {
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require(1363) /* set */.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    return false;
  }
  if (null != PASSWORDLESS_UPSELL) {
    let result = null != closure_1;
    if (result) {
      const obj = require(1359) /* isSingleUseDismissibleContent */;
      result = obj.isGuildDismissibleContent(PASSWORDLESS_UPSELL);
    }
    if (result) {
      if (null != closure_1) {
        const seenForGuildId = obj.seenForGuildId;
        const value = seenForGuildId.get(closure_1);
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
obj = {
  LOGOUT: function handleLogout() {
    const obj = {};
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
    let dismissibleContent;
    let guildId;
    ({ dismissibleContent, guildId } = arg0);
    const renderedAtTimestamps = obj.renderedAtTimestamps;
    const result = renderedAtTimestamps.set(dismissibleContent, new Date().getTime());
    const CONTENT_TYPES_WITH_BYPASS_FATIGUE = require(1363) /* set */.CONTENT_TYPES_WITH_BYPASS_FATIGUE;
    if (!CONTENT_TYPES_WITH_BYPASS_FATIGUE.has(dismissibleContent)) {
      if (!obj.dailyCapOverridden) {
        let result1 = require(1359) /* isSingleUseDismissibleContent */.isGuildDismissibleContent(dismissibleContent);
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
            if (obj.numberOfDCsShownToday > 3) {
              obj = { cap_type: "daily_cap", dismissible_content: null, shown_dcs: null };
              obj[1] = dismissibleContent;
              obj[2] = obj.numberOfDCsShownToday;
              importDefault(698).track(AnalyticEvents.DCF_CAP_EXCEEDED, obj);
              const obj6 = importDefault(698);
            }
          } else {
            const seenForGuildId = obj.seenForGuildId;
            const value = seenForGuildId.get(guildId);
            const tmp10 = null != value && value.has(dismissibleContent);
          }
        } else {
          const dismissibleContentSeenDuringSession = obj.dismissibleContentSeenDuringSession;
        }
        const tmp2Result = require(1359) /* isSingleUseDismissibleContent */;
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
    if (null != dismissibleContent) {
      const obj = { content: null, guildId: null };
      obj[0] = dismissibleContent;
      obj[1] = tmp;
      tmp3 = obj;
    }
    obj.lastDismissed = tmp3;
  },
  DCF_RESET: function resetStore() {
    obj.dailyCapPeriodStart = null;
    obj.numberOfDCsShownToday = 0;
    obj.dismissibleContentSeenDuringSession = new Set();
    const set = new Set();
    obj.seenForGuildId = new Map();
    obj.lastDismissed = null;
  }
};
const dismissibleContentFrameworkStore = new DismissibleContentFrameworkStore(require("dispatcher"), obj);
let result = set.fileFinishedImporting("modules/dismissible_content/DismissibleContentFrameworkStore.tsx");

export default dismissibleContentFrameworkStore;