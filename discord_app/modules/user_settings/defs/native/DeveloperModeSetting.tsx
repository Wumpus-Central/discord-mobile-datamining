// discord_app/modules/user_settings/defs/native/DeveloperModeSetting.tsx
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.ObIb1Q);
  },
  parent: SettingsConstants.MobileUserSettings.ADVANCED,
  useValue: UserSettings.DeveloperMode.useSetting,
  onValueChange: UserSettings.DeveloperMode.updateSetting,
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DeveloperModeSetting.tsx");

export default toggle;
