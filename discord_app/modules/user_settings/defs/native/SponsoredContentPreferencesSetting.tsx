// === Module 18596: SponsoredContentPreferencesSetting ===

// Module 18596 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import _modDef2236 from "module_2236" /* 2236 */;
import QuestsIcon from "QuestsIcon" /* 15099 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 18592 */;
import SettingBuilders from "SettingBuilders" /* 12612 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2236.XUj46U);
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