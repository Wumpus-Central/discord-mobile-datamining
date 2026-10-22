// === Module 10702: conjureBrowserSessionsConnection ===

// Module 10702 (conjureBrowserSessionsConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10689 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/conjure/browser_streams/conjureBrowserSessionsConnection.tsx");

export const browserSessionsFrameHandlers = {
  browser_sessions(sessions, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_BROWSER_SESSIONS_SET", projectId: projectId.projectId, sessions: sessions.sessions });
  }
};
export const refreshBrowserSessions = function refreshBrowserSessions(projectId) {
  const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
  if (conjureSocket != null) {
    const result = conjureSocket.sendRefreshBrowserSessions();
  }
};