// discord_app/modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../../collectibles/CollectiblesActionCreators.tsx";
import MobileWishlistSuggestionsExperiment from "../../wishlists/experiments/MobileWishlistSuggestionsExperiment.tsx";
import useCardGridLayoutDefault from "../hooks/native/useCardGridLayout.tsx";
import useWishlistSuggestionsDismissibleContentDefault from "../hooks/useWishlistSuggestionsDismissibleContent.tsx";
import AddToWishlistGridDefault from "../../wishlists/native/AddToWishlistGrid.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import WishlistStore from "../../wishlists/WishlistStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function UserProfileWishlistSuggestionsGridContent(arg0) {
  ({ userId, wishlistId } = arg0);
  ({ containerWidth, maxWidth } = arg0);
  let obj = wishlistId(504);
  const items = [WishlistStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let wishlist = null;
    if (null != wishlistId) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  });
  const items1 = [WishlistStore];
  const stateFromStores1 = wishlistId(504).useStateFromStores(items1, () => {
    let lastFetchedAt = null;
    if (null != wishlistId) {
      lastFetchedAt = WishlistStore.getLastFetchedAt(tmp);
    }
    return lastFetchedAt;
  });
  obj = { userId, wishlist: stateFromStores, hasFetchedWishlist: null };
  let tmp4 = null == wishlistId;
  const obj2 = wishlistId(504);
  if (!tmp4) {
    tmp4 = null != stateFromStores1;
  }
  obj.hasFetchedWishlist = tmp4;
  let tmp8 = null;
  if (tmp3Result.isVisible) {
    obj = {
      userId,
      wishlistId,
      wishlist: stateFromStores,
      containerWidth,
      maxWidth,
      isDismissible: tmp6,
      markAsDismissed: tmp7,
    };
    tmp8 = closure_12(WishlistSuggestionsGridContents, obj);
  }
  return tmp8;
}
function WishlistSuggestionsGridContents(arg0) {
  ({ userId, wishlist, isDismissible } = arg0);
  let trackUserProfileWishlistAction;
  ({ wishlistId, containerWidth, maxWidth, markAsDismissed } = arg0);
  let obj = trackUserProfileWishlistAction(8190);
  trackUserProfileWishlistAction = obj.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
  const tmp3 = closure_15();
  let obj1 = trackUserProfileWishlistAction(504);
  let items = [AccessibilityStore];
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  closure_129_0 = stateFromStores;
  let items1 = [stateFromStores];
  const memo = noop.useMemo(() => {
    const ReduceMotion = ReanimatedRexport.ReduceMotion;
    const tmp = trackUserProfileWishlistAction ? ReduceMotion.Always : ReduceMotion.Never;
    const obj = { entering: null, exiting: null, layout: null };
    const FadeInDown = ReanimatedRexport.FadeInDown;
    obj.entering = FadeInDown.reduceMotion(tmp);
    const FadeOutDown = ReanimatedRexport.FadeOutDown;
    obj.exiting = FadeOutDown.reduceMotion(tmp);
    const LinearTransition = ReanimatedRexport.LinearTransition;
    const springifyResult = LinearTransition.springify();
    const massResult = LinearTransition.springify().mass(0.8);
    const dampingResult = LinearTransition.springify().mass(0.8).damping(100);
    obj.layout = LinearTransition.springify().mass(0.8).damping(100).stiffness(300).reduceMotion(tmp);
    return obj;
  }, items1);
  obj = { minCardSize: 80, maxCardSize: 120, containerWidth, maxWidth, sidePadding: closure_8 + PX_16 + 1, gap };
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj3 = trackUserProfileWishlistAction(13092);
  obj = {
    userId,
    wishlist,
    numWishlistItemsToRecommend: 15,
    maxWishlistItemsToShow: 9,
    source: trackUserProfileWishlistAction(8776).WishlistFetchSource.USER_PROFILE,
  };
  const items2 = obj3.useAddToWishlistGridItems(obj).items;
  const items3 = [trackUserProfileWishlistAction];
  const callback = noop.useCallback(() => {
    let obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, productLines: null };
    const items = [SKUProductLines.COLLECTIBLES];
    obj.productLines = new Set(items);
    trackUserProfileWishlistAction(obj);
    const set = new Set(items);
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    obj = { analyticsSource: AnalyticsLocationDefault.USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
    const items1 = [AnalyticsLocationDefault.USER_PROFILE_WISHLIST];
    obj.analyticsLocations = items1;
    obj.screen = constants2.FEATURED_PAGE;
    const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj);
  }, items3);
  if (0 === items2.length) {
    obj1 = { style: tmp3.shopButtonContainer, children: null };
    let obj2 = {
      size: "md",
      variant: "secondary",
      icon: closure_12(tmp(12138).ShopIcon, { size: "sm" }),
      text: null,
      onPress: null,
    };
    const intl3 = tmp(1114).intl;
    obj2.text = intl3.string(tmp(1114).t.RSyoZu);
    obj2.onPress = callback;
    obj1.children = closure_12(tmp(4975).Button, obj2);
    let tmp12Result = closure_12(View, obj1);
  } else {
    obj3 = { newValue: null, children: null };
    const obj4 = {
      impressionSessionId: tmp7,
      surface: "user_profile_wishlist_suggestions_grid",
      wishlistOwnerId: userId,
      wishlistId,
      analyticsLocations,
    };
    obj3.newValue = obj4;
    const obj5 = { style: tmp3.container, entering: null, exiting: null, layout: null, children: null };
    ({ entering: obj16.entering, exiting: obj16.exiting, layout: obj16.layout } = memo);
    const obj6 = { style: tmp3.headerRow, children: null };
    const obj7 = {
      accessibilityRole: "header",
      variant: "text-sm/medium",
      color: "text-strong",
      lineClamp: 1,
      children: null,
    };
    const intl4 = tmp(1114).intl;
    obj7.children = intl4.string(tmp(1114).t["+GB8Kt"]);
    const items4 = [closure_12(tmp(4556).Text, obj7)];
    const items5 = [tmp3.dismissButton];
    let hiddenDismissButton = !isDismissible;
    if (!isDismissible) {
      hiddenDismissButton = tmp3.hiddenDismissButton;
    }
    const obj8 = {
      style: null,
      pointerEvents: null,
      accessibilityElementsHidden: null,
      importantForAccessibility: null,
      children: null,
    };
    items5[1] = hiddenDismissButton;
    obj8.style = items5;
    let str = "none";
    if (isDismissible) {
      str = "auto";
    }
    obj8.pointerEvents = str;
    obj8.accessibilityElementsHidden = !isDismissible;
    let str2 = "no-hide-descendants";
    if (isDismissible) {
      str2 = "auto";
    }
    obj8.importantForAccessibility = str2;
    const obj9 = { size: "sm", variant: "icon-only", icon: null, onPress: null, accessibilityLabel: null };
    const obj10 = { size: "sm", color: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
    obj9.icon = closure_12(tmp(5680).XSmallIcon, obj10);
    obj9.onPress = markAsDismissed;
    const intl = tmp(1114).intl;
    obj9.accessibilityLabel = intl.string(tmp(1114).t.WAI6xu);
    obj8.children = closure_12(tmp(8097).IconButton, obj9);
    items4[1] = closure_12(View, obj8);
    obj6.children = items4;
    const items6 = [closure_13(View, obj6), ,];
    const obj11 = { items: items2, wishlist, analyticsLocations, cardSize: useCardGridLayoutDefault(obj).cardWidth };
    items6[1] = closure_12(AddToWishlistGridDefault, obj11);
    const obj12 = { style: tmp3.shopButtonContainer, children: null };
    const obj13 = {
      size: "md",
      variant: "secondary",
      icon: closure_12(tmp(12138).ShopIcon, { size: "sm" }),
      text: null,
      onPress: null,
    };
    const intl2 = tmp(1114).intl;
    obj13.text = intl2.string(tmp(1114).t.RSyoZu);
    obj13.onPress = callback;
    obj12.children = closure_12(tmp(4975).Button, obj13);
    items6[2] = closure_12(View, obj12);
    obj5.children = items6;
    obj3.children = closure_13(ReanimatedRexportDefault.View, obj5);
    tmp12Result = closure_12(tmp(13093).WishlistAnalyticsProvider, obj3);
  }
  return tmp12Result;
}
const View = fn(17).View;
let closure_7 = fn(8183).TrackUserProfileWishlistActions;
const Constants = fn(7208);
({ PROFILE_SIDE_PADDING: closure_8, WISHLIST_SUGGESTION_CARD_GAP: closure_9 } = Constants);
const SKUProductLines = fn(1074).SKUProductLines;
let closure_11 = fn(1076).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
fn(4560);
let createStyles = {
  container: null,
  headerRow: null,
  dismissButton: null,
  hiddenDismissButton: null,
  shopButtonContainer: null,
};
createStyles = {
  marginTop: nativeDefault.space.PX_16,
  padding: PX_16,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.lg,
  background: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles.container = createStyles;
createStyles.headerRow = {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: nativeDefault.space.PX_12,
};
let obj1 = {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: nativeDefault.space.PX_12,
};
createStyles.dismissButton = { marginVertical: -nativeDefault.space.PX_10 };
createStyles.hiddenDismissButton = { opacity: 0 };
let obj2 = { marginVertical: -nativeDefault.space.PX_10 };
createStyles.shopButtonContainer = { marginTop: nativeDefault.space.PX_16, marginHorizontal: "auto" };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx");

export default function UserProfileWishlistSuggestionsGrid(arg0) {
  let obj = MobileWishlistSuggestionsExperiment;
  let tmp = null;
  if (obj.useIsMobileWishlistSuggestionsEnabled("user_profile_wishlist_suggestions_grid")) {
    obj = {};
    const merged = Object.assign(arg0);
    tmp = closure_1_12(UserProfileWishlistSuggestionsGridContent, obj);
  }
  return tmp;
}
