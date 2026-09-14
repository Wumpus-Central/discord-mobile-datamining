// discord_app/modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import PlatformUtils from "../../../utils/PlatformUtils.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import BadgeDirectoryStore from "../../badges/BadgeDirectoryStore.tsx";

require = fn;
const View = fn(17).View;
const useNativeCheckoutStore = fn(7527).useNativeCheckoutStore;
const Constants = fn(1074);
({ AnalyticEvents: closure_9, MarketingURLs: c10 } = Constants);
const PremiumConstants = fn(1373);
({ GiftingOrigin: closure_11, PremiumGiftStyles: closure_12 } = PremiumConstants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const createStyles = fn(4636);
let closure_15 = createStyles.createStyles((arg0) => {
  const obj = { container: null, disclaimer: null };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_TOP_HIGH);
  obj.container = {
    paddingBottom: nativeDefault.space.PX_12 + arg0,
    paddingTop: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_8,
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  };
  obj.disclaimer = { includeFontPadding: true };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopGiftPurchaseSection.tsx");

export default function CollectiblesShopGiftPurchaseSection(disabled) {
  const product = disabled.product;
  require = product;
  const giftOptions = disabled.giftOptions;
  const giftingOrigin = disabled.giftingOrigin;
  asyncGeneratorStep = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  closure_7 = undefined;
  let awaitSync;
  closure_10 = undefined;
  const tmp3 = closure_15(giftOptions(giftingOrigin[11])().insets.bottom);
  const GiftingBadgeExperiment = require("GiftingBadgeExperiment").GiftingBadgeExperiment;
  const items = [closure_7];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    const obj = {
      nextTier: closure_7.getNextTier(product(giftingOrigin[14]).BadgeId.GIFTING),
      giftsToNextTier: closure_7.getRemainingToNextTier(product(giftingOrigin[14]).BadgeId.GIFTING),
      badgeProgress: null,
    };
    const singleRequirementProgress = closure_7.getSingleRequirementProgress(
      product(giftingOrigin[14]).BadgeId.GIFTING,
    );
    let current;
    if (singleRequirementProgress != null) {
      current = singleRequirementProgress.current;
    }
    obj.badgeProgress = current;
    return obj;
  });
  ({ nextTier, badgeProgress: c3 } = stateFromStoresObject);
  let obj = require("initialize");
  const tmp = giftOptions;
  [tmp7, c4] = noop.useState(false);
  noop = noop.useRef(false);
  const tmp8 = awaitSync((analyticsFields) => analyticsFields.analyticsFields);
  closure_6 = tmp8;
  const tmp9 = awaitSync((orderRecord) => orderRecord.orderRecord);
  const tmp10 = awaitSync((setCheckoutFailed) => setCheckoutFailed.setCheckoutFailed);
  closure_7 = tmp10;
  awaitSync = giftOptions(giftingOrigin[16])(tmp9, giftOptions).awaitSync;
  const items1 = [tmp8, tmp10];
  const onPurchaseError = noop.useCallback(() => {
    if (ref.current) {
      tmp.current = false;
      AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_FAILED, closure_6);
      closure_7();
    }
    _undefined(false);
  }, items1);
  let obj2 = {
    product,
    analyticsLocations: giftOptions(giftingOrigin[15])().analyticsLocations,
    orderId: null,
    analyticsData: null,
    onPurchaseComplete: null,
    onPurchaseError: null,
    onPurchasePending: null,
    giftParams: null,
  };
  let id;
  const tmp6 = _slicedToArray(noop.useState(false), 2);
  if (tmp9 != null) {
    id = tmp9.id;
  }
  obj2.orderId = id;
  obj2.analyticsData = tmp8;
  obj2.onPurchaseComplete = function onPurchaseComplete() {
    let tmp2 = null == giftOptions.recipient_id;
    if (!tmp2) {
      tmp2 = giftingOrigin !== constants2.USER_PROFILE_WISHLIST && tmp3 !== constants2.DM_CHANNEL_WISHLIST;
      const tmp4 = giftingOrigin !== constants2.USER_PROFILE_WISHLIST && tmp3 !== constants2.DM_CHANNEL_WISHLIST;
    }
    if (!tmp2) {
      const obj2 = { type: "WISHLIST_GIFT_SENT", skuId: product.skuId, recipientId: giftOptions.recipient_id };
      DispatcherDefault.dispatch(obj2);
    }
    closure_5.current = false;
    _undefined(false);
    ModalActionCreatorsDefault.pop();
    actions_AlertActionCreatorsDefault.openLazy({
      importer() {
        return product(giftingOrigin[23])(giftingOrigin[22], giftingOrigin.paths).then((result) => {
          closure_0 = result.default;
          return (arg0) => {
            let STANDARD_BOX = gift_style.gift_style;
            if (STANDARD_BOX == null) {
              STANDARD_BOX = constants.STANDARD_BOX;
            }
            const merged = Object.assign(arg0);
            return closure_3_13(closure_0, { giftStyle: STANDARD_BOX, giftBadgeProgress });
          };
        });
      },
    });
    const obj4 = {
      importer() {
        return product(giftingOrigin[23])(giftingOrigin[22], giftingOrigin.paths).then((result) => {
          closure_0 = result.default;
          return (arg0) => {
            let STANDARD_BOX = gift_style.gift_style;
            if (STANDARD_BOX == null) {
              STANDARD_BOX = constants.STANDARD_BOX;
            }
            const merged = Object.assign(arg0);
            return closure_3_13(closure_0, { giftStyle: STANDARD_BOX, giftBadgeProgress });
          };
        });
      },
    };
    if (obj5.isIOS()) {
      AnalyticsUtilsDefault.track(constants.PAYMENT_FLOW_SUCCEEDED, closure_6);
    }
    obj5 = PlatformUtils;
  };
  obj2.onPurchaseError = onPurchaseError;
  obj2.onPurchasePending = function onPurchasePending() {};
  obj2.giftParams = { isGift: true, options: giftOptions };
  closure_10 = giftOptions(giftingOrigin[18])(obj2);
  let obj3 = { style: tmp3.container, children: null };
  let tmp17Result = null;
  if (GiftingBadgeExperiment.useConfig({ location: "CollectiblesShopGiftPurchaseSection" }).enabled) {
    tmp17Result = null;
    if (null != nextTier) {
      let obj4 = { giftsToNextTier: stateFromStoresObject.giftsToNextTier, nextTierName: null, nextTierIcon: null };
      let str = nextTier.name;
      if (str == null) {
        str = "";
      }
      obj4.nextTierName = str;
      obj4.nextTierIcon = nextTier.simple_icon_url;
      tmp17Result = closure_13(tmp(tmp2[25]), obj4);
      const tmpResult = tmp(tmp2[25]);
    }
  }
  const items2 = [tmp17Result, ,];
  let obj5 = { variant: "text-xs/normal", style: tmp3.disclaimer, children: null };
  const intl = tmp4(tmp2[27]).intl;
  const obj7 = { buyButtonLabel: null, paidServiceTermURL: null, virtualGoodsURL: null };
  const intl2 = tmp4(tmp2[27]).intl;
  obj7.buyButtonLabel = intl2.string(require("util").t.ouo4FK);
  ({ PAID_TERMS: obj6.paidServiceTermURL, PAID_TERMS_VIRTUAL_GOODS: obj6.virtualGoodsURL } = closure_10);
  obj5.children = intl.format(require("util").t.rsEdd2, obj7);
  items2[1] = closure_13(require("Text/Text").Text, obj5);
  const obj13 = { disabled: disabled.isPurchaseDisabled, loading: tmp7, variant: "active", text: null, onPress: null };
  const intl3 = tmp4(tmp2[27]).intl;
  obj13.text = intl3.string(require("util").t.ouo4FK);
  obj13.onPress = asyncGeneratorStep(async () => {
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
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp4;
            closure_5.current = true;
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
            closure_128_10().catch(closure_128_9);
            const promise = closure_128_10();
          } else {
            closure_128_9();
          }
          c2 = 3;
        }
      } catch (tmp15) {
        c2 = tmp;
        throw tmp15;
      }
    }
  });
  items2[2] = closure_13(require("components/Button/Button").Button, obj13);
  obj3.children = items2;
  return closure_14(closure_6, obj3);
}
