// === Module 12374: UserProfileWishlistSuggestionsGridContent ===

// Module 12374 (UserProfileWishlistSuggestionsGridContent)
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import contextDefault from "context" /* 7177 */;
import useIsMobileWishlistSuggestionsEnabled from "useIsMobileWishlistSuggestionsEnabled" /* 12368 */;
import useCardGridLayoutDefault from "useCardGridLayout" /* 12369 */;
import useWishlistSuggestionsDismissibleContentDefault from "useWishlistSuggestionsDismissibleContent" /* 12375 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "maybeApplyNoTextColorForLightCustomTheme" /* 4669 */;
import closure_6 from "get" /* 9223 */;
import { TrackUserProfileWishlistActions as closure_7 } from "USER_PROFILE_TOOLTIP_DELAY" /* 8968 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 7224 */;
import { SKUProductLines } from "ME" /* 676 */;
import { CollectiblesMobileShopScreen as closure_11 } from "items" /* 678 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

require = arg1;
function UserProfileWishlistSuggestionsGridContent(arg0) {
  ({ userId, wishlistId } = arg0);
  ({ containerWidth, maxWidth } = arg0);
  let obj = wishlistId(589);
  const items = [closure_6];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let wishlist = null;
    if (null != wishlistId) {
      wishlist = closure_1_6.getWishlist(tmp);
    }
    return wishlist;
  });
  const items1 = [closure_6];
  const stateFromStores1 = wishlistId(589).useStateFromStores(items1, () => {
    let lastFetchedAt = null;
    if (null != wishlistId) {
      lastFetchedAt = closure_1_6.getLastFetchedAt(tmp);
    }
    return lastFetchedAt;
  });
  obj = { userId, wishlist: stateFromStores, hasFetchedWishlist: null };
  let tmp4 = null == wishlistId;
  const obj2 = wishlistId(589);
  if (!tmp4) {
    tmp4 = null != stateFromStores1;
  }
  obj[2] = tmp4;
  const tmp3 = useWishlistSuggestionsDismissibleContentDefault;
  let tmp8 = null;
  if (tmp3Result.isVisible) {
    obj = { userId: null, wishlistId: null, wishlist: null, containerWidth: null, maxWidth: null, isDismissible: null, markAsDismissed: null };
    obj[0] = userId;
    obj[1] = wishlistId;
    obj[2] = stateFromStores;
    obj[3] = containerWidth;
    obj[4] = maxWidth;
    obj[5] = tmp6;
    obj[6] = tmp7;
    tmp8 = callback(WishlistSuggestionsGridContents, obj);
  }
  return tmp8;
}
function WishlistSuggestionsGridContents(arg0) {
  ({ userId, wishlist, isDismissible } = arg0);
  let stateFromStores;
  ({ wishlistId, containerWidth, maxWidth, markAsDismissed } = arg0);
  const tmp3 = useIsMobileVisualRefreshExperimentEnabledDefault("UserProfileWishlistSuggestionsGridContent");
  let obj = stateFromStores(8971);
  const trackUserProfileWishlistAction = obj.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
  stateFromStores = trackUserProfileWishlistAction;
  const tmp5 = callback2();
  stateFromStores = undefined;
  obj1 = stateFromStores(589);
  let items = [closure_5];
  stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let items1 = [stateFromStores];
  const memo = React.useMemo(() => {
    const ReduceMotion = stateFromStores(closure_1_2[29]).ReduceMotion;
    const tmp = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
    const obj = { entering: null, exiting: null, layout: null };
    const FadeInDown = stateFromStores(closure_1_2[29]).FadeInDown;
    obj[0] = FadeInDown.reduceMotion(tmp);
    const FadeOutDown = stateFromStores(closure_1_2[29]).FadeOutDown;
    obj[1] = FadeOutDown.reduceMotion(tmp);
    const LinearTransition = stateFromStores(closure_1_2[29]).LinearTransition;
    const springifyResult = LinearTransition.springify();
    const massResult = LinearTransition.springify().mass(0.8);
    const dampingResult = LinearTransition.springify().mass(0.8).damping(100);
    obj[2] = LinearTransition.springify().mass(0.8).damping(100).stiffness(300).reduceMotion(tmp);
    return obj;
  }, items1);
  obj = { minCardSize: 80, maxCardSize: 120, containerWidth, maxWidth, sidePadding: closure_8 + PX_16 + 1, gap: closure_9 };
  const analyticsLocations = contextDefault().analyticsLocations;
  let obj3 = stateFromStores(12376);
  obj = { userId, wishlist, numWishlistItemsToRecommend: 15, maxWishlistItemsToShow: 9, source: stateFromStores(9222).WishlistFetchSource.USER_PROFILE };
  const items2 = obj3.useAddToWishlistGridItems(obj).items;
  const items3 = [trackUserProfileWishlistAction];
  const callback = React.useCallback(() => {
    let obj = { action: closure_1_7.PRESS_ADD_WISHLIST_ITEM, productLines: new Set(items) };
    items = [closure_1_10.COLLECTIBLES];
    stateFromStores(obj);
    const set = new Set(items);
    closure_1_1(closure_1_2[22]).hideAllActionSheets();
    const obj2 = closure_1_1(closure_1_2[22]);
    obj = { analyticsSource: closure_1_1(closure_1_2[24]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
    const items1 = [closure_1_1(closure_1_2[24]).USER_PROFILE_WISHLIST];
    obj[1] = items1;
    obj[2] = closure_1_11.FEATURED_PAGE;
    const result = stateFromStores(closure_1_2[23]).openCollectiblesShopMobile(obj);
  }, items3);
  if (0 === items2.length) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp5.shopButtonContainer;
    let obj2 = { size: "md", variant: "secondary", icon: null, text: null, onPress: null };
    obj2[2] = callback(tmp4(11367).ShopIcon, { size: "sm" });
    const intl4 = tmp4(1236).intl;
    obj2[3] = intl4.string(tmp4(1236).t.RSyoZu);
    obj2[4] = callback;
    obj1[1] = callback(tmp4(4750).Button, obj2);
    let tmp13Result = callback(View, obj1);
  } else {
    obj3 = { newValue: null, children: null };
    const obj4 = { impressionSessionId: null, surface: "user_profile_wishlist_suggestions_grid", wishlistOwnerId: null, wishlistId: null, analyticsLocations: null };
    obj4[0] = tmp8;
    obj4[2] = userId;
    obj4[3] = wishlistId;
    obj4[4] = analyticsLocations;
    obj3[0] = obj4;
    const obj5 = { style: null, entering: null, exiting: null, layout: null, children: null };
    obj5[0] = tmp5.container;
    ({ entering: obj17[1], exiting: obj17[2], layout: obj17[3] } = memo);
    const obj6 = { style: null, children: null };
    obj6[0] = tmp5.headerRow;
    let str = "text-sm/semibold";
    if (tmp3) {
      str = "text-sm/medium";
    }
    const obj7 = { accessibilityRole: "header", variant: null, color: null, lineClamp: 1, children: null };
    obj7[1] = str;
    let str2 = "text-default";
    if (tmp3) {
      str2 = "text-strong";
    }
    obj7[2] = str2;
    const intl = tmp4(1236).intl;
    obj7[4] = intl.string(tmp4(1236).t["+GB8Kt"]);
    const items4 = [callback(tmp4(4739).Text, obj7), ];
    const items5 = [tmp5.dismissButton, ];
    let hiddenDismissButton = !isDismissible;
    if (!isDismissible) {
      hiddenDismissButton = tmp5.hiddenDismissButton;
    }
    const obj8 = { style: null, pointerEvents: null, accessibilityElementsHidden: null, importantForAccessibility: null, children: null };
    items5[1] = hiddenDismissButton;
    obj8[0] = items5;
    let str3 = "none";
    if (isDismissible) {
      str3 = "auto";
    }
    obj8[1] = str3;
    obj8[2] = !isDismissible;
    let str4 = "no-hide-descendants";
    if (isDismissible) {
      str4 = "auto";
    }
    obj8[3] = str4;
    const obj9 = { size: "sm", variant: "icon-only", icon: null, onPress: null, accessibilityLabel: null };
    const obj10 = { size: "sm", color: null };
    obj10[1] = tmp(712).colors.CONTROL_ICON_ONLY_ICON_DEFAULT;
    obj9[2] = callback(tmp4(6399).XSmallIcon, obj10);
    obj9[3] = markAsDismissed;
    const intl2 = tmp4(1236).intl;
    obj9[4] = intl2.string(tmp4(1236).t.WAI6xu);
    obj8[4] = callback(tmp4(8074).IconButton, obj9);
    items4[1] = callback(View, obj8);
    obj6[1] = items4;
    const items6 = [closure_13(View, obj6), , ];
    const obj11 = { items: null, wishlist: null, analyticsLocations: null, cardSize: null };
    obj11[0] = items2;
    obj11[1] = wishlist;
    obj11[2] = analyticsLocations;
    obj11[3] = useCardGridLayoutDefault(obj).cardWidth;
    items6[1] = callback(tmp(12379), obj11);
    const obj12 = { style: null, children: null };
    obj12[0] = tmp5.shopButtonContainer;
    const obj13 = { size: "md", variant: "secondary", icon: null, text: null, onPress: null };
    obj13[2] = callback(tmp4(11367).ShopIcon, { size: "sm" });
    const intl3 = tmp4(1236).intl;
    obj13[3] = intl3.string(tmp4(1236).t.RSyoZu);
    obj13[4] = callback;
    obj12[1] = callback(tmp4(4750).Button, obj13);
    items6[2] = callback(View, obj12);
    obj5[4] = items6;
    obj3[1] = closure_13(tmp(4119).View, obj5);
    tmp13Result = tmp13(tmp4(12378).WishlistAnalyticsProvider, obj3);
  }
  return tmp13Result;
}
({ PROFILE_SIDE_PADDING: closure_8, WISHLIST_SUGGESTION_CARD_GAP: c9 } = ARBITRARY_LARGE_OFFSET);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const PX_16 = ThemesDefault.space.PX_16;
createCacheKey = { container: null, headerRow: null, dismissButton: null, hiddenDismissButton: null, shopButtonContainer: null };
createCacheKey = { marginTop: ThemesDefault.space.PX_16, padding: PX_16, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE, borderRadius: ThemesDefault.radii.lg, background: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: ThemesDefault.space.PX_12 };
let obj1 = { width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: ThemesDefault.space.PX_12 };
createCacheKey[2] = { marginVertical: -ThemesDefault.space.PX_10 };
createCacheKey[3] = { opacity: 0 };
let obj2 = { marginVertical: -ThemesDefault.space.PX_10 };
createCacheKey[4] = { marginTop: ThemesDefault.space.PX_16, marginHorizontal: "auto" };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj3 = { marginTop: ThemesDefault.space.PX_16, marginHorizontal: "auto" };
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx");

export default function UserProfileWishlistSuggestionsGrid(arg0) {
  let obj = useIsMobileWishlistSuggestionsEnabled;
  let tmp = null;
  if (obj.useIsMobileWishlistSuggestionsEnabled("user_profile_wishlist_suggestions_grid")) {
    obj = {};
    const merged = Object.assign(arg0);
    tmp = callback(UserProfileWishlistSuggestionsGridContent, obj);
  }
  return tmp;
};