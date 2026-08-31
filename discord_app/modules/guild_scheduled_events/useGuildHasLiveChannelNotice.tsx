// === Module 15737: useGuildHasLiveChannelNotice ===

// Module 15737 (useGuildHasLiveChannelNotice)
import closure_3 from "noop" /* 19 */;
import closure_4 from "getActiveStageChannelIds" /* 5330 */;
import closure_5 from "handleStageInstanceCreateOrUpdate" /* 1392 */;
import closure_6 from "reset" /* 4470 */;
import closure_7 from "ensureGuildLoaded" /* 1387 */;
import closure_8 from "getUncachedChannelPermissions" /* 4091 */;
import closure_9 from "getVoiceStatesForGuild" /* 4523 */;
import closure_10 from "initialize" /* 15738 */;
import { GuildScheduledEventEntityTypes as closure_11 } from "GUILD_EVENT_MAX_NAME_LENGTH" /* 1393 */;
import { Permissions } from "sum" /* 505 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx");

export const useGuildHasLiveChannelNotice = function useGuildHasLiveChannelNotice(id) {
  const first = stateFromStores(guildActiveEvent[10])(id)[0];
  id = undefined;
  if (first != null) {
    id = first.id;
  }
  channel = channel.getChannel(id);
  const items = [closure_5];
  const items1 = [channel];
  stateFromStores = channel(guildActiveEvent[11]).useStateFromStores(items, () => {
    let id;
    if (channel != null) {
      id = channel.id;
    }
    return closure_1_5.getStageInstanceByChannel(id);
  }, items1);
  let obj = channel(guildActiveEvent[11]);
  guildActiveEvent = channel(guildActiveEvent[12]).useGuildActiveEvent(id);
  const obj2 = channel(guildActiveEvent[12]);
  const items2 = [closure_10];
  const items3 = [stateFromStores, guildActiveEvent];
  const stateFromStoresObject = channel(guildActiveEvent[11]).useStateFromStoresObject(items2, () => {
    let obj = closure_1_10;
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    obj = { isStageNoticeHidden: closure_1_10.isLiveChannelNoticeHidden({ stageId: id }), isEventNoticeHidden: null };
    let id1;
    if (guildActiveEvent != null) {
      id1 = guildActiveEvent.id;
    }
    obj[1] = obj.isLiveChannelNoticeHidden({ eventId: id1 });
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
  const items = [closure_8];
  const stateFromStores = activeEventOrStageInstanceChannel(stateFromStores2[11]).useStateFromStores(items, () => {
    let canResult = null != activeEventOrStageInstanceChannel;
    if (canResult) {
      canResult = closure_1_8.can(closure_1_12.CONNECT, tmp);
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
    return entity_type.getStageInstanceByChannel(id);
  }, items2);
  const obj4 = activeEventOrStageInstanceChannel(stateFromStores2[11]);
  id = undefined;
  if (activeEventOrStageInstanceChannel != null) {
    id = activeEventOrStageInstanceChannel.id;
  }
  const tmp8 = activeEventOrStageInstanceChannel(stateFromStores2[14]).useActualStageSpeakerCount(id) > 0;
  let tmpResult = tmp(tmp2[11]);
  const items3 = [closure_9];
  stateFromStores2 = tmpResult.useStateFromStores(items3, () => {
    let tmp2 = null != activeEventOrStageInstanceChannel;
    if (tmp2) {
      tmp2 = closure_1_9.getVoiceStatesForChannel(tmp).length > 0;
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
        tmp2 = stateFromStores4.getParticipantCount(tmp.id, activeEventOrStageInstanceChannel(stateFromStores2[15]).StageChannelParticipantNamedIndex.AUDIENCE) > 0;
      }
      return tmp2;
    }, items5);
    const items6 = [closure_6];
    stateFromStores4 = tmp(tmp2[11]).useStateFromStores(items6, () => {
      let tmp2 = null != activeEventOrStageInstanceChannel;
      if (tmp2) {
        tmp2 = closure_1_6.getAllApplicationStreamsForChannel(tmp.id).length > 0;
      }
      return tmp2;
    });
    entity_type = undefined;
    if (guildActiveEvent != null) {
      entity_type = guildActiveEvent.entity_type;
    }
    const items7 = [stateFromStores, entity_type, flag, stateFromStores3, stateFromStores4];
    return stateFromStores3.useMemo(() => ({ hasButton: entity_type === closure_1_11.EXTERNAL || stateFromStores, hasSpeakers: stateFromStores2, hasAudience: stateFromStores3, hasStream: stateFromStores4 }), items7);
  }
  flag = false;
  if (tmp10) {
    flag = stateFromStores2;
  }
};