// === Module 18221: useConjureGuildUnreadSummary ===

// Module 18221 (useConjureGuildUnreadSummary)
import ConjureActionCreators from "ConjureActionCreators" /* 10855 */;
import noop from "module_19" /* 19 */;
import ReadStateStore from "ReadStateStore" /* 6836 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

require = fn;
const ReadStateTypes = fn(6770).ReadStateTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/chat/useConjureGuildUnreadSummary.tsx");

export default function useConjureGuildUnreadSummary(arg0) {
  const items = [ReadStateStore, ConjureProjectStore];
  stateFromStoresArray = stateFromStoresArray(504).useStateFromStoresArray(items, () => {
    resourceIds = resourceIds.getResourceIds(constants.CONJURING_PROJECT);
    const found = resourceIds.filter((item) => {
      let result = null == project.getProject(item);
      if (result) {
        result = stateFromStoresArray(dependencyMap[5]).isConjureProjectUnread(item);
        const obj = stateFromStoresArray(dependencyMap[5]);
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
  return stateFromStoresArray(10857).useConjureUnreadSummary(arg0);
};