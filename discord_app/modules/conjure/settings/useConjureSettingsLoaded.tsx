// === Module 18711: useConjureSettingsLoaded ===

// Module 18711 (useConjureSettingsLoaded)
import ConjureSettingsStore from "ConjureSettingsStore" /* 7710 */;

const require = globalThis.__r;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/settings/useConjureSettingsLoaded.tsx");

export default function useConjureSettingsLoaded(arg0) {
  _require = arg0;
  items = [ConjureSettingsStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStores(items, () => null != ConjureSettingsStore.getSettings(closure_0), items1);
};