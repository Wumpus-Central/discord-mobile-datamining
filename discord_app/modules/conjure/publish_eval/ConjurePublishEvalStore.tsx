// === Module 13165: ConjurePublishEvalStore ===

// Module 13165 (ConjurePublishEvalStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;

function handleProjectGone(projectId) {
  const pending = closure_1.pending;
  projectId = undefined;
  if (pending != null) {
    projectId = pending.projectId;
  }
  let flag = projectId === projectId.projectId;
  if (flag) {
    closure_1 = { pending: null };
    flag = true;
  }
  return flag;
}
const obj = { pending: null };
let closure_1 = obj;
const PersistedStore = initializeDefault.PersistedStore;
class ConjurePublishEvalStore extends PersistedStore {
}
const prototype = ConjurePublishEvalStore.prototype;
prototype["initialize"] = function initialize(arg0) {
  let tmp = arg0;
  if (arg0 == null) {
    tmp = obj;
  }
  closure_1 = tmp;
};
prototype["getState"] = function getState() {
  return closure_1;
};
prototype["getPending"] = function getPending() {
  return closure_1.pending;
};
ConjurePublishEvalStore.displayName = "ConjurePublishEvalStore";
ConjurePublishEvalStore.persistKey = "ConjurePublishEval";
const conjurePublishEvalStore = new ConjurePublishEvalStore(DispatcherDefault, {
  CONJURE_PUBLISH_EVAL_PENDING: function handlePending(pending) {
    closure_1 = { pending: pending.pending };
    return true;
  },
  CONJURE_PUBLISH_EVAL_SUBMITTED: function handleSubmitted(publishTurnId) {
    const pending = closure_1.pending;
    let flag = null != pending;
    if (flag) {
      flag = pending.projectId === tmp;
    }
    if (flag) {
      flag = pending.publishTurnId === publishTurnId.publishTurnId;
    }
    if (flag) {
      closure_1 = { pending: null };
      flag = true;
    }
    return flag;
  },
  CONJURE_PROJECT_DELETE_SUCCESS: handleProjectGone,
  CONJURE_PUBLISH_EVAL_PROJECT_GONE: handleProjectGone
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish_eval/ConjurePublishEvalStore.tsx");

export default conjurePublishEvalStore;