// === Module 13147: ? ===

// Module 13147
import _mod13066 from "module_13066" /* 13066 */;
import _flush from "_flush" /* 13087 */;
import _mod13112 from "module_13112" /* 13112 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod13066.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod13066.withScope,
    getClient() {
      return _mod13066.getClient();
    },
    getScope: _mod13066.getCurrentScope,
    getIsolationScope: _mod13066.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod13066.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod13066.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod13112.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod13066.getClient();
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
        const currentScope = _mod13066.getCurrentScope();
        const tmpResult3 = _mod13066;
        const client = _mod13066.getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
        const tmpResult4 = _mod13066;
      }
    }
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };