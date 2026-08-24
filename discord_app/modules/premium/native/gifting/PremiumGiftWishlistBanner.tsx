// discord_app/modules/premium/native/gifting/PremiumGiftWishlistBanner.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { WishlistRecommendationReason as closure_7 } from "../../../wishlists/records/WishlistRecommendationRecord.tsx";
import GuildFeatures from "../../PremiumConstants.tsx";
import ME from "../../../../Constants.tsx";
import { CollectiblesMobileShopScreen as closure_12 } from "../../../collectibles/CollectiblesShopConstants.tsx";
import { UserProfileSections } from "../../../user_profile/Constants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ ScrollView: c5, View: closure_6 } = get_ActivityIndicator);
({ GiftingOrigin: closure_8, PremiumSubscriptionSKUToPremiumType: c9 } = GuildFeatures);
({ AnalyticEvents: c10, SKUProductLines: unpackModuleId } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let PX_16 = ThemesDefault.space.PX_16;
PX_16 = ThemesDefault.space.PX_16;
let closure_18 = createCacheKey.createStyles((width, height) => {
  let obj = { title: null, subtitle: null, placeholderRow: null, placeholder: null, wishlistItemShadow: null };
  obj = { marginBottom: ThemesDefault.space.PX_4, paddingHorizontal: PX_16 };
  obj[0] = obj;
  obj = { marginBottom: ThemesDefault.space.PX_12, paddingHorizontal: PX_16 };
  obj[1] = obj;
  obj[2] = { flexDirection: "row", gap: PX_16, paddingHorizontal: PX_16 };
  obj[3] = { width, height, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_SECONDARY_ALT };
  obj1 = { flexDirection: "row", gap: PX_16, paddingHorizontal: PX_16 };
  const obj2 = { width, height, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BACKGROUND_SECONDARY_ALT };
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_LOW);
  obj[4] = { width, height, borderRadius: ThemesDefault.radii.lg, backgroundColor: ThemesDefault.colors.BG_SURFACE_RAISED };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/premium/native/gifting/PremiumGiftWishlistBanner.tsx");

export const PremiumGiftWishlistBanner = function PremiumGiftWishlistBanner(giftRecipient) {
  giftRecipient = giftRecipient.giftRecipient;
  let _require = giftRecipient;
  let size;
  let WISHLIST_IN_DM_LENGTH_MOBILE;
  let wishlistAndRecommendations;
  let skusToUserAndReason;
  let status;
  let totalUnownedWishlistItemCount;
  let defaultWishlistId;
  let memo;
  let analyticsLocations;
  closure_10 = undefined;
  let selectPremiumGift;
  closure_12 = undefined;
  let name;
  let callback;
  let sku;
  size = { width: _require(WISHLIST_IN_DM_LENGTH_MOBILE[11]).COLLECTIBLES_SHOP_CARD_WIDTH, height: _require(WISHLIST_IN_DM_LENGTH_MOBILE[11]).COLLECTIBLES_SHOP_CARD_WIDTH };
  let tmp19Result = WISHLIST_IN_DM_LENGTH_MOBILE;
  WISHLIST_IN_DM_LENGTH_MOBILE = _require(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WISHLIST_IN_DM_LENGTH_MOBILE;
  let obj = _require(WISHLIST_IN_DM_LENGTH_MOBILE[13]);
  obj = { userId: giftRecipient.id, numItems: WISHLIST_IN_DM_LENGTH_MOBILE };
  const wishlistRecommendationsForSingleUser = obj.useWishlistRecommendationsForSingleUser(obj);
  wishlistAndRecommendations = wishlistRecommendationsForSingleUser.wishlistAndRecommendations;
  skusToUserAndReason = wishlistRecommendationsForSingleUser.skusToUserAndReason;
  status = wishlistRecommendationsForSingleUser.status;
  totalUnownedWishlistItemCount = wishlistRecommendationsForSingleUser.totalUnownedWishlistItemCount;
  defaultWishlistId = wishlistRecommendationsForSingleUser.defaultWishlistId;
  let items = [wishlistAndRecommendations, giftRecipient.id, skusToUserAndReason];
  memo = skusToUserAndReason.useMemo(() => {
    const found = wishlistAndRecommendations.filter((productLine) => productLine.productLine === constants.PREMIUM || productLine.productLine === constants.COLLECTIBLES || productLine.productLine === constants.SOCIAL_LAYER_GAME_ITEM);
    return found.map((sku) => {
      const obj = { sku, source: null };
      if (null != table[sku.id]) {
        if (tmp[sku.id][id.id] === closure_1_7.WISHLIST) {
          let POPULAR = closure_1_0(closure_1_2[12]).WishlistItemSource.WISHLIST;
        }
        obj[1] = POPULAR;
        return obj;
      }
      POPULAR = closure_1_0(closure_1_2[12]).WishlistItemSource.POPULAR;
    });
  }, items);
  let items1 = [totalUnownedWishlistItemCount, WISHLIST_IN_DM_LENGTH_MOBILE, memo];
  let tmp5 = size;
  const memo1 = skusToUserAndReason.useMemo(() => {
    let obj = lib(WISHLIST_IN_DM_LENGTH_MOBILE[14]);
    obj = { totalUnownedWishlistItemCount, wishlistInDmLength: WISHLIST_IN_DM_LENGTH_MOBILE, displayItems: memo };
    return obj.getBannerMode(obj);
  }, items1);
  analyticsLocations = size(WISHLIST_IN_DM_LENGTH_MOBILE[15])(size(WISHLIST_IN_DM_LENGTH_MOBILE[16]).WISHLIST_BANNER).analyticsLocations;
  closure_10 = skusToUserAndReason.useRef(false);
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
      let obj = size(WISHLIST_IN_DM_LENGTH_MOBILE[17]);
      obj = { gift_recipient_id: null, sku_ids: null, location_stack: null, product_lines: null };
      obj[0] = lib.id;
      obj[1] = memo.map((sku) => sku.sku.id);
      obj[2] = analyticsLocations;
      const _Array = Array;
      const _Set = Set;
      const set = new Set(memo.map((sku) => sku.sku.productLine));
      obj[3] = Array.from(set);
      obj.track(ref.IMPRESSION_GIFT_OPTION_WISHLIST_BANNER_VIEWED, obj);
      ref.current = true;
    }
  }, items2);
  const items3 = [giftRecipient.id, analyticsLocations];
  callback = skusToUserAndReason.useCallback(() => {
    size(WISHLIST_IN_DM_LENGTH_MOBILE[18])({ userId: lib.id, initialSection: name.WISHLIST, sourceAnalyticsLocations: analyticsLocations });
  }, items3);
  let obj2 = _require(WISHLIST_IN_DM_LENGTH_MOBILE[19]);
  selectPremiumGift = obj2.useSelectPremiumGift("PremiumGiftWishlistBanner");
  _require = undefined;
  _require = wishlistAndRecommendations((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c3 = 0;
    c2 = 0;
    return (function*(arg0, arg1) {
      if (c2 === 2) {
        c2 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c2 = 2;
          let openShopGiftModal = c3;
          if (0 === c3) {
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let id = lib;
              let items1 = WISHLIST_IN_DM_LENGTH_MOBILE;
              let prop;
              obj1 = { sku_id: null, item_source: null, wishlist_id: null, product_line: null };
              obj1[0] = lib.id;
              openShopGiftModal = lib;
              let str = "shop";
              if (closure_1 === lib(WISHLIST_IN_DM_LENGTH_MOBILE[12]).WishlistItemSource.WISHLIST) {
                str = "wishlist";
              }
              obj1[1] = str;
              let num3 = null;
              let tmp4 = null;
              if (tmp24 === openShopGiftModal(items1[12]).WishlistItemSource.WISHLIST) {
                tmp4 = closure_1_7;
              }
              obj1[2] = tmp4;
              obj1[3] = id.productLine;
              size(WISHLIST_IN_DM_LENGTH_MOBILE[17]).track(constants.GIFTING_ITEM_CLICKED, obj1);
              if (id.productLine !== selectPremiumGift.PREMIUM) {
                if (id.productLine !== tmp6.SOCIAL_LAYER_GAME_ITEM) {
                  const rootNavigationRef = openShopGiftModal(items1[21]).getRootNavigationRef();
                  if (num3 != rootNavigationRef) {
                    if (rootNavigationRef.isReady()) {
                      const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
                      const items = [tmp25(items1[16]).GIFT_SELECTION_MODAL_WISHLIST];
                      obj2[0] = items;
                      obj2[1] = tmp25(items1[16]).GIFT_SELECTION_MODAL_WISHLIST;
                      obj2[2] = constants2.FEATURED_PAGE;
                      const result = openShopGiftModal(items1[24]).openCollectiblesShopMobile(obj2);
                      const openShopGiftModalResult1 = openShopGiftModal(items1[24]);
                      openShopGiftModal = openShopGiftModal(items1[25]).openShopGiftModal;
                      const obj3 = { skuId: null, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null };
                      id = id.id;
                      obj3[0] = id;
                      prop = tmp25(items1[16]).GIFT_SELECTION_MODAL_WISHLIST;
                      items1 = [prop];
                      obj3[1] = items1;
                      obj3[2] = lib;
                      obj3[3] = memo.DM_CHANNEL_WISHLIST;
                      num3 = openShopGiftModal(obj3);
                      const openShopGiftModalResult2 = openShopGiftModal(items1[25]);
                    }
                  }
                  const openShopGiftModalResult = openShopGiftModal(items1[21]);
                  const obj4 = { key: "WISHLIST_ITEM_PRESS_ERROR", content: null };
                  const intl = openShopGiftModal(items1[23]).intl;
                  obj4[1] = intl.string(openShopGiftModal(items1[23]).t["rTU7/z"]);
                  num3 = tmp25(items1[22]).open(obj4);
                  const tmp25Result = tmp25(items1[22]);
                } else {
                  const obj5 = { skuId: null, analyticsLocations: null, lockedRecipientUser: null, giftingOrigin: null };
                  obj5[0] = id.id;
                  const items2 = [tmp25(items1[16]).GIFT_SELECTION_MODAL_WISHLIST];
                  obj5[1] = items2;
                  obj5[2] = lib;
                  obj5[3] = memo.DM_CHANNEL_WISHLIST;
                  const result1 = openShopGiftModal(items1[20]).openSocialLayerStorefrontGiftModal(obj5);
                  const openShopGiftModalResult3 = openShopGiftModal(items1[20]);
                }
              } else {
                c3 = 1;
                c2 = 1;
                const obj6 = { value: null, done: false };
                obj6[0] = closure_1_11(analyticsLocations[id.id]);
                return obj6;
              }
              const obj14 = size(WISHLIST_IN_DM_LENGTH_MOBILE[17]);
              tmp24 = closure_1;
            }
          } else {
            num3 = 1;
            if (arg0 === 1) {
              c2 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c2 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
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
  name = obj3.getName(giftRecipient);
  let obj4 = _require(WISHLIST_IN_DM_LENGTH_MOBILE[14]).BANNER_CONFIG_MOBILE[memo1];
  const subtitle = obj4.getSubtitle(name);
  const tmp12 = callback2(size.width, size.height);
  callback = tmp12;
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
    obj = { style: null, variant: "text-lg/semibold", children: null };
    obj[0] = tmp12.title;
    obj[2] = obj4.title;
    const items5 = [callback(tmp(tmp19Result[27]).Text, obj), , ];
    obj1 = { style: null, variant: "text-sm/medium", color: "text-muted", children: null };
    obj1[0] = tmp12.subtitle;
    obj1[3] = subtitle;
    items5[1] = callback(tmp(tmp19Result[27]).Text, obj1);
    if (tmp13) {
      obj2 = { style: null, children: null };
      obj2[0] = tmp12.placeholderRow;
      let _Array = Array;
      obj3 = { length: null };
      obj3[0] = WISHLIST_IN_DM_LENGTH_MOBILE;
      obj2[1] = Array.from(obj3, (arg0, arg1) => lib2(totalUnownedWishlistItemCount, { style: lib2.placeholder }, arg1));
      let tmp17Result = tmp19(tmp18, obj2);
    } else {
      obj4 = { horizontal: true, showsHorizontalScrollIndicator: false, snapToInterval: null, snapToAlignment: "start", decelerationRate: "fast", nestedScrollEnabled: true, contentContainerStyle: null, children: null };
      obj4[2] = tmp(tmp19Result[11]).COLLECTIBLES_SHOP_CARD_WIDTH + PX_16;
      let obj5 = { gap: null, paddingHorizontal: null, paddingVertical: null };
      obj5[0] = PX_16;
      obj5[1] = PX_16;
      obj5[2] = tmp5(tmp19Result[9]).space.PX_8;
      obj4[6] = obj5;
      const items6 = [
        substr.map((sku) => {
              sku = sku.sku;
              const source = sku.source;
              obj = { style: lib2.wishlistItemShadow, children: lib2(size(WISHLIST_IN_DM_LENGTH_MOBILE[28]), obj) };
              obj = {
                sku,
                size: source,
                source,
                recipientName: name,
                onPress() {
                  return closure_1_12(sku, source);
                }
              };
              return lib2(totalUnownedWishlistItemCount, obj, sku.id);
            }),

      ];
      if (null == sku) {
        items6[1] = tmp23;
        obj4[7] = items6;
        tmp17Result = tmp17(tmp20, obj4);
      } else {
        let obj6 = { style: null, children: null };
        obj6[0] = tmp12.wishlistItemShadow;
        if (tmp14) {
          tmp5 = tmp5(tmp19Result[29]);
          const obj7 = { sku: null, size: null, recipientName: null, overflowCount: null, onPress: null };
          sku = sku.sku;
          obj7[0] = sku;
          obj7[1] = size;
          obj7[2] = name;
          totalUnownedWishlistItemCount = totalUnownedWishlistItemCount - WISHLIST_IN_DM_LENGTH_MOBILE;
          obj7[3] = totalUnownedWishlistItemCount + 1;
          obj7[4] = callback;
          tmp19Result = tmp19(tmp5, obj7);
          obj6[1] = tmp19Result;
          let tmp24 = obj6;
        } else {
          const obj8 = { sku: null, size: null, source: null, recipientName: null, onPress: null };
          obj8[0] = sku.sku;
          obj8[1] = size;
          obj8[2] = sku.source;
          obj8[3] = name;
          obj8[4] = function onPress() {
            return callback(sku.sku, sku.source);
          };
          obj6[1] = tmp19(tmp5(tmp19Result[28]), obj8);
          tmp24 = obj6;
        }
        tmp19(tmp18, tmp24);
      }
      tmp20 = status;
    }
    const obj9 = { children: null };
    items5[2] = tmp17Result;
    obj9[0] = items5;
    return sku(totalUnownedWishlistItemCount, obj9);
  }
  const tmp6 = size(WISHLIST_IN_DM_LENGTH_MOBILE[15]);
};