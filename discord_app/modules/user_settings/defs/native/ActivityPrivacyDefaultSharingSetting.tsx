// discord_app/modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx
import util from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../../UserSettings.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import ActivityPrivacyMatchingExperiment from "../../../activity_privacy/ActivityPrivacyMatchingExperiment.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.vpgck1);
  },
  parent: fn(7975).MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  usePredicate() {
    return ActivityPrivacyMatchingExperiment.useIsInActivityPrivacyCopyExperiment(
      "ActivityPrivacyDefaultSharingSetting",
    );
  },
  useOptions() {
    return noop.useMemo(() => {
      let obj = {
        value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF,
        label: null,
        subLabel: null,
      };
      const intl = util.intl;
      obj.label = intl.string(util.t.FzgQna);
      const intl2 = util.intl;
      obj.subLabel = intl2.string(util.t.SQxoyc);
      const items = [obj, ,];
      obj = {
        value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
        label: null,
        subLabel: null,
      };
      const intl3 = util.intl;
      obj.label = intl3.string(util.t["1hvuGH"]);
      const intl4 = util.intl;
      obj.subLabel = intl4.string(util.t.odUCPE);
      items[1] = obj;
      obj = { value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON, label: null };
      const intl5 = util.intl;
      obj.label = intl5.string(util.t.fQc5la);
      items[2] = obj;
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
    let obj = ActivityPrivacyMatchingExperiment;
    if (obj.getIsInActivityPrivacyUpsellExperiment("ActivityPrivacyDefaultSharingSetting")) {
      let tmp2Result = tmp2(14851);
      const affectedGuilds = tmp2Result.computeAffectedGuilds(setting, NumberResult);
      if (null != affectedGuilds) {
        tmp2Result = tmp2(14851);
        const activityRestrictionSettingName = tmp2Result.getActivityRestrictionSettingName(NumberResult);
        obj = { direction: null, affectedGuildIds: null, settingName: null };
        ({ direction: obj5.direction, affectedGuildIds: obj5.affectedGuildIds } = affectedGuilds);
        obj.settingName = activityRestrictionSettingName;
        ActionSheetActionCreatorsDefault.openLazy(
          tmp2(1896)(15908, dependencyMap.paths),
          "ActivityPrivacyUpsellActionSheet",
          obj,
        );
      }
    }
  },
};
SettingBuilders = SettingBuilders.createRadio(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx");

export default SettingBuilders;
