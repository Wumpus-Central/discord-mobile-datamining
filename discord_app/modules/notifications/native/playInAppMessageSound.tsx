// === Module 13457: playInAppMessageSound ===

// Module 13457 (playInAppMessageSound)
import MetaQuestUtils from "MetaQuestUtils" /* 1630 */;
import SoundUtils from "SoundUtils" /* 11295 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 13441 */;

require = fn;
let closure_3 = fn(13458).isInAppMessageSoundsEnabled;
const InAppNotificationTypes = fn(1087).InAppNotificationTypes;
const message1 = "message1";
let timestamp = 0;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/native/playInAppMessageSound.tsx");

export const playInAppMessageSound = function playInAppMessageSound(notification) {
  if (notification.type === InAppNotificationTypes.MESSAGE) {
    if (obj2.isMetaQuest()) {
      if (closure_3()) {
        if (!NotificationSettingsStore.isSoundDisabled(message1)) {
          const _Date = Date;
          timestamp = Date.now();
          if (timestamp - timestamp >= 1000) {
            SoundUtils.playSound(message1, 0.4);
            const tmp8Result = SoundUtils;
          }
        }
      }
    }
    obj2 = MetaQuestUtils;
  }
};