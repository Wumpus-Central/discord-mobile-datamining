// discord_app/modules/conjure/chat/useConjureGuildUnreadSummary.tsx
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ReadStateStore from "../../../stores/ReadStateStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
const ReadStateTypes = fn(6705).ReadStateTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureGuildUnreadSummary.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useConjureGuildUnreadSummary(arg0) {
      const cResult = stateFromStoresArray(576).c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ReadStateStore, ConjureProjectStore];
        const fn = function l() {
          resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
          const found = resourceIds.filter((item) => {
            let result = null == project.getProject(item);
            if (result) {
              result = stateFromStoresArray(dependencyMap[6]).isConjureProjectUnread(item);
              const obj = stateFromStoresArray(dependencyMap[6]);
            }
            return result;
          });
          return found.sort();
        };
        const items1 = [];
        cResult[0] = items;
        cResult[1] = fn;
        cResult[2] = items1;
        tmp4 = items;
        tmp5 = fn;
        tmp6 = items1;
      } else {
        [tmp4, tmp5, tmp6] = cResult;
      }
      let obj = stateFromStoresArray(576);
      stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(tmp4, tmp5, tmp6);
      if (cResult[3] !== stateFromStoresArray) {
        const fn2 = function f() {
          if (stateFromStoresArray.length > 0) {
            const missingConjureProjects = ConjureActionCreators.loadMissingConjureProjects(tmp);
          }
        };
        const items2 = [stateFromStoresArray];
        cResult[3] = stateFromStoresArray;
        cResult[4] = fn2;
        cResult[5] = items2;
        let tmp11 = items2;
        let tmp10 = fn2;
      } else {
        tmp10 = cResult[4];
        tmp11 = cResult[5];
      }
      const effect = noop.useEffect(tmp10, tmp11);
      const tmpResult = stateFromStoresArray(504);
      return stateFromStoresArray(10722).useConjureUnreadSummary(arg0);
    }
  : function useConjureGuildUnreadSummary(arg0) {
      const items = [ReadStateStore, ConjureProjectStore];
      stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => {
        resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
        const found = resourceIds.filter((item) => {
          let result = null == project.getProject(item);
          if (result) {
            result = stateFromStoresArray(dependencyMap[6]).isConjureProjectUnread(item);
            const obj = stateFromStoresArray(dependencyMap[6]);
          }
          return result;
        });
        return found.sort();
      }, []);
      const items1 = [stateFromStoresArray];
      const effect = noop.useEffect(() => {
        if (stateFromStoresArray.length > 0) {
          const missingConjureProjects = ConjureActionCreators.loadMissingConjureProjects(tmp);
        }
      }, items1);
      let obj = stateFromStoresArray(504);
      return stateFromStoresArray(10722).useConjureUnreadSummary(arg0);
    };
