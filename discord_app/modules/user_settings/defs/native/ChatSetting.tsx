// discord_app/modules/user_settings/defs/native/ChatSetting.tsx
import set from "../../../../../_runtime/00002_set.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import ImageTextIcon from "../../../../design/components/Icon/native/redesign/generated/ImageTextIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { VideoUploadQualityNitroUpsell } from "../../chat/native/SettingsChatScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["/VQax8"]);
  },
  parent: null,
  IconComponent: ImageTextIcon.ImageTextIcon,
  screen: obj
};
obj = {
  route: ME.UserSettingsSections.TEXT,
  getComponent() {
    return VideoUploadQualityNitroUpsell /* VideoUploadQualityNitroUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;