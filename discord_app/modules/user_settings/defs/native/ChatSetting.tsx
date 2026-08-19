// discord_app/modules/user_settings/defs/native/ChatSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import ImageTextIcon from "../../../../design/components/Icon/native/redesign/generated/ImageTextIcon.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { VideoUploadQualityNitroUpsell } from "../../chat/native/SettingsChatScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.TEXT,
  getComponent() {
    return VideoUploadQualityNitroUpsell /* VideoUploadQualityNitroUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;