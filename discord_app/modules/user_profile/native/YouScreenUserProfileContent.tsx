// === Module 18863: YouScreenUserProfileContent ===

// Module 18863 (YouScreenUserProfileContent)
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1375 */;
import dismissible_content from "dismissible_content" /* 4847 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7569 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8814 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8828 */;
import tracking_Tracking from "tracking/Tracking" /* 9677 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 11399 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 11412 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 11452 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11491 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13716 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 14838 */;
import UserProfileNoteDefault from "UserProfileNote" /* 14903 */;
import useBadgeDirectoryNuxCoachmarkVariant from "useBadgeDirectoryNuxCoachmarkVariant" /* 14917 */;
import useBadgeDirectoryNuxEntryPoint from "useBadgeDirectoryNuxEntryPoint" /* 14920 */;
import BadgeDirectoryNuxCoachmarkDefault from "BadgeDirectoryNuxCoachmark" /* 14921 */;
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice" /* 14942 */;
import ConjureCustomWidgetAddOptionDefault from "ConjureCustomWidgetAddOption" /* 14943 */;
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard" /* 14946 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 14969 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 14986 */;
import UserProfileConnections from "UserProfileConnections" /* 14989 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 14994 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 15000 */;
import BalanceWidgetMenuDefault from "BalanceWidgetMenu" /* 17694 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 18430 */;
import useOwnsAnyBadgeDefault from "useOwnsAnyBadge" /* 18870 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 18872 */;
import CheckpointProfileEntrypointDefault from "CheckpointProfileEntrypoint" /* 18874 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 18878 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6570 */;
import UserProfileStore from "UserProfileStore" /* 7772 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;

require = fn;
function YouAvatar(arg0) {
  const callback = noop.useCallback(() => {
    const result = tracking_Tracking.trackYouTabAvatarPress();
    const result1 = showYouAccountActionSheet.showYouAccountActionSheet();
  }, []);
  const isAndroidResult = PlatformUtils.isAndroid();
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.onPress = callback;
  obj2.importantForAccessibility = "no-hide-descendants";
  obj2.accessibilityElementsHidden = isAndroidResult;
  obj2.accessible = !isAndroidResult;
  return map1(UserProfileAvatarDefault, obj2);
}
function YouScreenWidgetsBoardContainer(arg0) {
  ({ userId, activeSection, containerBackground, containerBorderColor } = arg0);
  const items = [UserProfileSharedStylesDefault().card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
  const obj = { style: UserProfileSharedStylesDefault().profileContent, children: null };
  const items1 = [map1(UserProfileWidgetsBoardEditNoticeDefault, {}), map1(ConjureCustomWidgetAddOptionDefault, {}), map1(UserProfileWidgetsBoardDefault, { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: items })];
  obj.children = items1;
  return closure_1_14(View, obj);
}
function YouScreenActivityTabContainer(user) {
  user = user.user;
  ({ containerBackground, containerBorderColor } = user);
  const items = [UserProfileSharedStylesDefault().card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
  const obj = { style: null, children: map1(UserProfileActivityTabDefault, { user, currentUser: user, cardStyle: items }) };
  const items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = UserProfileSharedStylesDefault());
  obj.style = items1;
  return map1(View, obj);
}
function EditSection(navigateToProfileCustomization) {
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  ({ isProfileLoaded, visibleContent, markAsDismissed } = navigateToProfileCustomization);
  let trackUserProfileAction;
  noop = undefined;
  const tmp3 = markAsDismissed(trackUserProfileAction[15])();
  const token = navigateToProfileCustomization(trackUserProfileAction[20]).useToken(markAsDismissed(trackUserProfileAction[21]).colors.WHITE);
  let obj = navigateToProfileCustomization(trackUserProfileAction[20]);
  trackUserProfileAction = navigateToProfileCustomization(trackUserProfileAction[22]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = noop.useRef(null);
  const tmp7 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[23]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
  closure_3 = tmp7;
  const tmp8 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[23]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
  noop = tmp8;
  const tmp9 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[23]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
  closure_5 = tmp9;
  const items = [navigateToProfileCustomization, trackUserProfileAction, tmp7, tmp8, tmp9, markAsDismissed];
  const items1 = [navigateToProfileCustomization];
  const callback = noop.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const result = tracking_Tracking.trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    let tmp4 = closure_3;
    if (!closure_3) {
      tmp4 = closure_4;
    }
    if (!tmp4) {
      tmp4 = closure_5;
    }
    if (tmp4) {
      markAsDismissed(ContentDismissActionType.TAKE_ACTION);
    }
  }, items);
  const callback1 = noop.useCallback(() => {
    navigateToProfileCustomization(constants.BADGES);
  }, items1);
  const obj3 = { style: tmp3.primaryButtons, secondaryButton: null };
  const obj2 = navigateToProfileCustomization(trackUserProfileAction[22]);
  const obj4 = { ref, variant: "primary", icon: null, text: null, onPress: null, accessibilityValue: null, grow: true };
  if (isProfileLoaded) {
    const obj5 = { size: "sm", color: token };
    let tmp14Result = closure_13(tmp4(tmp2[26]).PencilIcon, obj5);
  } else {
    const obj6 = { size: "small", color: token, accessible: false };
    tmp14Result = closure_13(tmp4(tmp2[27]).ActivityIndicator, obj6);
  }
  obj4.icon = tmp14Result;
  const intl = tmp4(tmp2[28]).intl;
  obj4.text = intl.string(navigateToProfileCustomization(trackUserProfileAction[28]).t.AAjhgi);
  obj4.onPress = callback;
  let tmp17;
  if (!isProfileLoaded) {
    const obj7 = { text: null };
    const intl2 = tmp4(tmp2[28]).intl;
    obj7.text = intl2.string(tmp4(tmp2[28]).t.ZTNur7);
    tmp17 = obj7;
  }
  const obj8 = { children: null };
  obj4.accessibilityValue = tmp17;
  obj3.secondaryButton = closure_13(navigateToProfileCustomization(trackUserProfileAction[25]).Button, obj4);
  const items2 = [closure_13(markAsDismissed(trackUserProfileAction[24]), obj3), closure_13(markAsDismissed(trackUserProfileAction[29]), { targetRef: ref, visible: tmp7, markAsDismissed }), closure_13(markAsDismissed(trackUserProfileAction[30]), { targetRef: ref, visible: tmp8, markAsDismissed, onTryItOut: callback1 }), closure_13(markAsDismissed(trackUserProfileAction[31]), { targetRef: ref, visible: tmp9, markAsDismissed })];
  obj8.children = items2;
  return closure_14(closure_15, obj8);
}
function YouScreenPrimaryInfoSection(navigateToProfileCustomization) {
  ({ isProfileLoaded, primaryInfoProps } = navigateToProfileCustomization);
  const id = primaryInfoProps.user.id;
  const tmp3 = UserProfileSharedStylesDefault();
  const isBadgeManagementEnabled = BadgeManagementExperiment.useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  const tmp6 = useOwnsAnyBadgeDefault();
  const badgeDirectoryNuxCoachmarkVariant = useBadgeDirectoryNuxCoachmarkVariant.useBadgeDirectoryNuxCoachmarkVariant({ userId: id, enabled: true, location: "YouScreenUserProfileContent" });
  const customTypingIndicatorConfig = CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp9 = useIsContentShown(dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  let tmp10 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp10 = !tmp9;
  }
  const items = [];
  if (tmp10) {
    items.push(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  let tmp12 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp12 = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  }
  if (tmp12) {
    items.push(dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER);
  }
  let tmp15 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp15 = isBadgeManagementEnabled;
  }
  if (tmp15) {
    tmp15 = tmp6;
  }
  if (tmp15) {
    tmp15 = !badgeDirectoryNuxCoachmarkVariant.isPending;
  }
  if (tmp15) {
    items.push(dismissible_content.DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  let tmp17 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp17 = canSet;
  }
  if (tmp17) {
    tmp17 = "profile" === entryPoint;
  }
  if (tmp17) {
    tmp17 = !tmp9;
  }
  if (tmp17) {
    tmp17 = !badgeDirectoryNuxCoachmarkVariant.isPending;
  }
  if (tmp17) {
    items.push(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  const tmp4Result = useSelectedDismissibleContent;
  [tmp20, tmp21] = useSelectedDismissibleContent.useSelectedDismissibleContent(items);
  const tmp22 = tmp20 === dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
  const tmp19 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(items), 2);
  const badgeDirectoryNuxEntryPoint = useBadgeDirectoryNuxEntryPoint.useBadgeDirectoryNuxEntryPoint(tmp22, tmp21);
  const entryPointRef = badgeDirectoryNuxEntryPoint.entryPointRef;
  const obj4 = { style: null, children: null };
  const items1 = [, ];
  ({ primaryInfo: arr2[0], profileContent: arr2[1] } = tmp3);
  obj4.style = items1;
  const obj5 = {};
  const tmp4Result2 = useBadgeDirectoryNuxEntryPoint;
  const merged = Object.assign(primaryInfoProps);
  obj5.badgeDirectoryEntryPointRef = entryPointRef;
  obj5.onOpenBadgeDirectory = badgeDirectoryNuxEntryPoint.onOpenBadgeDirectory;
  const items2 = [map1(UserProfilePrimaryInfoDefault, obj5), , ];
  let tmp26Result = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  if (tmp26Result) {
    const obj6 = { targetRef: entryPointRef, userId: id, variantProps: badgeDirectoryNuxCoachmarkVariant.variantProps, visible: tmp22, markAsDismissed: tmp21 };
    tmp26Result = map1(BadgeDirectoryNuxCoachmarkDefault, obj6);
  }
  items2[1] = tmp26Result;
  items2[2] = map1(EditSection, { navigateToProfileCustomization: navigateToProfileCustomization.navigateToProfileCustomization, isProfileLoaded, visibleContent: tmp20, markAsDismissed: tmp21 });
  obj4.children = items2;
  return closure_1_14(View, obj4);
}
const View = fn(17).View;
const useIsContentShown = fn(4855).useIsContentShown;
const UserProfileSections = fn(8754).UserProfileSections;
let UserProfileThemeTypes = fn(7377).UserProfileThemeTypes;
const ContentDismissActionType = fn(4860).ContentDismissActionType;
let closure_12 = fn(16431).UserProfileEditAutoFocusElement;
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
  ({ style, scrollViewRef, scrollPosition, navigateToProfileCustomization } = user);
  if (flag === undefined) {
    flag = true;
  }
  let pageWidth;
  closure_21 = undefined;
  let activeProfileTabSection;
  let setActiveProfileTabSection;
  let restoreActiveIndex;
  let isVisible;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  const tmp3 = navigateToFriends(navigateToPremium[15])();
  closure_5 = tmp3;
  const navigation = user(navigateToPremium[40]).useNavigation();
  let obj = user(navigateToPremium[40]);
  const trackUserProfileAction = user(navigateToPremium[22]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp6 = navigateToFriends(navigateToPremium[41])(user.id);
  const displayProfile = tmp6;
  let obj2 = user(navigateToPremium[22]);
  const customStatusActivity = user(navigateToPremium[42]).useCustomStatusActivity();
  let obj3 = user(navigateToPremium[42]);
  let tmp8 = navigateToFriends(navigateToPremium[43])(tmp6);
  let items1 = [trackUserProfileAction];
  const stateFromStores = user(navigateToPremium[44]).useStateFromStores(items1, () => trackUserProfileAction.getStatus());
  const tmp10 = navigateToFriends(navigateToPremium[45])({ user, displayProfile: tmp6 });
  const primaryColor = tmp10.primaryColor;
  UserProfileThemeTypes = tmp11;
  ({ theme, secondaryColor } = tmp10);
  let obj4 = user(navigateToPremium[44]);
  const userProfileColors = user(navigateToPremium[46]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const containerBorderColor = userProfileColors.containerBorderColor;
  ({ avatarBackground, statusBackground } = userProfileColors);
  let items2 = [trackUserProfileAction];
  let obj5 = user(navigateToPremium[46]);
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const result = showYouAccountActionSheet.showYouAccountActionSheet();
  }, items2);
  const ref = initialTab.useRef(null);
  const enabled = user(navigateToPremium[47]).useVirtualCurrencyMobileEnabled().enabled;
  const obj7 = user(navigateToPremium[47]);
  let tmp15 = navigateToShop;
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  c14 = tmp17;
  const tmp16 = navigateToShop(initialTab.useState(null), 2);
  const shouldShowExpiringTrialOfferCard = user(navigateToPremium[48]).useShouldShowExpiringTrialOfferCard();
  const obj9 = user(navigateToPremium[48]);
  const items3 = [displayProfile];
  const stateFromStores1 = user(navigateToPremium[44]).useStateFromStores(items3, () => UserProfileStore.getFirstWishlistId(user.id));
  const obj10 = user(navigateToPremium[44]);
  const displayableBoardWidgets = user(navigateToPremium[49]).useDisplayableBoardWidgets(user.id);
  const obj11 = user(navigateToPremium[49]);
  const tmp20 = displayableBoardWidgets.length > 0 || user(navigateToPremium[50]).useCanConjureCustomWidget("YouScreenUserProfileContent");
  closure_17 = tmp20;
  const obj12 = user(navigateToPremium[50]);
  const isRecentActivityMobileEnabled = user(navigateToPremium[51]).useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  let tmp4Result = user(navigateToPremium[51]);
  const profileTabIndices = user(navigateToPremium[52]).useProfileTabIndices(tmp20, isRecentActivityMobileEnabled, true);
  ({ boardTabIndex, activityTabIndex, wishlistTabIndex } = profileTabIndices);
  let MAIN = initialTab;
  if (null != initialTab) {
    const obj13 = { wishlistTabIndex, boardTabIndex, activityTabIndex };
    MAIN = initialTab;
    if (tmp4Result9.getProfileTabSectionIndex(initialTab, obj13) < 0) {
      MAIN = customStatusActivity.MAIN;
    }
    tmp4Result9 = tmp4(tmp2[52]);
  }
  const tmp15Result = tmp15(initialTab.useState(0), 2);
  pageWidth = tmp15Result[0];
  closure_21 = tmp15Result[1];
  const items4 = [trackUserProfileAction, navigation, initialTab];
  const callback1 = obj6.useCallback((nativeEvent) => {
    closure_21(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback2 = obj6.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (section !== initialTab) {
      const obj2 = { initialTab: section };
      navigation.setParams(obj2);
    }
    const obj = { action: "PRESS_SECTION", section };
  }, items4);
  const tmp4Result8 = user(navigateToPremium[52]);
  const profileSectionTabs = user(navigateToPremium[52]).useProfileSectionTabs({ initialUserProfileSection: MAIN, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback2 });
  activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp29;
  const items5 = [customStatusActivity, tmp17];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback3 = obj6.useCallback(() => {
    let tmp2 = null;
    if (null == customStatusActivity) {
      tmp2 = getRandomCustomStatusPromptDefault();
    }
    _undefined(tmp2);
  }, items5);
  const items6 = [callback3];
  const effect = obj6.useEffect(() => {
    setImmediate(() => {
      callback3();
    });
  }, items6);
  let labelResult;
  if (null != obj8) {
    labelResult = obj8.label();
  }
  const items7 = [containerBackground, containerBorderColor, tmp3, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, null != primaryColor, enabled, user, tmp6, navigateToFriends];
  callback4 = obj6.useCallback(() => {
    const items = [closure_5.card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
    const obj2 = { style: null, children: null };
    const items1 = [, ];
    ({ cards: arr2[0], profileContent: arr2[1] } = closure_5);
    obj2.style = items1;
    const items2 = [map1(YouExpiringTrialOfferCardDefault, { navigateToPremium, style: items }), , , , , , , , , ];
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    if (!shouldShowExpiringTrialOfferCard) {
      const obj4 = { navigateToPremium, navigateToShop, hasCustomProfileTheme };
      tmp3Result = map1(UserProfileDismissibleUpsellsDefault, obj4);
    }
    items2[1] = tmp3Result;
    items2[2] = map1(CheckpointProfileEntrypointDefault, {});
    let tmp3Result2 = enabled;
    if (enabled) {
      tmp3Result2 = map1(BalanceWidgetMenuDefault, {});
    }
    items2[3] = tmp3Result2;
    items2[4] = map1(UserProfileActivityDefault, { user, currentUser: user, style: items });
    items2[5] = map1(UserProfileAboutMeCardDefault, { userId: user.id, displayProfile });
    items2[6] = map1(UserProfileConnections.UserProfileAccountConnectionsCard, { userId: user.id });
    items2[7] = map1(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, { userId: user.id });
    items2[8] = map1(UserProfileYourFriendsCardDefault, { userId: user.id, navigateToFriends });
    items2[9] = map1(UserProfileNoteDefault, { userId: user.id });
    obj2.children = items2;
    return closure_2_14(View, obj2);
  }, items7);
  const items8 = [tmp3.profileContent, stateFromStores1, pageWidth, activeProfileTabSection === customStatusActivity.WISHLIST, user.id];
  callback5 = obj6.useCallback(() => {
    const obj = { style: closure_5.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp4Result = map1(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp4 = map1;
    } else {
      tmp4 = map1;
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
    return closure_2_14(View, obj);
  }, items8);
  const items9 = [callback4, callback5, tmp20, isRecentActivityMobileEnabled, user, activeProfileTabSection, containerBackground, containerBorderColor];
  const memo = obj6.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = callback4();
    const items = [obj];
    if (closure_17) {
      const obj2 = { id: "board", label: null, page: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.laViwx);
      const obj3 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      obj2.page = map1(YouScreenWidgetsBoardContainer, obj3);
      items.push(obj2);
    }
    if (isRecentActivityMobileEnabled) {
      const obj4 = { id: "activity", label: null, page: null };
      const intl3 = util.intl;
      obj4.label = intl3.string(util.t.chq59f);
      const obj5 = { user, containerBackground, containerBorderColor };
      obj4.page = map1(YouScreenActivityTabContainer, obj5);
      items.push(obj4);
    }
    const obj6 = { id: "wishlist", label: null, page: null };
    const intl4 = util.intl;
    obj6.label = intl4.string(util.t["7lZ31J"]);
    obj6.page = callback5();
    items.push(obj6);
    return items;
  }, items9);
  const tmp4Result10 = user(navigateToPremium[52]);
  const measuredTabItems = user(navigateToPremium[65]).useMeasuredTabItems(memo);
  ({ items, pageHeights } = measuredTabItems);
  const tmp4Result11 = user(navigateToPremium[65]);
  const tmp4Result12 = user(navigateToPremium[66]);
  segmentedControlState = tmp4Result12.useSegmentedControlState({ pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[21]).space.PX_24, items, onPageChange: handleTabChange });
  const items10 = [segmentedControlState, restoreActiveIndex];
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items10);
  const obj14 = { pageWidth, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[21]).space.PX_24, items, onPageChange: handleTabChange };
  const items11 = [MAIN, activeProfileTabSection, navigation, setActiveProfileTabSection];
  const focusEffect = user(navigateToPremium[40]).useFocusEffect(obj6.useCallback(() => {
    let tmp2 = undefined !== MAIN;
    if (tmp2) {
      tmp2 = tmp !== activeProfileTabSection;
    }
    if (tmp2) {
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        setActiveProfileTabSection(MAIN);
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
  const items13 = [enabled(stateFromStores1, { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag }), , , ];
  const obj18 = { ref, customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  const items14 = [, ];
  ({ customStatusBubble: arr15[0], customStatusBubbleInset: arr15[1] } = tmp3);
  obj18.style = items14;
  items13[1] = enabled(navigateToFriends(navigateToPremium[69]), obj18);
  let isLoaded;
  if (tmp6 != null) {
    isLoaded = tmp6.isLoaded;
  }
  const obj19 = { isProfileLoaded: true === isLoaded, navigateToProfileCustomization, primaryInfoProps: null };
  const obj20 = { user, pronouns: null, badges: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, themeType: null, showChevron: true, canOpenBadgeDirectory: true };
  let pronouns;
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  obj20.pronouns = pronouns;
  obj20.badges = tmp8;
  obj20.badgeContainerBackground = containerBackground;
  obj20.onPressDisplayName = callback;
  let intl = tmp4(tmp2[28]).intl;
  const obj21 = { status: null };
  const obj17 = { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  const tmp43 = pageWidth;
  const tmp4Result13 = user(navigateToPremium[40]);
  obj21.status = user(navigateToPremium[70]).getStatusLabel(stateFromStores);
  const tmp4Result14 = user(navigateToPremium[70]);
  let intl2 = tmp4(tmp2[28]).intl;
  obj20.displayNameAccessibilityHint = "" + intl.formatToPlainString(user(navigateToPremium[28]).t["er+FRD"], obj21) + ", " + intl2.string(user(navigateToPremium[28]).t.C6COaT);
  obj20.themeType = UserProfileThemeTypes.YOU_SCREEN;
  obj19.primaryInfoProps = obj20;
  items13[2] = enabled(tmp43, obj19);
  const obj22 = { style: { flex: 1 }, onLayout: callback1, children: null };
  const obj23 = { style: tmp3.profileTablist, children: null };
  const obj24 = { state: segmentedControlState, variant: null };
  let str;
  if (null != primaryColor) {
    str = "overlay";
  }
  const obj25 = { zIndex: 1, children: null };
  obj24.variant = str;
  obj23.children = enabled(user(navigateToPremium[71]).Tabs, obj24);
  const items15 = [enabled(closure_5, obj23), enabled(navigateToFriends(navigateToPremium[65]), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef })];
  obj22.children = items15;
  items13[3] = c14(closure_5, obj22);
  obj16.children = items13;
  obj25.children = c14(closure_5, obj16);
  obj15.children = enabled(user(navigateToPremium[68]).LayerScope, obj25);
  return enabled(navigateToFriends(navigateToPremium[67]).View, obj15);
};