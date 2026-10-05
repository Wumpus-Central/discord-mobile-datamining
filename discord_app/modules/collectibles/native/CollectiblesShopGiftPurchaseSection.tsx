// === Module 10749: CollectiblesShopGiftPurchaseSection ===

// Module 10749 (CollectiblesShopGiftPurchaseSection)
import react_native from "react-native" /* 17 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5093 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import NativeCheckoutStore from "NativeCheckoutStore" /* 6930 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import BadgeDirectoryStore from "BadgeDirectoryStore" /* 7863 */;
import Constants from "Constants" /* 1085 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let c1, c2;

let c10;
let c9;
let closure_12;
let closure_14;
let map1;
let unpackModuleId;
let _asyncToGenerator = _asyncToGenerator_mod;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
const useNativeCheckoutStore = NativeCheckoutStore.useNativeCheckoutStore;
({ AnalyticEvents: c9, MarketingURLs: c10 } = Constants);
({ GiftingOrigin: unpackModuleId, PremiumGiftStyles: closure_12 } = PremiumConstants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let closure_15 = createStyles.createStyles((arg0) => {
  let obj2;
  const obj = { container: obj2, disclaimer: { includeFontPadding: true } };
  obj2 = { paddingBottom: nativeDefault.space.PX_12 + arg0, paddingTop: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  return obj;
});
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx");

export default function CollectiblesShopGiftPurchaseSection(product) {
  let _undefined;
  let c3;
  let c4;
  let format;
  let giftsToNextTier;
  let id;
  let intl2;
  let intl3;
  let items2;
  let nextTier;
  let obj6;
  let ref;
  let rsEdd2;
  let str2;
  let tmp10;
  let tmp4Result2;
  product = product.product;
  require = product;
  const giftOptions = product.giftOptions;
  const giftingOrigin = product.giftingOrigin;
  _asyncToGenerator = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let closure_6;
  let closure_7;
  let awaitSync;
  let onPurchaseError;
  let closure_10;
  const tmp = giftOptions;
  let tmp2 = giftingOrigin;
  const isPurchaseDisabled = product.isPurchaseDisabled;
  const tmp3 = closure_15(giftOptions(giftingOrigin[11])().insets.bottom);
  const tmp4 = require;
  const GiftingBadgeExperiment = require("GiftingBadgeExperiment").GiftingBadgeExperiment;
  let enabled = GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftPurchaseSection" }).enabled;
  let obj = require("get initialized");
  const items = [closure_7];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
    let current;
    const obj = { nextTier: closure_7.getNextTier(require("BadgeId").BadgeId.GIFTING), giftsToNextTier: closure_7.getRemainingToNextTier(require("BadgeId").BadgeId.GIFTING), badgeProgress: current };
    const singleRequirementProgress = closure_7.getSingleRequirementProgress(require("BadgeId").BadgeId.GIFTING);
    current = undefined;
    if (singleRequirementProgress != null) {
      current = singleRequirementProgress.current;
    }
    return obj;
  });
  ({ nextTier, badgeProgress: c3, giftsToNextTier } = stateFromStoresObject);
  if (enabled) {
    enabled = null != nextTier;
  }
  let str = "-DISABLED";
  const useIsGiftingBadgeComplexArtEnabled = tmp4(tmp2[15]).useIsGiftingBadgeComplexArtEnabled;
  tmp4(tmp2[15]);
  if (enabled) {
    str = "";
  }
  const isGiftingBadgeComplexArtEnabled = useIsGiftingBadgeComplexArtEnabled(`CollectiblesShopGiftPurchaseSection${str}`);
  [tmp10, c4] = _slicedToArray(react.useState(false), 2);
  const tmp9 = _slicedToArray(react.useState(false), 2);
  react = react.useRef(false);
  const analyticsLocations = tmp(tmp2[16])().analyticsLocations;
  const tmp11 = awaitSync((analyticsFields) => analyticsFields.analyticsFields);
  closure_6 = tmp11;
  const tmp12 = awaitSync((orderRecord) => orderRecord.orderRecord);
  const tmp13 = awaitSync((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  closure_7 = tmp13;
  awaitSync = tmp(tmp2[17])(tmp12, giftOptions).awaitSync;
  const items1 = [tmp11, tmp13];
  onPurchaseError = react.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      const obj = AnalyticsUtilsDefault;
      obj.track(onPurchaseError.PAYMENT_FLOW_FAILED, closure_6);
      closure_7();
    }
    _undefined(false);
  }, items1);
  let obj2 = {
    product,
    analyticsLocations,
    orderId: id,
    analyticsData: tmp11,
    onPurchaseComplete() {
      let tmp2 = null == giftOptions.recipient_id;
      if (!tmp2) {
        tmp2 = giftingOrigin !== unpackModuleId.USER_PROFILE_WISHLIST && tmp3 !== unpackModuleId.DM_CHANNEL_WISHLIST;
      }
      if (!tmp2) {
        let obj = DispatcherDefault;
        const obj2 = { type: "WISHLIST_GIFT_SENT", skuId: require.skuId, recipientId: giftOptions.recipient_id };
        obj.dispatch(obj2);
      }
      ref.current = false;
      _undefined(false);
      const arr = ModalActionCreatorsDefault;
      arr.pop();
      const obj3 = actions_AlertActionCreatorsDefault;
      const obj4 = {
        importer() {
          let giftBadgeProgress;
          let gift_style;
          const promise = require("asyncRequire")(giftingOrigin[23], giftingOrigin.paths);
          return promise.then((result) => {
            let closure_0 = result.default;
            return (arg0) => {
              let STANDARD_BOX = gift_style.gift_style;
              if (STANDARD_BOX == null) {
                STANDARD_BOX = constants.STANDARD_BOX;
              }
              const obj = { giftStyle: STANDARD_BOX, giftBadgeProgress };
              const merged = Object.assign(arg0);
              return closure_3_13(closure_0, obj);
            };
          });
        },
        isDismissable: false
      };
      obj3.openLazy(obj4);
      const obj5 = PlatformUtils;
      if (obj5.isIOS()) {
        const obj6 = AnalyticsUtilsDefault;
        obj6.track(onPurchaseError.PAYMENT_FLOW_SUCCEEDED, closure_6);
      }
    },
    onPurchaseError,
    onPurchasePending() {

    },
    giftParams: { isGift: true, options: giftOptions }
  };
  id = undefined;
  const tmpResult = tmp(tmp2[19]);
  if (tmp12 != null) {
    id = tmp12.id;
  }
  closure_10 = tmpResult(obj2);
  let obj3 = { style: tmp3.container, children: items2 };
  let tmp20Result = null;
  const tmp18 = closure_6;
  if (enabled) {
    let obj4 = { giftsToNextTier, nextTierName: str2, nextTierIcon: tmp4Result2.getGiftingBadgeTierIconUrl(nextTier, isGiftingBadgeComplexArtEnabled) };
    str2 = nextTier.name;
    const tmpResult2 = tmp(tmp2[26]);
    if (str2 == null) {
      str2 = "";
    }
    tmp4Result2 = tmp4(tmp2[15]);
    tmp20Result = closure_13(tmpResult2, obj4);
  }
  items2 = [tmp20Result, , ];
  let obj5 = { variant: "text-xs/normal", style: tmp3.disclaimer, children: format(rsEdd2, obj6) };
  const Text = tmp4(tmp2[27]).Text;
  const intl = tmp4(tmp2[28]).intl;
  format = intl.format;
  obj6 = { buyButtonLabel: intl2.string(tmp4(tmp2[28]).t.ouo4FK), paidServiceTermURL: null, virtualGoodsURL: null };
  rsEdd2 = tmp4(tmp2[28]).t.rsEdd2;
  intl2 = tmp4(tmp2[28]).intl;
  ({ PAID_TERMS: obj7.paidServiceTermURL, PAID_TERMS_VIRTUAL_GOODS: obj7.virtualGoodsURL } = closure_10);
  items2[1] = closure_13(Text, obj5);
  const obj8 = {
    disabled: isPurchaseDisabled,
    loading: tmp10,
    variant: "active",
    text: intl3.string(tmp4(tmp2[28]).t.ouo4FK),
    onPress: _asyncToGenerator(async () => {
      if (c2 === 2) {
        c2 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c2 = 2;
          if (0 === c1) {
            if (arg0 === 1) {
              c2 = 3;
              throw value;
            } else if (arg0 === 2) {
              c2 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              let closure_0 = tmp3;
              ref.current = true;
              _undefined(true);
              c1 = 1;
              c2 = 1;
              const obj4 = { value: awaitSync(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            if (value) {
              const promise = closure_128_10();
              promise.catch(closure_128_9);
            } else {
              closure_128_9();
            }
            c2 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp14) {
          c2 = 3;
          throw tmp14;
        }
      }
    })
  };
  const Button = tmp4(tmp2[29]).Button;
  intl3 = tmp4(tmp2[28]).intl;
  items2[2] = closure_13(Button, obj8);
  return closure_14(tmp18, obj3);
};