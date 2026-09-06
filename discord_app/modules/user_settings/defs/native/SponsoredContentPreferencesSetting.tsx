// === Module 15859: SponsoredContentPreferencesSetting ===

// Module 15859 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1114 */;
import _modDef2070 from "module_2070" /* 2070 */;
import QuestsIcon from "QuestsIcon" /* 14994 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 15857 */;
import SettingBuilders from "SettingBuilders" /* 11468 */;
import size from "module_2" /* 2 */;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2070.XUj46U);
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