// === Module 14705: SettingBlocklistStore ===

// Module 14705 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4510 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;