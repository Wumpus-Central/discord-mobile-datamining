// === Module 5181: getSoundmojiASTFromString ===

// Module 5181 (getSoundmojiASTFromString)
import AvatarUtils from "AvatarUtils" /* 1397 */;
import SoundmojiRenderingExperiment from "SoundmojiRenderingExperiment" /* 5187 */;
import isSoundValidDefault from "isSoundValid" /* 5188 */;
import getSoundFromMessageDefault from "getSoundFromMessage" /* 5189 */;
import getSoundStringDefault from "getSoundString" /* 5191 */;
import SoundboardStore from "SoundboardStore" /* 5182 */;
import MessageStore from "MessageStore" /* 4943 */;

require = fn;
const MessageStates = fn(1074).MessageStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/utils/getSoundmojiASTFromString.tsx");

export default function getSoundmojiASTFromString(soundId, guildId) {
  ({ channelId, messageId, soundboardSounds } = guildId);
  let tmp5;
  if (obj.getSoundmojiRenderingExperiment({ location: "getSoundmojiASTFromString" })) {
    const soundById = SoundboardStore.getSoundById(tmp2);
    const tmp9 = isSoundValidDefault(soundById, guildId.guildId, channelId);
    if (null != messageId) {
      if (null != channelId) {
        const tmp16 = getSoundFromMessageDefault(channelId, messageId, tmp2, soundboardSounds);
        tmp5 = tmp16;
        if (tmp9) {
          tmp5 = tmp16;
          if (null == tmp16) {
            const message = MessageStore.getMessage(channelId, messageId);
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
  }
  if (null == tmp5) {
    const obj3 = { type: "text", content: getSoundStringDefault(tmp, tmp2) };
    return obj3;
  } else {
    let name;
    if (tmp5 != null) {
      name = tmp5.name;
    }
    if (name == null) {
      name = tmp2;
    }
    const obj4 = { type: "soundboard", soundId: tmp2, guildId: tmp, messageId: null, channelId: null, content: null, emojiId: null, emojiName: null, emojiSrc: null };
    ({ messageId: obj2.messageId, channelId: obj2.channelId } = guildId);
    obj4.content = name;
    let emojiId;
    if (tmp5 != null) {
      emojiId = tmp5.emojiId;
    }
    obj4.emojiId = emojiId;
    let emojiName;
    if (tmp5 != null) {
      emojiName = tmp5.emojiName;
    }
    obj4.emojiName = emojiName;
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
      const obj5 = { id: emojiId2, animated: false, size: 16 };
      emojiURL = AvatarUtils.getEmojiURL(obj5);
      const tmp3Result = AvatarUtils;
    }
    obj4.emojiSrc = emojiURL;
    return obj4;
  }
  obj = SoundmojiRenderingExperiment;
};
export const soundmojiRawFormatRegex = /^<sound:(\d+):(\d+)>/;
export const getSoundmojiFromMessage = function getSoundmojiFromMessage(guildId, channelId, messageId, soundId, arg4) {
  if (obj.getSoundmojiRenderingExperiment({ location: "getSoundmojiASTFromString" })) {
    const soundById = SoundboardStore.getSoundById(soundId);
    const tmp9 = isSoundValidDefault(soundById, guildId, channelId);
    if (null != messageId) {
      if (null != channelId) {
        const tmp16 = getSoundFromMessageDefault(channelId, messageId, soundId, arg4);
        if (tmp9) {
          if (null == tmp16) {
            const message = MessageStore.getMessage(channelId, messageId);
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
  }
  obj = SoundmojiRenderingExperiment;
};