// === Module 15001: route ===

// Module 15001 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2041 */;
import QuestsIcon from "QuestsIcon" /* 14351 */;
import apexExperiment from "apexExperiment" /* 14999 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.SPONSORED_CONTENT_PREFERENCES,
  getComponent() {
    return require(15002) /* SponsoredContentPreferencesScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx");

export default route;