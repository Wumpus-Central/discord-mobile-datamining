// discord_app/modules/user_profile/native/UserProfileWishlistGrid.tsx
import get from "get";
import Themes from "Themes";
import { View } from "timestamp";
import updateCategoriesAndProducts from "updateCategoriesAndProducts";
import initialize from "initialize";
import closure_8 from "get";
import { isCollectiblesWishlistItemRecord as closure_9 } from "createCollectiblesItemFromServerResponse";
import { isSKUWishlistItemRecord } from "fromServer";
import { getWishlistProductLines } from "fromServer";
import mergeGuildAvatar from "mergeGuildAvatar";
import addSku from "addSku";
import createUserWidgetFromServer from "createUserWidgetFromServer";
import USER_PROFILE_TOOLTIP_DELAY from "USER_PROFILE_TOOLTIP_DELAY";
import ME from "ME";
import { CollectiblesMobileShopScreen as closure_19 } from "items";
import GuildFeatures from "GuildFeatures";
import jsxProd from "ManaContext";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";

let closure_15;
let closure_16;
let closure_17;
let closure_18;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
const require = arg1;
class WishlistEmptyState {
  constructor(arg0) {
    shouldShowMRNotice = global.shouldShowMRNotice;
    c0 = undefined;
    tmp = c0;
    tmp2 = closure_2;
    obj = require("useIsMobileWishlistSuggestionsEnabled");
    isMobileWishlistSuggestionsEnabled = obj.useIsMobileWishlistSuggestionsEnabled("WishlistEmptyState");
    tmp4 = f54897(isMobileWishlistSuggestionsEnabled);
    obj2 = require("ManaContext");
    obj3 = require("AccessibilityAnnouncer");
    str = "mobile-text-heading-primary";
    if (obj3.isThemeDark(obj2.useThemeContext().theme)) {
      str = "text-overlay-light";
    }
    tmpResult = require("UserProfileAnalyticsProvider");
    trackUserProfileWishlistAction = tmpResult.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
    c0 = trackUserProfileWishlistAction;
    items = [];
    items[0] = trackUserProfileWishlistAction;
    tmp6 = jsxs;
    tmp8 = View;
    obj = { style: tmp4.emptyState, children: null };
    tmp9 = jsx;
    callback = Themes.useCallback(() => {
      let obj = { action: outer1_15.PRESS_ADD_WISHLIST_ITEM, productLines: null };
      const items = [outer1_18.COLLECTIBLES];
      obj[1] = new Set(items);
      trackUserProfileWishlistAction(obj);
      const set = new Set(items);
      outer1_1(outer1_2[24]).hideAllActionSheets();
      const obj2 = outer1_1(outer1_2[24]);
      obj = { analyticsSource: outer1_1(outer1_2[26]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
      const items1 = [outer1_1(outer1_2[26]).USER_PROFILE_WISHLIST];
      obj[1] = items1;
      obj[2] = outer1_19.FEATURED_PAGE;
      const result = trackUserProfileWishlistAction(outer1_2[25]).openCollectiblesShopMobile(obj);
    }, items);
    tmp7 = Fragment;
    obj1 = { variant: "text-md/medium", color: str, accessibilityRole: "header", children: null };
    intl = require("getSystemLocale").intl;
    obj1[3] = intl.string(require("getSystemLocale").t.HGnLLT);
    items1 = [, , ];
    items1[0] = jsx(require("Text").Text, obj1);
    obj2 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", style: tmp4.emptyStateText, children: null };
    intl2 = require("getSystemLocale").intl;
    obj2[3] = intl2.string(require("getSystemLocale").t["/X1ny6"]);
    items1[1] = jsx(require("Text").Text, obj2);
    tmp9Result = !isMobileWishlistSuggestionsEnabled;
    if (!isMobileWishlistSuggestionsEnabled) {
      obj3 = { style: null, children: null };
      obj3[0] = tmp4.emptyStateCta;
      obj4 = { size: "md", variant: "secondary", icon: null, text: null, onPress: null };
      obj4[2] = tmp9(require("PlusMediumIcon").PlusMediumIcon, { size: "xs" });
      intl3 = require("getSystemLocale").intl;
      obj4[3] = intl3.string(require("getSystemLocale").t.SDUwM0);
      obj4[4] = callback;
      obj3[1] = tmp9(require("Button").Button, obj4);
      tmp9Result = tmp9(tmp8, obj3);
    }
    items1[2] = tmp9Result;
    obj[1] = items1;
    items2 = [, ];
    items2[0] = tmp6(tmp8, obj);
    if (shouldShowMRNotice) {
      obj5 = { style: null, children: null };
      items3 = [, ];
      ({ disclaimer: arr4[0], disclaimerBottom: arr4[1] } = tmp4);
      obj5[0] = items3;
      items4 = [, ];
      items4[0] = tmp9(require("CircleInformationIcon").CircleInformationIcon, { size: "sm" });
      obj6 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      intl4 = require("getSystemLocale").intl;
      obj6[2] = intl4.string(require("getSystemLocale").t.Wp9bEl);
      items4[1] = tmp9(require("Text").Text, obj6);
      obj5[1] = items4;
      shouldShowMRNotice = tmp6(tmp8, obj5);
    }
    items2[1] = shouldShowMRNotice;
    return tmp6(tmp7, { children: items2 });
  }
}
({ TrackUserProfileWishlistActions: closure_15, UserProfileSections: closure_16 } = USER_PROFILE_TOOLTIP_DELAY);
({ Routes: closure_17, SKUProductLines: closure_18 } = ME);
({ GiftingOrigin: closure_20, PremiumSubscriptionSKUToPremiumType: closure_21 } = GuildFeatures);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
let closure_25 = new require("updateCategoriesAndProducts")("UserProfileWishlistGrid");
let closure_26 = createCacheKey.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = { headerRow: null, headerButtons: null, gridWrapper: null, itemsContainer: null, emptyState: null, emptyStateText: null, emptyStateCta: null, disclaimer: null, disclaimerTop: null, disclaimerBottom: null };
  obj = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: Themes.space.PX_12 };
  obj[0] = obj;
  obj = { flexDirection: "row", alignItems: "center", gap: Themes.space.PX_8 };
  obj[1] = obj;
  obj[2] = { width: "100%", alignItems: "center" };
  obj[3] = { flexDirection: "row", flexWrap: "wrap", gap: Themes.space.PX_16, justifyContent: "flex-start" };
  const space = Themes.space;
  const obj2 = { alignItems: "center", paddingTop: flag ? space.PX_24 : space.PX_48, paddingBottom: null, paddingHorizontal: null, gap: null };
  const space2 = tmp(712).space;
  obj2[2] = flag ? space2.PX_12 : space2.PX_48;
  obj2[3] = Themes.space.PX_32;
  obj2[4] = Themes.space.PX_8;
  obj[4] = obj2;
  obj[5] = { textAlign: "center" };
  const obj1 = { flexDirection: "row", flexWrap: "wrap", gap: Themes.space.PX_16, justifyContent: "flex-start" };
  obj[6] = { marginTop: Themes.space.PX_24 };
  const obj3 = { marginTop: Themes.space.PX_24 };
  obj[7] = { padding: Themes.space.PX_8, gap: Themes.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: Themes.radii.sm, borderWidth: 1, borderColor: Themes.colors.BORDER_SUBTLE };
  const obj4 = { padding: Themes.space.PX_8, gap: Themes.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: Themes.radii.sm, borderWidth: 1, borderColor: Themes.colors.BORDER_SUBTLE };
  obj[8] = { marginBottom: Themes.space.PX_16 };
  const obj5 = { marginBottom: Themes.space.PX_16 };
  obj[9] = { marginTop: Themes.space.PX_16 };
  return obj;
});
const tmp6 = new require("updateCategoriesAndProducts")("UserProfileWishlistGrid");
let result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileWishlistGrid.tsx");

