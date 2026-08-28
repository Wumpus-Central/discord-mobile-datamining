// === Module 15958: ForYouSuggestedFriendRow ===

// Module 15958 (ForYouSuggestedFriendRow)
import ThemesDefault from "Themes" /* 712 */;
import contextDefault from "context" /* 5918 */;
import getLayoutStyles from "getLayoutStyles" /* 10140 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4438 */;
import closure_6 from "markAllUserIdListsStale" /* 4099 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4446 */;

require = arg1;
({ AnalyticEvents: error, RelationshipTypes: closure_8 } = ME);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
let closure_12 = createCacheKey.createStyles((layout) => {
  let obj = getLayoutStyles;
  const layoutStyles = obj.getLayoutStyles(layout);
  obj1 = getLayoutStyles;
  const sizeStyle = obj1.makeSizeStyle(layoutStyles.icon.wrapper.size);
  obj = { rowActive: null, pressable: null, textContainer: null, nameText: null, avatar: null };
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
  return obj;
});
let result = require("set").fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendRow.tsx");

export default function ForYouSuggestedFriendRow(suggestedFriend) {
  suggestedFriend = suggestedFriend.suggestedFriend;
  ({ onAddSuggestion: importDefault, onAddSuggestionAnimationFinish: dependencyMap, panelVariant } = suggestedFriend);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let analyticsLocations;
  let sharedValue;
  let stateFromStores;
  let obj = suggestedFriend(10140);
  const messagesTabLayout = obj.useMessagesTabLayout(panelVariant);
  const tmp4 = callback2(messagesTabLayout);
  analyticsLocations = contextDefault().analyticsLocations;
  obj1 = suggestedFriend(10140);
  const layoutStyles = obj1.getLayoutStyles(messagesTabLayout);
  let obj2 = suggestedFriend(4900);
  const fontScale = obj2.useFontScale();
  let obj3 = suggestedFriend(647);
  const items = [stateFromStores];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => stateFromStores.useReducedMotion);
  let obj4 = analyticsLocations;
  const items1 = [suggestedFriend, analyticsLocations];
  if (null != suggestedFriend.friendSuggestionName) {
    if (suggestedFriend.friendSuggestionName.length > 0) {
      let friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    let tmpResult = tmp(15564);
    const suggestedContactNameForSuggestion = tmpResult.getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
    let str2 = "";
    if (null != suggestedContactNameForSuggestion) {
      const _HermesInternal = HermesInternal;
      str2 = " \u00B7 " + suggestedContactNameForSuggestion;
    }
    if (null != suggestedFriend.mutualFriendsCount) {
      if (suggestedFriend.mutualFriendsCount > 0) {
        const intl = tmp(1236).intl;
        obj = { count: null };
        obj[0] = suggestedFriend.mutualFriendsCount;
        let formatToPlainStringResult = intl.formatToPlainString(tmp(1236).t.z7y34b, obj);
      }
      tmpResult = tmp(4186);
      sharedValue = tmpResult.useSharedValue(false);
      const items2 = [closure_6];
      stateFromStores = tmp(647).useStateFromStores(items2, () => closure_1_6.getRelationshipType(suggestedFriend.user.id) === closure_1_8.PENDING_OUTGOING);
      const items3 = [sharedValue, stateFromStores];
      const effect = obj4.useEffect(() => {
        if (!stateFromStores) {
          const result = sharedValue.set(false);
        }
      }, items3);
      const tmpResult1 = tmp(647);
      obj = { accessibilityRole: "button", underlayColor: null, onPress: null, style: null, children: null };
      obj[1] = tmp4.rowActive.backgroundColor;
      obj[2] = tmp9;
      const items4 = [tmp4.pressable, ];
      obj1 = { borderRadius: null };
      obj1[0] = layoutStyles.container.borderRadius;
      items4[1] = obj1;
      obj[3] = items4;
      const tmpResult2 = tmp(15959);
      obj2 = { style: null, children: null };
      obj2[0] = tmp4.avatar;
      obj3 = { user: null, guildId: "r", size: "r", animate: "quests" };
      obj3[0] = suggestedFriend.user;
      obj3[2] = layoutStyles.icon.avatarSize;
      obj3[3] = !stateFromStoresObject;
      obj2[1] = callback(tmp(1297).Avatar, obj3);
      const items5 = [callback(sharedValue, obj2), , ];
      obj4 = { style: null, children: null };
      obj4[0] = tmp4.textContainer;
      const obj5 = { lineClamp: 1, variant: null, color: "text-default", style: null, children: null };
      obj5[1] = layoutStyles.channelName.text.variant;
      obj5[3] = tmp4.nameText;
      obj5[4] = friendSuggestionName;
      const items6 = [callback(tmp(4442).Text, obj5), ];
      const tmp20 = closure_11;
      const tmpResult3 = tmp(15960);
      let num3 = 0;
      if (tmpResult4.isAndroid()) {
        num3 = -2;
      }
      const obj6 = { style: null, children: null };
      const obj7 = { marginTop: null };
      obj7[0] = num3;
      obj6[0] = obj7;
      tmpResult4 = tmp(500);
      let num4 = 0;
      if (tmpResult5.isAndroid()) {
        num4 = 2;
      }
      const obj8 = { lineHeight: null, textVariant: null, actioned: null, maxFontSizeMultiplier: 1.75, label: null, actionStatus: null, animate: null };
      obj8[0] = layoutStyles.messagePreview.height + num4;
      obj8[1] = layoutStyles.messagePreview.text.variant;
      obj8[2] = sharedValue;
      const _HermesInternal2 = HermesInternal;
      obj8[4] = "" + formatToPlainStringResult + str2;
      const intl2 = tmp(1236).intl;
      obj8[5] = intl2.string(tmp(1236).t.Kzyxm9);
      obj8[6] = !stateFromStoresObject;
      obj6[1] = callback(tmp(15961).ActionStatusSubLabel, obj8);
      items6[1] = callback(sharedValue, obj6);
      obj4[1] = items6;
      items5[1] = closure_10(sharedValue, obj4);
      const obj9 = { user: null, added: null, size: null, onAddSuggestion: null, onFinishAnimation: null, animate: null };
      obj9[0] = suggestedFriend.user;
      obj9[1] = sharedValue;
      tmpResult5 = tmp(500);
      let str4 = "sm";
      if (tmpResult6.isLayoutCozy(messagesTabLayout)) {
        str4 = "md";
      }
      const obj10 = { children: null };
      obj9[2] = str4;
      obj9[3] = function onAddSuggestion(id) {
        let obj = closure_1_1(closure_1_2[26]);
        obj = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source, location: "Notifications Tab" };
        obj.track(closure_1_7.FRIEND_SUGGESTION_ADDED, obj);
        callback(suggestedFriend);
      };
      obj9[4] = function onFinishAnimation() {
        callback2(suggestedFriend);
      };
      obj9[5] = !stateFromStoresObject;
      items5[2] = callback(tmp(15962).ContactSuggestionActions, obj9);
      obj10[0] = items5;
      const obj11 = { layout: null, fontScale: null, panelVariant: null };
      obj11[0] = messagesTabLayout;
      obj11[1] = fontScale;
      obj11[2] = panelVariant;
      obj[4] = tmpResult3.renderChannelWrapper(closure_10(tmp20, obj10), obj11);
      const obj12 = { layout: null, panelVariant: null };
      obj12[0] = messagesTabLayout;
      obj12[1] = panelVariant;
      return tmpResult2.renderChannelPressableWrapper(callback(tmp(5033).PressableHighlight, obj), obj12);
    }
    let tmp5Result = tmp5(4290);
    formatToPlainStringResult = tmp5Result.getName(suggestedFriend.user);
  }
  tmp5Result = tmp5(4290);
  friendSuggestionName = tmp5Result.getName(suggestedFriend.user);
};