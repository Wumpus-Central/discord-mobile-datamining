// discord_app/modules/settings/native/renderer/stores/SettingBlocklistStore.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import defaultStatesAreEqual from "../../../../../lib/ZustandStore.tsx";

const zustandStore = defaultStatesAreEqual.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = obj132.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;