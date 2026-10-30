// discord_app/modules/conjure/projects/useIsOwnedConjureApplication.tsx
import BackoffDefault from "../../../../discord_common/js/packages/backoff/Backoff.tsx";
import ConjureUtils from "../shared/ConjureUtils.tsx";
import ConjureActionCreators from "ConjureActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import ConjureProjectStore from "ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
const isProjectOwner = fn(6838).isProjectOwner;
let closure_6 = new BackoffDefault(30000, 300000);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/projects/useIsOwnedConjureApplication.tsx");

export default function useIsOwnedConjureApplication(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [stateFromStores1];
  const items1 = [arg1, arg0];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      let result = closure_1;
      if (closure_1) {
        result = null != closure_0;
      }
      if (result) {
        result = ConjureUtils.hasEligibleConjureGuild(GuildStore.getGuildsArray(), "useIsOwnedConjureApplication");
      }
      return result;
    },
    items1,
  );
  let obj = require("initialize");
  const items2 = [ConjureProjectStore];
  stateFromStores1 = require("initialize").useStateFromStores(items2, () => {
    projectsFetchState = projectsFetchState.getProjectsFetchState();
    let type;
    if (projectsFetchState != null) {
      type = projectsFetchState.type;
    }
    if (type == null) {
      type = null;
    }
    return type;
  });
  const items3 = [stateFromStores, stateFromStores1];
  const effect = stateFromStores.useEffect(() => {
    if ("success" === stateFromStores1) {
      closure_6.succeed();
    }
    if (stateFromStores) {
      if (null != stateFromStores1) {
        let pending = "error" !== stateFromStores1;
        if (!pending) {
          pending = closure_6.pending;
        }
        if (!pending) {
          closure_6.fail(() => closure_1_0(closure_1_1[6]).listProjects());
        }
      } else {
        ConjureActionCreators.listProjects();
      }
    }
  }, items3);
  const obj2 = require("initialize");
  const items4 = [ConjureProjectStore];
  const items5 = [stateFromStores, arg0];
  return require("initialize").useStateFromStores(
    items4,
    () => {
      if (stateFromStores) {
        if (null != closure_0) {
          const result = ConjureProjectStore.findProjectByApplicationId(tmp);
          let tmp4 = null == result;
          if (!tmp4) {
            tmp4 = !isProjectOwner(result);
          }
          let tmp6 = !tmp4;
          if (tmp4) {
            projectsFetchState = ConjureProjectStore.getProjectsFetchState();
            let type;
            if (projectsFetchState != null) {
              type = projectsFetchState.type;
            }
            tmp6 = "success" !== type && null;
            const tmp9 = "success" !== type && null;
          }
          return tmp6;
        }
      }
      return false;
    },
    items5,
  );
}
