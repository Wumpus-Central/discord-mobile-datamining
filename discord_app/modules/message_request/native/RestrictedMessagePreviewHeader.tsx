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
let closure_5 = fn(12443).MOBILE_MESSAGE_REQUESTS_MODAL_KEY;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, avatar: null };
createStyles = { alignItems: "flex-start", gap: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_12 };
createStyles.container = createStyles;
createStyles.avatar = { marginBottom: nativeDefault.space.PX_4 };
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/message_request/native/RestrictedMessagePreviewHeader.tsx");

export default function RestrictedMessagePreviewHeader(channel) {
  channel = channel.channel;
  const user = channel.user;
  let analyticsLocations;
  const tmp = closure_8();
  analyticsLocations = user(analyticsLocations[6])().analyticsLocations;
  let obj = user(analyticsLocations[7]);
  const name = obj.getName(user);
  let obj1 = user(analyticsLocations[7]);
  const userTag = obj1.getUserTag(user, { decoration: "never", identifiable: "always" });
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
  obj = { style: tmp.container, children: null };
  const callback2 = userTag.useCallback(() => {
    let obj = {
      user,
      onPressMutualGuild(arg0) {
        const result = channel(8191).trackUserProfileAction({ action: "PRESS_MUTUAL_GUILD" });
        const obj = channel(8191);
        channel(7342).transitionToGuild(arg0);
        const obj2 = channel(7342);
        user(4527).hideActionSheet();
        const obj3 = user(4527);
        user(4763).popWithKey(closure_1_5);
      },
    };
    obj.openLazy(asyncRequireImpl(12601, dependencyMap.paths), "MutualGuildsActionSheet", obj);
  }, items2);
  obj = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl = channel(analyticsLocations[18]).intl;
  obj.accessibilityLabel = intl.string(channel(analyticsLocations[18]).t.iXAna6);
  obj.onPress = callback;
  obj1 = {
    style: tmp.avatar,
    user,
    guildId: channel.guild_id,
    size: channel(analyticsLocations[19]).AvatarSizes.XXLARGE,
    avatarDecoration: user.avatarDecoration,
  };
  obj.children = closure_6(channel(analyticsLocations[19]).Avatar, obj1);
  const items3 = [closure_6(channel(analyticsLocations[17]).PressableOpacity, obj), , , , ,];
  let obj2 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  const intl2 = channel(analyticsLocations[18]).intl;
  obj2.accessibilityLabel = intl2.string(channel(analyticsLocations[18]).t.iXAna6);
  obj2.onPress = callback;
  obj2.children = closure_6(channel(analyticsLocations[20]).Text, {
    variant: "heading-xxl/extrabold",
    color: "mobile-text-heading-primary",
    children: name,
  });
  items3[1] = closure_6(channel(analyticsLocations[17]).PressableOpacity, obj2);
  const isProvisional = user.isProvisional;
  let tmp11Result = !isProvisional;
  if (!isProvisional) {
    let obj3 = { accessibilityRole: "button", accessibilityHint: null, onPress: null, children: null };
    const intl3 = tmp12(tmp3[18]).intl;
    obj3.accessibilityHint = intl3.string(tmp12(tmp3[18]).t.y5MwJy);
    obj3.onPress = callback1;
    const obj4 = { variant: "heading-lg/medium", color: "text-default", children: userTag };
    obj3.children = tmp11(tmp12(tmp3[20]).Text, obj4);
    tmp11Result = tmp11(tmp12(tmp3[17]).PressableOpacity, obj3);
  }
  items3[2] = tmp11Result;
  const obj5 = { variant: "text-md/medium", color: "text-default", children: null };
  const intl4 = tmp12(tmp3[18]).intl;
  obj5.children = intl4.formatToPlainString(channel(analyticsLocations[18]).t["Qvg+6+"], { username: name });
  items3[3] = closure_6(channel(analyticsLocations[20]).Text, obj5);
  const obj6 = {
    userId: user.id,
    onPress: callback2,
    iconSize: channel(analyticsLocations[22]).GuildIconSizes.XSMALL,
    textVariant: "text-md/medium",
  };
  items3[4] = closure_6(user(analyticsLocations[21]), obj6);
  items3[5] = closure_6(user(analyticsLocations[23]), { channel, user });
  obj.children = items3;
  return closure_7(View, obj);
}
