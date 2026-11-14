// === Module 20204: ConjurePublishEvalManager ===

// Module 20204 (ConjurePublishEvalManager)
import conjurePublishEval from "conjurePublishEval" /* 13164 */;
import conjurePublishEvalPlatformDefault from "conjurePublishEvalPlatform" /* 20205 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7882 */;

require = fn;
function blockingProjectId() {
  const pendingConjurePublishEval = conjurePublishEval.getPendingConjurePublishEval();
  let projectId;
  if (pendingConjurePublishEval != null) {
    projectId = pendingConjurePublishEval.projectId;
  }
  if (projectId == null) {
    projectId = null;
  }
  return projectId;
}
function watchNavigation() {
  conjurePublishEvalPlatformDefault.watchNavigation(blockingProjectId);
}
function handlePostConnectionOpen() {
  const pendingConjurePublishEval = conjurePublishEval.getPendingConjurePublishEval();
  let projectId;
  if (pendingConjurePublishEval != null) {
    projectId = pendingConjurePublishEval.projectId;
  }
  if (projectId == null) {
    projectId = null;
  }
  if (null != projectId) {
    conjurePublishEvalPlatformDefault.watchNavigation(blockingProjectId);
    conjurePublishEvalPlatformDefault.openProject(projectId);
  }
}
const prototype = function ConjurePublishEvalManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: handlePostConnectionOpen, CONJURE_PUBLISH_EVAL_PENDING: watchNavigation };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish_eval/ConjurePublishEvalManager.tsx");

export default prototype1;