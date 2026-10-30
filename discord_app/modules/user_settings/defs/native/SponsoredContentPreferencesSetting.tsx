// === Module 17845: SponsoredContentPreferencesSetting ===

// Module 17845 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1072 */;
import util from "util" /* 1114 */;
import _modDef2108 from "module_2108" /* 2108 */;
import QuestsIcon from "QuestsIcon" /* 14676 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17840 */;
import SettingBuilders from "SettingBuilders" /* 11505 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2108.XUj46U);
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