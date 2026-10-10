// === Module 11316: ? ===

// Module 11316
import _mod11235 from "module_11235" /* 11235 */;
import _flush from "_flush" /* 11256 */;
import _mod11281 from "module_11281" /* 11281 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod11235.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod11235.withScope,
    getClient() {
      return _mod11235.getClient();
    },
    getScope: _mod11235.getCurrentScope,
    getIsolationScope: _mod11235.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod11235.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod11235.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod11281.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod11235.getClient();
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
        const currentScope = _mod11235.getCurrentScope();
        const tmpResult3 = _mod11235;
        const client = _mod11235.getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
        const tmpResult4 = _mod11235;
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };