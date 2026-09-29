// === Module 9729: playInAppMessageSound ===

// Module 9729 (playInAppMessageSound)
import MetaQuestUtils from "MetaQuestUtils" /* 1610 */;
import SoundUtils from "SoundUtils" /* 9524 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 9708 */;

require = fn;
let closure_3 = fn(9730).isInAppMessageSoundsEnabled;
const InAppNotificationTypes = fn(1074).InAppNotificationTypes;
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