// discord_app/modules/user_settings/defs/native/ContentAndSocialSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import FriendsIcon from "../../../../design/components/Icon/native/redesign/generated/FriendsIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { ContentAndSocialSettings } from "../../content_and_social/native/ContentAndSocialScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.CONTENT_AND_SOCIAL,
  getComponent() {
    return ContentAndSocialSettings /* ContentAndSocialSettings */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ContentAndSocialSetting.tsx");

export default route;