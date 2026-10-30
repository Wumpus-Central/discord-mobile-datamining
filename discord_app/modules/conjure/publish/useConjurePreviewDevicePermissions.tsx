// === Module 12418: useConjurePreviewDevicePermissions ===

// Module 12418 (useConjurePreviewDevicePermissions)
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10847 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = [];
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePreviewDevicePermissions.tsx");

export default function useConjurePreviewDevicePermissions(arg0) {
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
};