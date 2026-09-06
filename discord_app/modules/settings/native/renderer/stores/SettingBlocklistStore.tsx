// discord_app/modules/settings/native/renderer/stores/SettingBlocklistStore.tsx
import ZustandStore from "../../../../../lib/ZustandStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const zustandStore = ZustandStore.createZustandStore(() => {
  const obj = { blocklist: new Set() };
  return obj;
});
const result = size.fileFinishedImporting("modules/settings/native/renderer/stores/SettingBlocklistStore.tsx");

export default zustandStore;
