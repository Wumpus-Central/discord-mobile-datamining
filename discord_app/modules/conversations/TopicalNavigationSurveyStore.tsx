// discord_app/modules/conversations/TopicalNavigationSurveyStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import size from "../../../_runtime/metro/00002__.js";

const React = 0;
const DeviceSettingsStore = get_initializedDefault.DeviceSettingsStore;
class TopicalNavigationSurveyStore extends DeviceSettingsStore {
  initialize(channelsExposedCount) {
    let num;
    if (channelsExposedCount != null) {
      num = channelsExposedCount.channelsExposedCount;
    }
    if (num == null) {
      num = 0;
    }
    let closure_0 = num;
  }
  shouldTriggerOnNextExposure() {
    return channelsExposedCount >= 2;
  }
  getState() {
    return { channelsExposedCount };
  }
  getUserAgnosticState() {
    return { channelsExposedCount };
  }
}
const prototype = TopicalNavigationSurveyStore.prototype;
TopicalNavigationSurveyStore.displayName = "TopicalNavigationSurveyStore";
TopicalNavigationSurveyStore.persistKey = "TopicalNavigationSurveyStore";
const obj = {
  TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION: function handleTopicalNavigationEntrypointImpression() {
    closure_0 = closure_0 + 1;
  },
};
const topicalNavigationSurveyStore = new TopicalNavigationSurveyStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/conversations/TopicalNavigationSurveyStore.tsx");

export default topicalNavigationSurveyStore;
export const MIN_EXPOSURES_FOR_SURVEY = 3;
