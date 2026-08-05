// _runtime/07483_getCurrentHubShim.js
const require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = callback(7402).getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: require("07402_getClient.js") /* getClient */.withScope,
    getClient() {
      return callback(7402).getClient();
    },
    getScope: require("07402_getClient.js") /* getClient */.getCurrentScope,
    getIsolationScope: require("07402_getClient.js") /* getClient */.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = callback(7402).getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = callback(7402).getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: require("07423__flush.js") /* _flush */.captureEvent,
    addBreadcrumb: require("07448_addBreadcrumb.js") /* addBreadcrumb */.addBreadcrumb,
    setUser: require("07423__flush.js") /* _flush */.setUser,
    setTags: require("07423__flush.js") /* _flush */.setTags,
    setTag: require("07423__flush.js") /* _flush */.setTag,
    setExtra: require("07423__flush.js") /* _flush */.setExtra,
    setExtras: require("07423__flush.js") /* _flush */.setExtras,
    setContext: require("07423__flush.js") /* _flush */.setContext,
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
    startSession: require("07423__flush.js") /* _flush */.startSession,
    endSession: require("07423__flush.js") /* _flush */.endSession,
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