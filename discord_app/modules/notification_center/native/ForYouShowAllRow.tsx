// discord_app/modules/notification_center/native/ForYouShowAllRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import native from "../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import _modDef7142 from "../../../../_runtime/metro/07142__.js";
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
  let obj = ChannelListLayout;
  const layout = obj.useMessagesTabLayout(panelVariant);
  const tmp4 = closure_10(layout);
  let obj1 = ChannelListLayout;
  const layoutStyles = obj1.getLayoutStyles(layout);
  let obj2 = useFontScale;
  const fontScale = obj2.useFontScale();
  obj = {
    accessibilityRole: "button",
    underlayColor: tmp4.rowActive.backgroundColor,
    onPress,
    style: null,
    children: null,
  };
  const items = [tmp4.pressable, { borderRadius: layoutStyles.container.borderRadius }];
  obj.style = items;
  obj = { style: tmp4.avatar, children: null };
  const tmp8 = React7;
  const tmp9 = React6;
  const AvatarSizes = native.AvatarSizes;
  obj1 = { children: null };
  obj2 = {
    size: ChannelListLayout.isLayoutCompact(layout) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL,
    "aria-label": "",
    children,
  };
  obj.children = React5(AvatarDuoPile.AvatarDuoPile, obj2);
  const items1 = [React5(View, obj), ,];
  const obj3 = { style: tmp4.textContainer, children: null };
  const obj4 = {
    lineClamp: 1,
    variant: layoutStyles.channelName.text.variant,
    color: "text-brand",
    style: tmp4.nameText,
    children: null,
  };
  const intl = tmp(1114).intl;
  obj4.children = intl.format(util.t.NrzztX, { count });
  obj3.children = React5(Text_Text.Text, obj4);
  items1[1] = React5(View, obj3);
  const obj5 = { style: tmp4.icon, color: tmp4.iconColor.color, source: _modDef7142, size: tmp(1178).IconSizes.CUSTOM };
  items1[2] = React5(native.Icon, obj5);
  obj1.children = items1;
  obj.children = obj5.renderChannelWrapper(tmp8(tmp9, obj1), { layout, fontScale, panelVariant });
  return obj3.renderChannelPressableWrapper(React5(Pressables.PressableHighlight, obj), { layout, panelVariant });
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
const Sections = fn(12699).Sections;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4560);
let closure_10 = createStyles.createStyles((layout) => {
  let obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout);
  let obj1 = ChannelListLayout;
  const sizeStyle = obj1.makeSizeStyle(layoutStyles.icon.wrapper.size);
  obj = {
    rowActive: null,
    pressable: null,
    textContainer: null,
    nameText: null,
    avatar: null,
    icon: null,
    iconColor: null,
  };
  obj = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
  obj.rowActive = obj;
  obj.pressable = { flex: 1 };
  obj1 = {
    flexDirection: "column",
    flexGrow: 2,
    flexShrink: 2,
    alignSelf: "center",
    overflow: "hidden",
    marginTop: -2,
    marginRight: nativeDefault.space.PX_8,
  };
  obj.textContainer = obj1;
  let num = 0;
  if (obj6.isAndroid()) {
    num = 2;
  }
  obj.nameText = { flexShrink: 1, marginBottom: num };
  const obj2 = {
    position: "relative",
    borderRadius: nativeDefault.radii.round,
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    flexGrow: 0,
  };
  const merged = Object.assign(sizeStyle);
  obj2.marginRight = layoutStyles.icon.margin.marginRight + 4;
  obj.avatar = obj2;
  const size = { width: 8, height: 32, paddingRight: tmp4(576).space.PX_24 };
  obj.icon = size;
  obj6 = PlatformUtils;
  obj.iconColor = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  return obj;
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
  let obj = suggestedFriends(messagesTabLayout[9]);
  const navigation = obj.useNavigation();
  messagesTabLayout = suggestedFriends(messagesTabLayout[6]).useMessagesTabLayout(flag);
  const items = [navigation, suggestedFriends];
  const items1 = [messagesTabLayout, suggestedFriends];
  const callback = noop.useCallback(() => {
    const obj = {
      section_id: Sections.FRIEND_SUGGESTIONS,
      truncated_count: 2,
      expanded_count: suggestedFriends.length,
      location: "NotificationsTab",
    };
    obj.track(AnalyticEvents.FRIEND_FINDER_SECTION_EXPANDED, obj);
    navigation.navigate("friends", { screen: "suggested-friends", params: { presentation: "card" } });
  }, items);
  obj = {
    children: noop.useMemo(() => {
      const substr = suggestedFriends.slice(2, 4);
      return substr.map((user) => {
        const obj = { user: user.user, guildId: "Array", size: -1 };
        const obj2 = suggestedFriends(messagesTabLayout[6]);
        const tmp = closure_2_7;
        const AvatarSizes = suggestedFriends(messagesTabLayout[11]).AvatarSizes;
        obj.size = suggestedFriends(messagesTabLayout[6]).isLayoutCompact(closure_1_2)
          ? AvatarSizes.XSMALL_20
          : AvatarSizes.SMALL;
        return tmp(suggestedFriends(messagesTabLayout[11]).Avatar, obj, user.user.id);
      });
    }, items1),
    count: suggestedFriends.length,
    onPress: callback,
    panelVariant: flag,
  };
  return closure_7(ForYouShowAllRow, obj);
};
