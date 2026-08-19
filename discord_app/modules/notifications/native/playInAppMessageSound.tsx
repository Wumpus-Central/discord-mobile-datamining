// discord_app/modules/notifications/native/playInAppMessageSound.tsx
import isMetaQuest from "../../device/MetaQuestUtils.android.tsx";
import createSoundForPack from "../../sound_playback/SoundUtils.tsx";
import DesktopNotificationTypes from "../../../stores/NotificationSettingsStore.tsx";
import { isInAppMessageSoundsEnabled as closure_3 } from "InAppMessageSoundsStore.tsx";
import { InAppNotificationTypes } from "../../../Constants.tsx";

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