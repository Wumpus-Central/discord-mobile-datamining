// discord_app/modules/user_profile/native/YouScreenUserProfileContent.tsx
import set from "../../../utils/PlatformUtils.tsx";
import useSharedStylesDefault from "UserProfileSharedStyles.tsx";
import OpenableUserProfileAvatarDefault from "UserProfileAvatar.tsx";
import UserProfileWidgetsBoardEditNoticeDefault from "UserProfileWidgetsBoardEditNotice.tsx";
import WidgetRendererDefault from "UserProfileWidgetsBoard.tsx";
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { useIsContentShown } from "../../dismissible_content/DismissibleContentShownStateStore.tsx";
import closure_8 from "../../../stores/SelfPresenceStore.tsx";
import closure_9 from "../UserProfileStore.tsx";
import { UserProfileSections } from "../Constants.tsx";
import { UserProfileThemeTypes } from "Constants.tsx";
import { ContentDismissActionType } from "../../dismissible_content/DismissibleContentConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
function YouAvatar(arg0) {
  const callback = React.useCallback(() => {
    const result = callback(16223).trackYouTabAvatarPress();
    const obj = callback(16223);
    const result1 = callback(15808).showYouAccountActionSheet();
  }, []);
  let obj = set;
  const isAndroidResult = obj.isAndroid();
  obj = {};
  const merged = Object.assign(arg0);
  obj.onPress = callback;
  obj.importantForAccessibility = "no-hide-descendants";
  obj.accessibilityElementsHidden = isAndroidResult;
  obj.accessible = !isAndroidResult;
  return closure_13(OpenableUserProfileAvatarDefault, obj);
}
function YouScreenWidgetsBoardContainer(containerBackground) {
  containerBackground = containerBackground.containerBackground;
  ({ userId, activeSection, isRefreshEnabled, containerBorderColor } = containerBackground);
  const tmp3 = useSharedStylesDefault();
  const items = [tmp3.card, ];
  if (isRefreshEnabled) {
    let obj = { backgroundColor: null, borderColor: null, borderWidth: 1 };
    obj[0] = containerBackground;
    obj[1] = containerBorderColor;
    items[1] = obj;
    let tmp4 = items;
  } else {
    obj = { backgroundColor: null };
    obj[0] = containerBackground;
    items[1] = obj;
    tmp4 = items;
  }
  obj = { style: tmp3.profileContent, children: null };
  const items1 = [callback2(UserProfileWidgetsBoardEditNoticeDefault, {}), callback2(WidgetRendererDefault, { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: tmp4 })];
  obj[1] = items1;
  return callback3(closure_6, obj);
}
function EditSection(navigateToProfileCustomization) {
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  let isProfileLoaded = navigateToProfileCustomization.isProfileLoaded;
  let trackUserProfileAction;
  let first;
  let callback;
  let obj = navigateToProfileCustomization(first[17]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  obj1 = React;
  const ref = React.useRef(null);
  let obj2 = navigateToProfileCustomization(first[18]);
  const isDisplayNameStylesFlywheelSettersEnabled = obj2.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  let obj3 = navigateToProfileCustomization(first[19]);
  const isBadgeManagementEnabled = obj3.useIsBadgeManagementEnabled({ location: "YouScreenUserProfileContent" });
  let obj4 = navigateToProfileCustomization(first[20]);
  const customTypingIndicatorConfig = obj4.useCustomTypingIndicatorConfig("YouScreenUserProfileContent");
  ({ canSet, entryPoint } = customTypingIndicatorConfig);
  const tmp9 = useIsContentShown(navigateToProfileCustomization(first[21]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS);
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
  const tmp14 = callback(navigateToProfileCustomization(first[22]).useSelectedDismissibleContent(items), 2);
  first = tmp14[0];
  callback = tmp16;
  const items1 = [navigateToProfileCustomization, trackUserProfileAction, first, tmp14[1]];
  obj = { children: null };
  callback = obj1.useCallback(() => {
    trackUserProfileAction({ action: "EDIT_PROFILE" });
    const result = navigateToProfileCustomization(first[10]).trackYouTabEditProfilePress();
    navigateToProfileCustomization();
    if (null != first) {
      callback(closure_1_12.TAKE_ACTION);
    }
  }, items1);
  obj = { style: tmp3.primaryButtons, secondaryButton: null };
  const tmp4Result = navigateToProfileCustomization(first[22]);
  obj1 = { ref, variant: "primary", icon: null, text: null, onPress: null, grow: true };
  obj2 = { size: "sm", color: tmp(tmp2[26]).colors.WHITE };
  obj1[2] = callback2(navigateToProfileCustomization(first[25]).PencilIcon, obj2);
  const intl = tmp4(tmp2[27]).intl;
  obj1[3] = intl.string(navigateToProfileCustomization(first[27]).t.AAjhgi);
  obj1[4] = callback;
  obj[1] = callback2(navigateToProfileCustomization(first[24]).Button, obj1);
  const items2 = [callback2(trackUserProfileAction(first[23]), obj), , , ];
  obj3 = { targetRef: ref, visible: first === tmp4(tmp2[21]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp16 };
  items2[1] = callback2(trackUserProfileAction(first[28]), obj3);
  obj4 = { targetRef: ref, visible: first === tmp4(tmp2[21]).DismissibleContent.BADGE_CUSTOMIZATION_COACHMARK, markAsDismissed: tmp16, onTryItOut: navigateToProfileCustomization };
  items2[2] = callback2(trackUserProfileAction(first[29]), obj4);
  const tmpResult = trackUserProfileAction(first[23]);
  items2[3] = callback2(trackUserProfileAction(first[30]), { targetRef: ref, visible: first === navigateToProfileCustomization(first[21]).DismissibleContent.CUSTOM_TYPING_INDICATOR_MOBILE_PROFILE_COACHMARK, markAsDismissed: tmp14[1] });
  obj[0] = items2;
  return callback3(closure_15, obj);
}
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let result = require("set").fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

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
  closure_5 = undefined;
  let navigation;
  let trackUserProfileAction;
  closure_8 = undefined;
  let customStatusActivity;
  UserProfileSections = undefined;
  UserProfileThemeTypes = undefined;
  let containerBackground;
  let containerBorderColor;
  let enabled;
  c15 = undefined;
  let shouldShowExpiringTrialOfferCard;
  let stateFromStores1;
  closure_18 = undefined;
  let boardTabIndex;
  let wishlistTabIndex;
  let first;
  closure_22 = undefined;
  let handlePageContentSize;
  let activeProfileTabSection;
  let setActiveProfileTabSection;
  let restoreActiveIndex;
  closure_27 = undefined;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  closure_32 = undefined;
  const tmp3 = navigateToFriends(navigateToPremium[14])();
  closure_5 = tmp3;
  let obj = user(navigateToPremium[31]);
  navigation = obj.useNavigation();
  obj1 = user(navigateToPremium[17]);
  trackUserProfileAction = obj1.useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp6 = navigateToFriends(navigateToPremium[32])(user.id);
  closure_8 = tmp6;
  let obj2 = user(navigateToPremium[33]);
  customStatusActivity = obj2.useCustomStatusActivity();
  const arr = navigateToFriends(navigateToPremium[34])(tmp6);
  let obj3 = user(navigateToPremium[35]);
  let items = [closure_8];
  const stateFromStores = obj3.useStateFromStores(items, () => status.getStatus());
  const tmp9 = navigateToFriends(navigateToPremium[36])("YouScreenUserProfileContent");
  UserProfileSections = tmp9;
  const tmp10 = navigateToFriends(navigateToPremium[37])({ user, displayProfile: tmp6 });
  const primaryColor = tmp10.primaryColor;
  UserProfileThemeTypes = tmp11;
  ({ theme, secondaryColor } = tmp10);
  let obj4 = user(navigateToPremium[38]);
  const userProfileColors = obj4.useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  containerBorderColor = userProfileColors.containerBorderColor;
  let obj5 = initialTab;
  ({ avatarBackground, statusBackground } = userProfileColors);
  let items1 = [trackUserProfileAction];
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const result = user(navigateToPremium[11]).showYouAccountActionSheet();
  }, items1);
  let obj6 = user(navigateToPremium[39]);
  enabled = obj6.useVirtualCurrencyMobileEnabled().enabled;
  const ref = initialTab.useRef(null);
  [obj8, tmp16] = navigateToShop(initialTab.useState(null), 2);
  c15 = tmp16;
  obj8 = user(navigateToPremium[40]);
  shouldShowExpiringTrialOfferCard = obj8.useShouldShowExpiringTrialOfferCard();
  let obj9 = user(navigateToPremium[35]);
  let items2 = [customStatusActivity];
  stateFromStores1 = obj9.useStateFromStores(items2, () => customStatusActivity.getFirstWishlistId(user.id));
  let obj10 = user(navigateToPremium[41]);
  const tmp19 = obj10.useDisplayableBoardWidgets(user.id).length > 0;
  closure_18 = tmp19;
  let obj11 = user(navigateToPremium[42]);
  const profileTabIndices = obj11.useProfileTabIndices(tmp19, true);
  boardTabIndex = profileTabIndices.boardTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp21 = navigateToShop(initialTab.useState(0), 2);
  first = tmp21[0];
  closure_22 = tmp21[1];
  const callback1 = initialTab.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  let tmp15 = navigateToShop(initialTab.useState(null), 2);
  const pageHeights = user(navigateToPremium[43]).usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const items3 = [trackUserProfileAction];
  const callback2 = initialTab.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
  }, items3);
  const obj13 = user(navigateToPremium[43]);
  const profileSectionTabs = user(navigateToPremium[42]).useProfileSectionTabs({ initialUserProfileSection: initialTab, wishlistTabIndex, boardTabIndex, onTabChange: callback2 });
  activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  closure_27 = tmp27;
  const items4 = [customStatusActivity, tmp16];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback3 = initialTab.useCallback(() => {
    let tmp2 = null;
    if (null == customStatusActivity) {
      tmp2 = navigateToFriends(navigateToPremium[44])();
    }
    c15(tmp2);
  }, items4);
  const items5 = [callback3];
  const effect = initialTab.useEffect(() => {
    setImmediate(() => {
      callback();
    });
  }, items5);
  let labelResult;
  if (null != obj7) {
    labelResult = obj7.label();
  }
  const items6 = [containerBackground, containerBorderColor, tmp9, tmp3, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, null != primaryColor, enabled, user, tmp6, navigateToFriends];
  callback4 = obj5.useCallback(() => {
    const items = [closure_5.card, ];
    if (closure_10) {
      let obj = { backgroundColor: null, borderColor: null, borderWidth: 1 };
      obj[0] = containerBackground;
      obj[1] = containerBorderColor;
      items[1] = obj;
      let tmp4 = tmp2;
      let tmp5 = items;
    } else {
      obj = { backgroundColor: null };
      obj[0] = containerBackground;
      items[1] = obj;
      tmp4 = tmp2;
      tmp5 = items;
    }
    obj = { style: items1, children: null };
    items1 = [, ];
    ({ cards: arr2[0], profileContent: arr2[1] } = tmp4);
    const items2 = [containerBorderColor(navigateToFriends(navigateToPremium[45]), { navigateToPremium, style: tmp5 }), , , , , , , , , ];
    let tmp10Result = !shouldShowExpiringTrialOfferCard;
    if (!shouldShowExpiringTrialOfferCard) {
      const obj2 = { navigateToPremium: null, navigateToShop: null, hasCustomProfileTheme: null };
      obj2[0] = navigateToPremium;
      obj2[1] = navigateToShop;
      obj2[2] = closure_11;
      tmp10Result = tmp10(tmp11(tmp12[46]), obj2);
    }
    items2[1] = tmp10Result;
    tmp10Result = enabled;
    if (enabled) {
      const obj3 = { style: null };
      obj3[0] = tmp5;
      tmp10Result = tmp10(tmp11(tmp12[47]), obj3);
    }
    items2[2] = tmp10Result;
    items2[3] = containerBorderColor(navigateToFriends(navigateToPremium[48]), { user, currentUser: user, style: tmp5 });
    const obj5 = { userId: user.id, displayProfile: closure_8, style: null };
    let tmp20;
    let tmp11Result = tmp11(tmp12[49]);
    if (!closure_10) {
      tmp20 = tmp5;
    }
    obj5[2] = tmp20;
    items2[4] = containerBorderColor(tmp11Result, obj5);
    let tmp10Result1 = tmp;
    if (closure_10) {
      tmp10Result1 = tmp10(tmp11(tmp12[50]), {});
    }
    items2[5] = tmp10Result1;
    const obj6 = { userId: user.id, style: null };
    let tmp23;
    if (!closure_10) {
      tmp23 = tmp5;
    }
    obj6[1] = tmp23;
    items2[6] = containerBorderColor(user(navigateToPremium[51]).UserProfileAccountConnectionsCard, obj6);
    const obj7 = { userId: user.id, style: null };
    let tmp24;
    if (!closure_10) {
      tmp24 = tmp5;
    }
    obj7[1] = tmp24;
    items2[7] = containerBorderColor(user(navigateToPremium[51]).UserProfileApplicationRoleConnectionsCard, obj7);
    items2[8] = containerBorderColor(navigateToFriends(navigateToPremium[52]), { userId: user.id, navigateToFriends, style: tmp5 });
    const obj9 = { userId: user.id, style: null };
    let tmp26;
    tmp11Result = tmp11(tmp12[53]);
    if (!closure_10) {
      tmp26 = tmp5;
    }
    obj9[1] = tmp26;
    items2[9] = containerBorderColor(tmp11Result, obj9);
    obj[1] = items2;
    return enabled(navigation, obj);
  }, items6);
  const items7 = [tmp3.profileContent, stateFromStores1, first, activeProfileTabSection === UserProfileSections.WISHLIST, user.id];
  callback5 = obj5.useCallback(() => {
    let obj = { style: closure_5.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp4Result = containerBorderColor(user(navigateToPremium[54]).WishlistEmptyState, {});
      let tmp6 = navigateToPremium;
      let tmp4 = containerBorderColor;
    } else {
      tmp4 = containerBorderColor;
      tmp6 = navigateToPremium;
      obj = { wishlistId: null, containerWidth: null, isVisible: null };
      obj[0] = tmp3;
      let tmp8;
      if (first > 0) {
        tmp8 = first;
      }
      obj[1] = tmp8;
      obj[2] = closure_27;
      tmp4Result = tmp4(navigateToFriends(navigateToPremium[54]), obj);
      const tmp7 = navigateToFriends(navigateToPremium[54]);
    }
    const items = [tmp4Result, ];
    obj = { userId: user.id, wishlistId: tmp3, containerWidth: null };
    let tmp15;
    if (first > 0) {
      tmp15 = first;
    }
    obj[2] = tmp15;
    items[1] = tmp4(navigateToFriends(tmp6[55]), obj);
    obj[1] = items;
    return enabled(navigation, obj);
  }, items7);
  const items8 = [callback4, callback5, handlePageContentSize, tmp19, boardTabIndex, wishlistTabIndex, user.id, activeProfileTabSection, tmp9, containerBackground, containerBorderColor];
  const memo = obj5.useMemo(() => {
    let obj = { id: "main", label: null, page: null };
    const intl = user(navigateToPremium[27]).intl;
    obj[1] = intl.string(user(navigateToPremium[27]).t.LXw470);
    obj = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return callback(0, arg0, arg1);
      },
      children: callback4()
    };
    obj[2] = containerBorderColor(closure_5, obj);
    const items = [obj];
    if (closure_18) {
      obj = { id: "board", label: null, page: null };
      const intl2 = tmp(tmp2[27]).intl;
      obj[1] = intl2.string(tmp(tmp2[27]).t.laViwx);
      obj1 = { scrollEnabled: false, onContentSizeChange: null, children: null };
      obj1[1] = function onContentSizeChange(arg0, arg1) {
        return callback(closure_19, arg0, arg1);
      };
      const obj2 = { userId: null, activeSection: null, isRefreshEnabled: null, containerBackground: null, containerBorderColor: null };
      obj2[0] = user.id;
      obj2[1] = activeProfileTabSection;
      obj2[2] = closure_10;
      obj2[3] = containerBackground;
      obj2[4] = containerBorderColor;
      obj1[2] = tmp3(stateFromStores1, obj2);
      obj[2] = tmp3(tmp4, obj1, boardTabIndex);
      items.push(obj);
    }
    const obj3 = { id: "wishlist", label: null, page: null };
    const intl3 = tmp(tmp2[27]).intl;
    obj3[1] = intl3.string(user(navigateToPremium[27]).t["7lZ31J"]);
    obj3[2] = containerBorderColor(closure_5, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return callback(closure_20, arg0, arg1);
      },
      children: callback5()
    }, wishlistTabIndex);
    items.push(obj3);
    return items;
  }, items8);
  let tmp4Result = tmp4(tmp2[56]);
  obj = { pageWidth: first, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[26]).space.PX_24, items: memo, onPageChange: handleTabChange };
  segmentedControlState = tmp4Result.useSegmentedControlState(obj);
  tmp4Result = tmp4(tmp2[43]);
  const pagerFillHeight = tmp4Result.usePagerFillHeight();
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj5.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const obj14 = user(navigateToPremium[42]);
  const pagesHeightStyle = user(navigateToPremium[43]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  closure_32 = obj5.useRef(segmentedControlState.setActiveIndex);
  const items10 = [segmentedControlState];
  const effect1 = obj5.useEffect(() => {
    closure_32.current = segmentedControlState.setActiveIndex;
  }, items10);
  const tmp4Result1 = user(navigateToPremium[43]);
  const items11 = [initialTab, navigation, wishlistTabIndex, setActiveProfileTabSection];
  const focusEffect = user(navigateToPremium[31]).useFocusEffect(obj5.useCallback(() => {
    if (undefined !== initialTab) {
      let num = 0;
      if (tmp === constants.WISHLIST) {
        num = wishlistTabIndex;
      }
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        closure_1_25(closure_1_4 === constants.WISHLIST ? constants.WISHLIST : constants.MAIN);
        closure_1_32.current(num, false, true);
        closure_1_6.setParams({ initialTab: "r" });
      }, 80);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
      let obj = closure_1_6;
      if (!closure_1_6.isFocused()) {
        const parent = obj.getParent();
        let isFocusedResult;
        if (parent != null) {
          isFocusedResult = parent.isFocused();
        }
        if (isFocusedResult) {
          obj = { initialTab: null };
          obj[0] = constants.MAIN;
          obj.setParams(obj);
        }
      }
    };
  }, items11));
  obj = { style, children: null };
  obj1 = { style: items12, children: null };
  items12 = [tmp3.profileContentWrapper, { paddingTop: 0 }];
  const items13 = [containerBorderColor(shouldShowExpiringTrialOfferCard, { user, backgroundColor: avatarBackground, statusStyle: { backgroundColor: statusBackground }, animate: flag }), , , ];
  obj2 = { ref, customStatusActivity, hasCustomProfileTheme: tmp11, style: items14, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj7 };
  items14 = [, ];
  ({ customStatusBubble: arr16[0], customStatusBubbleInset: arr16[1] } = tmp3);
  items13[1] = containerBorderColor(navigateToFriends(navigateToPremium[59]), obj2);
  obj3 = { style: items15, children: null };
  items15 = [, ];
  ({ primaryInfo: arr17[0], profileContent: arr17[1] } = tmp3);
  obj4 = { user, pronouns: null, badges: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, themeType: null, showChevron: true };
  let pronouns;
  const tmp4Result2 = user(navigateToPremium[31]);
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  obj4[1] = pronouns;
  obj4[2] = arr;
  obj4[3] = containerBackground;
  obj4[4] = callback;
  let intl = tmp4(tmp2[27]).intl;
  obj5 = { status: null };
  const tmpResult = navigateToFriends(navigateToPremium[60]);
  obj5[0] = user(navigateToPremium[61]).getStatusLabel(stateFromStores);
  const tmp4Result3 = user(navigateToPremium[61]);
  let intl2 = tmp4(tmp2[27]).intl;
  obj4[5] = "" + intl.formatToPlainString(user(navigateToPremium[27]).t["er+FRD"], obj5) + ", " + intl2.string(user(navigateToPremium[27]).t.C6COaT);
  obj4[6] = UserProfileThemeTypes.YOU_SCREEN;
  const items16 = [containerBorderColor(tmpResult, obj4), ];
  obj6 = { navigateToProfileCustomization, hasBadges: arr.length > 0, isProfileLoaded: null != tmp6 };
  items16[1] = containerBorderColor(closure_18, obj6);
  obj3[1] = items16;
  items13[2] = enabled(navigation, obj3);
  obj7 = { style: { flex: 1 }, onLayout: callback1, children: null };
  obj8 = { style: tmp3.profileTablist, children: null };
  obj9 = { state: segmentedControlState, variant: null };
  let str;
  if (null != primaryColor) {
    str = "gradient-background";
  }
  obj10 = { children: null };
  obj9[1] = str;
  obj8[1] = containerBorderColor(user(navigateToPremium[62]).Tabs, obj9);
  const items17 = [containerBorderColor(navigation, obj8), ];
  obj11 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: tmp40(tmp4(tmp2[63]).SegmentedControlPages, { state: segmentedControlState }) };
  items17[1] = containerBorderColor(navigateToFriends(navigateToPremium[57]).View, obj11);
  obj7[2] = items17;
  items13[3] = enabled(navigation, obj7);
  obj1[1] = items13;
  obj10[0] = enabled(navigation, obj1);
  obj[1] = containerBorderColor(user(navigateToPremium[58]).LayerScope, obj10);
  return containerBorderColor(navigateToFriends(navigateToPremium[57]).View, obj);
};