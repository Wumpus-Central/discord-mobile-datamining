// === Module 5019: getSoundFromMessage ===

// Module 5019 (getSoundFromMessage)
import MessageReferenceTypes from "MessageReferenceTypes" /* 1096 */;
import SoundboardTypes from "SoundboardTypes" /* 5020 */;
import MessageStore from "MessageStore" /* 4781 */;

require = fn;
function getSoundFromSounds(arr, arg1) {
  closure_0 = arg1;
  let found;
  if (arr != null) {
    found = arr.find((sound_id) => String(sound_id.sound_id) === String(closure_0));
  }
  return found;
}
const DEFAULT_SOUND_GUILD_ID = fn(5014).DEFAULT_SOUND_GUILD_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/utils/getSoundFromMessage.tsx");

export default function getSoundFromMessage(arg0, arg1, arg2, arr) {
  closure_0 = arg2;
  let found;
  if (arr != null) {
    found = arr.find((sound_id) => String(sound_id.sound_id) === String(closure_0));
  }
  if (null != found) {
    let guild_id2 = found.guild_id;
    if (guild_id2 == null) {
      guild_id2 = DEFAULT_SOUND_GUILD_ID;
    }
    return SoundboardTypes.soundboardSoundFromAPI(found, guild_id2);
  } else {
    let message = MessageStore.getMessage(arg0, arg1);
    if (null != message) {
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
        let found1 = (function getSoundFromMessageSnapshot(messageSnapshots, arg1) {
          const obj = messageSnapshots[Symbol.iterator]();
          while (obj !== undefined) {
            let message = tmp2.message;
            let soundboardSounds;
            let tmp3 = getSoundFromSounds;
            if (message != null) {
              soundboardSounds = message.soundboardSounds;
            }
            let tmp3Result = tmp3(soundboardSounds, arg1);
            if (null != tmp3Result) {
              let tmp = tmp3Result;
              obj.return();
              break;
            }
            return tmp;
          }
        })(messageSnapshots, arg2);
      } else {
        let soundboardSounds;
        if (message != null) {
          soundboardSounds = message.soundboardSounds;
        }
        closure_0 = arg2;
        if (soundboardSounds != null) {
          found1 = soundboardSounds.find((sound_id) => String(sound_id.sound_id) === String(closure_0));
        }
      }
      if (null != found1) {
        let guild_id = found1.guild_id;
        if (guild_id == null) {
          guild_id = DEFAULT_SOUND_GUILD_ID;
        }
        return tmp3(5020).soundboardSoundFromAPI(found1, guild_id);
      }
      tmp3 = require;
    }
  }
};