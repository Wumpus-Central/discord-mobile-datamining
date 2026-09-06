// === Module 13024: UserProfileActivityVoiceChannel ===

// Module 13024 (UserProfileActivityVoiceChannel)
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import sum from "sum" /* 1085 */;
import closure_4 from "getUncachedChannelPermissions" /* 4199 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;
import set from "set" /* 1115 */;

const View = get_ActivityIndicator.View;
const Permissions = sum.Permissions;
({ jsx: closure_6, jsxs: error } = jsxProd);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden" }, channelButton: { flex: 1, flexDirection: "row", alignItems: "center", gap: 2 }, channelName: null };
let num = -1;
if (set.isAndroid()) {
  num = -2;
}
obj[2] = { flex: 1, overflow: "hidden", marginTop: num };
let closure_8 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannel.tsx");

export default function UserProfileActivityVoiceChannel(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const onAction = guild.onAction;
  let newestAnalyticsLocation;
  let context;
  let arr;
  const tmp = callback();
  newestAnalyticsLocation = channel(onAction[6])().newestAnalyticsLocation;
  let obj = guild(onAction[7]);
  context = obj.useUserProfileAnalyticsContext().context;
  obj1 = guild(onAction[8]);
  const isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  arr = channel(onAction[9])(channel);
  const tmp6 = channel(onAction[10])(channel);
  let obj2 = guild(onAction[11]);
  const items = [context];
  const stateFromStores = obj2.useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = context.can(arr.CONNECT, channel);
    }
    return isPrivateResult;
  });
  if (channel.isGuildStageVoice()) {
    let VoiceNormalIcon = tmp4(tmp3[12]).StageIcon;
  } else {
    VoiceNormalIcon = tmp4(tmp3[13]).VoiceNormalIcon;
  }
  obj = { style: items1, children: null };
  items1 = [tmp.container, guild.style];
  if (isScreenReaderEnabled) {
    obj = { accessible: true, accessibilityLabel: null, children: null };
    const intl = tmp4(tmp3[14]).intl;
    obj1 = { guildName: null };
    obj1[0] = guild.name;
    obj[1] = intl.formatToPlainString(tmp4(tmp3[14]).t.xm6W9D, obj1);
    obj2 = { size: null, guild: null };
    let tmp2Result = tmp2(tmp3[15]);
    obj2[0] = tmp4(tmp3[15]).GuildIconSizes.XXSMALL;
    obj2[1] = guild;
    obj[2] = tmp10(tmp2Result, obj2);
    let tmp10Result = tmp10(tmp9, obj);
    let tmp13 = tmp10;
  } else {
    const obj3 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
    obj3[1] = guild.name;
    obj3[2] = function onPress() {
      onAction({ action: "PRESS_VOICE_CHANNEL_ICON" });
      let obj = channel(onAction[17]);
      obj = {
        key: "GUILD_NAME_TOAST",
        content: guild.name,
        icon() {
          const obj = { size: closure_1_0(closure_1_2[15]).GuildIconSizes.XSMALL, guild: closure_0 };
          return closure_1_6(closure_1_1(closure_1_2[15]), obj);
        }
      };
      obj.open(obj);
    };
    const obj4 = { size: null, guild: null };
    tmp2Result = tmp2(tmp3[15]);
    obj4[0] = tmp4(tmp3[15]).GuildIconSizes.XXSMALL;
    obj4[1] = guild;
    obj3[3] = tmp10(tmp2Result, obj4);
    tmp10Result = tmp10(tmp4(tmp3[16]).PressableOpacity, obj3);
    tmp13 = tmp10;
  }
  const items2 = [tmp10Result, tmp13(guild(onAction[18]).ChevronSmallRightIcon, { size: "xxs", color: "text-default" }), , ];
  if (stateFromStores) {
    const obj5 = { style: null, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
    obj5[0] = tmp.channelButton;
    const obj6 = { channel: null };
    obj6[0] = channel;
    obj5[2] = tmp2(tmp3[20])(obj6);
    const intl2 = tmp4(tmp3[14]).intl;
    obj5[3] = intl2.string(tmp4(tmp3[14]).t["9C444m"]);
    obj5[4] = function onPress() {
      onAction({ action: "OPEN_VOICE_CHANNEL" });
      guild(onAction[21]).openGuildVoiceModal(channel, newestAnalyticsLocation);
      const obj = guild(onAction[21]);
      channel(onAction[22]).hideAllActionSheets();
    };
    const items3 = [tmp13(VoiceNormalIcon, { size: "xxs", color: "text-default" }), ];
    const obj7 = { style: null, variant: "text-xs/normal", lineClamp: 1, children: null };
    obj7[0] = tmp.channelName;
    obj7[3] = tmp6;
    items3[1] = tmp13(tmp4(tmp3[19]).Text, obj7);
    obj5[5] = items3;
    let tmp8Result = tmp8(tmp4(tmp3[16]).PressableOpacity, obj5);
  } else {
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.channelButton;
    const items4 = [tmp13(VoiceNormalIcon, { size: "xxs", color: "text-default" }), ];
    const obj9 = { style: null, variant: "text-xs/normal", lineClamp: 1, children: null };
    obj9[0] = tmp.channelName;
    obj9[3] = tmp6;
    items4[1] = tmp13(tmp4(tmp3[19]).Text, obj9);
    obj8[1] = items4;
    tmp8Result = tmp8(tmp9, obj8);
  }
  items2[2] = tmp8Result;
  const obj10 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl3 = tmp4(tmp3[14]).intl;
  obj10[1] = intl3.formatToPlainString(guild(onAction[14]).t.e95u3C, { count: arr.length });
  obj10[2] = function onPress() {
    onAction({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
    let obj = channel(onAction[22]);
    obj = {
      users: arr,
      channel,
      onPressUser(userId) {
        const obj = {};
        const merged = Object.assign(closure_4);
        obj.userId = userId;
        return closure_1_1(closure_1_2[25])(obj);
      }
    };
    obj.openLazy(guild(onAction[24])(onAction[23], onAction.paths), "UserProfileActivityVoiceChannelUsers", obj, "stack");
  };
  const obj12 = { size: guild(onAction[27]).AvatarSizes.SIZE_16, totalCount: arr.length, names: arr.map((username) => username.username), children: null };
  let substr = arr;
  if (arr.length > 3) {
    substr = arr.slice(0, 3);
  }
  obj12[3] = substr.map((id) => closure_1_6(guild(onAction[27]).Avatar, { size: guild(onAction[27]).AvatarSizes.SIZE_16, channel, guildId: guild.id, user: id }, id.id));
  obj10[3] = tmp13(guild(onAction[26]).AvatarPile, obj12);
  items2[3] = tmp13(guild(onAction[16]).PressableOpacity, obj10);
  obj[1] = items2;
  return closure_7(newestAnalyticsLocation, obj);
};