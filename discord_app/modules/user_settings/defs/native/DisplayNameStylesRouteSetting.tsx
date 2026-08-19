// discord_app/modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import messagesProxyDefault from "../../../display_name_styles/intl/DisplayNameStyles.messages.js";
import createToggle from "../../../settings/native/renderer/SettingBuilders.tsx";
import { ApplyButton } from "../../../display_name_styles/native/DisplayNameStylesEditScreen.tsx";

const obj = {
  route: ME.UserSettingsSections.DISPLAY_NAME_STYLES,
  getComponent() {
    return ApplyButton /* ApplyButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;