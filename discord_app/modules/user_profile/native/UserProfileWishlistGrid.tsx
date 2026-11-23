// discord_app/modules/user_profile/native/UserProfileWishlistGrid.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/02119_asyncRequireImpl.js";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesActionCreators from "../../collectibles/CollectiblesActionCreators.tsx";
import WishlistShopUnpublishUtils from "../../wishlists/WishlistShopUnpublishUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CollectiblesCategoryStore from "../../collectibles/CollectiblesCategoryStore.tsx";
import SentGiftsStore from "../../wishlists/SentGiftsStore.tsx";
import WishlistStore from "../../wishlists/WishlistStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import SKUStore from "../../../stores/game_store/SKUStore.tsx";
import UserProfileStore from "../UserProfileStore.tsx";

const require = globalThis.__r;

require = fn;
class WishlistEmptyState {
  constructor() {
    tmp = closure_27();
    tmp2 = closure_0;
    tmp3 = closure_2;
    obj = closure_0(closure_2[20]);
    obj2 = closure_0(closure_2[21]);
    str = "mobile-text-heading-primary";
    if (obj2.isThemeDark(obj.useThemeContext().theme)) {
      str = "text-overlay-light";
    }
    obj1 = { style: tmp.emptyState, children: null };
    obj6 = { variant: "body-md/medium", color: str, accessibilityRole: "header", children: null };
    intl = tmp2(tmp3[23]).intl;
    obj6.children = intl.string(tmp2(tmp3[23]).t.HGnLLT);
    items = [,];
    items[0] = jsx(tmp2(tmp3[22]).Text, obj6);
    obj7 = {
      variant: "body-sm/normal",
      color: "mobile-text-heading-primary",
      style: tmp.emptyStateText,
      children: null,
    };
    intl2 = tmp2(tmp3[23]).intl;
    obj7.children = intl2.string(tmp2(tmp3[23]).t["/X1ny6"]);
    items[1] = jsx(tmp2(tmp3[22]).Text, obj7);
    obj1.children = items;
    return jsxs(View, obj1);
  }
}
const View = fn(17).View;
let closure_10 = fn(8986).isCollectiblesWishlistItemRecord;
const getWishlistProductLines = fn(8984).getWishlistProductLines;
let Constants = fn(8069);
({ TrackUserProfileWishlistActions: closure_15, UserProfileSections: closure_16 } = Constants);
Constants = fn(1071);
({ Routes: closure_17, SKUProductLines: closure_18 } = Constants);
let closure_19 = fn(1073).CollectiblesMobileShopScreen;
const PremiumConstants = fn(1388);
({
  GiftingOrigin: closure_20,
  PremiumSubscriptionSKUToPremiumType: closure_21,
  SubscriptionIntervalTypes: closure_22,
} = PremiumConstants);
const jsxProd = fn(21);
({ jsx: closure_23, jsxs: closure_24, Fragment: closure_25 } = jsxProd);
let closure_26 = new LoggerDefault("UserProfileWishlistGrid");
const createStyles = fn(4913);
let obj2 = {
  headerRow: null,
  headerButtons: null,
  gridWrapper: null,
  itemsContainer: null,
  emptyState: null,
  emptyStateText: null,
  disclaimer: null,
  disclaimerTop: null,
};
const tmp6 = new LoggerDefault("UserProfileWishlistGrid");
obj2.headerRow = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: nativeDefault.space.PX_12,
};
let obj3 = {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: nativeDefault.space.PX_12,
};
obj2.headerButtons = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.gridWrapper = { width: "100%", alignItems: "center" };
let obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.itemsContainer = {
  flexDirection: "row",
  flexWrap: "wrap",
  gap: nativeDefault.space.PX_16,
  justifyContent: "flex-start",
};
let obj5 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_16, justifyContent: "flex-start" };
obj2.emptyState = {
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_32,
  gap: nativeDefault.space.PX_8,
};
obj2.emptyStateText = { textAlign: "center" };
let obj6 = {
  alignItems: "center",
  paddingTop: nativeDefault.space.PX_24,
  paddingBottom: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_32,
  gap: nativeDefault.space.PX_8,
};
obj2.disclaimer = {
  padding: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj7 = {
  padding: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_4,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: nativeDefault.radii.md,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.disclaimerTop = { marginBottom: nativeDefault.space.PX_16 };
let closure_27 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWishlistGrid.tsx");

export default function UserProfileWishlistGrid(wishlistId) {
  wishlistId = wishlistId.wishlistId;
  _require = wishlistId;
  const isVisible = wishlistId.isVisible;
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
  let memo;
  c12 = undefined;
  let memo2;
  let stateFromStoresArray;
  let memo3;
  closure_16 = undefined;
  c17 = undefined;
  c18 = undefined;
  constants = undefined;
  ({ containerWidth, maxWidth } = wishlistId);
  const tmp = closure_27();
  ({ cardWidth: c1, rowWidth } = require("useCardGridLayout")({ containerWidth, maxWidth }));
  if (null != rowWidth) {
    let obj = { width: rowWidth };
    const tmp5 = obj;
  }
  let tmp4 = require("useCardGridLayout")({ containerWidth, maxWidth });
  const userProfileAnalyticsContext = require("UserProfileAnalyticsContext").useUserProfileAnalyticsContext();
  context = userProfileAnalyticsContext.context;
  trackUserProfileWishlistAction = userProfileAnalyticsContext.trackUserProfileWishlistAction;
  analyticsLocations = tmp2(tmp3[26])().analyticsLocations;
  let obj2 = require("UserProfileAnalyticsContext");
  createOrReuseGiftOrder = require("createOrReuseGiftOrder").useCreateOrReuseGiftOrder("UserProfileWishlistGrid");
  let obj3 = require("createOrReuseGiftOrder");
  mobileStoreFront = require("NativePaymentHooks").useMobileStoreFront();
  const tmp2Result = require("NativePaymentHooks");
  items = [stateFromStores5];
  stateFromStores = require("initialize").useStateFromStores(items, () => WishlistStore.getWishlist(closure_0));
  let obj5 = require("initialize");
  let items1 = [stateFromStores5];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => WishlistStore.isFetching(closure_0));
  let obj6 = require("initialize");
  let items2 = [stateFromStores5];
  const stateFromStores2 = require("initialize").useStateFromStores(items2, () => WishlistStore.getError(closure_0));
  let obj7 = require("initialize");
  let items3 = [stateFromStoresArray];
  let items4 = [stateFromStores, wishlistId];
  const stateFromStores3 = require("initialize").useStateFromStores(
    items3,
    () => {
      let wishlistSettings = null;
      if (null != stateFromStores) {
        wishlistSettings = UserProfileStore.getWishlistSettings(tmp.userId, closure_0);
      }
      return wishlistSettings;
    },
    items4,
  );
  let visibility;
  if (stateFromStores3 != null) {
    visibility = stateFromStores3.visibility;
  }
  let obj8 = require("initialize");
  let items5 = [c12];
  const stateFromStores4 = require("initialize").useStateFromStores(items5, () => _undefined.getCurrentUser());
  let id;
  if (stateFromStores4 != null) {
    id = stateFromStores4.id;
  }
  let userId;
  if (stateFromStores != null) {
    userId = stateFromStores.userId;
  }
  let tmp52Result2 = id === userId;
  closure_8 = tmp52Result2;
  const tmp15 = c12;
  const tmp6Result = require("initialize");
  let items6 = [tmp15];
  let items7 = [stateFromStores];
  stateFromStores5 = require("initialize").useStateFromStores(
    items6,
    () => {
      let user = null;
      if (null != stateFromStores) {
        user = UserStore.getUser(tmp.userId);
      }
      return user;
    },
    items7,
  );
  if (stateFromStores5 != null) {
    const nsfwAllowed = stateFromStores5.nsfwAllowed;
  }
  let tmp21 = visibility === tmp6(tmp3[30]).WishlistVisibility.PRIVATE;
  const tmp6Result6 = require("initialize");
  isShopStandalonePdpMobileEnabled = require("ShopStandalonePdpMobileExperiment").useIsShopStandalonePdpMobileEnabled(
    "product_details_action_sheet",
  );
  let intl = tmp6(tmp3[23]).intl;
  const string = intl.string;
  const t = tmp6(tmp3[23]).t;
  if (tmp21) {
    let stringResult = string(t.RX7D9h);
  } else {
    stringResult = string(t.d78ChW);
  }
  let items8 = [stateFromStores, tmp52Result2];
  memo = createOrReuseGiftOrder.useMemo(() => {
    let found;
    if (stateFromStores != null) {
      items = stateFromStores.items;
      found = items.filter((item) => closure_0(context[32]).isEligibleWishlistItemOnMobile(item, { isWishlistOwner }));
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items8);
  const items9 = [memo];
  const memo1 = createOrReuseGiftOrder.useMemo(() => {
    const found = memo.filter(WishlistShopUnpublishUtils.canRenderWishlistShopUnpublishCountdown);
    return found.map((shopUnpublishedAt) => shopUnpublishedAt.shopUnpublishedAt);
  }, items9);
  const tmp6Result7 = require("ShopStandalonePdpMobileExperiment");
  const nextFutureShopUnpublishedAt = require("WishlistShopUnpublishUtils").getNextFutureShopUnpublishedAt(memo1);
  let tmp27;
  const tmp6Result8 = require("WishlistShopUnpublishUtils");
  if (false !== isVisible) {
    tmp27 = nextFutureShopUnpublishedAt;
  }
  let tmp28 = null != require("useShopUnpublishCountdown")(tmp27);
  const tmp2Result5 = require("useShopUnpublishCountdown");
  const wishlistCountdownConfigPeek =
    require("WishlistCountdownExperiment").useWishlistCountdownConfigPeek("UserProfileWishlistGrid");
  ({ labelsEnabled: c12, reorderEnabled } = wishlistCountdownConfigPeek);
  const tmp6Result9 = require("WishlistCountdownExperiment");
  if (reorderEnabled) {
    reorderEnabled = null != stateFromStores4;
  }
  if (reorderEnabled) {
    reorderEnabled = !tmp52Result2;
  }
  const tmp2Result6 = require("usePrioritizedWishlistItems");
  const items10 = [stateFromStores];
  memo2 = obj12.useMemo(() => {
    let found;
    if (stateFromStores != null) {
      items = stateFromStores.items;
      found = items.filter(closure_10);
    }
    if (found == null) {
      found = [];
    }
    return found;
  }, items10);
  const tmp2Result2Result = require("usePrioritizedWishlistItems")(memo, reorderEnabled);
  const items11 = [closure_8];
  const items12 = [memo2, stateFromStores5];
  stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items11,
    () => {
      if (null == stateFromStores5) {
        items = [];
      } else {
        const found = memo2.filter((skuId) => closure_8.hasSentGift(skuId.skuId, id.id));
        items = found.map((skuId) => skuId.skuId);
      }
      return items;
    },
    items12,
  );
  const items13 = [stateFromStoresArray];
  memo3 = obj12.useMemo(() => new Set(stateFromStoresArray), items13);
  let userId1;
  const tmp6Result10 = require("initialize");
  if (stateFromStores != null) {
    userId1 = stateFromStores.userId;
  }
  closure_16 = require("useProfileWishlistReadState")({ ownerId: userId1, wishlistId, isVisible });
  const tmp2Result7 = require("useProfileWishlistReadState");
  [c17, c18] = analyticsLocations(
    createOrReuseGiftOrder.useState(() => new Set()),
    2,
  );
  let obj4 = { wishlistId, onAction: trackUserProfileWishlistAction, productLines: null, isVisible: null };
  let tmp38 = null;
  const tmp36 = analyticsLocations(
    createOrReuseGiftOrder.useState(() => new Set()),
    2,
  );
  if (null != stateFromStores) {
    tmp38 = memo(stateFromStores);
  }
  obj4.productLines = tmp38;
  obj4.isVisible = isVisible;
  require("useTrackUserProfileWishlistView")(obj4);
  _require = trackUserProfileWishlistAction((wishlistId) => {
    c6 = 0;
    c7 = 0;
    c5 = 0;
    return (function* (arg0) {
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
              closure_1_18((has) => {
                let addResult = has;
                if (!has.has(skuId.skuId)) {
                  const _Set = Set;
                  set = new Set(has);
                  addResult = set.add(skuId.skuId);
                }
                return addResult;
              });
              const obj5 = {
                action: memo3.WISHLIST_ITEM_CLICKED,
                wishlistId,
                skuId: wishlistId.skuId,
                productLines: null,
              };
              let _Set = Set;
              items = [wishlistId.skuProductLine];
              set = new Set(items);
              obj5.productLines = set;
              tmp4(obj5);
              const rootNavigationRef = wishlistId(context[39]).getRootNavigationRef();
              if (null != rootNavigationRef) {
                if (rootNavigationRef.isReady()) {
                  if (wishlistId.skuProductLine !== c18.PREMIUM) {
                    if (wishlistId.skuProductLine !== tmp53.SOCIAL_LAYER_GAME_ITEM) {
                      if (!closure_1_8) {
                        if (null != lockedRecipientUser) {
                          if (!wishlistId.isOwned) {
                            if (!set.has(wishlistId.skuId)) {
                              c1(context[41]).hideAllActionSheets();
                              const obj24 = c1(context[41]);
                              if (obj25.isCollectibleGiftingSupported()) {
                                const obj7 = {
                                  analyticsLocations: null,
                                  analyticsSource: null,
                                  screen: null,
                                  onNavigateAway: null,
                                };
                                const items1 = [c1(context[47]).USER_PROFILE_WISHLIST];
                                obj7.analyticsLocations = items1;
                                obj7.analyticsSource = c1(context[47]).USER_PROFILE_WISHLIST;
                                obj7.screen = constants3.FEATURED_PAGE;
                                obj7.onNavigateAway = function onNavigateAway() {
                                  closure_1(8067)({ userId: user.id, initialSection: constants.WISHLIST });
                                };
                                const result = wishlistId(context[54]).openCollectiblesShopMobile(obj7);
                                const obj28 = wishlistId(context[54]);
                                const obj8 = {
                                  skuId: wishlistId.skuId,
                                  analyticsLocations: null,
                                  lockedRecipientUser: null,
                                  giftingOrigin: null,
                                };
                                const items2 = [c1(context[47]).USER_PROFILE_WISHLIST];
                                obj8.analyticsLocations = items2;
                                obj8.lockedRecipientUser = lockedRecipientUser;
                                obj8.giftingOrigin = constants2.USER_PROFILE_WISHLIST;
                                wishlistId(context[55]).openShopGiftModal(obj8);
                                c7 = 3;
                                const obj10 = { value: undefined, done: true };
                                return obj10;
                              } else {
                                const _HermesInternal2 = HermesInternal;
                                v0 = 1;
                                const combined = "" + constants2.COLLECTIBLES_SHOP + "#itemSkuId=" + wishlistId.skuId;
                                country = 3;
                                c7 = 1;
                                const obj11 = {
                                  value: c1(context[56]).redirectWithHandoffToken(combined, {
                                    forceExternalBrowser: true,
                                  }),
                                  done: false,
                                };
                                return obj11;
                              }
                              obj25 = wishlistId(context[53]);
                            }
                          }
                        }
                      }
                      if (isShopStandalonePdpMobileEnabled) {
                        const obj13 = { skuId: wishlistId.skuId, analyticsLocations: null };
                        const items3 = [c1(context[47]).USER_PROFILE_WISHLIST];
                        obj13.analyticsLocations = items3;
                        const result1 = wishlistId(context[58]).openProductDetailsActionSheetForSku(obj13, "stack");
                        const tmp110Result = wishlistId(context[58]);
                      } else {
                        if (tmp110Result2.isCollectiblesShopOpen()) {
                          product = stateFromStores.getProduct(wishlistId.skuId);
                          if (null == product) {
                            country = 1;
                            c7 = 1;
                            const obj14 = {
                              value: wishlistId(context[54]).maybeFetchCollectiblesProduct(wishlistId.skuId),
                              done: false,
                            };
                            return obj14;
                          } else {
                            if (null != product) {
                              const obj19 = { product, analyticsLocations: null };
                              const items4 = [c1(context[47]).USER_PROFILE_WISHLIST];
                              obj19.analyticsLocations = items4;
                              const result2 = wishlistId(context[58]).openProductDetailsActionSheet(obj19, "stack");
                              const obj37 = wishlistId(context[58]);
                            } else {
                              c1(context[41]).hideAllActionSheets();
                              const obj36 = c1(context[41]);
                            }
                            c7 = 3;
                          }
                        } else {
                          const obj23 = {
                            analyticsLocations: null,
                            analyticsSource: null,
                            initialProductSkuId: null,
                            screen: null,
                          };
                          const items5 = [c1(context[47]).USER_PROFILE_WISHLIST];
                          obj23.analyticsLocations = items5;
                          obj23.analyticsSource = c1(context[47]).USER_PROFILE_WISHLIST;
                          obj23.initialProductSkuId = wishlistId.skuId;
                          obj23.screen = constants3.SHOP_ALL;
                          const result3 = wishlistId(context[54]).openCollectiblesShopMobile(obj23);
                          const obj34 = wishlistId(context[54]);
                        }
                        tmp110Result2 = wishlistId(context[54]);
                      }
                    } else {
                      const sku = wishlistId.sku;
                      closure_1 = sku;
                      if (sku == null) {
                        closure_1 = memo2.get(wishlistId.skuId);
                      }
                      let isAndroidResult = wishlistId(context[48]).isAndroid();
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
                        const socialLayerStorefrontSkuForApplication = wishlistId(
                          context[49],
                        ).fetchSocialLayerStorefrontSkuForApplication(tmp62.applicationId, wishlistId.skuId, obj27);
                        const obj18 = wishlistId(context[49]);
                      }
                      const obj17 = wishlistId(context[48]);
                      if (!closure_1_8) {
                        if (obj20.isSlayerSkuAvailableOnThisPlatform(tmp62)) {
                          if (null != lockedRecipientUser) {
                            c1(context[41]).hideAllActionSheets();
                            const obj54 = c1(context[41]);
                            const obj29 = {
                              skuId: wishlistId.skuId,
                              analyticsLocations: null,
                              lockedRecipientUser: null,
                              giftingOrigin: null,
                              onGiftModalDismiss: null,
                            };
                            const items6 = [c1(context[47]).USER_PROFILE_WISHLIST];
                            obj29.analyticsLocations = items6;
                            obj29.lockedRecipientUser = lockedRecipientUser;
                            obj29.giftingOrigin = constants2.USER_PROFILE_WISHLIST;
                            obj29.onGiftModalDismiss = function onGiftModalDismiss() {
                              closure_1(8067)({ userId: user.id, initialSection: constants.WISHLIST });
                            };
                            const result4 = wishlistId(context[51]).openSocialLayerStorefrontGiftModal(obj29);
                            const obj55 = wishlistId(context[51]);
                          }
                        }
                      }
                      obj20 = wishlistId(context[50]);
                      c1(context[41]).hideAllActionSheets();
                      const obj21 = c1(context[41]);
                      const obj31 = { skuId: wishlistId.skuId, analyticsLocations: null };
                      const items7 = [c1(context[47]).USER_PROFILE_WISHLIST];
                      obj31.analyticsLocations = items7;
                      const result5 = wishlistId(context[51]).openSocialLayerStorefrontProductDetailsModal(obj31);
                      const obj22 = wishlistId(context[51]);
                    }
                  } else if (closure_1_8) {
                    c1(context[41]).hideAllActionSheets();
                    const obj15 = c1(context[41]);
                    const result6 = wishlistId(context[42]).navigateToPremiumHomePage();
                    const obj16 = wishlistId(context[42]);
                  } else if (null != lockedRecipientUser) {
                    c1(context[41]).hideAllActionSheets();
                    closure_130_3 = tmp180;
                    const YEAR = constants3.YEAR;
                    closure_130_4 = YEAR;
                    const obj50 = c1(context[41]);
                    const planIdForPremiumType = wishlistId(context[43]).getPlanIdForPremiumType(tmp180, YEAR);
                    const obj51 = wishlistId(context[43]);
                    v0 = 2;
                    const obj32 = {
                      planId: planIdForPremiumType,
                      recipientUserId: lockedRecipientUser.id,
                      productId: wishlistId(context[44]).getProductIdForGift(planIdForPremiumType),
                    };
                    country = 5;
                    c7 = 1;
                    const obj33 = { value: v0(obj32), done: false };
                    return obj33;
                  }
                }
              }
              const obj48 = wishlistId(context[39]);
              const obj35 = { text: null };
              const intl4 = wishlistId(context[23]).intl;
              obj35.text = intl4.string(wishlistId(context[23]).t["rTU7/z"]);
              c1(context[40]).open("WISHLIST_ITEM_PRESS_ERROR", obj35);
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
              product = stateFromStores.getProduct(closure_130_0.skuId);
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
            const result7 = wishlistId(context[57]).captureBillingException(closure_130_5, obj40);
            const obj6 = wishlistId(context[57]);
            const obj42 = { text: null };
            const intl3 = wishlistId(context[23]).intl;
            obj42.text = intl3.string(wishlistId(context[23]).t["rTU7/z"]);
            c1(context[40]).open("WISHLIST_ITEM_PRESS_ERROR", obj42);
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
              const intl = wishlistId(context[23]).intl;
              obj44.title = intl.string(wishlistId(context[23]).t.R0RpRX);
              const intl2 = wishlistId(context[23]).intl;
              obj44.body = intl2.string(wishlistId(context[23]).t.CKsXk3);
              c1(context[45]).show(obj44);
              c7 = 3;
              const obj46 = { value: undefined, done: true };
              return obj46;
            } else if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 !== 2) {
              closure_130_2 = value;
              v0 = 0;
              const obj47 = {
                recipientUserId: lockedRecipientUser.id,
                premiumType: closure_130_3,
                planInterval: closure_130_4,
                order: closure_130_2,
                analyticsLocations: null,
              };
              const items8 = [c1(context[47]).USER_PROFILE_WISHLIST];
              obj47.analyticsLocations = items8;
              wishlistId(context[46]).openGiftModal(obj47);
              const obj45 = wishlistId(context[46]);
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
  const items14 = [wishlistId, trackUserProfileWishlistAction, tmp52Result2, stateFromStores5, memo3, , ,];
  let country;
  if (mobileStoreFront != null) {
    country = mobileStoreFront.country;
  }
  items14[5] = country;
  items14[6] = isShopStandalonePdpMobileEnabled;
  items14[7] = createOrReuseGiftOrder;
  constants = obj12.useCallback(function () {
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
  const callback = obj12.useCallback(() => {
    const obj = { action: constants.PRESS_EDIT_WISHLIST, wishlistId, productLines: null };
    let tmp4;
    if (null != stateFromStores) {
      tmp4 = getWishlistProductLines(tmp3);
    }
    obj.productLines = tmp4;
    trackUserProfileWishlistAction(obj);
    ActionSheetActionCreatorsDefault.openLazy(
      asyncRequireImpl(14619, dependencyMap.paths),
      "EditWishlistActionSheet",
      { wishlistId, analyticsContext: context, analyticsLocations },
      "stack",
    );
    const obj3 = { wishlistId, analyticsContext: context, analyticsLocations };
  }, items15);
  const callback1 = obj12.useCallback(() => {
    const obj = { action: constants.PRESS_ADD_WISHLIST_ITEM, wishlistId, productLines: null };
    items = [constants2.COLLECTIBLES];
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
    obj4.screen = constants.FEATURED_PAGE;
    const result = CollectiblesActionCreators.openCollectiblesShopMobile(obj4);
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
    return closure_23(WishlistEmptyState, {});
  } else {
    if (tmp28) {
      tmp28 = closure_23(tmp6(tmp3[35]).WishlistCountdownExposure, { location: "UserProfileWishlistGrid" });
    }
    const items17 = [tmp28, , ,];
    let tmp52Result = tmp52Result2;
    if (tmp52Result2) {
      if (!tmp21) {
        tmp21 = false === nsfwAllowed;
      }
      tmp52Result = tmp21;
    }
    if (tmp52Result) {
      let obj9 = { style: null, children: null };
      const items18 = [,];
      ({ disclaimer: arr21[0], disclaimerTop: arr21[1] } = tmp);
      obj9.style = items18;
      const items19 = [closure_23(tmp6(tmp3[61]).CircleInformationIcon, { size: "sm" })];
      let obj10 = { variant: "body-xs/medium", color: "text-subtle", children: stringResult };
      items19[1] = closure_23(tmp6(tmp3[22]).Text, obj10);
      obj9.children = items19;
      tmp52Result = closure_24(mobileStoreFront, obj9);
    }
    items17[1] = tmp52Result;
    let obj11 = { style: tmp.headerRow, children: null };
    let obj13 = { variant: "body-sm/semibold", color: "text-muted", children: null };
    let intl2 = tmp6(tmp3[23]).intl;
    let obj14 = { count: memo.length };
    obj13.children = intl2.formatToPlainString(tmp6(tmp3[23]).t.r6Y1Lg, obj14);
    const items20 = [closure_23(tmp6(tmp3[22]).Text, obj13)];
    if (tmp52Result2) {
      let obj15 = { style: tmp.headerButtons, children: null };
      let obj16 = {
        size: "sm",
        variant: "secondary",
        icon: closure_23(tmp6(tmp3[63]).PlusMediumIcon, { size: "xs" }),
        text: null,
        onPress: null,
      };
      let intl3 = tmp6(tmp3[23]).intl;
      obj16.text = intl3.string(tmp6(tmp3[23]).t.SDUwM0);
      obj16.onPress = callback1;
      const items21 = [closure_23(tmp6(tmp3[62]).Button, obj16)];
      let obj17 = { size: "sm", variant: "secondary", icon: null, onPress: null, accessibilityLabel: null };
      let obj18 = { size: "sm", color: tmp2(tmp3[19]).colors.CONTROL_SECONDARY_TEXT_DEFAULT };
      obj17.icon = closure_23(tmp6(tmp3[65]).PencilIcon, obj18);
      obj17.onPress = callback;
      let intl4 = tmp6(tmp3[23]).intl;
      obj17.accessibilityLabel = intl4.string(tmp6(tmp3[23]).t.bt75uw);
      items21[1] = closure_23(tmp6(tmp3[64]).IconButton, obj17);
      obj15.children = items21;
      tmp52Result2 = closure_24(tmp48, obj15);
    }
    let obj19 = { children: null };
    items20[1] = tmp52Result2;
    obj11.children = items20;
    items17[2] = closure_24(mobileStoreFront, obj11);
    let obj20 = { style: tmp.gridWrapper, children: null };
    let obj21 = { style: null, children: null };
    const items22 = [tmp.itemsContainer, tmp5];
    obj21.style = items22;
    obj21.children = tmp2Result2Result.map((sku) => {
      wishlistId = sku;
      if (null == sku.sku) {
        return null;
      } else {
        let shopUnpublishCountdown = null;
        if (c12) {
          shopUnpublishCountdown = null;
          if (obj.canRenderWishlistShopUnpublishCountdown(sku)) {
            shopUnpublishCountdown = wishlistId(context[33]).getShopUnpublishCountdown(sku.shopUnpublishedAt);
            const obj2 = wishlistId(context[33]);
          }
          obj = wishlistId(context[33]);
        }
        const obj5 = {
          backgroundColor: size(context[19]).colors.BACKGROUND_SURFACE_HIGH,
          sku: null,
          isOwned: null,
          onPress: null,
          size: null,
          wishlistOwnerId: null,
          isNew: null,
          shopUnpublishCountdown: null,
        };
        ({ sku: obj3.sku, isOwned: obj3.isOwned } = sku);
        obj5.onPress = function onPress() {
          return closure_19(closure_0);
        };
        obj5.size = size;
        let id;
        if (stateFromStores5 != null) {
          id = stateFromStores5.id;
        }
        obj5.wishlistOwnerId = id;
        const tmp9 = size(context[66]);
        let isWishlistItemNewResult = wishlistId(context[67]).isWishlistItemNew(sku.addedAt, closure_16);
        if (isWishlistItemNewResult) {
          isWishlistItemNewResult = !_undefined2.has(sku.skuId);
        }
        obj5.isNew = isWishlistItemNewResult;
        obj5.shopUnpublishCountdown = shopUnpublishCountdown;
        return closure_1_23(tmp9, obj5, sku.skuId);
      }
    });
    obj20.children = closure_23(mobileStoreFront, obj21);
    items17[3] = closure_23(mobileStoreFront, obj20);
    obj19.children = items17;
    return closure_24(closure_25, obj19);
  }
  const tmp2Result8 = require("useTrackUserProfileWishlistView");
}
export { WishlistEmptyState };
