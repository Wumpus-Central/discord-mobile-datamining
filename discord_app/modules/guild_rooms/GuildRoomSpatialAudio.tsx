// === Module 17376: GUILD_ROOM_SPATIAL_AUDIO_ENABLED ===

// Module 17376 (GUILD_ROOM_SPATIAL_AUDIO_ENABLED)
import initialize from "initialize" /* 504 */;
import GUILD_ROOMS_EXPERIMENT_ID from "GUILD_ROOMS_EXPERIMENT_ID" /* 4760 */;
import closure_2 from "fetchFingerprint" /* 502 */;
import closure_3 from "resolveCreatingNotes" /* 4718 */;
import items from "items" /* 4722 */;

require = arg1;
({ GUILD_ROOM_BACKGROUND_CONFIG: c4, GUILD_ROOM_SPATIAL_AUDIO_MODE } = items);
let c5 = false;
let closure_6 = { x: 50, y: 50 };
const result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudio.tsx");

export const GUILD_ROOM_SPATIAL_AUDIO_ENABLED = false;
export const computeLivingRoomWorldPoints = function computeLivingRoomWorldPoints(channelId) {
  ({ users, currentUserId } = channelId);
  let position;
  let aspectRatio;
  const value = users.get(currentUserId);
  position = undefined;
  if (value != null) {
    position = value.position;
  }
  if (position == null) {
    position = null;
  }
  room = room.getRoom(channelId.channelId);
  let background;
  if (room != null) {
    background = room.background;
  }
  if (background == null) {
    background = currentUserId(position[3]).GuildRoomBackgrounds.DEFAULT;
  }
  aspectRatio = table[background].aspectRatio;
  let items = [...users.values()];
  const found = items.filter((userId) => userId.userId !== currentUserId);
  return Object.fromEntries(found.map((position) => {
    position = position.position;
    const items = [position.userId, ];
    let point = position;
    if (position == null) {
      point = closure_1_6;
    }
    items[1] = { worldX: (position.x - point.x) / 100 * aspectRatio * 8, worldY: 0, worldZ: 8 * ((position.y - point.y) / 100) };
    return items;
  }));
};
export const livingRoomWorldPointToMediaEnginePoint = function livingRoomWorldPointToMediaEnginePoint(worldX) {
  return { x: worldX.worldX, y: worldX.worldY, z: worldX.worldZ };
};
export const useGuildRoomSpatialAudio = function useGuildRoomSpatialAudio(arg0) {
  ({ channelId, guildId } = arg0);
  let obj = initialize;
  const items = [closure_2];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const interactionsEnabled = GUILD_ROOMS_EXPERIMENT_ID.useGuildRoomsExperiment({ guildId, location: "SpatialAudioPanel" }).interactionsEnabled;
  obj = { available: c5, worldPoints: null };
  const obj2 = GUILD_ROOMS_EXPERIMENT_ID;
  const items1 = [closure_3];
  const items2 = [false, channelId, stateFromStores];
  obj[1] = initialize.useStateFromStores(items1, () => ({}), items2);
  return obj;
};