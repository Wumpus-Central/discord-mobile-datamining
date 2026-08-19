// === Module 7306: VoiceChannelEffectSentLocation ===

// Module 7306 (VoiceChannelEffectSentLocation)
import getEmojiToGroupId from "getEmojiToGroupId" /* 6727 */;
import handleConnectionOpen from "handleConnectionOpen" /* 1979 */;
import initialize from "initialize" /* 7307 */;
import { VoiceChannelEffectAnimationType as closure_6 } from "VoiceChannelEffectAnimationType" /* 7308 */;
import ME from "ME" /* 676 */;
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME" /* 4781 */;

const require = fn;
({ Endpoints: error, NOOP_NULL: closure_8 } = ME);
const result = require("obj132").fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx");

export const VoiceChannelEffectSentLocation = { EMOJI_PICKER: "emoji_picker", EFFECT_BAR: "effect_bar" };
export const sendVoiceChannelCustomCallSoundEffect = function sendVoiceChannelCustomCallSoundEffect(id, c4, arg2) {
  const abortController = new AbortController();
  let obj = abortController(12);
  let BASIC = state.getState().animationType;
  if (BASIC == null) {
    BASIC = constants.BASIC;
  }
  obj = { animation_type: BASIC, animation_id: null };
  const throttleResult = obj.throttle(() => {
    if (closure_1_4.getVoiceChannelId() !== abortController) {
      abortController.abort();
    }
  }, 1000);
  obj[1] = abortController(7309).sampleAnimationId(BASIC, abortController(7309).CUSTOM_CALL_SOUND_ANIMATION_RANGE);
  const HTTP = tmp2(530).HTTP;
  obj = { url: closure_7.CUSTOM_CALL_SOUNDS(id), body: obj, signal: abortController.signal, onRequestProgress: throttleResult, rejectWithError: true };
  const tmp2Result = abortController(7309);
  HTTP.post(obj).then(closure_8, () => {

  });
  const postResult = HTTP.post(obj);
  const items = [abortController(7159).CHANNEL_CALL];
  abortController(7332)(items, arg2, c4, abortController(6824).AnalyticsSoundType.ENTRY);
  const tmp7 = abortController(7332);
};
export const sendVoiceChannelSoundboardEffect = function sendVoiceChannelSoundboardEffect(channelId, emojiId, arg2, arg3, arg4) {
  let customEmojiById = null;
  if (null != emojiId.emojiId) {
    customEmojiById = customEmojiById.getCustomEmojiById(emojiId.emojiId);
  }
  const abortController = new AbortController();
  abortController(12);
  let obj = { sound_id: emojiId.soundId, emoji_id: emojiId.emojiId, emoji_name: null };
  let emojiName = emojiId.emojiName;
  if (emojiName == null) {
    let name;
    if (customEmojiById != null) {
      name = customEmojiById.name;
    }
    emojiName = name;
  }
  obj[2] = emojiName;
  if (emojiId.guildId !== DEFAULT_SOUND_GUILD_ID) {
    obj.source_guild_id = emojiId.guildId;
  }
  let items = arg3;
  const HTTP = tmp4(530).HTTP;
  obj = {
    url: closure_7.SEND_SOUNDBOARD_SOUND(channelId),
    body: obj,
    signal: abortController.signal,
    onRequestProgress: obj.throttle(() => {
      if (closure_1_4.getVoiceChannelId() !== abortController) {
        abortController.abort();
      }
    }, 1000),
    rejectWithError: true
  };
  const throttleResult = obj.throttle(() => {
    if (closure_1_4.getVoiceChannelId() !== abortController) {
      abortController.abort();
    }
  }, 1000);
  HTTP.post(obj).then(closure_8, () => {

  });
  const postResult = HTTP.post(obj);
  if (arg3 == null) {
    items = [];
  }
  abortController(7332)(items, arg2, emojiId, abortController(6824).AnalyticsSoundType.DEFAULT, arg4);
  const tmp9 = abortController(7332);
};