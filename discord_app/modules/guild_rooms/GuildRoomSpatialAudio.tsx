// discord_app/modules/guild_rooms/GuildRoomSpatialAudio.tsx
import initialize from "../../../discord_common/js/packages/flux/index.tsx";
import GuildRoomsExperiment from "GuildRoomsExperiment.tsx";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import GuildRoomStore from "GuildRoomStore.tsx";

require = fn;
const GuildRoomConstants = fn(4722);
({ GUILD_ROOM_BACKGROUND_CONFIG: closure_4, GUILD_ROOM_SPATIAL_AUDIO_MODE } = GuildRoomConstants);
let c5 = false;
let closure_6 = { x: 50, y: 50 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_rooms/GuildRoomSpatialAudio.tsx");

export const GUILD_ROOM_SPATIAL_AUDIO_ENABLED = false;
export const computeLivingRoomWorldPoints = function computeLivingRoomWorldPoints(channelId) {
  ({ users, currentUserId } = channelId);
  let aspectRatio;
  value = users.get(currentUserId);
  let position;
  if (value != null) {
    position = value.position;
  }
  if (position == null) {
    position = null;
  }
  const room = GuildRoomStore.getRoom(channelId.channelId);
  let background;
  if (room != null) {
    background = room.background;
  }
  if (background == null) {
    background = currentUserId(position[3]).GuildRoomBackgrounds.DEFAULT;
  }
  aspectRatio = closure_4[background].aspectRatio;
  let items = [...users.values()];
  const found = items.filter((userId) => userId.userId !== currentUserId);
  return Object.fromEntries(
    found.map((position) => {
      position = position.position;
      const items = [position.userId];
      let point = position;
      if (position == null) {
        point = closure_6;
      }
      items[1] = {
        worldX: ((position.x - point.x) / 100) * aspectRatio * 8,
        worldY: 0,
        worldZ: 8 * ((position.y - point.y) / 100),
      };
      return items;
    }),
  );
};
export const livingRoomWorldPointToMediaEnginePoint = function livingRoomWorldPointToMediaEnginePoint(worldX) {
  const point = { x: worldX.worldX, y: worldX.worldY, z: worldX.worldZ };
  return point;
};
export const useGuildRoomSpatialAudio = function useGuildRoomSpatialAudio(arg0) {
  ({ channelId, guildId } = arg0);
  let obj = initialize;
  const items = [AuthenticationStore];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const interactionsEnabled = GuildRoomsExperiment.useGuildRoomsExperiment({
    guildId,
    location: "SpatialAudioPanel",
  }).interactionsEnabled;
  obj = { available, worldPoints: null };
  const items1 = [GuildRoomStore];
  const items2 = [false, channelId, stateFromStores];
  obj.worldPoints = initialize.useStateFromStores(items1, () => ({}), items2);
  return obj;
};
