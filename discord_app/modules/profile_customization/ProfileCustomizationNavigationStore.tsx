// discord_app/modules/profile_customization/ProfileCustomizationNavigationStore.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import MAX_FAVORITES from "../user_settings/UserSettingsConstants.tsx";
import defaultStatesAreEqual from "../../lib/ZustandStore.tsx";

let closure_0 = MAX_FAVORITES.ProfileCustomizationSubsection;
const zustandStore = defaultStatesAreEqual.createZustandStore(() => ({ subsection: constants.USER_PROFILE, scrollPosition: null }));
const result = obj132.fileFinishedImporting("modules/profile_customization/ProfileCustomizationNavigationStore.tsx");

export default zustandStore;