// discord_app/modules/user_settings/defs/native/ProfilePrivacySetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import getSystemLocale from "../../../../intl/index.native.tsx";
import create from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import apexExperiment from "../../../user_profile/PrivateProfilesExperiment.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const radio = createToggle.createRadio({
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Qnf32C);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = explicitContentFromProto.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = explicitContentFromProto.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = explicitContentFromProto.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    let obj = apexExperiment;
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = tmp2(14424).computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        obj = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
        ({ direction: obj4[0], affectedGuildIds: obj4[1], settingName: obj4[2], mappedActivityValue: obj4[3] } = profileToActivityUpsell);
        ACTION_SHEET_HEIGHT_HALFDefault.openLazy(tmp2(2009)(14425, dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj);
        const obj3 = ACTION_SHEET_HEIGHT_HALFDefault;
      }
      const tmp2Result = tmp2(14424);
    }
  },
  useOptions() {
    let obj = { label: null, subLabel: null, value: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.Boxc8R);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["nLj+nc"]);
    obj[2] = create.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    const items = [obj, , ];
    obj = { label: null, subLabel: null, value: null };
    const intl3 = getSystemLocale.intl;
    obj[0] = intl3.string(getSystemLocale.t.YOIKBt);
    const intl4 = getSystemLocale.intl;
    obj[1] = intl4.string(getSystemLocale.t.y0JZ4s);
    obj[2] = create.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS;
    items[1] = obj;
    obj = { label: null, subLabel: null, value: null };
    const intl5 = getSystemLocale.intl;
    obj[0] = intl5.string(getSystemLocale.t.u0nlJv);
    const intl6 = getSystemLocale.intl;
    obj[1] = intl6.string(getSystemLocale.t["4jnKHu"]);
    obj[2] = create.ProfileVisibility.FRIENDS_ONLY;
    items[2] = obj;
    return items;
  },
  usePredicate() {
    return apexExperiment.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
});
let obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.Qnf32C);
  },
  parent: MobileUserSettings.MobileUserSettings.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = explicitContentFromProto.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = explicitContentFromProto.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = explicitContentFromProto.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    let obj = apexExperiment;
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = tmp2(14424).computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        obj = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
        ({ direction: obj4[0], affectedGuildIds: obj4[1], settingName: obj4[2], mappedActivityValue: obj4[3] } = profileToActivityUpsell);
        ACTION_SHEET_HEIGHT_HALFDefault.openLazy(tmp2(2009)(14425, dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj);
        const obj3 = ACTION_SHEET_HEIGHT_HALFDefault;
      }
      const tmp2Result = tmp2(14424);
    }
  },
  useOptions() {
    let obj = { label: null, subLabel: null, value: null };
    const intl = getSystemLocale.intl;
    obj[0] = intl.string(getSystemLocale.t.Boxc8R);
    const intl2 = getSystemLocale.intl;
    obj[1] = intl2.string(getSystemLocale.t["nLj+nc"]);
    obj[2] = create.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    const items = [obj, , ];
    obj = { label: null, subLabel: null, value: null };
    const intl3 = getSystemLocale.intl;
    obj[0] = intl3.string(getSystemLocale.t.YOIKBt);
    const intl4 = getSystemLocale.intl;
    obj[1] = intl4.string(getSystemLocale.t.y0JZ4s);
    obj[2] = create.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS;
    items[1] = obj;
    obj = { label: null, subLabel: null, value: null };
    const intl5 = getSystemLocale.intl;
    obj[0] = intl5.string(getSystemLocale.t.u0nlJv);
    const intl6 = getSystemLocale.intl;
    obj[1] = intl6.string(getSystemLocale.t["4jnKHu"]);
    obj[2] = create.ProfileVisibility.FRIENDS_ONLY;
    items[2] = obj;
    return items;
  },
  usePredicate() {
    return apexExperiment.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
};
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ProfilePrivacySetting.tsx");

export default radio;