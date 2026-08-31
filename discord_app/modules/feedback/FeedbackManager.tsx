// discord_app/modules/feedback/FeedbackManager.tsx
import apply from "../../../_runtime/00012_apply.js";
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import useIsSearchResultsFeedbackExperimentEnabled from "../search/experiments/SearchResultsFeedbackExperiment.tsx";
import closure_2 from "../hotspot/HotspotStore.tsx";
import closure_3 from "../../stores/RTCConnectionStore.tsx";
import closure_4 from "FeedbackOverrideStore.tsx";
import FeedbackRating from "Constants.tsx";

require = arg1;
function optOutEligibilityCheck(hotspot) {
  const _require = hotspot;
  const InAppFeedbackStates = require("../user_settings/UserSettings.tsx").InAppFeedbackStates;
  const tmp3 = InAppFeedbackStates.getSetting()[hotspot.feedbackType];
  let optOutExpiryTime;
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
  const hasHotspotResult = closure_2.hasHotspot(hotspot.hotspot);
  let tmp10 = tmp9;
  if (!hasHotspotResult) {
    tmp10 = !tmp5;
  }
  if (tmp10) {
    const InAppFeedbackStates2 = require("../user_settings/UserSettings.tsx").InAppFeedbackStates;
    InAppFeedbackStates2.updateSetting((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj = {};
      const merged1 = Object.assign(arg0[hotspot.feedbackType]);
      obj.optOutExpiryTime = closure_1_6;
      obj[hotspot.feedbackType] = obj;
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
  const _require = storageKey;
  const InAppFeedbackStates = require("../user_settings/UserSettings.tsx").InAppFeedbackStates;
  const tmp3 = InAppFeedbackStates.getSetting()[storageKey.feedbackType];
  let lastImpressionTime;
  if (tmp3 != null) {
    lastImpressionTime = tmp3.lastImpressionTime;
  }
  dependencyMap = undefined;
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
    const Storage = tmp(595).Storage;
    const value = Storage.get(storageKey.storageKey);
    dependencyMap = value;
    isNaNResult = null == value;
    tmp7 = value;
  }
  if (!isNaNResult) {
    const _Number2 = Number;
    isNaNResult = Number.isNaN(tmp7);
  }
  if (!isNaNResult) {
    const InAppFeedbackStates2 = tmp(4136).InAppFeedbackStates;
    InAppFeedbackStates2.updateSetting((arg0) => {
      obj = {};
      const merged = Object.assign(arg0);
      obj = {};
      const merged1 = Object.assign(arg0[storageKey.feedbackType]);
      obj.lastImpressionTime = c1;
      obj[storageKey.feedbackType] = obj;
      return obj;
    });
  }
  const items = [lastImpressionTime, tmp7];
  let num = require("../../../_runtime/00012_apply.js").max(items);
  if (num == null) {
    num = 0;
  }
  const sum = num + cooldown.cooldown;
  return sum < Date.now();
}
function groupRecencyEligibilityCheck(cooldown) {
  closure_0 = cooldown;
  const values = Object.values(obj);
  const found = values.filter((group) => group.group === group.group);
  obj = found[Symbol.iterator]();
  while (obj !== undefined) {
    let tmp3 = recencyEligibilityCheck;
    if (recencyEligibilityCheck(cooldown, tmp2)) {
      continue;
    } else {
      let tmp4 = obj;
      obj.return();
      let flag = false;
      return false;
    }
  }
  return true;
}
({ FeedbackGroup, FeedbackType, FeedbackTypePrecedence: c5, MAX_REPRESENTABLE_DATE: closure_6 } = FeedbackRating);
let obj = { chance: 0.2, cooldown: 86400000 };
obj = {};
obj = {};
let merged = Object.assign(obj);
obj.group = FeedbackGroup.AV;
obj.hotspot = require("HotspotStore").HotspotLocations.VOICE_CALL_FEEDBACK;
obj.storageKey = "lastVoiceFeedback";
obj.feedbackType = FeedbackType.VOICE;
let items = [
  function voiceEligibilityCheck() {
    if (wasEverRtcConnected.getWasEverRtcConnected()) {
      return obj.getWasEverMultiParticipant();
    } else {
      return true;
    }
    obj = wasEverRtcConnected;
  }
];
obj.eligibilityChecks = items;
obj[FeedbackType.VOICE] = obj;
const obj1 = {};
let merged1 = Object.assign(obj);
obj1.group = FeedbackGroup.AV;
obj1.hotspot = require("HotspotStore").HotspotLocations.REPORT_PROBLEM_POST_STREAM;
obj1.storageKey = "lastStreamFeedback";
obj1.feedbackType = FeedbackType.STREAM;
obj[FeedbackType.STREAM] = obj1;
const obj2 = {};
const merged2 = Object.assign(obj);
obj2.group = FeedbackGroup.AV;
obj2.hotspot = require("HotspotStore").HotspotLocations.VIDEO_BACKGROUND_FEEDBACK;
obj2.storageKey = "lastVideoBackgroundFeedback";
obj2.feedbackType = FeedbackType.VIDEO_BACKGROUND;
obj[FeedbackType.VIDEO_BACKGROUND] = obj2;
obj[FeedbackType.ACTIVITY] = { cooldown: 0, chance: 0.5, group: FeedbackGroup.AV, hotspot: require("HotspotStore").HotspotLocations.POST_ACTIVITY_FEEDBACK, storageKey: "lastActivityFeedback", feedbackType: FeedbackType.ACTIVITY };
const obj3 = { cooldown: 0, chance: 0.5, group: FeedbackGroup.AV, hotspot: require("HotspotStore").HotspotLocations.POST_ACTIVITY_FEEDBACK, storageKey: "lastActivityFeedback", feedbackType: FeedbackType.ACTIVITY };
obj[FeedbackType.IN_APP_REPORTS] = { cooldown: 172800000, chance: 0.5, group: FeedbackGroup.SAFETY, hotspot: require("HotspotStore").HotspotLocations.IN_APP_REPORTS_FEEDBACK, storageKey: "inAppReportsFeedback", feedbackType: FeedbackType.IN_APP_REPORTS };
const obj5 = {};
const merged3 = Object.assign(obj);
obj5.group = FeedbackGroup.SEARCH;
obj5.hotspot = require("HotspotStore").HotspotLocations.SEARCH_RESULTS_FEEDBACK;
obj5.storageKey = "searchResultsFeedback";
obj5.feedbackType = FeedbackType.SEARCH_RESULTS;
const items1 = [
  function searchResultsEligibilityCheck() {
    return useIsSearchResultsFeedbackExperimentEnabled.getIsSearchResultsFeedbackExperimentEnabled({ location: "FeedbackManager" });
  }
];
obj5.eligibilityChecks = items1;
obj[FeedbackType.SEARCH_RESULTS] = obj5;
const obj4 = { cooldown: 172800000, chance: 0.5, group: FeedbackGroup.SAFETY, hotspot: require("HotspotStore").HotspotLocations.IN_APP_REPORTS_FEEDBACK, storageKey: "inAppReportsFeedback", feedbackType: FeedbackType.IN_APP_REPORTS };
obj[FeedbackType.VIBEGRATIONS] = { cooldown: 3600000, chance: 1, group: FeedbackGroup.BUILDER, hotspot: require("HotspotStore").HotspotLocations.VIBEGRATIONS_FEEDBACK, storageKey: "lastVibegrationsFeedback", feedbackType: FeedbackType.VIBEGRATIONS };
initializeDefault;
class FeedbackManager extends tmp7 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.feedbackTypeToShow = null;
    obj = require("apply");
    applyArgumentsResult.showFeedbackModalDebounced = obj.debounce((arg0, arg1) => {
      if (null != feedbackTypeToShow.feedbackTypeToShow) {
        feedbackTypeToShow = tmp.feedbackTypeToShow;
        const InAppFeedbackStates = applyArgumentsResult(closure_1_1[5]).InAppFeedbackStates;
        InAppFeedbackStates.updateSetting((arg0) => {
          obj = {};
          const merged = Object.assign(arg0);
          obj = {};
          const merged1 = Object.assign(arg0[feedbackTypeToShow]);
          obj.lastImpressionTime = Date.now();
          obj[feedbackTypeToShow] = obj;
          return obj;
        });
        tmp.feedbackTypeToShow = null;
        arg0();
      } else if (arg1 != null) {
        arg1();
      }
    }, 200);
    return applyArgumentsResult;
  }
}
FeedbackManager.prototype["possiblyShowFeedbackModal"] = function possiblyShowFeedbackModal(ACTIVITY, arg1) {
  feedbackConfig = feedbackConfig.getFeedbackConfig(ACTIVITY);
  if (feedbackConfig == null) {
    feedbackConfig = obj[ACTIVITY];
  }
  let eligibilityChecks = feedbackConfig.eligibilityChecks;
  if (eligibilityChecks == null) {
    eligibilityChecks = [];
  }
  const items = [triggerRateEligibilityCheck, optOutEligibilityCheck, groupRecencyEligibilityCheck];
  if (!tmp3) {
    if (arg2 != null) {
      arg2();
    }
  } else {
    const self = this;
    self.feedbackTypeToShow = ACTIVITY;
    const result = self.showFeedbackModalDebounced(arg1, arg2);
  }
};
const obj6 = { cooldown: 3600000, chance: 1, group: FeedbackGroup.BUILDER, hotspot: require("HotspotStore").HotspotLocations.VIBEGRATIONS_FEEDBACK, storageKey: "lastVibegrationsFeedback", feedbackType: FeedbackType.VIBEGRATIONS };
let result = require("set").fileFinishedImporting("modules/feedback/FeedbackManager.tsx");

export default FeedbackManager;
export const FeedbackConfig = obj;