// discord_app/modules/user_settings/UserSettingSearchStore.tsx
import ZustandStore from "../../lib/ZustandStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const zustandStore = ZustandStore.createZustandStore(() => ({
  query: "",
  isActive: false,
  isFocused: false,
  selected: null,
}));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;
