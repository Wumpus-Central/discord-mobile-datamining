// discord_app/modules/feedback/FeedbackOverrideStore.tsx
import get_initializedDefault from "../../../discord_common/js/packages/flux/index.tsx";
import DispatcherDefault from "../../Dispatcher.tsx";
import FeedbackConfig from "FeedbackConfig.tsx";
import size from "../../../_runtime/metro/00002__.js";

const React2 = {};
const Store = get_initializedDefault.Store;
class HotspotStore extends Store {
  initialize() {}
  getFeedbackConfig(ACTIVITY) {
    return closure_2[ACTIVITY];
  }
}
const prototype = HotspotStore.prototype;
HotspotStore.displayName = "FeedbackOverrideStore";
HotspotStore.persistKey = "feedbackOverrides";
let obj = {
  FEEDBACK_OVERRIDE_SET: function handleSetFeedbackOverride(feedbackType) {
    let chance;
    let cooldown;
    feedbackType = feedbackType.feedbackType;
    const obj = { cooldown, chance };
    ({ cooldown, chance } = feedbackType);
    const merged = Object.assign(FeedbackConfig.FeedbackConfig[feedbackType]);
    closure_2[feedbackType] = obj;
  },
  FEEDBACK_OVERRIDE_CLEAR: function handleClearFeedbackOverride(arg0) {
    delete closure_2[arg0.feedbackType];
  },
};
const hotspotStore = new HotspotStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/feedback/FeedbackOverrideStore.tsx");

export default hotspotStore;
