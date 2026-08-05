// discord_app/modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx
import apply from "apply";
import { View } from "useIsHomeDrawerChannelInChannelList";
import comparator from "comparator";
import { GUILD_VOCAL_CHANNELS_KEY } from "comparator";
import upsertRelationship from "upsertRelationship";
import updateUserGuildSettingsInternal from "updateUserGuildSettingsInternal";
import getVoiceStatesForGuild from "getVoiceStatesForGuild";
import { ChannelTypes } from "ME";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import createCacheKey from "createCacheKey";
import { AvatarPile } from "../../../design/components/Pile/native/AvatarPile.native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { Button } from "../../../design/void/native.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { useFetchStreamPreview } from "../../go_live/useFetchStreamPreview.tsx";

let closure_12;
let unpackModuleId;
const require = arg1;
function VoiceUsers(arg0) {
  let require;
  let voiceUsers;
  ({ voiceUsers, guildId: require } = arg0);
  let substr = voiceUsers;
  if (voiceUsers.length > 3) {
    substr = voiceUsers.slice(0, 3);
  }
  let tmp = null;
  if (0 !== voiceUsers.length) {
    let obj = { style: null, children: null };
    obj[0] = { flexDirection: "row", alignItems: "center", gap: 4 };
    obj = { size: null, names: null, totalCount: null, children: null };
    obj[0] = Button.AvatarSizes.XSMALL;
    obj[1] = substr.map((username) => username.username);
    obj[2] = substr.length;
    obj[3] = substr.map((id) => {
      const obj = { size: null, user: null, guildId: null, animate: false };
      obj[0] = outer1_0(outer1_2[11]).AvatarSizes.XSMALL;
      obj[1] = id;
      obj[2] = closure_0;
      return outer1_11(outer1_0(outer1_2[11]).Avatar, obj, id.id);
    });
    obj[1] = callback(AvatarPile.AvatarPile, obj);
    tmp = callback(View, obj);
  }
  return tmp;
}
function LiveTag() {
  const tmp = callback3();
  let obj = { style: tmp.tag, children: null };
  obj = { variant: "text-xxs/bold", style: tmp.tagText, lineClamp: 1, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.dI3q4h).toUpperCase();
  obj[1] = callback(Text.Text, obj);
  return callback(View, obj);
}
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { voiceContainer: { paddingRight: 8, height: 40, gap: 4, justifyContent: "center" }, streamPreviewShadow: null, streamPreview: null, streamPreviewDarkGradient: null, streamPreviewGradient: null, streamPreviewBorder: null };
createCacheKey = { borderRadius: require("Themes").radii.sm };
const merged = Object.assign(require("Themes").shadows.SHADOW_MEDIUM);
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 72, height: 44, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[3] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.8 };
createCacheKey[4] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.2 };
let obj1 = { width: 72, height: 44, borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[5] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, borderRadius: require("Themes").radii.sm };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { tag: null, tagText: null };
let obj2 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderWidth: 1, borderColor: require("Themes").colors.BORDER_SUBTLE, borderRadius: require("Themes").radii.sm };
obj3[0] = { paddingHorizontal: 4, paddingVertical: 1, borderBottomRightRadius: require("Themes").radii.xs, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: require("Themes").unsafe_rawColors.RED_400, position: "absolute", top: 0, left: 0 };
createCacheKey = { textAlign: "center", color: require("Themes").unsafe_rawColors.WHITE, includeFontPadding: false };
obj3[1] = createCacheKey;
let closure_15 = createCacheKey.createStyles(obj3);
let obj4 = { paddingHorizontal: 4, paddingVertical: 1, borderBottomRightRadius: require("Themes").radii.xs, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: require("Themes").unsafe_rawColors.RED_400, position: "absolute", top: 0, left: 0 };
const result = require("comparator").fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx");

