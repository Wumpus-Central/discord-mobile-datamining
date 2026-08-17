// discord_app/modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2041 */;
import QuestsIcon from "QuestsIcon" /* 14351 */;
import apexExperiment from "apexExperiment" /* 14999 */;
import createToggle from "createToggle" /* 10669 */;
import { SponsoredContentPreferencesScreen } from "../../privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.XUj46U);
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  usePredicate: apexExperiment.useIsAdTopicOptOutClientEnabled,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.SPONSORED_CONTENT_PREFERENCES,
  getComponent() {
    return SponsoredContentPreferencesScreen.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx");

export default route;