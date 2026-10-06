// === Module 12497: playInAppMessageSound ===

// Module 12497 (playInAppMessageSound)
import Constants from "Constants" /* 1085 */;
import MetaQuestUtils from "MetaQuestUtils" /* 1615 */;
import SoundUtils from "SoundUtils" /* 9575 */;
import InAppMessageSoundsStore from "InAppMessageSoundsStore" /* 12498 */;
import NotificationSettingsStore from "NotificationSettingsStore" /* 12481 */;
import size from "module_2" /* 2 */;

let closure_3 = InAppMessageSoundsStore.isInAppMessageSoundsEnabled;
const InAppNotificationTypes = Constants.InAppNotificationTypes;
const message1 = "message1";
let timestamp = 0;
const result = size.fileFinishedImporting("modules/notifications/native/playInAppMessageSound.tsx");

export const playInAppMessageSound = function playInAppMessageSound(notification) {
  if (notification.type === InAppNotificationTypes.MESSAGE) {
    const obj2 = MetaQuestUtils;
    if (obj2.isMetaQuest()) {
      if (closure_3()) {
        if (!NotificationSettingsStore.isSoundDisabled(message1)) {
          const _Date = Date;
          timestamp = Date.now();
          if (timestamp - timestamp >= 1000) {
            const tmp8Result = SoundUtils;
            tmp8Result.playSound(message1, 0.4);
          }
        }
      }
    }
  }
};