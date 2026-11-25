// === Module 17504: SponsoredContentPreferencesSetting ===

// Module 17504 (SponsoredContentPreferencesSetting)
import Constants from "Constants" /* 1071 */;
import util from "util" /* 1112 */;
import _modDef2287 from "module_2287" /* 2287 */;
import QuestsIcon from "QuestsIcon" /* 14244 */;
import AdTopicOptOutClientExperiment from "AdTopicOptOutClientExperiment" /* 17500 */;
import SettingBuilders from "SettingBuilders" /* 11914 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(_modDef2287.XUj46U);
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