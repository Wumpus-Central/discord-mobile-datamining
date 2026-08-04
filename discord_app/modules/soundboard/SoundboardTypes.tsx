// discord_app/modules/soundboard/SoundboardTypes.tsx
const result = require("set").fileFinishedImporting("modules/soundboard/SoundboardTypes.tsx");

export const SoundButtonOverlay = { NONE: 0, [0]: "NONE", PLAY: 1, [1]: "PLAY", ADD: 2, [2]: "ADD", SOUNDMOJI: 3, [3]: "SOUNDMOJI" };
export const AnalyticsSoundType = { ENTRY: "entry_sound", EXIT: "exit_sound", DEFAULT: "default" };
export const AnalyticsChangeType = { ADDED: "added", UPDATED: "updated", REMOVED: "removed" };
export const AnalyticsSoundSource = { DEFAULT: "default", CUSTOM: "custom" };
export const soundboardSoundFromAPI = function soundboardSoundFromAPI(body, c0) {
  let emoji_id;
  let emoji_name;
  let sound_id;
  let user_id;
  let flag = body.available;
  ({ sound_id, emoji_id, emoji_name, user_id } = body);
  const obj = {};
  const merged = Object.assign(Object.assign(body, Object.create(null)));
  obj.soundId = sound_id;
  obj.guildId = c0;
  obj.emojiId = emoji_id;
  obj.emojiName = emoji_name;
  obj.userId = user_id;
  if (flag == null) {
    flag = true;
  }
  obj.available = flag;
  return obj;
};
export const soundboardSoundToAPI = function soundboardSoundToAPI(arg0) {
  let emojiId;
  let emojiName;
  let guildId;
  let soundId;
  let userId;
  ({ soundId, guildId, emojiId, emojiName, userId } = arg0);
  const obj = {};
  const merged = Object.assign(Object.assign(arg0, Object.create(null)));
  obj.sound_id = soundId;
  obj.guild_id = guildId;
  obj.emoji_id = emojiId;
  obj.emoji_name = emojiName;
  obj.user_id = userId;
  return obj;
};
export const SoundboardSoundGridSectionType = { FAVORITES: 0, [0]: "FAVORITES", GUILD: 1, [1]: "GUILD", DEFAULTS: 2, [2]: "DEFAULTS", SEARCH: 3, [3]: "SEARCH", FREQUENTLY_USED: 4, [4]: "FREQUENTLY_USED" };
export const SoundboardSoundItemType = { SOUND: 0, [0]: "SOUND", ADD_SOUND: 1, [1]: "ADD_SOUND" };
export const LocalSoundTrigger = { GIFT_CODE: 0, [0]: "GIFT_CODE", SOUNDBOARD: 1, [1]: "SOUNDBOARD", JOINED_VOICE_CHANNEL: 2, [2]: "JOINED_VOICE_CHANNEL", SOUNDMOJI: 3, [3]: "SOUNDMOJI" };