// === Module 12847: UserProfileActivityVoiceChannel ===

// Module 12847 (UserProfileActivityVoiceChannel)
import react_native from "react-native" /* 17 */;
import Constants from "Constants" /* 1096 */;
import native from "native" /* 1188 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import GuildRecord from "GuildRecord" /* 2070 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 4568 */;
import DesignSystemsNotificationComponentsExperiment from "DesignSystemsNotificationComponentsExperiment" /* 4574 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import PrivateChannelCallUtils from "PrivateChannelCallUtils" /* 5097 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let num;
const View = react_native.View;
const getGuildIconURL = GuildRecord.getGuildIconURL;
const Permissions = Constants.Permissions;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden" }, channelButton: { flex: 1, flexDirection: "row", alignItems: "center", gap: 2 }, channelName: { flex: 1, overflow: "hidden", marginTop: num } };
createStyles = createStyles.createStyles;
num = -1;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
let closure_9 = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannel.tsx");

export default function UserProfileActivityVoiceChannel(guild) {
  let AvatarPile;
  let VoiceNormalIcon;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj11;
  let obj16;
  let obj17;
  let obj6;
  let obj7;
  let obj9;
  let substr;
  let tmp10Result;
  let tmp13;
  let tmp2Result;
  let tmp2Result2;
  let tmp8Result;
  guild = guild.guild;
  const channel = guild.channel;
  const onAction = guild.onAction;
  const style = guild.style;
  let tmp = closure_9();
  const newestAnalyticsLocation = channel(onAction[7])().newestAnalyticsLocation;
  let obj = guild(onAction[8]);
  const context = obj.useUserProfileAnalyticsContext().context;
  let obj2 = guild(onAction[9]);
  const isScreenReaderEnabled = obj2.useIsScreenReaderEnabled();
  const users = channel(onAction[10])(channel);
  const tmp6 = channel(onAction[11])(channel);
  let obj3 = guild(onAction[12]);
  const items = [users];
  const stateFromStores = obj3.useStateFromStores(items, () => {
    const isPrivateResult = channel.isPrivate() || PermissionStore.can(Permissions.CONNECT, channel);
    return isPrivateResult;
  });
  if (channel.isGuildStageVoice()) {
    VoiceNormalIcon = tmp4(tmp3[13]).StageIcon;
  } else {
    VoiceNormalIcon = tmp4(tmp3[14]).VoiceNormalIcon;
  }
  let obj4 = { style: items1, children: items2 };
  items1 = [tmp.container, style];
  if (isScreenReaderEnabled) {
    let obj5 = { accessible: true, accessibilityLabel: intl.formatToPlainString(guild(onAction[15]).t.xm6W9D, obj6), children: closure_7(tmp2Result, obj7) };
    intl = tmp4(tmp3[15]).intl;
    obj6 = { guildName: guild.name };
    obj7 = { size: guild(onAction[16]).GuildIconSizes.XXSMALL, guild };
    tmp2Result = channel(onAction[16]);
    tmp10Result = closure_7(tmp9, obj5);
    tmp13 = closure_7;
  } else {
    const obj8 = {
      accessibilityRole: "button",
      accessibilityLabel: guild.name,
      onPress() {
          let obj4;
          let tmp = onAction({ action: "PRESS_VOICE_CHANNEL_ICON" });
          let obj = DesignSystemsNotificationComponentsExperiment;
          const designSystemsNotificationComponents = obj.getDesignSystemsNotificationComponents("UserProfileActivityVoiceChannel");
          const obj2 = ToastActionCreatorsDefault;
          if (designSystemsNotificationComponents) {
            const obj3 = { text: guild.name, icon: obj4 };
            const openMana = obj2.openMana;
            obj4 = { type: "guild", src: getGuildIconURL(guild, 48), name: guild.name };
            openMana("GUILD_NAME_TOAST", obj3);
          } else {
            const obj5 = {
              key: "GUILD_NAME_TOAST",
              content: guild.name,
              icon() {
                  const obj = { size: guild(onAction[16]).GuildIconSizes.XSMALL, guild };
                  const tmp = channel(onAction[16]);
                  return closure_2_7(tmp, obj);
                }
            };
            obj2.open(obj5);
          }
        },
      children: closure_7(tmp2Result2, obj9)
    };
    const PressableOpacity = tmp4(tmp3[17]).PressableOpacity;
    obj9 = { size: guild(onAction[16]).GuildIconSizes.XXSMALL, guild };
    tmp2Result2 = channel(onAction[16]);
    tmp10Result = closure_7(PressableOpacity, obj8);
    tmp13 = closure_7;
  }
  items2 = [tmp10Result, tmp13(guild(onAction[20]).ChevronSmallRightIcon, { size: "xxs", color: "text-default" }), , ];
  if (stateFromStores) {
    const obj10 = {
      style: tmp.channelButton,
      accessibilityRole: "button",
      accessibilityLabel: channel(onAction[22])(obj11),
      accessibilityHint: intl2.string(guild(onAction[15]).t["9C444m"]),
      onPress() {
          onAction({ action: "OPEN_VOICE_CHANNEL" });
          const obj = PrivateChannelCallUtils;
          obj.openGuildVoiceModal(channel, newestAnalyticsLocation);
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideAllActionSheets();
        },
      children: items3
    };
    const PressableOpacity2 = tmp4(tmp3[17]).PressableOpacity;
    obj11 = { channel };
    intl2 = tmp4(tmp3[15]).intl;
    items3 = [tmp13(VoiceNormalIcon, { size: "xxs", color: "text-default" }), ];
    const obj12 = { style: tmp.channelName, variant: "text-xs/normal", lineClamp: 1, children: tmp6 };
    items3[1] = tmp13(guild(onAction[21]).Text, obj12);
    tmp8Result = closure_8(PressableOpacity2, obj10);
  } else {
    const obj13 = { style: tmp.channelButton, children: items4 };
    items4 = [tmp13(VoiceNormalIcon, { size: "xxs", color: "text-default" }), ];
    const obj14 = { style: tmp.channelName, variant: "text-xs/normal", lineClamp: 1, children: tmp6 };
    items4[1] = tmp13(guild(onAction[21]).Text, obj14);
    tmp8Result = closure_8(tmp9, obj13);
  }
  items2[2] = tmp8Result;
  const obj15 = {
    accessibilityRole: "button",
    accessibilityLabel: intl3.formatToPlainString(guild(onAction[15]).t.e95u3C, obj16),
    onPress() {
      let tmp = onAction({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
      let obj = ActionSheetActionCreatorsDefault;
      const obj2 = {
        users,
        channel,
        onPressUser(userId) {
          const obj = { userId };
          const tmp = channel(onAction[27]);
          const merged = Object.assign(context);
          return tmp(obj);
        }
      };
      obj.openLazy(asyncRequire(12849, dependencyMap.paths), "UserProfileActivityVoiceChannelUsers", obj2, "stack");
    },
    children: tmp13(AvatarPile, obj17)
  };
  const PressableOpacity3 = tmp4(tmp3[17]).PressableOpacity;
  intl3 = tmp4(tmp3[15]).intl;
  obj16 = { count: users.length };
  obj17 = {
    size: guild(onAction[29]).AvatarSizes.SIZE_16,
    totalCount: users.length,
    names: users.map((username) => username.username),
    children: substr.map((user) => {
      const obj = { size: native.AvatarSizes.SIZE_16, channel, guildId: guild.id, user };
      const Avatar = native.Avatar;
      return metroImportDefault(Avatar, obj, user.id);
    })
  };
  AvatarPile = tmp4(tmp3[28]).AvatarPile;
  substr = users;
  if (users.length > 3) {
    substr = users.slice(0, 3);
  }
  items2[3] = tmp13(PressableOpacity3, obj15);
  return closure_8(newestAnalyticsLocation, obj4);
};