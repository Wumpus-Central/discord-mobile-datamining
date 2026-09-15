// discord_app/modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useInitialValueDefault from "../../../hooks/useInitialValue.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../../collectibles/CollectiblesActionCreators.tsx";
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
  const items = [WishlistStore];
  const stateFromStores = wishlistId(504).useStateFromStores(items, () => {
    let wishlist = null;
    if (null != wishlistId) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  });
  const obj = wishlistId(504);
  const items1 = [WishlistStore];
  const stateFromStores1 = wishlistId(504).useStateFromStores(items1, () => {
    let lastFetchedAt = null;
    if (null != wishlistId) {
      lastFetchedAt = WishlistStore.getLastFetchedAt(tmp);
    }
    return lastFetchedAt;
  });
  const obj3 = { userId, wishlist: stateFromStores, hasFetchedWishlist: null };
  let tmp4 = null == wishlistId;
  const obj2 = wishlistId(504);
  if (!tmp4) {
    tmp4 = null != stateFromStores1;
  }
  obj3.hasFetchedWishlist = tmp4;
  let tmp8 = null;
  if (tmp3Result.isVisible) {
    const obj4 = {
      userId,
      wishlistId,
      wishlist: stateFromStores,
      containerWidth,
      maxWidth,
      isDismissible: tmp6,
      markAsDismissed: tmp7,
    };
    tmp8 = closure_12(WishlistSuggestionsGridContents, obj4);
  }
  return tmp8;
}
function WishlistSuggestionsGridContents(arg0) {
  ({ userId, wishlist, isDismissible } = arg0);
  let trackUserProfileWishlistAction;
  ({ wishlistId, containerWidth, maxWidth, markAsDismissed } = arg0);
  trackUserProfileWishlistAction =
    trackUserProfileWishlistAction(8310).useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
  const tmp3 = closure_15();
  let obj = trackUserProfileWishlistAction(8310);
  let items = [AccessibilityStore];
  const stateFromStores = trackUserProfileWishlistAction(504).useStateFromStores(
    items,
    () => useReducedMotion.useReducedMotion,
  );
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
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  let obj2 = trackUserProfileWishlistAction(504);
  const obj3 = { minCardSize: 80, maxCardSize: 120, containerWidth, maxWidth, sidePadding: closure_8 + PX_16 + 1, gap };
  const tmp7 = useInitialValueDefault(() => trackUserProfileWishlistAction(dependencyMap[18]).v4());
  let obj4 = trackUserProfileWishlistAction(13235);
  const items2 = obj4.useAddToWishlistGridItems({
    userId,
    wishlist,
    numWishlistItemsToRecommend: 15,
    maxWishlistItemsToShow: 9,
    source: trackUserProfileWishlistAction(8905).WishlistFetchSource.USER_PROFILE,
  }).items;
  const items3 = [trackUserProfileWishlistAction];
  const callback = noop.useCallback(() => {
    const obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, productLines: null };
    const items = [SKUProductLines.COLLECTIBLES];
    obj.productLines = new Set(items);
    trackUserProfileWishlistAction(obj);
    const set = new Set(items);
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    const obj4 = {
      analyticsSource: AnalyticsLocationDefault.USER_PROFILE_WISHLIST,
      analyticsLocations: null,
      screen: null,
    };
    const items1 = [AnalyticsLocationDefault.USER_PROFILE_WISHLIST];
    obj4.analyticsLocations = items1;
    obj4.screen = constants2.FEATURED_PAGE;
    const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj4);
  }, items3);
  if (0 === items2.length) {
    const obj6 = { style: tmp3.shopButtonContainer, children: null };
    const obj7 = {
      size: "md",
      variant: "secondary",
      icon: closure_12(tmp(12272).ShopIcon, { size: "sm" }),
      text: null,
      onPress: null,
    };
    const intl3 = tmp(1115).intl;
    obj7.text = intl3.string(tmp(1115).t.RSyoZu);
    obj7.onPress = callback;
    obj6.children = closure_12(tmp(5059).Button, obj7);
    let tmp12Result = closure_12(View, obj6);
  } else {
    const obj8 = { newValue: null, children: null };
    const obj9 = {
      impressionSessionId: tmp7,
      surface: "user_profile_wishlist_suggestions_grid",
      wishlistOwnerId: userId,
      wishlistId,
      analyticsLocations,
    };
    obj8.newValue = obj9;
    const obj10 = { style: tmp3.container, entering: null, exiting: null, layout: null, children: null };
    ({ entering: obj16.entering, exiting: obj16.exiting, layout: obj16.layout } = memo);
    const obj11 = { style: tmp3.headerRow, children: null };
    const obj12 = {
      accessibilityRole: "header",
      variant: "text-sm/medium",
      color: "text-strong",
      lineClamp: 1,
      children: null,
    };
    const intl4 = tmp(1115).intl;
    obj12.children = intl4.string(tmp(1115).t["+GB8Kt"]);
    const items4 = [closure_12(tmp(4635).Text, obj12)];
    const items5 = [tmp3.dismissButton];
    let hiddenDismissButton = !isDismissible;
    if (!isDismissible) {
      hiddenDismissButton = tmp3.hiddenDismissButton;
    }
    const obj13 = {
      style: null,
      pointerEvents: null,
      accessibilityElementsHidden: null,
      importantForAccessibility: null,
      children: null,
    };
    items5[1] = hiddenDismissButton;
    obj13.style = items5;
    let str = "none";
    if (isDismissible) {
      str = "auto";
    }
    obj13.pointerEvents = str;
    obj13.accessibilityElementsHidden = !isDismissible;
    let str2 = "no-hide-descendants";
    if (isDismissible) {
      str2 = "auto";
    }
    obj13.importantForAccessibility = str2;
    const obj14 = { size: "sm", variant: "icon-only", icon: null, onPress: null, accessibilityLabel: null };
    const obj15 = { size: "sm", color: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
    obj14.icon = closure_12(tmp(5765).XSmallIcon, obj15);
    obj14.onPress = markAsDismissed;
    const intl = tmp(1115).intl;
    obj14.accessibilityLabel = intl.string(tmp(1115).t.WAI6xu);
    obj13.children = closure_12(tmp(8205).IconButton, obj14);
    items4[1] = closure_12(View, obj13);
    obj11.children = items4;
    const items6 = [closure_13(View, obj11), ,];
    const obj17 = { items: items2, wishlist, analyticsLocations, cardSize: useCardGridLayoutDefault(obj3).cardWidth };
    items6[1] = closure_12(AddToWishlistGridDefault, obj17);
    const obj18 = { style: tmp3.shopButtonContainer, children: null };
    const obj33 = {
      size: "md",
      variant: "secondary",
      icon: closure_12(tmp(12272).ShopIcon, { size: "sm" }),
      text: null,
      onPress: null,
    };
    const intl2 = tmp(1115).intl;
    obj33.text = intl2.string(tmp(1115).t.RSyoZu);
    obj33.onPress = callback;
    obj18.children = closure_12(tmp(5059).Button, obj33);
    items6[2] = closure_12(View, obj18);
    obj10.children = items6;
    obj8.children = closure_13(ReanimatedRexportDefault.View, obj10);
    tmp12Result = closure_12(tmp(13236).WishlistAnalyticsProvider, obj8);
  }
  return tmp12Result;
}
const View = fn(17).View;
let closure_7 = fn(8303).TrackUserProfileWishlistActions;
const Constants = fn(7315);
({ PROFILE_SIDE_PADDING: closure_8, WISHLIST_SUGGESTION_CARD_GAP: closure_9 } = Constants);
const SKUProductLines = fn(1074).SKUProductLines;
let closure_11 = fn(1076).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4639);
let obj2 = {
  container: {
    marginTop: nativeDefault.space.PX_16,
    padding: PX_16,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BORDER_SUBTLE,
    borderRadius: nativeDefault.radii.lg,
    background: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  headerRow: null,
  dismissButton: null,
  hiddenDismissButton: null,
  shopButtonContainer: null,
};
let obj3 = {
  marginTop: nativeDefault.space.PX_16,
  padding: PX_16,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.radii.lg,
  background: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.headerRow = {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: nativeDefault.space.PX_12,
};
let obj4 = {
  width: "100%",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: nativeDefault.space.PX_12,
};
obj2.dismissButton = { marginVertical: -nativeDefault.space.PX_10 };
obj2.hiddenDismissButton = { opacity: 0 };
const obj5 = { marginVertical: -nativeDefault.space.PX_10 };
obj2.shopButtonContainer = { marginTop: nativeDefault.space.PX_16, marginHorizontal: "auto" };
let closure_15 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx");

export default function UserProfileWishlistSuggestionsGrid(arg0) {
  let tmp = null;
  if (obj.useIsMobileWishlistSuggestionsEnabled("user_profile_wishlist_suggestions_grid")) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmp = closure_1_12(UserProfileWishlistSuggestionsGridContent, obj2);
  }
  return tmp;
}
