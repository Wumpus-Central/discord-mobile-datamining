// === Module 19222: YouScreenUserProfileContent ===

// Module 19222 (YouScreenUserProfileContent)
import util from "util" /* 1113 */;
import PlatformUtils from "PlatformUtils" /* 1377 */;
import dismissible_content from "dismissible_content" /* 4973 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7641 */;
import UserProfileSharedStylesDefault from "UserProfileSharedStyles" /* 8888 */;
import UserProfileAvatarDefault from "UserProfileAvatar" /* 8902 */;
import Tracking from "Tracking" /* 9768 */;
import getRandomCustomStatusPromptDefault from "getRandomCustomStatusPrompt" /* 11541 */;
import UserProfilePrimaryInfoDefault from "UserProfilePrimaryInfo" /* 11554 */;
import BadgeManagementExperiment from "BadgeManagementExperiment" /* 11593 */;
import useCanOpenBadgeDirectoryFromProfile from "useCanOpenBadgeDirectoryFromProfile" /* 11594 */;
import UserProfileAboutMeCardDefault from "UserProfileAboutMeCard" /* 11637 */;
import CustomTypingIndicatorExperiment from "CustomTypingIndicatorExperiment" /* 13963 */;
import UserProfileActivityDefault from "UserProfileActivity" /* 15076 */;
import UserProfileNoteDefault from "UserProfileNote" /* 15141 */;
import useBadgeDirectoryNuxCoachmarkVariant from "useBadgeDirectoryNuxCoachmarkVariant" /* 15153 */;
import useBadgeDirectoryNuxPopoverVariant from "useBadgeDirectoryNuxPopoverVariant" /* 15154 */;
import useBadgeDirectoryNuxEntryPoint from "useBadgeDirectoryNuxEntryPoint" /* 15156 */;
import BadgeDirectoryNuxCoachmarkDefault from "BadgeDirectoryNuxCoachmark" /* 15157 */;
import UserProfileWidgetsBoardTabDefault from "UserProfileWidgetsBoardTab" /* 15173 */;
import UserProfileActivityTabDefault from "UserProfileActivityTab" /* 15231 */;
import UserProfileDismissibleUpsellsDefault from "UserProfileDismissibleUpsells" /* 15248 */;
import UserProfileConnections from "UserProfileConnections" /* 15251 */;
import UserProfileWishlistGrid from "UserProfileWishlistGrid" /* 15256 */;
import UserProfileWishlistSuggestionsGridDefault from "UserProfileWishlistSuggestionsGrid" /* 15262 */;
import BalanceWidgetMenu from "BalanceWidgetMenu" /* 18021 */;
import showYouAccountActionSheet from "showYouAccountActionSheet" /* 18782 */;
import useOwnsAnyBadgeDefault from "useOwnsAnyBadge" /* 19230 */;
import useIsNitroBadgeAutoUnhiddenDefault from "useIsNitroBadgeAutoUnhidden" /* 19231 */;
import NitroBadgeUnhiddenCoachmarkDefault from "NitroBadgeUnhiddenCoachmark" /* 19232 */;
import OrbWalletProfileIntroductionCoachmarkDefault from "OrbWalletProfileIntroductionCoachmark" /* 19233 */;
import YouExpiringTrialOfferCardDefault from "YouExpiringTrialOfferCard" /* 19236 */;
import CheckpointProfileEntrypointDefault from "CheckpointProfileEntrypoint" /* 19238 */;
import UserProfileYourFriendsCardDefault from "UserProfileYourFriendsCard" /* 19242 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6625 */;
import UserProfileStore from "UserProfileStore" /* 7848 */;

const UserProfileWishlistGridDefault = UserProfileWishlistGrid;
const BalanceWidgetMenuDefault = BalanceWidgetMenu;

