// === Module 19706: ConjureProjectReconnectManager ===

// Module 19706 (ConjureProjectReconnectManager)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 7014 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11054 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6979 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7423 */;

require = fn;
function handlePostConnectionOpen() {
  let result = ConjureProjectStore.isReconnectListPending();
  if (result) {
    result = ConjureGuildExperiment.hasConjureGuildWithoutExposure("ConjureProjectReconnectManager");
  }
  if (result) {
    const result1 = ConjureActionCreators.refetchProjectsAfterReconnect();
  }
}
const prototype = function ConjureProjectReconnectManager() {
  const applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = { POST_CONNECTION_OPEN: handlePostConnectionOpen };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
const prototype1 = new prototype();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/ConjureProjectReconnectManager.tsx");

export default prototype1;