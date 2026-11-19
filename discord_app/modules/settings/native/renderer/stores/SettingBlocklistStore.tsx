// === Module 15738: SettingBlocklistStore ===

// Module 15738 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4981 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;