// === Module 14894: useDesignSystemsSettingPredicate ===

// Module 14894 (useDesignSystemsSettingPredicate)
import set from "set" /* 2 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14199 */;

const result = set.fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export const useDesignSystemsSettingPredicate = function useDesignSystemsSettingPredicate() {
  let staffOrDeveloperSettingPredicate = useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  const obj = useStaffOrDeveloperSettingPredicate;
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
};