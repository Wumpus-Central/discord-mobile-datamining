// === Module 9426: ProfileCustomizationNavigationStore ===

// Module 9426 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1084 */;
import ZustandStore from "ZustandStore" /* 4735 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = ZustandStore.createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;