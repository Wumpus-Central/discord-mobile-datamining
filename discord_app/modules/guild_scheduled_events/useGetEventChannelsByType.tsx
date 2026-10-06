// === Module 9238: useGetEventChannelsByType ===

// Module 9238 (useGetEventChannelsByType)
import GuildChannelStore2 from "GuildChannelStore" /* 4513 */;
import useManageResourcePermissions from "useManageResourcePermissions" /* 9204 */;
import StageInstanceStore from "StageInstanceStore" /* 2056 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import PermissionsConstants from "PermissionsConstants" /* 9205 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
const GuildChannelStore = GuildChannelStore2;
let dependencyMap;

let metroImportDefault;
let metroRequire;
function getEventChannelsByType(id, channelTypeFromEntity) {
  let items;
  let obj;
  let tmp = items;
  if (items === undefined) {
    items = [GuildChannelStore];
    tmp = items;
  }
  [obj] = tmp;
  if (null == channelTypeFromEntity) {
    return [];
  } else {
    const items1 = [];
    const tmp17 = obj.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY];
    for (const item10016 of tmp17) {
      let channel = item10016.channel;
      let obj2 = channel;
      let obj3 = useManageResourcePermissions;
      let manageResourcePermissions = obj3.getManageResourcePermissions(channel);
      let canManageAllEvents = manageResourcePermissions.canCreateGuildEvent || manageResourcePermissions.canManageAllEvents;
      if (obj2.type === channelTypeFromEntity) {
        let isGuildVoiceResult = obj2.isGuildVoice() && canManageAllEvents;
        if (!isGuildVoiceResult) {
          let isGuildStageVoiceResult = obj2.isGuildStageVoice() && canManageAllEvents;
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
const GUILD_VOCAL_CHANNELS_KEY = GuildChannelStore2.GUILD_VOCAL_CHANNELS_KEY;
({ CREATE_GUILD_EVENT_VOICE_CHANNEL_PERMISSIONS: metroRequire, CREATE_GUILD_EVENT_STAGE_CHANNEL_PERMISSIONS: metroImportDefault } = PermissionsConstants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let first;
  let tmp6;
  let tmp7;
  let tmp9;
  const _require = id;
  const obj = require("react");
  const cResult = obj.c(11);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id) {
    const fn = function l() {
      return PermissionStore.can(metroImportDefault, id);
    };
    const items1 = [id];
    cResult[1] = id;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = require("get initialized");
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [StageInstanceStore];
    cResult[4] = items2;
    tmp9 = items2;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] !== id.id) {
    class C {
      constructor() {
        return StageInstanceStore.getStageInstanceByChannel(id.id);
      }
    }
    cResult[5] = id.id;
    cResult[6] = C;
  } else {
    class C {
      constructor() {
        return StageInstanceStore.getStageInstanceByChannel(id.id);
      }
    }
  }
  const tmpResult2 = require("get initialized");
  const stateFromStores1 = tmpResult2.useStateFromStores(tmp9, C);
  if (cResult[7] === id) {
    class C {
      constructor() {
        return StageInstanceStore.getStageInstanceByChannel(id.id);
      }
    }
  }
  let tmp13 = id.isGuildStageVoice() && stateFromStores;
  if (tmp13) {
    class C {
      constructor() {
        return StageInstanceStore.getStageInstanceByChannel(id.id);
      }
    }
    tmp13 = null == stateFromStores1;
  }
  cResult[7] = id;
  cResult[8] = stateFromStores;
  cResult[9] = stateFromStores1;
  cResult[10] = tmp13;
}) : ((isGuildStageVoice) => {
  const _require = isGuildStageVoice;
  const items = [PermissionStore];
  const items1 = [isGuildStageVoice];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(metroImportDefault, isGuildStageVoice), items1);
  const items2 = [StageInstanceStore];
  const obj2 = require("get initialized");
  const stateFromStores1 = obj2.useStateFromStores(items2, () => StageInstanceStore.getStageInstanceByChannel(isGuildStageVoice.id));
  const tmp3 = isGuildStageVoice.isGuildStageVoice() && stateFromStores && null == stateFromStores1;
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((isGuildVoice) => {
  let first;
  let tmp6;
  let tmp7;
  const _require = isGuildVoice;
  const obj = require("react");
  const cResult = obj.c(7);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [PermissionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== isGuildVoice) {
    const fn = function s() {
      return PermissionStore.can(metroRequire, isGuildVoice);
    };
    const items1 = [isGuildVoice];
    cResult[1] = isGuildVoice;
    cResult[2] = fn;
    cResult[3] = items1;
    tmp7 = items1;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
  if (cResult[4] === isGuildVoice) {
    let tmp9;
    if (cResult[5] === stateFromStores) {
      tmp9 = cResult[6];
    }
    return tmp9;
  }
  const tmp10 = isGuildVoice.isGuildVoice() && stateFromStores;
  cResult[4] = isGuildVoice;
  cResult[5] = stateFromStores;
  cResult[6] = tmp10;
  tmp9 = tmp10;
}) : ((isGuildVoice) => {
  const _require = isGuildVoice;
  const items = [PermissionStore];
  const items1 = [isGuildVoice];
  const obj = require("get initialized");
  const stateFromStores = obj.useStateFromStores(items, () => PermissionStore.can(metroRequire, isGuildVoice), items1);
  const tmp2 = isGuildVoice.isGuildVoice() && stateFromStores;
  return tmp2;
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  let first;
  const _require = arg0;
  dependencyMap = arg1;
  const obj = require("react");
  const cResult = obj.c(5);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg1) {
    let tmp6;
    let tmp7;
    if (cResult[2] === arg0) {
      tmp6 = cResult[3];
      tmp7 = cResult[4];
    }
    const tmpResult = tmp(504);
    return tmpResult.useStateFromStoresArray(first, tmp6, tmp7);
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
}) : ((arg0, arg1) => {
  let closure_0;
  let closure_1;
  const _require = arg0;
  dependencyMap = arg1;
  let items = [GuildChannelStore];
  const items1 = [arg0, arg1];
  const obj = require("get initialized");
  return obj.useStateFromStoresArray(items, () => {
    const items = [GuildChannelStore];
    return getEventChannelsByType(closure_0, closure_1, items);
  }, items1);
});
const result = size.fileFinishedImporting("modules/guild_scheduled_events/useGetEventChannelsByType.tsx");

export const useCanCreateEventInStageChannel = tmp3;
export const useCanCreateEventInVoiceChannel = tmp4;
export { getEventChannelsByType };
export const useGetEventChannelsByType = tmp5;