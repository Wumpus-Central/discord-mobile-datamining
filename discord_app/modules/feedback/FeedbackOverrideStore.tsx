// === Module 16191: initialize ===

// Module 16191 (initialize)
import { Store } from "initialize";

const require = arg1;
let closure_2 = {};
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
const hotspotStore = new HotspotStore(require("dispatcher"), {
  FEEDBACK_OVERRIDE_SET: function handleSetFeedbackOverride(feedbackType) {
    let chance;
    let cooldown;
    feedbackType = feedbackType.feedbackType;
    const obj = {};
    ({ cooldown, chance } = feedbackType);
    const merged = Object.assign(require(16190) /* optOutEligibilityCheck */.FeedbackConfig[feedbackType]);
    obj.cooldown = cooldown;
    obj.chance = chance;
    closure_2[feedbackType] = obj;
  },
  FEEDBACK_OVERRIDE_CLEAR: function handleClearFeedbackOverride(arg0) {
    delete tmp[tmp2];
  }
});
const result = require("dispatcher").fileFinishedImporting("modules/feedback/FeedbackOverrideStore.tsx");

export default hotspotStore;