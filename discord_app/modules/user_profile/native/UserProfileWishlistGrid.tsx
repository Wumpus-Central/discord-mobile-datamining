// === Module 12938: UserProfileWishlistGrid ===

// Module 12938 (UserProfileWishlistGrid)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesShopConstants from "CollectiblesShopConstants" /* 1087 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7052 */;
import WishlistRecord from "WishlistRecord" /* 8432 */;
import CollectiblesWishlistItemRecord from "CollectiblesWishlistItemRecord" /* 8434 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;
import SentGiftsStore from "SentGiftsStore" /* 10771 */;
import WishlistStore from "WishlistStore" /* 8431 */;
import UserStore from "UserStore" /* 1377 */;
import SKUStore from "SKUStore" /* 5695 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import Constants_mod from "Constants" /* 7854 */;
import Constants_mod2 from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let closure_4, constants, countryCode, importDefault, order, premiumType, product, set, v0;

let closure_14;
let closure_15;
let closure_16;
let closure_17;
let closure_19;
let closure_20;
let closure_21;
let closure_22;
let closure_23;
let closure_24;
const View = react_native.View;
let closure_9 = CollectiblesWishlistItemRecord.isCollectiblesWishlistItemRecord;
const getWishlistProductLines = WishlistRecord.getWishlistProductLines;
let Constants = Constants_mod2;
({ TrackUserProfileWishlistActions: closure_14, UserProfileSections: closure_15 } = Constants);
Constants = Constants_mod2;
({ Routes: closure_16, SKUProductLines: closure_17 } = Constants);
let closure_18 = CollectiblesShopConstants.CollectiblesMobileShopScreen;
({ GiftingOrigin: closure_19, PremiumSubscriptionSKUToPremiumType: closure_20, SubscriptionIntervalTypes: closure_21 } = PremiumConstants);
({ jsx: closure_22, jsxs: closure_23, Fragment: closure_24 } = Fragment);
let tmp6 = new LoggerDefault("UserProfileWishlistGrid");
let closure_25 = tmp6;
let closure_26 = createStyles.createStyles(() => {
  let obj5;
  let space2;
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const obj = { headerRow: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: nativeDefault.space.PX_12 }, headerButtons: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, gridWrapper: { width: "100%", alignItems: "center" }, itemsContainer: { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16, justifyContent: "flex-start" }, emptyState: obj5, emptyStateText: { textAlign: "center" }, emptyStateCta: { marginTop: nativeDefault.space.PX_24 }, disclaimer: { padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE }, disclaimerTop: { marginBottom: nativeDefault.space.PX_16 } };
  ({ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: nativeDefault.space.PX_12 });
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  ({ flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16, justifyContent: "flex-start" });
  const space = nativeDefault.space;
  obj5 = { alignItems: "center", paddingTop: flag ? space.PX_24 : space.PX_48, paddingBottom: flag ? space2.PX_12 : space2.PX_48, paddingHorizontal: nativeDefault.space.PX_32, gap: nativeDefault.space.PX_8 };
  space2 = nativeDefault.space;
  ({ marginTop: nativeDefault.space.PX_24 });
  ({ padding: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4, flexDirection: "row", alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE });
  ({ marginBottom: nativeDefault.space.PX_16 });
  return obj;
});
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let Button;
  let intl3;
  let items;
  let obj9;
  let tmp12;
  let tmp14;
  let tmp6;
  let tmp7;
  let tmp9;
  let trackUserProfileWishlistAction;
  let obj = trackUserProfileWishlistAction(576);
  const cResult = obj.c(17);
  let obj2 = trackUserProfileWishlistAction(12939);
  const isMobileWishlistSuggestionsEnabled = obj2.useIsMobileWishlistSuggestionsEnabled("WishlistEmptyState");
  const tmp5 = closure_26(isMobileWishlistSuggestionsEnabled);
  let obj3 = trackUserProfileWishlistAction(4589);
  const theme = obj3.useThemeContext().theme;
  let str = "mobile-text-heading-primary";
  const obj4 = trackUserProfileWishlistAction(4729);
  if (obj4.isThemeDark(theme)) {
    str = "text-overlay-light";
  }
  const tmpResult = trackUserProfileWishlistAction(7861);
  trackUserProfileWishlistAction = tmpResult.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
  if (cResult[0] !== trackUserProfileWishlistAction) {
    const fn = function e() {
      let items;
      let items1;
      const obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, productLines: new Set(items) };
      items = [constants2.COLLECTIBLES];
      new Set(items);
      trackUserProfileWishlistAction(obj);
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideAllActionSheets();
      const tmp4 = CollectiblesActionCreators;
      const openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
      const obj3 = { analyticsSource: AnalyticsLocationDefault.USER_PROFILE_WISHLIST, analyticsLocations: items1, screen: constants.FEATURED_PAGE };
      items1 = [AnalyticsLocationDefault.USER_PROFILE_WISHLIST];
      const result = openCollectiblesShopMobile(obj3);
    };
    cResult[0] = trackUserProfileWishlistAction;
    cResult[1] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[1];
  }
  const emptyState = tmp5.emptyState;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(1126).intl;
    const stringResult = intl.string(trackUserProfileWishlistAction(1126).t.HGnLLT);
    cResult[2] = stringResult;
    tmp7 = stringResult;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== str) {
    const obj5 = { variant: "text-md/medium", color: str, accessibilityRole: "header", children: tmp7 };
    const tmp11 = closure_22(trackUserProfileWishlistAction(4886).Text, obj5);
    cResult[3] = str;
    cResult[4] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[4];
  }
  const emptyStateText = tmp5.emptyStateText;
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = tmp(1126).intl;
    const stringResult1 = intl2.string(trackUserProfileWishlistAction(1126).t["/X1ny6"]);
    cResult[5] = stringResult1;
    tmp12 = stringResult1;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== tmp5.emptyStateText) {
    const obj6 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", style: emptyStateText, children: tmp12 };
    const tmp16 = closure_22(trackUserProfileWishlistAction(4886).Text, obj6);
    cResult[6] = tmp5.emptyStateText;
    cResult[7] = tmp16;
    tmp14 = tmp16;
  } else {
    tmp14 = cResult[7];
  }
  if (cResult[8] === tmp6) {
    if (cResult[9] === isMobileWishlistSuggestionsEnabled) {
      let tmp17;
      if (cResult[10] === tmp5.emptyStateCta) {
        tmp17 = cResult[11];
      }
      if (cResult[12] === tmp5.emptyState) {
        if (cResult[13] === tmp9) {
          if (cResult[14] === tmp14) {
            let tmp21;
            if (cResult[15] === tmp17) {
              tmp21 = cResult[16];
            }
            return tmp21;
          }
        }
      }
      const obj7 = { style: emptyState, children: items };
      items = [tmp9, tmp14, tmp17];
      const tmp24 = closure_23(View, obj7);
      cResult[12] = tmp5.emptyState;
      cResult[13] = tmp9;
      cResult[14] = tmp14;
      cResult[15] = tmp17;
      cResult[16] = tmp24;
      tmp21 = tmp24;
    }
  }
  let tmp18 = !isMobileWishlistSuggestionsEnabled;
  if (tmp18) {
    const obj8 = { style: tmp5.emptyStateCta, children: closure_22(Button, obj9) };
    obj9 = { size: "md", variant: "secondary", icon: closure_22(trackUserProfileWishlistAction(10978).PlusMediumIcon, { size: "xs" }), text: intl3.string(trackUserProfileWishlistAction(1126).t.SDUwM0), onPress: tmp6 };
    Button = tmp(5594).Button;
    intl3 = tmp(1126).intl;
    tmp18 = closure_22(View, obj8);
  }
  cResult[8] = tmp6;
  cResult[9] = isMobileWishlistSuggestionsEnabled;
  cResult[10] = tmp5.emptyStateCta;
  cResult[11] = tmp18;
  tmp17 = tmp18;
}) : (() => {
  let Button;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj8;
  let trackUserProfileWishlistAction;
  let obj = trackUserProfileWishlistAction(12939);
  const isMobileWishlistSuggestionsEnabled = obj.useIsMobileWishlistSuggestionsEnabled("WishlistEmptyState");
  let tmp4 = closure_26(isMobileWishlistSuggestionsEnabled);
  let obj2 = trackUserProfileWishlistAction(4589);
  const theme = obj2.useThemeContext().theme;
  let obj3 = trackUserProfileWishlistAction(4729);
  let str = "mobile-text-heading-primary";
  if (obj3.isThemeDark(theme)) {
    str = "text-overlay-light";
  }
  const tmpResult = trackUserProfileWishlistAction(7861);
  trackUserProfileWishlistAction = tmpResult.useUserProfileAnalyticsContext().trackUserProfileWishlistAction;
  let items = [trackUserProfileWishlistAction];
  const obj4 = { style: tmp4.emptyState, children: items1 };
  const callback = react.useCallback(() => {
    let items;
    let items1;
    const obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, productLines: new Set(items) };
    items = [constants2.COLLECTIBLES];
    new Set(items);
    trackUserProfileWishlistAction(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideAllActionSheets();
    const tmp4 = CollectiblesActionCreators;
    const openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
    const obj3 = { analyticsSource: AnalyticsLocationDefault.USER_PROFILE_WISHLIST, analyticsLocations: items1, screen: constants.FEATURED_PAGE };
    items1 = [AnalyticsLocationDefault.USER_PROFILE_WISHLIST];
    const result = openCollectiblesShopMobile(obj3);
  }, items);
  const obj5 = { variant: "text-md/medium", color: str, accessibilityRole: "header", children: intl.string(trackUserProfileWishlistAction(1126).t.HGnLLT) };
  const Text = tmp(4886).Text;
  intl = tmp(1126).intl;
  items1 = [closure_22(Text, obj5), , ];
  const obj6 = { variant: "text-sm/normal", color: "mobile-text-heading-primary", style: tmp4.emptyStateText, children: intl2.string(trackUserProfileWishlistAction(1126).t["/X1ny6"]) };
  const Text2 = tmp(4886).Text;
  intl2 = tmp(1126).intl;
  items1[1] = closure_22(Text2, obj6);
  let tmp8Result = !isMobileWishlistSuggestionsEnabled;
  if (tmp8Result) {
    const obj7 = { style: tmp4.emptyStateCta, children: closure_22(Button, obj8) };
    obj8 = { size: "md", variant: "secondary", icon: closure_22(trackUserProfileWishlistAction(10978).PlusMediumIcon, { size: "xs" }), text: intl3.string(trackUserProfileWishlistAction(1126).t.SDUwM0), onPress: callback };
    Button = tmp(5594).Button;
    intl3 = tmp(1126).intl;
    tmp8Result = closure_22(View, obj7);
  }
  items1[2] = tmp8Result;
  return closure_23(View, obj4);
});
let closure_27 = tmp7;
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWishlistGrid.tsx");

export default function UserProfileWishlistGrid(wishlistId) {
  let PencilIcon;
  let c1;
  let containerWidth;
  let intl2;
  let intl3;
  let intl4;
  let isVisible;
  let items16;
  let items17;
  let items19;
  let items20;
  let items21;
  let maxWidth;
  let nsfwAllowed;
  let obj14;
  let obj18;
  let obj21;
  let rowWidth;
  let stringResult;
  let tmp28;
  let tmp5;
  wishlistId = wishlistId.wishlistId;
  importDefault = undefined;
  let context;
  let trackUserProfileWishlistAction;
  let analyticsLocations;
  let createOrReuseGiftOrder;
  let mobileStoreFront;
  let stateFromStores;
  let closure_8;
  let stateFromStores5;
  let isShopStandalonePdpMobileEnabled;
  let memo1;
  let stateFromStoresArray;
  let memo2;
  constants = undefined;
  ({ containerWidth, maxWidth, isVisible } = wishlistId);
  let tmp = closure_26();
  const tmp3 = context;
  let tmp4 = require("useCardGridLayout")({ containerWidth, maxWidth });
  ({ cardWidth: c1, rowWidth } = tmp4);
  if (null != rowWidth) {
    let obj = { width: rowWidth };
    tmp5 = obj;
  }
  let obj2 = wishlistId(tmp3[24]);
  const userProfileAnalyticsContext = obj2.useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileWishlistAction = userProfileAnalyticsContext.trackUserProfileWishlistAction;
  analyticsLocations = tmp2(tmp3[33])().analyticsLocations;
  let obj3 = wishlistId(tmp3[34]);
  createOrReuseGiftOrder = obj3.useCreateOrReuseGiftOrder("UserProfileWishlistGrid");
  const tmp2Result = require("NativePaymentHooks");
  mobileStoreFront = tmp2Result.useMobileStoreFront();
  let obj5 = wishlistId(tmp3[36]);
  let items = [closure_8];
  stateFromStores = obj5.useStateFromStores(items, () => WishlistStore.getWishlist(wishlistId));
  let obj6 = wishlistId(tmp3[36]);
  let items1 = [closure_8];
  const stateFromStores1 = obj6.useStateFromStores(items1, () => WishlistStore.isFetching(wishlistId));
  let obj7 = wishlistId(tmp3[36]);
  let items2 = [closure_8];
  const stateFromStores2 = obj7.useStateFromStores(items2, () => WishlistStore.getError(wishlistId));
  const obj8 = wishlistId(tmp3[36]);
  let items3 = [memo2];
  let items4 = [stateFromStores, wishlistId];
  const stateFromStores3 = obj8.useStateFromStores(items3, () => {
    let wishlistSettings = null;
    if (null != stateFromStores) {
      wishlistSettings = UserProfileStore.getWishlistSettings(tmp.userId, wishlistId);
    }
    return wishlistSettings;
  }, items4);
  let visibility;
  if (stateFromStores3 != null) {
    visibility = stateFromStores3.visibility;
  }
  const PRIVATE = tmp6(tmp3[37]).WishlistVisibility.PRIVATE;
  let items5 = [memo1];
  const tmp6Result = wishlistId(tmp3[36]);
  const stateFromStores4 = tmp6Result.useStateFromStores(items5, () => memo1.getCurrentUser());
  let id;
  const tmp15 = memo1;
  if (stateFromStores4 != null) {
    id = stateFromStores4.id;
  }
  let userId;
  if (stateFromStores != null) {
    userId = stateFromStores.userId;
  }
  let tmp41Result2 = id === userId;
  closure_8 = tmp41Result2;
  let items6 = [tmp15];
  let items7 = [stateFromStores];
  const tmp6Result4 = wishlistId(tmp3[36]);
  stateFromStores5 = tmp6Result4.useStateFromStores(items6, () => {
    let user = null;
    if (null != stateFromStores) {
      user = UserStore.getUser(tmp.userId);
    }
    return user;
  }, items7);
  if (stateFromStores5 != null) {
    nsfwAllowed = stateFromStores5.nsfwAllowed;
  }
  let tmp21 = visibility === PRIVATE;
  const tmp6Result5 = wishlistId(tmp3[38]);
  isShopStandalonePdpMobileEnabled = tmp6Result5.useIsShopStandalonePdpMobileEnabled("product_details_action_sheet");
  let intl = tmp6(tmp3[28]).intl;
  const string = intl.string;
  const t = tmp6(tmp3[28]).t;
  if (tmp21) {
    stringResult = string(t.RX7D9h);
  } else {
    stringResult = string(t.d78ChW);
  }
  let obj12 = analyticsLocations;
  let items8 = [stateFromStores, tmp41Result2];
  const memo = analyticsLocations.useMemo(() => {
    let isWishlistOwner;
    let found;
    if (stateFromStores != null) {
      const items = stateFromStores.items;
      found = items.filter((item) => {
        const obj = wishlistId(context[39]);
        const obj2 = { isWishlistOwner };
        return obj.isEligibleWishlistItemOnMobile(item, obj2);
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
  const items10 = [stateFromStores];
  const items11 = [memo1, stateFromStores5];
  const tmp6Result6 = wishlistId(tmp3[36]);
  stateFromStoresArray = tmp6Result6.useStateFromStoresArray(items10, () => {
    let id;
    let items;
    if (null == stateFromStores5) {
      items = [];
    } else {
      const found = memo1.filter((skuId) => stateFromStores.hasSentGift(skuId.skuId, id.id));
      items = found.map((skuId) => skuId.skuId);
    }
    return items;
  }, items11);
  const items12 = [stateFromStoresArray];
  memo2 = analyticsLocations.useMemo(() => {
    set = new Set(stateFromStoresArray);
    return set;
  }, items12);
  let obj4 = { wishlistId, onAction: trackUserProfileWishlistAction, productLines: tmp28, isVisible };
  tmp28 = null;
  const tmp2Result2 = require("useTrackUserProfileWishlistView");
  if (null != stateFromStores) {
    tmp28 = isShopStandalonePdpMobileEnabled(stateFromStores);
  }
  tmp2Result2(obj4);
  const useCallback = obj12.useCallback;
  let closure_0 = trackUserProfileWishlistAction((wishlistId) => {
    let lockedRecipientUser;
    let c6 = 0;
    let c7 = 0;
    let c5 = 0;
    return (function*(arg0) {
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items1;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let items7;
      let items8;
      let obj21;
      let obj31;
      let obj33;
      let obj42;
      let user;
      if (c7 === 2) {
        c7 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let YEAR;
          let result7;
          c7 = 2;
          if (0 === countryCode) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              product = undefined;
              order = undefined;
              premiumType = undefined;
              YEAR = undefined;
              const _Set = Set;
              const items = [wishlistId.skuProductLine];
              const self = this;
              const self2 = this;
              const obj4 = { action: constants.WISHLIST_ITEM_CLICKED, wishlistId, skuId: wishlistId.skuId, productLines: set };
              set = new Set(items);
              premiumType(obj4);
              const obj38 = wishlistId(context[41]);
              const rootNavigationRef = obj38.getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  if (wishlistId.skuProductLine !== constants3.PREMIUM) {
                    if (wishlistId.skuProductLine !== tmp49.SOCIAL_LAYER_GAME_ITEM) {
                      if (!closure_1_8) {
                        if (null != lockedRecipientUser) {
                          if (!wishlistId.isOwned) {
                            if (!set.has(wishlistId.skuId)) {
                              const obj19 = size(context[25]);
                              obj19.hideAllActionSheets();
                              const obj20 = wishlistId(context[53]);
                              if (obj20.isCollectibleGiftingSupported()) {
                                const obj6 = {
                                  analyticsLocations: items1,
                                  analyticsSource: size(context[27]).USER_PROFILE_WISHLIST,
                                  screen: constants4.FEATURED_PAGE,
                                  onNavigateAway() {
                                                              const obj = { userId: user.id, initialSection: constants.WISHLIST };
                                                              closure_1(result7[52])(obj);
                                                            }
                                };
                                const openCollectiblesShopMobile = wishlistId(context[26]).openCollectiblesShopMobile;
                                items1 = [];
                                wishlistId(context[26]);
                                items1[0] = size(context[27]).USER_PROFILE_WISHLIST;
                                const result = openCollectiblesShopMobile(obj6);
                                const obj7 = { skuId: wishlistId.skuId, analyticsLocations: items2, lockedRecipientUser, giftingOrigin: constants5.USER_PROFILE_WISHLIST };
                                const openShopGiftModal = wishlistId(context[54]).openShopGiftModal;
                                items2 = [];
                                wishlistId(context[54]);
                                items2[0] = size(context[27]).USER_PROFILE_WISHLIST;
                                openShopGiftModal(obj7);
                                c7 = 3;
                                return { value: undefined, done: true };
                              } else {
                                const _HermesInternal2 = HermesInternal;
                                v0 = 1;
                                const combined = "" + constants2.COLLECTIBLES_SHOP + "#itemSkuId=" + wishlistId.skuId;
                                countryCode = 3;
                                c7 = 1;
                                const obj9 = { value: obj21.redirectWithHandoffToken(combined, { forceExternalBrowser: true }), done: false };
                                obj21 = size(context[55]);
                                return obj9;
                              }
                            }
                          }
                        }
                      }
                      if (closure_1_10) {
                        result7 = wishlistId(context[57]);
                        const openProductDetailsActionSheetForSku = result7.openProductDetailsActionSheetForSku;
                        const obj10 = { skuId: wishlistId.skuId, analyticsLocations: items3 };
                        items3 = [size(context[27]).USER_PROFILE_WISHLIST];
                        const result1 = openProductDetailsActionSheetForSku(obj10, "stack");
                      } else {
                        const tmp110Result2 = wishlistId(context[26]);
                        if (tmp110Result2.isCollectiblesShopOpen()) {
                          product = mobileStoreFront.getProduct(wishlistId.skuId);
                          result7 = product;
                          if (null == product) {
                            countryCode = 1;
                            c7 = 1;
                            const obj11 = { value: obj31.maybeFetchCollectiblesProduct(wishlistId.skuId), done: false };
                            obj31 = wishlistId(context[26]);
                            return obj11;
                          } else {
                            result7 = product;
                            if (null != product) {
                              const obj15 = { product, analyticsLocations: items4 };
                              const openProductDetailsActionSheet = wishlistId(context[57]).openProductDetailsActionSheet;
                              items4 = [];
                              wishlistId(context[57]);
                              items4[0] = size(context[27]).USER_PROFILE_WISHLIST;
                              result7 = openProductDetailsActionSheet(obj15, "stack");
                            } else {
                              const obj28 = size(context[25]);
                              result7 = obj28.hideAllActionSheets();
                            }
                            c7 = 3;
                            return { value: tmp126, done: true };
                          }
                        } else {
                          const obj22 = { analyticsLocations: items5, analyticsSource: size(context[27]).USER_PROFILE_WISHLIST, initialProductSkuId: wishlistId.skuId, screen: constants4.SHOP_ALL };
                          const openCollectiblesShopMobile2 = wishlistId(context[26]).openCollectiblesShopMobile;
                          items5 = [];
                          wishlistId(context[26]);
                          items5[0] = size(context[27]).USER_PROFILE_WISHLIST;
                          const result2 = openCollectiblesShopMobile2(obj22);
                        }
                      }
                    } else {
                      const sku = wishlistId.sku;
                      product = sku;
                      if (sku == null) {
                        product = stateFromStoresArray.get(wishlistId.skuId);
                      }
                      const obj14 = wishlistId(context[48]);
                      const isAndroidResult = obj14.isAndroid() && null != tmp58 && null == tmp58.googleSkuIds;
                      if (isAndroidResult) {
                        countryCode = undefined;
                        const fetchSocialLayerStorefrontSkuForApplication = wishlistId(context[49]).fetchSocialLayerStorefrontSkuForApplication;
                        const applicationId = tmp58.applicationId;
                        const skuId = wishlistId.skuId;
                        wishlistId(context[49]);
                        if (countryCode != null) {
                          countryCode = countryCode.country;
                        }
                        const obj23 = { withGoogleSkuIds: true, countryCode };
                        const socialLayerStorefrontSkuForApplication = fetchSocialLayerStorefrontSkuForApplication(applicationId, skuId, obj23);
                      }
                      const obj16 = wishlistId(context[50]);
                      if (!closure_1_8) {
                        if (obj16.isSlayerSkuAvailableOnThisPlatform(product)) {
                          if (null != lockedRecipientUser) {
                            const obj44 = size(context[25]);
                            obj44.hideAllActionSheets();
                            const obj24 = {
                              skuId: wishlistId.skuId,
                              analyticsLocations: items6,
                              lockedRecipientUser,
                              giftingOrigin: constants5.USER_PROFILE_WISHLIST,
                              onGiftModalDismiss() {
                                                      const obj = { userId: user.id, initialSection: constants.WISHLIST };
                                                      closure_1(result7[52])(obj);
                                                    }
                            };
                            const openSocialLayerStorefrontGiftModal = wishlistId(context[51]).openSocialLayerStorefrontGiftModal;
                            items6 = [];
                            wishlistId(context[51]);
                            items6[0] = size(context[27]).USER_PROFILE_WISHLIST;
                            const result3 = openSocialLayerStorefrontGiftModal(obj24);
                          }
                        }
                      }
                      const obj17 = size(context[25]);
                      obj17.hideAllActionSheets();
                      const obj25 = { skuId: wishlistId.skuId, analyticsLocations: items7 };
                      const openSocialLayerStorefrontProductDetailsModal = wishlistId(context[51]).openSocialLayerStorefrontProductDetailsModal;
                      items7 = [];
                      wishlistId(context[51]);
                      items7[0] = size(context[27]).USER_PROFILE_WISHLIST;
                      const result4 = openSocialLayerStorefrontProductDetailsModal(obj25);
                    }
                  } else if (closure_1_8) {
                    const obj12 = size(context[25]);
                    obj12.hideAllActionSheets();
                    const obj13 = wishlistId(context[43]);
                    const result5 = obj13.navigateToPremiumHomePage();
                  } else if (null != lockedRecipientUser) {
                    const obj40 = size(context[25]);
                    obj40.hideAllActionSheets();
                    premiumType = tmp174;
                    YEAR = constants6.YEAR;
                    const obj41 = wishlistId(context[44]);
                    const planIdForPremiumType = obj41.getPlanIdForPremiumType(tmp174, YEAR);
                    v0 = 2;
                    const obj26 = { planId: planIdForPremiumType, recipientUserId: lockedRecipientUser.id, productId: obj42.getProductIdForGift(planIdForPremiumType) };
                    countryCode = 5;
                    c7 = 1;
                    obj42 = wishlistId(context[45]);
                    const obj27 = { value: v0(obj26), done: false };
                    return obj27;
                  }
                }
              }
              const obj29 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: intl4.string(wishlistId(context[28]).t["rTU7/z"]) };
              const open2 = size(context[42]).open;
              size(context[42]);
              intl4 = wishlistId(context[28]).intl;
              open2(obj29);
            }
          } else if (1 === countryCode) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              return { value, done: true };
            } else {
              product = mobileStoreFront.getProduct(wishlistId.skuId);
            }
          } else if (2 === countryCode) {
            v0 = 0;
            let closure_5 = closure_4;
            const _JSON = JSON;
            const _HermesInternal = HermesInternal;
            logger.error("Error performing web handoff: " + JSON.stringify(closure_5));
            const obj32 = { tags: obj33 };
            obj33 = { source: "UserProfileWishlistGrid", skuId: wishlistId.skuId };
            const obj5 = wishlistId(context[56]);
            const result6 = obj5.captureBillingException(closure_5, obj32);
            result7 = size(context[42]);
            const open = result7.open;
            const obj34 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: intl3.string(wishlistId(context[28]).t["rTU7/z"]) };
            intl3 = wishlistId(context[28]).intl;
            open(obj34);
          } else if (3 === countryCode) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c7 = 3;
              return { value, done: true };
            } else {
              v0 = 0;
            }
          } else if (4 === countryCode) {
            v0 = 0;
            result7 = size(context[46]);
            const show = result7.show;
            const obj36 = { title: intl.string(wishlistId(context[28]).t.R0RpRX), body: intl2.string(wishlistId(context[28]).t.CKsXk3) };
            intl = wishlistId(context[28]).intl;
            intl2 = wishlistId(context[28]).intl;
            show(obj36);
            c7 = 3;
            return { value: undefined, done: true };
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c7 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            order = value;
            v0 = 0;
            result7 = wishlistId(context[47]);
            const openGiftModal = result7.openGiftModal;
            const obj39 = { recipientUserId: lockedRecipientUser.id, premiumType, planInterval: YEAR, order, analyticsLocations: items8 };
            items8 = [size(context[27]).USER_PROFILE_WISHLIST];
            openGiftModal(obj39);
          }
          c7 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp140) {
          closure_4 = tmp140;
          if (0 === v0) {
            c7 = 3;
            throw tmp140;
          } else if (1 === tmp142) {
            countryCode = 2;
          } else {
            countryCode = 4;
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
  constants = useCallback(function() {
    return closure_0(...arguments);
  }, items13);
  const items14 = [wishlistId, context, analyticsLocations, trackUserProfileWishlistAction, stateFromStores];
  const items15 = [trackUserProfileWishlistAction, wishlistId];
  const callback = obj12.useCallback(() => {
    let tmp4;
    const obj = { action: constants.PRESS_EDIT_WISHLIST, wishlistId, productLines: tmp4 };
    tmp4 = undefined;
    if (null != stateFromStores) {
      tmp4 = getWishlistProductLines(tmp3);
    }
    trackUserProfileWishlistAction(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    const obj3 = { wishlistId, analyticsContext: context, analyticsLocations };
    obj2.openLazy(asyncRequire(12942, dependencyMap.paths), "EditWishlistActionSheet", obj3, "stack");
  }, items14);
  const callback1 = obj12.useCallback(() => {
    let items;
    let items1;
    const obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, wishlistId, productLines: new Set(items) };
    items = [constants2.COLLECTIBLES];
    new Set(items);
    trackUserProfileWishlistAction(obj);
    const obj2 = ActionSheetActionCreatorsDefault;
    obj2.hideAllActionSheets();
    const tmp4 = CollectiblesActionCreators;
    const openCollectiblesShopMobile = tmp4.openCollectiblesShopMobile;
    const obj3 = { analyticsSource: AnalyticsLocationDefault.USER_PROFILE_WISHLIST, analyticsLocations: items1, screen: constants.FEATURED_PAGE };
    items1 = [AnalyticsLocationDefault.USER_PROFILE_WISHLIST];
    const result = openCollectiblesShopMobile(obj3);
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
    return closure_22(closure_27, {});
  } else {
    let tmp41Result = tmp41Result2;
    const length = memo.length;
    if (tmp41Result2) {
      if (!tmp21) {
        tmp21 = false === nsfwAllowed;
      }
      tmp41Result = tmp21;
    }
    if (tmp41Result) {
      let obj9 = { style: items16, children: items17 };
      items16 = [, ];
      ({ disclaimer: arr18[0], disclaimerTop: arr18[1] } = tmp);
      items17 = [closure_22(wishlistId(tmp3[60]).CircleInformationIcon, { size: "sm" }), ];
      let obj10 = { variant: "text-xs/medium", color: "text-subtle", children: stringResult };
      items17[1] = closure_22(wishlistId(tmp3[29]).Text, obj10);
      tmp41Result = closure_23(createOrReuseGiftOrder, obj9);
    }
    const items18 = [tmp41Result, , ];
    let obj11 = { style: tmp.headerRow, children: items19 };
    let obj13 = { variant: "text-sm/semibold", color: "text-muted", children: intl2.formatToPlainString(wishlistId(tmp3[28]).t.r6Y1Lg, obj14) };
    const Text = tmp6(tmp3[29]).Text;
    intl2 = tmp6(tmp3[28]).intl;
    obj14 = { count: length };
    items19 = [closure_22(Text, obj13), ];
    if (tmp41Result2) {
      let obj15 = { style: tmp.headerButtons, children: items20 };
      let obj16 = { size: "sm", variant: "secondary", icon: closure_22(wishlistId(tmp3[31]).PlusMediumIcon, { size: "xs" }), text: intl3.string(wishlistId(tmp3[28]).t.SDUwM0), onPress: callback1 };
      const Button = tmp6(tmp3[30]).Button;
      intl3 = tmp6(tmp3[28]).intl;
      items20 = [closure_22(Button, obj16), ];
      let obj17 = { size: "sm", variant: "secondary", icon: closure_22(PencilIcon, obj18), onPress: callback, accessibilityLabel: intl4.string(wishlistId(tmp3[28]).t.bt75uw) };
      const IconButton = tmp6(tmp3[61]).IconButton;
      obj18 = { size: "sm", color: tmp2(tmp3[18]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      PencilIcon = tmp6(tmp3[62]).PencilIcon;
      intl4 = tmp6(tmp3[28]).intl;
      items20[1] = closure_22(IconButton, obj17);
      tmp41Result2 = closure_23(tmp37, obj15);
    }
    let obj19 = { children: items18 };
    items19[1] = tmp41Result2;
    items18[1] = closure_23(createOrReuseGiftOrder, obj11);
    let obj20 = { style: tmp.gridWrapper, children: closure_22(tmp37, obj21) };
    obj21 = {
      style: items21,
      children: memo.map((sku) => {
          let id;
          let closure_0 = sku;
          let tmp = null;
          if (null != sku.sku) {
            const obj = {
              sku: null,
              isOwned: null,
              onPress() {
                  return constants(sku);
                },
              size,
              wishlistOwnerId: id
            };
            ({ sku: obj.sku, isOwned: obj.isOwned } = sku);
            id = undefined;
            const tmp5 = size(context[63]);
            if (stateFromStores5 != null) {
              id = stateFromStores5.id;
            }
            tmp = closure_1_22(tmp5, obj, sku.skuId);
          }
          return tmp;
        })
    };
    items21 = [tmp.itemsContainer, tmp5];
    items18[2] = closure_22(createOrReuseGiftOrder, obj20);
    return closure_23(closure_24, obj19);
  }
};
export const WishlistEmptyState = tmp7;