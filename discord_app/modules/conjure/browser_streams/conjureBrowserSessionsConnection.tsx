// === Module 11023: conjureBrowserSessionsConnection ===

// Module 11023 (conjureBrowserSessionsConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureProjectSockets from "conjureProjectSockets" /* 11010 */;
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