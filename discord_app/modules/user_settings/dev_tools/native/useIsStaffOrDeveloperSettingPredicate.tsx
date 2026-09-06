// discord_app/modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import DeveloperExperimentStore from "../../../../stores/DeveloperExperimentStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx",
);

export const useStaffOrDeveloperSettingPredicate = function useStaffOrDeveloperSettingPredicate() {
  const items = [DeveloperExperimentStore];
  return initialize.useStateFromStores(items, () => isDeveloper.isDeveloper);
};
