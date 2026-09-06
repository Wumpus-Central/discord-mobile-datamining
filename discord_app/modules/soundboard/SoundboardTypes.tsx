// discord_app/modules/soundboard/SoundboardTypes.tsx
import size from "../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("modules/soundboard/SoundboardTypes.tsx");

export const SoundButtonOverlay = {
  NONE: 0,
  [0]: "NONE",
  PLAY: 1,
  [1]: "PLAY",
  ADD: 2,
  [2]: "ADD",
  SOUNDMOJI: 3,
  [3]: "SOUNDMOJI",
};
export const AnalyticsSoundType = { ENTRY: "entry_sound", EXIT: "exit_sound", DEFAULT: "default" };
export const AnalyticsChangeType = { ADDED: "added", UPDATED: "updated", REMOVED: "removed" };
export const AnalyticsSoundSource = { DEFAULT: "default", CUSTOM: "custom" };
export const soundboardSoundFromAPI = function soundboardSoundFromAPI(body, guild_id) {
  let flag = body.available;
  ({ sound_id, emoji_id, emoji_name, user_id } = body);
  const obj = {};
  const merged = Object.assign(
    Object.assign(body, Object.assign({ sound_id: 0, emoji_id: 0, emoji_name: 0, user_id: 0, available: 0 })),
  );
  obj.soundId = sound_id;
  obj.guildId = guild_id;
  obj.emojiId = emoji_id;
  obj.emojiName = emoji_name;
  obj.userId = user_id;
  if (flag == null) {
    flag = true;
  }
  obj.available = flag;
  return obj;
};
export const soundboardSoundToAPI = function soundboardSoundToAPI(item) {
  ({ soundId, guildId, emojiId, emojiName, userId } = item);
  const obj = {};
  const merged = Object.assign(
    Object.assign(item, Object.assign({ soundId: 0, guildId: 0, emojiId: 0, emojiName: 0, userId: 0 })),
  );
  obj.sound_id = soundId;
  obj.guild_id = guildId;
  obj.emoji_id = emojiId;
  obj.emoji_name = emojiName;
  obj.user_id = userId;
  return obj;
};
export const SoundboardSoundGridSectionType = {
  FAVORITES: 0,
  [0]: "FAVORITES",
  GUILD: 1,
  [1]: "GUILD",
  DEFAULTS: 2,
  [2]: "DEFAULTS",
  SEARCH: 3,
  [3]: "SEARCH",
  FREQUENTLY_USED: 4,
  [4]: "FREQUENTLY_USED",
  TOP_SOUNDS: 5,
  [5]: "TOP_SOUNDS",
};
export const SoundboardSoundItemType = { SOUND: 0, [0]: "SOUND", ADD_SOUND: 1, [1]: "ADD_SOUND" };
