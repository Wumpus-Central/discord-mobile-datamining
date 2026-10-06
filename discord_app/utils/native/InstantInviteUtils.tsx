// === Module 9497: utils/InstantInviteUtils ===

// Module 9497 (utils/InstantInviteUtils)
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import canViewInviteModal from "canViewInviteModal" /* 9298 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore_mod from "GuildChannelStore" /* 4513 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let vanityURLCode;

let c3;
let closure_4;
const f100840 = () => f52021();
const f100841 = () => f52022();
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: c3, GUILD_VOCAL_CHANNELS_KEY: closure_4 } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
const Permissions = Constants.Permissions;
const f51996 = () => {
  const intl = f51996(f51997[4]).intl;
  return intl.string(f51996(f51997[4]).t.PqEzn8);
};
const f51997 = () => {
  const intl = f51996(f51997[4]).intl;
  return intl.string(f51996(f51997[4]).t["5u4A6V"]);
};
let obj = { value: 0 };
Object.defineProperty(obj, "label", { get: f100840, set: undefined });
Object.defineProperty(obj, "descriptiveLabel", { get: f100841, set: undefined });
const fn = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t["k2UNz+"], { days: 7 });
};
let obj2 = { value: 604800 };
Object.defineProperty(obj2, "label", { get: f100840, set: undefined });
Object.defineProperty(obj2, "descriptiveLabel", { get: f100841, set: undefined });
const fn2 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t["k2UNz+"], { days: 14 });
};
const obj3 = { value: 1209600 };
Object.defineProperty(obj3, "label", { get: f100840, set: undefined });
Object.defineProperty(obj3, "descriptiveLabel", { get: f100841, set: undefined });
const fn3 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t["k2UNz+"], { days: 30 });
};
const obj4 = { value: 2592000 };
Object.defineProperty(obj4, "label", { get: f100840, set: undefined });
Object.defineProperty(obj4, "descriptiveLabel", { get: f100841, set: undefined });
const fn4 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t["k2UNz+"], { days: 60 });
};
const obj5 = { value: 5184000 };
Object.defineProperty(obj5, "label", { get: f100840, set: undefined });
Object.defineProperty(obj5, "descriptiveLabel", { get: f100841, set: undefined });
const fn5 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t["k2UNz+"], { days: 1 });
};
const obj6 = { value: 86400 };
Object.defineProperty(obj6, "label", { get: f100840, set: undefined });
Object.defineProperty(obj6, "descriptiveLabel", { get: f100841, set: undefined });
const fn6 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t.xCjYxK, { hours: 12 });
};
const obj7 = { value: 43200 };
Object.defineProperty(obj7, "label", { get: f100840, set: undefined });
Object.defineProperty(obj7, "descriptiveLabel", { get: f100841, set: undefined });
const fn7 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t.xCjYxK, { hours: 6 });
};
const obj8 = { value: 21600 };
Object.defineProperty(obj8, "label", { get: f100840, set: undefined });
Object.defineProperty(obj8, "descriptiveLabel", { get: f100841, set: undefined });
const fn8 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t.xCjYxK, { hours: 8 });
};
const obj9 = { value: 28800 };
Object.defineProperty(obj9, "label", { get: f100840, set: undefined });
Object.defineProperty(obj9, "descriptiveLabel", { get: f100841, set: undefined });
const fn9 = () => {
  const intl = intl2.intl;
  return intl.formatToPlainString(intl2.t.xCjYxK, { hours: 1 });
};
const obj10 = { value: 3600 };
Object.defineProperty(obj10, "label", { get: f100840, set: undefined });
Object.defineProperty(obj10, "descriptiveLabel", { get: f100841, set: undefined });
const f52007 = () => {
  const intl = f52007(f52008[4]).intl;
  return intl.formatToPlainString(f52007(f52008[4]).t.opVZ9q, { mins: 30 });
};
const f52008 = () => {
  const intl = f52007(f52008[4]).intl;
  return intl.formatToPlainString(f52007(f52008[4]).t.iXLF9W, { minutes: 30 });
};
const obj11 = { value: 1800 };
Object.defineProperty(obj11, "label", { get: f100840, set: undefined });
Object.defineProperty(obj11, "descriptiveLabel", { get: f100841, set: undefined });
let items = [obj, obj5, obj4, obj3, obj2, obj6, obj7, obj8, obj10, obj11];
const f52009 = () => {
  const intl = f52009(f52010[4]).intl;
  return intl.formatToPlainString(f52009(f52010[4]).t["r/IcuP"], { maxUses: 0 });
};
const f52010 = () => {
  const intl = f52009(f52010[4]).intl;
  return intl.formatToPlainString(f52009(f52010[4]).t.gPl14C, { maxUses: 0 });
};
const obj12 = { value: 0 };
Object.defineProperty(obj12, "label", { get: f100840, set: undefined });
Object.defineProperty(obj12, "descriptiveLabel", { get: f100841, set: undefined });
const f52011 = () => "1";
const f52012 = () => {
  const intl = f52011(f52012[4]).intl;
  return intl.formatToPlainString(f52011(f52012[4]).t.gPl14C, { maxUses: 1 });
};
const obj13 = { value: 1 };
Object.defineProperty(obj13, "label", { get: f100840, set: undefined });
Object.defineProperty(obj13, "descriptiveLabel", { get: f100841, set: undefined });
const f52013 = () => "5";
const f52014 = () => {
  const intl = f52013(f52014[4]).intl;
  return intl.formatToPlainString(f52013(f52014[4]).t.gPl14C, { maxUses: 5 });
};
const obj14 = { value: 5 };
Object.defineProperty(obj14, "label", { get: f100840, set: undefined });
Object.defineProperty(obj14, "descriptiveLabel", { get: f100841, set: undefined });
const f52015 = () => "10";
const f52016 = () => {
  const intl = f52015(f52016[4]).intl;
  return intl.formatToPlainString(f52015(f52016[4]).t.gPl14C, { maxUses: 10 });
};
const obj15 = { value: 10 };
Object.defineProperty(obj15, "label", { get: f100840, set: undefined });
Object.defineProperty(obj15, "descriptiveLabel", { get: f100841, set: undefined });
const f52017 = () => "25";
const f52018 = () => {
  const intl = f52017(f52018[4]).intl;
  return intl.formatToPlainString(f52017(f52018[4]).t.gPl14C, { maxUses: 25 });
};
const obj16 = { value: 25 };
Object.defineProperty(obj16, "label", { get: f100840, set: undefined });
Object.defineProperty(obj16, "descriptiveLabel", { get: f100841, set: undefined });
const f52019 = () => "50";
const f52020 = () => {
  const intl = f52019(f52020[4]).intl;
  return intl.formatToPlainString(f52019(f52020[4]).t.gPl14C, { maxUses: 50 });
};
const obj17 = { value: 50 };
Object.defineProperty(obj17, "label", { get: f100840, set: undefined });
Object.defineProperty(obj17, "descriptiveLabel", { get: f100841, set: undefined });
const f52021 = () => "100";
const f52022 = () => {
  const intl = f52021(f52022[4]).intl;
  return intl.formatToPlainString(f52021(f52022[4]).t.gPl14C, { maxUses: 100 });
};
const obj18 = { value: 100 };
Object.defineProperty(obj18, "label", { get: f100840, set: undefined });
Object.defineProperty(obj18, "descriptiveLabel", { get: f100841, set: undefined });
let items1 = [obj12, obj13, obj14, obj15, obj16, obj17, obj18];
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let first;
  let tmp7;
  const _require = id;
  const obj = require("react");
  const cResult = obj.c(7);
  const tmp = _require;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== id.id) {
    class N {
      constructor() {
        return GuildChannelStore.getChannels(id.id);
      }
    }
    const items1 = [id.id];
    cResult[1] = id.id;
    cResult[2] = N;
    cResult[3] = items1;
    tmp7 = items1;
  } else {
    class N {
      constructor() {
        return GuildChannelStore.getChannels(id.id);
      }
    }
    tmp7 = cResult[3];
  }
  const tmpResult = tmp(504);
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, N, tmp7);
  if (id != null) {
    class N {
      constructor() {
        return GuildChannelStore.getChannels(id.id);
      }
    }
  }
  if (null != undefined) {
    class N {
      constructor() {
        return GuildChannelStore.getChannels(id.id);
      }
    }
    if (obj3.canViewInviteModal(PermissionStore, id)) {
      class N {
        constructor() {
          return GuildChannelStore.getChannels(id.id);
        }
      }
      return true;
    }
  }
  if (null == stateFromStoresObject) {
    class N {
      constructor() {
        return GuildChannelStore.getChannels(id.id);
      }
    }
    return true;
  } else {
    class N {
      constructor() {
        return GuildChannelStore.getChannels(id.id);
      }
    }
    const arr4 = stateFromStoresObject[closure_3];
    if (null != arr4.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel))) {
      class N {
        constructor() {
          return GuildChannelStore.getChannels(id.id);
        }
      }
      return true;
    } else {
      let tmp10;
      class N {
        constructor() {
          return GuildChannelStore.getChannels(id.id);
        }
      }
      if (cResult[4] !== stateFromStoresObject[closure_4]) {
        class N {
          constructor() {
            return GuildChannelStore.getChannels(id.id);
          }
        }
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          class N {
            constructor() {
              return GuildChannelStore.getChannels(id.id);
            }
          }
          cResult[6] = tmp12;
        } else {
          class N {
            constructor() {
              return GuildChannelStore.getChannels(id.id);
            }
          }
        }
        const found = arr3.find(tmp12);
        cResult[4] = stateFromStoresObject[closure_4];
        cResult[5] = found;
        tmp10 = found;
      } else {
        class N {
          constructor() {
            return GuildChannelStore.getChannels(id.id);
          }
        }
      }
      return null != tmp10;
    }
  }
}) : ((id) => {
  const _require = id;
  const items = [GuildChannelStore];
  const items1 = [id.id];
  const obj = require("get initialized");
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => GuildChannelStore.getChannels(id.id), items1);
  vanityURLCode = undefined;
  const tmp = _require;
  if (id != null) {
    vanityURLCode = id.vanityURLCode;
  }
  let tmp5 = null == vanityURLCode;
  if (!tmp5) {
    const tmpResult = tmp(9298);
    tmp5 = !tmpResult.canViewInviteModal(PermissionStore, id);
  }
  let tmp7 = !tmp5;
  if (tmp5) {
    let tmp8 = null == stateFromStoresObject;
    if (!tmp8) {
      const arr3 = stateFromStoresObject[closure_3];
      let tmp10 = null != arr3.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (!tmp10) {
        const arr4 = stateFromStoresObject[closure_4];
        tmp10 = null != arr4.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      }
      tmp8 = tmp10;
    }
    tmp7 = tmp8;
  }
  return tmp7;
});
let result = size.fileFinishedImporting("utils/native/InstantInviteUtils.tsx");

export const INVITE_OPTIONS_FOREVER = obj;
export const INVITE_OPTIONS_7_DAYS = obj2;
export const INVITE_OPTIONS_14_DAYS = obj3;
export const INVITE_OPTIONS_30_DAYS = obj4;
export const INVITE_OPTIONS_60_DAYS = obj5;
export const INVITE_OPTIONS_1_DAY = obj6;
export const INVITE_OPTIONS_12_HOURS = obj7;
export const INVITE_OPTIONS_6_HOURS = obj8;
export const INVITE_OPTIONS_8_HOURS = obj9;
export const INVITE_OPTIONS_1_HOUR = obj10;
export const INVITE_OPTIONS_30_MINUTES = obj11;
export const MAX_AGE_OPTIONS = items;
export const INVITE_OPTIONS_UNLIMITED = obj12;
export const INVITE_OPTIONS_ONCE = obj13;
export const INVITE_OPTIONS_5_TIMES = obj14;
export const INVITE_OPTIONS_10_TIMES = obj15;
export const INVITE_OPTIONS_25_TIMES = obj16;
export const INVITE_OPTIONS_50_TIMES = obj17;
export const INVITE_OPTIONS_100_TIMES = obj18;
export const MAX_USES_OPTIONS = items1;
export const getInviteChannelId = function getInviteChannelId(channelId, stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else {
    let id = null;
    if (null != channelId) {
      const obj = { channelId };
      const obj2 = stateFromStores[_false];
      const result = PermissionStore.canWithPartialContext(Permissions.CREATE_INSTANT_INVITE, obj);
      const combined = obj2.concat(stateFromStores[React3]);
      const found = combined.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (result) {
        const channel = ChannelStore.getChannel(channelId);
        let isThreadResult;
        if (channel != null) {
          isThreadResult = channel.isThread();
        }
        let parent_id = channelId;
        if (isThreadResult) {
          parent_id = channelId;
          if (null != channel.parent_id) {
            parent_id = channel.parent_id;
          }
        }
        id = parent_id;
      } else {
        id = null;
        if (null != found) {
          id = found.channel.id;
        }
      }
    }
    return id;
  }
};
export const shouldRenderInvite = function shouldRenderInvite(channels, guild) {
  vanityURLCode = undefined;
  if (guild != null) {
    vanityURLCode = guild.vanityURLCode;
  }
  let tmp2 = null == vanityURLCode;
  if (!tmp2) {
    const obj = canViewInviteModal;
    tmp2 = !obj.canViewInviteModal(PermissionStore, guild);
  }
  let tmp6 = !tmp2;
  if (tmp2) {
    let tmp8 = null != channels;
    if (tmp8) {
      const arr = channels[_false];
      let tmp10 = null != arr.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (!tmp10) {
        const arr2 = channels[React3];
        tmp10 = null != arr2.find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      }
      tmp8 = tmp10;
    }
    tmp6 = tmp8;
  }
  return tmp6;
};
export const useShouldShowInviteInActionBar = tmp3;