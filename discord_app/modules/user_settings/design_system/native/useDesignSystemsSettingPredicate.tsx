// discord_app/modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx
import set from "../../../../../_runtime/00002_set.js";
import useStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";

const result = set.fileFinishedImporting(
  "modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx",
);

export const useDesignSystemsSettingPredicate = function useDesignSystemsSettingPredicate() {
  let staffOrDeveloperSettingPredicate = useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  const obj = useStaffOrDeveloperSettingPredicate;
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
};
