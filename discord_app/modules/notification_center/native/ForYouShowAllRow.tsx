// discord_app/modules/notification_center/native/ForYouShowAllRow.tsx
import obj132 from "../../../utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import Button from "../../../design/void/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import getFontScale from "../../screen/native/useFontScale.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import registerAssetDefault from "../../../../_runtime/06299_registerAsset.js";
import getLayoutStyles from "../../main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx";
import AvatarDuoPile from "../../../design/components/Pile/native/AvatarDuoPile.native.tsx";
import renderChannelPressableWrapper from "../../main_tabs_v2/native/shared_components/guild_channels/ChannelPressableWrapper.tsx";
import renderChannelWrapper from "../../main_tabs_v2/native/shared_components/guild_channels/ChannelWrapper.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../../Constants.tsx";
import { Sections } from "../../main_tabs_v2/native/friends/screens/FriendsScreenConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function ForYouShowAllRow(panelVariant) {
  panelVariant = panelVariant.panelVariant;
  ({ children, count, onPress } = panelVariant);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let obj = getLayoutStyles;
  const layout = obj.useMessagesTabLayout(panelVariant);
  const tmp4 = callback2(layout);
  obj1 = getLayoutStyles;
  const layoutStyles = obj1.getLayoutStyles(layout);
  let obj2 = getFontScale;
  const fontScale = obj2.useFontScale();
  const items = [tmp4.pressable, { borderRadius: layoutStyles.container.borderRadius }];
  obj = { style: tmp4.avatar, children: null };
  const AvatarSizes = Button.AvatarSizes;
  obj1 = { children: null };
  obj2 = { size: getLayoutStyles.isLayoutCompact(layout) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL, "aria-label": "", children };
  obj[1] = callback(AvatarDuoPile.AvatarDuoPile, obj2);
  const items1 = [callback(View, obj), , ];
  const obj3 = { style: tmp4.textContainer, children: null };
  const obj4 = { lineClamp: 1, variant: layoutStyles.channelName.text.variant, color: "text-brand", style: tmp4.nameText, children: null };
  const intl = getSystemLocale.intl;
  obj4[4] = intl.format(getSystemLocale.t.NrzztX, { count });
  obj3[1] = callback(Text.Text, obj4);
  items1[1] = callback(View, obj3);
  const obj5 = { style: tmp4.icon, color: tmp4.iconColor.color, source: registerAssetDefault, size: Button.IconSizes.CUSTOM };
  items1[2] = callback(Button.Icon, obj5);
  obj1[0] = items1;
  obj[4] = obj5.renderChannelWrapper(callback2(closure_8, obj1), { layout, fontScale, panelVariant });
  return obj3.renderChannelPressableWrapper(callback(PressableBase.PressableHighlight, obj), { layout, panelVariant });
}
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles((layout) => {
  let obj = getLayoutStyles;
  const layoutStyles = obj.getLayoutStyles(layout);
  obj1 = getLayoutStyles;
  const sizeStyle = obj1.makeSizeStyle(layoutStyles.icon.wrapper.size);
  obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED };
  obj[0] = obj;
  obj[1] = { flex: 1 };
  obj1 = { flexDirection: "column", flexGrow: 2, flexShrink: 2, alignSelf: "center", overflow: "hidden", marginTop: -2, marginRight: ThemesDefault.space.PX_8 };
  obj[2] = obj1;
  let num = 0;
  if (obj6.isAndroid()) {
    num = 2;
  }
  obj[3] = { flexShrink: 1, marginBottom: num };
  const obj2 = { position: "relative", borderRadius: ThemesDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0 };
  const merged = Object.assign(sizeStyle);
  obj2.marginRight = layoutStyles.icon.margin.marginRight + 4;
  obj[4] = obj2;
  obj6 = obj132;
  obj[5] = { width: 8, height: 32, paddingRight: ThemesDefault.space.PX_24 };
  obj[6] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/notification_center/native/ForYouShowAllRow.tsx");

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
  const callback = React.useCallback(() => {
    navigation(messagesTabLayout[10]);
    const obj = { section_id: Sections.FRIEND_SUGGESTIONS, truncated_count: 2, expanded_count: suggestedFriends.length, location: "NotificationsTab" };
    obj.track(AnalyticEvents.FRIEND_FINDER_SECTION_EXPANDED, obj);
    navigation.navigate("friends", { screen: "suggested-friends", params: { presentation: "card" } });
  }, items);
  obj = {
    children: React.useMemo(() => {
      const substr = suggestedFriends.slice(2, 4);
      return substr.map((item, index) => {
        const obj = { user: item.user, guildId: "Array", size: null };
        const obj2 = suggestedFriends(messagesTabLayout[6]);
        const AvatarSizes = suggestedFriends(messagesTabLayout[11]).AvatarSizes;
        obj[2] = suggestedFriends(messagesTabLayout[6]).isLayoutCompact(closure_2) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL;
        return closure_1_7(suggestedFriends(messagesTabLayout[11]).Avatar, obj, item.user.id);
      });
    }, items1),
    count: suggestedFriends.length,
    onPress: callback,
    panelVariant: flag
  };
  return callback(ForYouShowAllRow, obj);
};