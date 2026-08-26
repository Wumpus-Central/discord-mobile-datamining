// === Module 14937: route ===

// Module 14937 (route)
import set from "set" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ImageTextIcon from "ImageTextIcon" /* 14938 */;
import createToggle from "createToggle" /* 10584 */;

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
    return require(14940) /* VideoUploadQualityNitroUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = set.fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;