// _runtime/metro/12403__.js
import _mod12322 from "12322__.js";
import _flush from "../12343__flush.js";
import _mod12368 from "12368__.js";

require = arg1;
const dependencyMap = arg6;
function getCurrentHubShim() {
  return {
    bindClient(arg0) {
      const currentScope = _mod12322.getCurrentScope();
      currentScope.setClient(arg0);
    },
    withScope: _mod12322.withScope,
    getClient() {
      return _mod12322.getClient();
    },
    getScope: _mod12322.getCurrentScope,
    getIsolationScope: _mod12322.getIsolationScope,
    captureException(arg0, arg1) {
      const currentScope = _mod12322.getCurrentScope();
      return currentScope.captureException(arg0, arg1);
    },
    captureMessage(arg0, arg1, arg2) {
      const currentScope = _mod12322.getCurrentScope();
      return currentScope.captureMessage(arg0, arg1, arg2);
    },
    captureEvent: _flush.captureEvent,
    addBreadcrumb: _mod12368.addBreadcrumb,
    setUser: _flush.setUser,
    setTags: _flush.setTags,
    setTag: _flush.setTag,
    setExtra: _flush.setExtra,
    setExtras: _flush.setExtras,
    setContext: _flush.setContext,
    getIntegration(id) {
      const client = _mod12322.getClient();
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
        const currentScope = _mod12322.getCurrentScope();
        const tmpResult3 = _mod12322;
        const client = _mod12322.getClient();
        const session = currentScope.getSession();
        let tmp4 = client;
        if (client) {
          tmp4 = session;
        }
        if (tmp4) {
          client.captureSession(session);
        }
        const tmpResult4 = _mod12322;
      }
    },
  };
}

export const getCurrentHub = getCurrentHubShim;
export { getCurrentHubShim };
