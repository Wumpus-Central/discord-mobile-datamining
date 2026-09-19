// === Module 9307: useIsOwnedVibegrationsApplication ===

// Module 9307 (useIsOwnedVibegrationsApplication)
import BackoffDefault from "Backoff" /* 559 */;
import VibegrationsUtils from "VibegrationsUtils" /* 7484 */;
import VibegrationsActionCreators from "VibegrationsActionCreators" /* 9309 */;
import noop from "module_19" /* 19 */;
import GuildStore from "GuildStore" /* 2063 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 9308 */;

const require = globalThis.__r;

require = fn;
const isProjectOwner = fn(9308).isProjectOwner;
let closure_6 = new BackoffDefault(30000, 300000);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useIsOwnedVibegrationsApplication.tsx");

export default function useIsOwnedVibegrationsApplication(arg0, arg1) {
  _require = arg0;
  dependencyMap = arg1;
  const items = [stateFromStores1];
  const items1 = [arg1, arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp = closure_1;
    if (closure_1) {
      tmp = null != closure_0;
    }
    if (tmp) {
      tmp = VibegrationsUtils.eligibleVibegrationsGuilds(GuildStore.getGuildsArray(), "useIsOwnedVibegrationsApplication").length > 0;
    }
    return tmp;
  }, items1);
  let obj = require("initialize");
  const items2 = [VibegrationsProjectStore];
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
        VibegrationsActionCreators.listProjects();
      }
    }
  }, items3);
  const obj2 = require("initialize");
  const items4 = [VibegrationsProjectStore];
  const items5 = [stateFromStores, arg0];
  return require("initialize").useStateFromStores(items4, () => {
    if (stateFromStores) {
      if (null != closure_0) {
        const result = VibegrationsProjectStore.findProjectByApplicationId(tmp);
        let tmp4 = null == result;
        if (!tmp4) {
          tmp4 = !isProjectOwner(result);
        }
        let tmp6 = !tmp4;
        if (tmp4) {
          projectsFetchState = VibegrationsProjectStore.getProjectsFetchState();
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
  }, items5);
};