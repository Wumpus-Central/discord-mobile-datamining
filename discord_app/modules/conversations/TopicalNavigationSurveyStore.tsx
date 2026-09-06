// discord_app/modules/conversations/TopicalNavigationSurveyStore.tsx
import initializeDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";

const channelsExposedCount = 0;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class TopicalNavigationSurveyStore extends DeviceSettingsStore {}
const prototype = TopicalNavigationSurveyStore.prototype;
prototype["initialize"] = function initialize(channelsExposedCount) {
  let num;
  if (channelsExposedCount != null) {
    num = channelsExposedCount.channelsExposedCount;
  }
  if (num == null) {
    num = 0;
  }
  closure_0 = num;
};
prototype["shouldTriggerOnNextExposure"] = function shouldTriggerOnNextExposure() {
  return closure_0 >= 2;
};
prototype["getState"] = function getState() {
  return { channelsExposedCount };
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { channelsExposedCount };
};
TopicalNavigationSurveyStore.displayName = "TopicalNavigationSurveyStore";
TopicalNavigationSurveyStore.persistKey = "TopicalNavigationSurveyStore";
const topicalNavigationSurveyStore = new TopicalNavigationSurveyStore(DispatcherDefault, {
  TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION: function handleTopicalNavigationEntrypointImpression() {
    closure_0 = closure_0 + 1;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conversations/TopicalNavigationSurveyStore.tsx");

export default topicalNavigationSurveyStore;
export const MIN_EXPOSURES_FOR_SURVEY = 3;
