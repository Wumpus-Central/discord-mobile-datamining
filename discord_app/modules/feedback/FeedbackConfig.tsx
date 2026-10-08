// === Module 17809: FeedbackConfig ===

// Module 17809 (FeedbackConfig)
import SearchResultsFeedbackExperiment from "SearchResultsFeedbackExperiment" /* 17810 */;
import RTCConnectionStore from "RTCConnectionStore" /* 5108 */;

require = fn;
const Constants = fn(9602);
({ FeedbackGroup, FeedbackType } = Constants);
const obj = { chance: 0.2, cooldown: 86400000 };
const obj2 = {};
const obj3 = {};
const merged = Object.assign(obj);
obj3.group = FeedbackGroup.AV;
obj3.hotspot = fn(6895).HotspotLocations.VOICE_CALL_FEEDBACK;
obj3.storageKey = "lastVoiceFeedback";
obj3.feedbackType = FeedbackType.VOICE;
const items = [
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
const merged1 = Object.assign(obj);
obj4.group = FeedbackGroup.AV;
obj4.hotspot = fn(6895).HotspotLocations.REPORT_PROBLEM_POST_STREAM;
obj4.storageKey = "lastStreamFeedback";
obj4.feedbackType = FeedbackType.STREAM;
obj2[FeedbackType.STREAM] = obj4;
const obj5 = {};
const merged2 = Object.assign(obj);
obj5.group = FeedbackGroup.AV;
obj5.hotspot = fn(6895).HotspotLocations.VIDEO_BACKGROUND_FEEDBACK;
obj5.storageKey = "lastVideoBackgroundFeedback";
obj5.feedbackType = FeedbackType.VIDEO_BACKGROUND;
obj2[FeedbackType.VIDEO_BACKGROUND] = obj5;
obj2[FeedbackType.ACTIVITY] = { cooldown: 0, chance: 0.5, group: FeedbackGroup.AV, hotspot: fn(6895).HotspotLocations.POST_ACTIVITY_FEEDBACK, storageKey: "lastActivityFeedback", feedbackType: FeedbackType.ACTIVITY };
const obj6 = { cooldown: 0, chance: 0.5, group: FeedbackGroup.AV, hotspot: fn(6895).HotspotLocations.POST_ACTIVITY_FEEDBACK, storageKey: "lastActivityFeedback", feedbackType: FeedbackType.ACTIVITY };
obj2[FeedbackType.IN_APP_REPORTS] = { cooldown: 172800000, chance: 0.5, group: FeedbackGroup.SAFETY, hotspot: fn(6895).HotspotLocations.IN_APP_REPORTS_FEEDBACK, storageKey: "inAppReportsFeedback", feedbackType: FeedbackType.IN_APP_REPORTS };
const obj8 = {};
const merged3 = Object.assign(obj);
obj8.group = FeedbackGroup.SEARCH;
obj8.hotspot = fn(6895).HotspotLocations.SEARCH_RESULTS_FEEDBACK;
obj8.storageKey = "searchResultsFeedback";
obj8.feedbackType = FeedbackType.SEARCH_RESULTS;
const items1 = [
  function searchResultsEligibilityCheck() {
    return SearchResultsFeedbackExperiment.getIsSearchResultsFeedbackExperimentEnabled({ location: "FeedbackManager" });
  }
];
obj8.eligibilityChecks = items1;
obj2[FeedbackType.SEARCH_RESULTS] = obj8;
const obj7 = { cooldown: 172800000, chance: 0.5, group: FeedbackGroup.SAFETY, hotspot: fn(6895).HotspotLocations.IN_APP_REPORTS_FEEDBACK, storageKey: "inAppReportsFeedback", feedbackType: FeedbackType.IN_APP_REPORTS };
obj2[FeedbackType.VIBEGRATIONS] = { cooldown: 3600000, chance: 1, group: FeedbackGroup.BUILDER, hotspot: fn(6895).HotspotLocations.VIBEGRATIONS_FEEDBACK, storageKey: "lastVibegrationsFeedback", feedbackType: FeedbackType.VIBEGRATIONS };
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/FeedbackConfig.tsx");

export const FeedbackConfig = obj2;