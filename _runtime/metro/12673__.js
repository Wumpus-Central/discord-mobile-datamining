// === Module 12673: ? ===

// Module 12673
import _mod12592 from "module_12592" /* 12592 */;
import _flush from "_flush" /* 12613 */;
import _mod12638 from "module_12638" /* 12638 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod12592.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12592.withScope,
    getClient() {
      return _mod12592.getClient();
    },
    getScope: _mod12592.getCurrentScope,
    getIsolationScope: _mod12592.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod12592.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod12592.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod12638.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod12592.getClient();
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
        const currentScope = _mod12592.getCurrentScope();
        const tmpResult3 = _mod12592;
        const client = _mod12592.getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
        const tmpResult4 = _mod12592;
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };