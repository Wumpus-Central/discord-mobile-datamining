// discord_app/modules/settings/native/renderer/stores/SettingBlocklistStore.tsx
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4241 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = set.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;