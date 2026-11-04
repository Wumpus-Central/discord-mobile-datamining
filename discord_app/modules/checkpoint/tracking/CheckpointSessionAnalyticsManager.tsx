// discord_app/modules/checkpoint/tracking/CheckpointSessionAnalyticsManager.tsx
import v1 from "../../../../_runtime/01266_v1.js";
import CheckpointStore from "../CheckpointStore.tsx";

require = fn;
class CheckpointSessionAnalyticsManager {
  constructor() {
    return Object.assign({ sessionId: null, didPlayerShareDataWithDiscord: false, stepName: null });
  }
}
const prototype = CheckpointSessionAnalyticsManager.prototype;
prototype["initialize"] = function initialize(didPlayerShareDataWithDiscord) {
  this.sessionId = v1.v4();
  this.didPlayerShareDataWithDiscord = didPlayerShareDataWithDiscord;
  this.stepName = null;
};
prototype["setStepName"] = function setStepName(stepName) {
  this.stepName = stepName;
};
prototype["getStepName"] = function getStepName() {
  return this.stepName;
};
prototype["getAnalyticsProperties"] = function getAnalyticsProperties() {
  const obj = { checkpoint_session_id: this.sessionId, has_personalized_data: null };
  let didPlayerShareDataWithDiscord = this.didPlayerShareDataWithDiscord;
  if (didPlayerShareDataWithDiscord) {
    didPlayerShareDataWithDiscord = null != CheckpointStore.stats;
  }
  obj.has_personalized_data = didPlayerShareDataWithDiscord;
  return obj;
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/tracking/CheckpointSessionAnalyticsManager.tsx");

export default Object.assign({ sessionId: null, didPlayerShareDataWithDiscord: false, stepName: null });
