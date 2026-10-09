// === Module 16972: useConjureAppSlotsLeft ===

// Module 16972 (useConjureAppSlotsLeft)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11369 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10617 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/create/useConjureAppSlotsLeft.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureAppSlotsLeft() {
  const cResult = c.c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const projectLimit = ConjureActionCreators.fetchProjectLimit();
    };
    const items = [];
    cResult[0] = fn;
    cResult[1] = items;
    tmp4 = fn;
    tmp5 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const effect = noop.useEffect(tmp4, tmp5);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ConjureProjectStore];
    const fn2 = function u() {
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
    };
    cResult[2] = items1;
    cResult[3] = fn2;
    let tmp8 = fn2;
    let tmp7 = items1;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  return initialize.useStateFromStores(tmp7, tmp8);
}) : (function useConjureAppSlotsLeft() {
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
});