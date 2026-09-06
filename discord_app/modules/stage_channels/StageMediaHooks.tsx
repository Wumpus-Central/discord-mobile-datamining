// discord_app/modules/stage_channels/StageMediaHooks.tsx
import StageChannelParticipants from "StageChannelParticipants.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import VoiceStateStore from "../../stores/VoiceStateStore.tsx";
import StageChannelParticipantStore from "StageChannelParticipantStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/stage_channels/StageMediaHooks.tsx");

export const useStageHasMedia = function useStageHasMedia(id) {
  _require = id;
  closure_129_0 = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
        closure_0,
        StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
      );
      return (
        null != mutableParticipants.find((type) => type.type === id(closure_1_1[4]).StageChannelParticipantTypes.STREAM)
      );
    },
    items1,
  );
  const obj = require("initialize");
  const items2 = [VoiceStateStore];
  const items3 = [id];
  const obj2 = require("initialize");
  return (
    require("initialize").useStateFromStores(items2, () => VoiceStateStore.hasVideo(closure_0), items3) ||
    stateFromStores
  );
};
export const useStageHasStream = function useStageHasStream(id) {
  _require = id;
  const items = [StageChannelParticipantStore];
  const items1 = [id];
  return require("initialize").useStateFromStores(
    items,
    () => {
      const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
        closure_0,
        StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
      );
      return (
        null != mutableParticipants.find((type) => type.type === id(closure_1_1[4]).StageChannelParticipantTypes.STREAM)
      );
    },
    items1,
  );
};
export const getStageHasMedia = function getStageHasMedia(id) {
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
    id,
    StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
  );
  let hasVideoResult =
    null !=
    mutableParticipants.find(
      (type) => type.type === require("StageChannelParticipants").StageChannelParticipantTypes.STREAM,
    );
  if (!hasVideoResult) {
    hasVideoResult = VoiceStateStore.hasVideo(id);
  }
  return hasVideoResult;
};
export const getStageHasStream = function getStageHasStream(id) {
  const mutableParticipants = StageChannelParticipantStore.getMutableParticipants(
    id,
    StageChannelParticipants.StageChannelParticipantNamedIndex.SPEAKER,
  );
  return (
    null !=
    mutableParticipants.find(
      (type) => type.type === require("StageChannelParticipants").StageChannelParticipantTypes.STREAM,
    )
  );
};
export const useIsStageVideoEnabled = function useIsStageVideoEnabled(arg0) {
  _require = arg0;
  const items = [GuildStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => GuildStore.getGuild(closure_0));
  let tmp2 = null != stateFromStores;
  if (tmp2) {
    let num;
    if (stateFromStores != null) {
      num = stateFromStores.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    tmp2 = num > 0;
  }
  return tmp2;
};
export const isStageVideoEnabled = function isStageVideoEnabled(guild_id) {
  const guild = GuildStore.getGuild(guild_id);
  let tmp2 = null != guild;
  if (tmp2) {
    let num;
    if (guild != null) {
      num = guild.maxStageVideoChannelUsers;
    }
    if (num == null) {
      num = 0;
    }
    tmp2 = num > 0;
  }
  return tmp2;
};
