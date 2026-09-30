// === Module 15684: SponsoredContentPreferencesSetting ===

// Module 15684 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1074 */;
import util from "util" /* 1115 */;
import _modDef2157 from "module_2157" /* 2157 */;
import QuestsIcon from "QuestsIcon" /* 14737 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 15682 */;
import SettingBuilders from "SettingBuilders" /* 11211 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2157.XUj46U);
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