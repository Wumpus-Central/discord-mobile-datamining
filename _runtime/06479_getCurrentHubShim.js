// _runtime/06479_getCurrentHubShim.js
const require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = callback(6398).getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: require(6398) /* getClient */.withScope,
    getClient() {
      return callback(6398).getClient();
    },
    getScope: require(6398) /* getClient */.getCurrentScope,
    getIsolationScope: require(6398) /* getClient */.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = callback(6398).getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = callback(6398).getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: require(6419) /* _flush */.captureEvent,
    addBreadcrumb: require(6444) /* addBreadcrumb */.addBreadcrumb,
    setUser: require(6419) /* _flush */.setUser,
    setTags: require(6419) /* _flush */.setTags,
    setTag: require(6419) /* _flush */.setTag,
    setExtra: require(6419) /* _flush */.setExtra,
    setExtras: require(6419) /* _flush */.setExtras,
    setContext: require(6419) /* _flush */.setContext,
    getIntegration(id) {
      const client = callback(6398).getClient();
      let integrationByName = client;
      if (client) {
        integrationByName = client.getIntegrationByName(id.id);
      }
      if (!integrationByName) {
        integrationByName = null;
      }
      return integrationByName;
    },
    startSession: require(6419) /* _flush */.startSession,
    endSession: require(6419) /* _flush */.endSession,
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