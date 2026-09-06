// discord_app/modules/notification_center/native/ForYouSuggestedFriendRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01896_asyncRequireImpl.js";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import ChannelListLayout from "../../main_tabs_v2/native/shared_components/guild_channels/layouts/ChannelListLayout.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, RelationshipTypes: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles((layout) => {
  let obj = ChannelListLayout;
  const layoutStyles = obj.getLayoutStyles(layout);
  let obj1 = ChannelListLayout;
  const sizeStyle = obj1.makeSizeStyle(layoutStyles.icon.wrapper.size);
  obj = { rowActive: null, pressable: null, textContainer: null, nameText: null, avatar: null };
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
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendRow.tsx");

export default function ForYouSuggestedFriendRow(suggestedFriend) {
  suggestedFriend = suggestedFriend.suggestedFriend;
  ({ onAddSuggestion: importDefault, onAddSuggestionAnimationFinish: dependencyMap, panelVariant } = suggestedFriend);
  if (panelVariant === undefined) {
    panelVariant = false;
  }
  let sharedValue;
  let stateFromStores;
  let obj = suggestedFriend(10121);
  const messagesTabLayout = obj.useMessagesTabLayout(panelVariant);
  const tmp4 = closure_12(messagesTabLayout);
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj1 = suggestedFriend(10121);
  const layoutStyles = obj1.getLayoutStyles(messagesTabLayout);
  let obj2 = suggestedFriend(4982);
  const fontScale = obj2.useFontScale();
  let obj3 = suggestedFriend(563);
  const items = [stateFromStores];
  const stateFromStoresObject = obj3.useStateFromStoresObject(items, () => stateFromStores.useReducedMotion);
  let obj4 = analyticsLocations;
  const items1 = [suggestedFriend, analyticsLocations];
  if (null != suggestedFriend.friendSuggestionName) {
    if (suggestedFriend.friendSuggestionName.length > 0) {
      let friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    let tmpResult = tmp(16043);
    const suggestedContactNameForSuggestion = tmpResult.getSuggestedContactNameForSuggestion(
      friendSuggestionName,
      suggestedFriend,
    );
    let str2 = "";
    if (null != suggestedContactNameForSuggestion) {
      const _HermesInternal = HermesInternal;
      str2 = " \u00B7 " + suggestedContactNameForSuggestion;
    }
    if (null != suggestedFriend.mutualFriendsCount) {
      if (suggestedFriend.mutualFriendsCount > 0) {
        const intl = tmp(1114).intl;
        obj = { count: suggestedFriend.mutualFriendsCount };
        let formatToPlainStringResult = intl.formatToPlainString(tmp(1114).t.z7y34b, obj);
      }
      tmpResult = tmp(4296);
      sharedValue = tmpResult.useSharedValue(false);
      const items2 = [RelationshipStore];
      stateFromStores = tmp(563).useStateFromStores(
        items2,
        () => RelationshipStore.getRelationshipType(suggestedFriend.user.id) === constants2.PENDING_OUTGOING,
      );
      const items3 = [sharedValue, stateFromStores];
      const effect = obj4.useEffect(() => {
        if (!stateFromStores) {
          const result = sharedValue.set(false);
        }
      }, items3);
      const tmpResult1 = tmp(563);
      obj = {
        accessibilityRole: "button",
        underlayColor: tmp4.rowActive.backgroundColor,
        onPress: tmp9,
        style: null,
        children: null,
      };
      const items4 = [tmp4.pressable];
      obj1 = { borderRadius: layoutStyles.container.borderRadius };
      items4[1] = obj1;
      obj.style = items4;
      const tmpResult2 = tmp(16440);
      obj2 = { style: tmp4.avatar, children: null };
      obj3 = {
        user: suggestedFriend.user,
        guildId: "r",
        size: layoutStyles.icon.avatarSize,
        animate: !stateFromStoresObject,
      };
      obj2.children = closure_9(tmp(1178).Avatar, obj3);
      const items5 = [closure_9(sharedValue, obj2), ,];
      obj4 = { style: tmp4.textContainer, children: null };
      const obj5 = {
        lineClamp: 1,
        variant: layoutStyles.channelName.text.variant,
        color: "text-default",
        style: tmp4.nameText,
        children: friendSuggestionName,
      };
      const items6 = [closure_9(tmp(4556).Text, obj5)];
      const tmpResult3 = tmp(16441);
      let num3 = 0;
      if (tmpResult4.isAndroid()) {
        num3 = -2;
      }
      const obj6 = { style: null, children: null };
      const obj7 = { marginTop: num3 };
      obj6.style = obj7;
      tmpResult4 = tmp(1115);
      let num4 = 0;
      if (tmpResult5.isAndroid()) {
        num4 = 2;
      }
      const obj8 = {
        lineHeight: layoutStyles.messagePreview.height + num4,
        textVariant: layoutStyles.messagePreview.text.variant,
        actioned: sharedValue,
        maxFontSizeMultiplier: 1.75,
        label: null,
        actionStatus: null,
        animate: null,
      };
      const _HermesInternal2 = HermesInternal;
      obj8.label = "" + formatToPlainStringResult + str2;
      const intl2 = tmp(1114).intl;
      obj8.actionStatus = intl2.string(tmp(1114).t.Kzyxm9);
      obj8.animate = !stateFromStoresObject;
      obj6.children = closure_9(tmp(16442).ActionStatusSubLabel, obj8);
      items6[1] = closure_9(sharedValue, obj6);
      obj4.children = items6;
      items5[1] = closure_10(sharedValue, obj4);
      const obj9 = {
        user: suggestedFriend.user,
        added: sharedValue,
        size: null,
        onAddSuggestion: null,
        onFinishAnimation: null,
        animate: null,
      };
      tmpResult5 = tmp(1115);
      let str4 = "sm";
      if (tmpResult6.isLayoutCozy(messagesTabLayout)) {
        str4 = "md";
      }
      const obj10 = { children: null };
      obj9.size = str4;
      obj9.onAddSuggestion = function onAddSuggestion(id) {
        const obj = {
          suggested_user_id: id.id,
          suggestion_source: suggestedFriend.source,
          location: "Notifications Tab",
        };
        obj.track(constants.FRIEND_SUGGESTION_ADDED, obj);
        closure_1_1(suggestedFriend);
      };
      obj9.onFinishAnimation = function onFinishAnimation() {
        dependencyMap(suggestedFriend);
      };
      obj9.animate = !stateFromStoresObject;
      items5[2] = closure_9(tmp(16443).ContactSuggestionActions, obj9);
      obj10.children = items5;
      const obj11 = { layout: messagesTabLayout, fontScale, panelVariant };
      obj.children = tmpResult3.renderChannelWrapper(closure_10(closure_11, obj10), obj11);
      const obj12 = { layout: messagesTabLayout, panelVariant };
      return tmpResult2.renderChannelPressableWrapper(closure_9(tmp(5123).PressableHighlight, obj), obj12);
    }
    let tmp5Result = UserUtilsDefault;
    formatToPlainStringResult = tmp5Result.getName(suggestedFriend.user);
  }
  tmp5Result = UserUtilsDefault;
  friendSuggestionName = tmp5Result.getName(suggestedFriend.user);
}
