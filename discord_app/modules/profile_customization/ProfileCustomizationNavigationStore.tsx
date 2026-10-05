// discord_app/modules/profile_customization/ProfileCustomizationNavigationStore.tsx
import UserSettingsConstants from "../user_settings/UserSettingsConstants.tsx";
import ZustandStore from "../../lib/ZustandStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

const createZustandStore = ZustandStore.createZustandStore;
const constants = UserSettingsConstants.ProfileCustomizationSubsection;
const zustandStore = createZustandStore(() => ({
  subsection: constants.USER_PROFILE,
  scrollPosition: null,
  pendingCustomizeBadgesSheet: false,
}));
const result = size.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;
