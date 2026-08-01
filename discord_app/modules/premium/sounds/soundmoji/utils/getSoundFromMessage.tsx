// === Module 4645: getSoundFromSounds ===

// Module 4645 (getSoundFromSounds)
import reinjectEphemerals from "reinjectEphemerals";
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME";

const require = arg1;
function getSoundFromSounds(arr) {
  let closure_0 = arg1;
  let found;
  if (arr != null) {
    found = arr.find((sound_id) => String(sound_id.sound_id) === String(closure_0));
  }
  return found;
}
const result = require("SoundButtonOverlay").fileFinishedImporting("modules/premium/sounds/soundmoji/utils/getSoundFromMessage.tsx");

export default function getSoundFromMessage(arg0, arg1, arg2, arr) {
  let _require = arg2;
  let found;
  if (arr != null) {
    found = arr.find((sound_id) => String(sound_id.sound_id) === String(closure_0));
  }
  if (null != found) {
    let guild_id2 = found.guild_id;
    if (guild_id2 == null) {
      guild_id2 = DEFAULT_SOUND_GUILD_ID;
    }
    return _require(4646).soundboardSoundFromAPI(found, guild_id2);
  } else {
    message = message.getMessage(arg0, arg1);
    if (null != message) {
      let type;
      if (message != null) {
        const messageReference = message.messageReference;
        if (messageReference != null) {
          type = messageReference.type;
        }
      }
      if (type === _require(694).MessageReferenceTypes.FORWARD) {
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
            let tmp3 = closure_4;
            if (message != null) {
              soundboardSounds = message.soundboardSounds;
            }
            let tmp3Result = tmp3(soundboardSounds, arg1);
            let tmp6 = tmp3Result;
            if (null != tmp3Result) {
              let tmp = tmp3Result;
              let tmp7 = obj;
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
        _require = arg2;
        if (soundboardSounds != null) {
          found1 = soundboardSounds.find((sound_id) => String(sound_id.sound_id) === String(closure_0));
        }
      }
      if (null != found1) {
        let guild_id = found1.guild_id;
        if (guild_id == null) {
          guild_id = DEFAULT_SOUND_GUILD_ID;
        }
        return tmp3(4646).soundboardSoundFromAPI(found1, guild_id);
      }
      tmp3 = _require;
    }
  }
};