// === Module 16535: UserSettingSearchStore ===

// Module 16535 (UserSettingSearchStore)
import ZustandStore from "ZustandStore" /* 5206 */;
import size from "module_2" /* 2 */;

const zustandStore = ZustandStore.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = size.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;