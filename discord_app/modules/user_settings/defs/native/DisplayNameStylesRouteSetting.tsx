// discord_app/modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import messagesProxyDefault from "messagesProxy" /* 2693 */;
import createToggle from "createToggle" /* 10669 */;
import { ApplyButton } from "../../../display_name_styles/native/DisplayNameStylesEditScreen.tsx";

obj = {
  useTitle() {
    const intl = getSystemLocale.intl;
    return intl.string(messagesProxyDefault.ZPMAlX);
  },
  parent: null,
  unsearchable: true,
  screen: obj,
  usePredicate() {
    return true;
  }
};
obj = {
  route: ME.UserSettingsSections.DISPLAY_NAME_STYLES,
  getComponent() {
    return ApplyButton.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/DisplayNameStylesRouteSetting.tsx");

export default route;