import registerAsset from "registerAsset";
import { View } from "Text";
import { AnalyticEvents } from "ME";
import { Sections } from "SuggestedFriendSource";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let error;
let metroImportAll;
const require = arg1;
function ForYouShowAllRow(panelVariant) {
  let children;
  let count;
  let onPress;
  panelVariant = panelVariant.panelVariant;
  ({ children, count, onPress } = panelVariant);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let obj = require(10299) /* getLayoutStyles */;
  const layout = obj.useMessagesTabLayout(panelVariant);
  const tmp4 = callback2(layout);
  let obj1 = require(10299) /* getLayoutStyles */;
  const layoutStyles = obj1.getLayoutStyles(layout);
  let obj2 = require(4610) /* getFontScale */;
  const fontScale = obj2.useFontScale();
  let obj3 = require(15332) /* renderChannelPressableWrapper */;
  obj = { accessibilityRole: "button", underlayColor: tmp4.rowActive.backgroundColor, onPress, style: items, children: null };
  items = [tmp4.pressable, { borderRadius: layoutStyles.container.borderRadius }];
  let obj5 = require(15333) /* renderChannelWrapper */;
  obj = { style: tmp4.avatar, children: null };
  const obj8 = require(10299) /* getLayoutStyles */;
  const tmp8 = closure_9;
  const tmp9 = closure_8;
  const AvatarSizes = require(1297) /* Button */.AvatarSizes;
  obj1 = { children: null };
  obj2 = { size: require(10299) /* getLayoutStyles */.isLayoutCompact(layout) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL, "aria-label": "", children };
  obj[1] = closure_7(require(13239) /* AvatarDuoPile */.AvatarDuoPile, obj2);
  const items1 = [closure_7(View, obj), , ];
  obj3 = { style: tmp4.textContainer, children: null };
  const obj4 = { lineClamp: 1, variant: layoutStyles.channelName.text.variant, color: "text-brand", style: tmp4.nameText, children: null };
  const intl = tmp(1236).intl;
  obj4[4] = intl.format(require(1236) /* getSystemLocale */.t.NrzztX, { count });
  obj3[1] = closure_7(require(4189) /* Text */.Text, obj4);
  items1[1] = closure_7(View, obj3);
  obj5 = { style: tmp4.icon, color: tmp4.iconColor.color, source: null, size: null };
  obj5[2] = importDefault(5233);
  obj5[3] = require(1297) /* Button */.IconSizes.CUSTOM;
  items1[2] = closure_7(require(1297) /* Button */.Icon, obj5);
  obj1[0] = items1;
  obj[4] = obj5.renderChannelWrapper(tmp8(tmp9, obj1), { layout, fontScale, panelVariant });
  return obj3.renderChannelPressableWrapper(closure_7(require(4721) /* PressableBase */.PressableHighlight, obj), { layout, panelVariant });
}
({ jsx: error, Fragment: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles((layout) => {
  let obj = require(10299) /* getLayoutStyles */;
  const layoutStyles = obj.getLayoutStyles(layout);
  let obj1 = require(10299) /* getLayoutStyles */;
  const sizeStyle = obj1.makeSizeStyle(layoutStyles.icon.wrapper.size);
  obj = { rowActive: null, pressable: null, textContainer: null, nameText: null, avatar: null, icon: null, iconColor: null };
  obj = { backgroundColor: importDefault(712).colors.BACKGROUND_MOD_MUTED };
  obj[0] = obj;
  obj[1] = { flex: 1 };
  obj1 = { flexDirection: "column", flexGrow: 2, flexShrink: 2, alignSelf: "center", overflow: "hidden", marginTop: -2, marginRight: importDefault(712).space.PX_8 };
  obj[2] = obj1;
  let num = 0;
  if (obj6.isAndroid()) {
    num = 2;
  }
  obj[3] = { flexShrink: 1, marginBottom: num };
  const obj2 = { position: "relative", borderRadius: importDefault(712).radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0 };
  const merged = Object.assign(sizeStyle);
  obj2.marginRight = layoutStyles.icon.margin.marginRight + 4;
  obj[4] = obj2;
  obj6 = require(500) /* set */;
  obj[5] = { width: 8, height: 32, paddingRight: importDefault(712).space.PX_24 };
  const obj3 = { width: 8, height: 32, paddingRight: importDefault(712).space.PX_24 };
  obj[6] = { color: importDefault(712).colors.INTERACTIVE_TEXT_DEFAULT };
  return obj;
});
const result = require("ME").fileFinishedImporting("modules/notification_center/native/ForYouShowAllRow.tsx");

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
    obj = { section_id: outer1_6.FRIEND_SUGGESTIONS, truncated_count: 2, expanded_count: suggestedFriends.length, location: "NotificationsTab" };
    obj.track(outer1_5.FRIEND_FINDER_SECTION_EXPANDED, obj);
    navigation.navigate("friends", { screen: "suggested-friends", params: { presentation: "card" } });
  }, items);
  obj = {
    children: React.useMemo(() => {
      const substr = suggestedFriends.slice(2, 4);
      return substr.map((user) => {
        const obj = { user: user.user, guildId: "Array", size: "Array" };
        const obj2 = outer1_0(outer1_2[6]);
        const tmp = outer1_7;
        const AvatarSizes = outer1_0(outer1_2[11]).AvatarSizes;
        obj[2] = outer1_0(outer1_2[6]).isLayoutCompact(closure_2) ? AvatarSizes.XSMALL_20 : AvatarSizes.SMALL;
        return tmp(outer1_0(outer1_2[11]).Avatar, obj, user.user.id);
      });
    }, items1),
    count: suggestedFriends.length,
    onPress: callback,
    panelVariant: flag
  };
  return callback(ForYouShowAllRow, obj);
};