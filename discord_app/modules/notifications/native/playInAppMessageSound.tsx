// === Module 12497: playInAppMessageSound ===

// Module 12497 (playInAppMessageSound)
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import SoundUtils from "SoundUtils" /* 9575 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12481 */;

require = fn;
let closure_3 = fn(12498).isInAppMessageSoundsEnabled;
const InAppNotificationTypes = fn(1085).InAppNotificationTypes;
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