export default function UserProfileWishlistGrid(wishlistId) {
  let c1;
  let containerWidth;
  let isVisible;
  let maxWidth;
  let rowWidth;
  wishlistId = wishlistId.wishlistId;
  let _require = wishlistId;
  let importDefault;
  let context;
  let trackUserProfileWishlistAction;
  let analyticsLocations;
  let storeFront;
  let stateFromStores;
  let c7;
  let stateFromStores5;
  let isShopStandalonePdpMobileEnabled;
  let isEligibleForSocialLayerStorefrontMobilePurchasing;
  let memo1;
  let stateFromStoresArray;
  let memo2;
  let createUserWidgetFromServer;
  ({ containerWidth, maxWidth, isVisible } = wishlistId);
  let tmp = callback2();
  ({ cardWidth: c1, rowWidth } = importDefault(context[32])({ containerWidth, maxWidth }));
  if (null != rowWidth) {
    let obj = { width: null };
    obj[0] = rowWidth;
    let tmp5 = obj;
  }
  let obj1 = _require(tmp3[23]);
  const userProfileAnalyticsContext = obj1.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileWishlistAction = userProfileAnalyticsContext.trackUserProfileWishlistAction;
  analyticsLocations = tmp2(tmp3[33])().analyticsLocations;
  let tmp2Result = tmp2(tmp3[34]);
  storeFront = tmp2Result.useNativeIAPPayments().storeFront;
  let obj3 = _require(tmp3[35]);
  let items = [stateFromStores5];
  stateFromStores = obj3.useStateFromStores(items, () => stateFromStores5.getWishlist(closure_0));
  let obj4 = _require(tmp3[35]);
  let items1 = [stateFromStores5];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => stateFromStores5.isFetching(closure_0));
  let obj5 = _require(tmp3[35]);
  let items2 = [stateFromStores5];
  const stateFromStores2 = obj5.useStateFromStores(items2, () => stateFromStores5.getError(closure_0));
  let obj6 = _require(tmp3[35]);
  let items3 = [createUserWidgetFromServer];
  let items4 = [stateFromStores, wishlistId];
  const stateFromStores3 = obj6.useStateFromStores(items3, () => {
    let wishlistSettings = null;
    if (null != stateFromStores) {
      wishlistSettings = wishlistSettings.getWishlistSettings(tmp.userId, closure_0);
    }
    return wishlistSettings;
  }, items4);
  let visibility;
  if (stateFromStores3 != null) {
    visibility = stateFromStores3.visibility;
  }
  let tmp6Result = tmp6(tmp3[35]);
  let items5 = [stateFromStoresArray];
  const stateFromStores4 = tmp6Result.useStateFromStores(items5, () => stateFromStoresArray.getCurrentUser());
  let id;
  if (stateFromStores4 != null) {
    id = stateFromStores4.id;
  }
  let userId;
  if (stateFromStores != null) {
    userId = stateFromStores.userId;
  }
  let tmp42Result = id === userId;
  c7 = tmp42Result;
  tmp6Result = tmp6(tmp3[35]);
  let items6 = [stateFromStoresArray];
  let items7 = [stateFromStores];
  stateFromStores5 = tmp6Result.useStateFromStores(items6, () => {
    let user = null;
    if (null != stateFromStores) {
      user = stateFromStoresArray.getUser(tmp.userId);
    }
    return user;
  }, items7);
  if (stateFromStores5 != null) {
    const nsfwAllowed = stateFromStores5.nsfwAllowed;
  }
  let tmp19 = visibility === tmp6(tmp3[36]).WishlistVisibility.PRIVATE;
  const tmp13 = stateFromStoresArray;
  let tmp4 = importDefault(context[32])({ containerWidth, maxWidth });
  isShopStandalonePdpMobileEnabled = _require(context[37]).useIsShopStandalonePdpMobileEnabled("product_details_action_sheet");
  let intl = tmp6(tmp3[28]).intl;
  const string = intl.string;
  const t = tmp6(tmp3[28]).t;
  if (tmp19) {
    let stringResult = string(t.RX7D9h);
  } else {
    stringResult = string(t.d78ChW);
  }
  const tmp6Result1 = _require(context[37]);
  isEligibleForSocialLayerStorefrontMobilePurchasing = _require(context[38]).useIsEligibleForSocialLayerStorefrontMobilePurchasing({ location: "user_profile_wishlist_grid" });
  let obj11 = analyticsLocations;
  let items8 = [stateFromStores, tmp42Result, isEligibleForSocialLayerStorefrontMobilePurchasing];
  const memo = analyticsLocations.useMemo(() => {
    let found;
    if (stateFromStores != null) {
      const items = stateFromStores.items;
      found = items.filter((sku) => {
        let obj = outer1_0(outer1_2[39]);
        obj = { isWishlistOwner: initialize, isSocialLayerStorefrontMobilePurchasingEnabled: closure_10 };
        return obj.isEligibleWishlistItemOnMobile(sku, obj);
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
      found = items.filter(isShopStandalonePdpMobileEnabled);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items9);
  const tmp6Result2 = _require(context[38]);
  const items10 = [c7];
  const items11 = [memo1, stateFromStores5];
  stateFromStoresArray = _require(context[35]).useStateFromStoresArray(items10, () => {
    if (null == stateFromStores5) {
      let items = [];
    } else {
      const found = memo1.filter((skuId) => outer1_7.hasSentGift(skuId.skuId, id.id));
      items = found.map((skuId) => skuId.skuId);
    }
    return items;
  }, items11);
  const items12 = [stateFromStoresArray];
  memo2 = analyticsLocations.useMemo(() => new Set(stateFromStoresArray), items12);
  const items13 = [isEligibleForSocialLayerStorefrontMobilePurchasing, stateFromStores, tmp42Result];
  const memo3 = analyticsLocations.useMemo(() => {
    let tmp = !isEligibleForSocialLayerStorefrontMobilePurchasing;
    if (!isEligibleForSocialLayerStorefrontMobilePurchasing) {
      let flag;
      if (stateFromStores != null) {
        const items = stateFromStores.items;
        flag = items.some(isEligibleForSocialLayerStorefrontMobilePurchasing);
      }
      if (flag) {
        flag = c7;
      }
      if (flag == null) {
        flag = false;
      }
      tmp = flag;
    }
    return tmp;
  }, items13);
  obj = { wishlistId, onAction: trackUserProfileWishlistAction, productLines: null, isVisible: null };
  let tmp28 = null;
  tmp2Result = tmp2(tmp3[40]);
  if (null != stateFromStores) {
    tmp28 = memo1(stateFromStores);
  }
  obj[2] = tmp28;
  obj[3] = isVisible;
  tmp2Result(obj);
  _require = undefined;
  _require = trackUserProfileWishlistAction((arg0) => {
    let closure_0 = arg0;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0) {
      if (c7 === 2) {
        c7 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp6;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp7 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: null };
          }
        } else {
          try {
            c7 = 2;
            if (0 === c6) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let get = tmp3;
                let closure_2 = tmp5;
                throwTypeErrorResult = lib;
                let product;
                throwTypeErrorResult = outer1_3;
                let obj1 = { action: null, wishlistId: null, skuId: null, productLines: null };
                throwTypeErrorResult = outer2_15;
                obj1[0] = outer2_15.WISHLIST_ITEM_CLICKED;
                throwTypeErrorResult = lib;
                obj1[1] = lib;
                obj1[2] = lib.skuId;
                const _Set = Set;
                const items = [lib.skuProductLine];
                throwTypeErrorResult = new.target;
                throwTypeErrorResult = new.target;
                throwTypeErrorResult = items;
                throwTypeErrorResult = new Set(items);
                obj1[3] = throwTypeErrorResult;
                throwTypeErrorResult = outer1_3(obj1);
                throwTypeErrorResult = lib;
                throwTypeErrorResult = context;
                const rootNavigationRef = lib(context[41]).getRootNavigationRef();
                if (null != rootNavigationRef) {
                  if (rootNavigationRef.isReady()) {
                    if (throwTypeErrorResult.skuProductLine !== outer2_18.PREMIUM) {
                      if (throwTypeErrorResult.skuProductLine !== tmp39.SOCIAL_LAYER_GAME_ITEM) {
                        if (!c7) {
                          if (null != outer1_8) {
                            if (!throwTypeErrorResult.isOwned) {
                              if (!outer1_13.has(throwTypeErrorResult.skuId)) {
                                let obj18 = callback(context[24]);
                                obj18.hideAllActionSheets();
                                if (obj20.isCollectibleGiftingSupported()) {
                                  const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null, onNavigateAway: null };
                                  const items1 = [callback(context[26]).USER_PROFILE_WISHLIST];
                                  obj2[0] = items1;
                                  obj2[1] = callback(context[26]).USER_PROFILE_WISHLIST;
                                  obj2[2] = outer2_19.FEATURED_PAGE;
                                  obj2[3] = function onNavigateAway(arg0) {
                                    callback(8846)({ userId: user.id, initialSection: outer1_16.WISHLIST });
                                  };
                                  const result = lib(context[25]).openCollectiblesShopMobile(obj2);
                                  const obj23 = lib(context[25]);
                                  const obj3 = { skuId: null, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null };
                                  obj3[0] = throwTypeErrorResult.skuId;
                                  const items2 = [callback(context[26]).USER_PROFILE_WISHLIST];
                                  obj3[1] = items2;
                                  obj3[2] = tmp69;
                                  obj3[3] = outer2_20.USER_PROFILE_WISHLIST;
                                  lib(context[51]).openShopGiftModal(obj3);
                                  c7 = 3;
                                  let obj4 = { value: null, done: true };
                                  obj4[0] = undefined;
                                  return obj4;
                                } else {
                                  const _HermesInternal2 = HermesInternal;
                                  let country = 1;
                                  const combined = "" + outer2_17.COLLECTIBLES_SHOP + "#itemSkuId=" + throwTypeErrorResult.skuId;
                                  c6 = 3;
                                  c7 = 1;
                                  const obj5 = { value: null, done: false };
                                  obj5[0] = callback(context[52]).redirectWithHandoffToken(combined, { forceExternalBrowser: true });
                                  return obj5;
                                }
                                obj20 = lib(context[50]);
                              }
                            }
                          }
                        }
                        if (outer1_9) {
                          let tmp95Result = tmp95(tmp96[54]);
                          const obj6 = { skuId: null, analyticsLocations: null };
                          obj6[0] = throwTypeErrorResult.skuId;
                          throwTypeErrorResult = callback;
                          throwTypeErrorResult = context;
                          const items3 = [callback(context[26]).USER_PROFILE_WISHLIST];
                          obj6[1] = items3;
                          throwTypeErrorResult = tmp95Result.openProductDetailsActionSheetForSku(obj6, "stack");
                        } else {
                          tmp95Result = tmp95(tmp96[25]);
                          if (tmp95Result.isCollectiblesShopOpen()) {
                            throwTypeErrorResult = stateFromStores;
                            product = stateFromStores.getProduct(throwTypeErrorResult.skuId);
                            throwTypeErrorResult = product;
                            if (null == product) {
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = context;
                              c6 = 1;
                              c7 = 1;
                              let obj7 = { value: null, done: false };
                              obj7[0] = lib(context[25]).maybeFetchCollectiblesProduct(throwTypeErrorResult.skuId);
                              return obj7;
                            } else {
                              throwTypeErrorResult = closure_2;
                              throwTypeErrorResult = product;
                              if (null != product) {
                                throwTypeErrorResult = closure_2;
                                throwTypeErrorResult = get;
                                throwTypeErrorResult = lib;
                                throwTypeErrorResult = context;
                                const obj8 = { product: null, analyticsLocations: null };
                                throwTypeErrorResult = product;
                                obj8[0] = product;
                                throwTypeErrorResult = callback;
                                throwTypeErrorResult = context;
                                const items4 = [callback(context[26]).USER_PROFILE_WISHLIST];
                                obj8[1] = items4;
                                throwTypeErrorResult = lib(context[54]).openProductDetailsActionSheet(obj8, "stack");
                                const obj32 = lib(context[54]);
                              } else {
                                throwTypeErrorResult = get;
                                throwTypeErrorResult = callback;
                                throwTypeErrorResult = context;
                                throwTypeErrorResult = callback(context[24]).hideAllActionSheets();
                                const obj31 = callback(context[24]);
                              }
                              c7 = 3;
                            }
                          } else {
                            let obj9 = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null, screen: null };
                            throwTypeErrorResult = context;
                            const items5 = [callback(context[26]).USER_PROFILE_WISHLIST];
                            obj9[0] = items5;
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = context;
                            obj9[1] = callback(context[26]).USER_PROFILE_WISHLIST;
                            obj9[2] = throwTypeErrorResult.skuId;
                            throwTypeErrorResult = outer2_19;
                            obj9[3] = outer2_19.SHOP_ALL;
                            throwTypeErrorResult = lib(context[25]).openCollectiblesShopMobile(obj9);
                            const obj29 = lib(context[25]);
                          }
                        }
                      } else {
                        const sku = throwTypeErrorResult.sku;
                        product = sku;
                        if (sku == null) {
                          product = memo2.get(throwTypeErrorResult.skuId);
                        }
                        let obj11 = lib(context[45]);
                        let isAndroidResult = obj11.isAndroid();
                        if (isAndroidResult) {
                          isAndroidResult = null != tmp48;
                        }
                        if (isAndroidResult) {
                          isAndroidResult = null == tmp48.googleSkuIds;
                        }
                        if (isAndroidResult) {
                          let obj12 = lib(context[46]);
                          country = undefined;
                          if (country != null) {
                            country = country.country;
                          }
                          let obj10 = { withGoogleSkuIds: true, countryCode: null };
                          obj10[1] = country;
                          const socialLayerStorefrontSkuForApplication = obj12.fetchSocialLayerStorefrontSkuForApplication(tmp48.applicationId, throwTypeErrorResult.skuId, obj10);
                        }
                        let obj14 = lib(context[47]);
                        if (!c7) {
                          if (obj14.isSlayerSkuAvailableOnThisPlatform(tmp48)) {
                            if (null != outer1_8) {
                              throwTypeErrorResult = callback;
                              throwTypeErrorResult = context;
                              throwTypeErrorResult = callback(context[24]).hideAllActionSheets();
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = context;
                              const obj46 = callback(context[24]);
                              obj11 = { skuId: null, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null, onGiftModalDismiss: null };
                              obj11[0] = throwTypeErrorResult.skuId;
                              throwTypeErrorResult = callback;
                              throwTypeErrorResult = context;
                              const items6 = [callback(context[26]).USER_PROFILE_WISHLIST];
                              obj11[1] = items6;
                              obj11[2] = tmp59;
                              throwTypeErrorResult = outer2_20;
                              obj11[3] = outer2_20.USER_PROFILE_WISHLIST;
                              obj11[4] = function onGiftModalDismiss(validateRecipient, arg1) {
                                callback(8846)({ userId: user.id, initialSection: outer1_16.WISHLIST });
                              };
                              throwTypeErrorResult = lib(context[48]).openSocialLayerStorefrontGiftModal(obj11);
                              const obj47 = lib(context[48]);
                            }
                          }
                        }
                        let obj15 = callback(context[24]);
                        obj15.hideAllActionSheets();
                        let obj16 = lib(context[48]);
                        obj12 = { skuId: null, analyticsLocations: null };
                        obj12[0] = throwTypeErrorResult.skuId;
                        const items7 = [callback(context[26]).USER_PROFILE_WISHLIST];
                        obj12[1] = items7;
                        const result1 = obj16.openSocialLayerStorefrontProductDetailsModal(obj12);
                      }
                    } else {
                      throwTypeErrorResult = c7;
                      if (c7) {
                        obj9 = callback(context[24]);
                        obj9.hideAllActionSheets();
                        obj10 = lib(context[43]);
                        const result2 = obj10.navigateToPremiumHomePage();
                      } else if (null != outer1_8) {
                        throwTypeErrorResult = callback;
                        throwTypeErrorResult = context;
                        throwTypeErrorResult = callback(context[24]).hideAllActionSheets();
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = context;
                        const obj43 = callback(context[24]);
                        const obj13 = { recipientUserId: null, premiumType: null, analyticsLocations: null };
                        obj13[0] = tmp40.id;
                        throwTypeErrorResult = outer2_21;
                        obj13[1] = outer2_21[throwTypeErrorResult.skuId];
                        throwTypeErrorResult = callback;
                        throwTypeErrorResult = context;
                        const items8 = [callback(context[26]).USER_PROFILE_WISHLIST];
                        obj13[2] = items8;
                        throwTypeErrorResult = lib(context[44]).openGiftModal(obj13);
                        const obj44 = lib(context[44]);
                      }
                    }
                  }
                }
                obj7 = callback(context[42]);
                obj14 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
                const intl2 = lib(context[28]).intl;
                obj14[1] = intl2.string(lib(context[28]).t["rTU7/z"]);
                obj7.open(obj14);
                const obj41 = lib(context[41]);
              }
            } else if (1 === tmp8) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj15 = { value: null, done: true };
                obj15[0] = arg1;
                return obj15;
              } else {
                product = stateFromStores.getProduct(lib.skuId);
              }
            } else {
              if (2 === tmp8) {
                country = 0;
                closure_2 = Themes;
                const _JSON = JSON;
                const _HermesInternal = HermesInternal;
                outer2_25.error("Error performing web handoff: " + JSON.stringify(closure_2));
                obj1 = lib(context[53]);
                obj16 = { tags: null };
                const obj17 = { source: "UserProfileWishlistGrid", skuId: null };
                obj17[1] = lib.skuId;
                obj16[0] = obj17;
                const result3 = obj1.captureBillingException(closure_2, obj16);
                obj4 = callback(context[42]);
                obj18 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
                const intl = lib(context[28]).intl;
                obj18[1] = intl.string(lib(context[28]).t["rTU7/z"]);
                obj4.open(obj18);
              } else if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                country = 0;
              }
              country = 0;
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c7 = 3;
          } catch (throwTypeErrorResult) {
            Themes = throwTypeErrorResult;
            throwTypeErrorResult = country;
            if (tmp4 === country) {
              throwTypeErrorResult = tmp2;
              c7 = tmp2;
              throw throwTypeErrorResult;
            } else {
              c6 = throwTypeErrorResult;
            }
          }
        }
      }
    })();
  });
  const items14 = [wishlistId, trackUserProfileWishlistAction, tmp42Result, stateFromStores5, memo2, , ];
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  items14[5] = country;
  items14[6] = isShopStandalonePdpMobileEnabled;
  createUserWidgetFromServer = obj11.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items14);
  const items15 = [wishlistId, context, analyticsLocations, trackUserProfileWishlistAction, stateFromStores];
  const items16 = [trackUserProfileWishlistAction, wishlistId];
  const callback = obj11.useCallback(() => {
    let obj = { action: outer1_15.PRESS_EDIT_WISHLIST, wishlistId: callback, productLines: null };
    let tmp4;
    if (null != stateFromStores) {
      tmp4 = memo1(tmp3);
    }
    obj[2] = tmp4;
    trackUserProfileWishlistAction(obj);
    obj = { wishlistId: callback, analyticsContext: context, analyticsLocations };
    _undefined(context[24]).openLazy(callback(context[56])(context[55], context.paths), "EditWishlistActionSheet", obj, "stack");
  }, items15);
  const callback1 = obj11.useCallback(() => {
    let obj = { action: outer1_15.PRESS_ADD_WISHLIST_ITEM, wishlistId: callback, productLines: null };
    const items = [outer1_18.COLLECTIBLES];
    obj[2] = new Set(items);
    trackUserProfileWishlistAction(obj);
    const set = new Set(items);
    _undefined(context[24]).hideAllActionSheets();
    const obj2 = _undefined(context[24]);
    obj = { analyticsSource: _undefined(context[26]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
    const items1 = [_undefined(context[26]).USER_PROFILE_WISHLIST];
    obj[1] = items1;
    obj[2] = outer1_19.FEATURED_PAGE;
    const result = callback(context[25]).openCollectiblesShopMobile(obj);
  }, items16);
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
    obj = { shouldShowMRNotice: null };
    obj[0] = memo3;
    return callback(WishlistEmptyState, obj);
  } else {
    if (tmp42Result) {
      if (!tmp19) {
        tmp19 = false === nsfwAllowed;
      }
      tmp42Result = tmp19;
    }
    if (tmp42Result) {
      obj1 = { style: null, children: null };
      const items17 = [, ];
      ({ disclaimer: arr19[0], disclaimerTop: arr19[1] } = tmp);
      obj1[0] = items17;
      const items18 = [callback(tmp6(tmp3[31]).CircleInformationIcon, { size: "sm" }), ];
      let obj2 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      obj2[2] = stringResult;
      items18[1] = callback(tmp6(tmp3[27]).Text, obj2);
      obj1[1] = items18;
      tmp42Result = tmp42(storeFront, obj1);
    }
    const items19 = [tmp42Result, , , ];
    obj3 = { style: null, children: null };
    obj3[0] = tmp.headerRow;
    obj4 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    let intl2 = tmp6(tmp3[28]).intl;
    obj5 = { count: null };
    obj5[0] = memo.length;
    obj4[2] = intl2.formatToPlainString(tmp6(tmp3[28]).t.r6Y1Lg, obj5);
    const items20 = [callback(tmp6(tmp3[27]).Text, obj4), ];
    if (tmp42Result) {
      obj6 = { style: null, children: null };
      obj6[0] = tmp.headerButtons;
      let obj7 = { size: "sm", variant: "secondary", icon: null, text: null, onPress: null };
      obj7[2] = tmp38(tmp6(tmp3[30]).PlusMediumIcon, { size: "xs" });
      const intl3 = tmp6(tmp3[28]).intl;
      obj7[3] = intl3.string(tmp6(tmp3[28]).t.SDUwM0);
      obj7[4] = callback1;
      const items21 = [tmp38(tmp6(tmp3[29]).Button, obj7), ];
      let obj8 = { size: "sm", variant: "secondary", icon: null, onPress: null, accessibilityLabel: null };
      let obj9 = { size: "sm", color: null };
      obj9[1] = tmp2(tmp3[19]).colors.CONTROL_SECONDARY_TEXT_DEFAULT;
      obj8[2] = tmp38(tmp6(tmp3[58]).PencilIcon, obj9);
      obj8[3] = callback;
      const intl4 = tmp6(tmp3[28]).intl;
      obj8[4] = intl4.string(tmp6(tmp3[28]).t.bt75uw);
      items21[1] = tmp38(tmp6(tmp3[57]).IconButton, obj8);
      obj6[1] = items21;
      tmp42Result = tmp42(tmp37, obj6);
    }
    items20[1] = tmp42Result;
    obj3[1] = items20;
    items19[1] = closure_23(storeFront, obj3);
    let obj10 = { style: null, children: null };
    obj10[0] = tmp.gridWrapper;
    obj11 = { style: null, children: null };
    const items22 = [tmp.itemsContainer, tmp5];
    obj11[0] = items22;
    obj11[1] = memo.map((sku) => {
      let closure_0 = sku;
      let tmp = null;
      if (null != sku.sku) {
        const obj = { sku: null, isOwned: null, onPress: null, size: null, wishlistOwnerId: null };
        ({ sku: obj[0], isOwned: obj[1] } = sku);
        obj[2] = function onPress() {
          return outer1_14(closure_0);
        };
        obj[3] = _undefined;
        let id;
        if (stateFromStores5 != null) {
          id = stateFromStores5.id;
        }
        obj[4] = id;
        tmp = outer1_22(_undefined(context[59]), obj, sku.skuId);
        const tmp2 = outer1_22;
        const tmp5 = _undefined(context[59]);
      }
      return tmp;
    });
    obj10[1] = callback(storeFront, obj11);
    items19[2] = callback(storeFront, obj10);
    let tmp42Result1 = memo3;
    if (memo3) {
      let obj12 = { style: null, children: null };
      const items23 = [, ];
      ({ disclaimer: arr25[0], disclaimerBottom: arr25[1] } = tmp);
      obj12[0] = items23;
      const items24 = [tmp38(tmp6(tmp3[31]).CircleInformationIcon, { size: "sm" }), ];
      let obj13 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      const intl5 = tmp6(tmp3[28]).intl;
      obj13[2] = intl5.string(tmp6(tmp3[28]).t.Wp9bEl);
      items24[1] = tmp38(tmp6(tmp3[27]).Text, obj13);
      obj12[1] = items24;
      tmp42Result1 = tmp42(tmp37, obj12);
    }
    let obj14 = { children: null };
    items19[3] = tmp42Result1;
    obj14[0] = items19;
    return closure_23(closure_24, obj14);
  }
  const tmp6Result3 = _require(context[35]);
};
export { WishlistEmptyState };