// discord_app/modules/premium/sounds/soundmoji/utils/getSoundFromMessage.tsx
import MessageReferenceTypes from "../../../../../../discord_common/js/shared/shared-constants/MessageReferenceTypes.tsx";
import SoundboardConstants from "../../../../soundboard/SoundboardConstants.tsx";
import SoundboardTypes from "../../../../soundboard/SoundboardTypes.tsx";
import MessageStore from "../../../../../stores/MessageStore.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

function getSoundFromSounds(arr, arg1) {
  let closure_0 = arg1;
  let found;
  if (arr != null) {
    found = arr.find((sound_id) => {
      const StringResult = String(sound_id.sound_id);
      return StringResult === String(closure_0);
    });
  }
  return found;
}
const DEFAULT_SOUND_GUILD_ID = SoundboardConstants.DEFAULT_SOUND_GUILD_ID;
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/utils/getSoundFromMessage.tsx");

export default function getSoundFromMessage(arg0, arg1, arg2, arr) {
  function getSoundFromMessageSnapshot(messageSnapshots, arg1) {
    const obj = messageSnapshots[Symbol.iterator]();
    while (obj !== undefined) {
      let tmp;
      let message = tmp2.message;
      let soundboardSounds;
      if (message != null) {
        soundboardSounds = message.soundboardSounds;
      }
      let tmp3Result = getSoundFromSounds(soundboardSounds, arg1);
      if (null != tmp3Result) {
        tmp = tmp3Result;
        obj.return();
        break;
      }
      return tmp;
    }
  }
  let closure_0 = arg2;
  let found;
  if (arr != null) {
    found = arr.find((sound_id) => {
      const StringResult = String(sound_id.sound_id);
      return StringResult === String(closure_0);
    });
  }
  if (null != found) {
    let guild_id2 = found.guild_id;
    const soundboardSoundFromAPI2 = SoundboardTypes.soundboardSoundFromAPI;
    SoundboardTypes;
    if (guild_id2 == null) {
      guild_id2 = DEFAULT_SOUND_GUILD_ID;
    }
    return soundboardSoundFromAPI2(found, guild_id2);
  } else {
    let message = MessageStore.getMessage(arg0, arg1);
    if (null != message) {
      let found1;
      let type;
      if (message != null) {
        const messageReference = message.messageReference;
        if (messageReference != null) {
          type = messageReference.type;
        }
      }
      if (type === MessageReferenceTypes.MessageReferenceTypes.FORWARD) {
        let messageSnapshots;
        if (message != null) {
          messageSnapshots = message.messageSnapshots;
        }
        if (messageSnapshots == null) {
          messageSnapshots = [];
        }
        found1 = getSoundFromMessageSnapshot(messageSnapshots, arg2);
      } else {
        let soundboardSounds;
        if (message != null) {
          soundboardSounds = message.soundboardSounds;
        }
        closure_0 = arg2;
        if (soundboardSounds != null) {
          found1 = soundboardSounds.find((sound_id) => {
            const StringResult = String(sound_id.sound_id);
            return StringResult === String(closure_0);
          });
        }
      }
      if (null != found1) {
        let tmp3Result = SoundboardTypes;
        let guild_id = found1.guild_id;
        const soundboardSoundFromAPI = tmp3Result.soundboardSoundFromAPI;
        if (guild_id == null) {
          guild_id = DEFAULT_SOUND_GUILD_ID;
        }
        return soundboardSoundFromAPI(found1, guild_id);
      }
    }
  }
}
