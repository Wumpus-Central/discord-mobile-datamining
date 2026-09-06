// === Module 7346: VoiceChannelEffectsActionCreators ===

// Module 7346 (VoiceChannelEffectsActionCreators)
import EmojiStore from "EmojiStore" /* 5459 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2011 */;
import VoiceChannelEffectsPersistedStore from "VoiceChannelEffectsPersistedStore" /* 7347 */;

const require = fn;
const constants = fn(7348).VoiceChannelEffectAnimationType;
const Constants = fn(1074);
({ Endpoints: closure_7, NOOP_NULL: closure_8 } = Constants);
const DEFAULT_SOUND_GUILD_ID = fn(5014).DEFAULT_SOUND_GUILD_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx");

export const VoiceChannelEffectSentLocation = { EMOJI_PICKER: "emoji_picker", EFFECT_BAR: "effect_bar" };
export const sendVoiceChannelCustomCallSoundEffect = function sendVoiceChannelCustomCallSoundEffect(id, sound, arg2) {
  const abortController = new AbortController();
  let obj = abortController(12);
  let BASIC = VoiceChannelEffectsPersistedStore.getState().animationType;
  if (BASIC == null) {
    BASIC = constants.BASIC;
  }
  obj = { animation_type: BASIC, animation_id: null };
  const throttleResult = obj.throttle(() => {
    if (SelectedChannelStore.getVoiceChannelId() !== abortController) {
      abortController.abort();
    }
  }, 1000);
  obj.animation_id = abortController(7349).sampleAnimationId(BASIC, abortController(7349).CUSTOM_CALL_SOUND_ANIMATION_RANGE);
  const HTTP = tmp2(1272).HTTP;
  const request = { url: closure_7.CUSTOM_CALL_SOUNDS(id), body: obj, signal: abortController.signal, onRequestProgress: throttleResult, rejectWithError: true };
  const tmp2Result = abortController(7349);
  HTTP.post(request).then(closure_8, () => {

  });
  const postResult = HTTP.post(request);
  const items = [abortController(7182).CHANNEL_CALL];
  abortController(7372)(items, arg2, sound, abortController(5020).AnalyticsSoundType.ENTRY);
  const tmp7 = abortController(7372);
};
export const sendVoiceChannelSoundboardEffect = function sendVoiceChannelSoundboardEffect(id, emojiId, arg2, items, arg4) {
  let customEmojiById = null;
  if (null != emojiId.emojiId) {
    customEmojiById = EmojiStore.getCustomEmojiById(emojiId.emojiId);
  }
  const abortController = new AbortController();
  abortController(12);
  const obj = { sound_id: emojiId.soundId, emoji_id: emojiId.emojiId, emoji_name: null };
  let emojiName = emojiId.emojiName;
  if (emojiName == null) {
    let name;
    if (customEmojiById != null) {
      name = customEmojiById.name;
    }
    emojiName = name;
  }
  obj.emoji_name = emojiName;
  if (emojiId.guildId !== DEFAULT_SOUND_GUILD_ID) {
    obj.source_guild_id = emojiId.guildId;
  }
  const HTTP = tmp4(1272).HTTP;
  const request = {
    url: closure_7.SEND_SOUNDBOARD_SOUND(id),
    body: obj,
    signal: abortController.signal,
    onRequestProgress: obj.throttle(() => {
      if (SelectedChannelStore.getVoiceChannelId() !== abortController) {
        abortController.abort();
      }
    }, 1000),
    rejectWithError: true
  };
  const throttleResult = obj.throttle(() => {
    if (SelectedChannelStore.getVoiceChannelId() !== abortController) {
      abortController.abort();
    }
  }, 1000);
  HTTP.post(request).then(closure_8, () => {

  });
  const postResult = HTTP.post(request);
  if (items == null) {
    items = [];
  }
  abortController(7372)(items, arg2, emojiId, abortController(5020).AnalyticsSoundType.DEFAULT, arg4);
  const tmp9 = abortController(7372);
};