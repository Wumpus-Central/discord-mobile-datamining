// === Module 16902: SponsoredContentPreferencesSetting ===

// Module 16902 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1087 */;
import util from "util" /* 1128 */;
import _modDef2177 from "module_2177" /* 2177 */;
import QuestsIcon from "QuestsIcon" /* 13862 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 16899 */;
import SettingBuilders from "SettingBuilders" /* 11003 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2177.XUj46U);
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