// === Module 15830: SimpleRequestOTPActionSheet ===

// Module 15830 (SimpleRequestOTPActionSheet)
import LoggerDefault from "Logger" /* 3 */;
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7655 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7668 */;
import PremiumAnalyticsUtils from "PremiumAnalyticsUtils" /* 10812 */;
import NativePaymentContext from "NativePaymentContext" /* 10976 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import SKUStore from "SKUStore" /* 5598 */;

require = fn;
function GiftPurchaseSKUView(selectedSkuId) {
  selectedSkuId = selectedSkuId.selectedSkuId;
  ({ giftRecipientId, giftMessage } = selectedSkuId);
  first = undefined;
  dependencyMap = undefined;
  noop = undefined;
  let memo1;
  closure_8 = undefined;
  closure_9 = async function _submitGiftPurchase() {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp7;
            c3 = 1;
            if (null == _undefined) {
              logger.error("Cannot proceed with purchase: collectibleProduct is undefined");
              tmp3(tmp33[19]).show({ title: "Product Not Found", body: "The product information could not be loaded. Please try again." });
              c3 = 0;
              c5 = 3;
              const obj6 = { value: undefined, done: true };
              return obj6;
            } else {
              if (null != _undefined.googleSkuIds) {
                if (0 !== length.length) {
                  c4 = 2;
                  c5 = 1;
                  const obj8 = { value: SKUStore(), done: false };
                  return obj8;
                }
              }
              const _HermesInternal2 = HermesInternal;
              logger.error("No Google SKU IDs available for product " + _undefined.skuId);
              tmp3(tmp33[19]).show({ title: "Product Not Available", body: "This product is not available for purchase on Google Play." });
              c3 = 0;
              c5 = 3;
              const obj9 = { value: undefined, done: true };
              return obj9;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = tmp33;
            logger.warn("Error creating gift purchase:", closure_128_0);
            let message;
            if (closure_128_0 != null) {
              message = closure_128_0.message;
            }
            if (!message) {
              const _JSON = JSON;
              message = JSON.stringify(closure_128_0);
            }
            const obj10 = { title: "Gift Purchase Failed", body: null };
            const _HermesInternal = HermesInternal;
            obj10.body = "Error: " + message;
            tmp3(tmp33[19]).show(obj10);
            c5 = 3;
            const obj2 = tmp3(tmp33[19]);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c3 = 0;
          }
          c3 = 0;
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp33) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp33;
        } else {
          c4 = tmp;
        }
      }
    }
  };
  const rect = first(1612)();
  [first, dependencyMap] = noop.useState(false);
  const currentUser = memo1.getCurrentUser();
  _slicedToArray = noop.useRef({});
  const giftStyle = selectedSkuId(10848).useNativeGiftContext().giftStyle;
  let obj = noop;
  let obj2 = selectedSkuId(10848);
  const tmp3 = _slicedToArray;
  let items = [closure_8];
  const stateFromStores = selectedSkuId(504).useStateFromStores(items, () => SKUStore.get(selectedSkuId));
  let obj3 = selectedSkuId(504);
  const fetchCollectiblesProduct = selectedSkuId(11203).useFetchCollectiblesProduct(selectedSkuId);
  const product = fetchCollectiblesProduct.product;
  noop = product;
  let isFetching = fetchCollectiblesProduct.isFetching;
  const items1 = [selectedSkuId];
  const effect = noop.useEffect(() => {
    if (null != selectedSkuId) {
      const collectiblesProduct = CollectiblesActionCreators.fetchCollectiblesProduct(tmp);
    }
  }, items1);
  const items2 = [product, currentUser, selectedSkuId];
  const memo = noop.useMemo(() => {
    if (null != _undefined) {
      if (null != _undefined.googleSkuIds) {
        const googleSkuIds = _undefined.googleSkuIds;
        if (obj.isPremium(currentUser, PremiumTypes.TIER_2)) {
          let tmp2 = googleSkuIds[closure_9.MOBILE_PREMIUM_TIER_2];
        } else {
          tmp2 = googleSkuIds[closure_9.MOBILE];
        }
        if (null == tmp2) {
          const items = [tmp2];
          let values = items;
        } else {
          const _Object = Object;
          values = Object.values(_undefined.googleSkuIds);
        }
        return values;
      }
    }
    logger.warn("No googleSkuIds available for product: " + selectedSkuId);
    return [];
  }, items2);
  const items3 = [memo];
  memo1 = noop.useMemo(() => {
    const sorted = memo.sort();
    return sorted.join(",");
  }, items3);
  const items4 = [memo, first, memo1];
  const effect1 = noop.useEffect(() => {
    closure_0 = async function _loadGoogleSkus() {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === ref) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              if (null == memo1) {
                if (0 !== length.length) {
                  if (!closure_1) {
                    tmp33(true);
                    c3 = 1;
                    ref = 2;
                    c5 = 1;
                    const obj5 = { value: selectedSkuId(dependencyMap[16]).loadInAppSkus(tmp27), done: false };
                    return obj5;
                  }
                }
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_0 = tmp33;
              logger.error("Unable to fetch product IDs from Google Play store:", closure_128_0);
              tmp33(false);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              if (null != memo1) {
                ref.current[memo1] = true;
              }
              tmp33(false);
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          }
          c5 = 3;
        } catch (tmp33) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp33;
          } else {
            ref = tmp;
          }
        }
      }
    };
    !(function loadGoogleSkus() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })();
  }, items4);
  let tmp14 = product;
  if (null == product) {
    let obj5 = { skuId: selectedSkuId, googleSkuIds: {} };
    tmp14 = obj5;
  }
  let obj6 = {
    product: tmp14,
    onPurchaseComplete() {
      first(dependencyMap[18]).hideActionSheet();
    },
    onPurchaseError() {
      logger.error("Purchase error occurred");
    },
    onPurchasePending() {
      logger.info("Purchase is pending");
    },
    giftParams: { isGift: true, options: { recipient_id: giftRecipientId, custom_message: giftMessage, gift_style: giftStyle } }
  };
  closure_8 = tmp(11175)(obj6);
  const items5 = [product];
  let obj4 = selectedSkuId(11203);
  const obj7 = { isGift: true, options: { recipient_id: giftRecipientId, custom_message: giftMessage, gift_style: giftStyle } };
  [tmp16, tmp17] = tmp3(obj.useMemo(() => {
    if (null == c5) {
      let items = ["Loading...", "Loading..."];
    } else {
      items = [CollectiblesUtils.getFormattedPriceForCollectiblesProduct(c5, true, true), ];
      items[1] = CollectiblesUtils.getFormattedPriceForCollectiblesProduct(c5, false, true);
    }
    return items;
  }, items5), 2);
  if (!isFetching) {
    isFetching = first;
  }
  if (!isFetching) {
    isFetching = null == product;
  }
  let obj8 = { spacing: 24, style: { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 }, children: null };
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items6 = ["Gifting ", name, " to ", giftRecipientId, " ", "\n", "Regular price: ", tmp17, " ", "\n", "Premium price: ", tmp16, " ", "\n"];
  let str = "No message";
  if (null != giftMessage) {
    str = "No message";
    if ("" !== giftMessage) {
      let _HermesInternal = HermesInternal;
      str = "Message: " + giftMessage;
    }
  }
  items6[14] = str;
  const items7 = [closure_11(selectedSkuId(4636).Text, { variant: "text-md/medium", color: "text-overlay-light", children: items6 }), , ];
  let str4 = "Send Gift";
  if (isFetching) {
    str4 = "Loading...";
  }
  let obj9 = {
    children: closure_12(selectedSkuId(5062).Button, {
      variant: "primary",
      text: str4,
      onPress: function submitGiftPurchase() {
        const self = this;
        const apply = closure_9.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
      disabled: isFetching
    })
  };
  items7[1] = closure_12(selectedSkuId(5695).Card, obj9);
  const obj11 = { children: null };
  const obj12 = { variant: "text-md/medium", color: "text-overlay-light", children: null };
  const items8 = ["Select style: ", giftStyle];
  obj12.children = items8;
  const items9 = [closure_11(selectedSkuId(4636).Text, obj12), closure_12(first(10983), {})];
  obj11.children = items9;
  items7[2] = closure_11(selectedSkuId(5695).Card, obj11);
  obj8.children = items7;
  return closure_11(selectedSkuId(5060).Stack, obj8);
}
function SimpleRequestOTPActionSheet(giftMessage) {
  ({ selectedSkuId, requestType, giftRecipientId } = giftMessage);
  _require = undefined;
  const v4Result = require("v1").v4();
  _require = v4Result;
  [][0] = v4Result;
  if ("giftSku" === requestType) {
    if (null != selectedSkuId) {
      if (null != giftRecipientId) {
        const obj2 = {
          basePurchaseAnalytics: tmp4,
          onClose() {

                },
          setCurrentAnalyticsStep() {

                },
          children: null
        };
        const obj3 = { selectedSkuId, giftRecipientId, giftMessage: giftMessage.giftMessage };
        obj2.children = closure_12(GiftPurchaseSKUView, obj3);
        let tmp6Result = closure_12(tmp(10848).NativeGiftContextProvider, obj2);
        let tmp8 = closure_12;
      }
      const obj4 = { children: tmp6Result };
      return tmp8(tmp(7264).BottomSheet, obj4);
    }
  }
  tmp8 = closure_12;
  const items = [closure_12(require("Text/Text").Text, { variant: "text-lg/bold", color: "text-feedback-warning", children: "Gift purchasing is the only supported feature on Android in this version." }), ];
  let str = "none";
  if (null != requestType) {
    str = requestType;
  }
  const obj5 = { children: null };
  const obj6 = { variant: "text-md/normal", color: "text-feedback-warning", children: null };
  const items1 = ["Request type: ", str];
  obj6.children = items1;
  items[1] = closure_11(require("Text/Text").Text, obj6);
  obj5.children = items;
  tmp6Result = closure_11(View, obj5);
  const obj = require("v1");
}
const View = fn(17).View;
let closure_9 = fn(1074).PriceSetAssignmentPurchaseTypes;
const PremiumTypes = fn(1374).PremiumTypes;
const jsxProd = fn(21);
({ jsxs: closure_11, jsx: closure_12 } = jsxProd);
let closure_13 = new LoggerDefault("PaymentFlowTest.android");
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx");

export default function SimpleCreateOTPActionSheetWrapper(arg0) {
  const obj = { skuIDs: [], activeSubscription: null, children: null };
  const merged = Object.assign(arg0);
  obj.children = closure_1_12(SimpleRequestOTPActionSheet, {});
  return closure_1_12(NativePaymentContext.NativePaymentContextProvider, obj);
};