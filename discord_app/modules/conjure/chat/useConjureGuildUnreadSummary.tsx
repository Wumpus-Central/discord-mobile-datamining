// === Module 16995: useConjureGuildUnreadSummary ===

// Module 16995 (useConjureGuildUnreadSummary)
import ConjureActionCreators from "ConjureActionCreators" /* 10684 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6040 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10662 */;

require = fn;
const ReadStateTypes = fn(5972).ReadStateTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureGuildUnreadSummary.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureGuildUnreadSummary(arg0) {
  const cResult = stateFromStores(576).c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ReadStateStore, ConjureProjectStore];
    const fn = function l() {
      resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
      const found = resourceIds.filter((item) => {
        let result = null == project.getProject(item);
        if (result) {
          result = stateFromStores(dependencyMap[6]).isConjureProjectUnread(item);
          const obj = stateFromStores(dependencyMap[6]);
        }
        return result;
      });
      const sorted = found.sort();
      return sorted.join(",");
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
  let obj = stateFromStores(576);
  stateFromStores = stateFromStores(504).useStateFromStores(tmp4, tmp5, tmp6);
  if (cResult[3] !== stateFromStores) {
    const fn2 = function f() {
      if ("" !== stateFromStores) {
        const missingConjureProjects = ConjureActionCreators.loadMissingConjureProjects(stateFromStores.split(","));
      }
    };
    const items2 = [stateFromStores];
    cResult[3] = stateFromStores;
    cResult[4] = fn2;
    cResult[5] = items2;
    let tmp11 = items2;
    let tmp10 = fn2;
  } else {
    tmp10 = cResult[4];
    tmp11 = cResult[5];
  }
  const effect = noop.useEffect(tmp10, tmp11);
  const tmpResult = stateFromStores(504);
  return stateFromStores(10685).useConjureUnreadSummary(arg0);
}) : (function useConjureGuildUnreadSummary(arg0) {
  const items = [ReadStateStore, ConjureProjectStore];
  stateFromStores = stateFromStores(504).useStateFromStores(items, () => {
    resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
    const found = resourceIds.filter((item) => {
      let result = null == project.getProject(item);
      if (result) {
        result = stateFromStores(dependencyMap[6]).isConjureProjectUnread(item);
        const obj = stateFromStores(dependencyMap[6]);
      }
      return result;
    });
    const sorted = found.sort();
    return sorted.join(",");
  }, []);
  const items1 = [stateFromStores];
  const effect = noop.useEffect(() => {
    if ("" !== stateFromStores) {
      const missingConjureProjects = ConjureActionCreators.loadMissingConjureProjects(stateFromStores.split(","));
    }
  }, items1);
  let obj = stateFromStores(504);
  return stateFromStores(10685).useConjureUnreadSummary(arg0);
});