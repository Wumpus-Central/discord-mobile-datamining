// discord_app/modules/user_settings/defs/native/ProfilePrivacySetting.tsx
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import UserSettings from "../../UserSettings.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import PrivateProfilesExperiment from "../../../user_profile/PrivateProfilesExperiment.tsx";
import ActivityPrivacyUpsellUtils from "../../../activity_privacy/ActivityPrivacyUpsellUtils.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = ActivityPrivacyUpsellUtils.computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        ({
          direction: obj4.direction,
          affectedGuildIds: obj4.affectedGuildIds,
          settingName: obj4.settingName,
          mappedActivityValue: obj4.mappedActivityValue,
        } = profileToActivityUpsell);
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(15124, dependencyMap.paths),
          "ProfileToActivityPrivacyUpsellActionSheet",
          { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null },
        );
        const obj2 = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
      }
      const tmp2Result = ActivityPrivacyUpsellUtils;
    }
    obj = PrivateProfilesExperiment;
  },
  useOptions() {
    const obj = { label: null, subLabel: null, value: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.Boxc8R);
    const intl2 = util.intl;
    obj.subLabel = intl2.string(util.t["nLj+nc"]);
    obj.value = preloaded_user_settings.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    const items = [obj, ,];
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
  },
  usePredicate() {
    return PrivateProfilesExperiment.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  },
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ProfilePrivacySetting.tsx");

export default radio;
