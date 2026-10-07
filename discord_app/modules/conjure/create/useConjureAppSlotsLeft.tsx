// discord_app/modules/conjure/create/useConjureAppSlotsLeft.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/create/useConjureAppSlotsLeft.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function c() {
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
    }
  : () => {
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
