// === Module 10677: CollectiblesShopGiftPurchaseSection ===

// Module 10677 (CollectiblesShopGiftPurchaseSection)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "initialize" /* 8492 */;
import { useNativeCheckoutStore } from "context" /* 7103 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;

let require = arg1;
({ AnalyticEvents: c9, MarketingURLs: c10 } = ME);
({ GiftingOrigin: unpackModuleId, PremiumGiftStyles: closure_12 } = GuildFeatures);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let closure_15 = createCacheKey.createStyles((arg0) => {
  let obj = { container: null, disclaimer: null };
  obj = { paddingBottom: ThemesDefault.space.PX_12 + arg0, paddingTop: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_8, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(ThemesDefault.shadows.SHADOW_TOP_HIGH);
  obj[0] = obj;
  obj[1] = { includeFontPadding: true };
  return obj;
});
let closure_16 = { NOT_STARTED: "not_started", PURCHASING: "purchasing", SUCCEEDED: "succeeded", FAILED: "failed" };
const result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx");

export default function CollectiblesShopGiftPurchaseSection(disabled) {
  const product = disabled.product;
  require = product;
  const giftOptions = disabled.giftOptions;
  const baseAnalyticsFields = disabled.baseAnalyticsFields;
  const giftingOrigin = disabled.giftingOrigin;
  let callback;
  let first;
  closure_6 = undefined;
  let awaitSync;
  useNativeCheckoutStore = undefined;
  const tmp3 = callback3(giftOptions(baseAnalyticsFields[11])().insets.bottom);
  const GiftingBadgeExperiment = require(baseAnalyticsFields[12]).GiftingBadgeExperiment;
  let obj = require(baseAnalyticsFields[13]);
  const items = [awaitSync];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { nextTier: getNextTier(product(baseAnalyticsFields[14]).BadgeId.GIFTING), giftsToNextTier: getRemainingToNextTier(product(baseAnalyticsFields[14]).BadgeId.GIFTING), badgeProgress: null };
    ({ getNextTier, getRemainingToNextTier, getSingleRequirementProgress } = awaitSync);
    const singleRequirementProgress = getSingleRequirementProgress(product(baseAnalyticsFields[14]).BadgeId.GIFTING);
    let current;
    if (singleRequirementProgress != null) {
      current = singleRequirementProgress.current;
    }
    obj[2] = current;
    return obj;
  });
  ({ nextTier, badgeProgress: c4 } = stateFromStoresObject);
  obj1 = first;
  const tmp7 = callback(first.useState(constants.NOT_STARTED), 2);
  first = tmp7[0];
  closure_6 = tmp7[1];
  const tmp9 = useNativeCheckoutStore((orderRecord) => orderRecord.orderRecord);
  awaitSync = giftOptions(baseAnalyticsFields[16])(tmp9, giftOptions).awaitSync;
  obj = { product, analyticsLocations: giftOptions(baseAnalyticsFields[15])().analyticsLocations, orderId: null, analyticsData: null, onPurchaseComplete: null, onPurchaseError: null, onPurchasePending: null, giftParams: null };
  let id;
  if (tmp9 != null) {
    id = tmp9.id;
  }
  obj[2] = id;
  obj[3] = baseAnalyticsFields;
  obj[4] = function onPurchaseComplete() {
    let tmp2 = null == giftOptions.recipient_id;
    if (!tmp2) {
      tmp2 = giftingOrigin !== closure_1_11.USER_PROFILE_WISHLIST && tmp3 !== closure_1_11.DM_CHANNEL_WISHLIST;
      const tmp4 = giftingOrigin !== closure_1_11.USER_PROFILE_WISHLIST && tmp3 !== closure_1_11.DM_CHANNEL_WISHLIST;
    }
    if (!tmp2) {
      let obj = giftOptions(baseAnalyticsFields[18]);
      obj = { type: "WISHLIST_GIFT_SENT", skuId: null, recipientId: null };
      obj[1] = product.skuId;
      obj[2] = tmp.recipient_id;
      obj.dispatch(obj);
    }
    callback(closure_1_16.SUCCEEDED);
    let arr = giftOptions(baseAnalyticsFields[19]);
    arr = arr.pop();
    obj = {
      importer() {
        return closure_1_0(closure_1_2[22])(closure_1_2[21], closure_1_2.paths).then((arg0) => {
          closure_0 = arg0.default;
          return (arg0) => {
            let STANDARD_BOX = closure_1_1.gift_style;
            if (STANDARD_BOX == null) {
              STANDARD_BOX = closure_2_12.STANDARD_BOX;
            }
            const merged = Object.assign(arg0);
            return closure_2_13(closure_0, { giftStyle: STANDARD_BOX, giftBadgeProgress: closure_1_4 });
          };
        });
      }
    };
    giftOptions(baseAnalyticsFields[20]).openLazy(obj);
    const obj3 = giftOptions(baseAnalyticsFields[20]);
    tmp = giftOptions;
    if (obj5.isIOS()) {
      giftOptions(baseAnalyticsFields[24]).track(closure_1_9.PAYMENT_FLOW_SUCCEEDED, baseAnalyticsFields);
      const obj6 = giftOptions(baseAnalyticsFields[24]);
    }
  };
  obj[5] = function onPurchaseError() {
    callback(closure_1_16.FAILED);
    giftOptions(baseAnalyticsFields[24]).track(closure_1_9.PAYMENT_FLOW_FAILED, baseAnalyticsFields);
  };
  obj[6] = function onPurchasePending() {

  };
  obj[7] = { isGift: true, options: giftOptions };
  useNativeCheckoutStore = giftOptions(baseAnalyticsFields[17])(obj);
  const effect = obj1.useEffect(() => () => {
    if (closure_5 !== closure_1_16.SUCCEEDED) {
      closure_1_1(closure_1_2[24]).track(closure_1_9.PAYMENT_FLOW_CANCELED, closure_2);
      const obj = closure_1_1(closure_1_2[24]);
    }
  }, []);
  obj = { style: tmp3.container, children: null };
  let tmp16Result = null;
  if (GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftPurchaseSection" }).enabled) {
    tmp16Result = null;
    if (null != nextTier) {
      obj1 = { giftsToNextTier: null, nextTierName: null, nextTierIcon: null };
      obj1[0] = stateFromStoresObject.giftsToNextTier;
      let str = nextTier.name;
      if (str == null) {
        str = "";
      }
      obj1[1] = str;
      obj1[2] = nextTier.simple_icon_url;
      tmp16Result = callback2(giftOptions(tmp2[25]), obj1);
      const tmp16 = callback2;
      const tmpResult = giftOptions(tmp2[25]);
    }
  }
  const items1 = [tmp16Result, , ];
  const obj2 = { variant: "text-xs/normal", style: tmp3.disclaimer, children: null };
  const intl = tmp4(tmp2[27]).intl;
  let obj3 = { buyButtonLabel: null, paidServiceTermURL: null, virtualGoodsURL: null };
  const intl2 = tmp4(tmp2[27]).intl;
  obj3[0] = intl2.string(require(baseAnalyticsFields[27]).t.ouo4FK);
  ({ PAID_TERMS: obj7[1], PAID_TERMS_VIRTUAL_GOODS: obj7[2] } = closure_10);
  obj2[2] = intl.format(require(baseAnalyticsFields[27]).t.rsEdd2, obj3);
  items1[1] = callback2(require(baseAnalyticsFields[26]).Text, obj2);
  const obj4 = { disabled: disabled.isPurchaseDisabled, loading: first === constants.PURCHASING, variant: "active", text: null, onPress: null };
  const intl3 = tmp4(tmp2[27]).intl;
  obj4[3] = intl3.string(require(baseAnalyticsFields[27]).t.ouo4FK);
  obj4[4] = giftingOrigin(function*() {
    closure_0 = tmp3;
    closure_1_6(closure_1_16.PURCHASING);
    yield closure_1_7();
    if (!arg1) {
      closure_1_6(closure_1_16.FAILED);
      obj1 = v0(table[24]);
      obj1.track(closure_1_9.PAYMENT_FLOW_FAILED, table);
    }
    table = 1;
    yield closure_1_8();
    if (2 === tmp7) {
      table = 0;
      callback(closure_1_16.FAILED);
      c3 = 3;
    } else if (arg0 === 1) {
      c3 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      table = 0;
    }
    table = 0;
    return arg1;
  });
  items1[2] = callback2(require(baseAnalyticsFields[28]).Button, obj4);
  obj[1] = items1;
  return closure_14(closure_6, obj);
};