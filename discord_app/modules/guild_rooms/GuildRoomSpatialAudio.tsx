// discord_app/modules/guild_rooms/GuildRoomSpatialAudio.tsx
import closure_3 from "../../stores/AuthenticationStore.tsx";
import closure_4 from "GuildRoomStore.tsx";
import items from "GuildRoomConstants.tsx";

const require = arg1;
function computeLivingRoomWorldPoints(channelId) {
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
}
({ GUILD_ROOM_BACKGROUND_CONFIG: c5, GUILD_ROOM_SPATIAL_AUDIO_MODE: closure_6 } = items);
let closure_7 = { x: 50, y: 50 };
const result = require("set").fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudio.tsx");

export { computeLivingRoomWorldPoints };
export const livingRoomWorldPointToMediaEnginePoint = function livingRoomWorldPointToMediaEnginePoint(worldX) {
  return { x: worldX.worldX, y: worldX.worldY, z: worldX.worldZ };
};
export const useGuildRoomSpatialAudio = function useGuildRoomSpatialAudio(channelId) {
  channelId = channelId.channelId;
  const guildId = channelId.guildId;
  let stateFromStores;
  dependencyMap = undefined;
  let obj = channelId(589);
  const items = [closure_3];
  stateFromStores = obj.useStateFromStores(items, () => id.getId());
  let interactionsEnabled = stateFromStores(9882).useExperiment({ guildId, location: "SpatialAudioPanel" }).interactionsEnabled;
  if (interactionsEnabled) {
    interactionsEnabled = null != guildId;
  }
  let tmp5 = interactionsEnabled;
  if (interactionsEnabled) {
    tmp5 = channelId.mode === closure_6;
  }
  dependencyMap = tmp5;
  obj = { available: interactionsEnabled, worldPoints: null };
  const obj2 = stateFromStores(9882);
  const tmp = channelId;
  const items1 = [closure_4];
  const items2 = [tmp5, channelId, stateFromStores];
  obj[1] = channelId(589).useStateFromStores(items1, () => {
    if (closure_2) {
      if (null != channelId) {
        const obj = { users: null, currentUserId: null, channelId: null };
        obj[0] = closure_1_4.getRoomUsers(tmp);
        obj[1] = stateFromStores;
        obj[2] = tmp;
        closure_1_8(obj);
      }
      return {};
    }
  }, items2);
  return obj;
};