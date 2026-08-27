// === Module 6142: VoiceChannelEffectSentLocation ===

// Module 6142 (VoiceChannelEffectSentLocation)
import closure_3 from "getEmojiToGroupId" /* 5353 */;
import closure_4 from "handleConnectionOpen" /* 1981 */;
import closure_5 from "initialize" /* 6143 */;
import { VoiceChannelEffectAnimationType as closure_6 } from "VoiceChannelEffectAnimationType" /* 6144 */;
import ME from "ME" /* 676 */;
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME" /* 4919 */;

const require = arg1;
({ Endpoints: error, NOOP_NULL: closure_8 } = ME);
const result = require("set").fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx");

export const VoiceChannelEffectSentLocation = { EMOJI_PICKER: "emoji_picker", EFFECT_BAR: "effect_bar" };
export const sendVoiceChannelCustomCallSoundEffect = function sendVoiceChannelCustomCallSoundEffect(id, c4, arg2) {
  let abortController = id;
  abortController = new AbortController();
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
  obj[1] = abortController(6145).sampleAnimationId(BASIC, abortController(6145).CUSTOM_CALL_SOUND_ANIMATION_RANGE);
  const HTTP = tmp2(530).HTTP;
  obj = { url: closure_7.CUSTOM_CALL_SOUNDS(id), body: obj, signal: abortController.signal, onRequestProgress: throttleResult, rejectWithError: true };
  const tmp2Result = abortController(6145);
  HTTP.post(obj).then(closure_8, () => {

  });
  const postResult = HTTP.post(obj);
  const items = [abortController(5925).CHANNEL_CALL];
  abortController(6168)(items, arg2, c4, abortController(4925).AnalyticsSoundType.ENTRY);
};
export const sendVoiceChannelSoundboardEffect = function sendVoiceChannelSoundboardEffect(id, emojiId, arg2, arg3, arg4) {
  let customEmojiById = null;
  if (null != emojiId.emojiId) {
    customEmojiById = customEmojiById.getCustomEmojiById(emojiId.emojiId);
  }
  let abortController = id;
  abortController = new AbortController();
  let obj = abortController(12);
  obj = { sound_id: emojiId.soundId, emoji_id: emojiId.emojiId, emoji_name: null };
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
    url: closure_7.SEND_SOUNDBOARD_SOUND(id),
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
  abortController(6168)(items, arg2, emojiId, abortController(4925).AnalyticsSoundType.DEFAULT, arg4);
};