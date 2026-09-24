// discord_app/modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx
import EmojiStore from "../emojis/EmojiStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";
import VoiceChannelEffectsPersistedStore from "VoiceChannelEffectsPersistedStore.tsx";

const require = fn;
const constants = fn(7678).VoiceChannelEffectAnimationType;
const Constants = fn(1074);
({ Endpoints: closure_7, NOOP_NULL: closure_8 } = Constants);
const DEFAULT_SOUND_GUILD_ID = fn(5313).DEFAULT_SOUND_GUILD_ID;
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx");

export const VoiceChannelEffectSentLocation = { EMOJI_PICKER: "emoji_picker", EFFECT_BAR: "effect_bar" };
export const sendVoiceChannelCustomCallSoundEffect = function sendVoiceChannelCustomCallSoundEffect(id, sound, arg2) {
  const abortController = new AbortController();
  const obj = abortController(12);
  let BASIC = VoiceChannelEffectsPersistedStore.getState().animationType;
  if (BASIC == null) {
    BASIC = constants.BASIC;
  }
  const obj2 = { animation_type: BASIC, animation_id: null };
  const throttleResult = abortController(12).throttle(() => {
    if (SelectedChannelStore.getVoiceChannelId() !== abortController) {
      abortController.abort();
    }
  }, 1000);
  obj2.animation_id = abortController(7679).sampleAnimationId(
    BASIC,
    abortController(7679).CUSTOM_CALL_SOUND_ANIMATION_RANGE,
  );
  const HTTP = tmp2(1271).HTTP;
  const request = {
    url: closure_7.CUSTOM_CALL_SOUNDS(id),
    body: obj2,
    signal: abortController.signal,
    onRequestProgress: throttleResult,
    rejectWithError: true,
  };
  const tmp2Result = abortController(7679);
  HTTP.post(request).then(closure_8, () => {});
  const postResult = HTTP.post(request);
  const items = [abortController(7515).CHANNEL_CALL];
  abortController(7702)(items, arg2, sound, abortController(5320).AnalyticsSoundType.ENTRY);
  const tmp7 = abortController(7702);
};
export const sendVoiceChannelSoundboardEffect = function sendVoiceChannelSoundboardEffect(
  id,
  emojiId,
  arg2,
  items,
  arg4,
) {
  let customEmojiById = null;
  if (null != emojiId.emojiId) {
    customEmojiById = EmojiStore.getCustomEmojiById(emojiId.emojiId);
  }
  const abortController = new AbortController();
  const obj2 = { sound_id: emojiId.soundId, emoji_id: emojiId.emojiId, emoji_name: null };
  let emojiName = emojiId.emojiName;
  const obj = abortController(12);
  if (emojiName == null) {
    let name;
    if (customEmojiById != null) {
      name = customEmojiById.name;
    }
    emojiName = name;
  }
  obj2.emoji_name = emojiName;
  if (emojiId.guildId !== DEFAULT_SOUND_GUILD_ID) {
    obj2.source_guild_id = emojiId.guildId;
  }
  const HTTP = tmp4(1271).HTTP;
  const request = {
    url: closure_7.SEND_SOUNDBOARD_SOUND(id),
    body: obj2,
    signal: abortController.signal,
    onRequestProgress: abortController(12).throttle(() => {
      if (SelectedChannelStore.getVoiceChannelId() !== abortController) {
        abortController.abort();
      }
    }, 1000),
    rejectWithError: true,
  };
  const throttleResult = abortController(12).throttle(() => {
    if (SelectedChannelStore.getVoiceChannelId() !== abortController) {
      abortController.abort();
    }
  }, 1000);
  HTTP.post(request).then(closure_8, () => {});
  const postResult = HTTP.post(request);
  if (items == null) {
    items = [];
  }
  abortController(7702)(items, arg2, emojiId, abortController(5320).AnalyticsSoundType.DEFAULT, arg4);
  const tmp9 = abortController(7702);
};
