// discord_app/modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import GuildIncidentsStore from "../../../guild_antiraid/GuildIncidentsStore.tsx";

require = fn;
fn(11468);
let SettingBuilders = {
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.D9yVAH);
  },
  parent: fn(7975).MobileUserSettings.NOTIFICATIONS,
  useDescription: function useCommunityActivityAlertsSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t["0PhAOH"]);
  },
  usePredicate: function useHasCommunityActivityAlertsSetting() {
    const items = [GuildIncidentsStore];
    return initialize.useStateFromStores(
      items,
      () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0,
    );
  },
  screen: {
    route: fn(1074).UserSettingsSections.COMMUNITY_ALERTS,
    getComponent() {
      return require("UserSettingsCommunityNotifications").default;
    },
  },
};
SettingBuilders = SettingBuilders.createRoute(SettingBuilders);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default SettingBuilders;
