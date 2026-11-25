// discord_app/modules/profile_customization/ProfileCustomizationNavigationStore.tsx
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import ZustandStore from "../../lib/ZustandStore.tsx";
import Constants from "../user_profile/Constants.tsx";
import size from "../../../_runtime/metro/00002__.js";

const UserProfileSections = Constants.UserProfileSections;
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = ZustandStore.createZustandStore(() => ({
  subsection: constants.USER_PROFILE,
  scrollPosition: null,
  pendingCustomizeBadgesSheet: false,
  editingTab: UserProfileSections.MAIN,
}));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
