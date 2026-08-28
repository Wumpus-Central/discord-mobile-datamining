// === Module 14275: zustandStore ===

// Module 14275 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4312 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = set.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;