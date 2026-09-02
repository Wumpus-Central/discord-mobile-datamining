// === Module 16407: ? ===

// Module 16407
import NativeModulesDefault from "NativeModules" /* 9670 */;
import closure_2 from "getState" /* 7166 */;
import { LocalNotificationTypes } from "LocalNotificationTypes" /* 13592 */;

let result = require("set").fileFinishedImporting("modules/vibegrations/lib/VibegrationsPlatformUtils.native.tsx");

export default {
  openVibegrationsAppInstallModal() {
    return Promise.resolve();
  },
  isWindowFocused() {
    return "active" === state.getState();
  },
  areTurnNotificationsDisabled() {
    return false;
  },
  presentTurnNotification(arg0) {
    ({ projectId, guildId } = arg0);
    ({ title, body } = arg0);
    let obj = NativeModulesDefault;
    obj = { category: "local", alertTitle: title, alertBody: body, userInfo: null };
    obj = { type: LocalNotificationTypes.VIBEGRATIONS, projectId, channel_id: projectId };
    if (null != guildId) {
      obj1 = { guildId: null };
      obj1[0] = guildId;
      let obj2 = obj1;
    } else {
      obj2 = {};
    }
    const merged = Object.assign(obj2);
    obj[3] = obj;
    const result = obj.presentLocalNotification(obj);
  },
  relayPreviewCapture(closure_0, id, arg2) {
    return Promise.resolve({ status: "unavailable" });
  },
  relayPreviewControl(closure_0, id, request, arg3) {
    return Promise.resolve({ status: "unavailable" });
  },
  releasePreviewControl(closure_0) {

  },
  beginPreviewOperation(projectId) {

  },
  endPreviewOperation(projectId) {

  }
};