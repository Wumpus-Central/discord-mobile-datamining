// === Module 12248: useConjurePreviewDevicePermissions ===

// Module 12248 (useConjurePreviewDevicePermissions)
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10691 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = [];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePreviewDevicePermissions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePreviewDevicePermissions(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjurePublishStatusStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function n() {
      const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
      let prop;
      if (publishStatus != null) {
        prop = publishStatus.previewDevicePermissions;
      }
      if (prop == null) {
        prop = closure_3;
      }
      return prop;
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj = require("c");
  return require("initialize").useStateFromStores(first, tmp6);
}) : (function useConjurePreviewDevicePermissions(arg0) {
  _require = arg0;
  const items = [ConjurePublishStatusStore];
  return require("initialize").useStateFromStores(items, () => {
    const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
    let prop;
    if (publishStatus != null) {
      prop = publishStatus.previewDevicePermissions;
    }
    if (prop == null) {
      prop = closure_3;
    }
    return prop;
  });
});