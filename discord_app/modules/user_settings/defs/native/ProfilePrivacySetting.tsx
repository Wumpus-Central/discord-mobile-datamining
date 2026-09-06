// === Module 14850: ProfilePrivacySetting ===

// Module 14850 (ProfilePrivacySetting)
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import UserSettings from "UserSettings" /* 1935 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import SettingsConstants from "SettingsConstants" /* 7975 */;
import PrivateProfilesExperiment from "PrivateProfilesExperiment" /* 13075 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.Qnf32C);
  },
  parent: SettingsConstants.MobileUserSettings.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = UserSettings.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = UserSettings.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = UserSettings.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    let obj = PrivateProfilesExperiment;
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = tmp2(14851).computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        obj = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
        ({ direction: obj4.direction, affectedGuildIds: obj4.affectedGuildIds, settingName: obj4.settingName, mappedActivityValue: obj4.mappedActivityValue } = profileToActivityUpsell);
        ActionSheetActionCreatorsDefault.openLazy(tmp2(1896)(14852, dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj);
      }
      const tmp2Result = tmp2(14851);
    }
  },
  useOptions() {
    let obj = { label: null, subLabel: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.Boxc8R);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t["nLj+nc"]);
    obj.value = preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    const items = [obj, , ];
    obj = { label: null, subLabel: null, value: null };
    const intl3 = util.intl;
    obj.label = intl3.string(util.t.YOIKBt);
    const intl4 = util.intl;
    obj.subLabel = intl4.string(util.t.y0JZ4s);
    obj.value = preloaded_user_settings.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS;
    items[1] = obj;
    obj = { label: null, subLabel: null, value: null };
    const intl5 = util.intl;
    obj.label = intl5.string(util.t.u0nlJv);
    const intl6 = util.intl;
    obj.subLabel = intl6.string(util.t["4jnKHu"]);
    obj.value = preloaded_user_settings.ProfileVisibility.FRIENDS_ONLY;
    items[2] = obj;
    return items;
  },
  usePredicate() {
    return PrivateProfilesExperiment.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ProfilePrivacySetting.tsx");

export default radio;