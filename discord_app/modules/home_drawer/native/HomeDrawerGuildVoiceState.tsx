// discord_app/modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import AvatarPile from "../../../design/components/Pile/native/AvatarPile.native.tsx";
import useFetchStreamPreviewDefault from "../../go_live/useFetchStreamPreview.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../stores/GuildChannelStore.tsx";
import { GUILD_VOCAL_CHANNELS_KEY } from "../../../stores/GuildChannelStore.tsx";
import closure_7 from "../../../stores/RelationshipStore.tsx";
import closure_8 from "../../../stores/UserGuildSettingsStore.tsx";
import closure_9 from "../../../stores/views/SortedVoiceStateStore.tsx";
import { ChannelTypes } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function VoiceUsers(arg0) {
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
    obj[3] = substr.map((id) => closure_1_11(closure_1_0(closure_1_2[11]).Avatar, { size: closure_1_0(closure_1_2[11]).AvatarSizes.XSMALL, user: id, guildId: closure_0, animate: false }, id.id));
    obj[1] = callback(AvatarPile.AvatarPile, obj);
    tmp = callback(View, obj);
  }
  return tmp;
}
function LiveTag() {
  const tmp = callback4();
  let obj = { style: tmp.tag, children: null };
  obj = { variant: "text-xxs/bold", style: tmp.tagText, lineClamp: 1, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.dI3q4h).toUpperCase();
  obj[1] = callback(Text.Text, obj);
  return callback(View, obj);
}
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
createCacheKey = { voiceContainer: { paddingRight: 8, height: 40, gap: 4, justifyContent: "center" }, streamPreviewShadow: null, streamPreview: null, streamPreviewDarkGradient: null, streamPreviewGradient: null, streamPreviewBorder: null };
createCacheKey = { borderRadius: ThemesDefault.radii.sm };
const merged = Object.assign(ThemesDefault.shadows.SHADOW_MEDIUM);
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { width: 72, height: 44, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
createCacheKey[3] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.8 };
createCacheKey[4] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, opacity: 0.2 };
let obj1 = { width: 72, height: 44, borderRadius: ThemesDefault.radii.sm, overflow: "hidden" };
createCacheKey[5] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.sm };
let closure_13 = createCacheKey.createStyles(createCacheKey);
let obj3 = { tag: null, tagText: null };
let obj2 = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.sm };
obj3[0] = { paddingHorizontal: 4, paddingVertical: 1, borderBottomRightRadius: ThemesDefault.radii.xs, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.unsafe_rawColors.RED_400, position: "absolute", top: 0, left: 0 };
createCacheKey = { textAlign: "center", color: ThemesDefault.unsafe_rawColors.WHITE, includeFontPadding: false };
obj3[1] = createCacheKey;
let closure_15 = createCacheKey.createStyles(obj3);
let obj4 = { paddingHorizontal: 4, paddingVertical: 1, borderBottomRightRadius: ThemesDefault.radii.xs, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: ThemesDefault.unsafe_rawColors.RED_400, position: "absolute", top: 0, left: 0 };
const result = require("set").fileFinishedImporting("modules/home_drawer/native/HomeDrawerGuildVoiceState.tsx");

export const GuildVoiceState = function GuildVoiceState(arg0) {
  ({ voiceUsers, streamingChannelId, streamingUser, guildId } = arg0);
  const tmp = callback3();
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
      obj1 = { style: null, children: null };
      obj1[0] = tmp.streamPreviewShadow;
      const obj2 = { style: null, children: null };
      obj2[0] = tmp.streamPreview;
      const obj3 = { style: null, source: null };
      obj3[0] = tmp.streamPreview;
      const obj4 = { uri: null };
      obj4[0] = previewUrl;
      obj3[1] = obj4;
      const items1 = [tmp7(tmp3(5445), obj3), , , , ];
      const obj5 = { colors: null, start: null, end: null, style: null, pointerEvents: "none" };
      obj5[0] = ["rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0)"];
      obj5[1] = { x: 0, y: 0 };
      obj5[2] = { x: 0, y: 1 };
      obj5[3] = tmp.streamPreviewDarkGradient;
      items1[1] = tmp7(tmp3(4892), obj5);
      const obj6 = { colors: null, start: null, end: null, style: null, pointerEvents: "none" };
      obj6[0] = ["rgba(255, 255, 255, 1)", "rgba(255, 255, 255, 0)"];
      obj6[1] = { x: 0, y: 0 };
      obj6[2] = { x: 1, y: 1 };
      obj6[3] = tmp.streamPreviewGradient;
      items1[2] = tmp7(tmp3(4892), obj6);
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
  let items = [stateFromStores1, closure_8];
  const items1 = [id, isHomeDrawerChannelInChannelList];
  const stateFromStoresArray = _require(isHomeDrawerChannelInChannelList[18]).useStateFromStoresArray(items, () => {
    const found = stateFromStores1.getChannels(id)[closure_1_6].filter((channel) => {
      channel = channel.channel;
      let tmp = channel.type === closure_1_10.GUILD_VOICE;
      if (tmp) {
        tmp = !closure_1_8.isGuildOrCategoryOrChannelMuted(closure_1, channel.id);
      }
      if (tmp) {
        tmp = callback(channel);
      }
      return tmp;
    });
    return found.map((channel) => channel.channel.id);
  }, items1);
  const obj2 = _require(isHomeDrawerChannelInChannelList[18]);
  const items2 = [closure_9];
  const items3 = [id];
  const stateFromStores = _require(isHomeDrawerChannelInChannelList[18]).useStateFromStores(items2, () => closure_1_9.getVoiceStates(id), items3);
  const obj3 = _require(isHomeDrawerChannelInChannelList[18]);
  const items4 = [closure_7];
  stateFromStores1 = _require(isHomeDrawerChannelInChannelList[18]).useStateFromStores(items4, () => blockedOrIgnoredIDs.getBlockedOrIgnoredIDs());
  const items5 = [stateFromStoresArray, stateFromStores, guild.afkChannelId, stateFromStores1];
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
      return closure_1_0(closure_1_2[20]).filterOutBlockedOrIgnoredUsers(mapped, closure_5);
    }
  }), items5);
  const memo1 = stateFromStoresArray.useMemo(() => {
    c0 = null;
    c1 = null;
    const keys = Object.keys(stateFromStores);
    const item = keys.forEach((arg0) => {
      if (arg0 !== _null.afkChannelId) {
        if (closure_1_3.includes(arg0)) {
          let items = closure_1_4[arg0];
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
            closure_1 = arg0;
          }
        }
      }
    });
    return { streamingUser: c0, streamingChannelId: c1 };
  }, items6);
  obj = { voiceUsers: memo, streamingUser: memo1.streamingUser, streamingChannelId: memo1.streamingChannelId };
  return obj;
};