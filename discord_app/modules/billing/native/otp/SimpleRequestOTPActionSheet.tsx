// discord_app/modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import CollectiblesUtils from "../../../collectibles/CollectiblesUtils.tsx";
import PremiumAnalyticsUtils from "../../../premium/native/PremiumAnalyticsUtils.tsx";
import NativePaymentContext from "../../../payments/native/NativePaymentContext.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserStore from "../../../../stores/UserStore.tsx";
import SKUStore from "../../../../stores/game_store/SKUStore.tsx";

require = fn;
function GiftPurchaseSKUView(selectedSkuId) {
  selectedSkuId = selectedSkuId.selectedSkuId;
  ({ giftRecipientId, giftMessage } = selectedSkuId);
  let first;
  _slicedToArray = undefined;
  noop = undefined;
  let memo1;
  closure_8 = undefined;
  closure_9 = async function _submitGiftPurchase(arg0, value) {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_0 = tmp7;
            c3 = 1;
            if (null == noop) {
              logger.error("Cannot proceed with purchase: collectibleProduct is undefined");
              tmp3(tmp33[19]).show({
                title: "Product Not Found",
                body: "The product information could not be loaded. Please try again.",
              });
              c3 = 0;
              c5 = 3;
              let obj1 = { value: undefined, done: true };
              return obj1;
            } else {
              if (null != tmp42.googleSkuIds) {
                if (0 !== length.length) {
                  c4 = 2;
                  c5 = 1;
                  const obj2 = { value: SKUStore(), done: false };
                  return obj2;
                }
              }
              const _HermesInternal2 = HermesInternal;
              logger.error("No Google SKU IDs available for product " + tmp42.skuId);
              let obj4 = tmp3(tmp33[19]);
              obj4.show({
                title: "Product Not Available",
                body: "This product is not available for purchase on Google Play.",
              });
              c3 = 0;
              c5 = 3;
              const obj3 = { value: undefined, done: true };
              return obj3;
            }
          }
        } else {
          if (1 === tmp7) {
            c3 = 0;
            closure_128_0 = tmp33;
            logger.warn("Error creating gift purchase:", closure_128_0);
            obj1 = tmp3(tmp33[19]);
            let message;
            if (closure_128_0 != null) {
              message = closure_128_0.message;
            }
            if (!message) {
              const _JSON = JSON;
              message = JSON.stringify(closure_128_0);
            }
            obj4 = { title: "Gift Purchase Failed", body: null };
            const _HermesInternal = HermesInternal;
            obj4.body = "Error: " + message;
            obj1.show(obj4);
            c5 = 3;
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c3 = 0;
          }
          c3 = 0;
          c5 = 3;
          obj = { value, done: true };
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
  const rect = first(1611)();
  let obj = noop;
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  first = tmp4[0];
  dependencyMap = tmp4[1];
  const currentUser = memo1.getCurrentUser();
  _slicedToArray = noop.useRef({});
  let obj1 = selectedSkuId(10699);
  const giftStyle = obj1.useNativeGiftContext().giftStyle;
  let obj2 = selectedSkuId(504);
  let items = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items, () => SKUStore.get(selectedSkuId));
  let obj3 = selectedSkuId(11042);
  const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(selectedSkuId);
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
    if (null != c5) {
      if (null != tmp.googleSkuIds) {
        const googleSkuIds = tmp.googleSkuIds;
        if (obj.isPremium(currentUser, PremiumTypes.TIER_2)) {
          let tmp2 = googleSkuIds[tmp10.MOBILE_PREMIUM_TIER_2];
        } else {
          tmp2 = googleSkuIds[tmp10.MOBILE];
        }
        if (null == tmp2) {
          const items = [tmp2];
          let values = items;
        } else {
          const _Object = Object;
          values = Object.values(tmp.googleSkuIds);
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
    closure_0 = async function _loadGoogleSkus(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === ref) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_1 = tmp3;
              closure_0 = tmp7;
              if (null == memo1) {
                if (0 !== length.length) {
                  if (!closure_1) {
                    tmp33(true);
                    c3 = 1;
                    let obj1 = selectedSkuId(dependencyMap[16]);
                    ref = 2;
                    c5 = 1;
                    obj1 = { value: null, done: false };
                    obj1.value = obj1.loadInAppSkus(tmp27);
                    return obj1;
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
            obj = { value, done: true };
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
    obj = { skuId: selectedSkuId, googleSkuIds: {} };
    tmp14 = obj;
  }
  obj = {
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
    giftParams: null,
  };
  obj1 = {
    isGift: true,
    options: { recipient_id: giftRecipientId, custom_message: giftMessage, gift_style: giftStyle },
  };
  obj.giftParams = obj1;
  closure_8 = tmp(11014)(obj);
  const items5 = [product];
  [tmp16, tmp17] = _slicedToArray(
    obj.useMemo(() => {
      if (null == c5) {
        let items = ["Loading...", "Loading..."];
      } else {
        items = [CollectiblesUtils.getFormattedPriceForCollectiblesProduct(tmp, true, true)];
        items[1] = CollectiblesUtils.getFormattedPriceForCollectiblesProduct(tmp, false, true);
      }
      return items;
    }, items5),
    2,
  );
  if (!isFetching) {
    isFetching = first;
  }
  if (!isFetching) {
    isFetching = null == product;
  }
  obj2 = {
    spacing: 24,
    style: { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 },
    children: null,
  };
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  const items6 = [
    "Gifting ",
    name,
    " to ",
    giftRecipientId,
    " ",
    "\n",
    "Regular price: ",
    tmp17,
    " ",
    "\n",
    "Premium price: ",
    tmp16,
    " ",
    "\n",
  ];
  let str = "No message";
  if (null != giftMessage) {
    str = "No message";
    if ("" !== giftMessage) {
      let _HermesInternal = HermesInternal;
      str = "Message: " + giftMessage;
    }
  }
  items6[14] = str;
  const items7 = [
    closure_11(selectedSkuId(4556).Text, { variant: "text-md/medium", color: "text-overlay-light", children: items6 }),
    ,
  ];
  let str4 = "Send Gift";
  if (isFetching) {
    str4 = "Loading...";
  }
  obj3 = {
    children: closure_12(selectedSkuId(4975).Button, {
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
      disabled: isFetching,
    }),
  };
  items7[1] = closure_12(selectedSkuId(5607).Card, obj3);
  const obj5 = { children: null };
  const obj6 = { variant: "text-md/medium", color: "text-overlay-light", children: null };
  const items8 = ["Select style: ", giftStyle];
  obj6.children = items8;
  const items9 = [closure_11(selectedSkuId(4556).Text, obj6), closure_12(first(10829), {})];
  obj5.children = items9;
  items7[2] = closure_11(selectedSkuId(5607).Card, obj5);
  obj2.children = items7;
  return closure_11(selectedSkuId(4973).Stack, obj2);
}
function SimpleRequestOTPActionSheet(giftMessage) {
  ({ selectedSkuId, requestType, giftRecipientId } = giftMessage);
  _require = undefined;
  let obj = require("v1");
  const v4Result = obj.v4();
  _require = v4Result;
  [][0] = v4Result;
  if ("giftSku" === requestType) {
    if (null != selectedSkuId) {
      if (null != giftRecipientId) {
        obj = {
          basePurchaseAnalytics: tmp4,
          onClose() {},
          setCurrentAnalyticsStep() {},
          children: null,
        };
        obj = { selectedSkuId, giftRecipientId, giftMessage: giftMessage.giftMessage };
        obj.children = closure_12(GiftPurchaseSKUView, obj);
        let tmp6Result = closure_12(tmp(10699).NativeGiftContextProvider, obj);
        let tmp8 = closure_12;
      }
      const obj1 = { children: tmp6Result };
      return tmp8(tmp(7150).BottomSheet, obj1);
    }
  }
  tmp8 = closure_12;
  const items = [
    closure_12(require("Text/Text").Text, {
      variant: "text-lg/bold",
      color: "text-feedback-warning",
      children: "Gift purchasing is the only supported feature on Android in this version.",
    }),
  ];
  let str = "none";
  if (null != requestType) {
    str = requestType;
  }
  const obj2 = { children: null };
  const obj3 = { variant: "text-md/normal", color: "text-feedback-warning", children: null };
  const items1 = ["Request type: ", str];
  obj3.children = items1;
  items[1] = closure_11(require("Text/Text").Text, obj3);
  obj2.children = items;
  tmp6Result = tmp6(View, obj2);
}
const View = fn(17).View;
let closure_9 = fn(1074).PriceSetAssignmentPurchaseTypes;
const PremiumTypes = fn(1373).PremiumTypes;
const jsxProd = fn(21);
({ jsxs: closure_11, jsx: closure_12 } = jsxProd);
let closure_13 = new LoggerDefault("PaymentFlowTest.android");
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx");

export default function SimpleCreateOTPActionSheetWrapper(arg0) {
  let obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj.children = closure_1_12(SimpleRequestOTPActionSheet, obj);
  return closure_1_12(NativePaymentContext.NativePaymentContextProvider, obj);
}
