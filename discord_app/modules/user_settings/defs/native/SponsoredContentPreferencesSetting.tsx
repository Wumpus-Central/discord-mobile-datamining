// discord_app/modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../../ads/SponsoredContentPreferences.messages.js";
import { SponsoredContentPreferencesScreen } from "../../privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxy.XUj46U);
  },
  parent: null,
  IconComponent: require("QuestsIcon").QuestsIcon,
  usePredicate: require("apexExperiment").useIsAdTopicOptOutClientEnabled,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.SPONSORED_CONTENT_PREFERENCES,
  getComponent() {
    return SponsoredContentPreferencesScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx");

export default route;