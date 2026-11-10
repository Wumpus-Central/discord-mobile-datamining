// === Module 18262: SponsoredContentPreferencesSetting ===

// Module 18262 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import _modDef2231 from "module_2231" /* 2231 */;
import QuestsIcon from "QuestsIcon" /* 14980 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 18258 */;
import SettingBuilders from "SettingBuilders" /* 11694 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2231.XUj46U);
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