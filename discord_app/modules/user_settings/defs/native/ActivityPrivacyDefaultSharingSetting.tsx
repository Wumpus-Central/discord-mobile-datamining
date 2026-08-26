// discord_app/modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx
import getSystemLocale from "../../../../intl/index.native.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import useIsInActivityPrivacyCopyExperiment from "../../../activity_privacy/ActivityPrivacyMatchingExperiment.tsx";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.vpgck1);
  },
  parent: require("MobileUserSettings").MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  usePredicate() {
    return useIsInActivityPrivacyCopyExperiment.useIsInActivityPrivacyCopyExperiment("ActivityPrivacyDefaultSharingSetting");
  },
  useOptions() {
    return React.useMemo(() => {
      let obj = { value: callback(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF, label: null, subLabel: null };
      const intl = callback(1236).intl;
      obj[1] = intl.string(callback(1236).t.FzgQna);
      const intl2 = callback(1236).intl;
      obj[2] = intl2.string(callback(1236).t.SQxoyc);
      const items = [obj, , ];
      obj = { value: callback(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS, label: null, subLabel: null };
      const intl3 = callback(1236).intl;
      obj[1] = intl3.string(callback(1236).t["1hvuGH"]);
      const intl4 = callback(1236).intl;
      obj[2] = intl4.string(callback(1236).t.odUCPE);
      items[1] = obj;
      obj = { value: callback(1306).GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON, label: null };
      const intl5 = callback(1236).intl;
      obj[1] = intl5.string(callback(1236).t.fQc5la);
      items[2] = obj;
      return items;
    }, []);
  },
  useValue() {
    const DefaultGuildsActivityRestrictedV2 = explicitContentFromProto.DefaultGuildsActivityRestrictedV2;
    return DefaultGuildsActivityRestrictedV2.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const DefaultGuildsActivityRestrictedV2 = explicitContentFromProto.DefaultGuildsActivityRestrictedV2;
    const setting = DefaultGuildsActivityRestrictedV2.getSetting();
    const DefaultGuildsActivityRestrictedV22 = explicitContentFromProto.DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV22.updateSetting(NumberResult);
    let obj = useIsInActivityPrivacyCopyExperiment;
    if (obj.getIsInActivityPrivacyUpsellExperiment("ActivityPrivacyDefaultSharingSetting")) {
      let tmp2Result = tmp2(14379);
      const affectedGuilds = tmp2Result.computeAffectedGuilds(setting, NumberResult);
      if (null != affectedGuilds) {
        tmp2Result = tmp2(14379);
        const activityRestrictionSettingName = tmp2Result.getActivityRestrictionSettingName(NumberResult);
        obj = { direction: null, affectedGuildIds: null, settingName: null };
        ({ direction: obj5[0], affectedGuildIds: obj5[1] } = affectedGuilds);
        obj[2] = activityRestrictionSettingName;
        ACTION_SHEET_HEIGHT_HALFDefault.openLazy(tmp2(2009)(15223, dependencyMap.paths), "ActivityPrivacyUpsellActionSheet", obj);
        const obj4 = ACTION_SHEET_HEIGHT_HALFDefault;
      }
    }
  }
};
createToggle = createToggle.createRadio(createToggle);
const result = require("set").fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx");

export default createToggle;