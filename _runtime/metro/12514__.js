// === Module 12514: ? ===

// Module 12514
import _mod12433 from "module_12433" /* 12433 */;
import _flush from "_flush" /* 12454 */;
import _mod12479 from "module_12479" /* 12479 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod12433.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12433.withScope,
    getClient() {
      return _mod12433.getClient();
    },
    getScope: _mod12433.getCurrentScope,
    getIsolationScope: _mod12433.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod12433.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod12433.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod12479.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod12433.getClient();
      let integrationByName = client;
      if (client) {
        integrationByName = client.getIntegrationByName(id.id);
      }
      if (!integrationByName) {
        integrationByName = null;
      }
      return integrationByName;
    },
    startSession: _flush.startSession,
    endSession: _flush.endSession,
    captureSession(arg0) {
      if (arg0) {
        return _flush.endSession();
      } else {
        const currentScope = _mod12433.getCurrentScope();
        const tmpResult3 = _mod12433;
        const client = _mod12433.getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
        const tmpResult4 = _mod12433;
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };