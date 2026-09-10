// === Module 16897: YouScreenUserProfileContent ===

// Module 16897 (YouScreenUserProfileContent)
import util from "util" /* 1114 */;
import PlatformUtils from "PlatformUtils" /* 1115 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8304 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8319 */;
import FormDividerDefault from "FormDivider" /* 8669 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8744 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 11188 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11279 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 13068 */;
import UserProfileNoteDefault from "UserProfileNote" /* 13121 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 13134 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 13135 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 13150 */;
import UserProfileConnections from "UserProfileConnections" /* 13156 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 13161 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 13167 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 15777 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 16452 */;
import you_tracking_Tracking from "you/tracking/Tracking" /* 16890 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 16901 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 16903 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5329 */;
import UserProfileStore from "UserProfileStore" /* 7672 */;

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
  return closure_1_14(UserProfileAvatarDefault, obj);
}
function YouScreenWidgetsBoardContainer(arg0) {
  ({ userId, activeSection, containerBackground, containerBorderColor } = arg0);
  const items = [UserProfileSharedStylesDefault().card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
  let obj = { style: UserProfileSharedStylesDefault().profileContent, children: null };
  const items1 = [closure_1_14(UserProfileWidgetsBoardEditNoticeDefault, {}), ];
  obj = { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: items };
  items1[1] = closure_1_14(UserProfileWidgetsBoardDefault, obj);
  obj.children = items1;
  return __initData(timestampProducer, obj);
}
function YouScreenActivityTabContainer(user) {
  user = user.user;
  ({ containerBackground, containerBorderColor } = user);
  const items = [UserProfileSharedStylesDefault().card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
  const obj = { style: null, children: closure_1_14(UserProfileActivityTabDefault, { user, currentUser: user, cardStyle: items }) };
  const items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = UserProfileSharedStylesDefault());
  obj.style = items1;
  return closure_1_14(timestampProducer, obj);
}
function EditSection(navigateToProfileCustomization) {
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  let isProfileLoaded = navigateToProfileCustomization.isProfileLoaded;
  let first;
  _slicedToArray = undefined;
  let obj = navigateToProfileCustomization(first[19]);
  const trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = noop;
  const ref = noop.useRef(null);
  let obj2 = navigateToProfileCustomization(first[20]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj2.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  let obj3 = navigateToProfileCustomization(first[21]);
  const isBadgeManagementEnabled = obj3.useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  let obj4 = navigateToProfileCustomization(first[22]);
  const customTypingIndicatorConfig = obj4.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp9 = useIsContentShown(navigateToProfileCustomization(first[23]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  let tmp10 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp10 = isDisplayNameStylesFlywheelSettersEnabled;
  }
  if (tmp10) {
    tmp10 = !tmp9;
  }
  const items = [];
  if (tmp10) {
    items.push(tmp4(tmp2[23]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  let hasBadges = isProfileLoaded;
  if (isProfileLoaded) {
    hasBadges = isBadgeManagementEnabled;
  }
  if (hasBadges) {
    hasBadges = navigateToProfileCustomization.hasBadges;
  }
  if (hasBadges) {
    items.push(tmp4(tmp2[23]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
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
    items.push(tmp4(tmp2[23]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const tmp3 = trackUserProfileAction(first[15])();
  const tmp14 = _slicedToArray(navigateToProfileCustomization(first[24]).useSelectedDismissibleContent(items), 2);
  first = tmp14[0];
  _slicedToArray = tmp16;
  const items1 = [navigateToProfileCustomization, trackUserProfileAction, first, tmp14[1]];
  const items2 = [navigateToProfileCustomization];
  const callback = obj1.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const result = you_tracking_Tracking.trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    if (null != first) {
      closure_3(ContentDismissActionType.TAKE_ACTION);
    }
  }, items1);
  obj = { children: null };
  const callback1 = obj1.useCallback(() => {
    navigateToProfileCustomization(constants.BADGES);
  }, items2);
  obj = { style: tmp3.primaryButtons, secondaryButton: null };
  const tmp4Result = navigateToProfileCustomization(first[24]);
  obj1 = { ref, variant: "primary", icon: null, text: null, onPress: null, grow: true };
  obj2 = { size: "sm", color: tmp(tmp2[28]).colors.WHITE };
  obj1.icon = closure_14(navigateToProfileCustomization(first[27]).PencilIcon, obj2);
  const intl = tmp4(tmp2[29]).intl;
  obj1.text = intl.string(navigateToProfileCustomization(first[29]).t.AAjhgi);
  obj1.onPress = callback;
  obj.secondaryButton = closure_14(navigateToProfileCustomization(first[26]).Button, obj1);
  const items3 = [closure_14(trackUserProfileAction(first[25]), obj), , , ];
  obj3 = { targetRef: ref, visible: first === tmp4(tmp2[23]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp16 };
  items3[1] = closure_14(trackUserProfileAction(first[30]), obj3);
  obj4 = { targetRef: ref, visible: first === tmp4(tmp2[23]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp16, onTryItOut: callback1 };
  items3[2] = closure_14(trackUserProfileAction(first[31]), obj4);
  const tmpResult = trackUserProfileAction(first[25]);
  items3[3] = closure_14(trackUserProfileAction(first[32]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[23]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp14[1] });
  obj.children = items3;
  return closure_15(closure_16, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const useIsContentShown = fn(1949).useIsContentShown;
let UserProfileSections = fn(8246).UserProfileSections;
const UserProfileThemeTypes = fn(7260).UserProfileThemeTypes;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
let closure_13 = fn(14666).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
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
  closure_33 = undefined;
  const tmp3 = navigateToFriends(navigateToPremium[15])();
  closure_5 = tmp3;
  let obj = user(navigateToPremium[33]);
  const navigation = obj.useNavigation();
  let obj1 = user(navigateToPremium[19]);
  const trackUserProfileAction = obj1.useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp6 = navigateToFriends(navigateToPremium[34])(user.id);
  const displayProfile = tmp6;
  let obj2 = user(navigateToPremium[35]);
  const customStatusActivity = obj2.useCustomStatusActivity();
  const arr = navigateToFriends(navigateToPremium[36])(tmp6);
  let obj3 = user(navigateToPremium[37]);
  let items = [displayProfile];
  const stateFromStores = obj3.useStateFromStores(items, () => displayProfile.getStatus());
  const tmp9 = navigateToFriends(navigateToPremium[38])({ user, displayProfile: tmp6 });
  const primaryColor = tmp9.primaryColor;
  UserProfileSections = tmp10;
  ({ theme, secondaryColor } = tmp9);
  let obj4 = user(navigateToPremium[39]);
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
  let obj6 = user(navigateToPremium[40]);
  const enabled = obj6.useVirtualCurrencyMobileEnabled().enabled;
  const ref = initialTab.useRef(null);
  [obj8, tmp15] = navigateToShop(initialTab.useState(null), 2);
  c14 = tmp15;
  obj8 = user(navigateToPremium[41]);
  const shouldShowExpiringTrialOfferCard = obj8.useShouldShowExpiringTrialOfferCard();
  let obj9 = user(navigateToPremium[37]);
  let items2 = [customStatusActivity];
  const stateFromStores1 = obj9.useStateFromStores(items2, () => UserProfileStore.getFirstWishlistId(user.id));
  let obj10 = user(navigateToPremium[42]);
  const tmp18 = obj10.useDisplayableBoardWidgets(user.id).length > 0;
  closure_17 = tmp18;
  let obj11 = user(navigateToPremium[43]);
  const isRecentActivityMobileEnabled = obj11.useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  let obj12 = user(navigateToPremium[44]);
  const profileTabIndices = obj12.useProfileTabIndices(tmp18, isRecentActivityMobileEnabled, true);
  const boardTabIndex = profileTabIndices.boardTabIndex;
  const activityTabIndex = profileTabIndices.activityTabIndex;
  const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp21 = navigateToShop(initialTab.useState(0), 2);
  const pageWidth = tmp21[0];
  closure_23 = tmp21[1];
  const callback1 = initialTab.useCallback((nativeEvent) => {
    closure_23(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp14 = navigateToShop(initialTab.useState(null), 2);
  const pageHeights = user(navigateToPremium[45]).usePageHeights();
  const handlePageContentSize = pageHeights.handlePageContentSize;
  const items3 = [trackUserProfileAction];
  const callback2 = initialTab.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
  }, items3);
  const obj14 = user(navigateToPremium[45]);
  const profileSectionTabs = user(navigateToPremium[44]).useProfileSectionTabs({ initialUserProfileSection: initialTab, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback2 });
  const activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  const setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  const restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  const isVisible = tmp27;
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
  const items6 = [containerBackground, containerBorderColor, tmp3, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, null != primaryColor, enabled, user, tmp6, navigateToFriends];
  callback4 = obj5.useCallback(() => {
    const items = [closure_5.card, ];
    let obj = { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 };
    items[1] = obj;
    obj = { style: null, children: null };
    const items1 = [, ];
    ({ cards: arr2[0], profileContent: arr2[1] } = closure_5);
    obj.style = items1;
    obj = { navigateToPremium, style: items };
    const items2 = [closure_2_14(YouExpiringTrialOfferCardDefault, obj), , , , , , , , , ];
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    if (!shouldShowExpiringTrialOfferCard) {
      const obj1 = { navigateToPremium, navigateToShop, hasCustomProfileTheme };
      tmp3Result = closure_2_14(UserProfileDismissibleUpsellsDefault, obj1);
    }
    items2[1] = tmp3Result;
    tmp3Result = enabled;
    if (enabled) {
      const obj2 = { style: items };
      tmp3Result = closure_2_14(BalanceWidgetMenuDefault, obj2);
    }
    items2[2] = tmp3Result;
    items2[3] = closure_2_14(UserProfileActivityDefault, { user, currentUser: user, style: items });
    items2[4] = closure_2_14(UserProfileAboutMeCardDefault, { userId: user.id, displayProfile });
    items2[5] = closure_2_14(FormDividerDefault, {});
    items2[6] = closure_2_14(UserProfileConnections.UserProfileAccountConnectionsCard, { userId: user.id });
    items2[7] = closure_2_14(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, { userId: user.id });
    items2[8] = closure_2_14(UserProfileYourFriendsCardDefault, { userId: user.id, navigateToFriends, style: items });
    items2[9] = closure_2_14(UserProfileNoteDefault, { userId: user.id });
    obj.children = items2;
    return __initData(timestampProducer, obj);
  }, items6);
  const items7 = [tmp3.profileContent, stateFromStores1, pageWidth, activeProfileTabSection === UserProfileSections.WISHLIST, user.id];
  callback5 = obj5.useCallback(() => {
    let obj = { style: closure_5.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp4Result = closure_2_14(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp4 = closure_2_14;
    } else {
      tmp4 = closure_2_14;
      obj = { wishlistId: stateFromStores1, containerWidth: null, isVisible: null };
      let tmp8;
      if (first > 0) {
        tmp8 = first;
      }
      obj.containerWidth = tmp8;
      obj.isVisible = isVisible;
      tmp4Result = tmp4(UserProfileWishlistGridDefault, obj);
    }
    const items = [tmp4Result, ];
    obj = { userId: user.id, wishlistId: stateFromStores1, containerWidth: null };
    let tmp15;
    if (first > 0) {
      tmp15 = first;
    }
    obj.containerWidth = tmp15;
    items[1] = tmp4(UserProfileWishlistSuggestionsGridDefault, obj);
    obj.children = items;
    return __initData(timestampProducer, obj);
  }, items7);
  const items8 = [callback4, callback5, handlePageContentSize, tmp18, isRecentActivityMobileEnabled, boardTabIndex, activityTabIndex, wishlistTabIndex, user, activeProfileTabSection, containerBackground, containerBorderColor];
  const memo = obj5.useMemo(() => {
    let obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    };
    obj.page = closure_2_14(hasOwnProperty, obj);
    const items = [obj];
    if (closure_17) {
      obj = { id: "board", label: null, page: null };
      const intl2 = util.intl;
      obj.label = intl2.string(util.t.laViwx);
      const obj1 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj2 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      obj1.children = closure_2_14(YouScreenWidgetsBoardContainer, obj2);
      obj.page = closure_2_14(hasOwnProperty, obj1, boardTabIndex);
      items.push(obj);
    }
    if (isRecentActivityMobileEnabled) {
      const obj3 = { id: "activity", label: null, page: null };
      const intl3 = util.intl;
      obj3.label = intl3.string(util.t.chq59f);
      const obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj5 = { user, containerBackground, containerBorderColor };
      obj4.children = closure_2_14(YouScreenActivityTabContainer, obj5);
      obj3.page = closure_2_14(hasOwnProperty, obj4, activityTabIndex);
      items.push(obj3);
    }
    const obj6 = { id: "wishlist", label: null, page: null };
    const intl4 = util.intl;
    obj6.label = intl4.string(util.t["7lZ31J"]);
    obj6.page = closure_2_14(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(wishlistTabIndex, arg0, arg1);
      },
      children: callback5()
    }, wishlistTabIndex);
    items.push(obj6);
    return items;
  }, items8);
  let tmp4Result = tmp4(tmp2[58]);
  obj = { pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[28]).space.PX_24, items: memo, onPageChange: handleTabChange };
  segmentedControlState = tmp4Result.useSegmentedControlState(obj);
  tmp4Result = tmp4(tmp2[45]);
  const pagerFillHeight = tmp4Result.usePagerFillHeight();
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj5.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const obj15 = user(navigateToPremium[44]);
  const pagesHeightStyle = user(navigateToPremium[45]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  closure_33 = obj5.useRef(segmentedControlState.setActiveIndex);
  const items10 = [segmentedControlState];
  const effect1 = obj5.useEffect(() => {
    closure_33.current = segmentedControlState.setActiveIndex;
  }, items10);
  const tmp4Result1 = user(navigateToPremium[45]);
  const items11 = [initialTab, navigation, wishlistTabIndex, setActiveProfileTabSection];
  const focusEffect = user(navigateToPremium[33]).useFocusEffect(obj5.useCallback(() => {
    if (undefined !== initialTab) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        setActiveProfileTabSection(initialTab === UserProfileSections.WISHLIST ? UserProfileSections.WISHLIST : UserProfileSections.MAIN);
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
  }, items11));
  obj = { style, children: null };
  obj1 = { style: null, children: null };
  const items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  obj1.style = items12;
  obj2 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  const items13 = [c14(closure_17, obj2), , , ];
  obj3 = { ref, customStatusActivity, hasCustomProfileTheme: tmp10, style: null, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj7 };
  const items14 = [, ];
  ({ customStatusBubble: arr16[0], customStatusBubbleInset: arr16[1] } = tmp3);
  obj3.style = items14;
  items13[1] = c14(navigateToFriends(navigateToPremium[61]), obj3);
  obj4 = { style: null, children: null };
  const items15 = [, ];
  ({ primaryInfo: arr17[0], profileContent: arr17[1] } = tmp3);
  obj4.style = items15;
  obj5 = { user, pronouns: null, badges: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, themeType: null, showChevron: true };
  let pronouns;
  const tmp4Result2 = user(navigateToPremium[33]);
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  obj5.pronouns = pronouns;
  obj5.badges = arr;
  obj5.badgeContainerBackground = containerBackground;
  obj5.onPressDisplayName = callback;
  let intl = tmp4(tmp2[29]).intl;
  obj6 = { status: null };
  const tmpResult = navigateToFriends(navigateToPremium[62]);
  obj6.status = user(navigateToPremium[63]).getStatusLabel(stateFromStores);
  const tmp4Result3 = user(navigateToPremium[63]);
  let intl2 = tmp4(tmp2[29]).intl;
  obj5.displayNameAccessibilityHint = "" + intl.formatToPlainString(user(navigateToPremium[29]).t["er+FRD"], obj6) + ", " + intl2.string(user(navigateToPremium[29]).t.C6COaT);
  obj5.themeType = containerBackground.YOU_SCREEN;
  const items16 = [c14(tmpResult, obj5), ];
  obj7 = { navigateToProfileCustomization, hasBadges: arr.length > 0, isProfileLoaded: null != tmp6 };
  items16[1] = c14(activityTabIndex, obj7);
  obj4.children = items16;
  items13[2] = shouldShowExpiringTrialOfferCard(navigation, obj4);
  obj8 = { style: { flex: 1 }, onLayout: callback1, children: null };
  obj9 = { style: tmp3.profileTablist, children: null };
  obj10 = { state: segmentedControlState, variant: null };
  let str;
  if (null != primaryColor) {
    str = "gradient-background";
  }
  obj11 = { children: null };
  obj10.variant = str;
  obj9.children = c14(user(navigateToPremium[64]).Tabs, obj10);
  const items17 = [c14(navigation, obj9), ];
  obj12 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: tmp40(tmp4(tmp2[65]).SegmentedControlPages, { state: segmentedControlState }) };
  items17[1] = c14(navigateToFriends(navigateToPremium[59]).View, obj12);
  obj8.children = items17;
  items13[3] = shouldShowExpiringTrialOfferCard(navigation, obj8);
  obj1.children = items13;
  obj11.children = shouldShowExpiringTrialOfferCard(navigation, obj1);
  obj.children = c14(user(navigateToPremium[60]).LayerScope, obj11);
  return c14(navigateToFriends(navigateToPremium[59]).View, obj);
};