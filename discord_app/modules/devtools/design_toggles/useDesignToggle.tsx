// === Module 6205: useDesignToggle ===

// Module 6205 (useDesignToggle)
import DesignTogglesStore from "DesignTogglesStore" /* 6206 */;

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/design_toggles/useDesignToggle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useDesignToggle(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [DesignTogglesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      return DesignTogglesStore.get(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6, tmp7);
}) : (function useDesignToggle(arg0) {
  _require = arg0;
  const items = [DesignTogglesStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => DesignTogglesStore.get(closure_0), items1);
});