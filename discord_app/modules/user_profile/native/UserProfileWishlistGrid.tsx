// discord_app/modules/user_profile/native/UserProfileWishlistGrid.tsx
import timestampDefault from "../../debug/Logger.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../collectibles/CollectiblesCategoryStore.tsx";
import closure_7 from "../../wishlists/SentGiftsStore.tsx";
import closure_8 from "../../wishlists/WishlistStore.tsx";
import { isCollectiblesWishlistItemRecord as closure_9 } from "../../wishlists/records/CollectiblesWishlistItemRecord.tsx";
import { getWishlistProductLines } from "../../wishlists/records/WishlistRecord.tsx";
import closure_11 from "../../../stores/UserStore.tsx";
import closure_12 from "../../../stores/game_store/SKUStore.tsx";
import closure_13 from "../UserProfileStore.tsx";
import USER_PROFILE_TOOLTIP_DELAY from "../Constants.tsx";
import ME from "../../../Constants.tsx";
import { CollectiblesMobileShopScreen as closure_18 } from "../../collectibles/CollectiblesShopConstants.tsx";
import GuildFeatures from "../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
class WishlistEmptyState {
  constructor() {
    tmp = closure_0;
    tmp2 = closure_2;
    obj = require("useIsMobileWishlistSuggestionsEnabled");
    isMobileWishlistSuggestionsEnabled = obj.useIsMobileWishlistSuggestionsEnabled("WishlistEmptyState");
    tmp4 = closure_25(isMobileWishlistSuggestionsEnabled);
    obj2 = require("ManaContext");
    obj3 = require("AccessibilityAnnouncer");
    str = "mobile-text-heading-primary";
    if (obj3.isThemeDark(obj2.useThemeContext().theme)) {
      str = "text-overlay-light";
    }
    tmpResult = require("UserProfileAnalyticsProvider");
    trackUserProfileWishlistAction = tmpResult.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
    closure_0 = trackUserProfileWishlistAction;
    items = [];
    items[0] = trackUserProfileWishlistAction;
    tmp7 = View;
    obj = { style: tmp4.emptyState, children: null };
    tmp8 = jsx;
    callback = closure_4.useCallback(() => {
      let obj = { action: closure_1_14.PRESS_ADD_WISHLIST_ITEM, productLines: new Set(items) };
      items = [closure_1_17.COLLECTIBLES];
      trackUserProfileWishlistAction(obj);
      const set = new Set(items);
      closure_1_1(closure_1_2[23]).hideAllActionSheets();
      const obj2 = closure_1_1(closure_1_2[23]);
      obj = { analyticsSource: closure_1_1(closure_1_2[25]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
      const items1 = [closure_1_1(closure_1_2[25]).USER_PROFILE_WISHLIST];
      obj[1] = items1;
      obj[2] = closure_1_18.FEATURED_PAGE;
      const result = trackUserProfileWishlistAction(closure_1_2[24]).openCollectiblesShopMobile(obj);
    }, items);
    tmp6 = jsxs;
    obj1 = { variant: "text-md/medium", color: str, accessibilityRole: "header", children: null };
    intl = require("getSystemLocale").intl;
    obj1[3] = intl.string(require("getSystemLocale").t.HGnLLT);
    items1 = [, , ];
    items1[0] = jsx(require("Text").Text, obj1);
    obj2 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", style: tmp4.emptyStateText, children: null };
    intl2 = require("getSystemLocale").intl;
    obj2[3] = intl2.string(require("getSystemLocale").t["/X1ny6"]);
    items1[1] = jsx(require("Text").Text, obj2);
    tmp8Result = !isMobileWishlistSuggestionsEnabled;
    if (!isMobileWishlistSuggestionsEnabled) {
      obj3 = { style: null, children: null };
      obj3[0] = tmp4.emptyStateCta;
      obj4 = { size: "md", variant: "secondary", icon: null, text: null, onPress: null };
      obj4[2] = tmp8(require("PlusMediumIcon").PlusMediumIcon, { size: "xs" });
      intl3 = require("getSystemLocale").intl;
      obj4[3] = intl3.string(require("getSystemLocale").t.SDUwM0);
      obj4[4] = callback;
      obj3[1] = tmp8(require("Button").Button, obj4);
      tmp8Result = tmp8(tmp7, obj3);
    }
    items1[2] = tmp8Result;
    obj[1] = items1;
    return tmp6(tmp7, obj);
  }
}
({ TrackUserProfileWishlistActions: closure_14, UserProfileSections: closure_15 } = USER_PROFILE_TOOLTIP_DELAY);
({ Routes: closure_16, SKUProductLines: closure_17 } = ME);
({ GiftingOrigin: closure_19, PremiumSubscriptionSKUToPremiumType: closure_20 } = GuildFeatures);
({ jsx: closure_21, jsxs: closure_22, Fragment: closure_23 } = jsxProd);
let closure_24 = new timestampDefault("UserProfileWishlistGrid");
let closure_25 = createCacheKey.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = { headerRow: null, headerButtons: null, gridWrapper: null, itemsContainer: null, emptyState: null, emptyStateText: null, emptyStateCta: null, disclaimer: null, disclaimerTop: null };
  obj = { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: ThemesDefault.space.PX_12 };
  obj[0] = obj;
  obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
  obj[1] = obj;
  obj[2] = { width: "100%", alignItems: "center" };
  obj[3] = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_16, justifyContent: "flex-start" };
  const space = ThemesDefault.space;
  const obj2 = { alignItems: "center", paddingTop: flag ? space.PX_24 : space.PX_48, paddingBottom: null, paddingHorizontal: null, gap: null };
  const space2 = tmp(712).space;
  obj2[2] = flag ? space2.PX_12 : space2.PX_48;
  obj2[3] = ThemesDefault.space.PX_32;
  obj2[4] = ThemesDefault.space.PX_8;
  obj[4] = obj2;
  obj[5] = { textAlign: "center" };
  obj1 = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_16, justifyContent: "flex-start" };
  obj[6] = { marginTop: ThemesDefault.space.PX_24 };
  const obj3 = { marginTop: ThemesDefault.space.PX_24 };
  obj[7] = { padding: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
  const obj4 = { padding: ThemesDefault.space.PX_8, gap: ThemesDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.sm, borderWidth: 1, borderColor: ThemesDefault.colors.BORDER_SUBTLE };
  obj[8] = { marginBottom: ThemesDefault.space.PX_16 };
  return obj;
});
const tmp6 = new timestampDefault("UserProfileWishlistGrid");
let result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileWishlistGrid.tsx");

