// === Module 13084: UserProfileWishlistGrid ===

// Module 13084 (UserProfileWishlistGrid)
import LoggerDefault from "Logger" /* 3 */;
import nativeDefault from "native" /* 576 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7541 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7542 */;
import SentGiftsStore from "SentGiftsStore" /* 11035 */;
import WishlistStore from "WishlistStore" /* 8777 */;
import UserStore from "UserStore" /* 1371 */;
import SKUStore from "SKUStore" /* 5510 */;
import UserProfileStore from "UserProfileStore" /* 7621 */;

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
    obj = { style: tmp4.emptyState, children: null };
    tmp8 = jsx;
    callback = closure_4.useCallback(() => {
      let obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, productLines: null };
      const items = [constants2.COLLECTIBLES];
      obj.productLines = new Set(items);
      trackUserProfileWishlistAction(obj);
      const set = new Set(items);
      ActionSheetActionCreatorsDefault.hideAllActionSheets();
      obj = { analyticsSource: AnalyticsLocationDefault.USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
      const items1 = [AnalyticsLocationDefault.USER_PROFILE_WISHLIST];
      obj.analyticsLocations = items1;
      obj.screen = constants.FEATURED_PAGE;
      const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj);
    }, items);
    tmp6 = jsxs;
    obj1 = { variant: "text-md/medium", color: str, accessibilityRole: "header", children: null };
    intl = tmp(tmp2[27]).intl;
    obj1.children = intl.string(tmp(tmp2[27]).t.HGnLLT);
    items1 = [, , ];
    items1[0] = jsx(tmp(tmp2[26]).Text, obj1);
    obj2 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", style: tmp4.emptyStateText, children: null };
    intl2 = tmp(tmp2[27]).intl;
    obj2.children = intl2.string(tmp(tmp2[27]).t["/X1ny6"]);
    items1[1] = jsx(tmp(tmp2[26]).Text, obj2);
    tmp8Result = !isMobileWishlistSuggestionsEnabled;
    if (!isMobileWishlistSuggestionsEnabled) {
      obj3 = { style: null, children: null };
      obj3.style = tmp4.emptyStateCta;
      obj4 = { size: "md", variant: "secondary", icon: null, text: null, onPress: null };
      obj4.icon = tmp8(tmp(tmp2[29]).PlusMediumIcon, { size: "xs" });
      intl3 = tmp(tmp2[27]).intl;
      obj4.text = intl3.string(tmp(tmp2[27]).t.SDUwM0);
      obj4.onPress = callback;
      obj3.children = tmp8(tmp(tmp2[28]).Button, obj4);
      tmp8Result = tmp8(tmp7, obj3);
    }
    items1[2] = tmp8Result;
    obj.children = items1;
    return tmp6(tmp7, obj);
  }
}
const View = fn(17).View;
let closure_9 = fn(8780).isCollectiblesWishlistItemRecord;
const getWishlistProductLines = fn(8778).getWishlistProductLines;
let Constants = fn(8183);
({ TrackUserProfileWishlistActions: closure_14, UserProfileSections: closure_15 } = Constants);
Constants = fn(1074);
({ Routes: closure_16, SKUProductLines: closure_17 } = Constants);
let closure_18 = fn(1076).CollectiblesMobileShopScreen;
const PremiumConstants = fn(1373);
({ GiftingOrigin: closure_19, PremiumSubscriptionSKUToPremiumType: closure_20, SubscriptionIntervalTypes: closure_21 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
let closure_25 = new LoggerDefault("UserProfileWishlistGrid");
const createStyles = fn(4560);
let dependencyMap = createStyles.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = { headerRow: null, headerButtons: null, gridWrapper: null, itemsContainer: null, emptyState: null, emptyStateText: null, emptyStateCta: null, disclaimer: null, disclaimerTop: null };
  obj = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: nativeDefault.space.PX_12 };
  obj.headerRow = obj;
  obj = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.headerButtons = obj;
  obj.gridWrapper = { width: "100%", alignItems: "center" };
  obj.itemsContainer = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16, justifyContent: "flex-start" };
  const space = nativeDefault.space;
  const obj2 = { alignItems: "center", paddingTop: flag ? space.PX_24 : space.PX_48, paddingBottom: null, paddingHorizontal: null, gap: null };
  const space2 = tmp(576).space;
  obj2.paddingBottom = flag ? space2.PX_12 : space2.PX_48;
  obj2.paddingHorizontal = nativeDefault.space.PX_32;
  obj2.gap = nativeDefault.space.PX_8;
  obj.emptyState = obj2;
  obj.emptyStateText = { textAlign: "center" };
  const obj1 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16, justifyContent: "flex-start" };
  obj.emptyStateCta = { marginTop: nativeDefault.space.PX_24 };
  const obj3 = { marginTop: nativeDefault.space.PX_24 };
  obj.disclaimer = { padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
  const obj4 = { padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
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
  let storeFront;
  let createOrReuseGiftOrder;
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
  let obj1 = require("UserProfileAnalyticsContext");
  const userProfileAnalyticsContext = obj1.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileWishlistAction = userProfileAnalyticsContext.trackUserProfileWishlistAction;
  analyticsLocations = tmp2(tmp3[31])().analyticsLocations;
  let tmp2Result = tmp2(tmp3[32]);
  storeFront = tmp2Result.useNativeIAPPayments().storeFront;
  let obj3 = require("createOrReuseGiftOrder");
  createOrReuseGiftOrder = obj3.useCreateOrReuseGiftOrder("UserProfileWishlistGrid");
  let obj4 = require("initialize");
  let items = [closure_8];
  stateFromStores = obj4.useStateFromStores(items, () => WishlistStore.getWishlist(closure_0));
  let obj5 = require("initialize");
  let items1 = [closure_8];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => WishlistStore.isFetching(closure_0));
  let obj6 = require("initialize");
  let items2 = [closure_8];
  const stateFromStores2 = obj6.useStateFromStores(items2, () => WishlistStore.getError(closure_0));
  let obj7 = require("initialize");
  let items3 = [memo2];
  let items4 = [stateFromStores, wishlistId];
  const stateFromStores3 = obj7.useStateFromStores(items3, () => {
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
  let tmp6Result = tmp6(tmp3[34]);
  let items5 = [memo1];
  const stateFromStores4 = tmp6Result.useStateFromStores(items5, () => memo1.getCurrentUser());
  let id;
  if (stateFromStores4 != null) {
    id = stateFromStores4.id;
  }
  let userId;
  if (stateFromStores != null) {
    userId = stateFromStores.userId;
  }
  let tmp40Result = id === userId;
  closure_8 = tmp40Result;
  tmp6Result = tmp6(tmp3[34]);
  let items6 = [memo1];
  let items7 = [stateFromStores];
  stateFromStores5 = tmp6Result.useStateFromStores(items6, () => {
    let user = null;
    if (null != stateFromStores) {
      user = UserStore.getUser(tmp.userId);
    }
    return user;
  }, items7);
  if (stateFromStores5 != null) {
    const nsfwAllowed = stateFromStores5.nsfwAllowed;
  }
  let tmp20 = visibility === tmp6(tmp3[35]).WishlistVisibility.PRIVATE;
  let tmp4 = require("useCardGridLayout")({ containerWidth, maxWidth });
  isShopStandalonePdpMobileEnabled = require("ShopStandalonePdpMobileExperiment").useIsShopStandalonePdpMobileEnabled("product_details_action_sheet");
  let intl = tmp6(tmp3[27]).intl;
  const string = intl.string;
  const t = tmp6(tmp3[27]).t;
  if (tmp20) {
    let stringResult = string(t.RX7D9h);
  } else {
    stringResult = string(t.d78ChW);
  }
  let obj11 = analyticsLocations;
  let items8 = [stateFromStores, tmp40Result];
  const memo = analyticsLocations.useMemo(() => {
    let found;
    if (stateFromStores != null) {
      const items = stateFromStores.items;
      found = items.filter((item) => {
        closure_0(context[37]);
        const obj = { isWishlistOwner };
        return obj.isEligibleWishlistItemOnMobile(item, obj);
      });
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
  const tmp6Result1 = require("ShopStandalonePdpMobileExperiment");
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
  obj = { wishlistId, onAction: trackUserProfileWishlistAction, productLines: null, isVisible: null };
  let tmp27 = null;
  tmp2Result = tmp2(tmp3[38]);
  if (null != stateFromStores) {
    tmp27 = isShopStandalonePdpMobileEnabled(stateFromStores);
  }
  obj.productLines = tmp27;
  obj.isVisible = isVisible;
  tmp2Result(obj);
  _require = trackUserProfileWishlistAction((wishlistId) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function*(arg0, value) {
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp9 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c7 = 2;
          if (0 === v5) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              dependencyMap = tmp7;
              closure_130_0 = wishlistId;
              let product;
              closure_130_2 = undefined;
              closure_130_3 = undefined;
              closure_130_4 = undefined;
              let obj1 = { action: constants.WISHLIST_ITEM_CLICKED, wishlistId, skuId: wishlistId.skuId, productLines: null };
              const _Set = Set;
              const items = [wishlistId.skuProductLine];
              set = new Set(items);
              obj1.productLines = set;
              tmp4(obj1);
              const rootNavigationRef = wishlistId(context[39]).getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  if (tmp161.skuProductLine !== constants2.PREMIUM) {
                    if (tmp161.skuProductLine !== tmp53.SOCIAL_LAYER_GAME_ITEM) {
                      if (!closure_1_8) {
                        if (null != lockedRecipientUser) {
                          if (!tmp161.isOwned) {
                            if (!set.has(tmp161.skuId)) {
                              let obj23 = c1(context[23]);
                              obj23.hideAllActionSheets();
                              if (obj25.isCollectibleGiftingSupported()) {
                                const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null, onNavigateAway: null };
                                const items1 = [c1(context[25]).USER_PROFILE_WISHLIST];
                                obj2.analyticsLocations = items1;
                                obj2.analyticsSource = c1(context[25]).USER_PROFILE_WISHLIST;
                                obj2.screen = constants3.FEATURED_PAGE;
                                obj2.onNavigateAway = function onNavigateAway() {
                                  closure_1(8179)({ userId: user.id, initialSection: constants2.WISHLIST });
                                };
                                const result = wishlistId(context[24]).openCollectiblesShopMobile(obj2);
                                const obj28 = wishlistId(context[24]);
                                const obj3 = { skuId: tmp161.skuId, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null };
                                const items2 = [c1(context[25]).USER_PROFILE_WISHLIST];
                                obj3.analyticsLocations = items2;
                                obj3.lockedRecipientUser = lockedRecipientUser;
                                obj3.giftingOrigin = constants4.USER_PROFILE_WISHLIST;
                                wishlistId(context[52]).openShopGiftModal(obj3);
                                c7 = 3;
                                const obj4 = { value: undefined, done: true };
                                return obj4;
                              } else {
                                const _HermesInternal2 = HermesInternal;
                                country = 1;
                                const combined = "" + constants.COLLECTIBLES_SHOP + "#itemSkuId=" + tmp161.skuId;
                                v5 = 3;
                                c7 = 1;
                                let obj5 = { value: c1(context[53]).redirectWithHandoffToken(combined, { forceExternalBrowser: true }), done: false };
                                return obj5;
                              }
                              obj25 = wishlistId(context[51]);
                            }
                          }
                        }
                      }
                      if (isShopStandalonePdpMobileEnabled) {
                        let tmp110Result = tmp110(tmp111[55]);
                        const obj6 = { skuId: tmp161.skuId, analyticsLocations: null };
                        const items3 = [c1(context[25]).USER_PROFILE_WISHLIST];
                        obj6.analyticsLocations = items3;
                        const result1 = tmp110Result.openProductDetailsActionSheetForSku(obj6, "stack");
                      } else {
                        tmp110Result = tmp110(tmp111[24]);
                        if (tmp110Result.isCollectiblesShopOpen()) {
                          product = createOrReuseGiftOrder.getProduct(tmp161.skuId);
                          if (null == product) {
                            v5 = 1;
                            c7 = 1;
                            const obj7 = { value: wishlistId(context[24]).maybeFetchCollectiblesProduct(tmp161.skuId), done: false };
                            return obj7;
                          } else {
                            if (null != product) {
                              let obj8 = { product, analyticsLocations: null };
                              const items4 = [c1(context[25]).USER_PROFILE_WISHLIST];
                              obj8.analyticsLocations = items4;
                              const result2 = wishlistId(context[55]).openProductDetailsActionSheet(obj8, "stack");
                              const obj37 = wishlistId(context[55]);
                            } else {
                              c1(context[23]).hideAllActionSheets();
                              const obj36 = c1(context[23]);
                            }
                            c7 = 3;
                          }
                        } else {
                          const obj9 = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null, screen: null };
                          const items5 = [c1(context[25]).USER_PROFILE_WISHLIST];
                          obj9.analyticsLocations = items5;
                          obj9.analyticsSource = c1(context[25]).USER_PROFILE_WISHLIST;
                          obj9.initialProductSkuId = tmp161.skuId;
                          obj9.screen = constants3.SHOP_ALL;
                          const result3 = wishlistId(context[24]).openCollectiblesShopMobile(obj9);
                          const obj34 = wishlistId(context[24]);
                        }
                      }
                    } else {
                      const sku = tmp161.sku;
                      closure_1 = sku;
                      if (sku == null) {
                        closure_1 = stateFromStoresArray.get(tmp161.skuId);
                      }
                      let obj16 = wishlistId(context[46]);
                      let isAndroidResult = obj16.isAndroid();
                      if (isAndroidResult) {
                        isAndroidResult = null != tmp62;
                      }
                      if (isAndroidResult) {
                        isAndroidResult = null == tmp62.googleSkuIds;
                      }
                      if (isAndroidResult) {
                        let obj17 = wishlistId(context[47]);
                        country = undefined;
                        if (country != null) {
                          country = country.country;
                        }
                        const obj10 = { withGoogleSkuIds: true, countryCode: country };
                        const socialLayerStorefrontSkuForApplication = obj17.fetchSocialLayerStorefrontSkuForApplication(tmp62.applicationId, tmp161.skuId, obj10);
                      }
                      let obj19 = wishlistId(context[48]);
                      if (!closure_1_8) {
                        if (obj19.isSlayerSkuAvailableOnThisPlatform(tmp62)) {
                          if (null != lockedRecipientUser) {
                            c1(context[23]).hideAllActionSheets();
                            const obj54 = c1(context[23]);
                            let obj11 = { skuId: tmp161.skuId, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null, onGiftModalDismiss: null };
                            const items6 = [c1(context[25]).USER_PROFILE_WISHLIST];
                            obj11.analyticsLocations = items6;
                            obj11.lockedRecipientUser = lockedRecipientUser;
                            obj11.giftingOrigin = constants4.USER_PROFILE_WISHLIST;
                            obj11.onGiftModalDismiss = function onGiftModalDismiss() {
                              closure_1(8179)({ userId: user.id, initialSection: constants2.WISHLIST });
                            };
                            const result4 = wishlistId(context[49]).openSocialLayerStorefrontGiftModal(obj11);
                            const obj55 = wishlistId(context[49]);
                          }
                        }
                      }
                      let obj20 = c1(context[23]);
                      obj20.hideAllActionSheets();
                      let obj21 = wishlistId(context[49]);
                      const obj12 = { skuId: tmp161.skuId, analyticsLocations: null };
                      const items7 = [c1(context[25]).USER_PROFILE_WISHLIST];
                      obj12.analyticsLocations = items7;
                      const result5 = obj21.openSocialLayerStorefrontProductDetailsModal(obj12);
                    }
                  } else if (closure_1_8) {
                    let obj14 = c1(context[23]);
                    obj14.hideAllActionSheets();
                    let obj15 = wishlistId(context[41]);
                    const result6 = obj15.navigateToPremiumHomePage();
                  } else if (null != lockedRecipientUser) {
                    c1(context[23]).hideAllActionSheets();
                    closure_130_3 = tmp178;
                    const YEAR = constants5.YEAR;
                    closure_130_4 = YEAR;
                    const obj50 = c1(context[23]);
                    const planIdForPremiumType = wishlistId(context[42]).getPlanIdForPremiumType(tmp178, YEAR);
                    const obj51 = wishlistId(context[42]);
                    country = 2;
                    const obj13 = { planId: planIdForPremiumType, recipientUserId: lockedRecipientUser.id, productId: wishlistId(context[43]).getProductIdForGift(planIdForPremiumType) };
                    v5 = 5;
                    c7 = 1;
                    obj14 = { value: v5(obj13), done: false };
                    return obj14;
                  }
                }
              }
              obj11 = c1(context[40]);
              obj15 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
              const intl4 = wishlistId(context[27]).intl;
              obj15.content = intl4.string(wishlistId(context[27]).t["rTU7/z"]);
              obj11.open(obj15);
              const obj48 = wishlistId(context[39]);
            }
          } else if (1 === tmp10) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              obj16 = { value, done: true };
              return obj16;
            } else {
              product = createOrReuseGiftOrder.getProduct(closure_130_0.skuId);
            }
          } else if (2 === tmp10) {
            country = 0;
            closure_130_5 = closure_4;
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            logger.error("Error performing web handoff: " + JSON.stringify(closure_130_5));
            obj5 = wishlistId(context[54]);
            obj17 = { tags: null };
            const obj18 = { source: "UserProfileWishlistGrid", skuId: closure_130_0.skuId };
            obj17.tags = obj18;
            const result7 = obj5.captureBillingException(closure_130_5, obj17);
            obj8 = c1(context[40]);
            obj19 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
            const intl3 = wishlistId(context[27]).intl;
            obj19.content = intl3.string(wishlistId(context[27]).t["rTU7/z"]);
            obj8.open(obj19);
          } else {
            if (3 === tmp10) {
              if (arg0 === 1) {
                c7 = 3;
                throw value;
              } else if (arg0 === 2) {
                country = 0;
                c7 = 3;
                obj20 = { value, done: true };
                return obj20;
              } else {
                country = 0;
              }
            } else if (4 === tmp10) {
              country = 0;
              obj1 = c1(context[44]);
              obj21 = { title: null, body: null };
              const intl = wishlistId(context[27]).intl;
              obj21.title = intl.string(wishlistId(context[27]).t.R0RpRX);
              const intl2 = wishlistId(context[27]).intl;
              obj21.body = intl2.string(wishlistId(context[27]).t.CKsXk3);
              obj1.show(obj21);
              c7 = 3;
              const obj22 = { value: undefined, done: true };
              return obj22;
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_130_2 = value;
              country = 0;
              obj23 = { recipientUserId: lockedRecipientUser.id, premiumType: closure_130_3, planInterval: closure_130_4, order: closure_130_2, analyticsLocations: null };
              const items8 = [c1(context[25]).USER_PROFILE_WISHLIST];
              obj23.analyticsLocations = items8;
              wishlistId(context[45]).openGiftModal(obj23);
              const obj45 = wishlistId(context[45]);
            }
            country = 0;
            c7 = 3;
            obj = { value, done: true };
            return obj;
          }
          c7 = 3;
        } catch (tmp141) {
          closure_4 = tmp141;
          if (tmp5 === country) {
            c7 = tmp3;
            throw tmp141;
          } else if (tmp2 === tmp143) {
            v5 = tmp;
          } else {
            v5 = tmp6;
          }
        }
      }
    })();
  });
  const items13 = [wishlistId, trackUserProfileWishlistAction, tmp40Result, stateFromStores5, memo2, , , ];
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  items13[5] = country;
  items13[6] = isShopStandalonePdpMobileEnabled;
  items13[7] = createOrReuseGiftOrder;
  closure_14 = obj11.useCallback(function() {
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
  const callback = obj11.useCallback(() => {
    let obj = { action: constants.PRESS_EDIT_WISHLIST, wishlistId, productLines: null };
    let tmp4;
    if (null != stateFromStores) {
      tmp4 = getWishlistProductLines(tmp3);
    }
    obj.productLines = tmp4;
    trackUserProfileWishlistAction(obj);
    obj = { wishlistId, analyticsContext: context, analyticsLocations };
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(13089, dependencyMap.paths), "EditWishlistActionSheet", obj, "stack");
  }, items14);
  const callback1 = obj11.useCallback(() => {
    let obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, wishlistId, productLines: null };
    const items = [constants2.COLLECTIBLES];
    obj.productLines = new Set(items);
    trackUserProfileWishlistAction(obj);
    const set = new Set(items);
    ActionSheetActionCreatorsDefault.hideAllActionSheets();
    obj = { analyticsSource: AnalyticsLocationDefault.USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
    const items1 = [AnalyticsLocationDefault.USER_PROFILE_WISHLIST];
    obj.analyticsLocations = items1;
    obj.screen = constants3.FEATURED_PAGE;
    const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj);
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
    if (tmp40Result) {
      if (!tmp20) {
        tmp20 = false === nsfwAllowed;
      }
      tmp40Result = tmp20;
    }
    if (tmp40Result) {
      obj = { style: null, children: null };
      const items16 = [, ];
      ({ disclaimer: arr18[0], disclaimerTop: arr18[1] } = tmp);
      obj.style = items16;
      const items17 = [closure_22(tmp6(tmp3[58]).CircleInformationIcon, { size: "sm" }), ];
      obj1 = { variant: "text-xs/medium", color: "text-subtle", children: stringResult };
      items17[1] = closure_22(tmp6(tmp3[26]).Text, obj1);
      obj.children = items17;
      tmp40Result = tmp40(storeFront, obj);
    }
    const items18 = [tmp40Result, , ];
    let obj2 = { style: tmp.headerRow, children: null };
    obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    let intl2 = tmp6(tmp3[27]).intl;
    obj4 = { count: memo.length };
    obj3.children = intl2.formatToPlainString(tmp6(tmp3[27]).t.r6Y1Lg, obj4);
    const items19 = [closure_22(tmp6(tmp3[26]).Text, obj3), ];
    if (tmp40Result) {
      obj5 = { style: tmp.headerButtons, children: null };
      obj6 = { size: "sm", variant: "secondary", icon: tmp37(tmp6(tmp3[29]).PlusMediumIcon, { size: "xs" }), text: null, onPress: null };
      let intl3 = tmp6(tmp3[27]).intl;
      obj6.text = intl3.string(tmp6(tmp3[27]).t.SDUwM0);
      obj6.onPress = callback1;
      const items20 = [tmp37(tmp6(tmp3[28]).Button, obj6), ];
      obj7 = { size: "sm", variant: "secondary", icon: null, onPress: null, accessibilityLabel: null };
      let obj8 = { size: "sm", color: tmp2(tmp3[18]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      obj7.icon = tmp37(tmp6(tmp3[60]).PencilIcon, obj8);
      obj7.onPress = callback;
      let intl4 = tmp6(tmp3[27]).intl;
      obj7.accessibilityLabel = intl4.string(tmp6(tmp3[27]).t.bt75uw);
      items20[1] = tmp37(tmp6(tmp3[59]).IconButton, obj7);
      obj5.children = items20;
      tmp40Result = tmp40(tmp36, obj5);
    }
    let obj9 = { children: null };
    items19[1] = tmp40Result;
    obj2.children = items19;
    items18[1] = closure_23(storeFront, obj2);
    let obj10 = { style: tmp.gridWrapper, children: null };
    obj11 = { style: null, children: null };
    const items21 = [tmp.itemsContainer, tmp5];
    obj11.style = items21;
    obj11.children = memo.map((sku) => {
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
    obj10.children = closure_22(storeFront, obj11);
    items18[2] = closure_22(storeFront, obj10);
    obj9.children = items18;
    return closure_23(closure_24, obj9);
  }
  const tmp6Result2 = require("initialize");
};
export { WishlistEmptyState };