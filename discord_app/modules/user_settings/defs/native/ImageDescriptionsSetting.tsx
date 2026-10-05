// discord_app/modules/user_settings/defs/native/ImageDescriptionsSetting.tsx
import intl2 from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import UserSettingsText from "../../chat/native/UserSettingsText.tsx";
import UnsyncedUserSettingsStore from "../../UnsyncedUserSettingsStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  const obj = UserSettingsText;
  const obj2 = {
    videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality,
    viewImageDescriptions,
    lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode,
    dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode,
  };
  obj.setImageDescriptions(obj2);
}
const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let obj = {
  useTitle() {
    const intl = intl2.intl;
    return intl.string(intl2.t["w8j+yW"]);
  },
  parent: MobileUserSettings.CHAT,
  useValue: () => {
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange,
};
const toggle = SettingBuilders.createToggle(obj);
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default toggle;
export { onImageDescriptionSettingValueChange };
