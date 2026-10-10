// discord_app/modules/user_profile/native/UserProfileActivityVoiceChannel.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import Constants from "../../../../discord_common/js/shared/Constants.tsx";
import native from "../../../design/void/native.tsx";
import asyncRequireImpl from "../../../../_runtime/02000_asyncRequireImpl.js";
import GuildRecord from "../../../records/GuildRecord.tsx";
import ToastActionCreatorsDefault from "../../toast/native/ToastActionCreators.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import PrivateChannelCallUtils from "../../../utils/native/PrivateChannelCallUtils.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const getGuildIconURL = GuildRecord.getGuildIconURL;
const Permissions = Constants.Permissions;
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let obj = {
  container: { flexDirection: "row", alignItems: "center", gap: 4, overflow: "hidden" },
  channelButton: { flex: 1, flexDirection: "row", alignItems: "center", gap: 2 },
  channelName: null,
};
let num = -1;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
obj.channelName = { flex: 1, overflow: "hidden", marginTop: num };
let closure_9 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileActivityVoiceChannel.tsx");

export default function UserProfileActivityVoiceChannel(guild) {
  guild = guild.guild;
  const channel = guild.channel;
  const onAction = guild.onAction;
  const tmp = closure_9();
  const newestAnalyticsLocation = channel(onAction[7])().newestAnalyticsLocation;
  const context = guild(onAction[8]).useUserProfileAnalyticsContext().context;
  let obj = guild(onAction[8]);
  const isScreenReaderEnabled = guild(onAction[9]).useIsScreenReaderEnabled();
  const users = channel(onAction[10])(channel);
  const tmp6 = channel(onAction[11])(channel);
  let obj2 = guild(onAction[9]);
  const items = [users];
  const stateFromStores = guild(onAction[12]).useStateFromStores(items, () => {
    let isPrivateResult = channel.isPrivate();
    if (!isPrivateResult) {
      isPrivateResult = PermissionStore.can(Permissions.CONNECT, channel);
    }
    return isPrivateResult;
  });
  if (channel.isGuildStageVoice()) {
    let VoiceNormalIcon = tmp4(tmp3[13]).StageIcon;
  } else {
    VoiceNormalIcon = tmp4(tmp3[14]).VoiceNormalIcon;
  }
  const obj4 = { style: null, children: null };
  const items1 = [tmp.container, guild.style];
  obj4.style = items1;
  if (isScreenReaderEnabled) {
    const obj5 = { accessible: true, accessibilityLabel: null, children: null };
    const intl = tmp4(tmp3[15]).intl;
    const obj6 = { guildName: guild.name };
    obj5.accessibilityLabel = intl.formatToPlainString(tmp4(tmp3[15]).t.xm6W9D, obj6);
    const obj7 = { size: tmp4(tmp3[16]).GuildIconSizes.XXSMALL, guild };
    obj5.children = closure_7(tmp2(tmp3[16]), obj7);
    let tmp10Result = closure_7(tmp9, obj5);
    let tmp13 = closure_7;
    const tmp2Result = tmp2(tmp3[16]);
  } else {
    const obj8 = {
      accessibilityRole: "button",
      accessibilityLabel: guild.name,
      onPress: function handlePress() {
        onAction({ action: "PRESS_VOICE_CHANNEL_ICON" });
        const obj2 = { text: guild.name, icon: null };
        const obj = ToastActionCreatorsDefault;
        obj2.icon = { type: "guild", src: getGuildIconURL(guild, 48), name: guild.name };
        obj.open("GUILD_NAME_TOAST", obj2);
      },
      children: null,
    };
    const obj9 = { size: tmp4(tmp3[16]).GuildIconSizes.XXSMALL, guild };
    obj8.children = closure_7(tmp2(tmp3[16]), obj9);
    tmp10Result = closure_7(tmp4(tmp3[17]).PressableOpacity, obj8);
    tmp13 = closure_7;
    const tmp2Result2 = tmp2(tmp3[16]);
  }
  const items2 = [
    tmp10Result,
    tmp13(guild(onAction[19]).ChevronSmallRightIcon, { size: "xxs", color: "text-default" }),
    ,
  ];
  if (stateFromStores) {
    const obj10 = {
      style: tmp.channelButton,
      accessibilityRole: "button",
      accessibilityLabel: null,
      accessibilityHint: null,
      onPress: null,
      children: null,
    };
    const obj11 = { channel };
    obj10.accessibilityLabel = tmp2(tmp3[21])(obj11);
    const intl2 = tmp4(tmp3[15]).intl;
    obj10.accessibilityHint = intl2.string(tmp4(tmp3[15]).t["9C444m"]);
    obj10.onPress = function handlePress_0() {
      onAction({ action: "OPEN_VOICE_CHANNEL" });
      PrivateChannelCallUtils.openGuildVoiceModal(channel, newestAnalyticsLocation);
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
    };
    const items3 = [tmp13(VoiceNormalIcon, { size: "xxs", color: "text-default" })];
    const obj12 = { style: tmp.channelName, variant: "text-xs/normal", lineClamp: 1, children: tmp6 };
    items3[1] = tmp13(tmp4(tmp3[20]).Text, obj12);
    obj10.children = items3;
    let tmp8Result = closure_8(tmp4(tmp3[17]).PressableOpacity, obj10);
  } else {
    const obj13 = { style: tmp.channelButton, children: null };
    const items4 = [tmp13(VoiceNormalIcon, { size: "xxs", color: "text-default" })];
    const obj14 = { style: tmp.channelName, variant: "text-xs/normal", lineClamp: 1, children: tmp6 };
    items4[1] = tmp13(tmp4(tmp3[20]).Text, obj14);
    obj13.children = items4;
    tmp8Result = closure_8(tmp9, obj13);
  }
  items2[2] = tmp8Result;
  const obj15 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl3 = tmp4(tmp3[15]).intl;
  obj15.accessibilityLabel = intl3.formatToPlainString(guild(onAction[15]).t.e95u3C, { count: users.length });
  obj15.onPress = function handlePressAvatars() {
    onAction({ action: "PRESS_VOICE_CHANNEL_AVATARS" });
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(13146, dependencyMap.paths),
      "UserProfileActivityVoiceChannelUsers",
      {
        users,
        channel,
        onPressUser(userId) {
          const obj = {};
          const merged = Object.assign(context);
          obj.userId = userId;
          return channel(onAction[26])(obj);
        },
      },
      "stack",
    );
  };
  const obj17 = {
    size: guild(onAction[28]).AvatarSizes.SIZE_16,
    totalCount: users.length,
    names: users.map((username) => username.username),
    children: null,
  };
  let substr = users;
  if (users.length > 3) {
    substr = users.slice(0, 3);
  }
  obj17.children = substr.map((user) =>
    React5(native.Avatar, { size: native.AvatarSizes.SIZE_16, channel, guildId: guild.id, user }, user.id),
  );
  obj15.children = tmp13(guild(onAction[27]).AvatarPile, obj17);
  items2[3] = tmp13(guild(onAction[17]).PressableOpacity, obj15);
  obj4.children = items2;
  return closure_8(newestAnalyticsLocation, obj4);
}
