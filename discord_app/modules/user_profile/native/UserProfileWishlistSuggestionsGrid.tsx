// discord_app/modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useInitialValueDefault from "../../../hooks/useInitialValue.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../../collectibles/CollectiblesActionCreators.tsx";
import useCardGridLayoutDefault from "../hooks/native/useCardGridLayout.tsx";
import MobileWishlistSuggestionsExperiment from "../../wishlists/experiments/MobileWishlistSuggestionsExperiment.tsx";
import useWishlistSuggestionsDismissibleContentDefault from "../hooks/useWishlistSuggestionsDismissibleContent.tsx";
import AddToWishlistGridDefault from "../../wishlists/native/AddToWishlistGrid.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import WishlistStore from "../../wishlists/WishlistStore.tsx";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
const View = fn(17).View;
const constants = fn(8291).TrackUserProfileWishlistActions;
const Constants = fn(6898);
({ PROFILE_SIDE_PADDING: closure_8, WISHLIST_SUGGESTION_CARD_GAP: closure_9 } = Constants);
const SKUProductLines = fn(1085).SKUProductLines;
const constants2 = fn(1087).CollectiblesMobileShopScreen;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(5091);
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
let obj5 = { marginVertical: -nativeDefault.space.PX_10 };
obj2.shopButtonContainer = { marginTop: nativeDefault.space.PX_16, marginHorizontal: "auto" };
let closure_15 = createStyles.createStyles(obj2);
fn(558);
let obj6 = { marginTop: nativeDefault.space.PX_16, marginHorizontal: "auto" };
let ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileWishlistSuggestionsGridContent(arg0) {
      const cResult = wishlistId(576).c(18);
      ({ userId, wishlistId } = arg0);
      ({ containerWidth, maxWidth } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [WishlistStore];
        cResult[0] = items;
        let first = items;
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
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = wishlistId(576);
      const stateFromStores = wishlistId(504).useStateFromStores(first, tmp6);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [WishlistStore];
        cResult[3] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
      }
      if (cResult[4] !== wishlistId) {
        class I {
          constructor() {
            lastFetchedAt = null;
            if (null != wishlistId) {
              tmp3 = closure_6;
              lastFetchedAt = closure_6.getLastFetchedAt(tmp);
            }
            return lastFetchedAt;
          }
        }
        cResult[4] = wishlistId;
        cResult[5] = I;
      } else {
        class I {
          constructor() {
            lastFetchedAt = null;
            if (null != wishlistId) {
              tmp3 = closure_6;
              lastFetchedAt = closure_6.getLastFetchedAt(tmp);
            }
            return lastFetchedAt;
          }
        }
      }
      const tmpResult = wishlistId(504);
      const tmp11 = null == wishlistId || null != wishlistId(504).useStateFromStores(tmp8, I);
      if (cResult[6] === tmp11) {
        class I {
          constructor() {
            lastFetchedAt = null;
            if (null != wishlistId) {
              tmp3 = closure_6;
              lastFetchedAt = closure_6.getLastFetchedAt(tmp);
            }
            return lastFetchedAt;
          }
        }
      }
      cResult[6] = tmp11;
      cResult[7] = userId;
      cResult[8] = stateFromStores;
      cResult[9] = { userId, wishlist: stateFromStores, hasFetchedWishlist: tmp11 };
      const obj2 = { userId, wishlist: stateFromStores, hasFetchedWishlist: tmp11 };
      const tmpResult2 = wishlistId(504);
    }
  : function UserProfileWishlistSuggestionsGridContent(arg0) {
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
        tmp8 = closure_12(closure_17, obj4);
      }
      return tmp8;
    };
ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled()
  ? function WishlistSuggestionsGridContents(arg0) {
      const cResult = trackUserProfileWishlistAction(576).c(61);
      ({ userId, wishlistId, wishlist, containerWidth, maxWidth, isDismissible, markAsDismissed } = arg0);
      let obj = trackUserProfileWishlistAction(576);
      trackUserProfileWishlistAction =
        trackUserProfileWishlistAction(8298).useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
      const tmp4 = closure_15();
      closure_18();
      if (cResult[0] === containerWidth) {
        if (cResult[1] === maxWidth) {
          let tmp6 = cResult[2];
        }
        const cardWidth = useCardGridLayoutDefault(tmp6).cardWidth;
        const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function x() {
            return trackUserProfileWishlistAction(dependencyMap[19]).v4();
          };
          cResult[3] = fn;
          let tmp9 = fn;
        } else {
          tmp9 = cResult[3];
        }
        const tmp10 = useInitialValueDefault(tmp9);
        if (cResult[4] === userId) {
          if (cResult[5] === wishlist) {
            let tmp11 = cResult[6];
          }
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
                obj3 = closure_0(closure_2[24]);
                obj1 = {
                  analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST,
                  analyticsLocations: null,
                  screen: null,
                };
                items1 = [];
                items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
                obj1.analyticsLocations = items1;
                obj1.screen = closure_11.FEATURED_PAGE;
                result = obj3.openCollectiblesShopMobile(obj1);
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
                obj3 = closure_0(closure_2[24]);
                obj1 = {
                  analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST,
                  analyticsLocations: null,
                  screen: null,
                };
                items1 = [];
                items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
                obj1.analyticsLocations = items1;
                obj1.screen = closure_11.FEATURED_PAGE;
                result = obj3.openCollectiblesShopMobile(obj1);
                return;
              }
            }
          }
          if (0 === tmpResult.useAddToWishlistGridItems(tmp11).items.length) {
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
                obj3 = closure_0(closure_2[24]);
                obj1 = {
                  analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST,
                  analyticsLocations: null,
                  screen: null,
                };
                items1 = [];
                items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
                obj1.analyticsLocations = items1;
                obj1.screen = closure_11.FEATURED_PAGE;
                result = obj3.openCollectiblesShopMobile(obj1);
                return;
              }
            }
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
                  obj3 = closure_0(closure_2[24]);
                  obj1 = {
                    analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST,
                    analyticsLocations: null,
                    screen: null,
                  };
                  items1 = [];
                  items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
                  obj1.analyticsLocations = items1;
                  obj1.screen = closure_11.FEATURED_PAGE;
                  result = obj3.openCollectiblesShopMobile(obj1);
                  return;
                }
              }
              const tmp16 = closure_12(tmp(11780).ShopIcon, { size: "sm" });
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t.RSyoZu);
              cResult[9] = tmp16;
              cResult[10] = stringResult;
              let tmp15 = stringResult;
              const tmp14 = tmp16;
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
                  obj3 = closure_0(closure_2[24]);
                  obj1 = {
                    analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST,
                    analyticsLocations: null,
                    screen: null,
                  };
                  items1 = [];
                  items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
                  obj1.analyticsLocations = items1;
                  obj1.screen = closure_11.FEATURED_PAGE;
                  result = obj3.openCollectiblesShopMobile(obj1);
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
                  obj3 = closure_0(closure_2[24]);
                  obj1 = {
                    analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST,
                    analyticsLocations: null,
                    screen: null,
                  };
                  items1 = [];
                  items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
                  obj1.analyticsLocations = items1;
                  obj1.screen = closure_11.FEATURED_PAGE;
                  result = obj3.openCollectiblesShopMobile(obj1);
                  return;
                }
              }
              const obj3 = { size: "md", variant: "secondary", icon: tmp14, text: tmp15, onPress: O };
              const tmp19 = closure_12(tmp(5376).Button, obj3);
              cResult[11] = O;
              cResult[12] = tmp19;
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
                  obj3 = closure_0(closure_2[24]);
                  obj1 = {
                    analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST,
                    analyticsLocations: null,
                    screen: null,
                  };
                  items1 = [];
                  items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
                  obj1.analyticsLocations = items1;
                  obj1.screen = closure_11.FEATURED_PAGE;
                  result = obj3.openCollectiblesShopMobile(obj1);
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
                  obj3 = closure_0(closure_2[24]);
                  obj1 = {
                    analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST,
                    analyticsLocations: null,
                    screen: null,
                  };
                  items1 = [];
                  items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
                  obj1.analyticsLocations = items1;
                  obj1.screen = closure_11.FEATURED_PAGE;
                  result = obj3.openCollectiblesShopMobile(obj1);
                  return;
                }
              }
              return tmp20;
            }
            let obj4 = { style: tmp4.shopButtonContainer, children: tmp18 };
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
                obj3 = closure_0(closure_2[24]);
                obj1 = {
                  analyticsSource: closure_1(closure_2[25]).USER_PROFILE_WISHLIST,
                  analyticsLocations: null,
                  screen: null,
                };
                items1 = [];
                items1[0] = closure_1(closure_2[25]).USER_PROFILE_WISHLIST;
                obj1.analyticsLocations = items1;
                obj1.screen = closure_11.FEATURED_PAGE;
                result = obj3.openCollectiblesShopMobile(obj1);
                return;
              }
            }
            const obj5 = {
              impressionSessionId: tmp10,
              surface: "user_profile_wishlist_suggestions_grid",
              wishlistOwnerId: userId,
              wishlistId,
              analyticsLocations,
            };
            cResult[16] = analyticsLocations;
            cResult[17] = tmp10;
            cResult[18] = userId;
            cResult[19] = wishlistId;
            cResult[20] = obj5;
          }
          tmpResult = tmp(13336);
        }
        const obj6 = {
          userId,
          wishlist,
          numWishlistItemsToRecommend: 15,
          maxWishlistItemsToShow: 9,
          source: tmp(8967).WishlistFetchSource.USER_PROFILE,
        };
        cResult[4] = userId;
        cResult[5] = wishlist;
        cResult[6] = obj6;
        tmp11 = obj6;
      }
      const obj7 = {
        minCardSize: 80,
        maxCardSize: 120,
        containerWidth,
        maxWidth,
        sidePadding: closure_8 + PX_16 + 1,
        gap,
      };
      cResult[0] = containerWidth;
      cResult[1] = maxWidth;
      cResult[2] = obj7;
      tmp6 = obj7;
      let obj2 = trackUserProfileWishlistAction(8298);
    }
  : function WishlistSuggestionsGridContents(arg0) {
      ({ userId, wishlist, isDismissible } = arg0);
      let trackUserProfileWishlistAction;
      ({ wishlistId, containerWidth, maxWidth, markAsDismissed } = arg0);
      trackUserProfileWishlistAction =
        trackUserProfileWishlistAction(8298).useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
      const tmp3 = closure_15();
      let obj = trackUserProfileWishlistAction(8298);
      const analyticsLocations = useAnalyticsLocationsDefault().analyticsLocations;
      let obj2 = {
        minCardSize: 80,
        maxCardSize: 120,
        containerWidth,
        maxWidth,
        sidePadding: closure_8 + PX_16 + 1,
        gap,
      };
      const tmp4 = closure_18();
      const tmp6 = useInitialValueDefault(() => trackUserProfileWishlistAction(dependencyMap[19]).v4());
      const obj3 = trackUserProfileWishlistAction(13336);
      let items = obj3.useAddToWishlistGridItems({
        userId,
        wishlist,
        numWishlistItemsToRecommend: 15,
        maxWishlistItemsToShow: 9,
        source: trackUserProfileWishlistAction(8967).WishlistFetchSource.USER_PROFILE,
      }).items;
      let items1 = [trackUserProfileWishlistAction];
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
      }, items1);
      if (0 === items.length) {
        const obj5 = { style: tmp3.shopButtonContainer, children: null };
        const obj6 = {
          size: "md",
          variant: "secondary",
          icon: closure_12(tmp(11780).ShopIcon, { size: "sm" }),
          text: null,
          onPress: null,
        };
        const intl3 = tmp(1126).intl;
        obj6.text = intl3.string(tmp(1126).t.RSyoZu);
        obj6.onPress = callback;
        obj5.children = closure_12(tmp(5376).Button, obj6);
        let tmp11Result = closure_12(View, obj5);
      } else {
        const obj7 = { newValue: null, children: null };
        const obj8 = {
          impressionSessionId: tmp6,
          surface: "user_profile_wishlist_suggestions_grid",
          wishlistOwnerId: userId,
          wishlistId,
          analyticsLocations,
        };
        obj7.newValue = obj8;
        const obj9 = { style: tmp3.container, entering: null, exiting: null, layout: null, children: null };
        ({ entering: obj15.entering, exiting: obj15.exiting, layout: obj15.layout } = tmp4);
        const obj10 = { style: tmp3.headerRow, children: null };
        const obj11 = {
          accessibilityRole: "header",
          variant: "text-sm/medium",
          color: "text-strong",
          lineClamp: 1,
          children: null,
        };
        const intl4 = tmp(1126).intl;
        obj11.children = intl4.string(tmp(1126).t["+GB8Kt"]);
        const items2 = [closure_12(tmp(5087).Text, obj11)];
        const items3 = [tmp3.dismissButton];
        let hiddenDismissButton = !isDismissible;
        if (!isDismissible) {
          hiddenDismissButton = tmp3.hiddenDismissButton;
        }
        const obj12 = {
          style: null,
          pointerEvents: null,
          accessibilityElementsHidden: null,
          importantForAccessibility: null,
          children: null,
        };
        items3[1] = hiddenDismissButton;
        obj12.style = items3;
        let str = "none";
        if (isDismissible) {
          str = "auto";
        }
        obj12.pointerEvents = str;
        obj12.accessibilityElementsHidden = !isDismissible;
        let str2 = "no-hide-descendants";
        if (isDismissible) {
          str2 = "auto";
        }
        obj12.importantForAccessibility = str2;
        const obj13 = { size: "sm", variant: "icon-only", icon: null, onPress: null, accessibilityLabel: null };
        const obj14 = { size: "sm", color: nativeDefault.colors.CONTROL_ICON_ONLY_ICON_DEFAULT };
        obj13.icon = closure_12(tmp(6212).XSmallIcon, obj14);
        obj13.onPress = markAsDismissed;
        const intl = tmp(1126).intl;
        obj13.accessibilityLabel = intl.string(tmp(1126).t.WAI6xu);
        obj12.children = closure_12(tmp(8114).IconButton, obj13);
        items2[1] = closure_12(View, obj12);
        obj10.children = items2;
        const items4 = [closure_13(View, obj10), ,];
        const obj16 = { items, wishlist, analyticsLocations, cardSize: useCardGridLayoutDefault(obj2).cardWidth };
        items4[1] = closure_12(AddToWishlistGridDefault, obj16);
        const obj17 = { style: tmp3.shopButtonContainer, children: null };
        const obj32 = {
          size: "md",
          variant: "secondary",
          icon: closure_12(tmp(11780).ShopIcon, { size: "sm" }),
          text: null,
          onPress: null,
        };
        const intl2 = tmp(1126).intl;
        obj32.text = intl2.string(tmp(1126).t.RSyoZu);
        obj32.onPress = callback;
        obj17.children = closure_12(tmp(5376).Button, obj32);
        items4[2] = closure_12(View, obj17);
        obj9.children = items4;
        obj7.children = closure_13(ReanimatedRexportDefault.View, obj9);
        tmp11Result = closure_12(tmp(13338).WishlistAnalyticsProvider, obj7);
      }
      return tmp11Result;
    };
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useAnimations() {
      const cResult = c.c(12);
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
      const stateFromStores = initialize.useStateFromStores(tmp4, tmp5);
      const ReduceMotion = ReanimatedRexport.ReduceMotion;
      const tmp8 = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
      if (cResult[2] !== tmp8) {
        const FadeInDown = ReanimatedRexport.FadeInDown;
        const reduceMotionResult = FadeInDown.reduceMotion(tmp8);
        cResult[2] = tmp8;
        cResult[3] = reduceMotionResult;
        let tmp9 = reduceMotionResult;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] !== tmp8) {
        const FadeOutDown = ReanimatedRexport.FadeOutDown;
        const reduceMotionResult1 = FadeOutDown.reduceMotion(tmp8);
        cResult[4] = tmp8;
        cResult[5] = reduceMotionResult1;
        let tmp11 = reduceMotionResult1;
      } else {
        tmp11 = cResult[5];
      }
      if (cResult[6] !== tmp8) {
        const LinearTransition = ReanimatedRexport.LinearTransition;
        const springifyResult = LinearTransition.springify();
        const massResult = LinearTransition.springify().mass(0.8);
        const dampingResult = LinearTransition.springify().mass(0.8).damping(100);
        const reduceMotionResult2 = LinearTransition.springify()
          .mass(0.8)
          .damping(100)
          .stiffness(300)
          .reduceMotion(tmp8);
        cResult[6] = tmp8;
        cResult[7] = reduceMotionResult2;
        let tmp13 = reduceMotionResult2;
        const stiffnessResult = LinearTransition.springify().mass(0.8).damping(100).stiffness(300);
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp9) {
        if (cResult[9] === tmp11) {
          if (cResult[10] === tmp13) {
            let tmp15 = cResult[11];
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
      const tmpResult = initialize;
    }
  : function useAnimations() {
      const items = [AccessibilityStore];
      stateFromStores = stateFromStores(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
      const items1 = [stateFromStores];
      return noop.useMemo(() => {
        const ReduceMotion = ReanimatedRexport.ReduceMotion;
        const tmp = stateFromStores ? ReduceMotion.Always : ReduceMotion.Never;
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
    };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWishlistSuggestionsGrid.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileWishlistSuggestionsGrid(arg0) {
      const cResult = c.c(2);
      if (!obj2.useIsMobileWishlistSuggestionsEnabled("user_profile_wishlist_suggestions_grid")) {
        return null;
      } else if (cResult[0] !== arg0) {
        const obj3 = {};
        const merged = Object.assign(arg0);
        const tmp9 = __initData(closure_16, obj3);
        cResult[0] = arg0;
        cResult[1] = tmp9;
      }
      obj2 = MobileWishlistSuggestionsExperiment;
    }
  : function UserProfileWishlistSuggestionsGrid(arg0) {
      let tmp = null;
      if (obj.useIsMobileWishlistSuggestionsEnabled("user_profile_wishlist_suggestions_grid")) {
        const obj2 = {};
        const merged = Object.assign(arg0);
        tmp = __initData(closure_16, obj2);
      }
      return tmp;
    };
