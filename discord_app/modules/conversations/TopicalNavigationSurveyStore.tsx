// === Module 7750: initialize ===

// Module 7750 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;

let c0 = 0;
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class TopicalNavigationSurveyStore extends DeviceSettingsStore {
}
const prototype = TopicalNavigationSurveyStore.prototype;
prototype["initialize"] = function initialize(channelsExposedCount) {
  let num;
  if (channelsExposedCount != null) {
    num = channelsExposedCount.channelsExposedCount;
  }
  if (num == null) {
    num = 0;
  }
};
prototype["shouldTriggerOnNextExposure"] = function shouldTriggerOnNextExposure() {
  return c0 >= 2;
};
prototype["getState"] = function getState() {
  return { channelsExposedCount: c0 };
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return { channelsExposedCount: c0 };
};
TopicalNavigationSurveyStore.displayName = "TopicalNavigationSurveyStore";
TopicalNavigationSurveyStore.persistKey = "TopicalNavigationSurveyStore";
const topicalNavigationSurveyStore = new TopicalNavigationSurveyStore(dispatcherDefault, {
  TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION: function handleTopicalNavigationEntrypointImpression() {
    closure_0 = closure_0 + 1;
  }
});
const result = require("set").fileFinishedImporting("modules/conversations/TopicalNavigationSurveyStore.tsx");

export default topicalNavigationSurveyStore;
export const MIN_EXPOSURES_FOR_SURVEY = 3;