export const GuildVoiceState = function GuildVoiceState(arg0) {
  let guildId;
  let streamingChannelId;
  let streamingUser;
  let voiceUsers;
  ({ voiceUsers, streamingChannelId, streamingUser, guildId } = arg0);
  const tmp = createCacheKey();
  let id;
  if (streamingUser != null) {
    id = streamingUser.id;
  }
  const previewUrl = useFetchStreamPreview(guildId, streamingChannelId, id).previewUrl;
  if (!tmp2) {
    return null;
  } else {
    const items = [tmp.voiceContainer, ];
    let num = 32;
    if (null != streamingUser) {
      num = 48;
    }
    let obj = { style: null, children: null };
    obj = { height: null };
    obj[0] = num;
    items[1] = obj;
    obj[0] = items;
    if (null == previewUrl) {
      obj = { voiceUsers: null, guildId: null };
      obj[0] = voiceUsers;
      obj[1] = guildId;
      let tmp7Result = tmp7(VoiceUsers, obj);
    } else {
      const obj1 = { style: null, children: null };
      obj1[0] = tmp.streamPreviewShadow;
      const obj2 = { style: null, children: null };
      obj2[0] = tmp.streamPreview;
      const obj3 = { style: null, source: null };
      obj3[0] = tmp.streamPreview;
      const obj4 = { uri: null };
      obj4[0] = previewUrl;
      obj3[1] = obj4;
      const items1 = [tmp7(tmp3(5236), obj3), , , , ];
      const obj5 = { colors: null, start: null, end: null, style: null, pointerEvents: "none" };
      obj5[0] = ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"];
      obj5[1] = { x: 0, y: 0 };
      obj5[2] = { x: 0, y: 1 };
      obj5[3] = tmp.streamPreviewDarkGradient;
      items1[1] = tmp7(tmp3(4706), obj5);
      const obj6 = { colors: null, start: null, end: null, style: null, pointerEvents: "none" };
      obj6[0] = ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"];
      obj6[1] = { x: 0, y: 0 };
      obj6[2] = { x: 1, y: 1 };
      obj6[3] = tmp.streamPreviewGradient;
      items1[2] = tmp7(tmp3(4706), obj6);
      const obj7 = { style: null, pointerEvents: "none" };
      obj7[0] = tmp.streamPreviewBorder;
      items1[3] = tmp7(tmp8, obj7);
      items1[4] = tmp7(LiveTag, {});
      obj2[1] = items1;
      obj1[1] = callback2(tmp8, obj2);
      tmp7Result = tmp7(tmp8, obj1);
    }
    obj[1] = tmp7Result;
    tmp7Result = tmp7(tmp8, obj);
  }
};
export const useVoiceUsers = function useVoiceUsers(guild) {
  const _require = guild;
  const id = guild.id;
  let obj = _require(isHomeDrawerChannelInChannelList[17]);
  isHomeDrawerChannelInChannelList = obj.useIsHomeDrawerChannelInChannelList();
  let items = [stateFromStoresArray1, updateUserGuildSettingsInternal];
  const items1 = [id, isHomeDrawerChannelInChannelList];
  const stateFromStoresArray = _require(isHomeDrawerChannelInChannelList[18]).useStateFromStoresArray(items, () => {
    const found = stateFromStoresArray1.getChannels(id)[outer1_6].filter((channel) => {
      channel = channel.channel;
      let tmp = channel.type === outer1_10.GUILD_VOICE;
      if (tmp) {
        tmp = !outer1_8.isGuildOrCategoryOrChannelMuted(closure_1, channel.id);
      }
      if (tmp) {
        tmp = callback(channel);
      }
      return tmp;
    });
    return found.map((channel) => channel.channel.id);
  }, items1);
  const obj2 = _require(isHomeDrawerChannelInChannelList[18]);
  const items2 = [getVoiceStatesForGuild];
  const items3 = [id];
  const stateFromStores = _require(isHomeDrawerChannelInChannelList[18]).useStateFromStores(items2, () => outer1_9.getVoiceStates(id), items3);
  const obj3 = _require(isHomeDrawerChannelInChannelList[18]);
  const items4 = [upsertRelationship];
  stateFromStoresArray1 = _require(isHomeDrawerChannelInChannelList[18]).useStateFromStoresArray(items4, () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs());
  const items5 = [stateFromStoresArray, stateFromStores, guild.afkChannelId, stateFromStoresArray1];
  const items6 = [stateFromStores, guild.afkChannelId, stateFromStoresArray];
  const memo = stateFromStoresArray.useMemo(() => id(isHomeDrawerChannelInChannelList[19]).flatMap(stateFromStoresArray, (arg0) => {
    if (arg0 === afkChannelId.afkChannelId) {
      return [];
    } else {
      let items = table[arg0];
      if (items == null) {
        items = [];
      }
      const mapped = items.map((user) => user.user);
      return outer1_0(outer1_2[20]).filterOutBlockedOrIgnoredUsers(mapped, comparator);
    }
  }), items5);
  const memo1 = stateFromStoresArray.useMemo(() => {
    let c0 = null;
    let c1 = null;
    const keys = Object.keys(stateFromStores);
    const item = keys.forEach((arg0) => {
      if (arg0 !== _null.afkChannelId) {
        if (outer1_3.includes(arg0)) {
          let items = outer1_4[arg0];
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
            let closure_1 = arg0;
          }
        }
      }
    });
    return { streamingUser: c0, streamingChannelId: c1 };
  }, items6);
  obj = { voiceUsers: memo, streamingUser: memo1.streamingUser, streamingChannelId: memo1.streamingChannelId };
  return obj;
};