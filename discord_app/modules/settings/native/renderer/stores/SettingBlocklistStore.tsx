// === Module 15702: SettingBlocklistStore ===

// Module 15702 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 4983 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;