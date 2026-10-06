// === Module 17525: feedback/FeedbackManager ===

// Module 17525 (feedback/FeedbackManager)
import _mod12 from "module_12" /* 12 */;
import Storage2 from "Storage" /* 510 */;
import UserSettings from "UserSettings" /* 2028 */;
import FeedbackConfig from "FeedbackConfig" /* 17527 */;
import HotspotStore from "hotspot/HotspotStore" /* 6720 */;
import FeedbackOverrideStore from "FeedbackOverrideStore" /* 17526 */;
import Constants from "Constants" /* 11262 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6620 */;
import size from "module_2" /* 2 */;

let _require, optOutExpiryTime;

let closure_4;
let hasOwnProperty;
function optOutEligibilityCheck(hotspot) {
  _require = hotspot;
  const InAppFeedbackStates = require("UserSettings").InAppFeedbackStates;
  const tmp3 = InAppFeedbackStates.getSetting()[hotspot.feedbackType];
  optOutExpiryTime = undefined;
  const tmp = _require;
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
    const InAppFeedbackStates2 = tmp(2028).InAppFeedbackStates;
    InAppFeedbackStates2.updateSetting((arg0) => {
      const obj = {};
      const merged = Object.assign(arg0);
      const feedbackType = hotspot.feedbackType;
      const obj2 = { optOutExpiryTime: hasOwnProperty };
      const merged1 = Object.assign(arg0[hotspot.feedbackType]);
      obj[feedbackType] = obj2;
      return obj;
    });
  }
  return !tmp5 && !(!hasHotspotResult);
}
function triggerRateEligibilityCheck(chance) {
  return Math.random() < chance.chance;
}
function recencyEligibilityCheck(cooldown, storageKey) {
  let closure_0 = storageKey;
  const InAppFeedbackStates = UserSettings.InAppFeedbackStates;
  const tmp3 = InAppFeedbackStates.getSetting()[storageKey.feedbackType];
  let lastImpressionTime;
  if (tmp3 != null) {
    lastImpressionTime = tmp3.lastImpressionTime;
  }
  let c1;
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
    const value = Storage.get(storageKey.storageKey);
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
      const feedbackType = closure_0.feedbackType;
      const obj2 = { lastImpressionTime };
      const merged1 = Object.assign(arg0[closure_0.feedbackType]);
      obj[feedbackType] = obj2;
      return obj;
    });
  }
  const items = [lastImpressionTime, tmp7];
  const tmpResult = _mod12;
  let num = tmpResult.max(items);
  if (num == null) {
    num = 0;
  }
  const sum = num + cooldown.cooldown;
  return sum < Date.now();
}
function groupRecencyEligibilityCheck(cooldown) {
  let closure_0 = cooldown;
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
({ FeedbackTypePrecedence: closure_4, MAX_REPRESENTABLE_DATE: hasOwnProperty } = Constants);
class FeedbackManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    const require = applyArgumentsResult;
    applyArgumentsResult.feedbackTypeToShow = null;
    let obj = _mod12;
    applyArgumentsResult.showFeedbackModalDebounced = obj.debounce((fn, fn2) => {
      if (null != require.feedbackTypeToShow) {
        const feedbackTypeToShow = require.feedbackTypeToShow;
        const InAppFeedbackStates = UserSettings.InAppFeedbackStates;
        InAppFeedbackStates.updateSetting((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          const obj2 = { lastImpressionTime: Date.now() };
          const merged1 = Object.assign(arg0[feedbackTypeToShow]);
          obj[feedbackTypeToShow] = obj2;
          return obj;
        });
        require.feedbackTypeToShow = null;
        fn();
      } else if (fn2 != null) {
        fn2();
      }
    }, 200);
    return applyArgumentsResult;
  }
  possiblyShowFeedbackModal(ACTIVITY, arg1, fn) {
    let feedbackConfig = FeedbackOverrideStore.getFeedbackConfig(ACTIVITY);
    if (feedbackConfig == null) {
      feedbackConfig = FeedbackConfig.FeedbackConfig[ACTIVITY];
    }
    let eligibilityChecks = feedbackConfig.eligibilityChecks;
    if (eligibilityChecks == null) {
      eligibilityChecks = [];
    }
    const items = [triggerRateEligibilityCheck, optOutEligibilityCheck, groupRecencyEligibilityCheck];
    const tmp4 = items.every((fn) => fn(feedbackConfig)) && eligibilityChecks.every((fn) => fn(feedbackConfig));
    if (!tmp4) {
      if (fn != null) {
        fn();
      }
    } else {
      const self = this;
      self.feedbackTypeToShow = ACTIVITY;
      const result = self.showFeedbackModalDebounced(arg1, fn);
    }
  }
}
const prototype = FeedbackManager.prototype;
let result = size.fileFinishedImporting("modules/feedback/FeedbackManager.tsx");

export default FeedbackManager;