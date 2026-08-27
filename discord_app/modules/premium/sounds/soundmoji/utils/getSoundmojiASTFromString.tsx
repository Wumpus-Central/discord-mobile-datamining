// === Module 4916: getSoundmojiASTFromString ===

// Module 4916 (getSoundmojiASTFromString)
import getAvatarURL from "getAvatarURL" /* 1435 */;
import getSoundmojiRenderingExperiment from "getSoundmojiRenderingExperiment" /* 4922 */;
import isSoundValidDefault from "isSoundValid" /* 4923 */;
import getSoundStringDefault from "getSoundString" /* 4926 */;
import closure_3 from "handleSoundCreateOrUpdate" /* 4917 */;
import closure_4 from "reinjectEphemerals" /* 4688 */;
import { MessageStates } from "ME" /* 676 */;

require = arg1;
const result = require("set").fileFinishedImporting("modules/premium/sounds/soundmoji/utils/getSoundmojiASTFromString.tsx");

export default function getSoundmojiASTFromString(soundId, guildId) {
  ({ channelId, messageId, soundboardSounds } = guildId);
  let obj = getSoundmojiRenderingExperiment;
  let tmp5;
  if (obj.getSoundmojiRenderingExperiment({ location: "getSoundmojiASTFromString" })) {
    const soundById = store.getSoundById(tmp2);
    const tmp9 = isSoundValidDefault(soundById, guildId.guildId, channelId);
    if (null != messageId) {
      if (null != channelId) {
        const tmp16 = tmp8(4924)(channelId, messageId, tmp2, soundboardSounds);
        tmp5 = tmp16;
        if (tmp9) {
          tmp5 = tmp16;
          if (null == tmp16) {
            const message = store2.getMessage(channelId, messageId);
            let state;
            if (message != null) {
              state = message.state;
            }
            tmp5 = tmp16;
            if (state !== MessageStates.SENT) {
              tmp5 = soundById;
            }
          }
        }
      }
    }
    if (tmp9) {
      let tmp11;
      if (null != soundById) {
        tmp11 = soundById;
      }
      tmp5 = tmp11;
    }
    tmp8 = importDefault;
  }
  if (null == tmp5) {
    obj = { type: "text", content: null };
    obj[1] = getSoundStringDefault(tmp, tmp2);
    return obj;
  } else {
    let name;
    if (tmp5 != null) {
      name = tmp5.name;
    }
    if (name == null) {
      name = tmp2;
    }
    obj = { type: "soundboard", soundId: null, guildId: null, messageId: null, channelId: null, content: null, emojiId: null, emojiName: null, emojiSrc: null };
    obj[1] = tmp2;
    obj[2] = tmp;
    ({ messageId: obj2[3], channelId: obj2[4] } = guildId);
    obj[5] = name;
    let emojiId;
    if (tmp5 != null) {
      emojiId = tmp5.emojiId;
    }
    obj[6] = emojiId;
    let emojiName;
    if (tmp5 != null) {
      emojiName = tmp5.emojiName;
    }
    obj[7] = emojiName;
    let emojiId1;
    if (tmp5 != null) {
      emojiId1 = tmp5.emojiId;
    }
    let emojiURL;
    if (null != emojiId1) {
      let emojiId2;
      if (tmp5 != null) {
        emojiId2 = tmp5.emojiId;
      }
      obj1 = { id: null, animated: false, size: 16 };
      obj1[0] = emojiId2;
      emojiURL = getAvatarURL.getEmojiURL(obj1);
      const tmp3Result = getAvatarURL;
    }
    obj[8] = emojiURL;
    return obj;
  }
  const tmp3 = require;
};
export const soundmojiRawFormatRegex = /^<sound:(\d+):(\d+)>/;
export const getSoundmojiFromMessage = function getSoundmojiFromMessage(guildId, channelId, messageId, soundId, arg4) {
  if (obj.getSoundmojiRenderingExperiment({ location: "getSoundmojiASTFromString" })) {
    const soundById = store.getSoundById(soundId);
    const tmp9 = isSoundValidDefault(soundById, guildId, channelId);
    if (null != messageId) {
      if (null != channelId) {
        const tmp16 = tmp8(4924)(channelId, messageId, soundId, arg4);
        if (tmp9) {
          if (null == tmp16) {
            const message = store2.getMessage(channelId, messageId);
            let state;
            if (message != null) {
              state = message.state;
            }
            if (state !== MessageStates.SENT) {
              return soundById;
            }
          }
        }
        return tmp16;
      }
    }
    if (tmp9) {
      let tmp11;
      if (null != soundById) {
        tmp11 = soundById;
      }
      return tmp11;
    }
    tmp8 = importDefault;
  }
};