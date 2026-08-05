import { getClient } from "07402_getClient.js";
import { _flush } from "07423__flush.js";
import { addBreadcrumb } from "07448_addBreadcrumb.js";
// _runtime/07483_getCurrentHubShim.js
const require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = callback(7402).getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: getClient /* getClient */.withScope,
    getClient() {
      return callback(7402).getClient();
    },
    getScope: getClient /* getClient */.getCurrentScope,
    getIsolationScope: getClient /* getClient */.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = callback(7402).getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = callback(7402).getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush /* _flush */.captureEvent,
    addBreadcrumb: addBreadcrumb /* addBreadcrumb */.addBreadcrumb,
    setUser: _flush /* _flush */.setUser,
    setTags: _flush /* _flush */.setTags,
    setTag: _flush /* _flush */.setTag,
    setExtra: _flush /* _flush */.setExtra,
    setExtras: _flush /* _flush */.setExtras,
    setContext: _flush /* _flush */.setContext,
    getIntegration(id) {
      const client = callback(7402).getClient();
      let integrationByName = client;
      if (client) {
        integrationByName = client.getIntegrationByName(id.id);
      }
      if (!integrationByName) {
        integrationByName = null;
      }
      return integrationByName;
    },
    startSession: _flush /* _flush */.startSession,
    endSession: _flush /* _flush */.endSession,
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