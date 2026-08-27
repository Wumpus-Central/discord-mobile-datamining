// === Module 14196: zustandStore ===

// Module 14196 (zustandStore)
import set from "set" /* 2 */;
import defaultStatesAreEqual from "defaultStatesAreEqual" /* 4311 */;

const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ query: "", isActive: false, isFocused: false, selected: null }));
const result = set.fileFinishedImporting("modules/user_settings/UserSettingSearchStore.tsx");

export default zustandStore;