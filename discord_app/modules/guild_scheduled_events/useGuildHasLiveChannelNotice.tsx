// === Module 16184: useGuildHasLiveChannelNotice ===

// Module 16184 (useGuildHasLiveChannelNotice)
import StageChannelParticipants from "StageChannelParticipants" /* 5425 */;
import noop from "module_19" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5418 */;
import StageInstanceStore from "StageInstanceStore" /* 1962 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4582 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4584 */;
import LiveChannelNoticesStore from "LiveChannelNoticesStore" /* 16185 */;

require = fn;
let closure_11 = fn(1963).GuildScheduledEventEntityTypes;
const Permissions = fn(1085).Permissions;
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx");

export const useGuildHasLiveChannelNotice = function useGuildHasLiveChannelNotice(id) {
  const first = stateFromStores(guildActiveEvent[10])(id)[0];
  id = undefined;
  if (first != null) {
    id = first.id;
  }
  const channel = ChannelStore.getChannel(id);
  const items = [StageInstanceStore];
  const items1 = [channel];
  stateFromStores = channel(guildActiveEvent[11]).useStateFromStores(items, () => {
    let id;
    if (channel != null) {
      id = channel.id;
    }
    return StageInstanceStore.getStageInstanceByChannel(id);
  }, items1);
  let obj = channel(guildActiveEvent[11]);
  guildActiveEvent = channel(guildActiveEvent[12]).useGuildActiveEvent(id);
  const obj2 = channel(guildActiveEvent[12]);
  const items2 = [LiveChannelNoticesStore];
  const items3 = [stateFromStores, guildActiveEvent];
  const stateFromStoresObject = channel(guildActiveEvent[11]).useStateFromStoresObject(items2, () => {
    let obj = LiveChannelNoticesStore;
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    obj = { isStageNoticeHidden: LiveChannelNoticesStore.isLiveChannelNoticeHidden({ stageId: id }), isEventNoticeHidden: null };
    let id1;
    if (guildActiveEvent != null) {
      id1 = guildActiveEvent.id;
    }
    obj.isEventNoticeHidden = obj.isLiveChannelNoticeHidden({ eventId: id1 });
    return obj;
  }, items3);
  const isStageNoticeHidden = stateFromStoresObject.isStageNoticeHidden;
  if (null == guildActiveEvent) {
    return null != stateFromStores && !isStageNoticeHidden;
  }
};
export const useGuildLiveChannelNoticeInfo = function useGuildLiveChannelNoticeInfo(id) {
  activeEventOrStageInstanceChannel = activeEventOrStageInstanceChannel(stateFromStores2[13]).useActiveEventOrStageInstanceChannel(id);
  const obj = activeEventOrStageInstanceChannel(stateFromStores2[13]);
  const items = [PermissionStore];
  const stateFromStores = activeEventOrStageInstanceChannel(stateFromStores2[11]).useStateFromStores(items, () => {
    let canResult = null != activeEventOrStageInstanceChannel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.CONNECT, tmp);
    }
    return canResult;
  });
  const obj2 = activeEventOrStageInstanceChannel(stateFromStores2[11]);
  const guildActiveEvent = activeEventOrStageInstanceChannel(stateFromStores2[12]).useGuildActiveEvent(id);
  const obj3 = activeEventOrStageInstanceChannel(stateFromStores2[12]);
  const items1 = [entity_type];
  const items2 = [activeEventOrStageInstanceChannel];
  const stateFromStores1 = activeEventOrStageInstanceChannel(stateFromStores2[11]).useStateFromStores(items1, () => {
    let id;
    if (activeEventOrStageInstanceChannel != null) {
      id = activeEventOrStageInstanceChannel.id;
    }
    return StageInstanceStore.getStageInstanceByChannel(id);
  }, items2);
  const obj4 = activeEventOrStageInstanceChannel(stateFromStores2[11]);
  id = undefined;
  if (activeEventOrStageInstanceChannel != null) {
    id = activeEventOrStageInstanceChannel.id;
  }
  const tmp8 = activeEventOrStageInstanceChannel(stateFromStores2[14]).useActualStageSpeakerCount(id) > 0;
  let tmpResult = tmp(tmp2[11]);
  const items3 = [SortedVoiceStateStore];
  tmpResult.useStateFromStores(items3, () => {
    let tmp2 = null != activeEventOrStageInstanceChannel;
    if (tmp2) {
      tmp2 = SortedVoiceStateStore.getVoiceStatesForChannel(tmp).length > 0;
    }
    return tmp2;
  });
  stateFromStores2 = false;
  if (null != activeEventOrStageInstanceChannel) {
    if (null != stateFromStores1) {
      stateFromStores2 = tmp8;
      let flag = tmp8;
    }
    tmpResult = tmp(tmp2[11]);
    const items4 = [stateFromStores4];
    const items5 = [activeEventOrStageInstanceChannel];
    const stateFromStores3 = tmpResult.useStateFromStores(items4, () => {
      let tmp2 = null != activeEventOrStageInstanceChannel;
      if (tmp2) {
        tmp2 = StageChannelParticipantStore.getParticipantCount(tmp.id, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE) > 0;
      }
      return tmp2;
    }, items5);
    const items6 = [ApplicationStreamingStore];
    stateFromStores4 = tmp(tmp2[11]).useStateFromStores(items6, () => {
      let tmp2 = null != activeEventOrStageInstanceChannel;
      if (tmp2) {
        tmp2 = ApplicationStreamingStore.getAllApplicationStreamsForChannel(tmp.id).length > 0;
      }
      return tmp2;
    });
    entity_type = undefined;
    if (guildActiveEvent != null) {
      entity_type = guildActiveEvent.entity_type;
    }
    const items7 = [stateFromStores, entity_type, flag, stateFromStores3, stateFromStores4];
    return stateFromStores3.useMemo(() => ({ hasButton: entity_type === constants.EXTERNAL || stateFromStores, hasSpeakers: stateFromStores2, hasAudience: stateFromStores3, hasStream: stateFromStores4 }), items7);
  }
  flag = false;
  if (tmp10) {
    flag = stateFromStores2;
  }
};