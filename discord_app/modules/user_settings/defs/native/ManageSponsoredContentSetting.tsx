// discord_app/modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../ads/SponsoredContentPreferences.messages.js";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { AdTopicRow } from "../../privacy_and_safety/native/ManageSponsoredContentScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.MANAGE_SPONSORED_CONTENT,
  getComponent() {
    return AdTopicRow /* AdTopicRow */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx");

export default route;