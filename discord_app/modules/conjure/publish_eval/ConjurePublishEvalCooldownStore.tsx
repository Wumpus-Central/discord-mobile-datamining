// === Module 18302: ConjurePublishEvalCooldownStore ===

// Module 18302 (ConjurePublishEvalCooldownStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

let obj = { submittedAt: {} };
const DeviceSettingsStore = initializeDefault.DeviceSettingsStore;
class ConjurePublishEvalCooldownStore extends DeviceSettingsStore {
}
const prototype = ConjurePublishEvalCooldownStore.prototype;
prototype["initialize"] = function initialize(submittedAt) {
  submittedAt = undefined;
  if (submittedAt != null) {
    submittedAt = submittedAt.submittedAt;
  }
  if (submittedAt == null) {
    submittedAt = {};
  }
};
prototype["getSubmittedAt"] = function getSubmittedAt(id1, projectId) {
  let tmp = obj.submittedAt["" + id1 + ":" + projectId];
  if (tmp == null) {
    tmp = null;
  }
  return tmp;
};
prototype["getUserAgnosticState"] = function getUserAgnosticState() {
  return obj;
};
ConjurePublishEvalCooldownStore.displayName = "ConjurePublishEvalCooldownStore";
ConjurePublishEvalCooldownStore.persistKey = "ConjurePublishEvalCooldown";
obj = {
  CONJURE_PUBLISH_EVAL_SUBMITTED: function handleSubmitted(stored) {
    let flag = stored.stored;
    if (flag) {
      obj = { submittedAt: null };
      const obj2 = {};
      const merged = Object.assign(obj.submittedAt);
      const _HermesInternal = HermesInternal;
      const _Date = Date;
      const combined = "" + tmp + ":" + tmp2;
      obj2[combined] = Date.now();
      obj.submittedAt = obj2;
      flag = true;
    }
    return flag;
  }
};
const conjurePublishEvalCooldownStore = new ConjurePublishEvalCooldownStore(DispatcherDefault, obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish_eval/ConjurePublishEvalCooldownStore.tsx");

export default conjurePublishEvalCooldownStore;