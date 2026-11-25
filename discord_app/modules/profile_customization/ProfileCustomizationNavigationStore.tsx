// === Module 9395: ProfileCustomizationNavigationStore ===

// Module 9395 (ProfileCustomizationNavigationStore)
import UserSettingsConstants from "UserSettingsConstants" /* 1081 */;
import ZustandStore from "ZustandStore" /* 5201 */;
import Constants from "Constants" /* 6106 */;
import size from "module_2" /* 2 */;

const UserProfileSections = Constants.UserProfileSections;
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = ZustandStore.createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null, pendingCustomizeBadgesSheet: false, editingTab: UserProfileSections.MAIN }));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;