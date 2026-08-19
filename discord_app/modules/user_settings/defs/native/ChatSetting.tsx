// === Module 14764: route ===

// Module 14764 (route)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ImageTextIcon from "ImageTextIcon" /* 14765 */;
import createToggle from "createToggle" /* 10669 */;

const obj = {
  route: ME.UserSettingsSections.TEXT,
  getComponent() {
    return require(14767) /* VideoUploadQualityNitroUpsell */.default;
  }
};
const route = createToggle.createRoute(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/defs/native/ChatSetting.tsx");

export default route;