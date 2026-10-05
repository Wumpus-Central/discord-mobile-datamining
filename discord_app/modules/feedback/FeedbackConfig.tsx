// discord_app/modules/feedback/FeedbackConfig.tsx
import HotspotStore from "../hotspot/index.tsx";
import SearchResultsFeedbackExperiment from "../search/experiments/SearchResultsFeedbackExperiment.tsx";
import RTCConnectionStore from "../../stores/RTCConnectionStore.tsx";
import Constants from "Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let FeedbackGroup;
let FeedbackType;
let items;
let items1;
({ FeedbackGroup, FeedbackType } = Constants);
let obj = { chance: 0.2, cooldown: 86400000 };
const obj2 = {};
const VOICE = FeedbackType.VOICE;
const obj3 = {
  group: FeedbackGroup.AV,
  hotspot: HotspotStore.HotspotLocations.VOICE_CALL_FEEDBACK,
  storageKey: "lastVoiceFeedback",
  feedbackType: FeedbackType.VOICE,
  eligibilityChecks: items,
};
const merged = Object.assign(obj);
items = [
  function voiceEligibilityCheck() {
    if (RTCConnectionStore.getWasEverRtcConnected()) {
      return RTCConnectionStore.getWasEverMultiParticipant();
    } else {
      return true;
    }
  },
];
obj2[VOICE] = obj3;
const STREAM = FeedbackType.STREAM;
const obj4 = {
  group: FeedbackGroup.AV,
  hotspot: HotspotStore.HotspotLocations.REPORT_PROBLEM_POST_STREAM,
  storageKey: "lastStreamFeedback",
  feedbackType: FeedbackType.STREAM,
};
const merged1 = Object.assign(obj);
obj2[STREAM] = obj4;
const VIDEO_BACKGROUND = FeedbackType.VIDEO_BACKGROUND;
const obj5 = {
  group: FeedbackGroup.AV,
  hotspot: HotspotStore.HotspotLocations.VIDEO_BACKGROUND_FEEDBACK,
  storageKey: "lastVideoBackgroundFeedback",
  feedbackType: FeedbackType.VIDEO_BACKGROUND,
};
const merged2 = Object.assign(obj);
obj2[VIDEO_BACKGROUND] = obj5;
obj2[FeedbackType.ACTIVITY] = {
  cooldown: 0,
  chance: 0.5,
  group: FeedbackGroup.AV,
  hotspot: HotspotStore.HotspotLocations.POST_ACTIVITY_FEEDBACK,
  storageKey: "lastActivityFeedback",
  feedbackType: FeedbackType.ACTIVITY,
};
({
  cooldown: 0,
  chance: 0.5,
  group: FeedbackGroup.AV,
  hotspot: HotspotStore.HotspotLocations.POST_ACTIVITY_FEEDBACK,
  storageKey: "lastActivityFeedback",
  feedbackType: FeedbackType.ACTIVITY,
});
obj2[FeedbackType.IN_APP_REPORTS] = {
  cooldown: 172800000,
  chance: 0.5,
  group: FeedbackGroup.SAFETY,
  hotspot: HotspotStore.HotspotLocations.IN_APP_REPORTS_FEEDBACK,
  storageKey: "inAppReportsFeedback",
  feedbackType: FeedbackType.IN_APP_REPORTS,
};
const SEARCH_RESULTS = FeedbackType.SEARCH_RESULTS;
const obj8 = {
  group: FeedbackGroup.SEARCH,
  hotspot: HotspotStore.HotspotLocations.SEARCH_RESULTS_FEEDBACK,
  storageKey: "searchResultsFeedback",
  feedbackType: FeedbackType.SEARCH_RESULTS,
  eligibilityChecks: items1,
};
({
  cooldown: 172800000,
  chance: 0.5,
  group: FeedbackGroup.SAFETY,
  hotspot: HotspotStore.HotspotLocations.IN_APP_REPORTS_FEEDBACK,
  storageKey: "inAppReportsFeedback",
  feedbackType: FeedbackType.IN_APP_REPORTS,
});
const merged3 = Object.assign(obj);
items1 = [
  function searchResultsEligibilityCheck() {
    const obj = SearchResultsFeedbackExperiment;
    return obj.getIsSearchResultsFeedbackExperimentEnabled({ location: "FeedbackManager" });
  },
];
obj2[SEARCH_RESULTS] = obj8;
obj2[FeedbackType.VIBEGRATIONS] = {
  cooldown: 3600000,
  chance: 1,
  group: FeedbackGroup.BUILDER,
  hotspot: HotspotStore.HotspotLocations.VIBEGRATIONS_FEEDBACK,
  storageKey: "lastVibegrationsFeedback",
  feedbackType: FeedbackType.VIBEGRATIONS,
};
({
  cooldown: 3600000,
  chance: 1,
  group: FeedbackGroup.BUILDER,
  hotspot: HotspotStore.HotspotLocations.VIBEGRATIONS_FEEDBACK,
  storageKey: "lastVibegrationsFeedback",
  feedbackType: FeedbackType.VIBEGRATIONS,
});
const result = size.fileFinishedImporting("modules/feedback/FeedbackConfig.tsx");

export const FeedbackConfig = obj2;
