// === Module 9617: getEventChannelsByType ===

// Module 9617 (getEventChannelsByType)
import canManageResource from "canManageResource" /* 9561 */;
import closure_2 from "handleStageInstanceCreateOrUpdate" /* 1396 */;
import closure_3 from "comparator" /* 1982 */;
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator" /* 1982 */;
import closure_5 from "getUncachedChannelPermissions" /* 4089 */;
import VIEW_CHANNEL from "VIEW_CHANNEL" /* 9562 */;

require = arg1;
function getEventChannelsByType(id, channelTypeFromEntity) {
  let tmp = arg2;
  if (arg2 === undefined) {
    const items = [closure_3];
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
      let tmp4 = require;
      let tmp5 = dependencyMap;
      let obj3 = canManageResource;
      let manageResourcePermissions = obj3.getManageResourcePermissions(channel);
      let canManageAllEvents = manageResourcePermissions.canCreateGuildEvent;
      if (!canManageAllEvents) {
        canManageAllEvents = manageResourcePermissions.canManageAllEvents;
      }
      let tmp7 = canManageAllEvents;
      let tmp8 = channel;
      if (obj2.type === arg1) {
        let tmp9 = channel;
        let isGuildVoiceResult = obj2.isGuildVoice();
        if (isGuildVoiceResult) {
          isGuildVoiceResult = canManageAllEvents;
        }
        if (!isGuildVoiceResult) {
          let tmp11 = channel;
          let isGuildStageVoiceResult = obj2.isGuildStageVoice();
          if (isGuildStageVoiceResult) {
            isGuildStageVoiceResult = canManageAllEvents;
          }
          isGuildVoiceResult = isGuildStageVoiceResult;
        }
        if (isGuildVoiceResult) {
          let tmp13 = channel;
          let arr = items1.push(obj2);
        }
      }
      continue;
    }
    return items1;
  }
}
({ CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: closure_6, CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: error } = VIEW_CHANNEL);
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useGetEventChannelsByType.tsx");

export const useCanCreateEventInStageChannel = function useCanCreateEventInStageChannel(isGuildStageVoice) {
  const _require = isGuildStageVoice;
  const items = [closure_5];
  const items1 = [isGuildStageVoice];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_5.can(closure_1_7, closure_0), items1);
  const obj = _require(589);
  const items2 = [closure_2];
  const stateFromStores1 = _require(589).useStateFromStores(items2, () => closure_1_2.getStageInstanceByChannel(isGuildStageVoice.id));
  let tmp3 = isGuildStageVoice.isGuildStageVoice() && stateFromStores;
  if (tmp3) {
    tmp3 = null == stateFromStores1;
  }
  return tmp3;
};
export const useCanCreateEventInVoiceChannel = function useCanCreateEventInVoiceChannel(isGuildVoice) {
  const _require = isGuildVoice;
  const items = [closure_5];
  const items1 = [isGuildVoice];
  const stateFromStores = _require(589).useStateFromStores(items, () => closure_1_5.can(closure_1_6, closure_0), items1);
  const obj = _require(589);
  return isGuildVoice.isGuildVoice() && stateFromStores;
};
export { getEventChannelsByType };
export const useGetEventChannelsByType = function useGetEventChannelsByType(id, channelType) {
  const _require = id;
  dependencyMap = channelType;
  let items = [closure_3];
  const items1 = [id, channelType];
  return _require(589).useStateFromStoresArray(items, () => {
    const items = [closure_1_3];
    return closure_1_8(closure_0, closure_1, items);
  }, items1);
};