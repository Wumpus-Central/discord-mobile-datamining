// === Module 16064: SponsoredContentPreferencesSetting ===

// Module 16064 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import _modDef2173 from "module_2173" /* 2173 */;
import QuestsIcon from "QuestsIcon" /* 15080 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16061 */;
import SettingBuilders from "SettingBuilders" /* 11262 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2173.XUj46U);
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  usePredicate: AdTopicOptOutClientExperiment.useIsAdTopicOptOutClientEnabled,
  screen: {
    route: Constants.UserSettingsSections.SPONSORED_CONTENT_PREFERENCES,
    getComponent() {
      return require("SponsoredContentPreferencesScreen").default;
    }
  }
});
const result = size.fileFinishedImporting("modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx");

export default route;