// discord_app/modules/applications/useIsApplicationDeveloper.tsx
import DeveloperApplicationsActionCreators from "DeveloperApplicationsActionCreators.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import DeveloperApplicationsStore from "DeveloperApplicationsStore.tsx";

const require = globalThis.__r;

require = fn;
const constants = fn(12272).DeveloperApplicationsFetchState;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/useIsApplicationDeveloper.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(10);
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
      let obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp5, tmp6);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [DeveloperApplicationsStore];
        cResult[2] = items1;
      }
      if (cResult[3] !== arg0) {
        class S {
          constructor() {
            return closure_3.isDeveloperOfApplication(closure_0);
          }
        }
        cResult[3] = arg0;
        cResult[4] = S;
      } else {
        class S {
          constructor() {
            return closure_3.isDeveloperOfApplication(closure_0);
          }
        }
      }
      require("initialize");
      if (cResult[5] === arg0) {
        class S {
          constructor() {
            return closure_3.isDeveloperOfApplication(closure_0);
          }
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
      const tmpResult = require("initialize");
    }
  : (arg0) => {
      _require = arg0;
      const DeveloperMode = require("UserSettings").DeveloperMode;
      setting = DeveloperMode.useSetting();
      const items = [DeveloperApplicationsStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => fetchState.getFetchState());
      let obj = require("initialize");
      const items1 = [DeveloperApplicationsStore];
      const items2 = [arg0, setting, stateFromStores];
      const stateFromStores1 = require("initialize").useStateFromStores(items1, () =>
        DeveloperApplicationsStore.isDeveloperOfApplication(closure_0),
      );
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
    };
