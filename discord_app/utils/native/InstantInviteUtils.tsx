// === Module 9938: get label ===

// Module 9938 (get label)
import closure_2 from "ensureGuildLoaded" /* 1386 */;
import comparator from "comparator" /* 1981 */;
import closure_5 from "comparator" /* 1981 */;
import closure_6 from "getUncachedChannelPermissions" /* 4120 */;
import { Permissions } from "ME" /* 673 */;

let f48459 = arg1;
let f48460 = dependencyMap;
({ GUILD_SELECTABLE_CHANNELS_KEY: c3, GUILD_VOCAL_CHANNELS_KEY: c4 } = comparator);
f48459 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.string(f48459(f48460[4]).t.PqEzn8);
};
f48460 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.string(f48459(f48460[4]).t["5u4A6V"]);
};
let obj = { value: 0 };
Object.defineProperty(obj, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj, "descriptiveLabel", { get: () => f48460(), set: undefined });
const fn = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t["k2UNz+"], { days: 7 });
};
f48459 = fn;
f48460 = fn;
obj = { value: 604800 };
Object.defineProperty(obj, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj, "descriptiveLabel", { get: () => f48460(), set: undefined });
const fn2 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t["k2UNz+"], { days: 14 });
};
f48459 = fn2;
f48460 = fn2;
obj = { value: 1209600 };
Object.defineProperty(obj, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj, "descriptiveLabel", { get: () => f48460(), set: undefined });
const fn3 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t["k2UNz+"], { days: 30 });
};
f48459 = fn3;
f48460 = fn3;
const obj1 = { value: 2592000 };
Object.defineProperty(obj1, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj1, "descriptiveLabel", { get: () => f48460(), set: undefined });
const fn4 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t["k2UNz+"], { days: 60 });
};
f48459 = fn4;
f48460 = fn4;
let obj2 = { value: 5184000 };
Object.defineProperty(obj2, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj2, "descriptiveLabel", { get: () => f48460(), set: undefined });
const fn5 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t["k2UNz+"], { days: 1 });
};
f48459 = fn5;
f48460 = fn5;
const obj3 = { value: 86400 };
Object.defineProperty(obj3, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj3, "descriptiveLabel", { get: () => f48460(), set: undefined });
const fn6 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.xCjYxK, { hours: 12 });
};
f48459 = fn6;
f48460 = fn6;
const obj4 = { value: 43200 };
Object.defineProperty(obj4, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj4, "descriptiveLabel", { get: () => f48460(), set: undefined });
const fn7 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.xCjYxK, { hours: 6 });
};
f48459 = fn7;
f48460 = fn7;
const obj5 = { value: 21600 };
Object.defineProperty(obj5, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj5, "descriptiveLabel", { get: () => f48460(), set: undefined });
const fn8 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.xCjYxK, { hours: 8 });
};
f48459 = fn8;
f48460 = fn8;
const obj6 = { value: 28800 };
Object.defineProperty(obj6, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj6, "descriptiveLabel", { get: () => f48460(), set: undefined });
const fn9 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.xCjYxK, { hours: 1 });
};
f48459 = fn9;
f48460 = fn9;
const obj7 = { value: 3600 };
Object.defineProperty(obj7, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj7, "descriptiveLabel", { get: () => f48460(), set: undefined });
f48459 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.opVZ9q, { mins: 30 });
};
f48460 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.iXLF9W, { minutes: 30 });
};
const obj8 = { value: 1800 };
Object.defineProperty(obj8, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj8, "descriptiveLabel", { get: () => f48460(), set: undefined });
let items = [obj, obj2, obj1, obj, obj, obj3, obj4, obj5, obj7, obj8];
f48459 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t["r/IcuP"], { maxUses: 0 });
};
f48460 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.gPl14C, { maxUses: 0 });
};
const obj9 = { value: 0 };
Object.defineProperty(obj9, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj9, "descriptiveLabel", { get: () => f48460(), set: undefined });
f48459 = () => "1";
f48460 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.gPl14C, { maxUses: 1 });
};
const obj10 = { value: 1 };
Object.defineProperty(obj10, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj10, "descriptiveLabel", { get: () => f48460(), set: undefined });
f48459 = () => "5";
f48460 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.gPl14C, { maxUses: 5 });
};
const obj11 = { value: 5 };
Object.defineProperty(obj11, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj11, "descriptiveLabel", { get: () => f48460(), set: undefined });
f48459 = () => "10";
f48460 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.gPl14C, { maxUses: 10 });
};
const obj12 = { value: 10 };
Object.defineProperty(obj12, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj12, "descriptiveLabel", { get: () => f48460(), set: undefined });
f48459 = () => "25";
f48460 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.gPl14C, { maxUses: 25 });
};
const obj13 = { value: 25 };
Object.defineProperty(obj13, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj13, "descriptiveLabel", { get: () => f48460(), set: undefined });
f48459 = () => "50";
f48460 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.gPl14C, { maxUses: 50 });
};
const obj14 = { value: 50 };
Object.defineProperty(obj14, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj14, "descriptiveLabel", { get: () => f48460(), set: undefined });
f48459 = () => "100";
f48460 = () => {
  const intl = f48459(f48460[4]).intl;
  return intl.formatToPlainString(f48459(f48460[4]).t.gPl14C, { maxUses: 100 });
};
const obj15 = { value: 100 };
Object.defineProperty(obj15, "label", { get: () => f48459(), set: undefined });
Object.defineProperty(obj15, "descriptiveLabel", { get: () => f48460(), set: undefined });
let items1 = [obj9, obj10, obj11, obj12, obj13, obj14, obj15];
let result = require("set").fileFinishedImporting("utils/native/InstantInviteUtils.tsx");

