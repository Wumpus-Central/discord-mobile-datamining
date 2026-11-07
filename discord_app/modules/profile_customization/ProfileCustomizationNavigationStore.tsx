// === Module 11601: ProfileCustomizationNavigationStore ===

// Module 11601 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1082 */;
import ZustandStore from "ZustandStore" /* 5327 */;
import size from "module_2" /* 2 */;

const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = ZustandStore.createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null, pendingCustomizeBadgesSheet: false }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;