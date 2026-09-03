// === Module 15701: route ===

// Module 15701 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import getSystemLocale from "getSystemLocale" /* 1233 */;
import messagesProxyDefault from "messagesProxy" /* 2042 */;
import QuestsIcon from "QuestsIcon" /* 14838 */;
import apexExperiment from "apexExperiment" /* 15699 */;
import createToggle from "createToggle" /* 11292 */;

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
    return require(15702) /* SponsoredContentPreferencesScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx");

export default route;