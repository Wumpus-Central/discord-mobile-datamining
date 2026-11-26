// discord_app/modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3207 from "../../../notifications/NotificationSettings.messages.js";
import GuildIncidentsStore from "../../../guild_antiraid/GuildIncidentsStore.tsx";

require = fn;
let SettingBuilders = fn(11962);
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.D9yVAH);
  },
  parent: fn(9555).MobileUserSettings.NOTIFICATIONS,
  useDescription: function useCommunityActivityAlertsSettingDescription() {
    const intl = util.intl;
    return intl.string(util.t["0PhAOH"]);
  },
  usePredicate: function useHasCommunityActivityAlertsSetting() {
    items = [GuildIncidentsStore];
    return initialize.useStateFromStores(
      items,
      () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0,
    );
  },
  screen: {
    route: fn(1071).UserSettingsSections.COMMUNITY_ALERTS,
    getComponent() {
      return require("UserSettingsCommunityNotifications").default;
    },
  },
});
SettingBuilders = fn(11962);
const obj4 = {};
const merged = Object.assign(route);
obj4.useTitle = function useTitle() {
  const intl = util.intl;
  return intl.string(_modDef3207.GI8o2C);
};
obj4.useDescription = function useDescription() {
  const intl = util.intl;
  return intl.string(_modDef3207["5g09KR"]);
};
obj4.parent = fn(17102).MobileNotifSettings.NOTIF_CATEGORY_SERVERS;
const route1 = SettingBuilders.createRoute(obj4);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default route;
export const RedesignCommunityActivityAlertsSetting = route1;
