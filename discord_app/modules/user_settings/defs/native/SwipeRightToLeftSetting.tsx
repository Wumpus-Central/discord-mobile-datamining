// discord_app/modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import create from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import explicitContentFromProto from "../../UserSettings.tsx";
import MobileUserSettings from "../../core/native/SettingsConstants.tsx";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { UserSettingsSwipeRightToLeft } from "../../chat/native/SwipeRightToLeftScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.SWIPE_RIGHT_TO_LEFT,
  getComponent() {
    return UserSettingsSwipeRightToLeft /* UserSettingsSwipeRightToLeft */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/SwipeRightToLeftSetting.tsx");

export default route;