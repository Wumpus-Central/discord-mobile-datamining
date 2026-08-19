// discord_app/modules/user_settings/defs/native/ContentAndSocialDiscordRouteSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import FriendsIcon from "../../../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import ContentAndSocialSettings from "../../content_and_social/native/ContentAndSocialScreen.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";

const obj = {
  route: ME.UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return ContentAndSocialSettings.DiscordPermissionsPage;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialDiscordRouteSetting.tsx");

export default route;