export default function UserProfileWishlistGrid(wishlistId) {
  wishlistId = wishlistId.wishlistId;
  let _require = wishlistId;
  importDefault = undefined;
  let context;
  let trackUserProfileWishlistAction;
  let analyticsLocations;
  let storeFront;
  let stateFromStores;
  closure_7 = undefined;
  let stateFromStores5;
  let isShopStandalonePdpMobileEnabled;
  let memo1;
  let stateFromStoresArray;
  let memo2;
  closure_13 = undefined;
  ({ containerWidth, maxWidth, isVisible } = wishlistId);
  let tmp = callback2();
  ({ cardWidth: c1, rowWidth } = importDefault(context[30])({ containerWidth, maxWidth }));
  if (null != rowWidth) {
    let obj = { width: null };
    obj[0] = rowWidth;
    let tmp5 = obj;
  }
  obj1 = _require(tmp3[22]);
  const userProfileAnalyticsContext = obj1.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileWishlistAction = userProfileAnalyticsContext.trackUserProfileWishlistAction;
  analyticsLocations = tmp2(tmp3[31])().analyticsLocations;
  let tmp2Result = tmp2(tmp3[32]);
  storeFront = tmp2Result.useNativeIAPPayments().storeFront;
  let obj3 = _require(tmp3[33]);
  let items = [stateFromStores5];
  stateFromStores = obj3.useStateFromStores(items, () => stateFromStores5.getWishlist(closure_0));
  let obj4 = _require(tmp3[33]);
  let items1 = [stateFromStores5];
  const stateFromStores1 = obj4.useStateFromStores(items1, () => stateFromStores5.isFetching(closure_0));
  let obj5 = _require(tmp3[33]);
  let items2 = [stateFromStores5];
  const stateFromStores2 = obj5.useStateFromStores(items2, () => stateFromStores5.getError(closure_0));
  let obj6 = _require(tmp3[33]);
  let items3 = [closure_13];
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
  let tmp6Result = tmp6(tmp3[33]);
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
  let tmp39Result = id === userId;
  closure_7 = tmp39Result;
  tmp6Result = tmp6(tmp3[33]);
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
  let tmp19 = visibility === tmp6(tmp3[34]).WishlistVisibility.PRIVATE;
  const tmp13 = stateFromStoresArray;
  let tmp4 = importDefault(context[30])({ containerWidth, maxWidth });
  isShopStandalonePdpMobileEnabled = _require(context[35]).useIsShopStandalonePdpMobileEnabled("product_details_action_sheet");
  let intl = tmp6(tmp3[27]).intl;
  const string = intl.string;
  const t = tmp6(tmp3[27]).t;
  if (tmp19) {
    let stringResult = string(t.RX7D9h);
  } else {
    stringResult = string(t.d78ChW);
  }
  let obj10 = analyticsLocations;
  let items8 = [stateFromStores, tmp39Result];
  const memo = analyticsLocations.useMemo(() => {
    let found;
    if (stateFromStores != null) {
      const items = stateFromStores.items;
      found = items.filter((sku) => {
        let obj = closure_1_0(closure_1_2[36]);
        obj = { isWishlistOwner: closure_7 };
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
  const tmp6Result1 = _require(context[35]);
  const items10 = [closure_7];
  const items11 = [memo1, stateFromStores5];
  stateFromStoresArray = _require(context[33]).useStateFromStoresArray(items10, () => {
    if (null == stateFromStores5) {
      let items = [];
    } else {
      const found = memo1.filter((skuId) => closure_1_7.hasSentGift(skuId.skuId, id.id));
      items = found.map((skuId) => skuId.skuId);
    }
    return items;
  }, items11);
  const items12 = [stateFromStoresArray];
  memo2 = analyticsLocations.useMemo(() => new Set(stateFromStoresArray), items12);
  obj = { wishlistId, onAction: trackUserProfileWishlistAction, productLines: null, isVisible: null };
  let tmp26 = null;
  tmp2Result = tmp2(tmp3[37]);
  if (null != stateFromStores) {
    tmp26 = memo1(stateFromStores);
  }
  obj[2] = tmp26;
  obj[3] = isVisible;
  tmp2Result(obj);
  _require = undefined;
  _require = trackUserProfileWishlistAction((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
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
                closure_3 = tmp3;
                closure_2 = tmp5;
                throwTypeErrorResult = lib;
                let product;
                throwTypeErrorResult = closure_1_3;
                obj1 = { action: null, wishlistId: null, skuId: null, productLines: null };
                throwTypeErrorResult = closure_2_14;
                obj1[0] = closure_2_14.WISHLIST_ITEM_CLICKED;
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
                throwTypeErrorResult = closure_1_3(obj1);
                throwTypeErrorResult = lib;
                throwTypeErrorResult = context;
                const rootNavigationRef = lib(context[38]).getRootNavigationRef();
                if (null != rootNavigationRef) {
                  if (rootNavigationRef.isReady()) {
                    if (throwTypeErrorResult.skuProductLine !== closure_2_17.PREMIUM) {
                      if (throwTypeErrorResult.skuProductLine !== tmp39.SOCIAL_LAYER_GAME_ITEM) {
                        if (!c7) {
                          if (null != closure_1_8) {
                            if (!throwTypeErrorResult.isOwned) {
                              if (!closure_1_12.has(throwTypeErrorResult.skuId)) {
                                let obj18 = callback(context[23]);
                                obj18.hideAllActionSheets();
                                if (obj20.isCollectibleGiftingSupported()) {
                                  const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null, onNavigateAway: null };
                                  const items1 = [callback(context[25]).USER_PROFILE_WISHLIST];
                                  obj2[0] = items1;
                                  obj2[1] = callback(context[25]).USER_PROFILE_WISHLIST;
                                  obj2[2] = closure_2_18.FEATURED_PAGE;
                                  obj2[3] = function onNavigateAway(arg0) {
                                    callback(8966)({ userId: user.id, initialSection: closure_1_15.WISHLIST });
                                  };
                                  const result = lib(context[24]).openCollectiblesShopMobile(obj2);
                                  const obj23 = lib(context[24]);
                                  const obj3 = { skuId: null, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null };
                                  obj3[0] = throwTypeErrorResult.skuId;
                                  const items2 = [callback(context[25]).USER_PROFILE_WISHLIST];
                                  obj3[1] = items2;
                                  obj3[2] = tmp69;
                                  obj3[3] = closure_2_19.USER_PROFILE_WISHLIST;
                                  lib(context[48]).openShopGiftModal(obj3);
                                  c7 = 3;
                                  let obj4 = { value: null, done: true };
                                  obj4[0] = undefined;
                                  return obj4;
                                } else {
                                  const _HermesInternal2 = HermesInternal;
                                  let country = 1;
                                  const combined = "" + closure_2_16.COLLECTIBLES_SHOP + "#itemSkuId=" + throwTypeErrorResult.skuId;
                                  c6 = 3;
                                  c7 = 1;
                                  const obj5 = { value: null, done: false };
                                  obj5[0] = callback(context[49]).redirectWithHandoffToken(combined, { forceExternalBrowser: true });
                                  return obj5;
                                }
                                obj20 = lib(context[47]);
                              }
                            }
                          }
                        }
                        if (closure_1_9) {
                          let tmp95Result = tmp95(tmp96[51]);
                          const obj6 = { skuId: null, analyticsLocations: null };
                          obj6[0] = throwTypeErrorResult.skuId;
                          throwTypeErrorResult = callback;
                          throwTypeErrorResult = context;
                          const items3 = [callback(context[25]).USER_PROFILE_WISHLIST];
                          obj6[1] = items3;
                          throwTypeErrorResult = tmp95Result.openProductDetailsActionSheetForSku(obj6, "stack");
                        } else {
                          tmp95Result = tmp95(tmp96[24]);
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
                              obj7[0] = lib(context[24]).maybeFetchCollectiblesProduct(throwTypeErrorResult.skuId);
                              return obj7;
                            } else {
                              throwTypeErrorResult = closure_2;
                              throwTypeErrorResult = product;
                              if (null != product) {
                                throwTypeErrorResult = closure_2;
                                throwTypeErrorResult = closure_3;
                                throwTypeErrorResult = lib;
                                throwTypeErrorResult = context;
                                const obj8 = { product: null, analyticsLocations: null };
                                throwTypeErrorResult = product;
                                obj8[0] = product;
                                throwTypeErrorResult = callback;
                                throwTypeErrorResult = context;
                                const items4 = [callback(context[25]).USER_PROFILE_WISHLIST];
                                obj8[1] = items4;
                                throwTypeErrorResult = lib(context[51]).openProductDetailsActionSheet(obj8, "stack");
                                const obj32 = lib(context[51]);
                              } else {
                                throwTypeErrorResult = closure_3;
                                throwTypeErrorResult = callback;
                                throwTypeErrorResult = context;
                                throwTypeErrorResult = callback(context[23]).hideAllActionSheets();
                                const obj31 = callback(context[23]);
                              }
                              c7 = 3;
                            }
                          } else {
                            let obj9 = { analyticsLocations: null, analyticsSource: null, initialProductSkuId: null, screen: null };
                            throwTypeErrorResult = context;
                            const items5 = [callback(context[25]).USER_PROFILE_WISHLIST];
                            obj9[0] = items5;
                            throwTypeErrorResult = callback;
                            throwTypeErrorResult = context;
                            obj9[1] = callback(context[25]).USER_PROFILE_WISHLIST;
                            obj9[2] = throwTypeErrorResult.skuId;
                            throwTypeErrorResult = closure_2_18;
                            obj9[3] = closure_2_18.SHOP_ALL;
                            throwTypeErrorResult = lib(context[24]).openCollectiblesShopMobile(obj9);
                            const obj29 = lib(context[24]);
                          }
                        }
                      } else {
                        const sku = throwTypeErrorResult.sku;
                        product = sku;
                        if (sku == null) {
                          product = memo2.get(throwTypeErrorResult.skuId);
                        }
                        let obj11 = lib(context[42]);
                        let isAndroidResult = obj11.isAndroid();
                        if (isAndroidResult) {
                          isAndroidResult = null != tmp48;
                        }
                        if (isAndroidResult) {
                          isAndroidResult = null == tmp48.googleSkuIds;
                        }
                        if (isAndroidResult) {
                          let obj12 = lib(context[43]);
                          country = undefined;
                          if (country != null) {
                            country = country.country;
                          }
                          let obj10 = { withGoogleSkuIds: true, countryCode: null };
                          obj10[1] = country;
                          const socialLayerStorefrontSkuForApplication = obj12.fetchSocialLayerStorefrontSkuForApplication(tmp48.applicationId, throwTypeErrorResult.skuId, obj10);
                        }
                        let obj14 = lib(context[44]);
                        if (!c7) {
                          if (obj14.isSlayerSkuAvailableOnThisPlatform(tmp48)) {
                            if (null != closure_1_8) {
                              throwTypeErrorResult = callback;
                              throwTypeErrorResult = context;
                              throwTypeErrorResult = callback(context[23]).hideAllActionSheets();
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = context;
                              const obj46 = callback(context[23]);
                              obj11 = { skuId: null, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null, onGiftModalDismiss: null };
                              obj11[0] = throwTypeErrorResult.skuId;
                              throwTypeErrorResult = callback;
                              throwTypeErrorResult = context;
                              const items6 = [callback(context[25]).USER_PROFILE_WISHLIST];
                              obj11[1] = items6;
                              obj11[2] = tmp59;
                              throwTypeErrorResult = closure_2_19;
                              obj11[3] = closure_2_19.USER_PROFILE_WISHLIST;
                              obj11[4] = function onGiftModalDismiss(validateRecipient, arg1) {
                                callback(8966)({ userId: user.id, initialSection: closure_1_15.WISHLIST });
                              };
                              throwTypeErrorResult = lib(context[45]).openSocialLayerStorefrontGiftModal(obj11);
                              const obj47 = lib(context[45]);
                            }
                          }
                        }
                        let obj15 = callback(context[23]);
                        obj15.hideAllActionSheets();
                        let obj16 = lib(context[45]);
                        obj12 = { skuId: null, analyticsLocations: null };
                        obj12[0] = throwTypeErrorResult.skuId;
                        const items7 = [callback(context[25]).USER_PROFILE_WISHLIST];
                        obj12[1] = items7;
                        const result1 = obj16.openSocialLayerStorefrontProductDetailsModal(obj12);
                      }
                    } else {
                      throwTypeErrorResult = c7;
                      if (c7) {
                        obj9 = callback(context[23]);
                        obj9.hideAllActionSheets();
                        obj10 = lib(context[40]);
                        const result2 = obj10.navigateToPremiumHomePage();
                      } else if (null != closure_1_8) {
                        throwTypeErrorResult = callback;
                        throwTypeErrorResult = context;
                        throwTypeErrorResult = callback(context[23]).hideAllActionSheets();
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = context;
                        const obj43 = callback(context[23]);
                        const obj13 = { recipientUserId: null, premiumType: null, analyticsLocations: null };
                        obj13[0] = tmp40.id;
                        throwTypeErrorResult = closure_2_20;
                        obj13[1] = closure_2_20[throwTypeErrorResult.skuId];
                        throwTypeErrorResult = callback;
                        throwTypeErrorResult = context;
                        const items8 = [callback(context[25]).USER_PROFILE_WISHLIST];
                        obj13[2] = items8;
                        throwTypeErrorResult = lib(context[41]).openGiftModal(obj13);
                        const obj44 = lib(context[41]);
                      }
                    }
                  }
                }
                obj7 = callback(context[39]);
                obj14 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
                const intl2 = lib(context[27]).intl;
                obj14[1] = intl2.string(lib(context[27]).t["rTU7/z"]);
                obj7.open(obj14);
                const obj41 = lib(context[38]);
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
                closure_2 = closure_4;
                const _JSON = JSON;
                const _HermesInternal = HermesInternal;
                closure_2_24.error("Error performing web handoff: " + JSON.stringify(closure_2));
                obj1 = lib(context[50]);
                obj16 = { tags: null };
                const obj17 = { source: "UserProfileWishlistGrid", skuId: null };
                obj17[1] = lib.skuId;
                obj16[0] = obj17;
                const result3 = obj1.captureBillingException(closure_2, obj16);
                obj4 = callback(context[39]);
                obj18 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
                const intl = lib(context[27]).intl;
                obj18[1] = intl.string(lib(context[27]).t["rTU7/z"]);
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
            closure_4 = throwTypeErrorResult;
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
  const items13 = [wishlistId, trackUserProfileWishlistAction, tmp39Result, stateFromStores5, memo2, , ];
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  items13[5] = country;
  items13[6] = isShopStandalonePdpMobileEnabled;
  closure_13 = obj10.useCallback(function() {
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
  const callback = obj10.useCallback(() => {
    let obj = { action: closure_1_14.PRESS_EDIT_WISHLIST, wishlistId: callback, productLines: null };
    let tmp4;
    if (null != stateFromStores) {
      tmp4 = memo1(tmp3);
    }
    obj[2] = tmp4;
    trackUserProfileWishlistAction(obj);
    obj = { wishlistId: callback, analyticsContext: context, analyticsLocations };
    _undefined(context[23]).openLazy(callback(context[53])(context[52], context.paths), "EditWishlistActionSheet", obj, "stack");
  }, items14);
  const callback1 = obj10.useCallback(() => {
    let obj = { action: closure_1_14.PRESS_ADD_WISHLIST_ITEM, wishlistId: callback, productLines: new Set(items) };
    items = [closure_1_17.COLLECTIBLES];
    trackUserProfileWishlistAction(obj);
    const set = new Set(items);
    _undefined(context[23]).hideAllActionSheets();
    const obj2 = _undefined(context[23]);
    obj = { analyticsSource: _undefined(context[25]).USER_PROFILE_WISHLIST, analyticsLocations: null, screen: null };
    const items1 = [_undefined(context[25]).USER_PROFILE_WISHLIST];
    obj[1] = items1;
    obj[2] = closure_1_18.FEATURED_PAGE;
    const result = callback(context[24]).openCollectiblesShopMobile(obj);
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
    return callback(WishlistEmptyState, {});
  } else {
    if (tmp39Result) {
      if (!tmp19) {
        tmp19 = false === nsfwAllowed;
      }
      tmp39Result = tmp19;
    }
    if (tmp39Result) {
      obj = { style: null, children: null };
      const items16 = [, ];
      ({ disclaimer: arr18[0], disclaimerTop: arr18[1] } = tmp);
      obj[0] = items16;
      const items17 = [callback(tmp6(tmp3[54]).CircleInformationIcon, { size: "sm" }), ];
      obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      obj1[2] = stringResult;
      items17[1] = callback(tmp6(tmp3[26]).Text, obj1);
      obj[1] = items17;
      tmp39Result = tmp39(storeFront, obj);
    }
    const items18 = [tmp39Result, , ];
    let obj2 = { style: null, children: null };
    obj2[0] = tmp.headerRow;
    obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    let intl2 = tmp6(tmp3[27]).intl;
    obj4 = { count: null };
    obj4[0] = memo.length;
    obj3[2] = intl2.formatToPlainString(tmp6(tmp3[27]).t.r6Y1Lg, obj4);
    const items19 = [callback(tmp6(tmp3[26]).Text, obj3), ];
    if (tmp39Result) {
      obj5 = { style: null, children: null };
      obj5[0] = tmp.headerButtons;
      obj6 = { size: "sm", variant: "secondary", icon: null, text: null, onPress: null };
      obj6[2] = tmp36(tmp6(tmp3[29]).PlusMediumIcon, { size: "xs" });
      const intl3 = tmp6(tmp3[27]).intl;
      obj6[3] = intl3.string(tmp6(tmp3[27]).t.SDUwM0);
      obj6[4] = callback1;
      const items20 = [tmp36(tmp6(tmp3[28]).Button, obj6), ];
      let obj7 = { size: "sm", variant: "secondary", icon: null, onPress: null, accessibilityLabel: null };
      let obj8 = { size: "sm", color: null };
      obj8[1] = tmp2(tmp3[18]).colors.CONTROL_SECONDARY_TEXT_DEFAULT;
      obj7[2] = tmp36(tmp6(tmp3[56]).PencilIcon, obj8);
      obj7[3] = callback;
      const intl4 = tmp6(tmp3[27]).intl;
      obj7[4] = intl4.string(tmp6(tmp3[27]).t.bt75uw);
      items20[1] = tmp36(tmp6(tmp3[55]).IconButton, obj7);
      obj5[1] = items20;
      tmp39Result = tmp39(tmp35, obj5);
    }
    let obj9 = { children: null };
    items19[1] = tmp39Result;
    obj2[1] = items19;
    items18[1] = closure_22(storeFront, obj2);
    obj10 = { style: null, children: null };
    obj10[0] = tmp.gridWrapper;
    let obj11 = { style: null, children: null };
    const items21 = [tmp.itemsContainer, tmp5];
    obj11[0] = items21;
    obj11[1] = memo.map((sku) => {
      closure_0 = sku;
      let tmp = null;
      if (null != sku.sku) {
        const obj = { sku: null, isOwned: null, onPress: null, size: null, wishlistOwnerId: null };
        ({ sku: obj[0], isOwned: obj[1] } = sku);
        obj[2] = function onPress() {
          return closure_1_13(closure_0);
        };
        obj[3] = _undefined;
        let id;
        if (stateFromStores5 != null) {
          id = stateFromStores5.id;
        }
        obj[4] = id;
        tmp = closure_1_21(_undefined(context[57]), obj, sku.skuId);
        const tmp2 = closure_1_21;
        const tmp5 = _undefined(context[57]);
      }
      return tmp;
    });
    obj10[1] = callback(storeFront, obj11);
    items18[2] = callback(storeFront, obj10);
    obj9[0] = items18;
    return closure_22(closure_23, obj9);
  }
  const tmp6Result2 = _require(context[33]);
};
export { WishlistEmptyState };