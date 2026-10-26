// === Module 12689: ? ===

// Module 12689
import _mod12608 from "module_12608" /* 12608 */;
import _flush from "_flush" /* 12629 */;
import _mod12654 from "module_12654" /* 12654 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod12608.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12608.withScope,
    getClient() {
      return _mod12608.getClient();
    },
    getScope: _mod12608.getCurrentScope,
    getIsolationScope: _mod12608.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod12608.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod12608.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod12654.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod12608.getClient();
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
        const currentScope = _mod12608.getCurrentScope();
        const tmpResult3 = _mod12608;
        const client = _mod12608.getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
        const tmpResult4 = _mod12608;
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };