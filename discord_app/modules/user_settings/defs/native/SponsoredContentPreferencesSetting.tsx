// === Module 15764: SponsoredContentPreferencesSetting ===

// Module 15764 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1085 */;
import util from "util" /* 1126 */;
import _modDef2161 from "module_2161" /* 2161 */;
import QuestsIcon from "QuestsIcon" /* 14799 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 15762 */;
import SettingBuilders from "SettingBuilders" /* 11129 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2161.XUj46U);
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