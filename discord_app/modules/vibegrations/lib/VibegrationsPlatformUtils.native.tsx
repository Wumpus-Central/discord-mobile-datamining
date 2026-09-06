// discord_app/modules/vibegrations/lib/VibegrationsPlatformUtils.native.tsx
import PushNotificationDefault from "../../../lib/pushnotification/PushNotification.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const LocalNotificationTypes = fn(13716).LocalNotificationTypes;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPlatformUtils.native.tsx");

export default {
  openVibegrationsAppInstallModal() {
    return Promise.resolve();
  },
  isWindowFocused() {
    return "active" === AppStateStore.getState();
  },
  areTurnNotificationsDisabled() {
    return false;
  },
  presentTurnNotification(arg0) {
    ({ projectId, guildId } = arg0);
    ({ title, body } = arg0);
    let obj = { category: "local", alertTitle: title, alertBody: body, userInfo: null };
    obj = { type: LocalNotificationTypes.VIBEGRATIONS, projectId, channel_id: projectId };
    if (null != guildId) {
      const obj1 = { guildId };
      let obj2 = obj1;
    } else {
      obj2 = {};
    }
    const merged = Object.assign(obj2);
    obj.userInfo = obj;
    const result = obj.presentLocalNotification(obj);
  },
  relayPreviewCapture() {
    return Promise.resolve({ status: "unavailable" });
  },
  relayPreviewControl() {
    return Promise.resolve({ status: "unavailable" });
  },
  releasePreviewControl() {},
  beginPreviewOperation() {},
  endPreviewOperation() {},
};
