// discord_app/modules/message_request/native/RestrictedMessagePreviewHeader.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import MessageRequestConstants from "../MessageRequestConstants.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
let closure_5 = MessageRequestConstants.MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, avatar: obj3 };
obj2 = { alignItems: "flex-start", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
createStyles = createStyles.createStyles;
obj3 = { marginBottom: nativeDefault.space.PX_4 };
let closure_8 = createStyles(obj);
let result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewHeader.tsx");

export default function RestrictedMessagePreviewHeader(channel) {
  let Avatar;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let obj5;
  let obj8;
  channel = channel.channel;
  const user = channel.user;
  let analyticsLocations;
  const tmp = closure_8();
  analyticsLocations = user(analyticsLocations[6])().analyticsLocations;
  let obj = user(analyticsLocations[7]);
  const name = obj.getName(user);
  let obj2 = user(analyticsLocations[7]);
  const userTag = obj2.getUserTag(user, { decoration: "never", identifiable: "always" });
  const items = [user.id, channel.id, analyticsLocations];
  const callback = userTag.useCallback(() => {
    const obj = { userId: user.id, channelId: channel.id, sourceAnalyticsLocations: analyticsLocations };
    showUserProfileActionSheetDefault(obj);
  }, items);
  const items1 = [userTag];
  const items2 = [user];
  const callback1 = userTag.useCallback(() => {
    const obj = ClipboardUtils;
    obj.copy(userTag);
    const obj2 = ToastUtils;
    const result = obj2.presentUsernameCopied();
  }, items1);
  let obj3 = { style: tmp.container, children: items3 };
  const callback2 = userTag.useCallback(() => {
    let obj = ActionSheetActionCreatorsDefault;
    let obj2 = {
      user,
      onPressMutualGuild(arg0) {
        const obj = channel(analyticsLocations[14]);
        const result = obj.trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
        const obj2 = channel(analyticsLocations[15]);
        obj2.transitionToGuild(arg0);
        const obj3 = user(analyticsLocations[11]);
        obj3.hideActionSheet();
        const obj4 = user(analyticsLocations[16]);
        obj4.popWithKey(closure_1_5);
      },
    };
    obj.openLazy(asyncRequire(12284, dependencyMap.paths), "MutualGuildsActionSheet", obj2);
  }, items2);
  let obj4 = {
    accessibilityRole: "button",
    accessibilityLabel: intl.string(channel(analyticsLocations[18]).t.iXAna6),
    onPress: callback,
    children: closure_6(Avatar, obj5),
  };
  const PressableOpacity = channel(analyticsLocations[17]).PressableOpacity;
  intl = channel(analyticsLocations[18]).intl;
  obj5 = {
    style: tmp.avatar,
    user,
    guildId: channel.guild_id,
    size: channel(analyticsLocations[19]).AvatarSizes.XXLARGE,
    avatarDecoration: user.avatarDecoration,
  };
  Avatar = channel(analyticsLocations[19]).Avatar;
  items3 = [closure_6(PressableOpacity, obj4), , , , ,];
  const obj6 = {
    accessibilityRole: "button",
    accessibilityLabel: intl2.string(channel(analyticsLocations[18]).t.iXAna6),
    onPress: callback,
    children: closure_6(channel(analyticsLocations[20]).Text, {
      variant: "heading-xxl/extrabold",
      color: "mobile-text-heading-primary",
      children: name,
    }),
  };
  const PressableOpacity2 = channel(analyticsLocations[17]).PressableOpacity;
  intl2 = channel(analyticsLocations[18]).intl;
  items3[1] = closure_6(PressableOpacity2, obj6);
  let tmp11Result = !user.isProvisional;
  if (tmp11Result) {
    const obj7 = {
      accessibilityRole: "button",
      accessibilityHint: intl3.string(channel(analyticsLocations[18]).t.y5MwJy),
      onPress: callback1,
      children: closure_6(channel(analyticsLocations[20]).Text, obj8),
    };
    const PressableOpacity3 = tmp12(tmp3[17]).PressableOpacity;
    intl3 = tmp12(tmp3[18]).intl;
    obj8 = { variant: "heading-lg/medium", color: "text-default", children: userTag };
    tmp11Result = closure_6(PressableOpacity3, obj7);
  }
  items3[2] = tmp11Result;
  const obj9 = {
    variant: "text-md/medium",
    color: "text-default",
    children: intl4.formatToPlainString(channel(analyticsLocations[18]).t["Qvg+6+"], { username: name }),
  };
  const Text = tmp12(tmp3[20]).Text;
  intl4 = tmp12(tmp3[18]).intl;
  items3[3] = closure_6(Text, obj9);
  const obj10 = {
    userId: user.id,
    onPress: callback2,
    iconSize: channel(analyticsLocations[22]).GuildIconSizes.XSMALL,
    textVariant: "text-md/medium",
  };
  const tmp2Result = user(analyticsLocations[21]);
  items3[4] = closure_6(tmp2Result, obj10);
  items3[5] = closure_6(user(analyticsLocations[23]), { channel, user });
  return closure_7(View, obj3);
}
