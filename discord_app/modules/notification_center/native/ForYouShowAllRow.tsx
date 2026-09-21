// discord_app/modules/notification_center/native/ForYouShowAllRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import _modDef7387 from "../../../../_runtime/metro/07387__.js";
import ChannelListLayout from "../../main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx";
import AvatarDuoPile from "../../../design/components/Pile/native/AvatarDuoPile.native.tsx";
import ChannelPressableWrapper from "../../main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx";
import ChannelWrapper from "../../main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function ForYouShowAllRow(panelVariant) {
  panelVariant = panelVariant.panelVariant;
  ({ children, count, onPress } = panelVariant);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  const layout = ChannelListLayout.useMessagesTabLayout(panelVariant);
  const tmp4 = closure_10(layout);
  const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
  const fontScale = useFontScale.useFontScale();
  const obj5 = {
    accessibilityRole: "button",
    underlayColor: tmp4.rowActive.backgroundColor,
    onPress,
    style: null,
    children: null,
  };
  const items = [tmp4.pressable, { borderRadius: layoutStyles.container.borderRadius }];
  obj5.style = items;
  const obj4 = ChannelPressableWrapper;
  const obj7 = { style: tmp4.avatar, children: null };
  const obj6 = ChannelWrapper;
  const AvatarSizes = native.AvatarSizes;
  const obj9 = { children: null };
  const isLayoutCompactResult = ChannelListLayout.isLayoutCompact(layout);
  obj7.children = React5(AvatarDuoPile.AvatarDuoPile, {
    size: ChannelListLayout.isLayoutCompact(layout) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL,
    "aria-label": "",
    children,
  });
  const items1 = [React5(View, obj7), ,];
  const obj11 = { style: tmp4.textContainer, children: null };
  const obj12 = {
    lineClamp: 1,
    variant: layoutStyles.channelName.text.variant,
    color: "text-brand",
    style: tmp4.nameText,
    children: null,
  };
  const intl = util.intl;
  obj12.children = intl.format(util.t.NrzztX, { count });
  obj11.children = React5(Text_Text.Text, obj12);
  items1[1] = React5(View, obj11);
  const obj10 = {
    size: ChannelListLayout.isLayoutCompact(layout) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL,
    "aria-label": "",
    children,
  };
  items1[2] = React5(native.Icon, {
    style: tmp4.icon,
    color: tmp4.iconColor.color,
    source: _modDef7387,
    size: native.IconSizes.CUSTOM,
  });
  obj9.children = items1;
  obj5.children = obj6.renderChannelWrapper(React7(React6, obj9), { layout, fontScale, panelVariant });
  return obj4.renderChannelPressableWrapper(React5(Pressables.PressableHighlight, obj5), { layout, panelVariant });
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const Sections = fn(12952).Sections;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4756);
let closure_10 = createStyles.createStyles((layout) => {
  const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
  const sizeStyle = ChannelListLayout.makeSizeStyle(layoutStyles.icon.wrapper.size);
  const obj3 = {
    rowActive: null,
    pressable: null,
    textContainer: null,
    nameText: null,
    avatar: null,
    icon: null,
    iconColor: null,
  };
  obj3.rowActive = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
  obj3.pressable = { flex: 1 };
  const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
  obj3.textContainer = {
    flexDirection: "column",
    flexGrow: 2,
    flexShrink: 2,
    alignSelf: "center",
    overflow: "hidden",
    marginTop: -2,
    marginRight: nativeDefault.space.PX_8,
  };
  const obj5 = {
    flexDirection: "column",
    flexGrow: 2,
    flexShrink: 2,
    alignSelf: "center",
    overflow: "hidden",
    marginTop: -2,
    marginRight: nativeDefault.space.PX_8,
  };
  let num = 0;
  if (obj6.isAndroid()) {
    num = 2;
  }
  obj3.nameText = { flexShrink: 1, marginBottom: num };
  const obj7 = {
    position: "relative",
    borderRadius: nativeDefault.radii.round,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    flexGrow: 0,
  };
  const merged = Object.assign(sizeStyle);
  obj7.marginRight = layoutStyles.icon.margin.marginRight + 4;
  obj3.avatar = obj7;
  const size = { width: 8, height: 32, paddingRight: nativeDefault.space.PX_24 };
  obj3.icon = size;
  obj6 = PlatformUtils;
  obj3.iconColor = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  return obj3;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouShowAllRow.tsx");

export const ForYouSuggestedFriendShowAllRow = function ForYouSuggestedFriendShowAllRow(suggestedFriends) {
  suggestedFriends = suggestedFriends.suggestedFriends;
  let flag = suggestedFriends.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let messagesTabLayout;
  const navigation = suggestedFriends(messagesTabLayout[9]).useNavigation();
  let obj = suggestedFriends(messagesTabLayout[9]);
  messagesTabLayout = suggestedFriends(messagesTabLayout[6]).useMessagesTabLayout(flag);
  const items = [navigation, suggestedFriends];
  const items1 = [messagesTabLayout, suggestedFriends];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.FRIEND_FINDER_SECTION_EXPANDED, {
      section_id: Sections.FRIEND_SUGGESTIONS,
      truncated_count: 2,
      expanded_count: suggestedFriends.length,
      location: "NotificationsTab",
    });
    navigation.navigate("friends", { screen: "suggested-friends", params: { presentation: "card" } });
  }, items);
  let obj2 = suggestedFriends(messagesTabLayout[6]);
  return closure_7(ForYouShowAllRow, {
    children: noop.useMemo(() => {
      const substr = suggestedFriends.slice(2, 4);
      return substr.map((user) => {
        const obj = { user: user.user, guildId: "Array", size: -1 };
        const obj2 = suggestedFriends(messagesTabLayout[6]);
        const AvatarSizes = suggestedFriends(messagesTabLayout[11]).AvatarSizes;
        obj.size = suggestedFriends(messagesTabLayout[6]).isLayoutCompact(closure_1_2)
          ? AvatarSizes.XSMALL_20
          : AvatarSizes.SMALL;
        return closure_2_7(suggestedFriends(messagesTabLayout[11]).Avatar, obj, user.user.id);
      });
    }, items1),
    count: suggestedFriends.length,
    onPress: callback,
    panelVariant: flag,
  });
};
