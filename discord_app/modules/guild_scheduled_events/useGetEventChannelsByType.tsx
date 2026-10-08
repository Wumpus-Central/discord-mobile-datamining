// === Module 8546: useGetEventChannelsByType ===

// Module 8546 (useGetEventChannelsByType)
import useManageResourcePermissions from "useManageResourcePermissions" /* 8548 */;
import StageInstanceStore from "StageInstanceStore" /* 2068 */;
import GuildChannelStore from "GuildChannelStore" /* 4705 */;
import PermissionStore from "PermissionStore" /* 4707 */;

const require = globalThis.__r;

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
const GUILD_VOCAL_CHANNELS_KEY = fn(4705).GUILD_VOCAL_CHANNELS_KEY;
const PermissionsConstants = fn(8547);
({ CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: metroRequire, CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: closure_7 } = PermissionsConstants);
fn(558);
let ReactCompilerGating = fn(558);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanCreateEventInStageChannel(id) {
  const _require = id;
  const cResult = require("c").c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function l() {
      return PermissionStore.can(React5, closure_0);
    };
    const items1 = [id];
    cResult[1] = id;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [StageInstanceStore];
    cResult[4] = items2;
    let tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== id.id) {
    class S {
      constructor() {
        return closure_2.getStageInstanceByChannel(closure_0.id);
      }
    }
    cResult[5] = id.id;
    cResult[6] = S;
  } else {
    class S {
      constructor() {
        return closure_2.getStageInstanceByChannel(closure_0.id);
      }
    }
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp9, S);
  if (cResult[7] === id) {
    class S {
      constructor() {
        return closure_2.getStageInstanceByChannel(closure_0.id);
      }
    }
  }
  let tmp13 = id.isGuildStageVoice() && stateFromStores;
  if (tmp13) {
    class S {
      constructor() {
        return closure_2.getStageInstanceByChannel(closure_0.id);
      }
    }
    tmp13 = null == stateFromStores1;
  }
  cResult[7] = id;
  cResult[8] = stateFromStores;
  cResult[9] = stateFromStores1;
  cResult[10] = tmp13;
  const tmpResult2 = require("initialize");
}) : (function useCanCreateEventInStageChannel(isGuildStageVoice) {
  const _require = isGuildStageVoice;
  const items = [PermissionStore];
  const items1 = [isGuildStageVoice];
  const stateFromStores = require("initialize").useStateFromStores(items, () => PermissionStore.can(React5, closure_0), items1);
  const obj = require("initialize");
  const items2 = [StageInstanceStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items2, () => StageInstanceStore.getStageInstanceByChannel(isGuildStageVoice.id));
  let tmp3 = isGuildStageVoice.isGuildStageVoice() && stateFromStores;
  if (tmp3) {
    tmp3 = null == stateFromStores1;
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function useCanCreateEventInVoiceChannel(isGuildVoice) {
  const _require = isGuildVoice;
  const cResult = require("c").c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== isGuildVoice) {
    const fn = function s() {
      return PermissionStore.can(timestampProducer, closure_0);
    };
    const items1 = [isGuildVoice];
    cResult[1] = isGuildVoice;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === isGuildVoice) {
    if (cResult[5] === stateFromStores) {
      let tmp9 = cResult[6];
    }
    return tmp9;
  }
  const tmp10 = isGuildVoice.isGuildVoice() && stateFromStores;
  cResult[4] = isGuildVoice;
  cResult[5] = stateFromStores;
  cResult[6] = tmp10;
  tmp9 = tmp10;
  const tmpResult = require("initialize");
}) : (function useCanCreateEventInVoiceChannel(isGuildVoice) {
  const _require = isGuildVoice;
  const items = [PermissionStore];
  const items1 = [isGuildVoice];
  const stateFromStores = require("initialize").useStateFromStores(items, () => PermissionStore.can(timestampProducer, closure_0), items1);
  const obj = require("initialize");
  return isGuildVoice.isGuildVoice() && stateFromStores;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGetEventChannelsByType.tsx");

export const useCanCreateEventInStageChannel = tmp3;
export const useCanCreateEventInVoiceChannel = tmp4;
export { getEventChannelsByType };
export const useGetEventChannelsByType = ReactCompilerGating.isReactCompilerEnabled() ? (function useGetEventChannelsByType(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    if (cResult[2] === arg0) {
      let tmp6 = cResult[3];
      let tmp7 = cResult[4];
    }
    return tmp(504).useStateFromStoresArray(first, tmp6, tmp7);
  }
  const fn = function l() {
    const items = [GuildChannelStore];
    return getEventChannelsByType(closure_0, closure_1, items);
  };
  const items1 = [arg0, arg1];
  cResult[1] = arg1;
  cResult[2] = arg0;
  cResult[3] = fn;
  cResult[4] = items1;
  tmp7 = items1;
  tmp6 = fn;
  const obj = require("c");
  tmp = _require;
}) : (function useGetEventChannelsByType(arg0, arg1) {
  const _require = arg0;
  dependencyMap = arg1;
  let items = [GuildChannelStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStoresArray(items, () => {
    const items = [GuildChannelStore];
    return getEventChannelsByType(closure_0, closure_1, items);
  }, items1);
});