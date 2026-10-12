// discord_app/modules/conjure/contexts/conjureSmartContextConnection.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConjurePublishActionCreators from "../publish/ConjurePublishActionCreators.tsx";
import conjureProjectSockets from "../connection/conjureProjectSockets.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let result = size.fileFinishedImporting("modules/conjure/contexts/conjureSmartContextConnection.tsx");

export const smartContextFrameHandlers = {
  context_switch(contextSwitch, projectId) {
    projectId = projectId.projectId;
    DispatcherDefault.dispatch({ type: "CONJURE_CHAT_CONTEXT_SWITCH", projectId, contextSwitch });
    if ("reverted" === contextSwitch.status) {
      const result = ConjurePublishActionCreators.refreshPublishedProject(projectId, { isPreview: true });
      result.catch(() => {});
    }
    const obj2 = { type: "CONJURE_CHAT_CONTEXT_SWITCH", projectId, contextSwitch };
  },
  smart_context(enabled, projectId) {
    DispatcherDefault.dispatch({
      type: "CONJURE_SMART_CONTEXT_SET",
      projectId: projectId.projectId,
      enabled: enabled.enabled,
    });
  },
};
export const undoContextSwitch = function undoContextSwitch(arg0, id) {
  closure_0 = id;
  return conjureProjectSockets.sendOnConjureSocket(arg0, "undo context switch", (sendUndoContextSwitch) =>
    sendUndoContextSwitch.sendUndoContextSwitch(closure_0),
  );
};
export const sendSmartContext = function sendSmartContext(arg0, checked) {
  closure_0 = checked;
  return conjureProjectSockets.sendOnConjureSocket(arg0, "smart context", (sendSmartContext) =>
    sendSmartContext.sendSmartContext(closure_0),
  );
};
