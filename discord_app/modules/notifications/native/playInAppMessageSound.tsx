// discord_app/modules/notifications/native/playInAppMessageSound.tsx
import Constants from "../../../Constants.tsx";
import MetaQuestUtils from "../../device/MetaQuestUtils.android.tsx";
import SoundUtils from "../../sound_playback/SoundUtils.tsx";
import InAppMessageSoundsStore from "InAppMessageSoundsStore.tsx";
import NotificationSettingsStore from "../../../stores/NotificationSettingsStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

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
