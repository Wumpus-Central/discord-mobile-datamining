// === Module 14097: zustandStore ===

// Module 14097 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4246 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = set.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;