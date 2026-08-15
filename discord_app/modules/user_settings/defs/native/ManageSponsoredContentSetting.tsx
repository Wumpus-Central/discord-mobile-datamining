// discord_app/modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../../ads/SponsoredContentPreferences.messages.js";
import { AdTopicRow } from "../../privacy_and_safety/native/ManageSponsoredContentScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxy.yyhs9L);
  },
  parent: require("MobileUserSettings").MobileUserSettings.SPONSORED_CONTENT_PREFERENCES,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.MANAGE_SPONSORED_CONTENT,
  getComponent() {
    return AdTopicRow.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("createToggle").fileFinishedImporting("modules/user_settings/defs/native/ManageSponsoredContentSetting.tsx");

export default route;