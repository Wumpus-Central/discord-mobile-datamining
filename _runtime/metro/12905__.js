// _runtime/metro/12905__.js
import _mod12824 from "12824__.js";
import _flush from "../12845__flush.js";
import _mod12870 from "12870__.js";

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod12824.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12824.withScope,
    getClient() {
      return _mod12824.getClient();
    },
    getScope: _mod12824.getCurrentScope,
    getIsolationScope: _mod12824.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod12824.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod12824.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod12870.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod12824.getClient();
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
        let tmpResult = tmp(tmp2[1]);
        return tmpResult.endSession();
      } else {
        tmpResult = tmp(tmp2[0]);
        const currentScope = tmpResult.getCurrentScope();
        const client = tmp(tmp2[0]).getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
      }
    },
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };
