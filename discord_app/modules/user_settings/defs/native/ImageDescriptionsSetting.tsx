// discord_app/modules/user_settings/defs/native/ImageDescriptionsSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import UserSettingsText from "../../chat/native/UserSettingsText.tsx";
import UnsyncedUserSettingsStore from "../../UnsyncedUserSettingsStore.tsx";

require = fn;
function onImageDescriptionSettingValueChange(viewImageDescriptions) {
  UserSettingsText.setImageDescriptions({
    videoUploadQuality: UnsyncedUserSettingsStore.videoUploadQuality,
    viewImageDescriptions,
    lowQualityImageMode: UnsyncedUserSettingsStore.lowQualityImageMode,
    dataSavingMode: UnsyncedUserSettingsStore.dataSavingMode,
  });
}
const SettingBuilders = fn(11725);
const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["w8j+yW"]);
  },
  parent: fn(8233).MobileUserSettings.CHAT,
  useValue: function useImageDescriptionSettingValue() {
    const ViewImageDescriptions = UserSettings.ViewImageDescriptions;
    return ViewImageDescriptions.useSetting();
  },
  onValueChange: onImageDescriptionSettingValueChange,
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ImageDescriptionsSetting.tsx");

export default toggle;
export { onImageDescriptionSettingValueChange };
