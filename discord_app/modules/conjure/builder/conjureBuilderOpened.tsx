// === Module 12078: conjureBuilderOpened ===

// Module 12078 (conjureBuilderOpened)
import ConjureAnalytics from "ConjureAnalytics" /* 10873 */;
import noop from "module_19" /* 19 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/builder/conjureBuilderOpened.tsx");

export function useTrackConjureBuilderOpened(projectId) {
  _require = projectId;
  let str = entryPoint;
  if (entryPoint === undefined) {
    str = "unknown";
  }
  let ref;
  const items = [ref];
  const items1 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => {
    let tmp2 = null != closure_0;
    if (tmp2) {
      tmp2 = null != ConjureProjectStore.getProject(tmp);
    }
    return tmp2;
  }, items1);
  ref = stateFromStores.useRef(null);
  const items2 = [projectId, str, stateFromStores];
  const effect = stateFromStores.useEffect(() => {
    let tmp2 = null != current && stateFromStores;
    if (tmp2) {
      tmp2 = ref.current !== current;
    }
    if (tmp2) {
      ref.current = current;
      const result = ConjureAnalytics.trackConjureBuilderOpened(current, str);
    }
  }, items2);
}