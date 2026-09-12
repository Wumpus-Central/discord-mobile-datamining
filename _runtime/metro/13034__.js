// === Module 13034: ? ===

// Module 13034
import _mod12953 from "module_12953" /* 12953 */;
import _flush from "_flush" /* 12974 */;
import _mod12999 from "module_12999" /* 12999 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod12953.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12953.withScope,
    getClient() {
      return _mod12953.getClient();
    },
    getScope: _mod12953.getCurrentScope,
    getIsolationScope: _mod12953.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod12953.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod12953.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod12999.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod12953.getClient();
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
        let tmpResult = _flush;
        return tmpResult.endSession();
      } else {
        tmpResult = _mod12953;
        const currentScope = tmpResult.getCurrentScope();
        const client = _mod12953.getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
        const tmpResult1 = _mod12953;
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };