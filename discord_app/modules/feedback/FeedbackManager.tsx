// === Module 17559: feedback/FeedbackManager ===

// Module 17559 (feedback/FeedbackManager)
import _mod12 from "module_12" /* 12 */;
import Storage2 from "Storage" /* 510 */;
import UserSettings from "UserSettings" /* 1936 */;
import SearchResultsFeedbackExperiment from "SearchResultsFeedbackExperiment" /* 17561 */;
import HotspotStore from "hotspot/HotspotStore" /* 7324 */;
import RTCConnectionStore from "RTCConnectionStore" /* 4661 */;
import FeedbackOverrideStore from "FeedbackOverrideStore" /* 17560 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7228 */;

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
      obj2 = {};
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
      obj2 = {};
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
  const values = Object.values(obj2);
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
const Constants = fn(11768);
({ FeedbackGroup, FeedbackType, FeedbackTypePrecedence: hasOwnProperty, MAX_REPRESENTABLE_DATE: metroRequire } = Constants);
let obj = { chance: 0.2, cooldown: 86400000 };
let obj2 = {};
const obj3 = {};
let merged = Object.assign(obj);
obj3.group = FeedbackGroup.AV;
obj3.hotspot = fn(7323).HotspotLocations.VOICE_CALL_FEEDBACK;
obj3.storageKey = "lastVoiceFeedback";
obj3.feedbackType = FeedbackType.VOICE;
let items = [
  function voiceEligibilityCheck() {
    if (RTCConnectionStore.getWasEverRtcConnected()) {
      return RTCConnectionStore.getWasEverMultiParticipant();
    } else {
      return true;
    }
  }
];
obj3.eligibilityChecks = items;
obj2[FeedbackType.VOICE] = obj3;
const obj4 = {};
let merged1 = Object.assign(obj);
obj4.group = FeedbackGroup.AV;
obj4.hotspot = fn(7323).HotspotLocations.REPORT_PROBLEM_POST_STREAM;
obj4.storageKey = "lastStreamFeedback";
obj4.feedbackType = FeedbackType.STREAM;
obj2[FeedbackType.STREAM] = obj4;
const obj5 = {};
const merged2 = Object.assign(obj);
obj5.group = FeedbackGroup.AV;
obj5.hotspot = fn(7323).HotspotLocations.VIDEO_BACKGROUND_FEEDBACK;
obj5.storageKey = "lastVideoBackgroundFeedback";
obj5.feedbackType = FeedbackType.VIDEO_BACKGROUND;
obj2[FeedbackType.VIDEO_BACKGROUND] = obj5;
obj2[FeedbackType.ACTIVITY] = { cooldown: 0, chance: 0.5, group: FeedbackGroup.AV, hotspot: fn(7323).HotspotLocations.POST_ACTIVITY_FEEDBACK, storageKey: "lastActivityFeedback", feedbackType: FeedbackType.ACTIVITY };
const obj6 = { cooldown: 0, chance: 0.5, group: FeedbackGroup.AV, hotspot: fn(7323).HotspotLocations.POST_ACTIVITY_FEEDBACK, storageKey: "lastActivityFeedback", feedbackType: FeedbackType.ACTIVITY };
obj2[FeedbackType.IN_APP_REPORTS] = { cooldown: 172800000, chance: 0.5, group: FeedbackGroup.SAFETY, hotspot: fn(7323).HotspotLocations.IN_APP_REPORTS_FEEDBACK, storageKey: "inAppReportsFeedback", feedbackType: FeedbackType.IN_APP_REPORTS };
const obj8 = {};
const merged3 = Object.assign(obj);
obj8.group = FeedbackGroup.SEARCH;
obj8.hotspot = fn(7323).HotspotLocations.SEARCH_RESULTS_FEEDBACK;
obj8.storageKey = "searchResultsFeedback";
obj8.feedbackType = FeedbackType.SEARCH_RESULTS;
const items1 = [
  function searchResultsEligibilityCheck() {
    return SearchResultsFeedbackExperiment.getIsSearchResultsFeedbackExperimentEnabled({ location: "FeedbackManager" });
  }
];
obj8.eligibilityChecks = items1;
obj2[FeedbackType.SEARCH_RESULTS] = obj8;
const obj7 = { cooldown: 172800000, chance: 0.5, group: FeedbackGroup.SAFETY, hotspot: fn(7323).HotspotLocations.IN_APP_REPORTS_FEEDBACK, storageKey: "inAppReportsFeedback", feedbackType: FeedbackType.IN_APP_REPORTS };
obj2[FeedbackType.VIBEGRATIONS] = { cooldown: 3600000, chance: 1, group: FeedbackGroup.BUILDER, hotspot: fn(7323).HotspotLocations.VIBEGRATIONS_FEEDBACK, storageKey: "lastVibegrationsFeedback", feedbackType: FeedbackType.VIBEGRATIONS };
class FeedbackManager extends tmp7 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.feedbackTypeToShow = null;
    obj = closure_0(closure_1[7]);
    applyArgumentsResult.showFeedbackModalDebounced = obj.debounce((fn, fn2) => {
      if (null != applyArgumentsResult.feedbackTypeToShow) {
        const feedbackTypeToShow = applyArgumentsResult.feedbackTypeToShow;
        const InAppFeedbackStates = UserSettings.InAppFeedbackStates;
        InAppFeedbackStates.updateSetting((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj2 = {};
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
    feedbackConfig = obj2[ACTIVITY];
  }
  let eligibilityChecks = feedbackConfig.eligibilityChecks;
  if (eligibilityChecks == null) {
    eligibilityChecks = [];
  }
  const items = [triggerRateEligibilityCheck, optOutEligibilityCheck, groupRecencyEligibilityCheck];
  if (!tmp3) {
    if (fn != null) {
      fn();
    }
  } else {
    const self = this;
    self.feedbackTypeToShow = ACTIVITY;
    const result = self.showFeedbackModalDebounced(arg1, fn);
  }
  tmp3 = items.every((fn) => fn(feedbackConfig)) && eligibilityChecks.every((fn) => fn(feedbackConfig));
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/feedback/FeedbackManager.tsx");

export default FeedbackManager;
export const FeedbackConfig = obj2;