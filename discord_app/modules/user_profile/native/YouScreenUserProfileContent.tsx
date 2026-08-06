// discord_app/modules/user_profile/native/YouScreenUserProfileContent.tsx
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled";
import DismissibleContent from "DismissibleContent";
import get_ActivityIndicator from "UserProfileAnalyticsProvider";
import { useIsContentShown } from "withContent";
import filterPlayingActivities from "filterPlayingActivities";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import { UserProfileThemeTypes } from "ARBITRARY_LARGE_OFFSET";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "UserProfileTextButtonGroup";
import { set } from "../../../utils/PlatformUtils.tsx";
import { OpenableUserProfileAvatar } from "UserProfileAvatar.tsx";
import { useSharedStyles } from "UserProfileSharedStyles.tsx";
import { WidgetRenderer } from "UserProfileWidgetsBoard.tsx";
import { UserProfileWidgetsBoardEditNotice } from "UserProfileWidgetsBoardEditNotice.tsx";

let c5;
let closure_14;
let closure_15;
let closure_6;
let map1;
const require = arg1;
function YouAvatar(arg0) {
  const callback = React.useCallback(() => {
    const result = callback(15762).trackYouTabAvatarPress();
    const obj = callback(15762);
    const result1 = callback(15381).showYouAccountActionSheet();
  }, []);
  let obj = set;
  const isAndroidResult = obj.isAndroid();
  obj = {};
  const merged = Object.assign(arg0);
  obj.onPress = callback;
  obj.importantForAccessibility = "no-hide-descendants";
  obj.accessibilityElementsHidden = isAndroidResult;
  obj.accessible = !isAndroidResult;
  return closure_13(OpenableUserProfileAvatar, obj);
}
function YouScreenWidgetsBoardContainer(containerBackground) {
  let activeSection;
  let containerBorderColor;
  let isRefreshEnabled;
  let userId;
  containerBackground = containerBackground.containerBackground;
  ({ userId, activeSection, isRefreshEnabled, containerBorderColor } = containerBackground);
  const tmp3 = useSharedStyles();
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
  const items1 = [callback2(UserProfileWidgetsBoardEditNotice, {}), callback2(WidgetRenderer, { userId, isVisible: activeSection === UserProfileSections.WIDGETS, cardStyle: tmp4 })];
  obj[1] = items1;
  return callback3(closure_6, obj);
}
function EditSection(navigateToProfileCustomization) {
  navigateToProfileCustomization = navigateToProfileCustomization.navigateToProfileCustomization;
  let trackUserProfileAction;
  let dependencyMap;
  let callback;
  let obj = navigateToProfileCustomization(8711);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj1 = React;
  const ref = React.useRef(null);
  let obj2 = navigateToProfileCustomization(9160);
  const isDisplayNameStylesFlywheelSettersEnabled = obj2.useIsDisplayNameStylesFlywheelSettersEnabled("YouScreenUserProfileContent");
  const tmp3 = trackUserProfileAction(8758)();
  navigateToProfileCustomization(5943);
  if (isDisplayNameStylesFlywheelSettersEnabled) {
    if (!tmp7) {
      let items = [tmp4(1358).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK];
    }
    const tmp11 = callback(tmp9(items), 2);
    dependencyMap = tmp12;
    const tmp13 = tmp11[0] === tmp4(1358).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK;
    callback = tmp13;
    const items1 = [navigateToProfileCustomization, trackUserProfileAction, tmp13, tmp11[1]];
    obj = { children: null };
    callback = obj1.useCallback(() => {
      trackUserProfileAction({ action: "EDIT_PROFILE" });
      const result = navigateToProfileCustomization(_undefined[10]).trackYouTabEditProfilePress();
      navigateToProfileCustomization();
      if (c3) {
        _undefined(outer1_12.TAKE_ACTION);
      }
    }, items1);
    obj = { style: null, secondaryButton: null };
    obj[0] = tmp3.primaryButtons;
    obj1 = { ref: null, variant: "primary", icon: null, text: null, onPress: null, grow: true };
    obj1[0] = ref;
    obj2 = { size: "sm", color: null };
    obj2[1] = tmp(712).colors.WHITE;
    obj1[2] = callback2(tmp4(9591).PencilIcon, obj2);
    const intl = tmp4(1236).intl;
    obj1[3] = intl.string(tmp4(1236).t.AAjhgi);
    obj1[4] = callback;
    obj[1] = callback2(tmp4(4695).Button, obj1);
    const items2 = [callback2(tmp(12187), obj), ];
    const obj3 = { targetRef: null, visible: null, markAsDismissed: null };
    obj3[0] = ref;
    obj3[1] = tmp13;
    obj3[2] = tmp11[1];
    items2[1] = callback2(tmp(15770), obj3);
    obj[0] = items2;
    return callback3(closure_15, obj);
  }
  items = [];
}
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: map1, jsxs: closure_14, Fragment: closure_15 } = jsxProd);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/YouScreenUserProfileContent.tsx");

