// discord_app/modules/message_request/native/RestrictedMessagePreviewHeader.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import ToastUtils from "../../toast/native/ToastUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ClipboardUtils from "../../../utils/ClipboardUtils.native.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
let closure_5 = fn(12573).MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  container: { alignItems: "flex-start", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 },
  avatar: null,
};
let obj3 = { alignItems: "flex-start", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
obj2.avatar = { marginBottom: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewHeader.tsx");

export default function RestrictedMessagePreviewHeader(channel) {
  channel = channel.channel;
  const user = channel.user;
  let analyticsLocations;
  const tmp = closure_8();
  analyticsLocations = user(analyticsLocations[6])().analyticsLocations;
  const name = user(analyticsLocations[7]).getName(user);
  let obj = user(analyticsLocations[7]);
  const userTag = user(analyticsLocations[7]).getUserTag(user, { decoration: "never", identifiable: "always" });
  const items = [user.id, channel.id, analyticsLocations];
  const callback = userTag.useCallback(() => {
    showUserProfileActionSheetDefault({
      userId: user.id,
      channelId: channel.id,
      sourceAnalyticsLocations: analyticsLocations,
    });
  }, items);
  const items1 = [userTag];
  const items2 = [user];
  const callback1 = userTag.useCallback(() => {
    ClipboardUtils.copy(userTag);
    const result = ToastUtils.presentUsernameCopied();
  }, items1);
  let obj3 = { style: tmp.container, children: null };
  const callback2 = userTag.useCallback(() => {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(12731, dependencyMap.paths), "MutualGuildsActionSheet", {
      user,
      onPressMutualGuild(arg0) {
        const result = channel(8308).trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
        const obj = channel(8308);
        channel(7445).transitionToGuild(arg0);
        const obj2 = channel(7445);
        user(4603).hideActionSheet();
        const obj3 = user(4603);
        user(4839).popWithKey(closure_1_5);
      },
    });
  }, items2);
  const obj4 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = channel(analyticsLocations[18]).intl;
  obj4.accessibilityLabel = intl.string(channel(analyticsLocations[18]).t.iXAna6);
  obj4.onPress = callback;
  let obj2 = user(analyticsLocations[7]);
  obj4.children = closure_6(channel(analyticsLocations[19]).Avatar, {
    style: tmp.avatar,
    user,
    guildId: channel.guild_id,
    size: channel(analyticsLocations[19]).AvatarSizes.XXLARGE,
    avatarDecoration: user.avatarDecoration,
  });
  const items3 = [closure_6(channel(analyticsLocations[17]).PressableOpacity, obj4), , , , ,];
  const obj6 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = channel(analyticsLocations[18]).intl;
  obj6.accessibilityLabel = intl2.string(channel(analyticsLocations[18]).t.iXAna6);
  obj6.onPress = callback;
  obj6.children = closure_6(channel(analyticsLocations[20]).Text, {
    variant: "heading-xxl/extrabold",
    color: "mobile-text-heading-primary",
    children: name,
  });
  items3[1] = closure_6(channel(analyticsLocations[17]).PressableOpacity, obj6);
  const isProvisional = user.isProvisional;
  let tmp11Result = !isProvisional;
  if (!isProvisional) {
    const obj7 = { accessibilityRole: "button", accessibilityHint: null, onPress: null, children: null };
    const intl3 = tmp12(tmp3[18]).intl;
    obj7.accessibilityHint = intl3.string(tmp12(tmp3[18]).t.y5MwJy);
    obj7.onPress = callback1;
    const obj8 = { variant: "heading-lg/medium", color: "text-default", children: userTag };
    obj7.children = closure_6(tmp12(tmp3[20]).Text, obj8);
    tmp11Result = closure_6(tmp12(tmp3[17]).PressableOpacity, obj7);
  }
  items3[2] = tmp11Result;
  const obj9 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl4 = tmp12(tmp3[18]).intl;
  obj9.children = intl4.formatToPlainString(channel(analyticsLocations[18]).t["Qvg+6+"], { username: name });
  items3[3] = closure_6(channel(analyticsLocations[20]).Text, obj9);
  const obj10 = { userId: user.id, onPress: callback2, iconSize: null, textVariant: "text-md/medium" };
  const obj5 = {
    style: tmp.avatar,
    user,
    guildId: channel.guild_id,
    size: channel(analyticsLocations[19]).AvatarSizes.XXLARGE,
    avatarDecoration: user.avatarDecoration,
  };
  obj10.iconSize = channel(analyticsLocations[22]).GuildIconSizes.XSMALL;
  items3[4] = closure_6(user(analyticsLocations[21]), obj10);
  items3[5] = closure_6(user(analyticsLocations[23]), { channel, user });
  obj3.children = items3;
  return closure_7(View, obj3);
}
