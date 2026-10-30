// === Module 12948: useConjureAppSlotsLeft ===

// Module 12948 (useConjureAppSlotsLeft)
import initialize from "initialize" /* 504 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10855 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6838 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/create/useConjureAppSlotsLeft.tsx");

export default function useConjureAppSlotsLeft() {
  const effect = noop.useEffect(() => {
    const projectLimit = ConjureActionCreators.fetchProjectLimit();
  }, []);
  const items = [ConjureProjectStore];
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