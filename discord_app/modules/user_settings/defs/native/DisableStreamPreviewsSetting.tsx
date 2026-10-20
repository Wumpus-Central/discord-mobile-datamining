// === Module 17018: DisableStreamPreviewsSetting ===

// Module 17018 (DisableStreamPreviewsSetting)
import util from "util" /* 1128 */;
import UserSettings from "UserSettings" /* 4776 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
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
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/DisableStreamPreviewsSetting.tsx");

export default toggle;