export const INVITE_OPTIONS_FOREVER = obj;
export const INVITE_OPTIONS_7_DAYS = obj;
export const INVITE_OPTIONS_14_DAYS = obj;
export const INVITE_OPTIONS_30_DAYS = obj1;
export const INVITE_OPTIONS_60_DAYS = obj2;
export const INVITE_OPTIONS_1_DAY = obj3;
export const INVITE_OPTIONS_12_HOURS = obj4;
export const INVITE_OPTIONS_6_HOURS = obj5;
export const INVITE_OPTIONS_8_HOURS = obj6;
export const INVITE_OPTIONS_1_HOUR = obj7;
export const INVITE_OPTIONS_30_MINUTES = obj8;
export const MAX_AGE_OPTIONS = items;
export const INVITE_OPTIONS_UNLIMITED = obj9;
export const INVITE_OPTIONS_ONCE = obj10;
export const INVITE_OPTIONS_5_TIMES = obj11;
export const INVITE_OPTIONS_10_TIMES = obj12;
export const INVITE_OPTIONS_25_TIMES = obj13;
export const INVITE_OPTIONS_50_TIMES = obj14;
export const INVITE_OPTIONS_100_TIMES = obj15;
export const MAX_USES_OPTIONS = items1;
export const getInviteChannelId = function getInviteChannelId(channelId, stateFromStores) {
  if (null == stateFromStores) {
    return null;
  } else {
    let id = null;
    if (null != channelId) {
      const obj = { channelId: null };
      obj[0] = channelId;
      const result = closure_6.canWithPartialContext(Permissions.CREATE_INSTANT_INVITE, obj);
      const combined = stateFromStores[closure_3].concat(stateFromStores[closure_4]);
      const found = combined.find((channel) => closure_6.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (result) {
        channel = channel.getChannel(channelId);
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
      const obj2 = stateFromStores[closure_3];
    }
    return id;
  }
};
export const shouldRenderInvite = function shouldRenderInvite(channels, guild) {
  let vanityURLCode;
  if (guild != null) {
    vanityURLCode = guild.vanityURLCode;
  }
  let tmp2 = null == vanityURLCode;
  if (!tmp2) {
    tmp2 = !f48459(f48460[5]).canViewInviteModal(closure_6, guild);
    const obj = f48459(f48460[5]);
  }
  let tmp6 = !tmp2;
  if (tmp2) {
    let tmp8 = null != channels;
    if (tmp8) {
      let tmp10 = null != channels[closure_3].find((channel) => closure_6.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (!tmp10) {
        tmp10 = null != channels[closure_4].find((channel) => closure_6.can(constants.CREATE_INSTANT_INVITE, channel.channel));
        const arr2 = channels[closure_4];
      }
      tmp8 = tmp10;
      const arr = channels[closure_3];
    }
    tmp6 = tmp8;
  }
  return tmp6;
};
export const useShouldShowInviteInActionBar = function useShouldShowInviteInActionBar(id) {
  const callback = id;
  const items = [closure_5];
  const items1 = [id.id];
  const stateFromStoresObject = callback(f48460[6]).useStateFromStoresObject(items, () => closure_1_5.getChannels(id.id), items1);
  let vanityURLCode;
  if (id != null) {
    vanityURLCode = id.vanityURLCode;
  }
  let tmp5 = null == vanityURLCode;
  if (!tmp5) {
    tmp5 = !callback(f48460[5]).canViewInviteModal(closure_6, id);
    const tmpResult = callback(f48460[5]);
  }
  let tmp7 = !tmp5;
  if (tmp5) {
    let tmp8 = null == stateFromStoresObject;
    if (!tmp8) {
      let tmp10 = null != stateFromStoresObject[closure_3].find((channel) => closure_6.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (!tmp10) {
        tmp10 = null != stateFromStoresObject[closure_4].find((channel) => closure_6.can(constants.CREATE_INSTANT_INVITE, channel.channel));
        const arr4 = stateFromStoresObject[closure_4];
      }
      tmp8 = tmp10;
      const arr3 = stateFromStoresObject[closure_3];
    }
    tmp7 = tmp8;
  }
  return tmp7;
};