// === Module 16635: FeedbackOverrideStore ===

// Module 16635 (FeedbackOverrideStore)
import get_initializedDefault from "get initialized" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import FeedbackConfig from "FeedbackConfig" /* 16636 */;
import size from "module_2" /* 2 */;

const React2 = {};
const Store = get_initializedDefault.Store;
class HotspotStore extends Store {
  initialize() {

  }
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
  }
};
const hotspotStore = new HotspotStore(DispatcherDefault, obj);
const result = size.fileFinishedImporting("modules/feedback/FeedbackOverrideStore.tsx");

export default hotspotStore;