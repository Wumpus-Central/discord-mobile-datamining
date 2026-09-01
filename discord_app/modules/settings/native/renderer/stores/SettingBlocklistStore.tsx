// discord_app/modules/settings/native/renderer/stores/SettingBlocklistStore.tsx
import set from "../../../../../../_runtime/00002_set.js";
import defaultStatesAreEqual from "../../../../../lib/ZustandStore.tsx";

const zustandStore = defaultStatesAreEqual.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = set.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
