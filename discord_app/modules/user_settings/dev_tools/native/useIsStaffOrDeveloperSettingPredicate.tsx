// discord_app/modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import closure_2 from "../../../../stores/DeveloperExperimentStore.tsx";

require = arg1;
const result = require("set").fileFinishedImporting(
  "modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx",
);

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [closure_2];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
