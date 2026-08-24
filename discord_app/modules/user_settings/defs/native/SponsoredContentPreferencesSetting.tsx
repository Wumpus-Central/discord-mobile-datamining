// discord_app/modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../ads/SponsoredContentPreferences.messages.js";
import QuestsIcon from "../../../../design/components/Icon/native/redesign/generated/QuestsIcon.tsx";
import apexExperiment from "../../../ads/AdTopicOptOutClientExperiment.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { SponsoredContentPreferencesScreen } from "../../privacy_and_safety/native/SponsoredContentPreferencesScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.XUj46U);
  },
  parent: null,
  IconComponent: QuestsIcon.QuestsIcon,
  usePredicate: apexExperiment.useIsAdTopicOptOutClientEnabled,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.SPONSORED_CONTENT_PREFERENCES,
  getComponent() {
    return SponsoredContentPreferencesScreen /* SponsoredContentPreferencesScreen */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/SponsoredContentPreferencesSetting.tsx");

export default route;