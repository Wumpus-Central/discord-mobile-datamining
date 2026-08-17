// discord_app/modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2041 */;
import MobileUserSettings from "MobileUserSettings" /* 8198 */;
import createToggle from "createToggle" /* 10669 */;
import { AdTopicRow } from "../../privacy_and_safety/native/ManageSponsoredContentScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.yyhs9L);
  },
  parent: MobileUserSettings.MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.MANAGE_SPONSORED_CONTENT,
  getComponent() {
    return AdTopicRow.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx");

export default route;