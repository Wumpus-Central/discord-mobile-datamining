// === Module 10212: playInAppMessageSound ===

// Module 10212 (playInAppMessageSound)
import isMetaQuest from "isMetaQuest" /* 1623 */;
import closure_2 from "DesktopNotificationTypes" /* 10190 */;
import { isInAppMessageSoundsEnabled as closure_3 } from "isInAppMessageSoundsEnabled" /* 10213 */;
import { InAppNotificationTypes } from "ME" /* 673 */;

require = arg1;
const message1 = "message1";
let c6 = 0;
const result = require("set").fileFinishedImporting("modules/notifications/native/playInAppMessageSound.tsx");

export const playInAppMessageSound = function playInAppMessageSound(notification) {
  if (notification.type === InAppNotificationTypes.MESSAGE) {
    if (obj2.isMetaQuest()) {
      if (callback()) {
        if (!soundDisabled.isSoundDisabled(message1)) {
          const _Date = Date;
          const timestamp = Date.now();
          if (timestamp - timestamp >= 1000) {
            tmp8(10019).playSound(tmp3, 0.4);
            const tmp8Result = tmp8(10019);
          }
        }
        tmp3 = message1;
      }
    }
    obj2 = isMetaQuest;
    tmp8 = require;
  }
};