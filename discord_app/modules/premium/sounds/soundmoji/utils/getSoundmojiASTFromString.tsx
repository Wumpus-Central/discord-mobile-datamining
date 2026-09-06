// discord_app/modules/premium/sounds/soundmoji/utils/getSoundmojiASTFromString.tsx
import SoundmojiRenderingExperiment from "../SoundmojiRenderingExperiment.tsx";
import isSoundValidDefault from "isSoundValid.tsx";
import getSoundStringDefault from "getSoundString.tsx";
import SoundboardStore from "../../../../soundboard/SoundboardStore.tsx";
import MessageStore from "../../../../../stores/MessageStore.tsx";

const AvatarUtils = tmp3(1396);
require = fn;
const MessageStates = fn(1074).MessageStates;
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/sounds/soundmoji/utils/getSoundmojiASTFromString.tsx");

export default function getSoundmojiASTFromString(soundId, guildId) {
  ({ channelId, messageId, soundboardSounds } = guildId);
  let obj = SoundmojiRenderingExperiment;
  let tmp5;
  if (obj.getSoundmojiRenderingExperiment({ location: "getSoundmojiASTFromString" })) {
    const soundById = SoundboardStore.getSoundById(tmp2);
    const tmp9 = isSoundValidDefault(soundById, guildId.guildId, channelId);
    if (null != messageId) {
      if (null != channelId) {
        const tmp16 = tmp8(5019)(channelId, messageId, tmp2, soundboardSounds);
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
    tmp8 = importDefault;
  }
  if (null == tmp5) {
    obj = { type: "text", content: getSoundStringDefault(tmp, tmp2) };
    return obj;
  } else {
    let name;
    if (tmp5 != null) {
      name = tmp5.name;
    }
    if (name == null) {
      name = tmp2;
    }
    obj = {
      type: "soundboard",
      soundId: tmp2,
      guildId: tmp,
      messageId: null,
      channelId: null,
      content: null,
      emojiId: null,
      emojiName: null,
      emojiSrc: null,
    };
    ({ messageId: obj2.messageId, channelId: obj2.channelId } = guildId);
    obj.content = name;
    let emojiId;
    if (tmp5 != null) {
      emojiId = tmp5.emojiId;
    }
    obj.emojiId = emojiId;
    let emojiName;
    if (tmp5 != null) {
      emojiName = tmp5.emojiName;
    }
    obj.emojiName = emojiName;
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
      const obj1 = { id: emojiId2, animated: false, size: 16 };
      emojiURL = AvatarUtils.getEmojiURL(obj1);
      const tmp3Result = AvatarUtils;
    }
    obj.emojiSrc = emojiURL;
    return obj;
  }
}
export const soundmojiRawFormatRegex = /^<sound:(\d+):(\d+)>/;
export const getSoundmojiFromMessage = function getSoundmojiFromMessage(guildId, channelId, messageId, soundId, arg4) {
  if (obj.getSoundmojiRenderingExperiment({ location: "getSoundmojiASTFromString" })) {
    const soundById = SoundboardStore.getSoundById(soundId);
    const tmp9 = isSoundValidDefault(soundById, guildId, channelId);
    if (null != messageId) {
      if (null != channelId) {
        const tmp16 = tmp8(5019)(channelId, messageId, soundId, arg4);
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
    tmp8 = importDefault;
  }
};
