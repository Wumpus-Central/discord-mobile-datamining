// discord_app/modules/user_settings/defs/native/ProfilePrivacySetting.tsx
import createToggle from "createToggle";

const radio = createToggle.createRadio({
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.Qnf32C);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = require("../../UserSettings.tsx") /* explicitContentFromProto */.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = require("../../UserSettings.tsx") /* explicitContentFromProto */.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = require("../../UserSettings.tsx") /* explicitContentFromProto */.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    let obj = require("../../../user_profile/PrivateProfilesExperiment.tsx") /* apexExperiment */;
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = tmp2(14001).computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        obj = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
        ({ direction: obj4[0], affectedGuildIds: obj4[1], settingName: obj4[2], mappedActivityValue: obj4[3] } = profileToActivityUpsell);
        require("../../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(tmp2(1959)(14002, dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj);
        const obj3 = require("../../../action_sheet/native/ActionSheetActionCreators.tsx");
      }
      const tmp2Result = tmp2(14001);
    }
  },
  useOptions() {
    let obj = { label: null, subLabel: null, value: null };
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.Boxc8R);
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["nLj+nc"]);
    obj[2] = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    const items = [obj, , ];
    obj = { label: null, subLabel: null, value: null };
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.YOIKBt);
    const intl4 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl4.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.y0JZ4s);
    obj[2] = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS;
    items[1] = obj;
    obj = { label: null, subLabel: null, value: null };
    const intl5 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl5.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.u0nlJv);
    const intl6 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl6.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["4jnKHu"]);
    obj[2] = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ProfileVisibility.FRIENDS_ONLY;
    items[2] = obj;
    return items;
  },
  usePredicate() {
    return require("../../../user_profile/PrivateProfilesExperiment.tsx") /* apexExperiment */.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
});
let obj = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.Qnf32C);
  },
  parent: require("MobileSetting").MobileSetting.DATA_AND_PRIVACY,
  useValue() {
    const ProfileVisibility = require("../../UserSettings.tsx") /* explicitContentFromProto */.ProfileVisibility;
    return ProfileVisibility.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const ProfileVisibility = require("../../UserSettings.tsx") /* explicitContentFromProto */.ProfileVisibility;
    const setting = ProfileVisibility.getSetting();
    const ProfileVisibility2 = require("../../UserSettings.tsx") /* explicitContentFromProto */.ProfileVisibility;
    ProfileVisibility2.updateSetting(NumberResult);
    let obj = require("../../../user_profile/PrivateProfilesExperiment.tsx") /* apexExperiment */;
    if (obj.getIsInPrivateProfilesExperiment("ProfilePrivacySetting")) {
      const profileToActivityUpsell = tmp2(14001).computeProfileToActivityUpsell(setting, NumberResult);
      if (null != profileToActivityUpsell) {
        obj = { direction: null, affectedGuildIds: null, settingName: null, mappedActivityValue: null };
        ({ direction: obj4[0], affectedGuildIds: obj4[1], settingName: obj4[2], mappedActivityValue: obj4[3] } = profileToActivityUpsell);
        require("../../../action_sheet/native/ActionSheetActionCreators.tsx").openLazy(tmp2(1959)(14002, dependencyMap.paths), "ProfileToActivityPrivacyUpsellActionSheet", obj);
        const obj3 = require("../../../action_sheet/native/ActionSheetActionCreators.tsx");
      }
      const tmp2Result = tmp2(14001);
    }
  },
  useOptions() {
    let obj = { label: null, subLabel: null, value: null };
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.Boxc8R);
    const intl2 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["nLj+nc"]);
    obj[2] = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ProfileVisibility.FRIENDS_AND_ALL_GUILDS;
    const items = [obj, , ];
    obj = { label: null, subLabel: null, value: null };
    const intl3 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.YOIKBt);
    const intl4 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl4.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.y0JZ4s);
    obj[2] = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ProfileVisibility.FRIENDS_AND_SMALL_GUILDS;
    items[1] = obj;
    obj = { label: null, subLabel: null, value: null };
    const intl5 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[0] = intl5.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.u0nlJv);
    const intl6 = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    obj[1] = intl6.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["4jnKHu"]);
    obj[2] = require("../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx") /* create */.ProfileVisibility.FRIENDS_ONLY;
    items[2] = obj;
    return items;
  },
  usePredicate() {
    return require("../../../user_profile/PrivateProfilesExperiment.tsx") /* apexExperiment */.useIsInPrivateProfilesExperiment("ProfilePrivacySetting");
  }
};
const result = require("apexExperiment").fileFinishedImporting("modules/user_settings/defs/native/ProfilePrivacySetting.tsx");

export default radio;