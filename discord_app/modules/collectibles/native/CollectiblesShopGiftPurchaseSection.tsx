// === Module 10719: CollectiblesShopGiftPurchaseSection ===

// Module 10719 (CollectiblesShopGiftPurchaseSection)
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_7 from "initialize" /* 8528 */;
import { useNativeCheckoutStore } from "context" /* 7137 */;
import ME from "ME" /* 676 */;
import GuildFeatures from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4448 */;

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
const result = require("set").fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx");

export default function CollectiblesShopGiftPurchaseSection(disabled) {
  const product = disabled.product;
  require = product;
  const giftOptions = disabled.giftOptions;
  const giftingOrigin = disabled.giftingOrigin;
  let callback;
  let callback2;
  let React;
  closure_6 = undefined;
  closure_7 = undefined;
  let awaitSync;
  callback = undefined;
  closure_10 = undefined;
  const tmp3 = callback4(giftOptions(giftingOrigin[11])().insets.bottom);
  const GiftingBadgeExperiment = require(giftingOrigin[12]).GiftingBadgeExperiment;
  let obj = require(giftingOrigin[13]);
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    const obj = { nextTier: getNextTier(product(giftingOrigin[14]).BadgeId.GIFTING), giftsToNextTier: getRemainingToNextTier(product(giftingOrigin[14]).BadgeId.GIFTING), badgeProgress: null };
    ({ getNextTier, getRemainingToNextTier, getSingleRequirementProgress } = closure_7);
    const singleRequirementProgress = getSingleRequirementProgress(product(giftingOrigin[14]).BadgeId.GIFTING);
    let current;
    if (singleRequirementProgress != null) {
      current = singleRequirementProgress.current;
    }
    obj[2] = current;
    return obj;
  });
  ({ nextTier, badgeProgress: c3 } = stateFromStoresObject);
  [tmp7, c4] = callback2(React.useState(false), 2);
  React = React.useRef(false);
  const tmp8 = awaitSync((analyticsFields) => analyticsFields.analyticsFields);
  closure_6 = tmp8;
  const tmp9 = awaitSync((orderRecord) => orderRecord.orderRecord);
  const tmp10 = awaitSync((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  closure_7 = tmp10;
  awaitSync = giftOptions(giftingOrigin[16])(tmp9, giftOptions).awaitSync;
  const items1 = [tmp8, tmp10];
  callback = React.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      giftOptions(giftingOrigin[17]).track(callback.PAYMENT_FLOW_FAILED, closure_6);
      callback();
      const obj = giftOptions(giftingOrigin[17]);
    }
    _undefined(false);
  }, items1);
  obj = { product, analyticsLocations: giftOptions(giftingOrigin[15])().analyticsLocations, orderId: null, analyticsData: null, onPurchaseComplete: null, onPurchaseError: null, onPurchasePending: null, giftParams: null };
  let id;
  let tmp = giftOptions;
  const tmp6 = callback2(React.useState(false), 2);
  if (tmp9 != null) {
    id = tmp9.id;
  }
  obj[2] = id;
  obj[3] = tmp8;
  obj[4] = function onPurchaseComplete() {
    let tmp2 = null == giftOptions.recipient_id;
    if (!tmp2) {
      tmp2 = giftingOrigin !== closure_1_11.USER_PROFILE_WISHLIST && tmp3 !== closure_1_11.DM_CHANNEL_WISHLIST;
      const tmp4 = giftingOrigin !== closure_1_11.USER_PROFILE_WISHLIST && tmp3 !== closure_1_11.DM_CHANNEL_WISHLIST;
    }
    if (!tmp2) {
      let obj = giftOptions(giftingOrigin[19]);
      obj = { type: "WISHLIST_GIFT_SENT", skuId: null, recipientId: null };
      obj[1] = product.skuId;
      obj[2] = tmp.recipient_id;
      obj.dispatch(obj);
    }
    closure_5.current = false;
    _undefined(false);
    let arr = giftOptions(giftingOrigin[20]);
    arr = arr.pop();
    obj = {
      importer() {
        return closure_1_0(closure_1_2[23])(closure_1_2[22], closure_1_2.paths).then((arg0) => {
          closure_0 = arg0.default;
          return (arg0) => {
            let STANDARD_BOX = closure_1_1.gift_style;
            if (STANDARD_BOX == null) {
              STANDARD_BOX = closure_2_12.STANDARD_BOX;
            }
            const merged = Object.assign(arg0);
            return closure_2_13(closure_0, { giftStyle: STANDARD_BOX, giftBadgeProgress: closure_1_3 });
          };
        });
      }
    };
    giftOptions(giftingOrigin[21]).openLazy(obj);
    const obj3 = giftOptions(giftingOrigin[21]);
    tmp = giftOptions;
    if (obj5.isIOS()) {
      giftOptions(giftingOrigin[17]).track(callback.PAYMENT_FLOW_SUCCEEDED, closure_6);
      const obj6 = giftOptions(giftingOrigin[17]);
    }
  };
  obj[5] = callback;
  obj[6] = function onPurchasePending() {

  };
  obj[7] = { isGift: true, options: giftOptions };
  closure_10 = giftOptions(giftingOrigin[18])(obj);
  obj = { style: tmp3.container, children: null };
  let tmp17Result = null;
  if (GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftPurchaseSection" }).enabled) {
    tmp17Result = null;
    if (null != nextTier) {
      obj1 = { giftsToNextTier: null, nextTierName: null, nextTierIcon: null };
      obj1[0] = stateFromStoresObject.giftsToNextTier;
      let str = nextTier.name;
      if (str == null) {
        str = "";
      }
      obj1[1] = str;
      obj1[2] = nextTier.simple_icon_url;
      tmp17Result = callback3(tmp(tmp2[25]), obj1);
      const tmp17 = callback3;
      const tmpResult = tmp(tmp2[25]);
    }
  }
  const items2 = [tmp17Result, , ];
  const obj2 = { variant: "text-xs/normal", style: tmp3.disclaimer, children: null };
  const intl = tmp4(tmp2[27]).intl;
  let obj3 = { buyButtonLabel: null, paidServiceTermURL: null, virtualGoodsURL: null };
  const intl2 = tmp4(tmp2[27]).intl;
  obj3[0] = intl2.string(require(giftingOrigin[27]).t.ouo4FK);
  ({ PAID_TERMS: obj6[1], PAID_TERMS_VIRTUAL_GOODS: obj6[2] } = closure_10);
  obj2[2] = intl.format(require(giftingOrigin[27]).t.rsEdd2, obj3);
  items2[1] = callback3(require(giftingOrigin[26]).Text, obj2);
  const obj4 = { disabled: disabled.isPurchaseDisabled, loading: tmp7, variant: "active", text: null, onPress: null };
  const intl3 = tmp4(tmp2[27]).intl;
  obj4[3] = intl3.string(require(giftingOrigin[27]).t.ouo4FK);
  obj4[4] = callback(function*() {
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
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c2 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_0 = tmp4;
            closure_1_5.current = true;
            closure_1_4(true);
            c1 = 1;
            c2 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = closure_1_8();
            return obj1;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          if (arg1) {
            callback2().catch(callback);
            const promise = callback2();
          } else {
            callback();
          }
          c2 = 3;
        }
      } catch (tmp15) {
        c2 = tmp;
        throw tmp15;
      }
    }
  });
  items2[2] = callback3(require(giftingOrigin[28]).Button, obj4);
  obj[1] = items2;
  return closure_14(closure_6, obj);
};