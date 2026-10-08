// === Module 12349: useIsApplicationDeveloper ===

// Module 12349 (useIsApplicationDeveloper)
import DeveloperApplicationsActionCreators from "DeveloperApplicationsActionCreators" /* 12352 */;
import noop from "module_19" /* 19 */;
import DeveloperApplicationsStore from "DeveloperApplicationsStore" /* 12350 */;

const require = globalThis.__r;

require = fn;
const constants = fn(12351).DeveloperApplicationsFetchState;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/useIsApplicationDeveloper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsApplicationDeveloper(arg0) {
  _require = arg0;
  const cResult = require("c").c(10);
  const DeveloperMode = require("UserSettings").DeveloperMode;
  setting = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperApplicationsStore];
    const fn = function c() {
      return fetchState.getFetchState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [DeveloperApplicationsStore];
    cResult[2] = items1;
  }
  if (cResult[3] !== arg0) {
    const fn2 = function v() {
      return DeveloperApplicationsStore.isDeveloperOfApplication(closure_0);
    };
    cResult[3] = arg0;
    cResult[4] = fn2;
  }
  require("initialize");
  if (cResult[5] === arg0) {
    if (cResult[6] === setting) {
      if (cResult[7] === stateFromStores) {
        let tmp14 = cResult[8];
        let tmp15 = cResult[9];
      }
      const effect = stateFromStores.useEffect(tmp14, tmp15);
      return tmp13;
    }
  }
  class D {
    constructor() {
      tmp = null != closure_0 && closure_1;
      if (tmp) {
        tmp2 = closure_2;
        tmp3 = closure_4;
        tmp = closure_2 === closure_4.INITIALIZED;
      }
      if (tmp) {
        tmp4 = closure_0;
        tmp5 = closure_1;
        obj = closure_0(closure_1[7]);
        developerApplications = obj.fetchDeveloperApplications();
      }
      return;
    }
  }
  const items2 = [arg0, setting, stateFromStores];
  cResult[5] = arg0;
  cResult[6] = setting;
  cResult[7] = stateFromStores;
  cResult[8] = D;
  cResult[9] = items2;
  tmp15 = items2;
  tmp14 = D;
  const tmpResult = require("initialize");
}) : (function useIsApplicationDeveloper(arg0) {
  _require = arg0;
  const DeveloperMode = require("UserSettings").DeveloperMode;
  setting = DeveloperMode.useSetting();
  const items = [DeveloperApplicationsStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => fetchState.getFetchState());
  let obj = require("initialize");
  const items1 = [DeveloperApplicationsStore];
  const items2 = [arg0, setting, stateFromStores];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => DeveloperApplicationsStore.isDeveloperOfApplication(closure_0));
  const effect = stateFromStores.useEffect(() => {
    let tmp = null != closure_0 && setting;
    if (tmp) {
      tmp = stateFromStores === constants.INITIALIZED;
    }
    if (tmp) {
      const developerApplications = DeveloperApplicationsActionCreators.fetchDeveloperApplications();
    }
  }, items2);
  return stateFromStores1;
});