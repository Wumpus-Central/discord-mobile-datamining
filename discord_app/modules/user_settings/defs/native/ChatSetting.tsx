// discord_app/modules/user_settings/defs/native/ChatSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { VideoUploadQualityNitroUpsell } from "../../chat/native/SettingsChatScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(getSystemLocale /* getSystemLocale */.t["/VQax8"]);
  },
  parent: null,
  IconComponent: require("ImageTextIcon").ImageTextIcon,
  screen: obj
};
obj = {
  route: require("ME").UserSettingsSections.TEXT,
  getComponent() {
    return VideoUploadQualityNitroUpsell /* VideoUploadQualityNitroUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;