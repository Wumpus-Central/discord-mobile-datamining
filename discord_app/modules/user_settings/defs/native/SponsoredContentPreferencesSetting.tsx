// === Module 17409: SponsoredContentPreferencesSetting ===

// Module 17409 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1113 */;
import _modDef2226 from "module_2226" /* 2226 */;
import QuestsIcon from "QuestsIcon" /* 13725 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17405 */;
import SettingBuilders from "SettingBuilders" /* 11897 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2226.XUj46U);
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