require = fn;
function YouAvatar(arg0) {
  const callback = noop.useCallback(() => {
    const result = Tracking.trackYouTabAvatarPress();
    const result1 = showYouAccountActionSheet.showYouAccountActionSheet();
  }, []);
  const isAndroidResult = PlatformUtils.isAndroid();
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.onPress = callback;
  obj2.importantForAccessibility = "no-hide-descendants";
  obj2.accessibilityElementsHidden = isAndroidResult;
  obj2.accessible = !isAndroidResult;
  return state(UserProfileAvatarDefault, obj2);
}
function YouScreenWidgetsBoardContainer(arg0) {
  ({ userId, activeSection, containerBackground, containerBorderColor } = arg0);
  items = [UserProfileSharedStylesDefault().card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
  return state(UserProfileWidgetsBoardTabDefault, { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: items, isCurrentUser: true });
}
function YouScreenActivityTabContainer(user) {
  user = user.user;
  ({ containerBackground, containerBorderColor } = user);
  items = [UserProfileSharedStylesDefault().card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
  const obj = { style: null, children: state(UserProfileActivityTabDefault, { user, currentUser: user, cardStyle: items }) };
  const items1 = [, ];
  ({ cards: arr2[0], profileContent: arr2[1] } = UserProfileSharedStylesDefault());
  obj.style = items1;
  return state(View, obj);
}
function EditSection(navigateToProfileCustomization) {
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  ({ isProfileLoaded, visibleContent, markAsDismissed } = navigateToProfileCustomization);
  let trackUserProfileAction;
  noop = undefined;
  const tmp3 = markAsDismissed(trackUserProfileAction[15])();
  const token = navigateToProfileCustomization(trackUserProfileAction[18]).useToken(markAsDismissed(trackUserProfileAction[19]).colors.WHITE);
  let obj = navigateToProfileCustomization(trackUserProfileAction[18]);
  trackUserProfileAction = navigateToProfileCustomization(trackUserProfileAction[20]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const ref = noop.useRef(null);
  const tmp7 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[21]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
  closure_3 = tmp7;
  const tmp8 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[21]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK;
  noop = tmp8;
  const tmp9 = visibleContent === navigateToProfileCustomization(trackUserProfileAction[21]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK;
  closure_5 = tmp9;
  items = [navigateToProfileCustomization, trackUserProfileAction, tmp7, tmp8, tmp9, markAsDismissed];
  const items1 = [navigateToProfileCustomization];
  const callback = noop.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const result = Tracking.trackYouTabEditProfilePress();
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
  const obj2 = navigateToProfileCustomization(trackUserProfileAction[20]);
  const obj4 = { ref, variant: "primary", icon: null, text: null, onPress: null, accessibilityValue: null, grow: true };
  if (isProfileLoaded) {
    const obj5 = { size: "sm", color: token };
    let tmp14Result = closure_13(tmp4(tmp2[24]).PencilIcon, obj5);
  } else {
    const obj6 = { size: "small", color: token, accessible: false };
    tmp14Result = closure_13(tmp4(tmp2[25]).ActivityIndicator, obj6);
  }
  obj4.icon = tmp14Result;
  const intl = tmp4(tmp2[26]).intl;
  obj4.text = intl.string(navigateToProfileCustomization(trackUserProfileAction[26]).t.AAjhgi);
  obj4.onPress = callback;
  let tmp17;
  if (!isProfileLoaded) {
    const obj7 = { text: null };
    const intl2 = tmp4(tmp2[26]).intl;
    obj7.text = intl2.string(tmp4(tmp2[26]).t.ZTNur7);
    tmp17 = obj7;
  }
  const obj8 = { children: null };
  obj4.accessibilityValue = tmp17;
  obj3.secondaryButton = closure_13(navigateToProfileCustomization(trackUserProfileAction[23]).Button, obj4);
  const items2 = [closure_13(markAsDismissed(trackUserProfileAction[22]), obj3), closure_13(markAsDismissed(trackUserProfileAction[27]), { targetRef: ref, visible: tmp7, markAsDismissed }), closure_13(markAsDismissed(trackUserProfileAction[28]), { targetRef: ref, visible: tmp8, markAsDismissed, onTryItOut: callback1 }), closure_13(markAsDismissed(trackUserProfileAction[29]), { targetRef: ref, visible: tmp9, markAsDismissed })];
  obj8.children = items2;
  return closure_15(closure_14, obj8);
}
function YouScreenPrimaryInfoSection(arg0) {
  ({ isProfileLoaded, primaryInfoProps } = arg0);
  ({ orbWalletEntryRowRef, isMainTabActive, navigateToProfileCustomization } = arg0);
  const id = primaryInfoProps.user.id;
  const tmp3 = UserProfileSharedStylesDefault();
  const isBadgeManagementEnabled = BadgeManagementExperiment.useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  const tmp6 = useOwnsAnyBadgeDefault();
  const tmp7 = useIsNitroBadgeAutoUnhiddenDefault();
  const badgeDirectoryNuxCoachmarkVariant = useBadgeDirectoryNuxCoachmarkVariant.useBadgeDirectoryNuxCoachmarkVariant({ userId: id, enabled: true, location: "YouScreenUserProfileContent" });
  const canOpenBadgeDirectoryFromProfile = useCanOpenBadgeDirectoryFromProfile.useCanOpenBadgeDirectoryFromProfile({ location: "YouScreenUserProfileContent" });
  const tmp10 = badgeDirectoryNuxCoachmarkVariant.isPending || useBadgeDirectoryNuxPopoverVariant.useBadgeDirectoryNuxPopoverState({ currentUserId: id, enabled: isBadgeManagementEnabled, fetchCatalog: !canOpenBadgeDirectoryFromProfile }).isPending;
  const obj5 = { currentUserId: id, enabled: isBadgeManagementEnabled, fetchCatalog: !canOpenBadgeDirectoryFromProfile };
  const customTypingIndicatorConfig = CustomTypingIndicatorExperiment.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp12 = useIsContentShown(dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
  const tmp4Result = CustomTypingIndicatorExperiment;
  const isOrbWalletEntryRowShown = BalanceWidgetMenu.useIsOrbWalletEntryRowShown();
  const tmp4Result5 = BalanceWidgetMenu;
  let tmp14 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp14 = tmp7;
  }
  items = [];
  if (tmp14) {
    items.push(dismissible_content.DismissibleContent.NITRO_BADGE_UNHIDDEN_NOTICE);
  }
  let tmp16 = !isProfileLoaded;
  if (isProfileLoaded) {
    tmp16 = tmp12;
  }
  if (!tmp16) {
    tmp16 = tmp10;
  }
  if (!tmp16) {
    items.push(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK);
  }
  let tmp18 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp18 = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  }
  if (tmp18) {
    items.push(dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER);
  }
  let tmp21 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp21 = isBadgeManagementEnabled;
  }
  if (tmp21) {
    tmp21 = tmp6;
  }
  if (tmp21) {
    tmp21 = !tmp10;
  }
  if (tmp21) {
    items.push(dismissible_content.DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK);
  }
  let tmp23 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp23 = canSet;
  }
  if (tmp23) {
    tmp23 = "profile" === entryPoint;
  }
  if (tmp23) {
    tmp23 = !tmp12;
  }
  if (tmp23) {
    tmp23 = !tmp10;
  }
  if (tmp23) {
    items.push(dismissible_content.DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK);
  }
  let tmp25 = isProfileLoaded;
  if (isProfileLoaded) {
    tmp25 = isOrbWalletEntryRowShown;
  }
  if (tmp25) {
    tmp25 = !tmp10;
  }
  if (tmp25) {
    items.push(dismissible_content.DismissibleContent.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK);
  }
  const tmp4Result6 = BalanceWidgetMenu;
  const tmp4Result7 = useSelectedDismissibleContent;
  [tmp28, tmp29] = useSelectedDismissibleContent.useSelectedDismissibleContent(items);
  const tmp30 = tmp28 === dismissible_content.DismissibleContent.BADGE_DIRECTORY_NUX_POPOVER;
  const tmp27 = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(items), 2);
  const badgeDirectoryNuxEntryPoint = useBadgeDirectoryNuxEntryPoint.useBadgeDirectoryNuxEntryPoint(tmp30, tmp29);
  const entryPointRef = badgeDirectoryNuxEntryPoint.entryPointRef;
  const obj6 = { style: null, children: null };
  const items1 = [, ];
  ({ primaryInfo: arr2[0], profileContent: arr2[1] } = tmp3);
  obj6.style = items1;
  const obj7 = {};
  const tmp4Result8 = useBadgeDirectoryNuxEntryPoint;
  const merged = Object.assign(primaryInfoProps);
  obj7.badgeDirectoryEntryPointRef = entryPointRef;
  obj7.onOpenBadgeDirectory = badgeDirectoryNuxEntryPoint.onOpenBadgeDirectory;
  const items2 = [state(UserProfilePrimaryInfoDefault, obj7), , , , ];
  const obj8 = { targetRef: entryPointRef, visible: null, markAsDismissed: null };
  const tmpResult = UserProfilePrimaryInfoDefault;
  obj8.visible = tmp28 === dismissible_content.DismissibleContent.NITRO_BADGE_UNHIDDEN_NOTICE;
  obj8.markAsDismissed = tmp29;
  items2[1] = state(NitroBadgeUnhiddenCoachmarkDefault, obj8);
  let tmp34Result = null != badgeDirectoryNuxCoachmarkVariant.variantProps;
  if (tmp34Result) {
    const obj9 = { targetRef: entryPointRef, userId: id, variantProps: badgeDirectoryNuxCoachmarkVariant.variantProps, visible: tmp30, markAsDismissed: tmp29 };
    tmp34Result = state(BadgeDirectoryNuxCoachmarkDefault, obj9);
  }
  items2[2] = tmp34Result;
  items2[3] = state(EditSection, { navigateToProfileCustomization, isProfileLoaded, visibleContent: tmp28, markAsDismissed: tmp29 });
  const obj10 = { targetRef: orbWalletEntryRowRef, visible: null, markAsDismissed: null, onSeeChallenges: null };
  const tmpResult3 = NitroBadgeUnhiddenCoachmarkDefault;
  const tmpResult4 = OrbWalletProfileIntroductionCoachmarkDefault;
  obj10.visible = tmp28 === dismissible_content.DismissibleContent.ORB_WALLET_PROFILE_INTRODUCTION_COACHMARK && isMainTabActive;
  obj10.markAsDismissed = tmp29;
  obj10.onSeeChallenges = tmp4Result6.useOpenOrbWalletFromYouScreen().openOrbWallet;
  items2[4] = state(tmpResult4, obj10);
  obj6.children = items2;
  return closure_1_15(View, obj6);
}
const View = fn(17).View;
const useIsContentShown = fn(4981).useIsContentShown;
const UserProfileSections = fn(8825).UserProfileSections;
let UserProfileThemeTypes = fn(7437).UserProfileThemeTypes;
const ContentDismissActionType = fn(4986).ContentDismissActionType;
let closure_12 = fn(16748).UserProfileEditAutoFocusElement;
const jsxProd = fn(21);
({ jsx: map1, Fragment: closure_14, jsxs: closure_15 } = jsxProd);
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
  let isRecentActivityMobileEnabled;
  let MAIN;
  let num;
  let activeProfileTabSection;
  let setActiveProfileTabSection;
  let restoreActiveIndex;
  let isVisible;
  let callback2;
  let callback3;
  let callback4;
  let segmentedControlState;
  const tmp3 = navigateToFriends(navigateToPremium[15])();
  closure_5 = tmp3;
  const navigation = user(navigateToPremium[44]).useNavigation();
  let obj = user(navigateToPremium[44]);
  const trackUserProfileAction = user(navigateToPremium[20]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const tmp6 = navigateToFriends(navigateToPremium[45])(user.id);
  const displayProfile = tmp6;
  let obj2 = user(navigateToPremium[20]);
  const customStatusActivity = user(navigateToPremium[46]).useCustomStatusActivity();
  let obj3 = user(navigateToPremium[46]);
  let tmp8 = navigateToFriends(navigateToPremium[47])(tmp6);
  let items1 = [trackUserProfileAction];
  const stateFromStores = user(navigateToPremium[48]).useStateFromStores(items1, () => trackUserProfileAction.getStatus());
  const tmp10 = navigateToFriends(navigateToPremium[49])({ user, displayProfile: tmp6 });
  const primaryColor = tmp10.primaryColor;
  UserProfileThemeTypes = tmp11;
  ({ theme, secondaryColor } = tmp10);
  let obj4 = user(navigateToPremium[48]);
  const userProfileColors = user(navigateToPremium[50]).useUserProfileColors({ theme, primaryColor, secondaryColor });
  const containerBackground = userProfileColors.containerBackground;
  const containerBorderColor = userProfileColors.containerBorderColor;
  const statusBackground = userProfileColors.statusBackground;
  let obj5 = user(navigateToPremium[50]);
  const ref2 = initialTab.useRef(null);
  let items2 = [trackUserProfileAction];
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const result = showYouAccountActionSheet.showYouAccountActionSheet();
  }, items2);
  const ref1 = initialTab.useRef(null);
  const enabled = user(navigateToPremium[51]).useVirtualCurrencyMobileEnabled().enabled;
  const obj7 = user(navigateToPremium[51]);
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  c15 = tmp17;
  const tmp16 = navigateToShop(initialTab.useState(null), 2);
  const shouldShowExpiringTrialOfferCard = user(navigateToPremium[52]).useShouldShowExpiringTrialOfferCard();
  const obj9 = user(navigateToPremium[52]);
  const items3 = [displayProfile];
  const stateFromStores1 = user(navigateToPremium[48]).useStateFromStores(items3, () => UserProfileStore.getFirstWishlistId(user.id));
  const obj10 = user(navigateToPremium[48]);
  let tmp20 = user(navigateToPremium[53]).useDisplayableBoardWidgets(user.id).length > 0;
  const obj11 = user(navigateToPremium[53]);
  const canConjureCustomWidget = user(navigateToPremium[54]).useCanConjureCustomWidget("YouScreenUserProfileContent");
  const obj12 = user(navigateToPremium[54]);
  let isMobileWidgetEditingEnabled = user(navigateToPremium[55]).useIsMobileWidgetEditingEnabled("YouScreenUserProfileContent");
  if (!tmp20) {
    tmp20 = canConjureCustomWidget;
  }
  if (!tmp20) {
    tmp20 = isMobileWidgetEditingEnabled;
  }
  isMobileWidgetEditingEnabled = tmp20;
  const obj13 = user(navigateToPremium[55]);
  isRecentActivityMobileEnabled = user(navigateToPremium[56]).useIsRecentActivityMobileEnabled("YouScreenUserProfileContent");
  let tmp4Result = user(navigateToPremium[56]);
  const profileTabIndices = user(navigateToPremium[57]).useProfileTabIndices(tmp20, isRecentActivityMobileEnabled, true);
  ({ boardTabIndex, activityTabIndex, wishlistTabIndex } = profileTabIndices);
  MAIN = initialTab;
  if (null != initialTab) {
    const obj14 = { wishlistTabIndex, boardTabIndex, activityTabIndex };
    MAIN = initialTab;
    if (tmp4Result9.getProfileTabSectionIndex(initialTab, obj14) < 0) {
      MAIN = customStatusActivity.MAIN;
    }
    tmp4Result9 = tmp4(tmp2[57]);
  }
  const tmp26 = navigateToFriends(navigateToPremium[58])();
  const width = tmp26.width;
  num = 0;
  ({ ref, onLayout } = tmp26);
  if (undefined !== width) {
    num = width;
  }
  const items4 = [trackUserProfileAction, navigation, initialTab];
  const callback1 = obj6.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
    if (section !== initialTab) {
      const obj2 = { initialTab: section };
      navigation.setParams(obj2);
    }
    const obj = { action: "PRESS_SECTION", section };
  }, items4);
  const tmp4Result8 = user(navigateToPremium[57]);
  const profileSectionTabs = user(navigateToPremium[57]).useProfileSectionTabs({ initialUserProfileSection: MAIN, wishlistTabIndex, boardTabIndex, activityTabIndex, onTabChange: callback1 });
  activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  isVisible = tmp29;
  const items5 = [customStatusActivity, tmp17];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback2 = obj6.useCallback(() => {
    let tmp2 = null;
    if (null == customStatusActivity) {
      tmp2 = getRandomCustomStatusPromptDefault();
    }
    _undefined(tmp2);
  }, items5);
  const items6 = [callback2];
  const effect = obj6.useEffect(() => {
    setImmediate(() => {
      callback2();
    });
  }, items6);
  let labelResult;
  if (null != obj8) {
    labelResult = obj8.label();
  }
  const items7 = [containerBackground, containerBorderColor, tmp3, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, null != primaryColor, enabled, user, tmp6, navigateToFriends];
  callback3 = obj6.useCallback(() => {
    items = [closure_5.card, { backgroundColor: containerBackground, borderColor: containerBorderColor, borderWidth: 1 }];
    const obj2 = { style: null, children: null };
    const items1 = [, ];
    ({ cards: arr2[0], profileContent: arr2[1] } = closure_5);
    obj2.style = items1;
    const items2 = [state(YouExpiringTrialOfferCardDefault, { navigateToPremium, style: items }), , , , , , , , , ];
    let tmp3Result = !shouldShowExpiringTrialOfferCard;
    if (!shouldShowExpiringTrialOfferCard) {
      const obj4 = { navigateToPremium, navigateToShop, hasCustomProfileTheme };
      tmp3Result = state(UserProfileDismissibleUpsellsDefault, obj4);
    }
    items2[1] = tmp3Result;
    items2[2] = state(CheckpointProfileEntrypointDefault, {});
    let tmp3Result2 = enabled;
    if (enabled) {
      const obj5 = { orbWalletEntryRowRef: ref2 };
      tmp3Result2 = state(BalanceWidgetMenuDefault, obj5);
    }
    items2[3] = tmp3Result2;
    items2[4] = state(UserProfileActivityDefault, { user, currentUser: user, style: items });
    items2[5] = state(UserProfileAboutMeCardDefault, { userId: user.id, displayProfile });
    items2[6] = state(UserProfileConnections.UserProfileAccountConnectionsCard, { userId: user.id });
    items2[7] = state(UserProfileConnections.UserProfileApplicationRoleConnectionsCard, { userId: user.id });
    items2[8] = state(UserProfileYourFriendsCardDefault, { userId: user.id, navigateToFriends });
    items2[9] = state(UserProfileNoteDefault, { userId: user.id });
    obj2.children = items2;
    return closure_2_15(View, obj2);
  }, items7);
  const items8 = [tmp3.profileContent, stateFromStores1, num, activeProfileTabSection === customStatusActivity.WISHLIST, user.id];
  callback4 = obj6.useCallback(() => {
    const obj = { style: closure_5.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp4Result = state(UserProfileWishlistGrid.WishlistEmptyState, {});
      let tmp4 = state;
    } else {
      tmp4 = state;
      const obj2 = { wishlistId: stateFromStores1, containerWidth: null, isVisible: null };
      let tmp8;
      if (0 > 0) {
        tmp8 = num;
      }
      obj2.containerWidth = tmp8;
      obj2.isVisible = isVisible;
      tmp4Result = tmp4(UserProfileWishlistGridDefault, obj2);
    }
    items = [tmp4Result, ];
    const obj3 = { userId: user.id, wishlistId: stateFromStores1, containerWidth: null };
    let tmp15;
    if (num > 0) {
      tmp15 = num;
    }
    obj3.containerWidth = tmp15;
    items[1] = tmp4(UserProfileWishlistSuggestionsGridDefault, obj3);
    obj.children = items;
    return closure_2_15(View, obj);
  }, items8);
  const items9 = [callback3, callback4, tmp20, isRecentActivityMobileEnabled, user, activeProfileTabSection, containerBackground, containerBorderColor];
  const memo = obj6.useMemo(() => {
    const obj = { id: "main", label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = callback3();
    items = [obj];
    if (isMobileWidgetEditingEnabled) {
      const obj2 = { id: "board", label: null, page: null };
      const intl2 = util.intl;
      obj2.label = intl2.string(util.t.laViwx);
      const obj3 = { userId: user.id, activeSection: activeProfileTabSection, containerBackground, containerBorderColor };
      obj2.page = state(YouScreenWidgetsBoardContainer, obj3);
      items.push(obj2);
    }
    if (isRecentActivityMobileEnabled) {
      const obj4 = { id: "activity", label: null, page: null };
      const intl3 = util.intl;
      obj4.label = intl3.string(util.t.chq59f);
      const obj5 = { user, containerBackground, containerBorderColor };
      obj4.page = state(YouScreenActivityTabContainer, obj5);
      items.push(obj4);
    }
    const obj6 = { id: "wishlist", label: null, page: null };
    const intl4 = util.intl;
    obj6.label = intl4.string(util.t["7lZ31J"]);
    obj6.page = callback4();
    items.push(obj6);
    return items;
  }, items9);
  const tmp4Result10 = user(navigateToPremium[57]);
  const measuredTabItems = user(navigateToPremium[70]).useMeasuredTabItems(memo);
  ({ items, pageHeights } = measuredTabItems);
  const tmp4Result11 = user(navigateToPremium[70]);
  const tmp4Result12 = user(navigateToPremium[71]);
  segmentedControlState = tmp4Result12.useSegmentedControlState({ pageWidth: num, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[19]).space.PX_24, items, onPageChange: handleTabChange });
  const items10 = [segmentedControlState, restoreActiveIndex];
  const layoutEffect = obj6.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items10);
  const obj15 = { pageWidth: num, defaultIndex: activeProfileTabSectionIndex, itemSpacing: navigateToFriends(navigateToPremium[19]).space.PX_24, items, onPageChange: handleTabChange };
  const items11 = [MAIN, activeProfileTabSection, navigation, setActiveProfileTabSection];
  const focusEffect = user(navigateToPremium[44]).useFocusEffect(obj6.useCallback(() => {
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
  const obj16 = { style, children: null };
  const obj17 = { style: null, children: null };
  const items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  obj17.style = items12;
  const items13 = [ref2(shouldShowExpiringTrialOfferCard, { user, backgroundColor: userProfileColors.avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag }), , , ];
  const obj19 = { ref: ref1, customStatusActivity, hasCustomProfileTheme: null != primaryColor, style: null, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj8 };
  const items14 = [, ];
  ({ customStatusBubble: arr14[0], customStatusBubbleInset: arr14[1] } = tmp3);
  obj19.style = items14;
  items13[1] = ref2(navigateToFriends(navigateToPremium[74]), obj19);
  let isLoaded;
  if (tmp6 != null) {
    isLoaded = tmp6.isLoaded;
  }
  const obj20 = { isProfileLoaded: true === isLoaded, orbWalletEntryRowRef: ref2, isMainTabActive: activeProfileTabSection === customStatusActivity.MAIN, navigateToProfileCustomization, primaryInfoProps: null };
  const obj21 = { user, pronouns: null, badges: null, badgeContainerBackground: null, profileBackgroundColor: null, onPressDisplayName: null, displayNameAccessibilityHint: null, themeType: null, showChevron: true, canOpenBadgeDirectory: true };
  let pronouns;
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  obj21.pronouns = pronouns;
  obj21.badges = tmp8;
  obj21.badgeContainerBackground = containerBackground;
  obj21.profileBackgroundColor = statusBackground;
  obj21.onPressDisplayName = callback;
  let intl = tmp4(tmp2[26]).intl;
  const obj22 = { status: null };
  const obj18 = { user, backgroundColor: userProfileColors.avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag };
  const tmp43 = MAIN;
  const tmp4Result13 = user(navigateToPremium[44]);
  obj22.status = user(navigateToPremium[75]).getStatusLabel(stateFromStores);
  const tmp4Result14 = user(navigateToPremium[75]);
  let intl2 = tmp4(tmp2[26]).intl;
  obj21.displayNameAccessibilityHint = "" + intl.formatToPlainString(user(navigateToPremium[26]).t["er+FRD"], obj22) + ", " + intl2.string(user(navigateToPremium[26]).t.C6COaT);
  obj21.themeType = UserProfileThemeTypes.YOU_SCREEN;
  obj20.primaryInfoProps = obj21;
  items13[2] = ref2(tmp43, obj20);
  const obj23 = { style: { flex: 1 }, ref, onLayout, children: null };
  const obj24 = { style: tmp3.profileTablist, children: null };
  const obj25 = { state: segmentedControlState, variant: null };
  let str;
  if (null != primaryColor) {
    str = "overlay";
  }
  const obj26 = { zIndex: 1, children: null };
  obj25.variant = str;
  obj24.children = ref2(user(navigateToPremium[76]).Tabs, obj25);
  const items15 = [ref2(closure_5, obj24), ref2(navigateToFriends(navigateToPremium[70]), { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef })];
  obj23.children = items15;
  items13[3] = c15(closure_5, obj23);
  obj17.children = items13;
  obj26.children = c15(closure_5, obj17);
  obj16.children = ref2(user(navigateToPremium[73]).LayerScope, obj26);
  return ref2(navigateToFriends(navigateToPremium[72]).View, obj16);
};