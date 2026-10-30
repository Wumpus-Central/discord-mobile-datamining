// discord_app/modules/conjure/create/useConjureAppSlotsLeft.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

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
}
