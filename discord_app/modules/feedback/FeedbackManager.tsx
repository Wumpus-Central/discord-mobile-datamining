// === Module 16623: feedback/FeedbackManager ===

// Module 16623 (feedback/FeedbackManager)
import _mod12 from "module_12" /* 12 */;
import Storage2 from "Storage" /* 510 */;
import UserSettings from "UserSettings" /* 2028 */;
import FeedbackConfig from "FeedbackConfig" /* 16625 */;
import HotspotStore from "hotspot/HotspotStore" /* 6713 */;
import FeedbackOverrideStore from "FeedbackOverrideStore" /* 16624 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;

require = fn;
function optOutEligibilityCheck(hotspot) {
  _require = hotspot;
  const InAppFeedbackStates = require("UserSettings").InAppFeedbackStates;
  const tmp3 = InAppFeedbackStates.getSetting()[hotspot.feedbackType];
  optOutExpiryTime = undefined;
  if (tmp3 != null) {
    optOutExpiryTime = tmp3.optOutExpiryTime;
  }
  let tmp5 = null != optOutExpiryTime;
  if (tmp5) {
    const _Number = Number;
    tmp5 = !Number.isNaN(optOutExpiryTime);
  }
  if (tmp5) {
    const _Date = Date;
    tmp5 = Date.now() < optOutExpiryTime;
  }
  const hasHotspotResult = HotspotStore.hasHotspot(hotspot.hotspot);
  let tmp10 = tmp9;
  if (!hasHotspotResult) {
    tmp10 = !tmp5;
  }
  if (tmp10) {
    const InAppFeedbackStates2 = require("UserSettings").InAppFeedbackStates;
    InAppFeedbackStates2.updateSetting((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const obj2 = {};
      const merged1 = Object.assign(arg0[hotspot.feedbackType]);
      obj2.optOutExpiryTime = optOutExpiryTime;
      obj[hotspot.feedbackType] = obj2;
      return obj;
    });
  }
  let tmp12 = !tmp5;
  if (!tmp5) {
    tmp12 = !tmp9;
  }
  return tmp12;
}
function triggerRateEligibilityCheck(chance) {
  return Math.random() < chance.chance;
}
function recencyEligibilityCheck(cooldown, storageKey) {
  const InAppFeedbackStates = UserSettings.InAppFeedbackStates;
  const tmp3 = InAppFeedbackStates.getSetting()[storageKey.feedbackType];
  let lastImpressionTime;
  if (tmp3 != null) {
    lastImpressionTime = tmp3.lastImpressionTime;
  }
  c1 = undefined;
  let isNaNResult = null != lastImpressionTime;
  if (isNaNResult) {
    const _Number = Number;
    isNaNResult = !Number.isNaN(lastImpressionTime);
  }
  if (!isNaNResult) {
    isNaNResult = null == storageKey.storageKey;
  }
  let tmp7;
  if (!isNaNResult) {
    const Storage = Storage2.Storage;
    value = Storage.get(storageKey.storageKey);
    c1 = value;
    isNaNResult = null == value;
    tmp7 = value;
  }
  if (!isNaNResult) {
    const _Number2 = Number;
    isNaNResult = Number.isNaN(tmp7);
  }
  if (!isNaNResult) {
    const InAppFeedbackStates2 = UserSettings.InAppFeedbackStates;
    InAppFeedbackStates2.updateSetting((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const obj2 = {};
      const merged1 = Object.assign(arg0[storageKey.feedbackType]);
      obj2.lastImpressionTime = lastImpressionTime;
      obj[storageKey.feedbackType] = obj2;
      return obj;
    });
  }
  const items = [lastImpressionTime, tmp7];
  let num = _mod12.max(items);
  if (num == null) {
    num = 0;
  }
  const sum = num + cooldown.cooldown;
  return sum < Date.now();
}
function groupRecencyEligibilityCheck(cooldown) {
  const group = cooldown;
  const values = Object.values(FeedbackConfig.FeedbackConfig);
  const found = values.filter((group) => group.group === group.group);
  const obj = found[Symbol.iterator]();
  while (obj !== undefined) {
    if (recencyEligibilityCheck(cooldown, tmp2)) {
      continue;
    } else {
      obj.return();
      let flag = false;
      return false;
    }
  }
  return true;
}
const Constants = fn(11249);
({ FeedbackTypePrecedence: closure_4, MAX_REPRESENTABLE_DATE: hasOwnProperty } = Constants);
class FeedbackManager extends tmp3 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.feedbackTypeToShow = null;
    obj = closure_0(closure_1[6]);
    applyArgumentsResult.showFeedbackModalDebounced = obj.debounce((fn, fn2) => {
      if (null != applyArgumentsResult.feedbackTypeToShow) {
        const feedbackTypeToShow = applyArgumentsResult.feedbackTypeToShow;
        const InAppFeedbackStates = UserSettings.InAppFeedbackStates;
        InAppFeedbackStates.updateSetting((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          const obj2 = {};
          const merged1 = Object.assign(arg0[feedbackTypeToShow]);
          obj2.lastImpressionTime = Date.now();
          obj[feedbackTypeToShow] = obj2;
          return obj;
        });
        applyArgumentsResult.feedbackTypeToShow = null;
        fn();
      } else if (fn2 != null) {
        fn2();
      }
    }, 200);
    return applyArgumentsResult;
  }
}
FeedbackManager.prototype["possiblyShowFeedbackModal"] = function possiblyShowFeedbackModal(ACTIVITY, arg1, fn) {
  let feedbackConfig = FeedbackOverrideStore.getFeedbackConfig(ACTIVITY);
  if (feedbackConfig == null) {
    feedbackConfig = FeedbackConfig.FeedbackConfig[ACTIVITY];
  }
  let eligibilityChecks = feedbackConfig.eligibilityChecks;
  if (eligibilityChecks == null) {
    eligibilityChecks = [];
  }
  const items = [triggerRateEligibilityCheck, optOutEligibilityCheck, groupRecencyEligibilityCheck];
  if (!tmp4) {
    if (fn != null) {
      fn();
    }
  } else {
    const self = this;
    self.feedbackTypeToShow = ACTIVITY;
    const result = self.showFeedbackModalDebounced(arg1, fn);
  }
  tmp4 = items.every((fn) => fn(feedbackConfig)) && eligibilityChecks.every((fn) => fn(feedbackConfig));
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/feedback/FeedbackManager.tsx");

export default FeedbackManager;