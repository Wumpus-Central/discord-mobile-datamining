// === Module 19341: ConjureProjectReconnectManager ===

// Module 19341 (ConjureProjectReconnectManager)
import ConjureGuildExperiment from "ConjureGuildExperiment" /* 6538 */;
import ConjureActionCreators from "ConjureActionCreators" /* 6814 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6502 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7364 */;

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