// discord_app/modules/premium/native/gifting/PremiumGiftWishlistBanner.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import showUserProfileActionSheetDefault from "../../../user_profile/native/showUserProfileActionSheet.tsx";
import WishlistBannerUtils from "../../gifting/utils/WishlistBannerUtils.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
let closure_7 = fn(7423).WishlistRecommendationReason;
const PremiumConstants = fn(1374);
({ GiftingOrigin: closure_8, PremiumSubscriptionSKUToPremiumType: closure_9 } = PremiumConstants);
const Constants = fn(1074);
({ AnalyticEvents: c10, SKUProductLines: closure_11 } = Constants);
let closure_12 = fn(1076).CollectiblesMobileShopScreen;
const UserProfileSections = fn(8413).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4722);
let closure_18 = createStyles.createStyles((width, height) => {
  const obj = {
    title: { marginBottom: nativeDefault.space.PX_4, paddingHorizontal: PX_16 },
    subtitle: null,
    placeholderRow: null,
    placeholder: null,
    wishlistItemShadow: null,
  };
  const obj2 = { marginBottom: nativeDefault.space.PX_4, paddingHorizontal: PX_16 };
  obj.subtitle = { marginBottom: nativeDefault.space.PX_12, paddingHorizontal: PX_16 };
  obj.placeholderRow = { flexDirection: "row", gap: PX_16, paddingHorizontal: PX_16 };
  const size = {
    width,
    height,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_SECONDARY_ALT,
  };
  obj.placeholder = size;
  const size1 = {
    width,
    height,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BG_SURFACE_RAISED,
  };
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
  const size = {
    width: require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH,
    height: require("CollectiblesShopCardV2").COLLECTIBLES_SHOP_CARD_WIDTH,
  };
  let tmp19Result3 = WISHLIST_IN_DM_LENGTH_MOBILE;
  WISHLIST_IN_DM_LENGTH_MOBILE = require("useWishlistHooks").WISHLIST_IN_DM_LENGTH_MOBILE;
  const wishlistRecommendationsForSingleUser =
    require("useWishlistRecommendations").useWishlistRecommendationsForSingleUser({
      userId: giftRecipient.id,
      numItems: WISHLIST_IN_DM_LENGTH_MOBILE,
    });
  const wishlistAndRecommendations = wishlistRecommendationsForSingleUser.wishlistAndRecommendations;
  const skusToUserAndReason = wishlistRecommendationsForSingleUser.skusToUserAndReason;
  const status = wishlistRecommendationsForSingleUser.status;
  let totalUnownedWishlistItemCount = wishlistRecommendationsForSingleUser.totalUnownedWishlistItemCount;
  const defaultWishlistId = wishlistRecommendationsForSingleUser.defaultWishlistId;
  let items = [wishlistAndRecommendations, giftRecipient.id, skusToUserAndReason];
  const memo = skusToUserAndReason.useMemo(() => {
    const found = wishlistAndRecommendations.filter(
      (productLine) =>
        productLine.productLine === constants.PREMIUM ||
        productLine.productLine === constants.COLLECTIBLES ||
        productLine.productLine === constants.SOCIAL_LAYER_GAME_ITEM,
    );
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
  const memo1 = skusToUserAndReason.useMemo(
    () =>
      WishlistBannerUtils.getBannerMode({
        totalUnownedWishlistItemCount,
        wishlistInDmLength: WISHLIST_IN_DM_LENGTH_MOBILE,
        displayItems: memo,
      }),
    items1,
  );
  let obj = require("useWishlistRecommendations");
  let obj2 = { userId: giftRecipient.id, numItems: WISHLIST_IN_DM_LENGTH_MOBILE };
  const analyticsLocations = size(WISHLIST_IN_DM_LENGTH_MOBILE[15])(
    size(WISHLIST_IN_DM_LENGTH_MOBILE[16]).WISHLIST_BANNER,
  ).analyticsLocations;
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
      const obj2 = {
        gift_recipient_id: user.id,
        sku_ids: memo.map((sku) => sku.sku.id),
        location_stack: analyticsLocations,
        product_lines: null,
      };
      const _Array = Array;
      const _Set = Set;
      const set = new Set(memo.map((sku) => sku.sku.productLine));
      obj2.product_lines = Array.from(set);
      AnalyticsUtilsDefault.track(constants.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, obj2);
      ref.current = true;
    }
  }, items2);
  const items3 = [giftRecipient.id, analyticsLocations];
  const callback = skusToUserAndReason.useCallback(() => {
    showUserProfileActionSheetDefault({
      userId: user.id,
      initialSection: UserProfileSections.WISHLIST,
      sourceAnalyticsLocations: analyticsLocations,
    });
  }, items3);
  const tmp6 = size(WISHLIST_IN_DM_LENGTH_MOBILE[15]);
  const selectPremiumGift = require("useSelectPremiumGift").useSelectPremiumGift("PremiumGiftWishlistBanner");
  _require = wishlistAndRecommendations((lockedRecipientUser, arg1) => {
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function* (arg0, value) {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
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
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let id = lockedRecipientUser;
              let items1 = WISHLIST_IN_DM_LENGTH_MOBILE;
              let prop;
              const obj4 = { sku_id: lockedRecipientUser.id, item_source: null, wishlist_id: null, product_line: null };
              openShopGiftModal = lockedRecipientUser;
              let str = "shop";
              if (closure_1 === lockedRecipientUser(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WishlistItemSource.WISHLIST) {
                str = "wishlist";
              }
              obj4.item_source = str;
              let num3 = null;
              let tmp4 = null;
              if (closure_1 === openShopGiftModal(items1[12]).WishlistItemSource.WISHLIST) {
                tmp4 = defaultWishlistId;
              }
              obj4.wishlist_id = tmp4;
              obj4.product_line = id.productLine;
              size(WISHLIST_IN_DM_LENGTH_MOBILE[17]).track(constants.GIFTING_ITEM_CLICKED, obj4);
              if (id.productLine !== selectPremiumGift.PREMIUM) {
                if (id.productLine !== tmp6.SOCIAL_LAYER_GAME_ITEM) {
                  const rootNavigationRef = openShopGiftModal(items1[21]).getRootNavigationRef();
                  if (num3 != rootNavigationRef) {
                    if (rootNavigationRef.isReady()) {
                      const obj5 = { analyticsLocations: null, analyticsSource: null, screen: null };
                      const items = [size(items1[16]).GIFT_SELECTION_MODAL_WISHLIST];
                      obj5.analyticsLocations = items;
                      obj5.analyticsSource = size(items1[16]).GIFT_SELECTION_MODAL_WISHLIST;
                      obj5.screen = constants2.FEATURED_PAGE;
                      const result = openShopGiftModal(items1[24]).openCollectiblesShopMobile(obj5);
                      const openShopGiftModalResult1 = openShopGiftModal(items1[24]);
                      openShopGiftModal = openShopGiftModal(items1[25]).openShopGiftModal;
                      const obj6 = {
                        skuId: null,
                        analyticsLocations: null,
                        lockedRecipientUser: null,
                        giftingOrigin: null,
                      };
                      id = id.id;
                      obj6.skuId = id;
                      prop = size(items1[16]).GIFT_SELECTION_MODAL_WISHLIST;
                      items1 = [prop];
                      obj6.analyticsLocations = items1;
                      obj6.lockedRecipientUser = lockedRecipientUser;
                      obj6.giftingOrigin = memo.DM_CHANNEL_WISHLIST;
                      num3 = openShopGiftModal(obj6);
                      const openShopGiftModalResult2 = openShopGiftModal(items1[25]);
                    }
                  }
                  const openShopGiftModalResult = openShopGiftModal(items1[21]);
                  const obj7 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
                  const intl = openShopGiftModal(items1[23]).intl;
                  obj7.content = intl.string(openShopGiftModal(items1[23]).t["rTU7/z"]);
                  num3 = size(items1[22]).open(obj7);
                  const tmp24Result = size(items1[22]);
                } else {
                  const obj8 = {
                    skuId: id.id,
                    analyticsLocations: null,
                    lockedRecipientUser: null,
                    giftingOrigin: null,
                  };
                  const items2 = [size(items1[16]).GIFT_SELECTION_MODAL_WISHLIST];
                  obj8.analyticsLocations = items2;
                  obj8.lockedRecipientUser = lockedRecipientUser;
                  obj8.giftingOrigin = memo.DM_CHANNEL_WISHLIST;
                  const result1 = openShopGiftModal(items1[20]).openSocialLayerStorefrontGiftModal(obj8);
                  const openShopGiftModalResult3 = openShopGiftModal(items1[20]);
                }
              } else {
                c3 = 1;
                c2 = 1;
                const obj9 = { value: closure_1_11(analyticsLocations[id.id]), done: false };
                return obj9;
              }
              const obj14 = size(WISHLIST_IN_DM_LENGTH_MOBILE[17]);
            }
          } else {
            num3 = 1;
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj = { value, done: true };
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
  closure_12 = skusToUserAndReason.useCallback(function () {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items4);
  let obj3 = require("useSelectPremiumGift");
  const name = size(WISHLIST_IN_DM_LENGTH_MOBILE[26]).getName(giftRecipient);
  let obj5 = require("WishlistBannerUtils").BANNER_CONFIG_MOBILE[memo1];
  const subtitle = obj5.getSubtitle(name);
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
    let obj6 = { style: tmp12.title, variant: "text-lg/semibold", children: obj5.title };
    const items5 = [closure_14(tmp(tmp19Result3[27]).Text, obj6), ,];
    let obj7 = { style: tmp12.subtitle, variant: "text-sm/medium", color: "text-muted", children: subtitle };
    items5[1] = closure_14(tmp(tmp19Result3[27]).Text, obj7);
    if (tmp13) {
      let obj8 = { style: tmp12.placeholderRow, children: null };
      let _Array = Array;
      let obj9 = { length: WISHLIST_IN_DM_LENGTH_MOBILE };
      obj8.children = Array.from(obj9, (arg0, arg1) =>
        closure_2_14(timestampProducer, { style: closure_14.placeholder }, arg1),
      );
      let tmp17Result = tmp19(tmp18, obj8);
    } else {
      const obj10 = {
        horizontal: true,
        showsHorizontalScrollIndicator: false,
        snapToInterval: tmp(tmp19Result3[11]).COLLECTIBLES_SHOP_CARD_WIDTH + PX_16,
        snapToAlignment: "start",
        decelerationRate: "fast",
        nestedScrollEnabled: true,
        contentContainerStyle: null,
        children: null,
      };
      const obj11 = { gap: PX_16, paddingHorizontal: PX_16, paddingVertical: tmp5(tmp19Result3[9]).space.PX_8 };
      obj10.contentContainerStyle = obj11;
      const items6 = [
        substr.map((sku) => {
          sku = sku.sku;
          const source = sku.source;
          const obj = {
            style: closure_14.wishlistItemShadow,
            children: closure_14(size(WISHLIST_IN_DM_LENGTH_MOBILE[28]), {
              sku,
              size: source,
              source,
              recipientName: name,
              onPress() {
                return closure_12(sku, source);
              },
            }),
          };
          return closure_14(totalUnownedWishlistItemCount, obj, sku.id);
        }),
      ];
      if (null == sku) {
        items6[1] = tmp23;
        obj10.children = items6;
        tmp17Result = tmp17(tmp20, obj10);
      } else {
        const obj12 = { style: tmp12.wishlistItemShadow, children: null };
        if (tmp14) {
          tmp5 = tmp5(tmp19Result3[29]);
          const obj13 = { sku: null, size: null, recipientName: null, overflowCount: null, onPress: null };
          sku = sku.sku;
          obj13.sku = sku;
          obj13.size = size;
          obj13.recipientName = name;
          totalUnownedWishlistItemCount = totalUnownedWishlistItemCount - WISHLIST_IN_DM_LENGTH_MOBILE;
          obj13.overflowCount = totalUnownedWishlistItemCount + 1;
          obj13.onPress = callback;
          tmp19Result3 = tmp19(tmp5, obj13);
          obj12.children = tmp19Result3;
          let tmp24 = obj12;
        } else {
          let obj14 = {
            sku: sku.sku,
            size,
            source: sku.source,
            recipientName: name,
            onPress() {
              return closure_12(sku.sku, sku.source);
            },
          };
          obj12.children = tmp19(tmp5(tmp19Result3[28]), obj14);
          tmp24 = obj12;
        }
        tmp19(tmp18, tmp24);
      }
      tmp20 = status;
    }
    const obj15 = { children: null };
    items5[2] = tmp17Result;
    obj15.children = items5;
    return sku(totalUnownedWishlistItemCount, obj15);
  }
  let obj4 = size(WISHLIST_IN_DM_LENGTH_MOBILE[26]);
};
