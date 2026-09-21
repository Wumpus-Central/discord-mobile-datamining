// === Module 17267: YouScreenUserProfileContent ===

// Module 17267 (YouScreenUserProfileContent)
import util from "util" /* 1115 */;
import PlatformUtils from "PlatformUtils" /* 1364 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8510 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8525 */;
import FormDividerDefault from "FormDivider" /* 8877 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 8945 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 11383 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11473 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 13291 */;
import UserProfileNoteDefault from "UserProfileNote" /* 13344 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 13357 */;
import VibegrationsCustomWidgetAddOptionDefault from "VibegrationsCustomWidgetAddOption" /* 13358 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 13369 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 13384 */;
import UserProfileConnections from "UserProfileConnections" /* 13390 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 13395 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 13401 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 16009 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 16708 */;
import you_tracking_Tracking from "you/tracking/Tracking" /* 17260 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 17272 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 17274 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5496 */;
import UserProfileStore from "UserProfileStore" /* 7857 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
function YouAvatar(arg0) {
  const callback = noop.useCallback(() => {
    const result = you_tracking_Tracking.trackYouTabAvatarPress();
    const result1 = showYouAccountActionSheet.showYouAccountActionSheet();
  }, []);
  const isAndroidResult = PlatformUtils.isAndroid();
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.onPress = callback;
  obj2.importantForAccessibility = "no-hide-descendants";
  obj2.accessibilityElementsHidden = isAndroidResult;
  obj2.accessible = !isAndroidResult;
  return closure_1_14(UserProfileAvatarDefault, obj2);
}
function YouScreenWidgetsBoardContainer(arg0) {
  ({ userId, activeSection, containerBackground, containerBorderColor } = arg0);
  const items = [UserProfileSharedStylesDefault().card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
  const obj = { style: UserProfileSharedStylesDefault().profileContent, children: null };
  const items1 = [closure_1_14(UserProfileWidgetsBoardEditNoticeDefault, {}), closure_1_14(VibegrationsCustomWidgetAddOptionDefault, {}), closure_1_14(UserProfileWidgetsBoardDefault, { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: items })];
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
  let trackUserProfileAction;
  let first;
  _slicedToArray = undefined;
  const tmp3 = trackUserProfileAction(first[15])();
  trackUserProfileAction = navigateToProfileCustomization(first[20]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = noop.useRef(null);
  let obj = navigateToProfileCustomization(first[20]);
  const isDisplayNameStylesFlywheelSettersEnabled = navigateToProfileCustomization(first[21]).useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  const obj3 = navigateToProfileCustomization(first[21]);
  const isBadgeManagementEnabled = navigateToProfileCustomization(first[22]).useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  const obj4 = navigateToProfileCustomization(first[22]);
  const tmp8 = trackUserProfileAction(first[23])();
  const customTypingIndicatorConfig = navigateToProfileCustomization(first[24]).useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp10 = useIsContentShown(navigateToProfileCustomization(first[25]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  let tmp11 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp11 = isDisplayNameStylesFlywheelSettersEnabled;
  }
  if (tmp11) {
    tmp11 = !tmp10;
  }
  const items = [];
  if (tmp11) {
    items.push(tmp4(tmp2[25]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  let tmp13 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp13 = isBadgeManagementEnabled;
  }
  if (tmp13) {
    tmp13 = tmp8;
  }
  if (tmp13) {
    items.push(tmp4(tmp2[25]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  if (isProfileLoaded) {
    isProfileLoaded = canSet;
  }
  if (isProfileLoaded) {
    isProfileLoaded = "profile" === entryPoint;
  }
  if (isProfileLoaded) {
    isProfileLoaded = !tmp10;
  }
  if (isProfileLoaded) {
    items.push(tmp4(tmp2[25]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const obj5 = navigateToProfileCustomization(first[24]);
  const tmp16 = _slicedToArray(navigateToProfileCustomization(first[26]).useSelectedDismissibleContent(items), 2);
  first = tmp16[0];
  _slicedToArray = tmp18;
  const items1 = [navigateToProfileCustomization, trackUserProfileAction, first, tmp16[1]];
  const items2 = [navigateToProfileCustomization];
  const callback = noop.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const result = you_tracking_Tracking.trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    if (null != first) {
      closure_3(ContentDismissActionType.TAKE_ACTION);
    }
  }, items1);
  const obj6 = { children: null };
  const callback1 = noop.useCallback(() => {
    navigateToProfileCustomization(constants.BADGES);
  }, items2);
  const obj7 = { style: tmp3.primaryButtons, secondaryButton: null };
  const tmp4Result = navigateToProfileCustomization(first[26]);
  const obj8 = { ref, variant: "primary", icon: null, text: null, onPress: null, grow: true };
  const tmpResult = trackUserProfileAction(first[27]);
  obj8.icon = closure_14(navigateToProfileCustomization(first[29]).PencilIcon, { size: "sm", color: trackUserProfileAction(first[30]).colors.WHITE });
  const intl = tmp4(tmp2[31]).intl;
  obj8.text = intl.string(navigateToProfileCustomization(first[31]).t.AAjhgi);
  obj8.onPress = callback;
  obj7.secondaryButton = closure_14(navigateToProfileCustomization(first[28]).Button, obj8);
  const items3 = [closure_14(tmpResult, obj7), , , ];
  const obj9 = { size: "sm", color: trackUserProfileAction(first[30]).colors.WHITE };
  items3[1] = closure_14(trackUserProfileAction(first[32]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[25]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp16[1] });
  const obj10 = { targetRef: ref, visible: first === navigateToProfileCustomization(first[25]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp16[1] };
  items3[2] = closure_14(trackUserProfileAction(first[33]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[25]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp16[1], onTryItOut: callback1 });
  const obj11 = { targetRef: ref, visible: first === navigateToProfileCustomization(first[25]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp16[1], onTryItOut: callback1 };
  items3[3] = closure_14(trackUserProfileAction(first[34]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[25]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp16[1] });
  obj6.children = items3;
  return closure_15(closure_16, obj6);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const useIsContentShown = fn(2033).useIsContentShown;
let UserProfileSections = fn(8452).UserProfileSections;
const UserProfileThemeTypes = fn(7453).UserProfileThemeTypes;
const ContentDismissActionType = fn(2038).ContentDismissActionType;
let closure_13 = fn(11463).UserProfileEditAutoFocusElement;
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
  const navigation = user(navigateToPremium[35]).useNavigation();
  let obj = user(navigateToPremium[35]);
  const trackUserProfileAction = user(navigateToPremium[20]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp6 = navigateToFriends(navigateToPremium[36])(user.id);
  const displayProfile = tmp6;
  let obj2 = user(navigateToPremium[20]);
  const customStatusActivity = user(navigateToPremium[37]).useCustomStatusActivity();
  let obj3 = user(navigateToPremium[37]);
  let tmp8 = navigateToFriends(navigateToPremium[38])(tmp6);
  let items = [displayProfile];
  const stateFromStores = user(navigateToPremium[39]).useStateFromStores(items, () => displayProfile.getStatus());
  const tmp10 = navigateToFriends(navigateToPremium[40])({ user, displayProfile: tmp6 });
  const primaryColor = tmp10.primaryColor;
  UserProfileSections = tmp11;
  ({ theme, secondaryColor } = tmp10);
  let obj4 = user(navigateToPremium[39]);
  const userProfileColors = user(navigateToPremium[41]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const containerBorderColor = userProfileColors.containerBorderColor;
  ({ avatarBackground, statusBackground } = userProfileColors);
  let items1 = [trackUserProfileAction];
  let obj5 = user(navigateToPremium[41]);
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const result = showYouAccountActionSheet.showYouAccountActionSheet();
  }, items1);
  const ref = initialTab.useRef(null);
  const enabled = user(navigateToPremium[42]).useVirtualCurrencyMobileEnabled().enabled;
  let obj7 = user(navigateToPremium[42]);
  let tmp15 = navigateToShop;
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  c14 = tmp17;
  const tmp16 = navigateToShop(initialTab.useState(null), 2);
  const shouldShowExpiringTrialOfferCard = user(navigateToPremium[43]).useShouldShowExpiringTrialOfferCard();
  let obj9 = user(navigateToPremium[43]);
  let items2 = [customStatusActivity];
  const stateFromStores1 = user(navigateToPremium[39]).useStateFromStores(items2, () => UserProfileStore.getFirstWishlistId(user.id));
  const obj10 = user(navigateToPremium[39]);
  const displayableBoardWidgets = user(navigateToPremium[44]).useDisplayableBoardWidgets(user.id);
  const obj11 = user(navigateToPremium[44]);
  const isMobileGameCollectionExperimentEnabled = user(navigateToPremium[45]).useIsMobileGameCollectionExperimentEnabled("YouScreenUserProfileContent");
  const obj12 = user(navigateToPremium[45]);
  const tmp21 = displayableBoardWidgets.length > 0 || user(navigateToPremium[46]).useCanConjureVibegrationsCustomWidget("YouScreenUserProfileContent", isMobileGameCollectionExperimentEnabled);
  closure_17 = tmp21;
  const obj13 = user(navigateToPremium[46]);
  const isRecentActivityMobileEnabled = user(navigateToPremium[47]).useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  let tmp4Result = user(navigateToPremium[47]);
  const profileTabIndices = user(navigateToPremium[48]).useProfileTabIndices(tmp21, isRecentActivityMobileEnabled, true);
  const boardTabIndex = profileTabIndices.boardTabIndex;
  const activityTabIndex = profileTabIndices.activityTabIndex;
  const wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp15Result = tmp15(initialTab.useState(0), 2);
  const pageWidth = tmp15Result[0];
  closure_23 = tmp15Result[1];
  const callback1 = obj6.useCallback((nativeEvent) => {
    closure_23(nativeEvent.nativeEvent.layout.width);
  }, []);
  const tmp4Result9 = user(navigateToPremium[48]);
  const pageHeights = user(navigateToPremium[49]).usePageHeights();
  const handlePageContentSize = pageHeights.handlePageContentSize;
  const items3 = [trackUserProfileAction];
  const callback2 = obj6.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
  }, items3);
  const tmp4Result10 = user(navigateToPremium[49]);
  const profileSectionTabs = user(navigateToPremium[48]).useProfileSectionTabs({ initialUserProfileSection: initialTab, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback2 });
  const activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  const setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  const restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  const isVisible = tmp30;
  const items4 = [customStatusActivity, tmp17];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  const callback3 = obj6.useCallback(() => {
    let tmp2 = null;
    if (null == customStatusActivity) {
      tmp2 = getRandomCustomStatusPromptDefault();
    }
    _undefined(tmp2);
  }, items4);
  const items5 = [callback3];
  const effect = obj6.useEffect(() => {
    setImmediate(() => {
      callback3();
    });
  }, items5);
  let labelResult;
  if (null != obj8) {
    labelResult = obj8.label();
  }
  const items6 = [containerBackground, containerBorderColor, tmp3, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, null != primaryColor, enabled, user, tmp6, navigateToFriends];
  callback4 = obj6.useCallback(() => {
    const items = [closure_5.card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
    const obj2 = { style: null, children: null };
    const items1 = [, ];
    ({ cards: arr2[0], profileContent: arr2[1] } = closure_5);
    obj2.style = items1;
    const items2 = [closure_2_14(YouExpiringTrialOfferCardDefault, { navigateToPremium, style: items }), , , , , , , , , ];
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    if (!shouldShowExpiringTrialOfferCard) {
      const obj4 = { navigateToPremium, navigateToShop, hasCustomProfileTheme };
      tmp3Result = closure_2_14(UserProfileDismissibleUpsellsDefault, obj4);
    }
    items2[1] = tmp3Result;
    let tmp3Result2 = enabled;
    if (enabled) {
      tmp3Result2 = closure_2_14(BalanceWidgetMenuDefault, {});
    }
    items2[2] = tmp3Result2;
    items2[3] = closure_2_14(UserProfileActivityDefault, { user, currentUser: user, style: items });
    items2[4] = closure_2_14(UserProfileAboutMeCardDefault, { userId: user.id, displayProfile });
    items2[5] = closure_2_14(FormDividerDefault, {});
    items2[6] = closure_2_14(UserProfileConnections.UserProfileAccountConnectionsCard, { userId: user.id });
    items2[7] = closure_2_14(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, { userId: user.id });
    items2[8] = closure_2_14(UserProfileYourFriendsCardDefault, { userId: user.id, navigateToFriends });
    items2[9] = closure_2_14(UserProfileNoteDefault, { userId: user.id });
    obj2.children = items2;
    return __initData(timestampProducer, obj2);
  }, items6);
  const items7 = [tmp3.profileContent, stateFromStores1, pageWidth, activeProfileTabSection === UserProfileSections.WISHLIST, user.id];
  callback5 = obj6.useCallback(() => {
    const obj = { style: closure_5.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp4Result = closure_2_14(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp4 = closure_2_14;
    } else {
      tmp4 = closure_2_14;
      const obj2 = { wishlistId: stateFromStores1, containerWidth: null, isVisible: null };
      let tmp8;
      if (first > 0) {
        tmp8 = first;
      }
      obj2.containerWidth = tmp8;
      obj2.isVisible = isVisible;
      tmp4Result = tmp4(UserProfileWishlistGridDefault, obj2);
    }
    const items = [tmp4Result, ];
    const obj3 = { userId: user.id, wishlistId: stateFromStores1, containerWidth: null };
    let tmp15;
    if (first > 0) {
      tmp15 = first;
    }
    obj3.containerWidth = tmp15;
    items[1] = tmp4(UserProfileWishlistSuggestionsGridDefault, obj3);
    obj.children = items;
    return __initData(timestampProducer, obj);
  }, items7);
  const items8 = [callback4, callback5, handlePageContentSize, tmp21, isRecentActivityMobileEnabled, boardTabIndex, activityTabIndex, wishlistTabIndex, user, activeProfileTabSection, containerBackground, containerBorderColor];
  const memo = obj6.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = closure_2_14(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    });
    const items = [obj];
    if (closure_17) {
      const obj3 = { id: "board", label: null, page: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t.laViwx);
      const obj4 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(boardTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj5 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      obj4.children = closure_2_14(YouScreenWidgetsBoardContainer, obj5);
      obj3.page = closure_2_14(hasOwnProperty, obj4, boardTabIndex);
      items.push(obj3);
    }
    if (isRecentActivityMobileEnabled) {
      const obj6 = { id: "activity", label: null, page: null };
      const intl3 = util.intl;
      obj6.label = intl3.string(util.t.chq59f);
      const obj7 = {
        scrollEnabled: false,
        onContentSizeChange(arg0, arg1) {
            return handlePageContentSize(activityTabIndex, arg0, arg1);
          },
        children: null
      };
      const obj8 = { user, containerBackground, containerBorderColor };
      obj7.children = closure_2_14(YouScreenActivityTabContainer, obj8);
      obj6.page = closure_2_14(hasOwnProperty, obj7, activityTabIndex);
      items.push(obj6);
    }
    const obj9 = { id: "wishlist", label: null, page: null };
    const intl4 = util.intl;
    obj9.label = intl4.string(util.t["7lZ31J"]);
    const obj2 = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(0, arg0, arg1);
      },
      children: callback4()
    };
    obj9.page = closure_2_14(hasOwnProperty, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return handlePageContentSize(wishlistTabIndex, arg0, arg1);
      },
      children: callback5()
    }, wishlistTabIndex);
    items.push(obj9);
    return items;
  }, items8);
  const tmp4Result11 = user(navigateToPremium[48]);
  const tmp4Result12 = user(navigateToPremium[62]);
  segmentedControlState = tmp4Result12.useSegmentedControlState({ pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[30]).space.PX_24, items: memo, onPageChange: handleTabChange });
  const obj14 = { pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[30]).space.PX_24, items: memo, onPageChange: handleTabChange };
  const pagerFillHeight = user(navigateToPremium[49]).usePagerFillHeight();
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const tmp4Result13 = user(navigateToPremium[49]);
  const pagesHeightStyle = user(navigateToPremium[49]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  closure_33 = obj6.useRef(segmentedControlState.setActiveIndex);
  const items10 = [segmentedControlState];
  const effect1 = obj6.useEffect(() => {
    closure_33.current = segmentedControlState.setActiveIndex;
  }, items10);
  const tmp4Result14 = user(navigateToPremium[49]);
  const items11 = [initialTab, navigation, wishlistTabIndex, setActiveProfileTabSection];
  const focusEffect = user(navigateToPremium[35]).useFocusEffect(obj6.useCallback(() => {
    if (undefined !== initialTab) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        setActiveProfileTabSection(initialTab === UserProfileSections.WISHLIST ? UserProfileSections.WISHLIST : UserProfileSections.MAIN);
        ref.current(num, false, true);
        navigation.setParams({ initialTab: "r" });
      }, 80);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
      if (!navigation.isFocused()) {
        const parent = navigation.getParent();
        let isFocusedResult;
        if (parent != null) {
          isFocusedResult = parent.isFocused();
        }
        if (isFocusedResult) {
          const obj2 = { initialTab: UserProfileSections.MAIN };
          navigation.setParams(obj2);
        }
      }
    };
  }, items11));
  const obj15 = { style, children: null };
  const obj16 = { style: null, children: null };
  const items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  obj16.style = items12;
  const items13 = [c14(closure_17, { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag }), , , ];
  const obj18 = { ref, customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  const items14 = [, ];
  ({ customStatusBubble: arr16[0], customStatusBubbleInset: arr16[1] } = tmp3);
  obj18.style = items14;
  items13[1] = c14(navigateToFriends(navigateToPremium[65]), obj18);
  const obj19 = { style: null, children: null };
  const items15 = [, ];
  ({ primaryInfo: arr17[0], profileContent: arr17[1] } = tmp3);
  obj19.style = items15;
  const obj20 = { user, pronouns: null, badges: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, themeType: null, showChevron: true, canOpenBadgeDirectory: true };
  let pronouns;
  const obj17 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  const tmp4Result15 = user(navigateToPremium[35]);
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  obj20.pronouns = pronouns;
  obj20.badges = tmp8;
  obj20.badgeContainerBackground = containerBackground;
  obj20.onPressDisplayName = callback;
  let intl = tmp4(tmp2[31]).intl;
  const obj21 = { status: null };
  const tmpResult = navigateToFriends(navigateToPremium[66]);
  obj21.status = user(navigateToPremium[67]).getStatusLabel(stateFromStores);
  const tmp4Result16 = user(navigateToPremium[67]);
  let intl2 = tmp4(tmp2[31]).intl;
  obj20.displayNameAccessibilityHint = "" + intl.formatToPlainString(user(navigateToPremium[31]).t["er+FRD"], obj21) + ", " + intl2.string(user(navigateToPremium[31]).t.C6COaT);
  obj20.themeType = containerBackground.YOU_SCREEN;
  const items16 = [c14(tmpResult, obj20), c14(activityTabIndex, { navigateToProfileCustomization, isProfileLoaded: null != tmp6 })];
  obj19.children = items16;
  items13[2] = shouldShowExpiringTrialOfferCard(navigation, obj19);
  const obj23 = { style: { flex: 1 }, onLayout: callback1, children: null };
  const obj24 = { style: tmp3.profileTablist, children: null };
  const obj25 = { state: segmentedControlState, variant: null };
  let str;
  if (null != primaryColor) {
    str = "overlay";
  }
  const obj26 = { children: null };
  obj25.variant = str;
  obj24.children = c14(user(navigateToPremium[68]).Tabs, obj25);
  const items17 = [c14(navigation, obj24), ];
  const formatToPlainStringResult = intl.formatToPlainString(user(navigateToPremium[31]).t["er+FRD"], obj21);
  const obj22 = { navigateToProfileCustomization, isProfileLoaded: null != tmp6 };
  items17[1] = c14(navigateToFriends(navigateToPremium[63]).View, { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: c14(user(navigateToPremium[69]).SegmentedControlPages, { state: segmentedControlState }) });
  obj23.children = items17;
  items13[3] = shouldShowExpiringTrialOfferCard(navigation, obj23);
  obj16.children = items13;
  obj26.children = shouldShowExpiringTrialOfferCard(navigation, obj16);
  obj15.children = c14(user(navigateToPremium[64]).LayerScope, obj26);
  return c14(navigateToFriends(navigateToPremium[63]).View, obj15);
};