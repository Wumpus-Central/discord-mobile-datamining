// discord_app/modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx
import computeAlertSettings from "computeAlertSettings";
import createToggle from "createToggle";
import { initialize } from "../../../../../discord_common/js/packages/flux/index.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { UserSettingsCommunityNotifications } from "../../notifications/native/UserSettingsCommunityNotifications.tsx";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t.D9yVAH);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useDescription: function useCommunityActivityAlertsSettingDescription() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["0PhAOH"]);
  },
  usePredicate: function useHasCommunityActivityAlertsSetting() {
    const items = [computeAlertSettings];
    return initialize /* initialize */.useStateFromStores(items, () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.COMMUNITY_ALERTS,
  getComponent() {
    return UserSettingsCommunityNotifications /* UserSettingsCommunityNotifications */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default createToggle;