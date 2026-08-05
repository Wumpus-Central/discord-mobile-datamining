// discord_app/modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx
import createToggle from "createToggle";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { messagesProxy } from "../../../display_name_styles/intl/DisplayNameStyles.messages.js";
import { ApplyButton } from "../../../display_name_styles/native/DisplayNameStylesEditScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale /* getSystemLocale */.intl;
    return intl.string(messagesProxy.ZPMAlX);
  },
  parent: null,
  unsearchable: true,
  screen: obj,
  usePredicate() {
    return true;
  }
};
obj = {
  route: require("ME").UserSettingsSections.DISPLAY_NAME_STYLES,
  getComponent() {
    return ApplyButton /* ApplyButton */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = require("getSystemLocale").fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;