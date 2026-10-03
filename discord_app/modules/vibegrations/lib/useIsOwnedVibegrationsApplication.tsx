// discord_app/modules/vibegrations/lib/useIsOwnedVibegrationsApplication.tsx
import BackoffDefault from "../../../../discord_common/js/packages/backoff/Backoff.tsx";
import VibegrationsUtils from "VibegrationsUtils.tsx";
import VibegrationsActionCreators from "../actions/VibegrationsActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../stores/GuildStore.tsx";
import VibegrationsProjectStore from "../stores/VibegrationsProjectStore.tsx";

const require = globalThis.__r;

require = fn;
const isProjectOwner = fn(8699).isProjectOwner;
const useIsOwnedVibegrationsApplication = "useIsOwnedVibegrationsApplication";
let closure_7 = new BackoffDefault(30000, 300000);
const ReactCompilerGating = fn(558);
const tmp2 = new BackoffDefault(30000, 300000);
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/useIsOwnedVibegrationsApplication.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      _require = arg0;
      dependencyMap = arg1;
      const cResult = require("c").c(16);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [stateFromStores1];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === arg1) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        const stateFromStores = tmp(504).useStateFromStores(first, tmp6, tmp7);
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [VibegrationsProjectStore];
          class P {
            constructor() {
              projectsFetchState = closure_1_4.getProjectsFetchState();
              type = undefined;
              if (projectsFetchState != null) {
                type = projectsFetchState.type;
              }
              if (type == null) {
                type = null;
              }
              return type;
            }
          }
          cResult[5] = items1;
          cResult[6] = P;
          let tmp10 = P;
          let tmp9 = items1;
        } else {
          tmp9 = cResult[5];
          tmp10 = cResult[6];
        }
        const tmpResult = tmp(504);
        stateFromStores1 = tmp(504).useStateFromStores(tmp9, tmp10);
        if (cResult[7] === stateFromStores) {
          if (cResult[8] === stateFromStores1) {
            let tmp13 = cResult[9];
            let tmp14 = cResult[10];
          }
          const effect = stateFromStores.useEffect(tmp13, tmp14);
          class P {
            constructor() {
              projectsFetchState = closure_1_4.getProjectsFetchState();
              type = undefined;
              if (projectsFetchState != null) {
                type = projectsFetchState.type;
              }
              if (type == null) {
                type = null;
              }
              return type;
            }
          }
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const items2 = [VibegrationsProjectStore];
            class P {
              constructor() {
                projectsFetchState = closure_1_4.getProjectsFetchState();
                type = undefined;
                if (projectsFetchState != null) {
                  type = projectsFetchState.type;
                }
                if (type == null) {
                  type = null;
                }
                return type;
              }
            }
            cResult[11] = items2;
            let tmp17 = items2;
          } else {
            tmp17 = cResult[11];
          }
          if (cResult[12] === arg0) {
            if (cResult[13] === stateFromStores) {
              let tmp19 = cResult[14];
              let tmp20 = cResult[15];
            }
            return tmp(504).useStateFromStores(tmp17, tmp19, tmp20);
          }
          class A {
            constructor() {
              if (closure_2) {
                tmp2 = null;
                if (null != closure_0) {
                  obj = closure_4;
                  result = closure_4.findProjectByApplicationId(tmp);
                  tmp4 = null == result;
                  if (!tmp4) {
                    tmp5 = isProjectOwner;
                    tmp4 = !isProjectOwner(result);
                  }
                  tmp6 = !tmp4;
                  if (tmp4) {
                    projectsFetchState = obj.getProjectsFetchState();
                    type = undefined;
                    if (projectsFetchState != null) {
                      type = projectsFetchState.type;
                    }
                    str = "success";
                    tmp9 = "success" !== type && null;
                    tmp6 = tmp9;
                  }
                  return tmp6;
                }
              }
              return false;
            }
          }
          const items3 = [stateFromStores, arg0];
          cResult[12] = arg0;
          cResult[13] = stateFromStores;
          cResult[14] = A;
          cResult[15] = items3;
          tmp20 = items3;
          tmp19 = A;
        }
        const fn2 = function h() {
          if ("success" === stateFromStores1) {
            closure_7.succeed();
          }
          if (stateFromStores) {
            if (null != stateFromStores1) {
              let pending = "error" !== stateFromStores1;
              if (!pending) {
                pending = closure_7.pending;
              }
              if (!pending) {
                closure_7.fail(() => closure_1_0(closure_1_1[8]).listProjects());
              }
            } else {
              VibegrationsActionCreators.listProjects();
            }
          }
        };
        const items4 = [stateFromStores, stateFromStores1];
        cResult[7] = stateFromStores;
        cResult[8] = stateFromStores1;
        cResult[9] = fn2;
        cResult[10] = items4;
        tmp14 = items4;
        tmp13 = fn2;
        const tmpResult3 = tmp(504);
      }
      const fn = function p() {
        let tmp = closure_1;
        if (closure_1) {
          tmp = null != closure_0;
        }
        if (tmp) {
          tmp =
            VibegrationsUtils.eligibleVibegrationsGuilds(GuildStore.getGuildsArray(), useIsOwnedVibegrationsApplication)
              .length > 0;
        }
        return tmp;
      };
      const items5 = [arg1, arg0];
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      cResult[4] = items5;
      tmp7 = items5;
      tmp6 = fn;
      let obj = require("c");
    }
  : (arg0, arg1) => {
      _require = arg0;
      dependencyMap = arg1;
      const items = [stateFromStores1];
      const items1 = [arg1, arg0];
      const stateFromStores = require("initialize").useStateFromStores(
        items,
        () => {
          let tmp = closure_1;
          if (closure_1) {
            tmp = null != closure_0;
          }
          if (tmp) {
            tmp =
              VibegrationsUtils.eligibleVibegrationsGuilds(
                GuildStore.getGuildsArray(),
                useIsOwnedVibegrationsApplication,
              ).length > 0;
          }
          return tmp;
        },
        items1,
      );
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
          closure_7.succeed();
        }
        if (stateFromStores) {
          if (null != stateFromStores1) {
            let pending = "error" !== stateFromStores1;
            if (!pending) {
              pending = closure_7.pending;
            }
            if (!pending) {
              closure_7.fail(() => closure_1_0(closure_1_1[8]).listProjects());
            }
          } else {
            VibegrationsActionCreators.listProjects();
          }
        }
      }, items3);
      const obj2 = require("initialize");
      const items4 = [VibegrationsProjectStore];
      const items5 = [stateFromStores, arg0];
      return require("initialize").useStateFromStores(
        items4,
        () => {
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
        },
        items5,
      );
    };
