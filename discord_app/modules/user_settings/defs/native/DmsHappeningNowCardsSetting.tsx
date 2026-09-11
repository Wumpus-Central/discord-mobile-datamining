// === Module 15384: DmsHappeningNowCardsSetting ===

// Module 15384 (DmsHappeningNowCardsSetting)
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import SettingsConstants from "SettingsConstants" /* 8049 */;
import SettingBuilders from "SettingBuilders" /* 11562 */;
import size from "module_2" /* 2 */;

const toggle = SettingBuilders.createToggle({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.cSb1ub);
  },
  parent: SettingsConstants.MobileUserSettings.APPEARANCE,
  useValue: UserSettings.HappeningNowCardsDisabled.useSetting,
  onValueChange: UserSettings.HappeningNowCardsDisabled.updateSetting
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/DmsHappeningNowCardsSetting.tsx");

export default toggle;