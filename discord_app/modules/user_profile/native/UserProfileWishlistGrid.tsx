// === Module 13222: UserProfileWishlistGrid ===

// Module 13222 (UserProfileWishlistGrid)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4603 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7285 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7644 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7645 */;
import SentGiftsStore from "SentGiftsStore" /* 11170 */;
import WishlistStore from "WishlistStore" /* 8903 */;
import UserStore from "UserStore" /* 1371 */;
import SKUStore from "SKUStore" /* 5591 */;
import UserProfileStore from "UserProfileStore" /* 7723 */;

const require = globalThis.__r;

require = fn;
class WishlistEmptyState {
  constructor() {
    tmp = closure_0;
    tmp2 = closure_2;
    obj = closure_0(closure_2[19]);
    isMobileWishlistSuggestionsEnabled = obj.useIsMobileWishlistSuggestionsEnabled("WishlistEmptyState");
    tmp4 = closure_26(isMobileWishlistSuggestionsEnabled);
    obj2 = closure_0(closure_2[20]);
    obj3 = closure_0(closure_2[21]);
    str = "mobile-text-heading-primary";
    if (obj3.isThemeDark(obj2.useThemeContext().theme)) {
      str = "text-overlay-light";
    }
    tmpResult = tmp(tmp2[22]);
    trackUserProfileWishlistAction = tmpResult.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
    closure_0 = trackUserProfileWishlistAction;
    items = [];
    items[0] = trackUserProfileWishlistAction;
    tmp7 = View;
    obj1 = { style: tmp4.emptyState, children: null };
    tmp8 = jsx;
    callback = closure_4.useCallback(() => {
      const obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, productLines: null };
      const items = [constants2.COLLECTIBLES];
      obj.productLines = new Set(items);
      trackUserProfileWishlistAction(obj);
      const set = new Set(items);
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      const obj4 = { analyticsSource: AnalyticsLocationDefault.USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
      const items1 = [AnalyticsLocationDefault.USER_PROFILE_WISHLIST];
      obj4.analyticsLocations = items1;
      obj4.screen = constants.FEATURED_PAGE;
      const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj4);
    }, items);
    tmp6 = jsxs;
    obj10 = { variant: "text-md/medium", color: str, accessibilityRole: "header", children: null };
    intl = tmp(tmp2[27]).intl;
    obj10.children = intl.string(tmp(tmp2[27]).t.HGnLLT);
    items1 = [, , ];
    items1[0] = jsx(tmp(tmp2[26]).Text, obj10);
    obj11 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", style: tmp4.emptyStateText, children: null };
    intl2 = tmp(tmp2[27]).intl;
    obj11.children = intl2.string(tmp(tmp2[27]).t["/X1ny6"]);
    items1[1] = jsx(tmp(tmp2[26]).Text, obj11);
    tmp8Result = !isMobileWishlistSuggestionsEnabled;
    if (!isMobileWishlistSuggestionsEnabled) {
      obj12 = { style: null, children: null };
      obj12.style = tmp4.emptyStateCta;
      obj13 = { size: "md", variant: "secondary", icon: null, text: null, onPress: null };
      obj13.icon = tmp8(tmp(tmp2[29]).PlusMediumIcon, { size: "xs" });
      intl3 = tmp(tmp2[27]).intl;
      obj13.text = intl3.string(tmp(tmp2[27]).t.SDUwM0);
      obj13.onPress = callback;
      obj12.children = tmp8(tmp(tmp2[28]).Button, obj13);
      tmp8Result = tmp8(tmp7, obj12);
    }
    items1[2] = tmp8Result;
    obj1.children = items1;
    return tmp6(tmp7, obj1);
  }
}
const View = fn(17).View;
let closure_9 = fn(8906).isCollectiblesWishlistItemRecord;
const getWishlistProductLines = fn(8904).getWishlistProductLines;
let Constants = fn(8300);
({ TrackUserProfileWishlistActions: closure_14, UserProfileSections: closure_15 } = Constants);
Constants = fn(1074);
({ Routes: closure_16, SKUProductLines: closure_17 } = Constants);
let closure_18 = fn(1076).CollectiblesMobileShopScreen;
const PremiumConstants = fn(1373);
({ GiftingOrigin: closure_19, PremiumSubscriptionSKUToPremiumType: closure_20, SubscriptionIntervalTypes: closure_21 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
let closure_25 = new LoggerDefault("UserProfileWishlistGrid");
const createStyles = fn(4636);
let dependencyMap = createStyles.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const obj = { headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: nativeDefault.space.PX_12 }, headerButtons: null, gridWrapper: null, itemsContainer: null, emptyState: null, emptyStateText: null, emptyStateCta: null, disclaimer: null, disclaimerTop: null };
  const obj2 = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: nativeDefault.space.PX_12 };
  obj.headerButtons = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.gridWrapper = { width: "100%", alignItems: "center" };
  const obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.itemsContainer = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16, justifyContent: "flex-start" };
  const space = nativeDefault.space;
  const obj5 = { alignItems: "center", paddingTop: flag ? space.PX_24 : space.PX_48, paddingBottom: null, paddingHorizontal: null, gap: null };
  const space2 = nativeDefault.space;
  obj5.paddingBottom = flag ? space2.PX_12 : space2.PX_48;
  obj5.paddingHorizontal = nativeDefault.space.PX_32;
  obj5.gap = nativeDefault.space.PX_8;
  obj.emptyState = obj5;
  obj.emptyStateText = { textAlign: "center" };
  const obj4 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16, justifyContent: "flex-start" };
  obj.emptyStateCta = { marginTop: nativeDefault.space.PX_24 };
  const obj6 = { marginTop: nativeDefault.space.PX_24 };
  obj.disclaimer = { padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
  const obj7 = { padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
  obj.disclaimerTop = { marginBottom: nativeDefault.space.PX_16 };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWishlistGrid.tsx");

export default function UserProfileWishlistGrid(wishlistId) {
  wishlistId = wishlistId.wishlistId;
  _require = wishlistId;
  importDefault = undefined;
  let context;
  let trackUserProfileWishlistAction;
  let analyticsLocations;
  let createOrReuseGiftOrder;
  let mobileStoreFront;
  let stateFromStores;
  closure_8 = undefined;
  let stateFromStores5;
  let isShopStandalonePdpMobileEnabled;
  let memo1;
  let stateFromStoresArray;
  let memo2;
  closure_14 = undefined;
  ({ containerWidth, maxWidth, isVisible } = wishlistId);
  let tmp = closure_26();
  ({ cardWidth: c1, rowWidth } = require("useCardGridLayout")({ containerWidth, maxWidth }));
  if (null != rowWidth) {
    let obj = { width: rowWidth };
    let tmp5 = obj;
  }
  let tmp4 = require("useCardGridLayout")({ containerWidth, maxWidth });
  const userProfileAnalyticsContext = require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileWishlistAction = userProfileAnalyticsContext.trackUserProfileWishlistAction;
  analyticsLocations = tmp2(tmp3[31])().analyticsLocations;
  let obj2 = require("UserProfileAnalyticsContext");
  createOrReuseGiftOrder = require("createOrReuseGiftOrder").useCreateOrReuseGiftOrder("UserProfileWishlistGrid");
  let obj3 = require("createOrReuseGiftOrder");
  mobileStoreFront = require("NativePaymentHooks").useMobileStoreFront();
  const tmp2Result = require("NativePaymentHooks");
  let items = [closure_8];
  stateFromStores = require("initialize").useStateFromStores(items, () => WishlistStore.getWishlist(closure_0));
  let obj5 = require("initialize");
  let items1 = [closure_8];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => WishlistStore.isFetching(closure_0));
  let obj6 = require("initialize");
  let items2 = [closure_8];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => WishlistStore.getError(closure_0));
  let obj7 = require("initialize");
  let items3 = [memo2];
  let items4 = [stateFromStores, wishlistId];
  const stateFromStores3 = require("initialize").useStateFromStores(items3, () => {
    let wishlistSettings = null;
    if (null != stateFromStores) {
      wishlistSettings = UserProfileStore.getWishlistSettings(tmp.userId, closure_0);
    }
    return wishlistSettings;
  }, items4);
  let visibility;
  if (stateFromStores3 != null) {
    visibility = stateFromStores3.visibility;
  }
  let obj8 = require("initialize");
  let items5 = [memo1];
  const stateFromStores4 = require("initialize").useStateFromStores(items5, () => memo1.getCurrentUser());
  let id;
  if (stateFromStores4 != null) {
    id = stateFromStores4.id;
  }
  let userId;
  if (stateFromStores != null) {
    userId = stateFromStores.userId;
  }
  let tmp41Result2 = id === userId;
  closure_8 = tmp41Result2;
  const tmp15 = memo1;
  const tmp6Result = require("initialize");
  let items6 = [tmp15];
  let items7 = [stateFromStores];
  stateFromStores5 = require("initialize").useStateFromStores(items6, () => {
    let user = null;
    if (null != stateFromStores) {
      user = UserStore.getUser(tmp.userId);
    }
    return user;
  }, items7);
  if (stateFromStores5 != null) {
    const nsfwAllowed = stateFromStores5.nsfwAllowed;
  }
  let tmp21 = visibility === tmp6(tmp3[35]).WishlistVisibility.PRIVATE;
  const tmp6Result4 = require("initialize");
  isShopStandalonePdpMobileEnabled = require("ShopStandalonePdpMobileExperiment").useIsShopStandalonePdpMobileEnabled("product_details_action_sheet");
  let intl = tmp6(tmp3[27]).intl;
  const string = intl.string;
  const t = tmp6(tmp3[27]).t;
  if (tmp21) {
    let stringResult = string(t.RX7D9h);
  } else {
    stringResult = string(t.d78ChW);
  }
  let items8 = [stateFromStores, tmp41Result2];
  const memo = analyticsLocations.useMemo(() => {
    let found;
    if (stateFromStores != null) {
      const items = stateFromStores.items;
      found = items.filter((item) => closure_0(context[37]).isEligibleWishlistItemOnMobile(item, { isWishlistOwner }));
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items8);
  const items9 = [stateFromStores];
  memo1 = analyticsLocations.useMemo(() => {
    let found;
    if (stateFromStores != null) {
      const items = stateFromStores.items;
      found = items.filter(closure_9);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items9);
  const tmp6Result5 = require("ShopStandalonePdpMobileExperiment");
  const items10 = [stateFromStores];
  const items11 = [memo1, stateFromStores5];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(items10, () => {
    if (null == stateFromStores5) {
      let items = [];
    } else {
      const found = memo1.filter((skuId) => stateFromStores.hasSentGift(skuId.skuId, id.id));
      items = found.map((skuId) => skuId.skuId);
    }
    return items;
  }, items11);
  const items12 = [stateFromStoresArray];
  memo2 = analyticsLocations.useMemo(() => new Set(stateFromStoresArray), items12);
  let obj4 = { wishlistId, onAction: trackUserProfileWishlistAction, productLines: null, isVisible: null };
  let tmp28 = null;
  const tmp6Result6 = require("initialize");
  if (null != stateFromStores) {
    tmp28 = isShopStandalonePdpMobileEnabled(stateFromStores);
  }
  obj4.productLines = tmp28;
  obj4.isVisible = isVisible;
  require("useTrackUserProfileWishlistView")(obj4);
  _require = trackUserProfileWishlistAction((wishlistId) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp9 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === country) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              dependencyMap = tmp7;
              closure_130_0 = wishlistId;
              let product;
              closure_130_2 = undefined;
              closure_130_3 = undefined;
              closure_130_4 = undefined;
              const obj5 = { action: constants.WISHLIST_ITEM_CLICKED, wishlistId, skuId: wishlistId.skuId, productLines: null };
              const _Set = Set;
              const items = [wishlistId.skuProductLine];
              set = new Set(items);
              obj5.productLines = set;
              tmp4(obj5);
              const rootNavigationRef = wishlistId(context[39]).getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  if (wishlistId.skuProductLine !== constants2.PREMIUM) {
                    if (wishlistId.skuProductLine !== tmp53.SOCIAL_LAYER_GAME_ITEM) {
                      if (!closure_1_8) {
                        if (null != lockedRecipientUser) {
                          if (!wishlistId.isOwned) {
                            if (!set.has(wishlistId.skuId)) {
                              c1(context[23]).hideAllActionSheets();
                              const obj24 = c1(context[23]);
                              if (obj25.isCollectibleGiftingSupported()) {
                                const obj7 = { analyticsLocations: null, analyticsSource: null, screen: null, onNavigateAway: null };
                                const items1 = [c1(context[25]).USER_PROFILE_WISHLIST];
                                obj7.analyticsLocations = items1;
                                obj7.analyticsSource = c1(context[25]).USER_PROFILE_WISHLIST;
                                obj7.screen = constants3.FEATURED_PAGE;
                                obj7.onNavigateAway = function onNavigateAway() {
                                  closure_1(8296)({ userId: user.id, initialSection: constants2.WISHLIST });
                                };
                                const result = wishlistId(context[24]).openCollectiblesShopMobile(obj7);
                                const obj28 = wishlistId(context[24]);
                                const obj8 = { skuId: wishlistId.skuId, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null };
                                const items2 = [c1(context[25]).USER_PROFILE_WISHLIST];
                                obj8.analyticsLocations = items2;
                                obj8.lockedRecipientUser = lockedRecipientUser;
                                obj8.giftingOrigin = constants4.USER_PROFILE_WISHLIST;
                                wishlistId(context[52]).openShopGiftModal(obj8);
                                c7 = 3;
                                const obj10 = { value: undefined, done: true };
                                return obj10;
                              } else {
                                const _HermesInternal2 = HermesInternal;
                                v0 = 1;
                                const combined = "" + constants.COLLECTIBLES_SHOP + "#itemSkuId=" + wishlistId.skuId;
                                country = 3;
                                c7 = 1;
                                const obj11 = { value: c1(context[53]).redirectWithHandoffToken(combined, { forceExternalBrowser: true }), done: false };
                                return obj11;
                              }
                              obj25 = wishlistId(context[51]);
                            }
                          }
                        }
                      }
                      if (isShopStandalonePdpMobileEnabled) {
                        const obj13 = { skuId: wishlistId.skuId, analyticsLocations: null };
                        const items3 = [c1(context[25]).USER_PROFILE_WISHLIST];
                        obj13.analyticsLocations = items3;
                        const result1 = wishlistId(context[55]).openProductDetailsActionSheetForSku(obj13, "stack");
                        const tmp110Result = wishlistId(context[55]);
                      } else {
                        if (tmp110Result2.isCollectiblesShopOpen()) {
                          product = mobileStoreFront.getProduct(wishlistId.skuId);
                          if (null == product) {
                            country = 1;
                            c7 = 1;
                            const obj14 = { value: wishlistId(context[24]).maybeFetchCollectiblesProduct(wishlistId.skuId), done: false };
                            return obj14;
                          } else {
                            if (null != product) {
                              const obj19 = { product, analyticsLocations: null };
                              const items4 = [c1(context[25]).USER_PROFILE_WISHLIST];
                              obj19.analyticsLocations = items4;
                              const result2 = wishlistId(context[55]).openProductDetailsActionSheet(obj19, "stack");
                              const obj37 = wishlistId(context[55]);
                            } else {
                              c1(context[23]).hideAllActionSheets();
                              const obj36 = c1(context[23]);
                            }
                            c7 = 3;
                          }
                        } else {
                          const obj23 = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null, screen: null };
                          const items5 = [c1(context[25]).USER_PROFILE_WISHLIST];
                          obj23.analyticsLocations = items5;
                          obj23.analyticsSource = c1(context[25]).USER_PROFILE_WISHLIST;
                          obj23.initialProductSkuId = wishlistId.skuId;
                          obj23.screen = constants3.SHOP_ALL;
                          const result3 = wishlistId(context[24]).openCollectiblesShopMobile(obj23);
                          const obj34 = wishlistId(context[24]);
                        }
                        tmp110Result2 = wishlistId(context[24]);
                      }
                    } else {
                      const sku = wishlistId.sku;
                      closure_1 = sku;
                      if (sku == null) {
                        closure_1 = stateFromStoresArray.get(wishlistId.skuId);
                      }
                      let isAndroidResult = wishlistId(context[46]).isAndroid();
                      if (isAndroidResult) {
                        isAndroidResult = null != tmp62;
                      }
                      if (isAndroidResult) {
                        isAndroidResult = null == tmp62.googleSkuIds;
                      }
                      if (isAndroidResult) {
                        country = undefined;
                        if (country != null) {
                          country = country.country;
                        }
                        const obj27 = { withGoogleSkuIds: true, countryCode: country };
                        const socialLayerStorefrontSkuForApplication = wishlistId(context[47]).fetchSocialLayerStorefrontSkuForApplication(tmp62.applicationId, wishlistId.skuId, obj27);
                        const obj18 = wishlistId(context[47]);
                      }
                      const obj17 = wishlistId(context[46]);
                      if (!closure_1_8) {
                        if (obj20.isSlayerSkuAvailableOnThisPlatform(tmp62)) {
                          if (null != lockedRecipientUser) {
                            c1(context[23]).hideAllActionSheets();
                            const obj54 = c1(context[23]);
                            const obj29 = { skuId: wishlistId.skuId, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null, onGiftModalDismiss: null };
                            const items6 = [c1(context[25]).USER_PROFILE_WISHLIST];
                            obj29.analyticsLocations = items6;
                            obj29.lockedRecipientUser = lockedRecipientUser;
                            obj29.giftingOrigin = constants4.USER_PROFILE_WISHLIST;
                            obj29.onGiftModalDismiss = function onGiftModalDismiss() {
                              closure_1(8296)({ userId: user.id, initialSection: constants2.WISHLIST });
                            };
                            const result4 = wishlistId(context[49]).openSocialLayerStorefrontGiftModal(obj29);
                            const obj55 = wishlistId(context[49]);
                          }
                        }
                      }
                      obj20 = wishlistId(context[48]);
                      c1(context[23]).hideAllActionSheets();
                      const obj21 = c1(context[23]);
                      const obj31 = { skuId: wishlistId.skuId, analyticsLocations: null };
                      const items7 = [c1(context[25]).USER_PROFILE_WISHLIST];
                      obj31.analyticsLocations = items7;
                      const result5 = wishlistId(context[49]).openSocialLayerStorefrontProductDetailsModal(obj31);
                      const obj22 = wishlistId(context[49]);
                    }
                  } else if (closure_1_8) {
                    c1(context[23]).hideAllActionSheets();
                    const obj15 = c1(context[23]);
                    const result6 = wishlistId(context[41]).navigateToPremiumHomePage();
                    const obj16 = wishlistId(context[41]);
                  } else if (null != lockedRecipientUser) {
                    c1(context[23]).hideAllActionSheets();
                    closure_130_3 = tmp178;
                    const YEAR = constants5.YEAR;
                    closure_130_4 = YEAR;
                    const obj50 = c1(context[23]);
                    const planIdForPremiumType = wishlistId(context[42]).getPlanIdForPremiumType(tmp178, YEAR);
                    const obj51 = wishlistId(context[42]);
                    v0 = 2;
                    const obj32 = { planId: planIdForPremiumType, recipientUserId: lockedRecipientUser.id, productId: wishlistId(context[43]).getProductIdForGift(planIdForPremiumType) };
                    country = 5;
                    c7 = 1;
                    const obj33 = { value: v0(obj32), done: false };
                    return obj33;
                  }
                }
              }
              const obj48 = wishlistId(context[39]);
              const obj35 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
              const intl4 = wishlistId(context[27]).intl;
              obj35.content = intl4.string(wishlistId(context[27]).t["rTU7/z"]);
              c1(context[40]).open(obj35);
              const obj12 = c1(context[40]);
            }
          } else if (1 === tmp10) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj38 = { value, done: true };
              return obj38;
            } else {
              product = mobileStoreFront.getProduct(closure_130_0.skuId);
            }
          } else if (2 === tmp10) {
            v0 = 0;
            closure_130_5 = closure_4;
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            logger.error("Error performing web handoff: " + JSON.stringify(closure_130_5));
            const obj40 = { tags: null };
            const obj41 = { source: "UserProfileWishlistGrid", skuId: closure_130_0.skuId };
            obj40.tags = obj41;
            const result7 = wishlistId(context[54]).captureBillingException(closure_130_5, obj40);
            const obj6 = wishlistId(context[54]);
            const obj42 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
            const intl3 = wishlistId(context[27]).intl;
            obj42.content = intl3.string(wishlistId(context[27]).t["rTU7/z"]);
            c1(context[40]).open(obj42);
            const obj9 = c1(context[40]);
          } else {
            if (3 === tmp10) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c7 = 3;
                const obj43 = { value, done: true };
                return obj43;
              } else {
                v0 = 0;
              }
            } else if (4 === tmp10) {
              v0 = 0;
              const obj44 = { title: null, body: null };
              const intl = wishlistId(context[27]).intl;
              obj44.title = intl.string(wishlistId(context[27]).t.R0RpRX);
              const intl2 = wishlistId(context[27]).intl;
              obj44.body = intl2.string(wishlistId(context[27]).t.CKsXk3);
              c1(context[44]).show(obj44);
              c7 = 3;
              const obj46 = { value: undefined, done: true };
              return obj46;
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_130_2 = value;
              v0 = 0;
              const obj47 = { recipientUserId: lockedRecipientUser.id, premiumType: closure_130_3, planInterval: closure_130_4, order: closure_130_2, analyticsLocations: null };
              const items8 = [c1(context[25]).USER_PROFILE_WISHLIST];
              obj47.analyticsLocations = items8;
              wishlistId(context[45]).openGiftModal(obj47);
              const obj45 = wishlistId(context[45]);
            }
            v0 = 0;
            c7 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c7 = 3;
        } catch (tmp141) {
          closure_4 = tmp141;
          if (tmp5 === v0) {
            c7 = tmp3;
            throw tmp141;
          } else if (tmp2 === tmp143) {
            country = tmp;
          } else {
            country = tmp6;
          }
        }
      }
    })();
  });
  const items13 = [wishlistId, trackUserProfileWishlistAction, tmp41Result2, stateFromStores5, memo2, , , ];
  let country;
  if (mobileStoreFront != null) {
    country = mobileStoreFront.country;
  }
  items13[5] = country;
  items13[6] = isShopStandalonePdpMobileEnabled;
  items13[7] = createOrReuseGiftOrder;
  closure_14 = obj12.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items13);
  const items14 = [wishlistId, context, analyticsLocations, trackUserProfileWishlistAction, stateFromStores];
  const items15 = [trackUserProfileWishlistAction, wishlistId];
  const callback = obj12.useCallback(() => {
    const obj = { action: constants.PRESS_EDIT_WISHLIST, wishlistId, productLines: null };
    let tmp4;
    if (null != stateFromStores) {
      tmp4 = getWishlistProductLines(tmp3);
    }
    obj.productLines = tmp4;
    trackUserProfileWishlistAction(obj);
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13227, dependencyMap.paths), "EditWishlistActionSheet", { wishlistId, analyticsContext: context, analyticsLocations }, "stack");
    const obj3 = { wishlistId, analyticsContext: context, analyticsLocations };
  }, items14);
  const callback1 = obj12.useCallback(() => {
    const obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, wishlistId, productLines: null };
    const items = [constants2.COLLECTIBLES];
    obj.productLines = new Set(items);
    trackUserProfileWishlistAction(obj);
    const set = new Set(items);
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    const obj4 = { analyticsSource: AnalyticsLocationDefault.USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
    const items1 = [AnalyticsLocationDefault.USER_PROFILE_WISHLIST];
    obj4.analyticsLocations = items1;
    obj4.screen = constants3.FEATURED_PAGE;
    const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj4);
  }, items15);
  if (stateFromStores1) {
    if (null == stateFromStores) {
      return null;
    }
  }
  if (null != stateFromStores2) {
    return null;
  } else if (null == stateFromStores) {
    return null;
  } else if (0 === memo.length) {
    return closure_22(WishlistEmptyState, {});
  } else {
    let tmp41Result = tmp41Result2;
    if (tmp41Result2) {
      if (!tmp21) {
        tmp21 = false === nsfwAllowed;
      }
      tmp41Result = tmp21;
    }
    if (tmp41Result) {
      let obj9 = { style: null, children: null };
      const items16 = [, ];
      ({ disclaimer: arr18[0], disclaimerTop: arr18[1] } = tmp);
      obj9.style = items16;
      const items17 = [closure_22(tmp6(tmp3[58]).CircleInformationIcon, { size: "sm" }), ];
      let obj10 = { variant: "text-xs/medium", color: "text-subtle", children: stringResult };
      items17[1] = closure_22(tmp6(tmp3[26]).Text, obj10);
      obj9.children = items17;
      tmp41Result = closure_23(createOrReuseGiftOrder, obj9);
    }
    const items18 = [tmp41Result, , ];
    let obj11 = { style: tmp.headerRow, children: null };
    let obj13 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    let intl2 = tmp6(tmp3[27]).intl;
    let obj14 = { count: memo.length };
    obj13.children = intl2.formatToPlainString(tmp6(tmp3[27]).t.r6Y1Lg, obj14);
    const items19 = [closure_22(tmp6(tmp3[26]).Text, obj13), ];
    if (tmp41Result2) {
      let obj15 = { style: tmp.headerButtons, children: null };
      let obj16 = { size: "sm", variant: "secondary", icon: closure_22(tmp6(tmp3[29]).PlusMediumIcon, { size: "xs" }), text: null, onPress: null };
      let intl3 = tmp6(tmp3[27]).intl;
      obj16.text = intl3.string(tmp6(tmp3[27]).t.SDUwM0);
      obj16.onPress = callback1;
      const items20 = [closure_22(tmp6(tmp3[28]).Button, obj16), ];
      let obj17 = { size: "sm", variant: "secondary", icon: null, onPress: null, accessibilityLabel: null };
      let obj18 = { size: "sm", color: tmp2(tmp3[18]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      obj17.icon = closure_22(tmp6(tmp3[60]).PencilIcon, obj18);
      obj17.onPress = callback;
      let intl4 = tmp6(tmp3[27]).intl;
      obj17.accessibilityLabel = intl4.string(tmp6(tmp3[27]).t.bt75uw);
      items20[1] = closure_22(tmp6(tmp3[59]).IconButton, obj17);
      obj15.children = items20;
      tmp41Result2 = closure_23(tmp37, obj15);
    }
    let obj19 = { children: null };
    items19[1] = tmp41Result2;
    obj11.children = items19;
    items18[1] = closure_23(createOrReuseGiftOrder, obj11);
    let obj20 = { style: tmp.gridWrapper, children: null };
    let obj21 = { style: null, children: null };
    const items21 = [tmp.itemsContainer, tmp5];
    obj21.style = items21;
    obj21.children = memo.map((sku) => {
      closure_0 = sku;
      let tmp = null;
      if (null != sku.sku) {
        const obj = { sku: null, isOwned: null, onPress: null, size: null, wishlistOwnerId: null };
        ({ sku: obj.sku, isOwned: obj.isOwned } = sku);
        obj.onPress = function onPress() {
          return closure_14(closure_0);
        };
        obj.size = size;
        let id;
        if (stateFromStores5 != null) {
          id = stateFromStores5.id;
        }
        obj.wishlistOwnerId = id;
        tmp = closure_1_22(size(context[61]), obj, sku.skuId);
        const tmp5 = size(context[61]);
      }
      return tmp;
    });
    obj20.children = closure_22(createOrReuseGiftOrder, obj21);
    items18[2] = closure_22(createOrReuseGiftOrder, obj20);
    obj19.children = items18;
    return closure_23(closure_24, obj19);
  }
  const tmp2Result2 = require("useTrackUserProfileWishlistView");
};
export { WishlistEmptyState };