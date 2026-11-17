// === Module 14511: useUsesPreviewApp ===

// Module 14511 (useUsesPreviewApp)
import ConjureProjectTypes from "ConjureProjectTypes" /* 7026 */;
import ConjureProjectStore from "ConjureProjectStore" /* 7025 */;

const require = globalThis.__r;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/useUsesPreviewApp.tsx");

export default function useUsesPreviewApp(arg0) {
  _require = arg0;
  items = [ConjureProjectStore];
  return require("initialize").useStateFromStores(items, () => {
    const project = ConjureProjectStore.getProject(closure_0);
    let usesPreviewAppResult = null == project;
    if (!usesPreviewAppResult) {
      usesPreviewAppResult = ConjureProjectTypes.usesPreviewApp(project);
    }
    return usesPreviewAppResult;
  });
};