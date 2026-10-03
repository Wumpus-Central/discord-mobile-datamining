// === Module 16105: useGuildHasLiveChannelNotice ===

// Module 16105 (useGuildHasLiveChannelNotice)
import StageChannelParticipants from "StageChannelParticipants" /* 5582 */;
import noop from "module_19" /* 19 */;
import StageChannelParticipantStore from "StageChannelParticipantStore" /* 5575 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4914 */;
import LiveChannelNoticesStore from "LiveChannelNoticesStore" /* 16106 */;

require = fn;
let closure_11 = fn(2057).GuildScheduledEventEntityTypes;
const Permissions = fn(1096).Permissions;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(14);
  const tmp4 = stateFromStores(guildActiveEvent[12])(arg0);
  const first = tmp4[0];
  let id;
  if (first != null) {
    id = first.id;
  }
  if (cResult[0] !== id) {
    const first1 = tmp4[0];
    let id1;
    if (first1 != null) {
      id1 = first1.id;
    }
    const channel = ChannelStore.getChannel(id1);
    const first2 = tmp4[0];
    let id2;
    if (first2 != null) {
      id2 = first2.id;
    }
    cResult[0] = id2;
    cResult[1] = channel;
    let tmp7 = channel;
  } else {
    tmp7 = cResult[1];
  }
  _require = tmp7;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [StageInstanceStore];
    cResult[2] = items;
    let tmp14 = items;
  } else {
    tmp14 = cResult[2];
  }
  let id3;
  if (tmp7 != null) {
    id3 = tmp7.id;
  }
  if (cResult[3] !== id3) {
    let id4;
    if (tmp7 != null) {
      id4 = tmp7.id;
    }
    const fn = function h() {
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      return StageInstanceStore.getStageInstanceByChannel(id);
    };
    cResult[3] = id4;
    cResult[4] = fn;
    let tmp17 = fn;
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] !== tmp7) {
    const items1 = [tmp7];
    cResult[5] = tmp7;
    cResult[6] = items1;
    let tmp19 = items1;
  } else {
    tmp19 = cResult[6];
  }
  const obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(tmp14, tmp17, tmp19);
  const tmpResult = require("initialize");
  guildActiveEvent = require("useGuildScheduledEvents").useGuildActiveEvent(arg0);
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [LiveChannelNoticesStore];
    cResult[7] = items2;
    let tmp22 = items2;
  } else {
    tmp22 = cResult[7];
  }
  let id5;
  if (guildActiveEvent != null) {
    id5 = guildActiveEvent.id;
  }
  if (cResult[8] === id5) {
    let id6;
    if (stateFromStores != null) {
      id6 = stateFromStores.id;
    }
    if (cResult[9] === id6) {
      let tmp26 = cResult[10];
    }
    if (cResult[11] === guildActiveEvent) {
      if (cResult[12] === stateFromStores) {
        let tmp29 = cResult[13];
      }
      const stateFromStoresObject = tmp(tmp2[13]).useStateFromStoresObject(tmp22, tmp26, tmp29);
      const isStageNoticeHidden = stateFromStoresObject.isStageNoticeHidden;
      if (null == guildActiveEvent) {
        return null != stateFromStores && !isStageNoticeHidden;
      }
      const tmpResult4 = tmp(tmp2[13]);
    }
    const items3 = [stateFromStores, guildActiveEvent];
    cResult[11] = guildActiveEvent;
    cResult[12] = stateFromStores;
    cResult[13] = items3;
    tmp29 = items3;
  }
  let id7;
  if (guildActiveEvent != null) {
    id7 = guildActiveEvent.id;
  }
  cResult[8] = id7;
  let id8;
  if (stateFromStores != null) {
    id8 = stateFromStores.id;
  }
  class E {
    constructor() {
      obj = closure_10;
      id = undefined;
      if (closure_1 != null) {
        id = closure_1.id;
      }
      obj1 = { isStageNoticeHidden: closure_10.isLiveChannelNoticeHidden({ stageId: id }), isEventNoticeHidden: null };
      id1 = undefined;
      if (closure_2 != null) {
        id1 = closure_2.id;
      }
      obj1.isEventNoticeHidden = obj.isLiveChannelNoticeHidden({ eventId: id1 });
      return obj1;
    }
  }
  cResult[9] = id8;
  cResult[10] = E;
  tmp26 = E;
  const tmpResult3 = require("useGuildScheduledEvents");
}) : ((arg0) => {
  const first = stateFromStores(guildActiveEvent[12])(arg0)[0];
  let id;
  if (first != null) {
    id = first.id;
  }
  const channel = ChannelStore.getChannel(id);
  const items = [StageInstanceStore];
  const items1 = [channel];
  stateFromStores = channel(guildActiveEvent[13]).useStateFromStores(items, () => {
    let id;
    if (channel != null) {
      id = channel.id;
    }
    return StageInstanceStore.getStageInstanceByChannel(id);
  }, items1);
  const obj = channel(guildActiveEvent[13]);
  guildActiveEvent = channel(guildActiveEvent[14]).useGuildActiveEvent(arg0);
  let obj2 = channel(guildActiveEvent[14]);
  const items2 = [LiveChannelNoticesStore];
  const items3 = [stateFromStores, guildActiveEvent];
  const stateFromStoresObject = channel(guildActiveEvent[13]).useStateFromStoresObject(items2, () => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    const obj2 = { isStageNoticeHidden: LiveChannelNoticesStore.isLiveChannelNoticeHidden({ stageId: id }), isEventNoticeHidden: null };
    let id1;
    if (guildActiveEvent != null) {
      id1 = guildActiveEvent.id;
    }
    obj2.isEventNoticeHidden = LiveChannelNoticesStore.isLiveChannelNoticeHidden({ eventId: id1 });
    return obj2;
  }, items3);
  const isStageNoticeHidden = stateFromStoresObject.isStageNoticeHidden;
  if (null == guildActiveEvent) {
    return null != stateFromStores && !isStageNoticeHidden;
  }
  const obj3 = channel(guildActiveEvent[13]);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGuildHasLiveChannelNotice.tsx");

export const useGuildHasLiveChannelNotice = tmp2;
export const useGuildLiveChannelNoticeInfo = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = activeEventOrStageInstanceChannel(576).c(29);
  const obj = activeEventOrStageInstanceChannel(576);
  activeEventOrStageInstanceChannel = activeEventOrStageInstanceChannel(16108).useActiveEventOrStageInstanceChannel(arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== activeEventOrStageInstanceChannel) {
    class S {
      constructor() {
        canResult = null != closure_0;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.CONNECT, tmp);
        }
        return canResult;
      }
    }
    cResult[1] = activeEventOrStageInstanceChannel;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        canResult = null != closure_0;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.CONNECT, tmp);
        }
        return canResult;
      }
    }
  }
  const obj2 = activeEventOrStageInstanceChannel(16108);
  const stateFromStores = activeEventOrStageInstanceChannel(504).useStateFromStores(first, S);
  const tmpResult = activeEventOrStageInstanceChannel(504);
  const guildActiveEvent = activeEventOrStageInstanceChannel(9160).useGuildActiveEvent(arg0);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        canResult = null != closure_0;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.CONNECT, tmp);
        }
        return canResult;
      }
    }
    const items1 = [StageInstanceStore];
    cResult[3] = items1;
    const tmp10 = items1;
  } else {
    class S {
      constructor() {
        canResult = null != closure_0;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.CONNECT, tmp);
        }
        return canResult;
      }
    }
  }
  if (activeEventOrStageInstanceChannel != null) {
    class S {
      constructor() {
        canResult = null != closure_0;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.CONNECT, tmp);
        }
        return canResult;
      }
    }
  }
  if (cResult[4] !== undefined) {
    class S {
      constructor() {
        canResult = null != closure_0;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.CONNECT, tmp);
        }
        return canResult;
      }
    }
    if (activeEventOrStageInstanceChannel != null) {
      class S {
        constructor() {
          canResult = null != closure_0;
          if (canResult) {
            tmp3 = closure_8;
            tmp4 = Permissions;
            canResult = closure_8.can(Permissions.CONNECT, tmp);
          }
          return canResult;
        }
      }
    }
    const fn = function _() {
      let id;
      if (activeEventOrStageInstanceChannel != null) {
        id = activeEventOrStageInstanceChannel.id;
      }
      return StageInstanceStore.getStageInstanceByChannel(id);
    };
    cResult[4] = tmp12;
    cResult[5] = fn;
    const tmp11 = fn;
  } else {
    class S {
      constructor() {
        canResult = null != closure_0;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.CONNECT, tmp);
        }
        return canResult;
      }
    }
  }
  if (cResult[6] !== activeEventOrStageInstanceChannel) {
    class S {
      constructor() {
        canResult = null != closure_0;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.CONNECT, tmp);
        }
        return canResult;
      }
    }
    tmp14[0] = activeEventOrStageInstanceChannel;
    cResult[6] = activeEventOrStageInstanceChannel;
    cResult[7] = tmp14;
  } else {
    class S {
      constructor() {
        canResult = null != closure_0;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.CONNECT, tmp);
        }
        return canResult;
      }
    }
  }
  const tmpResult5 = activeEventOrStageInstanceChannel(9160);
  const stateFromStores1 = activeEventOrStageInstanceChannel(504).useStateFromStores(tmp10, tmp11, tmp14);
  const tmpResult6 = activeEventOrStageInstanceChannel(504);
  if (activeEventOrStageInstanceChannel != null) {
    class S {
      constructor() {
        canResult = null != closure_0;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.CONNECT, tmp);
        }
        return canResult;
      }
    }
  }
  const tmpResult7 = activeEventOrStageInstanceChannel(5588);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor() {
        canResult = null != closure_0;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.CONNECT, tmp);
        }
        return canResult;
      }
    }
    const items2 = [SortedVoiceStateStore];
    cResult[8] = items2;
    const tmp17 = items2;
  } else {
    class S {
      constructor() {
        canResult = null != closure_0;
        if (canResult) {
          tmp3 = closure_8;
          tmp4 = Permissions;
          canResult = closure_8.can(Permissions.CONNECT, tmp);
        }
        return canResult;
      }
    }
  }
  if (cResult[9] !== activeEventOrStageInstanceChannel) {
    class I {
      constructor() {
        tmp2 = null != closure_0;
        if (tmp2) {
          tmp3 = closure_9;
          num = 0;
          tmp2 = closure_9.getVoiceStatesForChannel(tmp).length > 0;
        }
        return tmp2;
      }
    }
    cResult[9] = activeEventOrStageInstanceChannel;
    cResult[10] = I;
  } else {
    class I {
      constructor() {
        tmp2 = null != closure_0;
        if (tmp2) {
          tmp3 = closure_9;
          num = 0;
          tmp2 = closure_9.getVoiceStatesForChannel(tmp).length > 0;
        }
        return tmp2;
      }
    }
  }
  const tmp16 = activeEventOrStageInstanceChannel(5588).useActualStageSpeakerCount(undefined) > 0;
  const stateFromStores2 = activeEventOrStageInstanceChannel(504).useStateFromStores(tmp17, I);
  if (cResult[11] === activeEventOrStageInstanceChannel) {
    class I {
      constructor() {
        tmp2 = null != closure_0;
        if (tmp2) {
          tmp3 = closure_9;
          num = 0;
          tmp2 = closure_9.getVoiceStatesForChannel(tmp).length > 0;
        }
        return tmp2;
      }
    }
  }
  if (null == activeEventOrStageInstanceChannel) {
    class I {
      constructor() {
        tmp2 = null != closure_0;
        if (tmp2) {
          tmp3 = closure_9;
          num = 0;
          tmp2 = closure_9.getVoiceStatesForChannel(tmp).length > 0;
        }
        return tmp2;
      }
    }
    if (tmp20) {
      class I {
        constructor() {
          tmp2 = null != closure_0;
          if (tmp2) {
            tmp3 = closure_9;
            num = 0;
            tmp2 = closure_9.getVoiceStatesForChannel(tmp).length > 0;
          }
          return tmp2;
        }
      }
    }
  } else {
    class I {
      constructor() {
        tmp2 = null != closure_0;
        if (tmp2) {
          tmp3 = closure_9;
          num = 0;
          tmp2 = closure_9.getVoiceStatesForChannel(tmp).length > 0;
        }
        return tmp2;
      }
    }
  }
  cResult[11] = activeEventOrStageInstanceChannel;
  cResult[12] = guildActiveEvent;
  cResult[13] = tmp16;
  cResult[14] = stateFromStores2;
  cResult[15] = stateFromStores1;
  cResult[16] = flag;
  const tmpResult8 = activeEventOrStageInstanceChannel(504);
}) : ((arg0) => {
  activeEventOrStageInstanceChannel = activeEventOrStageInstanceChannel(stateFromStores2[15]).useActiveEventOrStageInstanceChannel(arg0);
  const obj = activeEventOrStageInstanceChannel(stateFromStores2[15]);
  const items = [PermissionStore];
  const stateFromStores = activeEventOrStageInstanceChannel(stateFromStores2[13]).useStateFromStores(items, () => {
    let canResult = null != activeEventOrStageInstanceChannel;
    if (canResult) {
      canResult = PermissionStore.can(Permissions.CONNECT, tmp);
    }
    return canResult;
  });
  const obj2 = activeEventOrStageInstanceChannel(stateFromStores2[13]);
  const guildActiveEvent = activeEventOrStageInstanceChannel(stateFromStores2[14]).useGuildActiveEvent(arg0);
  const obj3 = activeEventOrStageInstanceChannel(stateFromStores2[14]);
  const items1 = [entity_type];
  const items2 = [activeEventOrStageInstanceChannel];
  const stateFromStores1 = activeEventOrStageInstanceChannel(stateFromStores2[13]).useStateFromStores(items1, () => {
    let id;
    if (activeEventOrStageInstanceChannel != null) {
      id = activeEventOrStageInstanceChannel.id;
    }
    return StageInstanceStore.getStageInstanceByChannel(id);
  }, items2);
  const obj4 = activeEventOrStageInstanceChannel(stateFromStores2[13]);
  let id;
  if (activeEventOrStageInstanceChannel != null) {
    id = activeEventOrStageInstanceChannel.id;
  }
  const tmp8 = activeEventOrStageInstanceChannel(stateFromStores2[16]).useActualStageSpeakerCount(id) > 0;
  const obj5 = activeEventOrStageInstanceChannel(stateFromStores2[16]);
  const items3 = [SortedVoiceStateStore];
  activeEventOrStageInstanceChannel(stateFromStores2[13]).useStateFromStores(items3, () => {
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
    const items4 = [stateFromStores4];
    const items5 = [activeEventOrStageInstanceChannel];
    const stateFromStores3 = tmp(tmp2[13]).useStateFromStores(items4, () => {
      let tmp2 = null != activeEventOrStageInstanceChannel;
      if (tmp2) {
        tmp2 = StageChannelParticipantStore.getParticipantCount(tmp.id, StageChannelParticipants.StageChannelParticipantNamedIndex.AUDIENCE) > 0;
      }
      return tmp2;
    }, items5);
    const tmpResult3 = tmp(tmp2[13]);
    const items6 = [ApplicationStreamingStore];
    stateFromStores4 = tmp(tmp2[13]).useStateFromStores(items6, () => {
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
  tmp10 = null != activeEventOrStageInstanceChannel && null != guildActiveEvent;
  const tmpResult = activeEventOrStageInstanceChannel(stateFromStores2[13]);
});