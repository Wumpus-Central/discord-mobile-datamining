// _runtime/metro/09839__.js
import _mod9758 from "09758__.js";
import _flush from "../09779__flush.js";
import _mod9804 from "09804__.js";

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod9758.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod9758.withScope,
    getClient() {
      return _mod9758.getClient();
    },
    getScope: _mod9758.getCurrentScope,
    getIsolationScope: _mod9758.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod9758.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod9758.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod9804.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod9758.getClient();
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
        const currentScope = _mod9758.getCurrentScope();
        const tmpResult3 = _mod9758;
        const client = _mod9758.getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
        const tmpResult4 = _mod9758;
      }
    },
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };
