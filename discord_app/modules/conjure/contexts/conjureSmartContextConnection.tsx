// === Module 10761: conjureSmartContextConnection ===

// Module 10761 (conjureSmartContextConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10677 */;
import ConjurePublishActionCreators from "ConjurePublishActionCreators" /* 10743 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/contexts/conjureSmartContextConnection.tsx");

export const smartContextFrameHandlers = {
  context_switch(contextSwitch, projectId) {
    projectId = projectId.projectId;
    DispatcherDefault.dispatch({ type: "CONJURE_CHAT_CONTEXT_SWITCH", projectId, contextSwitch });
    if ("reverted" === contextSwitch.status) {
      const result = ConjurePublishActionCreators.refreshPublishedProject(projectId, { isPreview: true });
      result.catch(() => {

      });
    }
    const obj2 = { type: "CONJURE_CHAT_CONTEXT_SWITCH", projectId, contextSwitch };
  },
  smart_context(enabled, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_SMART_CONTEXT_SET", projectId: projectId.projectId, enabled: enabled.enabled });
  }
};
export const undoContextSwitch = function undoContextSwitch(projectId, id) {
  closure_0 = id;
  return conjureProjectSockets.sendOnConjureSocket(projectId, "undo context switch", (sendUndoContextSwitch) => sendUndoContextSwitch.sendUndoContextSwitch(closure_0));
};
export const sendSmartContext = function sendSmartContext(projectId, arg1) {
  closure_0 = arg1;
  return conjureProjectSockets.sendOnConjureSocket(projectId, "smart context", (sendSmartContext) => sendSmartContext.sendSmartContext(closure_0));
};