// discord_app/modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { VerificationListItem } from "../../privacy_and_safety/native/SettingsSecureFramesVerificationsScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.SECURE_FRAMES_VERIFIED_DEVICES,
  getComponent() {
    return VerificationListItem /* VerificationListItem */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/SecureFramesVerifiedDevicesSetting.tsx");

export default route;