// === Module 12688: ? ===

// Module 12688
import _mod12607 from "module_12607" /* 12607 */;
import _mod12628 from "module_12628" /* 12628 */;
import _mod12653 from "module_12653" /* 12653 */;

function getCurrentHubShim() {
  let obj = {
    bindClient(arg0) {
      const obj = _mod12607;
      const currentScope = obj.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12607.withScope,
    getClient() {
      const obj = _mod12607;
      return obj.getClient();
    },
    getScope: _mod12607.getCurrentScope,
    getIsolationScope: _mod12607.getIsolationScope,
    captureException(arg0, arg1) {
      const obj = _mod12607;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const obj = _mod12607;
      const currentScope = obj.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _mod12628.captureEvent,
    addBreadcrumb: _mod12653.addBreadcrumb,
    setUser: _mod12628.setUser,
    setTags: _mod12628.setTags,
    setTag: _mod12628.setTag,
    setExtra: _mod12628.setExtra,
    setExtras: _mod12628.setExtras,
    setContext: _mod12628.setContext,
    getIntegration(id) {
      const obj = _mod12607;
      const client = obj.getClient();
      const integrationByName = client && client.getIntegrationByName(id.id) || null;
      return integrationByName;
    },
    startSession: _mod12628.startSession,
    endSession: _mod12628.endSession,
    captureSession(arg0) {
      const tmp3 = arg0;
      if (tmp3) {
        const tmpResult = _mod12628;
        return tmpResult.endSession();
      } else {
        const tmpResult3 = _mod12607;
        const currentScope = tmpResult3.getCurrentScope();
        const tmpResult4 = _mod12607;
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