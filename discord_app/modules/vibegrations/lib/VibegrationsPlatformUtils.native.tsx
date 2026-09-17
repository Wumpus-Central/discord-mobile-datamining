// discord_app/modules/vibegrations/lib/VibegrationsPlatformUtils.native.tsx
import PushNotificationDefault from "../../../lib/pushnotification/PushNotification.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";

const LocalNotificationTypes = fn(13832).LocalNotificationTypes;
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
    const obj2 = { category: "local", alertTitle: title, alertBody: body, userInfo: null };
    if (null != guildId) {
      const obj4 = { guildId };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    const merged = Object.assign(obj5);
    obj2.userInfo = { type: LocalNotificationTypes.VIBEGRATIONS, projectId, channel_id: projectId };
    const result = PushNotificationDefault.presentLocalNotification(obj2);
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
