// === Module 12406: ? ===

// Module 12406
import _mod12325 from "module_12325" /* 12325 */;
import _flush from "_flush" /* 12346 */;
import _mod12371 from "module_12371" /* 12371 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod12325.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12325.withScope,
    getClient() {
      return _mod12325.getClient();
    },
    getScope: _mod12325.getCurrentScope,
    getIsolationScope: _mod12325.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod12325.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod12325.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod12371.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod12325.getClient();
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
        const currentScope = _mod12325.getCurrentScope();
        const tmpResult3 = _mod12325;
        const client = _mod12325.getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
        const tmpResult4 = _mod12325;
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };