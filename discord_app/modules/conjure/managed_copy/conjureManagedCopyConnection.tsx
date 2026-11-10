// === Module 11032: conjureManagedCopyConnection ===

// Module 11032 (conjureManagedCopyConnection)
import DispatcherDefault from "Dispatcher" /* 572 */;
import conjureProjectSockets from "conjureProjectSockets" /* 11004 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/managed_copy/conjureManagedCopyConnection.tsx");

export const managedCopyFrameHandlers = {
  copy_state(event, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_COPY_STATE_SET", projectId: projectId.projectId, event });
  },
  copy_sync(event, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_COPY_SYNC_SET", projectId: projectId.projectId, event });
  },
  downstream_updates(event, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_DOWNSTREAM_UPDATES_SET", projectId: projectId.projectId, event });
  }
};
export function setConjureDownstreamUpdates(projectId, enabled) {
  closure_0 = enabled;
  const sendOnConjureSocketResult = conjureProjectSockets.sendOnConjureSocket(projectId, "downstream updates", (sendDownstreamUpdates) => sendDownstreamUpdates.sendDownstreamUpdates(closure_0));
  if (sendOnConjureSocketResult) {
    const obj3 = { type: "CONJURE_DOWNSTREAM_UPDATES_REQUEST", projectId, enabled };
    DispatcherDefault.dispatch(obj3);
  }
  return sendOnConjureSocketResult;
}