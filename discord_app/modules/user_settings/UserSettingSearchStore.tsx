// discord_app/modules/user_settings/UserSettingSearchStore.tsx
import set from "../../../_runtime/00002_set.js";
import defaultStatesAreEqual from "../../lib/ZustandStore.tsx";

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = set.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;