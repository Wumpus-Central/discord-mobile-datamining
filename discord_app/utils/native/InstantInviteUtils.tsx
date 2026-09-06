// discord_app/utils/native/InstantInviteUtils.tsx
import util from "../../intl/index.native.tsx";
import canViewInviteModal from "../../modules/instant_invite/canViewInviteModal.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../stores/GuildChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

require = fn;
let GuildChannelStore = fn(2012);
({ GUILD_SELECTABLE_CHANNELS_KEY: c3, GUILD_VOCAL_CHANNELS_KEY: closure_4 } = GuildChannelStore);
const Permissions = fn(1074).Permissions;
let closure_129_0 = () => {
  const intl = util.intl;
  return intl.string(util.t.PqEzn8);
};
let closure_129_1 = () => {
  const intl = util.intl;
  return intl.string(util.t["5u4A6V"]);
};
let obj = { value: 0 };
Object.defineProperty(obj, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
fn = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t["k2UNz+"], { days: 7 });
};
let closure_130_0 = fn;
let closure_130_1 = fn;
obj = { value: 604800 };
Object.defineProperty(obj, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
const fn2 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t["k2UNz+"], { days: 14 });
};
let closure_131_0 = fn2;
let closure_131_1 = fn2;
obj = { value: 1209600 };
Object.defineProperty(obj, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
const fn3 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t["k2UNz+"], { days: 30 });
};
let closure_132_0 = fn3;
let closure_132_1 = fn3;
const obj1 = { value: 2592000 };
Object.defineProperty(obj1, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj1, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
const fn4 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t["k2UNz+"], { days: 60 });
};
let closure_133_0 = fn4;
let closure_133_1 = fn4;
let obj2 = { value: 5184000 };
Object.defineProperty(obj2, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj2, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
const fn5 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t["k2UNz+"], { days: 1 });
};
let closure_134_0 = fn5;
let closure_134_1 = fn5;
const obj3 = { value: 86400 };
Object.defineProperty(obj3, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj3, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
const fn6 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.xCjYxK, { hours: 12 });
};
let closure_135_0 = fn6;
let closure_135_1 = fn6;
const obj4 = { value: 43200 };
Object.defineProperty(obj4, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj4, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
const fn7 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.xCjYxK, { hours: 6 });
};
let closure_136_0 = fn7;
let closure_136_1 = fn7;
const obj5 = { value: 21600 };
Object.defineProperty(obj5, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj5, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
const fn8 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.xCjYxK, { hours: 8 });
};
let closure_137_0 = fn8;
let closure_137_1 = fn8;
const obj6 = { value: 28800 };
Object.defineProperty(obj6, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj6, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
const fn9 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.xCjYxK, { hours: 1 });
};
let closure_138_0 = fn9;
let closure_138_1 = fn9;
const obj7 = { value: 3600 };
Object.defineProperty(obj7, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj7, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
let closure_139_0 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.opVZ9q, { mins: 30 });
};
let closure_139_1 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.iXLF9W, { minutes: 30 });
};
const obj8 = { value: 1800 };
Object.defineProperty(obj8, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj8, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
let items = [obj, obj2, obj1, obj, obj, obj3, obj4, obj5, obj7, obj8];
let closure_140_0 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t["r/IcuP"], { maxUses: 0 });
};
let closure_140_1 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.gPl14C, { maxUses: 0 });
};
const obj9 = { value: 0 };
Object.defineProperty(obj9, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj9, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
let closure_141_0 = () => "1";
let closure_141_1 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.gPl14C, { maxUses: 1 });
};
const obj10 = { value: 1 };
Object.defineProperty(obj10, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj10, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
let closure_142_0 = () => "5";
let closure_142_1 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.gPl14C, { maxUses: 5 });
};
const obj11 = { value: 5 };
Object.defineProperty(obj11, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj11, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
let closure_143_0 = () => "10";
let closure_143_1 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.gPl14C, { maxUses: 10 });
};
const obj12 = { value: 10 };
Object.defineProperty(obj12, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj12, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
let closure_144_0 = () => "25";
let closure_144_1 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.gPl14C, { maxUses: 25 });
};
const obj13 = { value: 25 };
Object.defineProperty(obj13, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj13, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
let closure_145_0 = () => "50";
let closure_145_1 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.gPl14C, { maxUses: 50 });
};
const obj14 = { value: 50 };
Object.defineProperty(obj14, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj14, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
let closure_146_0 = () => "100";
let closure_146_1 = () => {
  const intl = util.intl;
  return intl.formatToPlainString(util.t.gPl14C, { maxUses: 100 });
};
const obj15 = { value: 100 };
Object.defineProperty(obj15, "label", { get: () => require(), set: undefined });
Object.defineProperty(obj15, "descriptiveLabel", { get: () => dependencyMap(), set: undefined });
let items1 = [obj9, obj10, obj11, obj12, obj13, obj14, obj15];
const size = fn(2);
let result = size.fileFinishedImporting("utils/native/InstantInviteUtils.tsx");

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
      const obj = { channelId };
      const result = PermissionStore.canWithPartialContext(Permissions.CREATE_INSTANT_INVITE, obj);
      const combined = stateFromStores[React3].concat(stateFromStores[React4]);
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
  let vanityURLCode;
  if (guild != null) {
    vanityURLCode = guild.vanityURLCode;
  }
  let tmp2 = null == vanityURLCode;
  if (!tmp2) {
    tmp2 = !canViewInviteModal.canViewInviteModal(PermissionStore, guild);
  }
  let tmp6 = !tmp2;
  if (tmp2) {
    let tmp8 = null != channels;
    if (tmp8) {
      let tmp10 =
        null !=
        channels[React3].find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      if (!tmp10) {
        tmp10 =
          null !=
          channels[React4].find((channel) => PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel));
      }
      tmp8 = tmp10;
    }
    tmp6 = tmp8;
  }
  return tmp6;
};
export const useShouldShowInviteInActionBar = function useShouldShowInviteInActionBar(id) {
  _require = id;
  const items = [GuildChannelStore];
  const items1 = [id.id];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items,
    () => GuildChannelStore.getChannels(id.id),
    items1,
  );
  let vanityURLCode;
  if (id != null) {
    vanityURLCode = id.vanityURLCode;
  }
  let tmp5 = null == vanityURLCode;
  if (!tmp5) {
    tmp5 = !require("canViewInviteModal").canViewInviteModal(PermissionStore, id);
    const tmpResult = require("canViewInviteModal");
  }
  let tmp7 = !tmp5;
  if (tmp5) {
    let tmp8 = null == stateFromStoresObject;
    if (!tmp8) {
      let tmp10 =
        null !=
        stateFromStoresObject[closure_3].find((channel) =>
          PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel),
        );
      if (!tmp10) {
        tmp10 =
          null !=
          stateFromStoresObject[closure_4].find((channel) =>
            PermissionStore.can(constants.CREATE_INSTANT_INVITE, channel.channel),
          );
      }
      tmp8 = tmp10;
    }
    tmp7 = tmp8;
  }
  return tmp7;
};
