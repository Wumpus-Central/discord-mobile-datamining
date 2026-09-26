// === Module 14250: UserSettingSearchStore ===

// Module 14250 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 4705 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;