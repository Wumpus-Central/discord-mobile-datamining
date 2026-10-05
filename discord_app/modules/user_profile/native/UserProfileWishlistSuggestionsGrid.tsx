// === Module 12943: UserProfileWishlistSuggestionsGrid ===

// Module 12943 (UserProfileWishlistSuggestionsGrid)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants2 from "Constants" /* 1085 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import useInitialValueDefault from "useInitialValue" /* 5984 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6657 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import Constants3 from "Constants" /* 7854 */;
import useCardGridLayoutDefault from "useCardGridLayout" /* 12805 */;
import MobileWishlistSuggestionsExperiment from "MobileWishlistSuggestionsExperiment" /* 12939 */;
import useWishlistSuggestionsDismissibleContentDefault from "useWishlistSuggestionsDismissibleContent" /* 12944 */;
import AddToWishlistGridDefault from "AddToWishlistGrid" /* 12946 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4879 */;
import WishlistStore from "WishlistStore" /* 8431 */;
import Constants from "Constants" /* 6707 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let hideAllActionSheetsResult, obj1, set;

let c9;
let closure_12;
let map1;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let View = react_native.View;
const constants = Constants3.TrackUserProfileWishlistActions;
({ PROFILE_SIDE_PADDING: metroImportAll, WISHLIST_SUGGESTION_CARD_GAP: c9 } = Constants);
const SKUProductLines = Constants2.SKUProductLines;
const constants2 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ jsx: closure_12, jsxs: map1 } = Fragment);
const PX_16 = nativeDefault.space.PX_16;
let createStyles = createStyles_mod;
let obj = { container: obj2, headerRow: obj3, dismissButton: obj4, hiddenDismissButton: { opacity: 0 }, shopButtonContainer: obj5 };
obj2 = { marginTop: nativeDefault.space.PX_16, padding: PX_16, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, borderRadius: nativeDefault.radii.lg, background: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { width: "100%", flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: nativeDefault.space.PX_12 };
obj4 = { marginVertical: -nativeDefault.space.PX_10 };
obj5 = { marginTop: nativeDefault.space.PX_16, marginHorizontal: "auto" };
let closure_15 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react2;
  const cResult = obj.c(2);
  let tmp2 = null;
  const obj2 = MobileWishlistSuggestionsExperiment;
  if (obj2.useIsMobileWishlistSuggestionsEnabled("user_profile_wishlist_suggestions_grid")) {
    let tmp4;
    if (cResult[0] !== arg0) {
      const obj3 = {};
      const merged = Object.assign(arg0);
      const tmp10 = closure_12(closure_16, obj3);
      cResult[0] = arg0;
      cResult[1] = tmp10;
      tmp4 = tmp10;
    } else {
      tmp4 = cResult[1];
    }
    tmp2 = tmp4;
  }
  return tmp2;
}) : ((arg0) => {
  let tmp = null;
  const obj = MobileWishlistSuggestionsExperiment;
  if (obj.useIsMobileWishlistSuggestionsEnabled("user_profile_wishlist_suggestions_grid")) {
    const obj2 = {};
    const merged = Object.assign(arg0);
    tmp = closure_12(closure_16, obj2);
  }
  return tmp;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerWidth;
  let first;
  let maxWidth;
  let tmp6;
  let tmp8;
  let userId;
  let wishlistId;
  const obj = wishlistId(576);
  const cResult = obj.c(18);
  ({ userId, wishlistId } = arg0);
  ({ containerWidth, maxWidth } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [WishlistStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== wishlistId) {
    const fn = function n() {
      let wishlist = null;
      if (null != wishlistId) {
        wishlist = WishlistStore.getWishlist(tmp);
      }
      return wishlist;
    };
    cResult[1] = wishlistId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = wishlistId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [WishlistStore];
    cResult[3] = items1;
    tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== wishlistId) {
    class I {
      constructor() {
        let lastFetchedAt = null;
        if (null != wishlistId) {
          lastFetchedAt = WishlistStore.getLastFetchedAt(tmp);
        }
        return lastFetchedAt;
      }
    }
    cResult[4] = wishlistId;
    cResult[5] = I;
  } else {
    class I {
      constructor() {
        let lastFetchedAt = null;
        if (null != wishlistId) {
          lastFetchedAt = WishlistStore.getLastFetchedAt(tmp);
        }
        return lastFetchedAt;
      }
    }
  }
  const tmpResult2 = wishlistId(504);
  const tmp11 = null == wishlistId || null != tmpResult2.useStateFromStores(tmp8, I);
  if (cResult[6] === tmp11) {
    class I {
      constructor() {
        let lastFetchedAt = null;
        if (null != wishlistId) {
          lastFetchedAt = WishlistStore.getLastFetchedAt(tmp);
        }
        return lastFetchedAt;
      }
    }
  }
  const obj2 = { userId, wishlist: stateFromStores, hasFetchedWishlist: tmp11 };
  cResult[6] = tmp11;
  cResult[7] = userId;
  cResult[8] = stateFromStores;
  cResult[9] = obj2;
}) : ((arg0) => {
  let containerWidth;
  let maxWidth;
  let tmp4;
  let userId;
  let wishlistId;
  ({ userId, wishlistId } = arg0);
  ({ containerWidth, maxWidth } = arg0);
  const items = [WishlistStore];
  const obj = wishlistId(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let wishlist = null;
    if (null != wishlistId) {
      wishlist = WishlistStore.getWishlist(tmp);
    }
    return wishlist;
  });
  const items1 = [WishlistStore];
  const obj2 = wishlistId(504);
  const stateFromStores1 = obj2.useStateFromStores(items1, () => {
    let lastFetchedAt = null;
    if (null != wishlistId) {
      lastFetchedAt = WishlistStore.getLastFetchedAt(tmp);
    }
    return lastFetchedAt;
  });
  const obj3 = { userId, wishlist: stateFromStores, hasFetchedWishlist: tmp4 };
  tmp4 = null == wishlistId;
  const tmp3 = useWishlistSuggestionsDismissibleContentDefault;
  if (!tmp4) {
    tmp4 = null != stateFromStores1;
  }
  let tmp8 = null;
  const tmp3Result = tmp3(obj3);
  if (tmp3Result.isVisible) {
    const obj4 = { userId, wishlistId, wishlist: stateFromStores, containerWidth, maxWidth, isDismissible: tmp6, markAsDismissed: tmp7 };
    tmp8 = closure_12(closure_17, obj4);
  }
  return tmp8;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let containerWidth;
  let isDismissible;
  let markAsDismissed;
  let maxWidth;
  let tmp11;
  let tmp20;
  let trackUserProfileWishlistAction;
  let userId;
  let wishlist;
  let wishlistId;
  let obj = trackUserProfileWishlistAction(576);
  const cResult = obj.c(61);
  ({ userId, wishlistId, wishlist, containerWidth, maxWidth, isDismissible, markAsDismissed } = arg0);
  let obj2 = trackUserProfileWishlistAction(7861);
  trackUserProfileWishlistAction = obj2.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
  let tmp4 = closure_15();
  closure_18();
  if (cResult[0] === containerWidth) {
    let tmp6;
    if (cResult[1] === maxWidth) {
      tmp6 = cResult[2];
    }
    const cardWidth = useCardGridLayoutDefault(tmp6).cardWidth;
    const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      class P {
        constructor() {
          obj = closure_0(closure_1_2[19]);
          return obj.v4();
        }
      }
      cResult[3] = P;
    } else {
      class P {
        constructor() {
          obj = closure_0(closure_1_2[19]);
          return obj.v4();
        }
      }
    }
    const tmp10 = useInitialValueDefault(P);
    if (cResult[4] === userId) {
      class P {
        constructor() {
          obj = closure_0(closure_1_2[19]);
          return obj.v4();
        }
      }
      const tmpResult = trackUserProfileWishlistAction(12945);
      let items = tmpResult.useAddToWishlistGridItems(tmp11).items;
      if (cResult[7] !== trackUserProfileWishlistAction) {
        class O {
          constructor() {
            obj = { action: closure_7.PRESS_ADD_WISHLIST_ITEM, productLines: null };
            items = [];
            items[0] = SKUProductLines.COLLECTIBLES;
            set = new Set(items);
            obj.productLines = set;
            tmp2 = closure_0(obj);
            obj2 = closure_1(closure_2[23]);
            hideAllActionSheetsResult = obj2.hideAllActionSheets();
            tmp4 = closure_0(closure_2[24]);
            obj1 = { analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
            openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
            items1 = [];
            items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
            obj1.analyticsLocations = items1;
            obj1.screen = closure_11.FEATURED_PAGE;
            result = openCollectiblesShopMobile(obj1);
            return;
          }
        }
        cResult[7] = trackUserProfileWishlistAction;
        cResult[8] = O;
      } else {
        class O {
          constructor() {
            obj = { action: closure_7.PRESS_ADD_WISHLIST_ITEM, productLines: null };
            items = [];
            items[0] = SKUProductLines.COLLECTIBLES;
            set = new Set(items);
            obj.productLines = set;
            tmp2 = closure_0(obj);
            obj2 = closure_1(closure_2[23]);
            hideAllActionSheetsResult = obj2.hideAllActionSheets();
            tmp4 = closure_0(closure_2[24]);
            obj1 = { analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
            openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
            items1 = [];
            items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
            obj1.analyticsLocations = items1;
            obj1.screen = closure_11.FEATURED_PAGE;
            result = openCollectiblesShopMobile(obj1);
            return;
          }
        }
      }
      if (0 === items.length) {
        let tmp15;
        let tmp14;
        class O {
          constructor() {
            obj = { action: closure_7.PRESS_ADD_WISHLIST_ITEM, productLines: null };
            items = [];
            items[0] = SKUProductLines.COLLECTIBLES;
            set = new Set(items);
            obj.productLines = set;
            tmp2 = closure_0(obj);
            obj2 = closure_1(closure_2[23]);
            hideAllActionSheetsResult = obj2.hideAllActionSheets();
            tmp4 = closure_0(closure_2[24]);
            obj1 = { analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
            openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
            items1 = [];
            items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
            obj1.analyticsLocations = items1;
            obj1.screen = closure_11.FEATURED_PAGE;
            result = openCollectiblesShopMobile(obj1);
            return;
          }
        }
        const shopButtonContainer = tmp4.shopButtonContainer;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor() {
              obj = { action: closure_7.PRESS_ADD_WISHLIST_ITEM, productLines: null };
              items = [];
              items[0] = SKUProductLines.COLLECTIBLES;
              set = new Set(items);
              obj.productLines = set;
              tmp2 = closure_0(obj);
              obj2 = closure_1(closure_2[23]);
              hideAllActionSheetsResult = obj2.hideAllActionSheets();
              tmp4 = closure_0(closure_2[24]);
              obj1 = { analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
              openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
              items1 = [];
              items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
              obj1.analyticsLocations = items1;
              obj1.screen = closure_11.FEATURED_PAGE;
              result = openCollectiblesShopMobile(obj1);
              return;
            }
          }
          const tmp16 = closure_12(trackUserProfileWishlistAction(11762).ShopIcon, { size: "sm" });
          const intl = tmp(1126).intl;
          const stringResult = intl.string(trackUserProfileWishlistAction(1126).t.RSyoZu);
          cResult[9] = tmp16;
          cResult[10] = stringResult;
          tmp15 = stringResult;
          tmp14 = tmp16;
        } else {
          class O {
            constructor() {
              obj = { action: closure_7.PRESS_ADD_WISHLIST_ITEM, productLines: null };
              items = [];
              items[0] = SKUProductLines.COLLECTIBLES;
              set = new Set(items);
              obj.productLines = set;
              tmp2 = closure_0(obj);
              obj2 = closure_1(closure_2[23]);
              hideAllActionSheetsResult = obj2.hideAllActionSheets();
              tmp4 = closure_0(closure_2[24]);
              obj1 = { analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
              openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
              items1 = [];
              items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
              obj1.analyticsLocations = items1;
              obj1.screen = closure_11.FEATURED_PAGE;
              result = openCollectiblesShopMobile(obj1);
              return;
            }
          }
          tmp15 = cResult[10];
        }
        if (cResult[11] !== O) {
          class O {
            constructor() {
              obj = { action: closure_7.PRESS_ADD_WISHLIST_ITEM, productLines: null };
              items = [];
              items[0] = SKUProductLines.COLLECTIBLES;
              set = new Set(items);
              obj.productLines = set;
              tmp2 = closure_0(obj);
              obj2 = closure_1(closure_2[23]);
              hideAllActionSheetsResult = obj2.hideAllActionSheets();
              tmp4 = closure_0(closure_2[24]);
              obj1 = { analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
              openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
              items1 = [];
              items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
              obj1.analyticsLocations = items1;
              obj1.screen = closure_11.FEATURED_PAGE;
              result = openCollectiblesShopMobile(obj1);
              return;
            }
          }
          let obj3 = { size: "md", variant: "secondary", icon: tmp14, text: tmp15, onPress: O };
          cResult[11] = O;
          cResult[12] = closure_12(trackUserProfileWishlistAction(5594).Button, obj3);
          const tmp19 = closure_12(trackUserProfileWishlistAction(5594).Button, obj3);
        } else {
          class O {
            constructor() {
              obj = { action: closure_7.PRESS_ADD_WISHLIST_ITEM, productLines: null };
              items = [];
              items[0] = SKUProductLines.COLLECTIBLES;
              set = new Set(items);
              obj.productLines = set;
              tmp2 = closure_0(obj);
              obj2 = closure_1(closure_2[23]);
              hideAllActionSheetsResult = obj2.hideAllActionSheets();
              tmp4 = closure_0(closure_2[24]);
              obj1 = { analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
              openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
              items1 = [];
              items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
              obj1.analyticsLocations = items1;
              obj1.screen = closure_11.FEATURED_PAGE;
              result = openCollectiblesShopMobile(obj1);
              return;
            }
          }
        }
        if (cResult[13] === tmp4.shopButtonContainer) {
          class O {
            constructor() {
              obj = { action: closure_7.PRESS_ADD_WISHLIST_ITEM, productLines: null };
              items = [];
              items[0] = SKUProductLines.COLLECTIBLES;
              set = new Set(items);
              obj.productLines = set;
              tmp2 = closure_0(obj);
              obj2 = closure_1(closure_2[23]);
              hideAllActionSheetsResult = obj2.hideAllActionSheets();
              tmp4 = closure_0(closure_2[24]);
              obj1 = { analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
              openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
              items1 = [];
              items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
              obj1.analyticsLocations = items1;
              obj1.screen = closure_11.FEATURED_PAGE;
              result = openCollectiblesShopMobile(obj1);
              return;
            }
          }
          return tmp20;
        }
        const obj4 = { style: shopButtonContainer, children: tmp18 };
        const tmp23 = closure_12(View, obj4);
        cResult[13] = tmp4.shopButtonContainer;
        cResult[14] = tmp18;
        cResult[15] = tmp23;
        tmp20 = tmp23;
      } else {
        class O {
          constructor() {
            obj = { action: closure_7.PRESS_ADD_WISHLIST_ITEM, productLines: null };
            items = [];
            items[0] = SKUProductLines.COLLECTIBLES;
            set = new Set(items);
            obj.productLines = set;
            tmp2 = closure_0(obj);
            obj2 = closure_1(closure_2[23]);
            hideAllActionSheetsResult = obj2.hideAllActionSheets();
            tmp4 = closure_0(closure_2[24]);
            obj1 = { analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
            openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
            items1 = [];
            items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
            obj1.analyticsLocations = items1;
            obj1.screen = closure_11.FEATURED_PAGE;
            result = openCollectiblesShopMobile(obj1);
            return;
          }
        }
        const obj5 = { impressionSessionId: tmp10, surface: "user_profile_wishlist_suggestions_grid", wishlistOwnerId: userId, wishlistId, analyticsLocations };
        cResult[16] = analyticsLocations;
        cResult[17] = tmp10;
        cResult[18] = userId;
        cResult[19] = wishlistId;
        cResult[20] = obj5;
      }
    }
    const obj6 = { userId, wishlist, numWishlistItemsToRecommend: 15, maxWishlistItemsToShow: 9, source: trackUserProfileWishlistAction(8437).WishlistFetchSource.USER_PROFILE };
    cResult[4] = userId;
    cResult[5] = wishlist;
    cResult[6] = obj6;
    tmp11 = obj6;
  }
  const obj7 = { minCardSize: 80, maxCardSize: 120, containerWidth, maxWidth, sidePadding: closure_8 + PX_16 + 1, gap };
  cResult[0] = containerWidth;
  cResult[1] = maxWidth;
  cResult[2] = obj7;
  tmp6 = obj7;
}) : ((arg0) => {
  let Button;
  let Button2;
  let IconButton;
  let XSmallIcon;
  let containerWidth;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let isDismissible;
  let items2;
  let items4;
  let markAsDismissed;
  let maxWidth;
  let obj13;
  let obj14;
  let obj32;
  let obj6;
  let obj8;
  let obj9;
  let str;
  let str2;
  let tmp12Result;
  let userId;
  let wishlist;
  let wishlistId;
  ({ userId, wishlist, isDismissible } = arg0);
  let trackUserProfileWishlistAction;
  ({ wishlistId, containerWidth, maxWidth, markAsDismissed } = arg0);
  let obj = trackUserProfileWishlistAction(7861);
  trackUserProfileWishlistAction = obj.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
  const tmp3 = closure_15();
  let tmp4 = closure_18();
  let obj2 = { minCardSize: 80, maxCardSize: 120, containerWidth, maxWidth, sidePadding: closure_8 + PX_16 + 1, gap };
  const cardWidth = useCardGridLayoutDefault(obj2).cardWidth;
  const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
  const tmp6 = useInitialValueDefault(() => {
    const obj = trackUserProfileWishlistAction(dependencyMap[19]);
    return obj.v4();
  });
  let obj3 = trackUserProfileWishlistAction(12945);
  const obj4 = { userId, wishlist, numWishlistItemsToRecommend: 15, maxWishlistItemsToShow: 9, source: trackUserProfileWishlistAction(8437).WishlistFetchSource.USER_PROFILE };
  let items = obj3.useAddToWishlistGridItems(obj4).items;
  let items1 = [trackUserProfileWishlistAction];
  const callback = react.useCallback(() => {
    let items;
    let items1;
    const obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, productLines: new Set(items) };
    items = [SKUProductLines.COLLECTIBLES];
    new Set(items);
    trackUserProfileWishlistAction(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideAllActionSheets();
    const tmp4 = CollectiblesActionCreators;
    const openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
    const obj3 = { analyticsSource: AnalyticsLocationDefault.USER_PROFILE_WISHLIST, analyticsLocations: items1, screen: constants2.FEATURED_PAGE };
    items1 = [AnalyticsLocationDefault.USER_PROFILE_WISHLIST];
    const result = openCollectiblesShopMobile(obj3);
  }, items1);
  if (0 === items.length) {
    const obj5 = { style: tmp3.shopButtonContainer, children: closure_12(Button2, obj6) };
    obj6 = { size: "md", variant: "secondary", icon: closure_12(trackUserProfileWishlistAction(11762).ShopIcon, { size: "sm" }), text: intl3.string(trackUserProfileWishlistAction(1126).t.RSyoZu), onPress: callback };
    Button2 = tmp(5594).Button;
    intl3 = tmp(1126).intl;
    tmp12Result = closure_12(View, obj5);
  } else {
    const obj7 = { newValue: obj8, children: closure_13(View, obj9) };
    obj8 = { impressionSessionId: tmp6, surface: "user_profile_wishlist_suggestions_grid", wishlistOwnerId: userId, wishlistId, analyticsLocations };
    const WishlistAnalyticsProvider = tmp(12947).WishlistAnalyticsProvider;
    obj9 = { style: tmp3.container, entering: null, exiting: null, layout: null, children: items4 };
    ({ entering: obj15.entering, exiting: obj15.exiting, layout: obj15.layout } = tmp4);
    const obj10 = { style: tmp3.headerRow, children: items2 };
    View = ReanimatedRexportDefault.View;
    const obj11 = { accessibilityRole: "header", variant: "text-sm/medium", color: "text-strong", lineClamp: 1, children: intl4.string(trackUserProfileWishlistAction(1126).t["+GB8Kt"]) };
    const Text = tmp(4886).Text;
    intl4 = tmp(1126).intl;
    items2 = [closure_12(Text, obj11), ];
    const items3 = [tmp3.dismissButton, ];
    const tmp8 = !isDismissible && tmp3.hiddenDismissButton;
    items3[1] = tmp8;
    const obj12 = { style: items3, pointerEvents: str, accessibilityElementsHidden: !isDismissible, importantForAccessibility: str2, children: closure_12(IconButton, obj13) };
    str = "none";
    if (isDismissible) {
      str = "auto";
    }
    str2 = "no-hide-descendants";
    if (isDismissible) {
      str2 = "auto";
    }
    obj13 = { size: "sm", variant: "icon-only", icon: closure_12(XSmallIcon, obj14), onPress: markAsDismissed, accessibilityLabel: intl.string(trackUserProfileWishlistAction(1126).t.WAI6xu) };
    IconButton = tmp(7575).IconButton;
    obj14 = { size: "sm", color: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
    XSmallIcon = tmp(6017).XSmallIcon;
    intl = tmp(1126).intl;
    items2[1] = closure_12(View, obj12);
    items4 = [closure_13(View, obj10), , ];
    const obj16 = { items, wishlist, analyticsLocations, cardSize: cardWidth };
    items4[1] = closure_12(AddToWishlistGridDefault, obj16);
    const obj17 = { style: tmp3.shopButtonContainer, children: closure_12(Button, obj32) };
    obj32 = { size: "md", variant: "secondary", icon: closure_12(trackUserProfileWishlistAction(11762).ShopIcon, { size: "sm" }), text: intl2.string(trackUserProfileWishlistAction(1126).t.RSyoZu), onPress: callback };
    Button = tmp(5594).Button;
    intl2 = tmp(1126).intl;
    items4[2] = closure_12(View, obj17);
    tmp12Result = closure_12(WishlistAnalyticsProvider, obj7);
  }
  return tmp12Result;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let tmp11;
  let tmp13;
  let tmp4;
  let tmp5;
  let tmp9;
  let useReducedMotion;
  const obj = react2;
  const cResult = obj.c(12);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function t() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
  const ReduceMotion = ReanimatedRexport.ReduceMotion;
  const tmp8 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
  if (cResult[2] !== tmp8) {
    const FadeInDown = ReanimatedRexport.FadeInDown;
    const reduceMotionResult = FadeInDown.reduceMotion(tmp8);
    cResult[2] = tmp8;
    cResult[3] = reduceMotionResult;
    tmp9 = reduceMotionResult;
  } else {
    tmp9 = cResult[3];
  }
  if (cResult[4] !== tmp8) {
    const FadeOutDown = ReanimatedRexport.FadeOutDown;
    const reduceMotionResult1 = FadeOutDown.reduceMotion(tmp8);
    cResult[4] = tmp8;
    cResult[5] = reduceMotionResult1;
    tmp11 = reduceMotionResult1;
  } else {
    tmp11 = cResult[5];
  }
  if (cResult[6] !== tmp8) {
    const LinearTransition = ReanimatedRexport.LinearTransition;
    const springifyResult = LinearTransition.springify();
    const massResult = springifyResult.mass(0.8);
    const dampingResult = massResult.damping(100);
    const stiffnessResult = dampingResult.stiffness(300);
    const reduceMotionResult2 = stiffnessResult.reduceMotion(tmp8);
    cResult[6] = tmp8;
    cResult[7] = reduceMotionResult2;
    tmp13 = reduceMotionResult2;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === tmp9) {
    if (cResult[9] === tmp11) {
      let tmp15;
      if (cResult[10] === tmp13) {
        tmp15 = cResult[11];
      }
      return tmp15;
    }
  }
  const obj2 = { entering: tmp9, exiting: tmp11, layout: tmp13 };
  cResult[8] = tmp9;
  cResult[9] = tmp11;
  cResult[10] = tmp13;
  cResult[11] = obj2;
  tmp15 = obj2;
}) : (() => {
  let stateFromStores;
  let useReducedMotion;
  let obj = stateFromStores(504);
  const items = [AccessibilityStore];
  stateFromStores = obj.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const items1 = [stateFromStores];
  return react.useMemo(() => {
    let FadeInDown;
    let FadeOutDown;
    let stiffnessResult;
    const ReduceMotion = ReanimatedRexport.ReduceMotion;
    const tmp = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
    const obj = { entering: FadeInDown.reduceMotion(tmp), exiting: FadeOutDown.reduceMotion(tmp), layout: stiffnessResult.reduceMotion(tmp) };
    FadeInDown = ReanimatedRexport.FadeInDown;
    FadeOutDown = ReanimatedRexport.FadeOutDown;
    const LinearTransition = ReanimatedRexport.LinearTransition;
    const springifyResult = LinearTransition.springify();
    const massResult = springifyResult.mass(0.8);
    const dampingResult = massResult.damping(100);
    stiffnessResult = dampingResult.stiffness(300);
    return obj;
  }, items1);
});
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx");

export default tmp5;