// === Module 16033: ForYouShowAllRow ===

// Module 16033 (ForYouShowAllRow)
import set from "set" /* 500 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4474 */;
import getFontScale from "getFontScale" /* 4935 */;
import PressableBase from "PressableBase" /* 5068 */;
import registerAssetDefault from "registerAsset" /* 5614 */;
import getLayoutStyles from "getLayoutStyles" /* 10202 */;
import AvatarDuoPile from "AvatarDuoPile" /* 13820 */;
import renderChannelPressableWrapper from "renderChannelPressableWrapper" /* 16028 */;
import renderChannelWrapper from "renderChannelWrapper" /* 16029 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { Sections } from "SuggestedFriendSource" /* 12237 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
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
  let obj3 = renderChannelPressableWrapper;
  obj = { accessibilityRole: "button", underlayColor: tmp4.rowActive.backgroundColor, onPress, style: items, children: null };
  items = [tmp4.pressable, { borderRadius: layoutStyles.container.borderRadius }];
  let obj5 = renderChannelWrapper;
  obj = { style: tmp4.avatar, children: null };
  const obj8 = getLayoutStyles;
  const tmp8 = closure_9;
  const tmp9 = closure_8;
  const AvatarSizes = Button.AvatarSizes;
  obj1 = { children: null };
  obj2 = { size: getLayoutStyles.isLayoutCompact(layout) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL, "aria-label": "", children };
  obj[1] = closure_7(AvatarDuoPile.AvatarDuoPile, obj2);
  const items1 = [closure_7(View, obj), , ];
  obj3 = { style: tmp4.textContainer, children: null };
  const obj4 = { lineClamp: 1, variant: layoutStyles.channelName.text.variant, color: "text-brand", style: tmp4.nameText, children: null };
  const intl = tmp(1236).intl;
  obj4[4] = intl.format(getSystemLocale.t.NrzztX, { count });
  obj3[1] = closure_7(Text.Text, obj4);
  items1[1] = closure_7(View, obj3);
  obj5 = { style: tmp4.icon, color: tmp4.iconColor.color, source: registerAssetDefault, size: tmp(1297).IconSizes.CUSTOM };
  items1[2] = closure_7(Button.Icon, obj5);
  obj1[0] = items1;
  obj[4] = obj5.renderChannelWrapper(tmp8(tmp9, obj1), { layout, fontScale, panelVariant });
  return obj3.renderChannelPressableWrapper(closure_7(PressableBase.PressableHighlight, obj), { layout, panelVariant });
}
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles((layout) => {
  let obj = getLayoutStyles;
  const layoutStyles = obj.getLayoutStyles(layout);
  obj1 = getLayoutStyles;
  const sizeStyle = obj1.makeSizeStyle(layoutStyles.icon.wrapper.size);
  obj = { rowActive: null, pressable: null, textContainer: null, nameText: null, avatar: null, icon: null, iconColor: null };
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
  obj6 = set;
  obj[5] = { width: 8, height: 32, paddingRight: ThemesDefault.space.PX_24 };
  const obj3 = { width: 8, height: 32, paddingRight: ThemesDefault.space.PX_24 };
  obj[6] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouShowAllRow.tsx");

export const ForYouSuggestedFriendShowAllRow = function ForYouSuggestedFriendShowAllRow(suggestedFriends) {
  suggestedFriends = suggestedFriends.suggestedFriends;
  let flag = suggestedFriends.panelVariant;
  if (flag === undefined) {
    flag = false;
  }
  let navigation;
  let messagesTabLayout;
  let obj = suggestedFriends(messagesTabLayout[9]);
  navigation = obj.useNavigation();
  messagesTabLayout = suggestedFriends(messagesTabLayout[6]).useMessagesTabLayout(flag);
  const items = [navigation, suggestedFriends];
  const items1 = [messagesTabLayout, suggestedFriends];
  const callback = React.useCallback(() => {
    let obj = navigation(messagesTabLayout[10]);
    obj = { section_id: closure_1_6.FRIEND_SUGGESTIONS, truncated_count: 2, expanded_count: suggestedFriends.length, location: "NotificationsTab" };
    obj.track(closure_1_5.FRIEND_FINDER_SECTION_EXPANDED, obj);
    navigation.navigate("friends", { screen: "suggested-friends", params: { presentation: "card" } });
  }, items);
  obj = {
    children: React.useMemo(() => {
      const substr = suggestedFriends.slice(2, 4);
      return substr.map((user) => {
        const obj = { user: user.user, guildId: "Array", size: 0.0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000055359227687093 };
        const obj2 = closure_1_0(closure_1_2[6]);
        const tmp = closure_1_7;
        const AvatarSizes = closure_1_0(closure_1_2[11]).AvatarSizes;
        obj[2] = closure_1_0(closure_1_2[6]).isLayoutCompact(closure_2) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL;
        return tmp(closure_1_0(closure_1_2[11]).Avatar, obj, user.user.id);
      });
    }, items1),
    count: suggestedFriends.length,
    onPress: callback,
    panelVariant: flag
  };
  return callback(ForYouShowAllRow, obj);
};