export default function YouScreenUserProfileContent(user) {
  let activeProfileTabSectionIndex;
  let avatarBackground;
  let fillHeight;
  let handleTabChange;
  let measureFill;
  let navigateToProfileCustomization;
  let obj8;
  let pagerRef;
  let secondaryColor;
  let statusBackground;
  let style;
  let theme;
  let tmp17;
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
  let c5;
  let navigation;
  let trackUserProfileAction;
  let c8;
  let customStatusActivity;
  let UserProfileSections;
  let UserProfileThemeTypes;
  let containerBackground;
  let containerBorderColor;
  let enabled;
  let c15;
  let shouldShowExpiringTrialOfferCard;
  let stateFromStores1;
  let c18;
  let boardTabIndex;
  let wishlistTabIndex;
  let first;
  let closure_22;
  let handlePageContentSize;
  let activeProfileTabSection;
  let setActiveProfileTabSection;
  let restoreActiveIndex;
  let c27;
  let callback3;
  let callback4;
  let callback5;
  let segmentedControlState;
  let closure_32;
  const tmp3 = navigateToFriends(navigateToPremium[14])();
  c5 = tmp3;
  let obj = user(navigateToPremium[27]);
  navigation = obj.useNavigation();
  let obj1 = user(navigateToPremium[17]);
  trackUserProfileAction = obj1.useUserProfileAnalyticsContext().trackUserProfileAction;
  let tmp6 = navigateToFriends(navigateToPremium[28])(user.id);
  c8 = tmp6;
  let obj2 = user(navigateToPremium[29]);
  customStatusActivity = obj2.useCustomStatusActivity();
  let obj3 = user(navigateToPremium[31]);
  let items = [c8];
  const stateFromStores = obj3.useStateFromStores(items, () => _undefined2.getStatus());
  const tmp10 = navigateToFriends(navigateToPremium[32])("YouScreenUserProfileContent");
  UserProfileSections = tmp10;
  const tmp11 = navigateToFriends(navigateToPremium[33])({ user, displayProfile: tmp6 });
  const primaryColor = tmp11.primaryColor;
  UserProfileThemeTypes = tmp12;
  ({ theme, secondaryColor } = tmp11);
  let obj4 = user(navigateToPremium[34]);
  const userProfileColors = obj4.useUserProfileColors({ theme, primaryColor, secondaryColor });
  containerBackground = userProfileColors.containerBackground;
  containerBorderColor = userProfileColors.containerBorderColor;
  let obj5 = initialTab;
  ({ avatarBackground, statusBackground } = userProfileColors);
  let items1 = [trackUserProfileAction];
  let tmp8 = navigateToFriends(navigateToPremium[30])(tmp6);
  const callback = initialTab.useCallback(() => {
    trackUserProfileAction({ action: "PRESS_SET_STATUS" });
    const result = user(navigateToPremium[11]).showYouAccountActionSheet();
  }, items1);
  let obj6 = user(navigateToPremium[35]);
  enabled = obj6.useVirtualCurrencyMobileEnabled().enabled;
  const ref = initialTab.useRef(null);
  [obj8, tmp17] = navigateToShop(initialTab.useState(null), 2);
  c15 = tmp17;
  obj8 = user(navigateToPremium[36]);
  shouldShowExpiringTrialOfferCard = obj8.useShouldShowExpiringTrialOfferCard();
  let obj9 = user(navigateToPremium[31]);
  let items2 = [customStatusActivity];
  stateFromStores1 = obj9.useStateFromStores(items2, () => customStatusActivity.getFirstWishlistId(user.id));
  let obj10 = user(navigateToPremium[37]);
  let tmp20 = obj10.useDisplayableBoardWidgets(user.id).length > 0;
  c18 = tmp20;
  const tmp16 = navigateToShop(initialTab.useState(null), 2);
  const profileTabIndices = user(navigateToPremium[38]).useProfileTabIndices(tmp20, true);
  boardTabIndex = profileTabIndices.boardTabIndex;
  wishlistTabIndex = profileTabIndices.wishlistTabIndex;
  const tmp22 = navigateToShop(initialTab.useState(0), 2);
  first = tmp22[0];
  closure_22 = tmp22[1];
  const callback1 = initialTab.useCallback((nativeEvent) => {
    callback(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj12 = user(navigateToPremium[38]);
  const pageHeights = user(navigateToPremium[39]).usePageHeights();
  handlePageContentSize = pageHeights.handlePageContentSize;
  const items3 = [trackUserProfileAction];
  const callback2 = initialTab.useCallback((section) => {
    trackUserProfileAction({ action: "PRESS_SECTION", section });
  }, items3);
  const obj13 = user(navigateToPremium[39]);
  const profileSectionTabs = user(navigateToPremium[38]).useProfileSectionTabs({ initialUserProfileSection: initialTab, wishlistTabIndex, boardTabIndex, onTabChange: callback2 });
  activeProfileTabSection = profileSectionTabs.activeProfileTabSection;
  setActiveProfileTabSection = profileSectionTabs.setActiveProfileTabSection;
  restoreActiveIndex = profileSectionTabs.restoreActiveIndex;
  c27 = tmp28;
  const items4 = [customStatusActivity, tmp17];
  ({ handleTabChange, activeProfileTabSectionIndex } = profileSectionTabs);
  callback3 = initialTab.useCallback(() => {
    let tmp2 = null;
    if (null == customStatusActivity) {
      tmp2 = navigateToFriends(navigateToPremium[40])();
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
  const items6 = [containerBackground, containerBorderColor, tmp10, tmp3, navigateToPremium, shouldShowExpiringTrialOfferCard, navigateToShop, null != primaryColor, enabled, user, tmp6, navigateToFriends];
  callback4 = obj5.useCallback(() => {
    const items = [_undefined.card, ];
    if (c10) {
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
    const items2 = [containerBorderColor(navigateToFriends(navigateToPremium[41]), { navigateToPremium, style: tmp5 }), , , , , , , , , ];
    let tmp10Result = !shouldShowExpiringTrialOfferCard;
    if (!shouldShowExpiringTrialOfferCard) {
      const obj2 = { navigateToPremium: null, navigateToShop: null, hasCustomProfileTheme: null };
      obj2[0] = navigateToPremium;
      obj2[1] = navigateToShop;
      obj2[2] = c11;
      tmp10Result = tmp10(tmp11(tmp12[42]), obj2);
    }
    items2[1] = tmp10Result;
    tmp10Result = enabled;
    if (enabled) {
      const obj3 = { style: null };
      obj3[0] = tmp5;
      tmp10Result = tmp10(tmp11(tmp12[43]), obj3);
    }
    items2[2] = tmp10Result;
    items2[3] = containerBorderColor(navigateToFriends(navigateToPremium[44]), { user, currentUser: user, style: tmp5 });
    const obj5 = { userId: user.id, displayProfile: c8, style: null };
    let tmp20;
    let tmp11Result = tmp11(tmp12[45]);
    if (!c10) {
      tmp20 = tmp5;
    }
    obj5[2] = tmp20;
    items2[4] = containerBorderColor(tmp11Result, obj5);
    let tmp10Result1 = tmp;
    if (c10) {
      tmp10Result1 = tmp10(tmp11(tmp12[46]), {});
    }
    items2[5] = tmp10Result1;
    const obj6 = { userId: user.id, style: null };
    let tmp23;
    if (!c10) {
      tmp23 = tmp5;
    }
    obj6[1] = tmp23;
    items2[6] = containerBorderColor(user(navigateToPremium[47]).UserProfileAccountConnectionsCard, obj6);
    const obj7 = { userId: user.id, style: null };
    let tmp24;
    if (!c10) {
      tmp24 = tmp5;
    }
    obj7[1] = tmp24;
    items2[7] = containerBorderColor(user(navigateToPremium[47]).UserProfileApplicationRoleConnectionsCard, obj7);
    items2[8] = containerBorderColor(navigateToFriends(navigateToPremium[48]), { userId: user.id, navigateToFriends, style: tmp5 });
    const obj9 = { userId: user.id, style: null };
    let tmp26;
    tmp11Result = tmp11(tmp12[49]);
    if (!c10) {
      tmp26 = tmp5;
    }
    obj9[1] = tmp26;
    items2[9] = containerBorderColor(tmp11Result, obj9);
    obj[1] = items2;
    return enabled(navigation, obj);
  }, items6);
  const items7 = [tmp3.profileContent, stateFromStores1, first, activeProfileTabSection === UserProfileSections.WISHLIST, user.id];
  callback5 = obj5.useCallback(() => {
    let obj = { style: _undefined.profileContent, children: null };
    if (null == stateFromStores1) {
      let tmp4Result = containerBorderColor(user(navigateToPremium[50]).WishlistEmptyState, {});
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
      obj[2] = c27;
      tmp4Result = tmp4(navigateToFriends(navigateToPremium[50]), obj);
      const tmp7 = navigateToFriends(navigateToPremium[50]);
    }
    const items = [tmp4Result, ];
    obj = { userId: user.id, wishlistId: tmp3, containerWidth: null };
    let tmp15;
    if (first > 0) {
      tmp15 = first;
    }
    obj[2] = tmp15;
    items[1] = tmp4(navigateToFriends(tmp6[51]), obj);
    obj[1] = items;
    return enabled(navigation, obj);
  }, items7);
  const items8 = [callback4, callback5, handlePageContentSize, tmp20, boardTabIndex, wishlistTabIndex, user.id, activeProfileTabSection, tmp10, containerBackground, containerBorderColor];
  const memo = obj5.useMemo(() => {
    let obj = { id: "main", label: null, page: null };
    const intl = user(navigateToPremium[25]).intl;
    obj[1] = intl.string(user(navigateToPremium[25]).t.LXw470);
    obj = {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return callback(0, arg0, arg1);
      },
      children: callback4()
    };
    obj[2] = containerBorderColor(c5, obj);
    const items = [obj];
    if (c18) {
      obj = { id: "board", label: null, page: null };
      const intl2 = tmp(tmp2[25]).intl;
      obj[1] = intl2.string(tmp(tmp2[25]).t.laViwx);
      const obj1 = { scrollEnabled: false, onContentSizeChange: null, children: null };
      obj1[1] = function onContentSizeChange(arg0, arg1) {
        return callback(closure_19, arg0, arg1);
      };
      const obj2 = { userId: null, activeSection: null, isRefreshEnabled: null, containerBackground: null, containerBorderColor: null };
      obj2[0] = user.id;
      obj2[1] = activeProfileTabSection;
      obj2[2] = c10;
      obj2[3] = containerBackground;
      obj2[4] = containerBorderColor;
      obj1[2] = tmp3(stateFromStores1, obj2);
      obj[2] = tmp3(tmp4, obj1, boardTabIndex);
      items.push(obj);
    }
    const obj3 = { id: "wishlist", label: null, page: null };
    const intl3 = tmp(tmp2[25]).intl;
    obj3[1] = intl3.string(user(navigateToPremium[25]).t["7lZ31J"]);
    obj3[2] = containerBorderColor(c5, {
      scrollEnabled: false,
      onContentSizeChange(arg0, arg1) {
        return callback(closure_20, arg0, arg1);
      },
      children: callback5()
    }, wishlistTabIndex);
    items.push(obj3);
    return items;
  }, items8);
  let tmp4Result = tmp4(tmp2[52]);
  obj = { pageWidth: first, defaultIndex: activeProfileTabSectionIndex, itemSpacing: tmp(tmp2[24]).space.PX_24, items: memo, onPageChange: handleTabChange };
  segmentedControlState = tmp4Result.useSegmentedControlState(obj);
  tmp4Result = tmp4(tmp2[39]);
  const pagerFillHeight = tmp4Result.usePagerFillHeight();
  const items9 = [segmentedControlState, restoreActiveIndex];
  ({ pagerRef, fillHeight, measureFill } = pagerFillHeight);
  const layoutEffect = obj5.useLayoutEffect(() => {
    restoreActiveIndex(segmentedControlState);
  }, items9);
  const obj14 = user(navigateToPremium[38]);
  const pagesHeightStyle = user(navigateToPremium[39]).usePagesHeightStyle(segmentedControlState, pageHeights.pageHeights, fillHeight);
  closure_32 = obj5.useRef(segmentedControlState.setActiveIndex);
  const items10 = [segmentedControlState];
  const effect1 = obj5.useEffect(() => {
    closure_32.current = segmentedControlState.setActiveIndex;
  }, items10);
  const tmp4Result1 = user(navigateToPremium[39]);
  const items11 = [initialTab, navigation, wishlistTabIndex, setActiveProfileTabSection];
  const focusEffect = user(navigateToPremium[27]).useFocusEffect(obj5.useCallback(() => {
    if (undefined !== initialTab) {
      let num = 0;
      if (tmp === _undefined3.WISHLIST) {
        num = wishlistTabIndex;
      }
      const _setTimeout = setTimeout;
      const timeout = setTimeout(() => {
        outer1_25(outer1_4 === constants.WISHLIST ? constants.WISHLIST : constants.MAIN);
        outer1_32.current(num, false, true);
        outer1_6.setParams({ initialTab: "r" });
      }, 80);
    }
    return () => {
      if (null != closure_0) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp);
      }
      let obj = outer1_6;
      if (!outer1_6.isFocused()) {
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
  obj2 = { ref, customStatusActivity, hasCustomProfileTheme: tmp12, style: items14, emojiOnlyStyle: tmp3.emojiOnlyCustomStatusBubble, editEnabled: true, placeholderText: labelResult, prompt: obj7 };
  items14 = [, ];
  ({ customStatusBubble: arr15[0], customStatusBubbleInset: arr15[1] } = tmp3);
  items13[1] = containerBorderColor(navigateToFriends(navigateToPremium[55]), obj2);
  obj3 = { style: items15, children: null };
  items15 = [, ];
  ({ primaryInfo: arr16[0], profileContent: arr16[1] } = tmp3);
  obj4 = { user, pronouns: null, badges: null, badgeContainerBackground: null, onPressDisplayName: null, displayNameAccessibilityHint: null, themeType: null, showChevron: true };
  let pronouns;
  const tmp4Result2 = user(navigateToPremium[27]);
  if (tmp6 != null) {
    pronouns = tmp6.pronouns;
  }
  obj4[1] = pronouns;
  obj4[2] = tmp8;
  obj4[3] = containerBackground;
  obj4[4] = callback;
  let intl = tmp4(tmp2[25]).intl;
  obj5 = { status: null };
  const tmpResult = navigateToFriends(navigateToPremium[56]);
  obj5[0] = user(navigateToPremium[57]).getStatusLabel(stateFromStores);
  const tmp4Result3 = user(navigateToPremium[57]);
  let intl2 = tmp4(tmp2[25]).intl;
  obj4[5] = "" + intl.formatToPlainString(user(navigateToPremium[25]).t["er+FRD"], obj5) + ", " + intl2.string(user(navigateToPremium[25]).t.C6COaT);
  obj4[6] = UserProfileThemeTypes.YOU_SCREEN;
  const items16 = [containerBorderColor(tmpResult, obj4), containerBorderColor(c18, { navigateToProfileCustomization })];
  obj3[1] = items16;
  items13[2] = enabled(navigation, obj3);
  obj6 = { style: { flex: 1 }, onLayout: callback1, children: null };
  obj7 = { style: tmp3.profileTablist, children: null };
  obj8 = { state: segmentedControlState, variant: null };
  let str;
  if (null != primaryColor) {
    str = "gradient-background";
  }
  obj9 = { children: null };
  obj8[1] = str;
  obj7[1] = containerBorderColor(user(navigateToPremium[58]).Tabs, obj8);
  const items17 = [containerBorderColor(navigation, obj7), ];
  obj10 = { ref: pagerRef, onLayout: measureFill, style: pagesHeightStyle, children: null };
  obj10[3] = containerBorderColor(user(navigateToPremium[59]).SegmentedControlPages, { state: segmentedControlState });
  items17[1] = containerBorderColor(navigateToFriends(navigateToPremium[53]).View, obj10);
  obj6[2] = items17;
  items13[3] = enabled(navigation, obj6);
  obj1[1] = items13;
  obj9[0] = enabled(navigation, obj1);
  obj[1] = containerBorderColor(user(navigateToPremium[54]).LayerScope, obj9);
  return containerBorderColor(navigateToFriends(navigateToPremium[53]).View, obj);
};