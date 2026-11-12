// === Module 13879: useConjureAppSlotsLeft ===

// Module 13879 (useConjureAppSlotsLeft)
import initialize from "initialize" /* 504 */;
import ConjureActionCreators from "ConjureActionCreators" /* 7265 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6954 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/create/useConjureAppSlotsLeft.tsx");

export default function useConjureAppSlotsLeft() {
  const effect = noop.useEffect(() => {
    const projectLimit = ConjureActionCreators.fetchProjectLimit();
  }, []);
  items = [ConjureProjectStore];
  return initialize.useStateFromStores(items, () => {
    maxProjects = maxProjects.getMaxProjects();
    let bound = null;
    if (null != maxProjects) {
      bound = null;
      if (obj.hasFetchedOwnedProjects()) {
        const _Math = Math;
        bound = Math.max(0, maxProjects - obj.getOwnedProjects().length);
      }
    }
    return bound;
  });
};