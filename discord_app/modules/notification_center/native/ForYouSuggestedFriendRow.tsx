// discord_app/modules/notification_center/native/ForYouSuggestedFriendRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
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
const createStyles = fn(4757);
let closure_12 = createStyles.createStyles((layout) => {
  const layoutStyles = ChannelListLayout.getLayoutStyles(layout);
  const sizeStyle = ChannelListLayout.makeSizeStyle(layoutStyles.icon.wrapper.size);
  const obj3 = { rowActive: null, pressable: null, textContainer: null, nameText: null, avatar: null };
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
  return obj3;
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
  const messagesTabLayout = suggestedFriend(10383).useMessagesTabLayout(panelVariant);
  const tmp4 = closure_12(messagesTabLayout);
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const obj = suggestedFriend(10383);
  const layoutStyles = suggestedFriend(10383).getLayoutStyles(messagesTabLayout);
  const obj2 = suggestedFriend(10383);
  const fontScale = suggestedFriend(5194).useFontScale();
  const obj3 = suggestedFriend(5194);
  const items = [stateFromStores];
  const stateFromStoresObject = suggestedFriend(563).useStateFromStoresObject(
    items,
    () => stateFromStores.useReducedMotion,
  );
  const items1 = [suggestedFriend, analyticsLocations];
  if (null != suggestedFriend.friendSuggestionName) {
    if (suggestedFriend.friendSuggestionName.length > 0) {
      let friendSuggestionName = suggestedFriend.friendSuggestionName;
    }
    const suggestedContactNameForSuggestion = tmp(16393).getSuggestedContactNameForSuggestion(
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
        const intl = tmp(1115).intl;
        const obj6 = { count: suggestedFriend.mutualFriendsCount };
        let formatToPlainStringResult = intl.formatToPlainString(tmp(1115).t.z7y34b, obj6);
      }
      sharedValue = tmp(4493).useSharedValue(false);
      const tmpResult8 = tmp(4493);
      const items2 = [RelationshipStore];
      stateFromStores = tmp(563).useStateFromStores(
        items2,
        () => RelationshipStore.getRelationshipType(suggestedFriend.user.id) === constants2.PENDING_OUTGOING,
      );
      const items3 = [sharedValue, stateFromStores];
      const effect = obj5.useEffect(() => {
        if (!stateFromStores) {
          const result = sharedValue.set(false);
        }
      }, items3);
      const tmpResult9 = tmp(563);
      const obj7 = {
        accessibilityRole: "button",
        underlayColor: tmp4.rowActive.backgroundColor,
        onPress: tmp9,
        style: null,
        children: null,
      };
      const items4 = [tmp4.pressable];
      const obj8 = { borderRadius: layoutStyles.container.borderRadius };
      items4[1] = obj8;
      obj7.style = items4;
      const tmpResult10 = tmp(16791);
      const obj9 = { style: tmp4.avatar, children: null };
      const obj10 = {
        user: suggestedFriend.user,
        guildId: "r",
        size: layoutStyles.icon.avatarSize,
        animate: !stateFromStoresObject,
      };
      obj9.children = closure_9(tmp(1177).Avatar, obj10);
      const items5 = [closure_9(sharedValue, obj9), ,];
      const obj11 = { style: tmp4.textContainer, children: null };
      const obj12 = {
        lineClamp: 1,
        variant: layoutStyles.channelName.text.variant,
        color: "text-default",
        style: tmp4.nameText,
        children: friendSuggestionName,
      };
      const items6 = [closure_9(tmp(4753).Text, obj12)];
      const tmpResult11 = tmp(16792);
      let num3 = 0;
      if (tmpResult12.isAndroid()) {
        num3 = -2;
      }
      const obj13 = { style: null, children: null };
      const obj14 = { marginTop: num3 };
      obj13.style = obj14;
      tmpResult12 = tmp(1364);
      let num4 = 0;
      if (tmpResult13.isAndroid()) {
        num4 = 2;
      }
      const obj15 = {
        lineHeight: layoutStyles.messagePreview.height + num4,
        textVariant: layoutStyles.messagePreview.text.variant,
        actioned: sharedValue,
        maxFontSizeMultiplier: 1.75,
        label: null,
        actionStatus: null,
        animate: null,
      };
      const _HermesInternal2 = HermesInternal;
      obj15.label = "" + formatToPlainStringResult + str2;
      const intl2 = tmp(1115).intl;
      obj15.actionStatus = intl2.string(tmp(1115).t.Kzyxm9);
      obj15.animate = !stateFromStoresObject;
      obj13.children = closure_9(tmp(16793).ActionStatusSubLabel, obj15);
      items6[1] = closure_9(sharedValue, obj13);
      obj11.children = items6;
      items5[1] = closure_10(sharedValue, obj11);
      const obj16 = {
        user: suggestedFriend.user,
        added: sharedValue,
        size: null,
        onAddSuggestion: null,
        onFinishAnimation: null,
        animate: null,
      };
      tmpResult13 = tmp(1364);
      let str4 = "sm";
      if (tmpResult14.isLayoutCozy(messagesTabLayout)) {
        str4 = "md";
      }
      const obj17 = { children: null };
      obj16.size = str4;
      obj16.onAddSuggestion = function onAddSuggestion(id) {
        AnalyticsUtilsDefault.track(constants.FRIEND_SUGGESTION_ADDED, {
          suggested_user_id: id.id,
          suggestion_source: suggestedFriend.source,
          location: "Notifications Tab",
        });
        closure_1_1(suggestedFriend);
      };
      obj16.onFinishAnimation = function onFinishAnimation() {
        dependencyMap(suggestedFriend);
      };
      obj16.animate = !stateFromStoresObject;
      items5[2] = closure_9(tmp(16794).ContactSuggestionActions, obj16);
      obj17.children = items5;
      const obj18 = { layout: messagesTabLayout, fontScale, panelVariant };
      obj7.children = tmpResult11.renderChannelWrapper(closure_10(closure_11, obj17), obj18);
      const obj19 = { layout: messagesTabLayout, panelVariant };
      return tmpResult10.renderChannelPressableWrapper(closure_9(tmp(5341).PressableHighlight, obj7), obj19);
    }
    const tmpResult = tmp(16393);
    formatToPlainStringResult = UserUtilsDefault.getName(suggestedFriend.user);
    const tmp5Result = UserUtilsDefault;
  }
  const obj4 = suggestedFriend(563);
  obj5 = analyticsLocations;
  friendSuggestionName = UserUtilsDefault.getName(suggestedFriend.user);
  const tmp5Result2 = UserUtilsDefault;
}
