// discord_app/modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx
import PlaygroundAccessExperiment from "../../../design/PlaygroundAccessExperiment.tsx";
import useIsStaffOrDeveloperSettingPredicate from "../../dev_tools/native/useIsStaffOrDeveloperSettingPredicate.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const obj = useIsStaffOrDeveloperSettingPredicate;
      let staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
      const obj2 = PlaygroundAccessExperiment;
      if (!staffOrDeveloperSettingPredicate) {
        staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
      }
      return staffOrDeveloperSettingPredicate;
    }
  : () => {
      const obj = useIsStaffOrDeveloperSettingPredicate;
      let staffOrDeveloperSettingPredicate = obj.useStaffOrDeveloperSettingPredicate();
      const obj2 = PlaygroundAccessExperiment;
      if (!staffOrDeveloperSettingPredicate) {
        staffOrDeveloperSettingPredicate = obj2.usePlaygroundAccessExperiment("design_systems_settings");
      }
      return staffOrDeveloperSettingPredicate;
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/design_system/native/useDesignSystemsSettingPredicate.tsx",
);

export const useDesignSystemsSettingPredicate = tmp2;
