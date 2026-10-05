// === Module 14658: ProfilePrivacySetting ===

// Module 14658 (ProfilePrivacySetting)
import util from "util" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1987 */;
import UserSettings from "UserSettings" /* 2028 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import SettingsConstants from "SettingsConstants" /* 7634 */;
import ActivityPrivacyUpsellUtils from "ActivityPrivacyUpsellUtils" /* 14659 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

let ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Qnf32C);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue: () => {
    const ProfileVisibility = UserSettings.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = UserSettings.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = UserSettings.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    const profileToActivityUpsell = ActivityPrivacyUpsellUtils.computeProfileToActivityUpsell(setting, NumberResult);
    if (null != profileToActivityUpsell) {
      ({ direction: obj3.direction, affectedGuildIds: obj3.affectedGuildIds, settingName: obj3.settingName, mappedActivityValue: obj3.mappedActivityValue } = profileToActivityUpsell);
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14660, dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null });
      const obj4 = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
    }
  },
  useOptions() {
    const obj = { label: null, subLabel: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.Boxc8R);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t["nLj+nc"]);
    obj.value = preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    const items = [obj, , ];
    const obj2 = { label: null, subLabel: null, value: null };
    const intl3 = util.intl;
    obj2.label = intl3.string(util.t.YOIKBt);
    const intl4 = util.intl;
    obj2.subLabel = intl4.string(util.t.y0JZ4s);
    obj2.value = preloaded_user_settings.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS;
    items[1] = obj2;
    const obj3 = { label: null, subLabel: null, value: null };
    const intl5 = util.intl;
    obj3.label = intl5.string(util.t.u0nlJv);
    const intl6 = util.intl;
    obj3.subLabel = intl6.string(util.t["4jnKHu"]);
    obj3.value = preloaded_user_settings.ProfileVisibility.FRIENDS_ONLY;
    items[2] = obj3;
    return items;
  }
});
const result1 = size.fileFinishedImporting("modules/user_settings/defs/native/ProfilePrivacySetting.tsx");

export default radio;