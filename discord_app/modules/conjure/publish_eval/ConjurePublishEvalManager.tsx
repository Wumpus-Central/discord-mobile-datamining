// discord_app/modules/conjure/publish_eval/ConjurePublishEvalManager.tsx
import conjurePublishEval from "conjurePublishEval.tsx";
import conjurePublishEvalPlatformDefault from "conjurePublishEvalPlatform.native.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

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
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN: handlePostConnectionOpen,
    CONJURE_PUBLISH_EVAL_PENDING: watchNavigation,
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
const prototype1 = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish_eval/ConjurePublishEvalManager.tsx");

export default prototype1;
