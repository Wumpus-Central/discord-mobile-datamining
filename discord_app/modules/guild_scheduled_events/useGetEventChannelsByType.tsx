// discord_app/modules/guild_scheduled_events/useGetEventChannelsByType.tsx
import useManageResourcePermissions from "../permissions/useManageResourcePermissions.tsx";
import StageInstanceStore from "../stage_channels/StageInstanceStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

require = fn;
function getEventChannelsByType(id, channelTypeFromEntity) {
  let tmp = items;
  if (items === undefined) {
    items = [GuildChannelStore];
    tmp = items;
  }
  [obj] = tmp;
  if (null == channelTypeFromEntity) {
    return [];
  } else {
    const tmp17 = obj.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY];
    const items1 = [];
    for (const item10016 of tmp17) {
      let channel = item10016.channel;
      let obj2 = channel;
      let obj3 = useManageResourcePermissions;
      let manageResourcePermissions = obj3.getManageResourcePermissions(channel);
      let canManageAllEvents = manageResourcePermissions.canCreateGuildEvent;
      if (!canManageAllEvents) {
        canManageAllEvents = manageResourcePermissions.canManageAllEvents;
      }
      if (obj2.type === arg1) {
        let isGuildVoiceResult = obj2.isGuildVoice();
        if (isGuildVoiceResult) {
          isGuildVoiceResult = canManageAllEvents;
        }
        if (!isGuildVoiceResult) {
          let isGuildStageVoiceResult = obj2.isGuildStageVoice();
          if (isGuildStageVoiceResult) {
            isGuildStageVoiceResult = canManageAllEvents;
          }
          isGuildVoiceResult = isGuildStageVoiceResult;
        }
        if (isGuildVoiceResult) {
          let arr = items1.push(obj2);
        }
      }
      continue;
    }
    return items1;
  }
}
const GUILD_VOCAL_CHANNELS_KEY = fn(2012).GUILD_VOCAL_CHANNELS_KEY;
const PermissionsConstants = fn(9672);
({
  CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: metroRequire,
  CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: closure_7,
} = PermissionsConstants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGetEventChannelsByType.tsx");

export const useCanCreateEventInStageChannel = function useCanCreateEventInStageChannel(isGuildStageVoice) {
  _require = isGuildStageVoice;
  const items = [PermissionStore];
  const items1 = [isGuildStageVoice];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => PermissionStore.can(React5, closure_0),
    items1,
  );
  const obj = require("initialize");
  const items2 = [StageInstanceStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () =>
    StageInstanceStore.getStageInstanceByChannel(isGuildStageVoice.id),
  );
  let tmp3 = isGuildStageVoice.isGuildStageVoice() && stateFromStores;
  if (tmp3) {
    tmp3 = null == stateFromStores1;
  }
  return tmp3;
};
export const useCanCreateEventInVoiceChannel = function useCanCreateEventInVoiceChannel(isGuildVoice) {
  _require = isGuildVoice;
  const items = [PermissionStore];
  const items1 = [isGuildVoice];
  const stateFromStores = require("initialize").useStateFromStores(
    items,
    () => PermissionStore.can(timestampProducer, closure_0),
    items1,
  );
  const obj = require("initialize");
  return isGuildVoice.isGuildVoice() && stateFromStores;
};
export { getEventChannelsByType };
export const useGetEventChannelsByType = function useGetEventChannelsByType(id, channelType) {
  _require = id;
  dependencyMap = channelType;
  let items = [GuildChannelStore];
  const items1 = [id, channelType];
  return require("initialize").useStateFromStoresArray(
    items,
    () => {
      const items = [GuildChannelStore];
      return getEventChannelsByType(closure_0, closure_1, items);
    },
    items1,
  );
};
