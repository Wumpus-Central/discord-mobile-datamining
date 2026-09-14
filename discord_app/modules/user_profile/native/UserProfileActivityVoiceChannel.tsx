// === Module 13155: UserProfileActivityVoiceChannel ===

// Module 13155 (UserProfileActivityVoiceChannel)
import _mod17 from "module_17" /* 17 */;
import Constants from "Constants" /* 1085 */;
import native from "native" /* 1176 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4335 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 4843 */;
import PermissionStore from "PermissionStore" /* 4275 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4636 */;
import PlatformUtils from "PlatformUtils" /* 1363 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const Permissions = Constants.Permissions;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden" }, channelButton: { flex: 1, flexDirection: "row", alignItems: "center", gap: 2 }, channelName: null };
let num = -1;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
obj.channelName = { flex: 1, overflow: "hidden", marginTop: num };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannel.tsx");

export default function UserProfileActivityVoiceChannel(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const onAction = guild.onAction;
  const tmp = closure_8();
  const newestAnalyticsLocation = channel(onAction[6])().newestAnalyticsLocation;
  const context = guild(onAction[7]).useUserProfileAnalyticsContext().context;
  let obj = guild(onAction[7]);
  const isScreenReaderEnabled = guild(onAction[8]).useIsScreenReaderEnabled();
  const users = channel(onAction[9])(channel);
  const tmp6 = channel(onAction[10])(channel);
  const obj2 = guild(onAction[8]);
  const items = [context];
  const stateFromStores = guild(onAction[11]).useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.CONNECT, channel);
    }
    return isPrivateResult;
  });
  if (channel.isGuildStageVoice()) {
    let VoiceNormalIcon = tmp4(tmp3[12]).StageIcon;
  } else {
    VoiceNormalIcon = tmp4(tmp3[13]).VoiceNormalIcon;
  }
  const obj4 = { style: null, children: null };
  const items1 = [tmp.container, guild.style];
  obj4.style = items1;
  if (isScreenReaderEnabled) {
    const obj5 = { accessible: true, accessibilityLabel: null, children: null };
    const intl = tmp4(tmp3[14]).intl;
    const obj6 = { guildName: guild.name };
    obj5.accessibilityLabel = intl.formatToPlainString(tmp4(tmp3[14]).t.xm6W9D, obj6);
    const obj7 = { size: tmp4(tmp3[15]).GuildIconSizes.XXSMALL, guild };
    obj5.children = closure_6(tmp2(tmp3[15]), obj7);
    let tmp10Result = closure_6(tmp9, obj5);
    let tmp13 = closure_6;
    const tmp2Result = tmp2(tmp3[15]);
  } else {
    const obj8 = {
      accessibilityRole: "button",
      accessibilityLabel: guild.name,
      onPress() {
          onAction({ action: "PRESS_VOICE_CHANNEL_ICON" });
          ToastActionCreatorsDefault.open({
            key: "GUILD_NAME_TOAST",
            content: guild.name,
            icon() {
              const obj = { size: guild(onAction[15]).GuildIconSizes.XSMALL, guild };
              return closure_2_6(channel(onAction[15]), obj);
            }
          });
        },
      children: null
    };
    const obj9 = { size: tmp4(tmp3[15]).GuildIconSizes.XXSMALL, guild };
    obj8.children = closure_6(tmp2(tmp3[15]), obj9);
    tmp10Result = closure_6(tmp4(tmp3[16]).PressableOpacity, obj8);
    tmp13 = closure_6;
    const tmp2Result2 = tmp2(tmp3[15]);
  }
  const items2 = [tmp10Result, tmp13(guild(onAction[18]).ChevronSmallRightIcon, { size: "xxs", color: "text-default" }), , ];
  if (stateFromStores) {
    const obj10 = { style: tmp.channelButton, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, onPress: null, children: null };
    const obj11 = { channel };
    obj10.accessibilityLabel = tmp2(tmp3[20])(obj11);
    const intl2 = tmp4(tmp3[14]).intl;
    obj10.accessibilityHint = intl2.string(tmp4(tmp3[14]).t["9C444m"]);
    obj10.onPress = function onPress() {
      onAction({ action: "OPEN_VOICE_CHANNEL" });
      PrivateChannelCallUtils.openGuildVoiceModal(channel, newestAnalyticsLocation);
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
    };
    const items3 = [tmp13(VoiceNormalIcon, { size: "xxs", color: "text-default" }), ];
    const obj12 = { style: tmp.channelName, variant: "text-xs/normal", lineClamp: 1, children: tmp6 };
    items3[1] = tmp13(tmp4(tmp3[19]).Text, obj12);
    obj10.children = items3;
    let tmp8Result = closure_7(tmp4(tmp3[16]).PressableOpacity, obj10);
  } else {
    const obj13 = { style: tmp.channelButton, children: null };
    const items4 = [tmp13(VoiceNormalIcon, { size: "xxs", color: "text-default" }), ];
    const obj14 = { style: tmp.channelName, variant: "text-xs/normal", lineClamp: 1, children: tmp6 };
    items4[1] = tmp13(tmp4(tmp3[19]).Text, obj14);
    obj13.children = items4;
    tmp8Result = closure_7(tmp9, obj13);
  }
  items2[2] = tmp8Result;
  const obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl3 = tmp4(tmp3[14]).intl;
  obj15.accessibilityLabel = intl3.formatToPlainString(guild(onAction[14]).t.e95u3C, { count: users.length });
  obj15.onPress = function onPress() {
    onAction({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13157, dependencyMap.paths), "UserProfileActivityVoiceChannelUsers", {
      users,
      channel,
      onPressUser(userId) {
        const obj = {};
        const merged = Object.assign(context);
        obj.userId = userId;
        return channel(onAction[25])(obj);
      }
    }, "stack");
  };
  const obj17 = { size: guild(onAction[27]).AvatarSizes.SIZE_16, totalCount: users.length, names: users.map((username) => username.username), children: null };
  let substr = users;
  if (users.length > 3) {
    substr = users.slice(0, 3);
  }
  obj17.children = substr.map((user) => timestampProducer(native.Avatar, { size: native.AvatarSizes.SIZE_16, channel, guildId: guild.id, user }, user.id));
  obj15.children = tmp13(guild(onAction[26]).AvatarPile, obj17);
  items2[3] = tmp13(guild(onAction[16]).PressableOpacity, obj15);
  obj4.children = items2;
  return closure_7(newestAnalyticsLocation, obj4);
};