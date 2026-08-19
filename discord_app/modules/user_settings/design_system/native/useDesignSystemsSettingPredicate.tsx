// === Module 14894: useDesignSystemsSettingPredicate ===

// Module 14894 (useDesignSystemsSettingPredicate)
import obj132 from "obj132" /* 2 */;
import useStaffOrDeveloperSettingPredicate from "useStaffOrDeveloperSettingPredicate" /* 14199 */;

const result = obj132.fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export const useDesignSystemsSettingPredicate = function useDesignSystemsSettingPredicate() {
  let staffOrDeveloperSettingPredicate = useStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
};