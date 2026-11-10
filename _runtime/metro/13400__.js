// === Module 13400: ? ===

// Module 13400
import _mod13319 from "module_13319" /* 13319 */;
import _flush from "_flush" /* 13340 */;
import _mod13365 from "module_13365" /* 13365 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod13319.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13319.withScope,
    getClient() {
      return _mod13319.getClient();
    },
    getScope: _mod13319.getCurrentScope,
    getIsolationScope: _mod13319.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod13319.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod13319.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod13365.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod13319.getClient();
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
        const currentScope = _mod13319.getCurrentScope();
        const tmpResult3 = _mod13319;
        const client = _mod13319.getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
        const tmpResult4 = _mod13319;
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };