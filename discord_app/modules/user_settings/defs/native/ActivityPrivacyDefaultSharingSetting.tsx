// discord_app/modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx
import react2 from "../../../../../_runtime/00576_react.js";
import intl6 from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import asyncRequire from "../../../../../_runtime/01987_asyncRequire.js";
import UserSettings from "../../UserSettings.tsx";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import SettingsConstants from "../../core/native/SettingsConstants.tsx";
import ActivityPrivacyUpsellUtils from "../../../activity_privacy/ActivityPrivacyUpsellUtils.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import SettingBuilders from "../../../settings/native/renderer/SettingBuilders.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const MobileUserSettings = SettingsConstants.MobileUserSettings;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let intl5;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF,
          label: intl.string(intl6.t.FzgQna),
          subLabel: intl2.string(intl6.t.SQxoyc),
        };
        intl = intl6.intl;
        intl2 = intl6.intl;
        cResult[0] = obj2;
        first = obj2;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = {
          value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
          label: intl3.string(intl6.t["1hvuGH"]),
          subLabel: intl4.string(intl6.t.odUCPE),
        };
        intl3 = intl6.intl;
        intl4 = intl6.intl;
        cResult[1] = obj3;
        tmp5 = obj3;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [first, tmp5];
        const obj4 = {
          value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON,
          label: intl5.string(intl6.t.fQc5la),
        };
        intl5 = intl6.intl;
        items[2] = obj4;
        cResult[2] = items;
        tmp6 = items;
      } else {
        tmp6 = cResult[2];
      }
      return tmp6;
    }
  : () =>
      react.useMemo(() => {
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let intl5;
        const obj = {
          value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_OFF,
          label: intl.string(intl6.t.FzgQna),
          subLabel: intl2.string(intl6.t.SQxoyc),
        };
        intl = intl6.intl;
        intl2 = intl6.intl;
        const items = [obj, ,];
        const obj2 = {
          value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS,
          label: intl3.string(intl6.t["1hvuGH"]),
          subLabel: intl4.string(intl6.t.odUCPE),
        };
        intl3 = intl6.intl;
        intl4 = intl6.intl;
        items[1] = obj2;
        const obj3 = {
          value: preloaded_user_settings.GuildActivityStatusRestrictionDefaultV2.ACTIVITY_STATUS_ON,
          label: intl5.string(intl6.t.fQc5la),
        };
        intl5 = intl6.intl;
        items[2] = obj3;
        return items;
      }, []);
ReactCompilerGating = ReactCompilerGating_mod;
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
let obj = {
  useTitle() {
    const intl = intl6.intl;
    return intl.string(intl6.t.vpgck1);
  },
  parent: MobileUserSettings.CONTENT_AND_SOCIAL_DISCORD,
  useOptions: tmp2,
  useValue: () => {
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    return DefaultGuildsActivityRestrictedV2.useSetting();
  },
  onValueChange(arg0) {
    const NumberResult = Number(arg0);
    const DefaultGuildsActivityRestrictedV2 = UserSettings.DefaultGuildsActivityRestrictedV2;
    const setting = DefaultGuildsActivityRestrictedV2.getSetting();
    const DefaultGuildsActivityRestrictedV22 = UserSettings.DefaultGuildsActivityRestrictedV2;
    DefaultGuildsActivityRestrictedV22.updateSetting(NumberResult);
    const obj = ActivityPrivacyUpsellUtils;
    const affectedGuilds = obj.computeAffectedGuilds(setting, NumberResult);
    if (null != affectedGuilds) {
      const tmp2Result = ActivityPrivacyUpsellUtils;
      const activityRestrictionSettingName = tmp2Result.getActivityRestrictionSettingName(NumberResult);
      const obj2 = { direction: null, affectedGuildIds: null, settingName: activityRestrictionSettingName };
      ({ direction: obj4.direction, affectedGuildIds: obj4.affectedGuildIds } = affectedGuilds);
      const obj3 = ActionSheetActionCreatorsDefault;
      obj3.openLazy(asyncRequire(15855, dependencyMap.paths), "ActivityPrivacyUpsellActionSheet", obj2);
    }
  },
};
const radio = SettingBuilders.createRadio(obj);
const result1 = size.fileFinishedImporting(
  "modules/user_settings/defs/native/ActivityPrivacyDefaultSharingSetting.tsx",
);

export default radio;
