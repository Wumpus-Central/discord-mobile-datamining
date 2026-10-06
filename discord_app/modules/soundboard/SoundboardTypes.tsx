// === Module 5812: SoundboardTypes ===

// Module 5812 (SoundboardTypes)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/soundboard/SoundboardTypes.tsx");

export const SoundButtonOverlay = { NONE: 0, [0]: "NONE", PLAY: 1, [1]: "PLAY", ADD: 2, [2]: "ADD", SOUNDMOJI: 3, [3]: "SOUNDMOJI" };
export const AnalyticsSoundType = { ENTRY: "entry_sound", EXIT: "exit_sound", DEFAULT: "default", ECHO: "echo" };
export const AnalyticsChangeType = { ADDED: "added", UPDATED: "updated", REMOVED: "removed" };
export const AnalyticsSoundSource = { DEFAULT: "default", CUSTOM: "custom" };
export const soundboardSoundFromAPI = function soundboardSoundFromAPI(body, c0) {
  let emoji_id;
  let emoji_name;
  let sound_id;
  let user_id;
  let flag = body.available;
  ({ sound_id, emoji_id, emoji_name, user_id } = body);
  const obj = { soundId: sound_id, guildId, emojiId: emoji_id, emojiName: emoji_name, userId: user_id, available: flag };
  const merged = Object.assign(Object.assign(body, Object.assign({ sound_id: 0, emoji_id: 0, emoji_name: 0, user_id: 0, available: 0 })));
  if (flag == null) {
    flag = true;
  }
  return obj;
};
export const soundboardSoundToAPI = function soundboardSoundToAPI(item) {
  let emojiId;
  let emojiName;
  let soundId;
  let userId;
  ({ soundId, guildId, emojiId, emojiName, userId } = item);
  const obj = { sound_id: soundId, guild_id: guildId, emoji_id: emojiId, emoji_name: emojiName, user_id: userId };
  const merged = Object.assign(Object.assign(item, Object.assign({ soundId: 0, guildId: 0, emojiId: 0, emojiName: 0, userId: 0 })));
  return obj;
};
export const SoundboardSoundGridSectionType = { FAVORITES: 0, [0]: "FAVORITES", GUILD: 1, [1]: "GUILD", DEFAULTS: 2, [2]: "DEFAULTS", SEARCH: 3, [3]: "SEARCH", FREQUENTLY_USED: 4, [4]: "FREQUENTLY_USED", TOP_SOUNDS: 5, [5]: "TOP_SOUNDS" };
export const SoundboardSoundItemType = { SOUND: 0, [0]: "SOUND", ADD_SOUND: 1, [1]: "ADD_SOUND" };