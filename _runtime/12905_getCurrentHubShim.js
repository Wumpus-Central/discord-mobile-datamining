// === Module 12905: getCurrentHubShim ===

// Module 12905 (getCurrentHubShim)
import getClient from "getClient" /* 12824 */;
import _flush from "_flush" /* 12845 */;
import addBreadcrumb from "addBreadcrumb" /* 12870 */;

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = callback(12824).getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: getClient.withScope,
    getClient() {
      return callback(12824).getClient();
    },
    getScope: getClient.getCurrentScope,
    getIsolationScope: getClient.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = callback(12824).getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = callback(12824).getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: addBreadcrumb.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = callback(12824).getClient();
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
    }
  };
}
arg5.getCurrentHub = getCurrentHubShim;
arg5.getCurrentHubShim = getCurrentHubShim;