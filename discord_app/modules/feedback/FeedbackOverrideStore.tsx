// === Module 17351: FeedbackOverrideStore ===

// Module 17351 (FeedbackOverrideStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 573 */;
import feedback_FeedbackManager from "feedback/FeedbackManager" /* 17350 */;

require = fn;
let closure_2 = {};
const Store = initializeDefault.Store;
class HotspotStore extends Store {
}
const prototype = HotspotStore.prototype;
prototype["initialize"] = function initialize() {

};
prototype["getFeedbackConfig"] = function getFeedbackConfig(ACTIVITY) {
  return closure_2[ACTIVITY];
};
HotspotStore.displayName = "FeedbackOverrideStore";
HotspotStore.persistKey = "feedbackOverrides";
const hotspotStore = new HotspotStore(DispatcherDefault, {
  FEEDBACK_OVERRIDE_SET: function handleSetFeedbackOverride(feedbackType) {
    feedbackType = feedbackType.feedbackType;
    const obj = {};
    ({ cooldown, chance } = feedbackType);
    const merged = Object.assign(feedback_FeedbackManager.FeedbackConfig[feedbackType]);
    obj.cooldown = cooldown;
    obj.chance = chance;
    closure_2[feedbackType] = obj;
  },
  FEEDBACK_OVERRIDE_CLEAR: function handleClearFeedbackOverride(arg0) {
    delete tmp[tmp2];
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/feedback/FeedbackOverrideStore.tsx");

export default hotspotStore;