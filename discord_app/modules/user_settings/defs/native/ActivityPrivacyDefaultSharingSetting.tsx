// discord_app/modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import asyncRequireImpl from "../../../../../_runtime/01980_asyncRequireImpl.js";
import UserSettings from "../../UserSettings.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ActivityPrivacyUpsellUtils from "../../../activity_privacy/ActivityPrivacyUpsellUtils.tsx";
import ActivityPrivacyMatchingExperiment from "../../../activity_privacy/ActivityPrivacyMatchingExperiment.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const SettingBuilders = fn(10993);
const radio = SettingBuilders.createRadio({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.vpgck1);
  },
  parent: fn(7412).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  usePredicate() {
    return ActivityPrivacyMatchingExperiment.useIsInActivityPrivacyCopyExperiment(
      "ActivityPrivacyDefaultSharingSetting",
    );
  },
  useOptions() {
    return noop.useMemo(() => {
      const obj = {
        value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF,
        label: null,
        subLabel: null,
      };
      const intl = util.intl;
      obj.label = intl.string(util.t.FzgQna);
      const intl2 = util.intl;
      obj.subLabel = intl2.string(util.t.SQxoyc);
      const items = [obj, ,];
      const obj2 = {
        value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
        label: null,
        subLabel: null,
      };
      const intl3 = util.intl;
      obj2.label = intl3.string(util.t["1hvuGH"]);
      const intl4 = util.intl;
      obj2.subLabel = intl4.string(util.t.odUCPE);
      items[1] = obj2;
      const obj3 = {
        value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON,
        label: null,
      };
      const intl5 = util.intl;
      obj3.label = intl5.string(util.t.fQc5la);
      items[2] = obj3;
      return items;
    }, []);
  },
  useValue() {
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    return DefaultGuildsActivityRestrictedV2.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    const setting = DefaultGuildsActivityRestrictedV2.getSetting();
    const DefaultGuildsActivityRestrictedV22 = UserSettings.DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV22.updateSetting(NumberResult);
    if (obj.getIsInActivityPrivacyUpsellExperiment("ActivityPrivacyDefaultSharingSetting")) {
      const affectedGuilds = ActivityPrivacyUpsellUtils.computeAffectedGuilds(setting, NumberResult);
      if (null != affectedGuilds) {
        const activityRestrictionSettingName =
          ActivityPrivacyUpsellUtils.getActivityRestrictionSettingName(NumberResult);
        const tmp2Result2 = ActivityPrivacyUpsellUtils;
        const obj2 = { direction: null, affectedGuildIds: null, settingName: null };
        ({ direction: obj5.direction, affectedGuildIds: obj5.affectedGuildIds } = affectedGuilds);
        obj2.settingName = activityRestrictionSettingName;
        ActionSheetActionCreatorsDefault.openLazy(
          asyncRequireImpl(15500, dependencyMap.paths),
          "ActivityPrivacyUpsellActionSheet",
          obj2,
        );
      }
      const tmp2Result = ActivityPrivacyUpsellUtils;
    }
    obj = ActivityPrivacyMatchingExperiment;
  },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx");

export default radio;
