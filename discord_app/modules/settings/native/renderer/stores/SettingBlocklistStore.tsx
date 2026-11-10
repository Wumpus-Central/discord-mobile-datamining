// === Module 16780: SettingBlocklistStore ===

// Module 16780 (SettingBlocklistStore)
import ZustandStore from "ZustandStore" /* 5329 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;