// discord_app/modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import init from "../../../../stores/DeveloperExperimentStore.tsx";

require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx");

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};