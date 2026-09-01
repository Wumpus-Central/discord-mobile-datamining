// discord_app/modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import closure_2 from "../../../guild_antiraid/GuildIncidentsStore.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsCommunityNotifications } from "../../notifications/native/UserSettingsCommunityNotifications.tsx";

require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.D9yVAH);
  },
  parent: require("MobileUserSettings").MobileUserSettings.NOTIFICATIONS,
  useDescription: function useCommunityActivityAlertsSettingDescription() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["0PhAOH"]);
  },
  usePredicate: function useHasCommunityActivityAlertsSetting() {
    const items = [closure_2];
    return initialize.useStateFromStores(
      items,
      () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0,
    );
  },
  screen: createToggle,
};
createToggle = {
  route: require("ME").UserSettingsSections.COMMUNITY_ALERTS,
  getComponent() {
    return UserSettingsCommunityNotifications /* UserSettingsCommunityNotifications */.default;
  },
};
createToggle = createToggle.createRoute(createToggle);
const result = require("set").fileFinishedImporting(
  "modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx",
);

export default createToggle;
