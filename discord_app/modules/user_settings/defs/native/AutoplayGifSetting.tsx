// === Module 17032: AutoplayGifSetting ===

// Module 17032 (AutoplayGifSetting)
import util from "util" /* 1112 */;
import UserSettings from "UserSettings" /* 4868 */;
import SettingsConstants from "SettingsConstants" /* 9555 */;
import SettingBuilders from "SettingBuilders" /* 11962 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["9ptHSs"]);
  },
  parent: SettingsConstants.MobileUserSettings.ACCESSIBILITY,
  useValue: UserSettings.GifAutoPlay.useSetting,
  onValueChange: UserSettings.GifAutoPlay.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AutoplayGifSetting.tsx");

export default toggle;