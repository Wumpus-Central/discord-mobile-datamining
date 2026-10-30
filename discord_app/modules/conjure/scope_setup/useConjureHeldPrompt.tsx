// === Module 12544: useConjureHeldPrompt ===

// Module 12544 (useConjureHeldPrompt)
import conjureScopeSetup from "conjureScopeSetup" /* 12545 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ConjureChatStore from "ConjureChatStore" /* 10831 */;
import ConjureConnectionStore from "ConjureConnectionStore" /* 10830 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/scope_setup/useConjureHeldPrompt.tsx");

export function useConjureScopeSetupPending(projectId) {
  _require = projectId;
  const items = [ConjureProjectStore];
  const items1 = [projectId];
  return require("initialize").useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let install_scope_setup;
    if (project != null) {
      install_scope_setup = project.install_scope_setup;
    }
    return null != install_scope_setup;
  }, items1);
}
export function useConjureHeldPrompt(projectId) {
  _require = projectId;
  closure_129_0 = projectId;
  const items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let install_scope_setup;
    if (project != null) {
      install_scope_setup = project.install_scope_setup;
    }
    return null != install_scope_setup;
  }, items1);
  const obj = require("initialize");
  const items2 = [ConjureProjectStore];
  const items3 = [projectId];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => null != ConjureProjectStore.getProject(closure_0), items3);
  const obj2 = require("initialize");
  const items4 = [ConjureChatStore];
  const items5 = [projectId];
  const stateFromStores2 = require("initialize").useStateFromStores(items4, () => ConjureChatStore.hasLoadedHistory(closure_0), items5);
  const obj3 = require("initialize");
  const items6 = [ConjureChatStore];
  const items7 = [projectId];
  const stateFromStores3 = require("initialize").useStateFromStores(items6, () => ConjureChatStore.getMessages(closure_0), items7);
  const obj4 = require("initialize");
  const items8 = [ConjureConnectionStore];
  const items9 = [projectId];
  const stateFromStores4 = require("initialize").useStateFromStores(items8, () => ConjureConnectionStore.getConnState(closure_0), items9);
  const tmp6 = _slicedToArray(noop.useState(0), 2);
  dependencyMap = tmp6[1];
  const items10 = [projectId, stateFromStores1, stateFromStores2, stateFromStores3, stateFromStores, stateFromStores4];
  const layoutEffect = noop.useLayoutEffect(() => {
    const result = conjureScopeSetup.reconcileHeldConjurePrompt(closure_0, () => closure_1_1((arg0) => arg0 + 1));
  }, items10);
  return tmp6[0];
}