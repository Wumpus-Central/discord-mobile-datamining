// === Module 15863: DisableStreamPreviewsSetting ===

// Module 15863 (DisableStreamPreviewsSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t["1CzWUK"]);
  },
  useDescription() {
    const intl = util.intl;
    return intl.string(util.t.jTNPHM);
  },
  parent: SettingsConstants.MobileUserSettings.VOICE,
  useValue() {
    const DisableStreamPreviews = UserSettings.DisableStreamPreviews;
    let flag = DisableStreamPreviews.useSetting();
    if (flag == null) {
      flag = false;
    }
    return flag;
  },
  onValueChange: UserSettings.DisableStreamPreviews.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DisableStreamPreviewsSetting.tsx");

export default toggle;