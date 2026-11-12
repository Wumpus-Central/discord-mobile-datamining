// === Module 10962: playInAppMessageSound ===

// Module 10962 (playInAppMessageSound)
import MetaQuestUtils from "MetaQuestUtils" /* 1624 */;
import SoundUtils from "SoundUtils" /* 10964 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 10945 */;

require = fn;
let closure_3 = fn(10963).isInAppMessageSoundsEnabled;
const InAppNotificationTypes = fn(1072).InAppNotificationTypes;
const message1 = "message1";
let timestamp = 0;
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/native/playInAppMessageSound.tsx");

export function playInAppMessageSound(notification) {
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
}