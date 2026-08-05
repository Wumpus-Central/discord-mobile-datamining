// discord_app/modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx
import computeAlertSettings from "computeAlertSettings";
import createToggle from "createToggle";

const require = arg1;
createToggle = {
  useTitle() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.D9yVAH);
  },
  parent: require("MobileSetting").MobileSetting.NOTIFICATIONS,
  useDescription: function useCommunityActivityAlertsSettingDescription() {
    const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["0PhAOH"]);
  },
  usePredicate: function useHasCommunityActivityAlertsSetting() {
    const items = [computeAlertSettings];
    return require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */.useStateFromStores(items, () => Object.keys(guildAlertSettings.getGuildAlertSettings()).length > 0);
  },
  screen: createToggle
};
createToggle = {
  route: require("ME").UserSettingsSections.COMMUNITY_ALERTS,
  getComponent() {
    return require("../../notifications/native/UserSettingsCommunityNotifications.tsx") /* UserSettingsCommunityNotifications */.default;
  }
};
createToggle = createToggle.createRoute(createToggle);
const result = require("ME").fileFinishedImporting("modules/user_settings/defs/native/CommunityActivityAlertsSetting.tsx");

export default createToggle;