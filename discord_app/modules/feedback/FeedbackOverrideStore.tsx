// === Module 16659: initialize ===

// Module 16659 (initialize)
import initializeDefault from "initialize" /* 589 */;
import dispatcherDefault from "dispatcher" /* 709 */;
import optOutEligibilityCheck from "optOutEligibilityCheck" /* 16658 */;

require = arg1;
let closure_2 = {};
const Store = initializeDefault.Store;
class HotspotStore extends Store {
}
const prototype = HotspotStore.prototype;
prototype["initialize"] = function initialize() {

};
prototype["getFeedbackConfig"] = function getFeedbackConfig(ACTIVITY) {
  return table[ACTIVITY];
};
HotspotStore.displayName = "FeedbackOverrideStore";
HotspotStore.persistKey = "feedbackOverrides";
const hotspotStore = new HotspotStore(dispatcherDefault, {
  FEEDBACK_OVERRIDE_SET: function handleSetFeedbackOverride(feedbackType) {
    feedbackType = feedbackType.feedbackType;
    const obj = {};
    ({ cooldown, chance } = feedbackType);
    const merged = Object.assign(optOutEligibilityCheck.FeedbackConfig[feedbackType]);
    obj.cooldown = cooldown;
    obj.chance = chance;
    closure_2[feedbackType] = obj;
  },
  FEEDBACK_OVERRIDE_CLEAR: function handleClearFeedbackOverride(arg0) {
    delete tmp[tmp2];
  }
});
const result = require("set").fileFinishedImporting("modules/feedback/FeedbackOverrideStore.tsx");

export default hotspotStore;