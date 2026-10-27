// === Module 17303: SponsoredContentPreferencesSetting ===

// Module 17303 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1084 */;
import util from "util" /* 1125 */;
import _modDef2110 from "module_2110" /* 2110 */;
import QuestsIcon from "QuestsIcon" /* 14184 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17300 */;
import SettingBuilders from "SettingBuilders" /* 11212 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2110.XUj46U);
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