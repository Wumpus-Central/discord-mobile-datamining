// === Module 12909: ? ===

// Module 12909
import _mod12828 from "module_12828" /* 12828 */;
import _flush from "_flush" /* 12849 */;
import _mod12874 from "module_12874" /* 12874 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod12828.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12828.withScope,
    getClient() {
      return _mod12828.getClient();
    },
    getScope: _mod12828.getCurrentScope,
    getIsolationScope: _mod12828.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod12828.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod12828.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod12874.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod12828.getClient();
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
        tmpResult = _mod12828;
        const currentScope = tmpResult.getCurrentScope();
        const client = _mod12828.getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
        const tmpResult1 = _mod12828;
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };