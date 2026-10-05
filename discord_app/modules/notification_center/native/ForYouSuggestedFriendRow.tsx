// === Module 16379: ForYouSuggestedFriendRow ===

// Module 16379 (ForYouSuggestedFriendRow)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import ChannelListLayout from "ChannelListLayout" /* 11698 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
const View = react_native.View;
({ AnalyticEvents: metroImportDefault, RelationshipTypes: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let closure_12 = createStyles.createStyles((layout) => {
  let num;
  let obj7;
  const obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout);
  const obj2 = ChannelListLayout;
  const sizeStyle = obj2.makeSizeStyle(layoutStyles.icon.wrapper.size);
  const obj3 = { rowActive: { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED }, pressable: { flex: 1 }, textContainer: { flexDirection: "column", flexGrow: 2, flexShrink: 2, alignSelf: "center", overflow: "hidden", marginTop: -2, marginRight: nativeDefault.space.PX_8 }, nameText: { flexShrink: 1, marginBottom: num }, avatar: obj7 };
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED });
  ({ flexDirection: "column", flexGrow: 2, flexShrink: 2, alignSelf: "center", overflow: "hidden", marginTop: -2, marginRight: nativeDefault.space.PX_8 });
  num = 0;
  const obj6 = PlatformUtils;
  if (obj6.isAndroid()) {
    num = 2;
  }
  obj7 = { position: "relative", borderRadius: nativeDefault.radii.round, justifyContent: "center", alignItems: "center", flexShrink: 0, flexGrow: 0, marginRight: layoutStyles.icon.margin.marginRight + 4 };
  const merged = Object.assign(sizeStyle);
  return obj3;
});
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendRow.tsx");

export default function ForYouSuggestedFriendRow(suggestedFriend) {
  let ActionStatusSubLabel;
  let intl2;
  let items4;
  let items6;
  let obj10;
  let obj14;
  let obj15;
  let obj17;
  let obj18;
  let panelVariant;
  let renderChannelWrapper;
  let str4;
  suggestedFriend = suggestedFriend.suggestedFriend;
  ({ onAddSuggestion: importDefault, onAddSuggestionAnimationFinish: dependencyMap, panelVariant } = suggestedFriend);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let sharedValue;
  let stateFromStores;
  let obj = suggestedFriend(11698);
  const messagesTabLayout = obj.useMessagesTabLayout(panelVariant);
  const tmp4 = closure_12(messagesTabLayout);
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj2 = suggestedFriend(11698);
  const layoutStyles = obj2.getLayoutStyles(messagesTabLayout);
  const obj3 = suggestedFriend(5602);
  const fontScale = obj3.useFontScale();
  const items = [stateFromStores];
  const obj4 = suggestedFriend(573);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items, () => stateFromStores.useReducedMotion);
  const items1 = [suggestedFriend, analyticsLocations];
  const obj5 = analyticsLocations;
  if (null != suggestedFriend.friendSuggestionName) {
    let friendSuggestionName;
    if (suggestedFriend.friendSuggestionName.length > 0) {
      friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    const tmpResult = suggestedFriend(15970);
    const suggestedContactNameForSuggestion = tmpResult.getSuggestedContactNameForSuggestion(friendSuggestionName, suggestedFriend);
    let str2 = "";
    if (null != suggestedContactNameForSuggestion) {
      const _HermesInternal = HermesInternal;
      str2 = " \u00B7 " + suggestedContactNameForSuggestion;
    }
    if (null != suggestedFriend.mutualFriendsCount) {
      let formatToPlainStringResult;
      if (suggestedFriend.mutualFriendsCount > 0) {
        const intl = tmp(1126).intl;
        const obj6 = { count: suggestedFriend.mutualFriendsCount };
        formatToPlainStringResult = intl.formatToPlainString(tmp(1126).t.z7y34b, obj6);
      }
      const tmpResult8 = suggestedFriend(4612);
      sharedValue = tmpResult8.useSharedValue(false);
      const items2 = [RelationshipStore];
      const tmpResult9 = suggestedFriend(573);
      stateFromStores = tmpResult9.useStateFromStores(items2, () => RelationshipStore.getRelationshipType(suggestedFriend.user.id) === metroImportAll.PENDING_OUTGOING);
      const items3 = [sharedValue, stateFromStores];
      const effect = obj5.useEffect(() => {
        if (!stateFromStores) {
          const result = sharedValue.set(false);
        }
      }, items3);
      const obj7 = { accessibilityRole: "button", underlayColor: tmp4.rowActive.backgroundColor, onPress: tmp9, style: items4, children: renderChannelWrapper(closure_10(closure_11, obj17), obj18) };
      items4 = [tmp4.pressable, ];
      const obj8 = { borderRadius: layoutStyles.container.borderRadius };
      items4[1] = obj8;
      const renderChannelPressableWrapper = suggestedFriend(16380).renderChannelPressableWrapper;
      const PressableHighlight = tmp(5909).PressableHighlight;
      const obj9 = { style: tmp4.avatar, children: closure_9(suggestedFriend(1188).Avatar, obj10) };
      obj10 = { user: suggestedFriend.user, guildId: "r", size: layoutStyles.icon.avatarSize, animate: !stateFromStoresObject };
      renderChannelWrapper = suggestedFriend(16381).renderChannelWrapper;
      const items5 = [closure_9(sharedValue, obj9), , ];
      const obj11 = { style: tmp4.textContainer, children: items6 };
      const obj12 = { lineClamp: 1, variant: layoutStyles.channelName.text.variant, color: "text-default", style: tmp4.nameText, children: friendSuggestionName };
      items6 = [closure_9(tmp(4886).Text, obj12), ];
      let num3 = 0;
      const tmpResult12 = suggestedFriend(1369);
      if (tmpResult12.isAndroid()) {
        num3 = -2;
      }
      const obj13 = { style: obj14, children: closure_9(ActionStatusSubLabel, obj15) };
      obj14 = { marginTop: num3 };
      ActionStatusSubLabel = tmp(16382).ActionStatusSubLabel;
      const height = layoutStyles.messagePreview.height;
      let num4 = 0;
      const tmpResult13 = suggestedFriend(1369);
      if (tmpResult13.isAndroid()) {
        num4 = 2;
      }
      const _HermesInternal2 = HermesInternal;
      obj15 = { lineHeight: height + num4, textVariant: layoutStyles.messagePreview.text.variant, actioned: sharedValue, maxFontSizeMultiplier: 1.75, label: "" + formatToPlainStringResult + str2, actionStatus: intl2.string(suggestedFriend(1126).t.Kzyxm9), animate: !stateFromStoresObject };
      intl2 = tmp(1126).intl;
      items6[1] = closure_9(sharedValue, obj13);
      items5[1] = closure_10(sharedValue, obj11);
      const obj16 = {
        user: suggestedFriend.user,
        added: sharedValue,
        size: str4,
        onAddSuggestion(id) {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { suggested_user_id: id.id, suggestion_source: suggestedFriend.source, location: "Notifications Tab" };
              obj.track(metroImportDefault.FRIEND_SUGGESTION_ADDED, obj2);
              importDefault(suggestedFriend);
            },
        onFinishAnimation() {
              dependencyMap(suggestedFriend);
            },
        animate: !stateFromStoresObject
      };
      const ContactSuggestionActions = tmp(16383).ContactSuggestionActions;
      str4 = "sm";
      const tmpResult14 = suggestedFriend(11698);
      if (tmpResult14.isLayoutCozy(messagesTabLayout)) {
        str4 = "md";
      }
      obj17 = { children: items5 };
      items5[2] = closure_9(ContactSuggestionActions, obj16);
      obj18 = { layout: messagesTabLayout, fontScale, panelVariant };
      const obj19 = { layout: messagesTabLayout, panelVariant };
      return renderChannelPressableWrapper(closure_9(PressableHighlight, obj7), obj19);
    }
    const tmp5Result = UserUtilsDefault;
    formatToPlainStringResult = tmp5Result.getName(suggestedFriend.user);
  }
  const tmp5Result2 = UserUtilsDefault;
  friendSuggestionName = tmp5Result2.getName(suggestedFriend.user);
};