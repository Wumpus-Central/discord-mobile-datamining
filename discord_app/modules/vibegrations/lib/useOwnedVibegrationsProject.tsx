// discord_app/modules/vibegrations/lib/useOwnedVibegrationsProject.tsx
import useIsOwnedVibegrationsApplicationDefault from "useIsOwnedVibegrationsApplication.tsx";
import VibegrationsProjectStore from "../stores/VibegrationsProjectStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useOwnedVibegrationsProject.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      const cResult = require("c").c(8);
      const tmp4 = useIsOwnedVibegrationsApplicationDefault(arg0, arg1);
      importDefault = tmp4;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [VibegrationsProjectStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === tmp4) {
          let tmp7 = cResult[3];
          let tmp8 = cResult[4];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp7, tmp8);
        if (cResult[5] === tmp4) {
          if (cResult[6] === stateFromStores) {
            let tmp10 = cResult[7];
          }
          return tmp10;
        }
        const obj2 = { isOwned: tmp4, project: stateFromStores };
        cResult[5] = tmp4;
        cResult[6] = stateFromStores;
        cResult[7] = obj2;
        tmp10 = obj2;
        const tmpResult = tmp(504);
      }
      const fn = function c() {
        let result = null;
        if (true === closure_1) {
          result = null;
          if (null != closure_0) {
            result = VibegrationsProjectStore.findProjectByApplicationId(tmp2);
          }
        }
        return result;
      };
      const items1 = [tmp4, arg0];
      cResult[1] = arg0;
      cResult[2] = tmp4;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp8 = items1;
      tmp7 = fn;
      const obj = require("c");
      tmp = _require;
    }
  : (arg0, arg1) => {
      _require = arg0;
      const tmp = useIsOwnedVibegrationsApplicationDefault(arg0, arg1);
      importDefault = tmp;
      const items = [VibegrationsProjectStore];
      const items1 = [tmp, arg0];
      const obj = require("initialize");
      return {
        isOwned: tmp,
        project: require("initialize").useStateFromStores(
          items,
          () => {
            let result = null;
            if (true === closure_1) {
              result = null;
              if (null != closure_0) {
                result = VibegrationsProjectStore.findProjectByApplicationId(tmp2);
              }
            }
            return result;
          },
          items1,
        ),
      };
    };
