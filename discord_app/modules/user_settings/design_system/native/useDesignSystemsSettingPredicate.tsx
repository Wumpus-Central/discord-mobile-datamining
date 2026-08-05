// discord_app/modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx
const result = require("set").fileFinishedImporting("modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx");

export const useDesignSystemsSettingPredicate = function useDesignSystemsSettingPredicate() {
  let staffOrDeveloperSettingPredicate = require("../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx") /* useStaffOrDeveloperSettingPredicate */.useStaffOrDeveloperSettingPredicate();
  const obj = require("../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx") /* useStaffOrDeveloperSettingPredicate */;
  if (!staffOrDeveloperSettingPredicate) {
    staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
  }
  return staffOrDeveloperSettingPredicate;
};