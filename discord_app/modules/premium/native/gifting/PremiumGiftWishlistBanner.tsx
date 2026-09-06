// === Module 10791: PremiumGiftWishlistBanner ===

// Module 10791 (PremiumGiftWishlistBanner)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import WishlistBannerUtils from "WishlistBannerUtils" /* 10796 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_7 = fn(7227).WishlistRecommendationReason;
const PremiumConstants = fn(1373);
({ GiftingOrigin: closure_8, PremiumSubscriptionSKUToPremiumType: closure_9 } = PremiumConstants);
const Constants = fn(1074);
({ AnalyticEvents: c10, SKUProductLines: closure_11 } = Constants);
let closure_12 = fn(1076).CollectiblesMobileShopScreen;
const UserProfileSections = fn(8183).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4560);
let closure_18 = createStyles.createStyles((width, height) => {
  let obj = { title: null, subtitle: null, placeholderRow: null, placeholder: null, wishlistItemShadow: null };
  obj = { marginBottom: nativeDefault.space.PX_4, paddingHorizontal: PX_16 };
  obj.title = obj;
  obj = { marginBottom: nativeDefault.space.PX_12, paddingHorizontal: PX_16 };
  obj.subtitle = obj;
  obj.placeholderRow = { flexDirection: "row", gap: PX_16, paddingHorizontal: PX_16 };
  const size = { width, height, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT };
  obj.placeholder = size;
  const size1 = { width, height, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  obj.wishlistItemShadow = size1;
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/premium/native/gifting/PremiumGiftWishlistBanner.tsx");

export const PremiumGiftWishlistBanner = function PremiumGiftWishlistBanner(giftRecipient) {
  giftRecipient = giftRecipient.giftRecipient;
  _require = giftRecipient;
  let WISHLIST_IN_DM_LENGTH_MOBILE;
  let sku;
  const size = { width: require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH, height: require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH };
  let tmp19Result = WISHLIST_IN_DM_LENGTH_MOBILE;
  WISHLIST_IN_DM_LENGTH_MOBILE = require("useWishlistHooks").WISHLIST_IN_DM_LENGTH_MOBILE;
  require("useWishlistRecommendations");
  let obj = { userId: giftRecipient.id, numItems: WISHLIST_IN_DM_LENGTH_MOBILE };
  const wishlistRecommendationsForSingleUser = obj.useWishlistRecommendationsForSingleUser(obj);
  const wishlistAndRecommendations = wishlistRecommendationsForSingleUser.wishlistAndRecommendations;
  const skusToUserAndReason = wishlistRecommendationsForSingleUser.skusToUserAndReason;
  const status = wishlistRecommendationsForSingleUser.status;
  let totalUnownedWishlistItemCount = wishlistRecommendationsForSingleUser.totalUnownedWishlistItemCount;
  const defaultWishlistId = wishlistRecommendationsForSingleUser.defaultWishlistId;
  let items = [wishlistAndRecommendations, giftRecipient.id, skusToUserAndReason];
  const memo = skusToUserAndReason.useMemo(() => {
    const found = wishlistAndRecommendations.filter((productLine) => productLine.productLine === constants.PREMIUM || productLine.productLine === constants.COLLECTIBLES || productLine.productLine === constants.SOCIAL_LAYER_GAME_ITEM);
    return found.map((sku) => {
      const obj = { sku, source: null };
      if (null != skusToUserAndReason[sku.id]) {
        if (tmp[sku.id][user.id] === defaultWishlistId.WISHLIST) {
          let POPULAR = closure_0(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WishlistItemSource.WISHLIST;
        }
        obj.source = POPULAR;
        return obj;
      }
      POPULAR = closure_0(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WishlistItemSource.POPULAR;
    });
  }, items);
  let items1 = [totalUnownedWishlistItemCount, WISHLIST_IN_DM_LENGTH_MOBILE, memo];
  let tmp5 = size;
  const memo1 = skusToUserAndReason.useMemo(() => {
    const obj = { totalUnownedWishlistItemCount, wishlistInDmLength: WISHLIST_IN_DM_LENGTH_MOBILE, displayItems: memo };
    return obj.getBannerMode(obj);
  }, items1);
  const analyticsLocations = size(WISHLIST_IN_DM_LENGTH_MOBILE[15])(size(WISHLIST_IN_DM_LENGTH_MOBILE[16]).WISHLIST_BANNER).analyticsLocations;
  skusToUserAndReason.useRef(false);
  let items2 = [status, memo, giftRecipient.id, analyticsLocations];
  const effect = skusToUserAndReason.useEffect(() => {
    const current = ref.current;
    let tmp2 = !current;
    if (!current) {
      tmp2 = "success" === status;
    }
    if (tmp2) {
      tmp2 = memo.length > 0;
    }
    if (tmp2) {
      const obj = { gift_recipient_id: user.id, sku_ids: memo.map((sku) => sku.sku.id), location_stack: analyticsLocations, product_lines: null };
      const _Array = Array;
      const _Set = Set;
      const set = new Set(memo.map((sku) => sku.sku.productLine));
      obj.product_lines = Array.from(set);
      obj.track(constants.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, obj);
      ref.current = true;
    }
  }, items2);
  const items3 = [giftRecipient.id, analyticsLocations];
  const callback = skusToUserAndReason.useCallback(() => {
    showUserProfileActionSheetDefault({ userId: user.id, initialSection: UserProfileSections.WISHLIST, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  let obj2 = require("useSelectPremiumGift");
  const selectPremiumGift = obj2.useSelectPremiumGift("PremiumGiftWishlistBanner");
  _require = wishlistAndRecommendations((lockedRecipientUser, arg1) => {
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, value) {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
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
          c2 = 2;
          let openShopGiftModal = c3;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              let id = lockedRecipientUser;
              let items1 = WISHLIST_IN_DM_LENGTH_MOBILE;
              let prop;
              const obj1 = { sku_id: lockedRecipientUser.id, item_source: null, wishlist_id: null, product_line: null };
              openShopGiftModal = lockedRecipientUser;
              let str = "shop";
              if (closure_1 === lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WishlistItemSource.WISHLIST) {
                str = "wishlist";
              }
              obj1.item_source = str;
              let num3 = null;
              let tmp4 = null;
              if (tmp23 === openShopGiftModal(items1[12]).WishlistItemSource.WISHLIST) {
                tmp4 = defaultWishlistId;
              }
              obj1.wishlist_id = tmp4;
              obj1.product_line = id.productLine;
              size(WISHLIST_IN_DM_LENGTH_MOBILE[17]).track(constants.GIFTING_ITEM_CLICKED, obj1);
              if (id.productLine !== selectPremiumGift.PREMIUM) {
                if (id.productLine !== tmp6.SOCIAL_LAYER_GAME_ITEM) {
                  const rootNavigationRef = openShopGiftModal(items1[21]).getRootNavigationRef();
                  if (num3 != rootNavigationRef) {
                    if (rootNavigationRef.isReady()) {
                      const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
                      const items = [tmp24(items1[16]).GIFT_SELECTION_MODAL_WISHLIST];
                      obj2.analyticsLocations = items;
                      obj2.analyticsSource = tmp24(items1[16]).GIFT_SELECTION_MODAL_WISHLIST;
                      obj2.screen = constants2.FEATURED_PAGE;
                      const result = openShopGiftModal(items1[24]).openCollectiblesShopMobile(obj2);
                      const openShopGiftModalResult1 = openShopGiftModal(items1[24]);
                      openShopGiftModal = openShopGiftModal(items1[25]).openShopGiftModal;
                      const obj3 = { skuId: null, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null };
                      id = id.id;
                      obj3.skuId = id;
                      prop = tmp24(items1[16]).GIFT_SELECTION_MODAL_WISHLIST;
                      items1 = [prop];
                      obj3.analyticsLocations = items1;
                      obj3.lockedRecipientUser = lockedRecipientUser;
                      obj3.giftingOrigin = memo.DM_CHANNEL_WISHLIST;
                      num3 = openShopGiftModal(obj3);
                      const openShopGiftModalResult2 = openShopGiftModal(items1[25]);
                    }
                  }
                  const openShopGiftModalResult = openShopGiftModal(items1[21]);
                  const obj4 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
                  const intl = openShopGiftModal(items1[23]).intl;
                  obj4.content = intl.string(openShopGiftModal(items1[23]).t["rTU7/z"]);
                  num3 = tmp24(items1[22]).open(obj4);
                  const tmp24Result = tmp24(items1[22]);
                } else {
                  const obj5 = { skuId: id.id, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null };
                  const items2 = [tmp24(items1[16]).GIFT_SELECTION_MODAL_WISHLIST];
                  obj5.analyticsLocations = items2;
                  obj5.lockedRecipientUser = lockedRecipientUser;
                  obj5.giftingOrigin = memo.DM_CHANNEL_WISHLIST;
                  const result1 = openShopGiftModal(items1[20]).openSocialLayerStorefrontGiftModal(obj5);
                  const openShopGiftModalResult3 = openShopGiftModal(items1[20]);
                }
              } else {
                c3 = 1;
                c2 = 1;
                const obj6 = { value: closure_1_11(analyticsLocations[id.id]), done: false };
                return obj6;
              }
              const obj14 = size(WISHLIST_IN_DM_LENGTH_MOBILE[17]);
              tmp23 = closure_1;
            }
          } else {
            num3 = 1;
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value, done: true };
              return obj;
            }
          }
          c2 = 3;
        } catch (tmp18) {
          c2 = tmp;
          throw tmp18;
        }
      }
    })();
  });
  const items4 = [giftRecipient, defaultWishlistId, selectPremiumGift];
  closure_12 = skusToUserAndReason.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items4);
  let obj3 = size(WISHLIST_IN_DM_LENGTH_MOBILE[26]);
  const name = obj3.getName(giftRecipient);
  let obj4 = require("WishlistBannerUtils").BANNER_CONFIG_MOBILE[memo1];
  const subtitle = obj4.getSubtitle(name);
  const tmp12 = closure_18(size.width, size.height);
  closure_14 = tmp12;
  if ("error" === status) {
    return null;
  } else {
    let tmp13 = "loading" === status;
    if (!tmp13) {
      tmp13 = 0 === memo.length;
    }
    let substr = memo;
    if (totalUnownedWishlistItemCount > WISHLIST_IN_DM_LENGTH_MOBILE) {
      substr = memo.slice(0, WISHLIST_IN_DM_LENGTH_MOBILE - 1);
    }
    sku = null;
    if (totalUnownedWishlistItemCount > WISHLIST_IN_DM_LENGTH_MOBILE) {
      sku = memo[WISHLIST_IN_DM_LENGTH_MOBILE - 1];
    }
    obj = { style: tmp12.title, variant: "text-lg/semibold", children: obj4.title };
    const items5 = [closure_14(tmp(tmp19Result[27]).Text, obj), , ];
    let obj1 = { style: tmp12.subtitle, variant: "text-sm/medium", color: "text-muted", children: subtitle };
    items5[1] = closure_14(tmp(tmp19Result[27]).Text, obj1);
    if (tmp13) {
      obj2 = { style: tmp12.placeholderRow, children: null };
      let _Array = Array;
      obj3 = { length: WISHLIST_IN_DM_LENGTH_MOBILE };
      obj2.children = Array.from(obj3, (arg0, arg1) => closure_2_14(timestampProducer, { style: closure_14.placeholder }, arg1));
      let tmp17Result = tmp19(tmp18, obj2);
    } else {
      obj4 = { horizontal: true, showsHorizontalScrollIndicator: false, snapToInterval: tmp(tmp19Result[11]).COLLECTIBLES_SHOP_CARD_WIDTH + PX_16, snapToAlignment: "start", decelerationRate: "fast", nestedScrollEnabled: true, contentContainerStyle: null, children: null };
      let obj5 = { gap: PX_16, paddingHorizontal: PX_16, paddingVertical: tmp5(tmp19Result[9]).space.PX_8 };
      obj4.contentContainerStyle = obj5;
      const items6 = [
        substr.map((sku) => {
              sku = sku.sku;
              const source = sku.source;
              let obj = { style: closure_14.wishlistItemShadow, children: null };
              obj = {
                sku,
                size: source,
                source,
                recipientName: name,
                onPress() {
                  return closure_12(sku, source);
                }
              };
              obj.children = closure_14(size(WISHLIST_IN_DM_LENGTH_MOBILE[28]), obj);
              return closure_14(totalUnownedWishlistItemCount, obj, sku.id);
            }),

      ];
      if (null == sku) {
        items6[1] = tmp23;
        obj4.children = items6;
        tmp17Result = tmp17(tmp20, obj4);
      } else {
        let obj6 = { style: tmp12.wishlistItemShadow, children: null };
        if (tmp14) {
          tmp5 = tmp5(tmp19Result[29]);
          const obj7 = { sku: null, size: null, recipientName: null, overflowCount: null, onPress: null };
          sku = sku.sku;
          obj7.sku = sku;
          obj7.size = size;
          obj7.recipientName = name;
          totalUnownedWishlistItemCount = totalUnownedWishlistItemCount - WISHLIST_IN_DM_LENGTH_MOBILE;
          obj7.overflowCount = totalUnownedWishlistItemCount + 1;
          obj7.onPress = callback;
          tmp19Result = tmp19(tmp5, obj7);
          obj6.children = tmp19Result;
          let tmp24 = obj6;
        } else {
          const obj8 = {
            sku: sku.sku,
            size,
            source: sku.source,
            recipientName: name,
            onPress() {
                      return closure_12(sku.sku, sku.source);
                    }
          };
          obj6.children = tmp19(tmp5(tmp19Result[28]), obj8);
          tmp24 = obj6;
        }
        tmp19(tmp18, tmp24);
      }
      tmp20 = status;
    }
    const obj9 = { children: null };
    items5[2] = tmp17Result;
    obj9.children = items5;
    return sku(totalUnownedWishlistItemCount, obj9);
  }
  const tmp6 = size(WISHLIST_IN_DM_LENGTH_MOBILE[15]);
};