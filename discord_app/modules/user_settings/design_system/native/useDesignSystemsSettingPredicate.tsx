// discord_app/modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx",
);

export const useDesignSystemsSettingPredicate = ReactCompilerGating.isReactCompilerEnabled()
  ? function useDesignSystemsSettingPredicate() {
      let staffOrDeveloperSettingPredicate =
        useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
      if (!staffOrDeveloperSettingPredicate) {
        staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
      }
      return staffOrDeveloperSettingPredicate;
    }
  : function useDesignSystemsSettingPredicate() {
      let staffOrDeveloperSettingPredicate =
        useIsStaffOrDeveloperSettingPredicate.useStaffOrDeveloperSettingPredicate();
      if (!staffOrDeveloperSettingPredicate) {
        staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
      }
      return staffOrDeveloperSettingPredicate;
    };
