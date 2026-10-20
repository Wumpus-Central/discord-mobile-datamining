// === Module 16429: DmsHappeningNowCardsSetting ===

// Module 16429 (DmsHappeningNowCardsSetting)
import util from "util" /* 1128 */;
import UserSettings from "UserSettings" /* 4776 */;
import SettingsConstants from "SettingsConstants" /* 8280 */;
import SettingBuilders from "SettingBuilders" /* 11111 */;
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