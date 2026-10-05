// === Module 12673: ? ===

// Module 12673
import _mod12592 from "module_12592" /* 12592 */;
import _mod12613 from "module_12613" /* 12613 */;
import _mod12638 from "module_12638" /* 12638 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12592;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12592.withScope,
    getClient() {
      const obj = _mod12592;
      return obj.getClient();
    },
    getScope: _mod12592.getCurrentScope,
    getIsolationScope: _mod12592.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12592;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12592;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12613.captureEvent,
    addBreadcrumb: _mod12638.addBreadcrumb,
    setUser: _mod12613.setUser,
    setTags: _mod12613.setTags,
    setTag: _mod12613.setTag,
    setExtra: _mod12613.setExtra,
    setExtras: _mod12613.setExtras,
    setContext: _mod12613.setContext,
    getIntegration(id) {
      const obj = _mod12592;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12613.startSession,
    endSession: _mod12613.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12613;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12592;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12592;
        const client = tmpResult4.getClient();
        const session = currentScope.getSession();
        const tmp5 = client && session;
        if (tmp5) {
          client.captureSession(session);
        }
      }
    }
  };
  return obj;
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };