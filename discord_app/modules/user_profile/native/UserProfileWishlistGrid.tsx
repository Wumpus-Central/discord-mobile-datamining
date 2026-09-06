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
    tmp4 = closure_26(isMobileWishlistSuggestionsEnabled);
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
      obj = {
        analyticsSource: closure_1_1(closure_1_2[25]).USER_PROFILE_WISHLIST,
        analyticsLocations: null,
        screen: null,
      };
      const items1 = [closure_1_1(closure_1_2[25]).USER_PROFILE_WISHLIST];
      obj[1] = items1;
      obj[2] = closure_1_18.FEATURED_PAGE;
      const result = trackUserProfileWishlistAction(closure_1_2[24]).openCollectiblesShopMobile(obj);
    }, items);
    tmp6 = jsxs;
    obj1 = { variant: "text-md/medium", color: str, accessibilityRole: "header", children: null };
    intl = require("getSystemLocale").intl;
    obj1[3] = intl.string(require("getSystemLocale").t.HGnLLT);
    items1 = [, ,];
    items1[0] = jsx(require("Text").Text, obj1);
    obj2 = {
      variant: "text-sm/normal",
      color: "mobile-text-heading-primary",
      style: tmp4.emptyStateText,
      children: null,
    };
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
({
  GiftingOrigin: closure_19,
  PremiumSubscriptionSKUToPremiumType: closure_20,
  SubscriptionIntervalTypes: closure_21,
} = GuildFeatures);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = jsxProd);
let closure_25 = new timestampDefault("UserProfileWishlistGrid");
let closure_26 = createCacheKey.createStyles(() => {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = {
    headerRow: null,
    headerButtons: null,
    gridWrapper: null,
    itemsContainer: null,
    emptyState: null,
    emptyStateText: null,
    emptyStateCta: null,
    disclaimer: null,
    disclaimerTop: null,
  };
  obj = {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: ThemesDefault.space.PX_12,
  };
  obj[0] = obj;
  obj = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
  obj[1] = obj;
  obj[2] = { width: "100%", alignItems: "center" };
  obj[3] = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_16, justifyContent: "flex-start" };
  const space = ThemesDefault.space;
  const obj2 = {
    alignItems: "center",
    paddingTop: flag ? space.PX_24 : space.PX_48,
    paddingBottom: null,
    paddingHorizontal: null,
    gap: null,
  };
  const space2 = tmp(576).space;
  obj2[2] = flag ? space2.PX_12 : space2.PX_48;
  obj2[3] = ThemesDefault.space.PX_32;
  obj2[4] = ThemesDefault.space.PX_8;
  obj[4] = obj2;
  obj[5] = { textAlign: "center" };
  obj1 = { flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_16, justifyContent: "flex-start" };
  obj[6] = { marginTop: ThemesDefault.space.PX_24 };
  const obj3 = { marginTop: ThemesDefault.space.PX_24 };
  obj[7] = {
    padding: ThemesDefault.space.PX_8,
    gap: ThemesDefault.space.PX_4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ThemesDefault.radii.sm,
    borderWidth: 1,
    borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  };
  const obj4 = {
    padding: ThemesDefault.space.PX_8,
    gap: ThemesDefault.space.PX_4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ThemesDefault.radii.sm,
    borderWidth: 1,
    borderColor: ThemesDefault.colors.BORDER_SUBTLE,
  };
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
  createOrReuseGiftOrder = obj3.useCreateOrReuseGiftOrder("UserProfileWishlistGrid");
  let obj4 = _require(tmp3[34]);
  let items = [closure_8];
  stateFromStores = obj4.useStateFromStores(items, () => store.getWishlist(closure_0));
  let obj5 = _require(tmp3[34]);
  let items1 = [closure_8];
  const stateFromStores1 = obj5.useStateFromStores(items1, () => store.isFetching(closure_0));
  let obj6 = _require(tmp3[34]);
  let items2 = [closure_8];
  const stateFromStores2 = obj6.useStateFromStores(items2, () => store.getError(closure_0));
  let obj7 = _require(tmp3[34]);
  let items3 = [memo2];
  let items4 = [stateFromStores, wishlistId];
  const stateFromStores3 = obj7.useStateFromStores(
    items3,
    () => {
      let wishlistSettings = null;
      if (null != stateFromStores) {
        wishlistSettings = memo2.getWishlistSettings(tmp.userId, closure_0);
      }
      return wishlistSettings;
    },
    items4,
  );
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
  stateFromStores5 = tmp6Result.useStateFromStores(
    items6,
    () => {
      let user = null;
      if (null != stateFromStores) {
        user = memo1.getUser(tmp.userId);
      }
      return user;
    },
    items7,
  );
  if (stateFromStores5 != null) {
    const nsfwAllowed = stateFromStores5.nsfwAllowed;
  }
  let tmp20 = visibility === tmp6(tmp3[35]).WishlistVisibility.PRIVATE;
  const tmp14 = memo1;
  let tmp4 = importDefault(context[30])({ containerWidth, maxWidth });
  isShopStandalonePdpMobileEnabled = _require(context[36]).useIsShopStandalonePdpMobileEnabled(
    "product_details_action_sheet",
  );
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
      found = items.filter((sku) => {
        let obj = closure_1_0(closure_1_2[37]);
        obj = { isWishlistOwner: closure_8 };
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
      found = items.filter(stateFromStores5);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items9);
  const tmp6Result1 = _require(context[36]);
  const items10 = [stateFromStores];
  const items11 = [memo1, stateFromStores5];
  stateFromStoresArray = _require(context[34]).useStateFromStoresArray(
    items10,
    () => {
      if (null == stateFromStores5) {
        let items = [];
      } else {
        const found = memo1.filter((skuId) => closure_1_7.hasSentGift(skuId.skuId, id.id));
        items = found.map((skuId) => skuId.skuId);
      }
      return items;
    },
    items11,
  );
  const items12 = [stateFromStoresArray];
  memo2 = analyticsLocations.useMemo(() => new Set(stateFromStoresArray), items12);
  obj = { wishlistId, onAction: trackUserProfileWishlistAction, productLines: null, isVisible: null };
  let tmp27 = null;
  tmp2Result = tmp2(tmp3[38]);
  if (null != stateFromStores) {
    tmp27 = isShopStandalonePdpMobileEnabled(stateFromStores);
  }
  obj[2] = tmp27;
  obj[3] = isVisible;
  tmp2Result(obj);
  _require = undefined;
  _require = trackUserProfileWishlistAction((arg0) => {
    closure_0 = arg0;
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function* (arg0) {
      if (c7 === 2) {
        c7 = 3;
        let throwTypeErrorResult = HermesBuiltin.throwTypeError();
      } else {
        throwTypeErrorResult = arg1;
        throwTypeErrorResult = arg0;
        throwTypeErrorResult = tmp8;
        throwTypeErrorResult = null;
        throwTypeErrorResult = globalThis;
        if (tmp9 === 3) {
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
            if (0 === v0) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                c3 = tmp4;
                closure_2 = tmp7;
                throwTypeErrorResult = lib;
                let product;
                closure_2 = undefined;
                c3 = undefined;
                let YEAR;
                throwTypeErrorResult = closure_1_3;
                obj1 = { action: null, wishlistId: null, skuId: null, productLines: null };
                throwTypeErrorResult = constants;
                obj1[0] = constants.WISHLIST_ITEM_CLICKED;
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
                const rootNavigationRef = lib(context[39]).getRootNavigationRef();
                if (null != rootNavigationRef) {
                  if (rootNavigationRef.isReady()) {
                    if (throwTypeErrorResult.skuProductLine !== closure_2_17.PREMIUM) {
                      if (throwTypeErrorResult.skuProductLine !== tmp53.SOCIAL_LAYER_GAME_ITEM) {
                        if (!closure_1_8) {
                          if (null != closure_1_9) {
                            if (!throwTypeErrorResult.isOwned) {
                              if (!closure_1_13.has(throwTypeErrorResult.skuId)) {
                                let obj23 = callback(context[23]);
                                obj23.hideAllActionSheets();
                                if (obj25.isCollectibleGiftingSupported()) {
                                  const obj2 = {
                                    analyticsLocations: null,
                                    analyticsSource: null,
                                    screen: null,
                                    onNavigateAway: null,
                                  };
                                  const items1 = [callback(context[25]).USER_PROFILE_WISHLIST];
                                  obj2[0] = items1;
                                  obj2[1] = callback(context[25]).USER_PROFILE_WISHLIST;
                                  throwTypeErrorResult = closure_2_18;
                                  obj2[2] = closure_2_18.FEATURED_PAGE;
                                  obj2[3] = function onNavigateAway(arg0) {
                                    callback(8179)({ userId: user.id, initialSection: closure_1_15.WISHLIST });
                                  };
                                  throwTypeErrorResult = lib(context[24]).openCollectiblesShopMobile(obj2);
                                  throwTypeErrorResult = lib;
                                  throwTypeErrorResult = context;
                                  const obj28 = lib(context[24]);
                                  const obj3 = {
                                    skuId: null,
                                    analyticsLocations: null,
                                    lockedRecipientUser: null,
                                    giftingOrigin: null,
                                  };
                                  obj3[0] = throwTypeErrorResult.skuId;
                                  throwTypeErrorResult = callback;
                                  throwTypeErrorResult = context;
                                  const items2 = [callback(context[25]).USER_PROFILE_WISHLIST];
                                  obj3[1] = items2;
                                  throwTypeErrorResult = closure_1_9;
                                  obj3[2] = closure_1_9;
                                  throwTypeErrorResult = closure_2_19;
                                  obj3[3] = closure_2_19.USER_PROFILE_WISHLIST;
                                  throwTypeErrorResult = lib(context[52]).openShopGiftModal(obj3);
                                  c7 = 3;
                                  const obj4 = { value: null, done: true };
                                  obj4[0] = undefined;
                                  return obj4;
                                } else {
                                  const _HermesInternal2 = HermesInternal;
                                  let country = 1;
                                  const combined =
                                    "" + closure_2_16.COLLECTIBLES_SHOP + "#itemSkuId=" + throwTypeErrorResult.skuId;
                                  v0 = 3;
                                  c7 = 1;
                                  let obj5 = { value: null, done: false };
                                  obj5[0] = callback(context[53]).redirectWithHandoffToken(combined, {
                                    forceExternalBrowser: true,
                                  });
                                  return obj5;
                                }
                                obj25 = lib(context[51]);
                              }
                            }
                          }
                        }
                        throwTypeErrorResult = closure_1_10;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = context;
                        if (closure_1_10) {
                          const obj6 = { skuId: null, analyticsLocations: null };
                          obj6[0] = throwTypeErrorResult.skuId;
                          throwTypeErrorResult = callback;
                          throwTypeErrorResult = context;
                          const items3 = [callback(context[25]).USER_PROFILE_WISHLIST];
                          obj6[1] = items3;
                          throwTypeErrorResult = throwTypeErrorResult(
                            throwTypeErrorResult[55],
                          ).openProductDetailsActionSheetForSku(obj6, "stack");
                          const throwTypeErrorResultResult = throwTypeErrorResult(throwTypeErrorResult[55]);
                        } else {
                          if (throwTypeErrorResultResult1.isCollectiblesShopOpen()) {
                            throwTypeErrorResult = createOrReuseGiftOrder;
                            product = createOrReuseGiftOrder.getProduct(throwTypeErrorResult.skuId);
                            throwTypeErrorResult = product;
                            if (null == product) {
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = context;
                              v0 = 1;
                              c7 = 1;
                              const obj7 = { value: null, done: false };
                              obj7[0] = lib(context[24]).maybeFetchCollectiblesProduct(throwTypeErrorResult.skuId);
                              return obj7;
                            } else {
                              throwTypeErrorResult = closure_2;
                              throwTypeErrorResult = product;
                              if (null != product) {
                                throwTypeErrorResult = closure_2;
                                throwTypeErrorResult = c3;
                                throwTypeErrorResult = lib;
                                throwTypeErrorResult = context;
                                let obj8 = { product: null, analyticsLocations: null };
                                throwTypeErrorResult = product;
                                obj8[0] = product;
                                throwTypeErrorResult = callback;
                                throwTypeErrorResult = context;
                                const items4 = [callback(context[25]).USER_PROFILE_WISHLIST];
                                obj8[1] = items4;
                                throwTypeErrorResult = lib(context[55]).openProductDetailsActionSheet(obj8, "stack");
                                const obj37 = lib(context[55]);
                              } else {
                                throwTypeErrorResult = c3;
                                throwTypeErrorResult = callback;
                                throwTypeErrorResult = context;
                                throwTypeErrorResult = callback(context[23]).hideAllActionSheets();
                                const obj36 = callback(context[23]);
                              }
                              c7 = 3;
                            }
                          } else {
                            throwTypeErrorResult = lib;
                            throwTypeErrorResult = context;
                            const obj9 = {
                              analyticsLocations: null,
                              analyticsSource: null,
                              initialProductSkuId: null,
                              screen: null,
                            };
                            throwTypeErrorResult = callback;
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
                            const obj34 = lib(context[24]);
                          }
                          throwTypeErrorResultResult1 = throwTypeErrorResult(throwTypeErrorResult[24]);
                        }
                      } else {
                        const sku = throwTypeErrorResult.sku;
                        product = sku;
                        if (sku == null) {
                          product = stateFromStoresArray.get(throwTypeErrorResult.skuId);
                        }
                        let obj16 = lib(context[46]);
                        let isAndroidResult = obj16.isAndroid();
                        if (isAndroidResult) {
                          isAndroidResult = null != tmp62;
                        }
                        if (isAndroidResult) {
                          isAndroidResult = null == tmp62.googleSkuIds;
                        }
                        if (isAndroidResult) {
                          let obj17 = lib(context[47]);
                          country = undefined;
                          if (country != null) {
                            country = country.country;
                          }
                          const obj10 = { withGoogleSkuIds: true, countryCode: null };
                          obj10[1] = country;
                          const socialLayerStorefrontSkuForApplication =
                            obj17.fetchSocialLayerStorefrontSkuForApplication(
                              tmp62.applicationId,
                              throwTypeErrorResult.skuId,
                              obj10,
                            );
                        }
                        let obj19 = lib(context[48]);
                        if (!closure_1_8) {
                          if (obj19.isSlayerSkuAvailableOnThisPlatform(tmp62)) {
                            if (null != closure_1_9) {
                              throwTypeErrorResult = callback;
                              throwTypeErrorResult = context;
                              throwTypeErrorResult = callback(context[23]).hideAllActionSheets();
                              throwTypeErrorResult = lib;
                              throwTypeErrorResult = context;
                              const obj54 = callback(context[23]);
                              let obj11 = {
                                skuId: null,
                                analyticsLocations: null,
                                lockedRecipientUser: null,
                                giftingOrigin: null,
                                onGiftModalDismiss: null,
                              };
                              obj11[0] = throwTypeErrorResult.skuId;
                              throwTypeErrorResult = callback;
                              throwTypeErrorResult = context;
                              const items6 = [callback(context[25]).USER_PROFILE_WISHLIST];
                              obj11[1] = items6;
                              throwTypeErrorResult = closure_1_9;
                              obj11[2] = closure_1_9;
                              throwTypeErrorResult = closure_2_19;
                              obj11[3] = closure_2_19.USER_PROFILE_WISHLIST;
                              obj11[4] = function onGiftModalDismiss(arg0) {
                                callback(8179)({ userId: user.id, initialSection: closure_1_15.WISHLIST });
                              };
                              throwTypeErrorResult = lib(context[49]).openSocialLayerStorefrontGiftModal(obj11);
                              const obj55 = lib(context[49]);
                            }
                          }
                        }
                        let obj20 = callback(context[23]);
                        obj20.hideAllActionSheets();
                        let obj21 = lib(context[49]);
                        const obj12 = { skuId: null, analyticsLocations: null };
                        obj12[0] = throwTypeErrorResult.skuId;
                        const items7 = [callback(context[25]).USER_PROFILE_WISHLIST];
                        obj12[1] = items7;
                        const result = obj21.openSocialLayerStorefrontProductDetailsModal(obj12);
                      }
                    } else {
                      throwTypeErrorResult = closure_1_8;
                      if (closure_1_8) {
                        let obj14 = callback(context[23]);
                        obj14.hideAllActionSheets();
                        let obj15 = lib(context[41]);
                        const result1 = obj15.navigateToPremiumHomePage();
                      } else if (null != closure_1_9) {
                        throwTypeErrorResult = callback;
                        throwTypeErrorResult = context;
                        throwTypeErrorResult = callback(context[23]).hideAllActionSheets();
                        throwTypeErrorResult = closure_2_20;
                        throwTypeErrorResult = closure_2_20[throwTypeErrorResult.skuId];
                        c3 = throwTypeErrorResult;
                        throwTypeErrorResult = closure_2_21;
                        YEAR = closure_2_21.YEAR;
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = context;
                        const obj50 = callback(context[23]);
                        throwTypeErrorResult = lib(context[42]).getPlanIdForPremiumType(throwTypeErrorResult, YEAR);
                        throwTypeErrorResult = lib;
                        throwTypeErrorResult = context;
                        const obj51 = lib(context[42]);
                        country = 2;
                        throwTypeErrorResult = v0;
                        const obj13 = { planId: null, recipientUserId: null, productId: null };
                        obj13[0] = throwTypeErrorResult;
                        throwTypeErrorResult = closure_1_9;
                        obj13[1] = closure_1_9.id;
                        obj13[2] = lib(context[43]).getProductIdForGift(throwTypeErrorResult);
                        v0 = 5;
                        c7 = 1;
                        obj14 = { value: null, done: false };
                        obj14[0] = v0(obj13);
                        return obj14;
                      }
                    }
                  }
                }
                obj11 = callback(context[40]);
                obj15 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
                const intl4 = lib(context[27]).intl;
                obj15[1] = intl4.string(lib(context[27]).t["rTU7/z"]);
                obj11.open(obj15);
                const obj48 = lib(context[39]);
              }
            } else if (1 === tmp10) {
              if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c7 = 3;
                obj16 = { value: null, done: true };
                obj16[0] = arg1;
                return obj16;
              } else {
                product = createOrReuseGiftOrder.getProduct(lib.skuId);
              }
            } else if (2 === tmp10) {
              country = 0;
              country = YEAR;
              const _JSON = JSON;
              const _HermesInternal = HermesInternal;
              closure_2_25.error("Error performing web handoff: " + JSON.stringify(country));
              obj5 = lib(context[54]);
              obj17 = { tags: null };
              const obj18 = { source: "UserProfileWishlistGrid", skuId: null };
              obj18[1] = lib.skuId;
              obj17[0] = obj18;
              const result2 = obj5.captureBillingException(country, obj17);
              obj8 = callback(context[40]);
              obj19 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
              const intl3 = lib(context[27]).intl;
              obj19[1] = intl3.string(lib(context[27]).t["rTU7/z"]);
              obj8.open(obj19);
            } else {
              if (3 === tmp10) {
                if (arg0 === 1) {
                  c7 = 3;
                  throw arg1;
                } else if (arg0 === 2) {
                  country = 0;
                  c7 = 3;
                  obj20 = { value: null, done: true };
                  obj20[0] = arg1;
                  return obj20;
                } else {
                  country = 0;
                }
              } else if (4 === tmp10) {
                country = 0;
                obj1 = callback(context[44]);
                obj21 = { title: null, body: null };
                const intl = lib(context[27]).intl;
                obj21[0] = intl.string(lib(context[27]).t.R0RpRX);
                const intl2 = lib(context[27]).intl;
                obj21[1] = intl2.string(lib(context[27]).t.CKsXk3);
                obj1.show(obj21);
                c7 = 3;
                const obj22 = { value: null, done: true };
                obj22[0] = undefined;
                return obj22;
              } else if (arg0 === 1) {
                c7 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                throwTypeErrorResult = closure_2;
                closure_2 = arg1;
                country = 0;
                throwTypeErrorResult = c3;
                throwTypeErrorResult = lib;
                throwTypeErrorResult = context;
                obj23 = {
                  recipientUserId: null,
                  premiumType: null,
                  planInterval: null,
                  order: null,
                  analyticsLocations: null,
                };
                throwTypeErrorResult = closure_1_9;
                obj23[0] = closure_1_9.id;
                throwTypeErrorResult = c3;
                obj23[1] = c3;
                throwTypeErrorResult = YEAR;
                obj23[2] = YEAR;
                throwTypeErrorResult = closure_2;
                obj23[3] = closure_2;
                throwTypeErrorResult = callback;
                throwTypeErrorResult = context;
                const items8 = [callback(context[25]).USER_PROFILE_WISHLIST];
                obj23[4] = items8;
                throwTypeErrorResult = lib(context[45]).openGiftModal(obj23);
                const obj45 = lib(context[45]);
              }
              country = 0;
              c7 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c7 = 3;
          } catch (throwTypeErrorResult) {
            YEAR = throwTypeErrorResult;
            if (tmp5 === country) {
              throwTypeErrorResult = tmp3;
              c7 = tmp3;
              throw throwTypeErrorResult;
            } else if (tmp2 === throwTypeErrorResult) {
              v0 = throwTypeErrorResult;
            } else {
              v0 = tmp6;
            }
          }
        }
      }
    })();
  });
  const items13 = [wishlistId, trackUserProfileWishlistAction, tmp40Result, stateFromStores5, memo2, , ,];
  let country;
  if (storeFront != null) {
    country = storeFront.country;
  }
  items13[5] = country;
  items13[6] = isShopStandalonePdpMobileEnabled;
  items13[7] = createOrReuseGiftOrder;
  closure_14 = obj11.useCallback(function () {
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
    let obj = { action: constants.PRESS_EDIT_WISHLIST, wishlistId: callback, productLines: null };
    let tmp4;
    if (null != stateFromStores) {
      tmp4 = isShopStandalonePdpMobileEnabled(tmp3);
    }
    obj[2] = tmp4;
    trackUserProfileWishlistAction(obj);
    obj = { wishlistId: callback, analyticsContext: context, analyticsLocations };
    _undefined(context[23]).openLazy(
      callback(context[57])(context[56], context.paths),
      "EditWishlistActionSheet",
      obj,
      "stack",
    );
  }, items14);
  const callback1 = obj11.useCallback(() => {
    let obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, wishlistId: callback, productLines: new Set(items) };
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
    if (tmp40Result) {
      if (!tmp20) {
        tmp20 = false === nsfwAllowed;
      }
      tmp40Result = tmp20;
    }
    if (tmp40Result) {
      obj = { style: null, children: null };
      const items16 = [,];
      ({ disclaimer: arr18[0], disclaimerTop: arr18[1] } = tmp);
      obj[0] = items16;
      const items17 = [callback(tmp6(tmp3[58]).CircleInformationIcon, { size: "sm" })];
      obj1 = { variant: "text-xs/medium", color: "text-subtle", children: null };
      obj1[2] = stringResult;
      items17[1] = callback(tmp6(tmp3[26]).Text, obj1);
      obj[1] = items17;
      tmp40Result = tmp40(storeFront, obj);
    }
    const items18 = [tmp40Result, ,];
    let obj2 = { style: null, children: null };
    obj2[0] = tmp.headerRow;
    obj3 = { variant: "text-sm/semibold", color: "text-muted", children: null };
    let intl2 = tmp6(tmp3[27]).intl;
    obj4 = { count: null };
    obj4[0] = memo.length;
    obj3[2] = intl2.formatToPlainString(tmp6(tmp3[27]).t.r6Y1Lg, obj4);
    const items19 = [callback(tmp6(tmp3[26]).Text, obj3)];
    if (tmp40Result) {
      obj5 = { style: null, children: null };
      obj5[0] = tmp.headerButtons;
      obj6 = { size: "sm", variant: "secondary", icon: null, text: null, onPress: null };
      obj6[2] = tmp37(tmp6(tmp3[29]).PlusMediumIcon, { size: "xs" });
      let intl3 = tmp6(tmp3[27]).intl;
      obj6[3] = intl3.string(tmp6(tmp3[27]).t.SDUwM0);
      obj6[4] = callback1;
      const items20 = [tmp37(tmp6(tmp3[28]).Button, obj6)];
      obj7 = { size: "sm", variant: "secondary", icon: null, onPress: null, accessibilityLabel: null };
      let obj8 = { size: "sm", color: null };
      obj8[1] = tmp2(tmp3[18]).colors.CONTROL_SECONDARY_TEXT_DEFAULT;
      obj7[2] = tmp37(tmp6(tmp3[60]).PencilIcon, obj8);
      obj7[3] = callback;
      let intl4 = tmp6(tmp3[27]).intl;
      obj7[4] = intl4.string(tmp6(tmp3[27]).t.bt75uw);
      items20[1] = tmp37(tmp6(tmp3[59]).IconButton, obj7);
      obj5[1] = items20;
      tmp40Result = tmp40(tmp36, obj5);
    }
    let obj9 = { children: null };
    items19[1] = tmp40Result;
    obj2[1] = items19;
    items18[1] = closure_23(storeFront, obj2);
    let obj10 = { style: null, children: null };
    obj10[0] = tmp.gridWrapper;
    obj11 = { style: null, children: null };
    const items21 = [tmp.itemsContainer, tmp5];
    obj11[0] = items21;
    obj11[1] = memo.map((sku) => {
      closure_0 = sku;
      let tmp = null;
      if (null != sku.sku) {
        const obj = { sku: null, isOwned: null, onPress: null, size: null, wishlistOwnerId: null };
        ({ sku: obj[0], isOwned: obj[1] } = sku);
        obj[2] = function onPress() {
          return closure_1_14(closure_0);
        };
        obj[3] = _undefined;
        let id;
        if (stateFromStores5 != null) {
          id = stateFromStores5.id;
        }
        obj[4] = id;
        tmp = closure_1_22(_undefined(context[61]), obj, sku.skuId);
        const tmp2 = closure_1_22;
        const tmp5 = _undefined(context[61]);
      }
      return tmp;
    });
    obj10[1] = callback(storeFront, obj11);
    items18[2] = callback(storeFront, obj10);
    obj9[0] = items18;
    return closure_23(closure_24, obj9);
  }
  const tmp6Result2 = _require(context[34]);
}
export { WishlistEmptyState };
