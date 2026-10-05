// === Module 12255: useIsApplicationDeveloper ===

// Module 12255 (useIsApplicationDeveloper)
import DeveloperApplicationsConstants from "DeveloperApplicationsConstants" /* 12257 */;
import DeveloperApplicationsActionCreators from "DeveloperApplicationsActionCreators" /* 12258 */;
import react from "react" /* 19 */;
import DeveloperApplicationsStore from "DeveloperApplicationsStore" /* 12256 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const constants = DeveloperApplicationsConstants.DeveloperApplicationsFetchState;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let fetchState;
  let setting;
  let tmp5;
  let tmp6;
  _require = arg0;
  let tmp = _require;
  let obj = require("react");
  const cResult = obj.c(10);
  const DeveloperMode = require("UserSettings").DeveloperMode;
  setting = DeveloperMode.useSetting();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DeveloperApplicationsStore];
    const fn = function n() {
      return fetchState.getFetchState();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = tmp(setting[6]);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [DeveloperApplicationsStore];
    cResult[2] = items1;
  }
  if (cResult[3] !== arg0) {
    class S {
      constructor() {
        return DeveloperApplicationsStore.isDeveloperOfApplication(closure_0);
      }
    }
    cResult[3] = arg0;
    cResult[4] = S;
  } else {
    class S {
      constructor() {
        return DeveloperApplicationsStore.isDeveloperOfApplication(closure_0);
      }
    }
  }
  tmp(setting[6]);
  if (cResult[5] === arg0) {
    class S {
      constructor() {
        return DeveloperApplicationsStore.isDeveloperOfApplication(closure_0);
      }
    }
  }
  class D {
    constructor() {
      const tmp = null != closure_0 && setting && stateFromStores === constants.INITIALIZED;
      if (tmp) {
        const obj = DeveloperApplicationsActionCreators;
        const developerApplications = obj.fetchDeveloperApplications();
      }
    }
  }
  const items2 = [arg0, setting, stateFromStores];
  cResult[5] = arg0;
  cResult[6] = setting;
  cResult[7] = stateFromStores;
  cResult[8] = D;
  cResult[9] = items2;
}) : ((arg0) => {
  let closure_0;
  let fetchState;
  let setting;
  _require = arg0;
  const DeveloperMode = require("UserSettings").DeveloperMode;
  setting = DeveloperMode.useSetting();
  let obj = require("get initialized");
  const items = [DeveloperApplicationsStore];
  const stateFromStores = obj.useStateFromStores(items, () => fetchState.getFetchState());
  const items1 = [DeveloperApplicationsStore];
  const items2 = [arg0, setting, stateFromStores];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items1, () => DeveloperApplicationsStore.isDeveloperOfApplication(closure_0));
  const effect = stateFromStores.useEffect(() => {
    const tmp = null != closure_0 && setting && stateFromStores === constants.INITIALIZED;
    if (tmp) {
      const obj = DeveloperApplicationsActionCreators;
      const developerApplications = obj.fetchDeveloperApplications();
    }
  }, items2);
  return stateFromStores1;
});
const result = size.fileFinishedImporting("modules/applications/useIsApplicationDeveloper.tsx");

export default tmp2;