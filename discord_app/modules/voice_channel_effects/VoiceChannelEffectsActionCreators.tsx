// discord_app/modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx
import getEmojiToGroupId from "getEmojiToGroupId";
import handleConnectionOpen from "handleConnectionOpen";
import initialize from "initialize";
import { VoiceChannelEffectAnimationType as closure_6 } from "VoiceChannelEffectAnimationType";
import ME from "ME";
import { DEFAULT_SOUND_GUILD_ID } from "MAX_LENGTH_SOUND_NAME";

let error;
let metroImportAll;
const require = arg1;
({ Endpoints: error, NOOP_NULL: metroImportAll } = ME);
const result = require("initialize").fileFinishedImporting("modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx");

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
    if (outer1_4.getVoiceChannelId() !== abortController) {
      abortController.abort();
    }
  }, 1000);
  obj[1] = abortController(6007).sampleAnimationId(BASIC, abortController(6007).CUSTOM_CALL_SOUND_ANIMATION_RANGE);
  const HTTP = tmp2(530).HTTP;
  obj = { url: closure_7.CUSTOM_CALL_SOUNDS(id), body: obj, signal: abortController.signal, onRequestProgress: throttleResult, rejectWithError: true };
  const tmp2Result = abortController(6007);
  HTTP.post(obj).then(closure_8, () => {

  });
  const postResult = HTTP.post(obj);
  const items = [abortController(5788).CHANNEL_CALL];
  abortController(6030)(items, arg2, c4, abortController(4797).AnalyticsSoundType.ENTRY);
};
export const sendVoiceChannelSoundboardEffect = function sendVoiceChannelSoundboardEffect(channelId, emojiId, arg2, arg3, arg4) {
  let customEmojiById = null;
  if (null != emojiId.emojiId) {
    customEmojiById = customEmojiById.getCustomEmojiById(emojiId.emojiId);
  }
  let abortController = channelId;
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
    url: closure_7.SEND_SOUNDBOARD_SOUND(channelId),
    body: obj,
    signal: abortController.signal,
    onRequestProgress: obj.throttle(() => {
      if (outer1_4.getVoiceChannelId() !== abortController) {
        abortController.abort();
      }
    }, 1000),
    rejectWithError: true
  };
  const throttleResult = obj.throttle(() => {
    if (outer1_4.getVoiceChannelId() !== abortController) {
      abortController.abort();
    }
  }, 1000);
  HTTP.post(obj).then(closure_8, () => {

  });
  const postResult = HTTP.post(obj);
  if (arg3 == null) {
    items = [];
  }
  abortController(6030)(items, arg2, emojiId, abortController(4797).AnalyticsSoundType.DEFAULT, arg4);
};