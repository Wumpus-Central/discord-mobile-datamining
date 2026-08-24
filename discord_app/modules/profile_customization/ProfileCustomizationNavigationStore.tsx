// discord_app/modules/profile_customization/ProfileCustomizationNavigationStore.tsx
import set from "../../../_runtime/00002_set.js";
import MAX_FAVORITES from "../user_settings/UserSettingsConstants.tsx";
import defaultStatesAreEqual from "../../lib/ZustandStore.tsx";

let closure_0 = MAX_FAVORITES.ProfileCustomizationSubsection;
const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = set.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;