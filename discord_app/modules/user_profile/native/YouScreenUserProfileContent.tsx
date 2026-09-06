// discord_app/modules/user_profile/native/YouScreenUserProfileContent.tsx
import util from "../../../intl/index.native.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import UserProfileAvatarDefault from "UserProfileAvatar.tsx";
import FormDividerDefault from "../../../design/void/Form/native/FormDivider.tsx";
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard.tsx";
import getRandomCustomStatusPromptDefault from "../../custom_status/utils/getRandomCustomStatusPrompt.tsx";
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard.tsx";
import UserProfileActivityDefault from "UserProfileActivity.tsx";
import UserProfileNoteDefault from "UserProfileNote.tsx";
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice.tsx";
import UserProfileConnections from "UserProfileConnections.tsx";
import UserProfileWishlistGrid from "UserProfileWishlistGrid.tsx";
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid.tsx";
import showYouAccountActionSheet from "../../main_tabs_v2/native/tabs/you/utils/showYouAccountActionSheet.tsx";
import you_tracking_Tracking from "../../main_tabs_v2/native/tabs/you/tracking/Tracking.tsx";
import YouExpiringTrialOfferCardDefault from "../../main_tabs_v2/native/tabs/you/YouExpiringTrialOfferCard.tsx";
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import SelfPresenceStore from "../../../stores/SelfPresenceStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
function YouAvatar(arg0) {
  const callback = noop.useCallback(() => {
    const result = you_tracking_Tracking.trackYouTabAvatarPress();
    const result1 = showYouAccountActionSheet.showYouAccountActionSheet();
  }, []);
  let obj = PlatformUtils;
  const isAndroidResult = obj.isAndroid();
  obj = {};
  const merged = Object.assign(arg0);
  obj.onPress = callback;
  obj.importantForAccessibility = "no-hide-descendants";
  obj.accessibilityElementsHidden = isAndroidResult;
  obj.accessible = !isAndroidResult;
  return map1(UserProfileAvatarDefault, obj);
}
function YouScreenWidgetsBoardContainer(arg0) {
  ({ userId, activeSection, containerBackground, containerBorderColor } = arg0);
  const tmp = UserProfileSharedStylesDefault();
  const items = [tmp.card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
  let obj = { style: tmp.profileContent, children: null };
  const items1 = [map1(UserProfileWidgetsBoardEditNoticeDefault, {})];
  obj = { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: items };
  items1[1] = map1(UserProfileWidgetsBoardDefault, obj);
  obj.children = items1;
  return closure_1_14(timestampProducer, obj);
}
function EditSection(navigateToProfileCustomization) {
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  let isProfileLoaded = navigateToProfileCustomization.isProfileLoaded;
  let first;
  _slicedToArray = undefined;
  let obj = navigateToProfileCustomization(first[17]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = noop;
  const ref = noop.useRef(null);
  let obj2 = navigateToProfileCustomization(first[18]);
  const isDisplayNameStylesFlywheelSettersEnabled =
    obj2.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  let obj3 = navigateToProfileCustomization(first[19]);
  const isBadgeManagementEnabled = obj3.useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  let obj4 = navigateToProfileCustomization(first[20]);
  const customTypingIndicatorConfig = obj4.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp9 = useIsContentShown(
    navigateToProfileCustomization(first[21]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS,
  );
  let tmp10 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp10 = isDisplayNameStylesFlywheelSettersEnabled;
  }
  if (tmp10) {
    tmp10 = !tmp9;
  }
  const items = [];
  if (tmp10) {
    items.push(tmp4(tmp2[21]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  let hasBadges = isProfileLoaded;
  if (isProfileLoaded) {
    hasBadges = isBadgeManagementEnabled;
  }
  if (hasBadges) {
    hasBadges = navigateToProfileCustomization.hasBadges;
  }
  if (hasBadges) {
    items.push(tmp4(tmp2[21]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  if (isProfileLoaded) {
    isProfileLoaded = canSet;
  }
  if (isProfileLoaded) {
    isProfileLoaded = "profile" === entryPoint;
  }
  if (isProfileLoaded) {
    isProfileLoaded = !tmp9;
  }
  if (isProfileLoaded) {
    items.push(tmp4(tmp2[21]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const tmp3 = trackUserProfileAction(first[14])();
  const tmp14 = _slicedToArray(navigateToProfileCustomization(first[22]).useSelectedDismissibleContent(items), 2);
  first = tmp14[0];
  _slicedToArray = tmp16;
  const items1 = [navigateToProfileCustomization, trackUserProfileAction, first, tmp14[1]];
  obj = { children: null };
  const callback = obj1.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const result = you_tracking_Tracking.trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    if (null != first) {
      closure_3(ContentDismissActionType.TAKE_ACTION);
    }
  }, items1);
  obj = { style: tmp3.primaryButtons, secondaryButton: null };
  const tmp4Result = navigateToProfileCustomization(first[22]);
  obj1 = { ref, variant: "primary", icon: null, text: null, onPress: null, grow: true };
  obj2 = { size: "sm", color: tmp(tmp2[26]).colors.WHITE };
  obj1.icon = closure_13(navigateToProfileCustomization(first[25]).PencilIcon, obj2);
  const intl = tmp4(tmp2[27]).intl;
  obj1.text = intl.string(navigateToProfileCustomization(first[27]).t.AAjhgi);
  obj1.onPress = callback;
  obj.secondaryButton = closure_13(navigateToProfileCustomization(first[24]).Button, obj1);
  const items2 = [closure_13(trackUserProfileAction(first[23]), obj), , ,];
  obj3 = {
    targetRef: ref,
    visible: first === tmp4(tmp2[21]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK,
    markAsDismissed: tmp16,
  };
  items2[1] = closure_13(trackUserProfileAction(first[28]), obj3);
  obj4 = {
    targetRef: ref,
    visible: first === tmp4(tmp2[21]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK,
    markAsDismissed: tmp16,
    onTryItOut: navigateToProfileCustomization,
  };
  items2[2] = closure_13(trackUserProfileAction(first[29]), obj4);
  const tmpResult = trackUserProfileAction(first[23]);
  items2[3] = closure_13(trackUserProfileAction(first[30]), {
    targetRef: ref,
    visible:
      first ===
      navigateToProfileCustomization(first[21]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK,
    markAsDismissed: tmp14[1],
  });
  obj.children = items2;
  return closure_14(closure_15, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const useIsContentShown = fn(1949).useIsContentShown;
let UserProfileSections = fn(8183).UserProfileSections;
const UserProfileThemeTypes = fn(7208).UserProfileThemeTypes;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default function YouScreenUserProfileContent(user) {
  user = user.user;
  const navigateToFriends = user.navigateToFriends;
  const navigateToPremium = user.navigateToPremium;
  const navigateToShop = user.navigateToShop;
  const initialTab = user.initialTab;
  let flag = user.animateAvatar;
  ({ style, navigateToProfileCustomization } = user);
  if (flag === undefined) {
    flag = true;
  }
  let callback4;
  let callback5;
  let segmentedControlState;
  closure_31 = undefined;
  const tmp3 = navigateToFriends(navigateToPremium[14])();
  closure_5 = tmp3;
  let obj = user(navigateToPremium[31]);
  const navigation = obj.useNavigation();
  let obj1 = user(navigateToPremium[17]);
  const trackUserProfileAction = obj1.useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp6 = navigateToFriends(navigateToPremium[32])(user.id);
  const displayProfile = tmp6;
  let obj2 = user(navigateToPremium[33]);
  const customStatusActivity = obj2.useCustomStatusActivity();
  const arr = navigateToFriends(navigateToPremium[34])(tmp6);
  let obj3 = user(navigateToPremium[35]);
  let items = [displayProfile];
  const stateFromStores = obj3.useStateFromStores(items, () => displayProfile.getStatus());
  const tmp9 = navigateToFriends(navigateToPremium[36])({ user, displayProfile: tmp6 });
  const primaryColor = tmp9.primaryColor;
  UserProfileSections = tmp10;
  ({ theme, secondaryColor } = tmp9);
  let obj4 = user(navigateToPremium[37]);
  const userProfileColors = obj4.useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const containerBorderColor = userProfileColors.containerBorderColor;
  let obj5 = initialTab;
  ({ avatarBackground, statusBackground } = userProfileColors);
  let items1 = [trackUserProfileAction];
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const result = showYouAccountActionSheet.showYouAccountActionSheet();
  }, items1);
  let obj6 = user(navigateToPremium[38]);
  const enabled = obj6.useVirtualCurrencyMobileEnabled().enabled;
  const ref = initialTab.useRef(null);
  [obj8, tmp15] = navigateToShop(initialTab.useState(null), 2);
  c14 = tmp15;
  obj8 = user(navigateToPremium[39]);
  const shouldShowExpiringTrialOfferCard = obj8.useShouldShowExpiringTrialOfferCard();
  let obj9 = user(navigateToPremium[35]);
  let items2 = [customStatusActivity];
  const stateFromStores1 = obj9.useStateFromStores(items2, () => UserProfileStore.getFirstWishlistId(user.id));
  let obj10 = user(navigateToPremium[40]);
  const tmp18 = obj10.useDisplayableBoardWidgets(user.id).length > 0;
  closure_17 = tmp18;
  let obj11 = user(navigateToPremium[41]);
  const profileTabIndices = obj11.useProfileTabIndices(tmp18, true);
  const boardTabIndex = profileTabIndices.boardTabIndex;
  const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp20 = navigateToShop(initialTab.useState(0), 2);
  const pageWidth = tmp20[0];
  closure_21 = tmp20[1];
  const callback1 = initialTab.useCallback((nativeEvent) => {
    closure_21(nativeEvent.nativeEvent.layout.width);
  }, []);
  let obj12 = user(navigateToPremium[42]);
  const pageHeights = obj12.usePageHeights();
  const handlePageContentSize = pageHeights.handlePageContentSize;
  const items3 = [trackUserProfileAction];
  const callback2 = initialTab.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
  }, items3);
  const tmp14 = navigateToShop(initialTab.useState(null), 2);
  const profileSectionTabs = user(navigateToPremium[41]).useProfileSectionTabs({
    initialUserProfileSection: initialTab,
    wishlistTabIndex,
    boardTabIndex,
    onTabChange: callback2,
  });
  const activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  const setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  const restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  const isVisible = tmp26;
  const items4 = [customStatusActivity, tmp15];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  const callback3 = initialTab.useCallback(() => {
    let tmp2 = null;
    if (null == customStatusActivity) {
      tmp2 = getRandomCustomStatusPromptDefault();
    }
    _undefined(tmp2);
  }, items4);
  const items5 = [callback3];
  const effect = initialTab.useEffect(() => {
    setImmediate(() => {
      callback3();
    });
  }, items5);
  let labelResult;
  if (null != obj7) {
    labelResult = obj7.label();
  }
  const items6 = [
    containerBackground,
    containerBorderColor,
    tmp3,
    navigateToPremium,
    shouldShowExpiringTrialOfferCard,
    navigateToShop,
    null != primaryColor,
    enabled,
    user,
    tmp6,
    navigateToFriends,
  ];
  callback4 = obj5.useCallback(() => {
    const items = [closure_5.card];
    let obj = { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 };
    items[1] = obj;
    obj = { style: null, children: null };
    const items1 = [,];
    ({ cards: arr2[0], profileContent: arr2[1] } = closure_5);
    obj.style = items1;
    obj = { navigateToPremium, style: items };
    const items2 = [map1(YouExpiringTrialOfferCardDefault, obj), , , , , , , , ,];
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    if (!shouldShowExpiringTrialOfferCard) {
      const obj1 = { navigateToPremium, navigateToShop, hasCustomProfileTheme };
      tmp3Result = tmp3(tmp4(13073), obj1);
    }
    items2[1] = tmp3Result;
    tmp3Result = enabled;
    if (enabled) {
      const obj2 = { style: items };
      tmp3Result = tmp3(tmp4(15695), obj2);
    }
    items2[2] = tmp3Result;
    items2[3] = map1(UserProfileActivityDefault, { user, currentUser: user, style: items });
    items2[4] = map1(UserProfileAboutMeCardDefault, { userId: user.id, displayProfile });
    items2[5] = map1(FormDividerDefault, {});
    items2[6] = map1(UserProfileConnections.UserProfileAccountConnectionsCard, { userId: user.id });
    items2[7] = map1(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, { userId: user.id });
    items2[8] = map1(UserProfileYourFriendsCardDefault, { userId: user.id, navigateToFriends, style: items });
    items2[9] = map1(UserProfileNoteDefault, { userId: user.id });
    obj.children = items2;
    return closure_2_14(timestampProducer, obj);
  }, items6);
  const items7 = [
    tmp3.profileContent,
    stateFromStores1,
    pageWidth,
    activeProfileTabSection === UserProfileSections.WISHLIST,
    user.id,
  ];
  callback5 = obj5.useCallback(() => {
    let obj = { style: closure_5.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp4Result = map1(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp4 = map1;
    } else {
      tmp4 = map1;
      obj = { wishlistId: tmp3, containerWidth: null, isVisible: null };
      let tmp8;
      if (first > 0) {
        tmp8 = first;
      }
      obj.containerWidth = tmp8;
      obj.isVisible = isVisible;
      tmp4Result = tmp4(UserProfileWishlistGridDefault, obj);
    }
    const items = [tmp4Result];
    obj = { userId: user.id, wishlistId: tmp3, containerWidth: null };
    let tmp15;
    if (first > 0) {
      tmp15 = first;
    }
    obj.containerWidth = tmp15;
    items[1] = tmp4(UserProfileWishlistSuggestionsGridDefault, obj);
    obj.children = items;
    return closure_2_14(timestampProducer, obj);
  }, items7);
  const items8 = [
    callback4,
    callback5,
    handlePageContentSize,
    tmp18,
    boardTabIndex,
    wishlistTabIndex,
    user.id,
    activeProfileTabSection,
    containerBackground,
    containerBorderColor,
  ];
  const memo = obj5.useMemo(() => {
    let obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4(),
    };
    obj.page = map1(hasOwnProperty, obj);
    const items = [obj];
    if (closure_17) {
      obj = { id: "board", label: null, page: null };
      const intl2 = tmp(1114).intl;
      obj.label = intl2.string(tmp(1114).t.laViwx);
      const obj1 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
          return handlePageContentSize(boardTabIndex, arg0, arg1);
        },
        children: null,
      };
      const obj2 = {
        userId: user.id,
        activeSection: activeProfileTabSection,
        containerBackground,
        containerBorderColor,
      };
      obj1.children = tmp3(YouScreenWidgetsBoardContainer, obj2);
      obj.page = tmp3(tmp4, obj1, boardTabIndex);
      items.push(obj);
    }
    const obj3 = { id: "wishlist", label: null, page: null };
    const intl3 = tmp(1114).intl;
    obj3.label = intl3.string(util.t["7lZ31J"]);
    obj3.page = map1(
      hasOwnProperty,
      {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
          return handlePageContentSize(wishlistTabIndex, arg0, arg1);
        },
        children: callback5(),
      },
      wishlistTabIndex,
    );
    items.push(obj3);
    return items;
  }, items8);
  let tmp4Result = tmp4(tmp2[55]);
  obj = {
    pageWidth,
    defaultIndex: activeProfileTabSectionIndex,
    itemSpacing: tmp(tmp2[26]).space.PX_24,
    items: memo,
    onPageChange: handleTabChange,
  };
  segmentedControlState = tmp4Result.useSegmentedControlState(obj);
  tmp4Result = tmp4(tmp2[42]);
  const pagerFillHeight = tmp4Result.usePagerFillHeight();
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj5.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const obj14 = user(navigateToPremium[41]);
  const pagesHeightStyle = user(navigateToPremium[42]).usePagesHeightStyle(
    segmentedControlState,
    pageHeights.pageHeights,
    fillHeight,
  );
  closure_31 = obj5.useRef(segmentedControlState.setActiveIndex);
  const items10 = [segmentedControlState];
  const effect1 = obj5.useEffect(() => {
    closure_31.current = segmentedControlState.setActiveIndex;
  }, items10);
  const tmp4Result1 = user(navigateToPremium[42]);
  const items11 = [initialTab, navigation, wishlistTabIndex, setActiveProfileTabSection];
  const focusEffect = user(navigateToPremium[31]).useFocusEffect(
    obj5.useCallback(() => {
      if (undefined !== initialTab) {
        const _setTimeout = setTimeout;
        const timeout = setTimeout(() => {
          setActiveProfileTabSection(
            initialTab === UserProfileSections.WISHLIST ? UserProfileSections.WISHLIST : UserProfileSections.MAIN,
          );
          ref.current(num, false, true);
          navigation.setParams({ initialTab: "Array" });
        }, 80);
      }
      return () => {
        if (null != closure_0) {
          const _clearTimeout = clearTimeout;
          clearTimeout(tmp);
        }
        let obj = navigation;
        if (!navigation.isFocused()) {
          const parent = obj.getParent();
          let isFocusedResult;
          if (parent != null) {
            isFocusedResult = parent.isFocused();
          }
          if (isFocusedResult) {
            obj = { initialTab: UserProfileSections.MAIN };
            obj.setParams(obj);
          }
        }
      };
    }, items11),
  );
  obj = { style, children: null };
  obj1 = { style: null, children: null };
  const items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  obj1.style = items12;
  obj2 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  const items13 = [enabled(stateFromStores1, obj2), , ,];
  obj3 = {
    ref,
    customStatusActivity,
    hasCustomProfileTheme: tmp10,
    style: null,
    emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble,
    editEnabled: true,
    placeholderText: labelResult,
    prompt: obj7,
  };
  const items14 = [,];
  ({ customStatusBubble: arr16[0], customStatusBubbleInset: arr16[1] } = tmp3);
  obj3.style = items14;
  items13[1] = enabled(navigateToFriends(navigateToPremium[58]), obj3);
  obj4 = { style: null, children: null };
  const items15 = [,];
  ({ primaryInfo: arr17[0], profileContent: arr17[1] } = tmp3);
  obj4.style = items15;
  obj5 = {
    user,
    pronouns: null,
    badges: null,
    badgeContainerBackground: null,
    onPressDisplayName: null,
    displayNameAccessibilityHint: null,
    themeType: null,
    showChevron: true,
  };
  let pronouns;
  const tmp4Result2 = user(navigateToPremium[31]);
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  obj5.pronouns = pronouns;
  obj5.badges = arr;
  obj5.badgeContainerBackground = containerBackground;
  obj5.onPressDisplayName = callback;
  let intl = tmp4(tmp2[27]).intl;
  obj6 = { status: null };
  const tmpResult = navigateToFriends(navigateToPremium[59]);
  obj6.status = user(navigateToPremium[60]).getStatusLabel(stateFromStores);
  const tmp4Result3 = user(navigateToPremium[60]);
  let intl2 = tmp4(tmp2[27]).intl;
  obj5.displayNameAccessibilityHint =
    "" +
    intl.formatToPlainString(user(navigateToPremium[27]).t["er+FRD"], obj6) +
    ", " +
    intl2.string(user(navigateToPremium[27]).t.C6COaT);
  obj5.themeType = containerBackground.YOU_SCREEN;
  const items16 = [enabled(tmpResult, obj5)];
  obj7 = { navigateToProfileCustomization, hasBadges: arr.length > 0, isProfileLoaded: null != tmp6 };
  items16[1] = enabled(boardTabIndex, obj7);
  obj4.children = items16;
  items13[2] = c14(navigation, obj4);
  obj8 = { style: { flex: 1 }, onLayout: callback1, children: null };
  obj9 = { style: tmp3.profileTablist, children: null };
  obj10 = { state: segmentedControlState, variant: null };
  let str;
  if (null != primaryColor) {
    str = "gradient-background";
  }
  obj11 = { children: null };
  obj10.variant = str;
  obj9.children = enabled(user(navigateToPremium[61]).Tabs, obj10);
  const items17 = [enabled(navigation, obj9)];
  obj12 = {
    ref: pagerRef,
    onLayout: measureFill,
    style: pagesHeightStyle,
    children: tmp39(tmp4(tmp2[62]).SegmentedControlPages, { state: segmentedControlState }),
  };
  items17[1] = enabled(navigateToFriends(navigateToPremium[56]).View, obj12);
  obj8.children = items17;
  items13[3] = c14(navigation, obj8);
  obj1.children = items13;
  obj11.children = c14(navigation, obj1);
  obj.children = enabled(user(navigateToPremium[57]).LayerScope, obj11);
  return enabled(navigateToFriends(navigateToPremium[56]).View, obj);
}
