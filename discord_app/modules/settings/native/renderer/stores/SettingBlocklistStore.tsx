// === Module 13994: zustandStore ===

// Module 13994 (zustandStore)
import obj132 from "obj132" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4241 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = obj132.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;