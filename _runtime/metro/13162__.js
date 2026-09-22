// === Module 13162: ? ===

// Module 13162
import _mod13081 from "module_13081" /* 13081 */;
import _flush from "_flush" /* 13102 */;
import _mod13127 from "module_13127" /* 13127 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod13081.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13081.withScope,
    getClient() {
      return _mod13081.getClient();
    },
    getScope: _mod13081.getCurrentScope,
    getIsolationScope: _mod13081.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod13081.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod13081.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod13127.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod13081.getClient();
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
        const currentScope = _mod13081.getCurrentScope();
        const tmpResult3 = _mod13081;
        const client = _mod13081.getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
        const tmpResult4 = _mod13081;
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };