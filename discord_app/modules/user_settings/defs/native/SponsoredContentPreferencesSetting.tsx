// === Module 16247: SponsoredContentPreferencesSetting ===

// Module 16247 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import _modDef2174 from "module_2174" /* 2174 */;
import QuestsIcon from "QuestsIcon" /* 13002 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16244 */;
import SettingBuilders from "SettingBuilders" /* 10663 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2174.XUj46U);
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