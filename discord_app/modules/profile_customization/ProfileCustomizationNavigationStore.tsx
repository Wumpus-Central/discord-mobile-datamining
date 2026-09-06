// discord_app/modules/profile_customization/ProfileCustomizationNavigationStore.tsx
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import ZustandStore from "../../lib/ZustandStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = ZustandStore.createZustandStore(() => ({
  subsection: constants.USER_PROFILE,
  scrollPosition: null,
}));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
