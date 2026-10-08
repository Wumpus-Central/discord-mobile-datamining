// discord_app/modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import c from "../../../../../_runtime/00576_c.js";
import v1 from "../../../../../_runtime/01278_v1.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Sheet_BottomSheet from "../../../../design/components/Sheet/native/BottomSheet.native.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import CollectiblesUtils from "../../../collectibles/CollectiblesUtils.tsx";
import PremiumAnalyticsUtils from "../../../premium/native/PremiumAnalyticsUtils.tsx";
import NativeGiftContext from "../../../payments/native/NativeGiftContext.tsx";
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
        return { value: "IconComponent", done: null };
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
              tmp3(tmp33[19]).show({
                title: "Product Not Found",
                body: "The product information could not be loaded. Please try again.",
              });
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
              tmp3(tmp33[19]).show({
                title: "Product Not Available",
                body: "This product is not available for purchase on Google Play.",
              });
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
  const rect = first(1630)();
  [first, dependencyMap] = noop.useState(false);
  const currentUser = memo1.getCurrentUser();
  _slicedToArray = noop.useRef({});
  const giftStyle = selectedSkuId(10040).useNativeGiftContext().giftStyle;
  let obj = noop;
  let obj2 = selectedSkuId(10040);
  const tmp3 = _slicedToArray;
  let items = [closure_8];
  const stateFromStores = selectedSkuId(504).useStateFromStores(items, () => SKUStore.get(selectedSkuId));
  let obj3 = selectedSkuId(504);
  const fetchCollectiblesProduct = selectedSkuId(10482).useFetchCollectiblesProduct(selectedSkuId);
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
          return { value: "IconComponent", done: null };
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
    giftParams: {
      isGift: true,
      options: { recipient_id: giftRecipientId, custom_message: giftMessage, gift_style: giftStyle },
    },
  };
  closure_8 = tmp(12717)(obj6);
  const items5 = [product];
  let obj4 = selectedSkuId(10482);
  const obj7 = {
    isGift: true,
    options: { recipient_id: giftRecipientId, custom_message: giftMessage, gift_style: giftStyle },
  };
  [tmp16, tmp17] = tmp3(
    obj.useMemo(() => {
      if (null == c5) {
        let items = ["Loading...", "Loading..."];
      } else {
        items = [CollectiblesUtils.getFormattedPriceForCollectiblesProduct(c5, true, true)];
        items[1] = CollectiblesUtils.getFormattedPriceForCollectiblesProduct(c5, false, true);
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
  let obj8 = {
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
    closure_11(selectedSkuId(5086).Text, { variant: "text-md/medium", color: "text-overlay-light", children: items6 }),
    ,
  ];
  let str4 = "Send Gift";
  if (isFetching) {
    str4 = "Loading...";
  }
  let obj9 = {
    children: closure_12(selectedSkuId(5375).Button, {
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
  items7[1] = closure_12(selectedSkuId(6186).Card, obj9);
  const obj11 = { children: null };
  const obj12 = { variant: "text-md/medium", color: "text-overlay-light", children: null };
  const items8 = ["Select style: ", giftStyle];
  obj12.children = items8;
  const items9 = [closure_11(selectedSkuId(5086).Text, obj12), closure_12(first(10171), {})];
  obj11.children = items9;
  items7[2] = closure_11(selectedSkuId(6186).Card, obj11);
  obj8.children = items7;
  return closure_11(selectedSkuId(5373).Stack, obj8);
}
const View = fn(17).View;
let closure_9 = fn(1085).PriceSetAssignmentPurchaseTypes;
const PremiumTypes = fn(1391).PremiumTypes;
const jsxProd = fn(21);
({ jsxs: closure_11, jsx: closure_12 } = jsxProd);
let closure_13 = new LoggerDefault("PaymentFlowTest.android");
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SimpleRequestOTPActionSheet(arg0) {
      const cResult = c.c(13);
      ({ selectedSkuId, requestType, giftRecipientId, giftMessage } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const v4Result = v1.v4();
        cResult[0] = v4Result;
        let first = v4Result;
        const tmpResult = v1;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { isGift: true, analyticsLoadId: first, analyticsLocations: [] };
        const basePurchaseFlowAnalyticsFields = PremiumAnalyticsUtils.getBasePurchaseFlowAnalyticsFields(obj2);
        cResult[1] = basePurchaseFlowAnalyticsFields;
        let tmp6 = basePurchaseFlowAnalyticsFields;
        const tmpResult2 = PremiumAnalyticsUtils;
      } else {
        tmp6 = cResult[1];
      }
      if ("giftSku" === requestType) {
        if (null != selectedSkuId) {
          if (null != giftRecipientId) {
            const _Symbol = Symbol;
            if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
              const fn = function b() {};
              class I {
                constructor() {
                  return;
                }
              }
              cResult[2] = fn;
              cResult[3] = I;
              let tmp16 = I;
              let tmp15 = fn;
            } else {
              tmp15 = cResult[2];
              class I {
                constructor() {
                  return;
                }
              }
            }
            if (cResult[4] === giftMessage) {
              if (cResult[5] === giftRecipientId) {
                class I {
                  constructor() {
                    return;
                  }
                }
              }
            }
            const obj3 = {
              basePurchaseAnalytics: tmp6,
              onClose: tmp15,
              setCurrentAnalyticsStep: tmp16,
              children: null,
            };
            tmp15 = GiftPurchaseSKUView;
            const obj4 = { selectedSkuId, giftRecipientId, giftMessage };
            tmp16 = __initData(GiftPurchaseSKUView, obj4);
            obj3.children = tmp16;
            const tmp19 = __initData(NativeGiftContext.NativeGiftContextProvider, obj3);
            cResult[4] = giftMessage;
            cResult[5] = giftRecipientId;
            cResult[6] = selectedSkuId;
            cResult[7] = tmp19;
          }
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {
            return;
          }
        }
        cResult[8] = tmp11;
        let tmp9 = tmp11;
      } else {
        tmp9 = cResult[8];
      }
      let str = "none";
      if (null != requestType) {
        str = requestType;
      }
      if (cResult[9] !== str) {
        class I {
          constructor() {
            return;
          }
        }
        const obj5 = { children: null };
        const items = [tmp9];
        const obj6 = { variant: "text-md/normal", color: "text-feedback-warning", children: null };
        const items1 = ["Request type: ", str];
        obj6.children = items1;
        items[1] = closure_1_11(Text_Text.Text, obj6);
        obj5.children = items;
        const tmp14 = closure_1_11(View, obj5);
        cResult[9] = str;
        cResult[10] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[10];
      }
      if (cResult[11] !== tmp12) {
        class I {
          constructor() {
            return;
          }
        }
        tmp22[0] = tmp12;
        const tmp23 = __initData(Sheet_BottomSheet.BottomSheet, tmp22);
        cResult[11] = tmp12;
        cResult[12] = tmp23;
        let tmp20 = tmp23;
      } else {
        tmp20 = cResult[12];
      }
      return tmp20;
    }
  : function SimpleRequestOTPActionSheet(giftMessage) {
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
              onClose() {},
              setCurrentAnalyticsStep() {},
              children: null,
            };
            const obj3 = { selectedSkuId, giftRecipientId, giftMessage: giftMessage.giftMessage };
            obj2.children = closure_12(GiftPurchaseSKUView, obj3);
            let tmp6Result = closure_12(tmp(10040).NativeGiftContextProvider, obj2);
            let tmp8 = closure_12;
          }
          const obj4 = { children: tmp6Result };
          return tmp8(tmp(6829).BottomSheet, obj4);
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
      const obj5 = { children: null };
      const obj6 = { variant: "text-md/normal", color: "text-feedback-warning", children: null };
      const items1 = ["Request type: ", str];
      obj6.children = items1;
      items[1] = closure_11(require("Text/Text").Text, obj6);
      obj5.children = items;
      tmp6Result = closure_11(View, obj5);
      const obj = require("v1");
    };
ReactCompilerGating = fn(558);
let tmp3 = new LoggerDefault("PaymentFlowTest.android");
const size = fn(2);
const result = size.fileFinishedImporting("modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function SimpleCreateOTPActionSheetWrapper(arg0) {
      const cResult = c.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const obj2 = { skuIDs: first, activeSubscription: null, children: null };
        const obj3 = {};
        const merged = Object.assign(arg0);
        obj2.children = __initData(closure_15, obj3);
        const tmp11 = __initData(NativePaymentContext.NativePaymentContextProvider, obj2);
        cResult[1] = arg0;
        cResult[2] = tmp11;
        let tmp5 = tmp11;
      } else {
        tmp5 = cResult[2];
      }
      return tmp5;
    }
  : function SimpleCreateOTPActionSheetWrapper(arg0) {
      const obj = { skuIDs: [], activeSubscription: null, children: null };
      const merged = Object.assign(arg0);
      obj.children = __initData(closure_15, {});
      return __initData(NativePaymentContext.NativePaymentContextProvider, obj);
    };
