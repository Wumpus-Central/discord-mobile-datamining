// === Module 16801: GUILD_ROOM_SPATIAL_AUDIO_ENABLED ===

// Module 16801 (GUILD_ROOM_SPATIAL_AUDIO_ENABLED)
import initialize from "initialize" /* 589 */;
import experimentDefault from "experiment" /* 4672 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import closure_4 from "resolveCreatingNotes" /* 4643 */;
import items from "items" /* 4646 */;

require = arg1;
({ GUILD_ROOM_BACKGROUND_CONFIG: c5, GUILD_ROOM_SPATIAL_AUDIO_MODE } = items);
let c6 = false;
let closure_7 = { x: 50, y: 50 };
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
    background = currentUserId(aspectRatio[3]).GuildRoomBackgrounds.DEFAULT;
  }
  aspectRatio = table[background].aspectRatio;
  let items = [...users.values()];
  const found = items.filter((userId) => userId.userId !== currentUserId);
  return Object.fromEntries(found.map((position) => {
    position = position.position;
    const items = [position.userId, ];
    let point = position;
    if (position == null) {
      point = closure_1_7;
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
  const items = [closure_3];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const interactionsEnabled = experimentDefault.useExperiment({ guildId, location: "SpatialAudioPanel" }).interactionsEnabled;
  obj = { available: c6, worldPoints: null };
  const obj2 = experimentDefault;
  const items1 = [closure_4];
  const items2 = [false, channelId, stateFromStores];
  obj[1] = initialize.useStateFromStores(items1, () => ({}), items2);
  return obj;
};