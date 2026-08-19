// === Module 10038: playInAppMessageSound ===

// Module 10038 (playInAppMessageSound)
import isMetaQuest from "isMetaQuest" /* 1625 */;
import createSoundForPack from "createSoundForPack" /* 10040 */;
import DesktopNotificationTypes from "DesktopNotificationTypes" /* 10015 */;
import { isInAppMessageSoundsEnabled as closure_3 } from "isInAppMessageSoundsEnabled" /* 10039 */;
import { InAppNotificationTypes } from "ME" /* 676 */;

require = fn;
const message1 = "message1";
let c6 = 0;
const result = require("obj132").fileFinishedImporting("modules/notifications/native/playInAppMessageSound.tsx");

export const playInAppMessageSound = function playInAppMessageSound(notification) {
  if (notification.type === InAppNotificationTypes.MESSAGE) {
    if (obj2.isMetaQuest()) {
      if (callback()) {
        if (!soundDisabled.isSoundDisabled(message1)) {
          const _Date = Date;
          const timestamp = Date.now();
          if (timestamp - timestamp >= 1000) {
            createSoundForPack.playSound(message1, 0.4);
            const tmp8Result = createSoundForPack;
          }
        }
      }
    }
    obj2 = isMetaQuest;
  }
};