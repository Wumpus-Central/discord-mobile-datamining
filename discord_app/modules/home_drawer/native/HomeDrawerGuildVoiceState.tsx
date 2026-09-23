// === Module 16722: HomeDrawerGuildVoiceState ===

// Module 16722 (HomeDrawerGuildVoiceState)
import _modDef12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4823 */;
import LinearGradientDefault from "LinearGradient" /* 5283 */;
import FastImageDefault from "FastImage" /* 5890 */;
import useFetchStreamPreviewDefault from "useFetchStreamPreview" /* 10404 */;
import AvatarPile from "AvatarPile" /* 13407 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4460 */;
import RelationshipStore from "RelationshipStore" /* 4472 */;
import UserGuildSettingsStore from "UserGuildSettingsStore" /* 5008 */;
import SortedVoiceStateStore from "SortedVoiceStateStore" /* 4851 */;

const require = globalThis.__r;

require = fn;
function VoiceUsers(arg0) {
  ({ voiceUsers, guildId: require } = arg0);
  let substr = voiceUsers;
  if (voiceUsers.length > 3) {
    substr = voiceUsers.slice(0, 3);
  }
  let tmp = null;
  if (0 !== voiceUsers.length) {
    const obj = { style: { flexDirection: "row", alignItems: "center", gap: 4 }, children: null };
    const obj2 = { size: native.AvatarSizes.XSMALL, names: substr.map((username) => username.username), totalCount: substr.length, children: substr.map((user) => closure_2_11(native.Avatar, { size: native.AvatarSizes.XSMALL, user, guildId, animate: false }, user.id)) };
    obj.children = closure_11(AvatarPile.AvatarPile, obj2);
    tmp = closure_11(View, obj);
  }
  return tmp;
}
function LiveTag() {
  const tmp = closure_15();
  const obj = { style: tmp.tag, importantForAccessibility: "no-hide-descendants", accessibilityElementsHidden: true, children: null };
  const obj2 = { variant: "text-xxs/bold", style: tmp.tagText, lineClamp: 1, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.dI3q4h).toUpperCase();
  obj.children = closure_1_11(Text_Text.Text, obj2);
  return closure_1_11(View, obj);
}
const View = fn(17).View;
const GUILD_VOCAL_CHANNELS_KEY = fn(4460).GUILD_VOCAL_CHANNELS_KEY;
const ChannelTypes = fn(1074).ChannelTypes;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
let createStyles = fn(4827);
let obj2 = { voiceContainer: { paddingRight: 8, height: 40, gap: 4, justifyContent: "center" }, streamPreviewShadow: null, streamPreview: null, streamPreviewDarkGradient: null, streamPreviewGradient: null, streamPreviewBorder: null };
const merged = Object.assign(nativeDefault.shadows.SHADOW_MEDIUM);
obj2.streamPreviewShadow = { borderRadius: nativeDefault.radii.sm };
let size = { width: 72, height: 44, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.streamPreview = size;
obj2.streamPreviewDarkGradient = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.8 };
obj2.streamPreviewGradient = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.2 };
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.sm };
obj2.streamPreviewBorder = rect;
let closure_13 = createStyles.createStyles(obj2);
createStyles = fn(4827);
let obj4 = { tag: null, tagText: null };
const rect1 = { paddingHorizontal: 4, paddingVertical: 1, borderBottomRightRadius: nativeDefault.radii.xs, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.unsafe_rawColors.RED_400, position: "absolute", top: 0, left: 0 };
obj4.tag = rect1;
let obj3 = { borderRadius: nativeDefault.radii.sm };
obj4.tagText = { textAlign: "center", color: nativeDefault.unsafe_rawColors.WHITE, includeFontPadding: false };
let closure_15 = createStyles.createStyles(obj4);
size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx");

export const GuildVoiceState = function GuildVoiceState(arg0) {
  ({ voiceUsers, streamingChannelId, streamingUser, guildId } = arg0);
  const tmp = closure_13();
  let id;
  if (streamingUser != null) {
    id = streamingUser.id;
  }
  const previewUrl = useFetchStreamPreviewDefault(guildId, streamingChannelId, id).previewUrl;
  if (!tmp2) {
    return null;
  } else {
    const items = [tmp.voiceContainer, ];
    let num = 32;
    if (null != streamingUser) {
      num = 48;
    }
    const obj = { style: null, children: null };
    const obj2 = { height: num };
    items[1] = obj2;
    obj.style = items;
    if (null == previewUrl) {
      const obj3 = { voiceUsers, guildId };
      let tmp7Result = closure_1_11(VoiceUsers, obj3);
    } else {
      const obj4 = { style: tmp.streamPreviewShadow, children: null };
      const obj5 = { style: tmp.streamPreview, children: null };
      const obj6 = { style: tmp.streamPreview, source: null };
      const obj7 = { uri: previewUrl };
      obj6.source = obj7;
      const items1 = [closure_1_11(FastImageDefault, obj6), , , , ];
      const obj8 = { colors: ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"], start: { x: 0, y: 0 }, end: { x: 0, y: 1 }, style: tmp.streamPreviewDarkGradient, pointerEvents: "none" };
      items1[1] = closure_1_11(LinearGradientDefault, obj8);
      const obj9 = { colors: ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"], start: { x: 0, y: 0 }, end: { x: 1, y: 1 }, style: tmp.streamPreviewGradient, pointerEvents: "none" };
      items1[2] = closure_1_11(LinearGradientDefault, obj9);
      const obj10 = { style: tmp.streamPreviewBorder, pointerEvents: "none" };
      items1[3] = closure_1_11(View, obj10);
      items1[4] = closure_1_11(LiveTag, {});
      obj5.children = items1;
      obj4.children = closure_1_12(View, obj5);
      tmp7Result = closure_1_11(View, obj4);
    }
    obj.children = tmp7Result;
    closure_1_11(View, obj);
  }
  tmp2 = voiceUsers.length > 0;
};
export const useVoiceUsers = function useVoiceUsers(guild) {
  _require = guild;
  const id = guild.id;
  isHomeDrawerChannelInChannelList = require("isHomeDrawerChannelInChannelList").useIsHomeDrawerChannelInChannelList();
  const obj = require("isHomeDrawerChannelInChannelList");
  let items = [stateFromStores1, UserGuildSettingsStore];
  const items1 = [id, isHomeDrawerChannelInChannelList];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const found = GuildChannelStore.getChannels(id)[GUILD_VOCAL_CHANNELS_KEY].filter((channel) => {
      channel = channel.channel;
      let tmp = channel.type === constants.GUILD_VOICE;
      if (tmp) {
        tmp = !guildOrCategoryOrChannelMuted.isGuildOrCategoryOrChannelMuted(streamingChannelId, channel.id);
      }
      if (tmp) {
        tmp = isHomeDrawerChannelInChannelList(channel);
      }
      return tmp;
    });
    return found.map((channel) => channel.channel.id);
  }, items1);
  const obj2 = require("initialize");
  const items2 = [SortedVoiceStateStore];
  const items3 = [id];
  const stateFromStores = require("initialize").useStateFromStores(items2, () => SortedVoiceStateStore.getVoiceStates(id), items3);
  const obj3 = require("initialize");
  const items4 = [RelationshipStore];
  stateFromStores1 = require("initialize").useStateFromStores(items4, () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs());
  const items5 = [stateFromStoresArray, stateFromStores, guild.afkChannelId, stateFromStores1];
  const items6 = [stateFromStores, guild.afkChannelId, stateFromStoresArray];
  const memo = stateFromStoresArray.useMemo(() => _modDef12.flatMap(stateFromStoresArray, (arg0) => {
    if (arg0 === guild.afkChannelId) {
      return [];
    } else {
      let items = stateFromStores[arg0];
      if (items == null) {
        items = [];
      }
      const mapped = items.map((user) => user.user);
      return closure_0(isHomeDrawerChannelInChannelList[20]).filterOutBlockedOrIgnoredUsers(mapped, stateFromStores1);
    }
  }), items5);
  const memo1 = stateFromStoresArray.useMemo(() => {
    let user = null;
    streamingChannelId = null;
    const keys = Object.keys(stateFromStores);
    const item = keys.forEach((item) => {
      if (item !== user.afkChannelId) {
        if (stateFromStoresArray.includes(item)) {
          let items = stateFromStores[item];
          if (items == null) {
            items = [];
          }
          const found = items.find((voiceState) => voiceState.voiceState.selfStream);
          let tmp5 = null != found;
          if (tmp5) {
            tmp5 = null == user;
          }
          if (tmp5) {
            user = found.user;
            closure_1 = item;
          }
        }
      }
    });
    return { streamingUser: user, streamingChannelId };
  }, items6);
  return { voiceUsers: memo, streamingUser: memo1.streamingUser, streamingChannelId: memo1.streamingChannelId };
};