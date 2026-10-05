// discord_app/modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx
import LoggerDefault from "../../../debug/Logger.tsx";
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import v1 from "../../../../../_runtime/01266_v1.js";
import PremiumConstants from "../../../premium/PremiumConstants.tsx";
import PremiumTypeUtils from "../../../../utils/PremiumTypeUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import CollectiblesActionCreators from "../../../collectibles/CollectiblesActionCreators.tsx";
import CollectiblesUtils from "../../../collectibles/CollectiblesUtils.tsx";
import PremiumAnalyticsUtils from "../../../premium/native/PremiumAnalyticsUtils.tsx";
import NativeGiftContext from "../../../payments/native/NativeGiftContext.tsx";
import NativePaymentContext from "../../../payments/native/NativePaymentContext.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import SKUStore from "../../../../stores/game_store/SKUStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c4, dependencyMap;

let closure_12;
let unpackModuleId;
function GiftPurchaseSKUView(selectedSkuId) {
  let _undefined;
  let closure_2;
  let closure_4;
  let first;
  let giftMessage;
  let giftRecipientId;
  let items7;
  let items8;
  let items9;
  let logger;
  let obj10;
  let obj7;
  let tmp16;
  let tmp17;
  const f120679 = () => {
    let items;
    if (null == c5) {
      items = ["Loading...", "Loading..."];
    } else {
      items = [,];
      obj = CollectiblesUtils;
      items[0] = obj.getFormattedPriceForCollectiblesProduct(c5, true, true);
      const obj2 = CollectiblesUtils;
      items[1] = obj2.getFormattedPriceForCollectiblesProduct(c5, false, true);
    }
    return items;
  };
  selectedSkuId = selectedSkuId.selectedSkuId;
  ({ giftRecipientId, giftMessage } = selectedSkuId);
  first = undefined;
  dependencyMap = undefined;
  _slicedToArray = undefined;
  react = undefined;
  let memo1;
  let closure_8;
  let obj = function _submitGiftPurchase() {
    let length;
    obj = _asyncToGenerator(async () => {
      let closure_1;
      if (1 === c4) {
        let c3 = 0;
        let message = closure_2;
        logger.warn("Error creating gift purchase:", message);
        message = undefined;
        const show = tmp(closure_2[19]).show;
        const tmp14 = tmp(closure_2[19]);
        if (message != null) {
          message = message.message;
        }
        if (!message) {
          const _JSON = JSON;
          message = JSON.stringify(message);
        }
        const obj9 = { title: "Gift Purchase Failed", body: "Error: " + message };
        const _HermesInternal = HermesInternal;
        show(obj9);
      } else if (arg0 === 1) {
        let c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c3 = 0;
      }
      await "IconComponent";
      message = tmp4;
      if (null == _undefined) {
        logger.error("Cannot proceed with purchase: collectibleProduct is undefined");
        const obj6 = tmp(closure_2[19]);
        obj6.show({
          title: "Product Not Found",
          body: "The product information could not be loaded. Please try again.",
        });
      }
      if (null != _undefined.googleSkuIds) {
        if (0 !== length.length) {
          c4 = 2;
          c5 = 1;
          const obj7 = { value: closure_2_8(), done: false };
          return obj7;
        }
      }
      const _HermesInternal2 = HermesInternal;
      logger.error("No Google SKU IDs available for product " + _undefined.skuId);
      const obj4 = tmp(closure_2[19]);
      obj4.show({ title: "Product Not Available", body: "This product is not available for purchase on Google Play." });
    });
    return obj(...arguments);
  };
  let tmp = first;
  let tmp2 = dependencyMap;
  const rect = first(1618)();
  obj = react;
  const tmp3 = _slicedToArray;
  [first, dependencyMap] = react.useState(false);
  const currentUser = memo1.getCurrentUser();
  _slicedToArray = react.useRef({});
  let obj2 = selectedSkuId(10430);
  const giftStyle = obj2.useNativeGiftContext().giftStyle;
  let obj3 = selectedSkuId(504);
  let items = [closure_8];
  const stateFromStores = obj3.useStateFromStores(items, () => SKUStore.get(selectedSkuId));
  let obj4 = selectedSkuId(10778);
  const fetchCollectiblesProduct = obj4.useFetchCollectiblesProduct(selectedSkuId);
  const product = fetchCollectiblesProduct.product;
  react = product;
  let isFetching = fetchCollectiblesProduct.isFetching;
  const items1 = [selectedSkuId];
  const effect = react.useEffect(() => {
    if (null != selectedSkuId) {
      obj = CollectiblesActionCreators;
      const collectiblesProduct = obj.fetchCollectiblesProduct(tmp);
    }
  }, items1);
  const items2 = [product, currentUser, selectedSkuId];
  const memo = react.useMemo(() => {
    if (null != _undefined) {
      if (null != _undefined.googleSkuIds) {
        let tmp2;
        let values;
        const googleSkuIds = _undefined.googleSkuIds;
        obj = PremiumTypeUtils;
        if (obj.isPremium(currentUser, PremiumTypes.TIER_2)) {
          tmp2 = googleSkuIds[closure_9.MOBILE_PREMIUM_TIER_2];
        } else {
          tmp2 = googleSkuIds[closure_9.MOBILE];
        }
        if (null == tmp2) {
          const items = [tmp2];
          values = items;
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
  memo1 = react.useMemo(() => {
    const sorted = memo.sort();
    return sorted.join(",");
  }, items3);
  const items4 = [memo, first, memo1];
  const effect1 = react.useEffect(() => {
    function loadGoogleSkus() {
      return obj(...arguments);
    }
    obj = function _loadGoogleSkus() {
      obj = _asyncToGenerator(async () => {
        let obj2;
        let ref;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj3 = { value, done: true };
            return obj3;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            let closure_0;
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
                let closure_1 = tmp;
                closure_0 = tmp4;
                if (null == closure_1_7) {
                  if (0 !== length.length) {
                    const tmp25 = closure_1;
                    if (!tmp25) {
                      tmp30(true);
                      c3 = 1;
                      ref = 2;
                      c5 = 1;
                      const obj5 = { value: obj2.loadInAppSkus(tmp24), done: false };
                      obj2 = closure_2_0(closure_2_2[16]);
                      return obj5;
                    }
                  }
                }
              }
            } else if (1 === ref) {
              c3 = 0;
              closure_0 = tmp30;
              logger.error("Unable to fetch product IDs from Google Play store:", closure_0);
              tmp30(false);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              if (null != closure_1_7) {
                ref.current[closure_1_7] = true;
              }
              tmp30(false);
              c3 = 0;
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          } catch (tmp30) {
            if (0 === c3) {
              c5 = 3;
              throw tmp30;
            } else {
              ref = 1;
            }
          }
        }
      });
      return obj(...arguments);
    };
    const tmp = !loadGoogleSkus();
  }, items4);
  let tmp14 = product;
  if (null == product) {
    let obj5 = { skuId: selectedSkuId, googleSkuIds: {} };
    tmp14 = obj5;
  }
  let obj6 = {
    product: tmp14,
    onPurchaseComplete() {
      obj = first(closure_2[18]);
      obj.hideActionSheet();
    },
    onPurchaseError() {
      logger.error("Purchase error occurred");
    },
    onPurchasePending() {
      logger.info("Purchase is pending");
    },
    giftParams: obj7,
  };
  obj7 = {
    isGift: true,
    options: { recipient_id: giftRecipientId, custom_message: giftMessage, gift_style: giftStyle },
  };
  closure_8 = tmp(10750)(obj6);
  const items5 = [product];
  [tmp16, tmp17] = tmp3(obj.useMemo(f120679, items5), 2);
  tmp3(obj.useMemo(f120679, items5), 2);
  if (!isFetching) {
    isFetching = first;
  }
  if (!isFetching) {
    isFetching = null == product;
  }
  const obj8 = {
    spacing: 24,
    style: { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 },
    children: items7,
  };
  const Stack = tmp7(5593).Stack;
  let name;
  const Text = tmp7(4886).Text;
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
  items7 = [closure_11(Text, { variant: "text-md/medium", color: "text-overlay-light", children: items6 }), ,];
  const Card = tmp7(5995).Card;
  let str4 = "Send Gift";
  const Button = tmp7(5594).Button;
  if (isFetching) {
    str4 = "Loading...";
  }
  let obj9 = { children: closure_12(Button, obj10) };
  obj10 = {
    variant: "primary",
    text: str4,
    onPress: function submitGiftPurchase() {
      return obj(...arguments);
    },
    disabled: isFetching,
  };
  items7[1] = closure_12(Card, obj9);
  const obj11 = { children: items9 };
  const Card2 = tmp7(5995).Card;
  const obj12 = { variant: "text-md/medium", color: "text-overlay-light", children: items8 };
  items8 = ["Select style: ", giftStyle];
  items9 = [closure_11(tmp7(4886).Text, obj12), closure_12(tmp(10561), {})];
  items7[2] = closure_11(Card2, obj11);
  return closure_11(Stack, obj8);
}
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
const View = react_native.View;
let closure_9 = Constants.PriceSetAssignmentPurchaseTypes;
const PremiumTypes = PremiumConstants.PremiumTypes;
({ jsxs: unpackModuleId, jsx: closure_12 } = Fragment);
let tmp3 = new LoggerDefault("PaymentFlowTest.android");
let closure_13 = tmp3;
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SimpleRequestOTPActionSheet(arg0) {
      let first;
      let giftMessage;
      let giftRecipientId;
      let items;
      let items1;
      let obj4;
      let requestType;
      let selectedSkuId;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(13);
      ({ selectedSkuId, requestType, giftRecipientId, giftMessage } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = v1;
        const v4Result = tmpResult.v4();
        cResult[0] = v4Result;
        first = v4Result;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { isGift: true, analyticsLoadId: first, analyticsLocations: [] };
        const tmpResult2 = PremiumAnalyticsUtils;
        const basePurchaseFlowAnalyticsFields = tmpResult2.getBasePurchaseFlowAnalyticsFields(obj2);
        cResult[1] = basePurchaseFlowAnalyticsFields;
        tmp6 = basePurchaseFlowAnalyticsFields;
      } else {
        tmp6 = cResult[1];
      }
      if ("giftSku" === requestType) {
        if (null != selectedSkuId) {
          if (null != giftRecipientId) {
            let tmp15;
            const _Symbol = Symbol;
            if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
              const fn = function b() {};
              class I {
                constructor() {}
              }
              cResult[2] = fn;
              cResult[3] = I;
              tmp15 = fn;
            } else {
              tmp15 = cResult[2];
              class I {
                constructor() {}
              }
            }
            if (cResult[4] === giftMessage) {
              if (cResult[5] === giftRecipientId) {
                class I {
                  constructor() {}
                }
              }
            }
            const obj3 = {
              basePurchaseAnalytics: tmp6,
              onClose: tmp15,
              setCurrentAnalyticsStep: I,
              children: closure_12(GiftPurchaseSKUView, obj4),
            };
            obj4 = { selectedSkuId, giftRecipientId, giftMessage };
            const NativeGiftContextProvider = NativeGiftContext.NativeGiftContextProvider;
            cResult[4] = giftMessage;
            cResult[5] = giftRecipientId;
            cResult[6] = selectedSkuId;
            cResult[7] = closure_12(NativeGiftContextProvider, obj3);
            const tmp20 = closure_12(NativeGiftContextProvider, obj3);
          }
          return tmp21;
        }
      }
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        class I {
          constructor() {}
        }
        cResult[8] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[8];
      }
      let str = "none";
      if (null != requestType) {
        str = requestType;
      }
      if (cResult[9] !== str) {
        class I {
          constructor() {}
        }
        const obj5 = { children: items };
        items = [tmp9];
        const obj6 = { variant: "text-md/normal", color: "text-feedback-warning", children: items1 };
        items1 = ["Request type: ", str];
        items[1] = unpackModuleId(Text_Text.Text, obj6);
        cResult[9] = str;
        cResult[10] = unpackModuleId(View, obj5);
        const tmp14 = unpackModuleId(View, obj5);
      }
    }
  : function SimpleRequestOTPActionSheet(giftMessage) {
      let analyticsLoadId;
      let giftRecipientId;
      let items1;
      let obj3;
      let requestType;
      let selectedSkuId;
      ({ selectedSkuId, requestType, giftRecipientId } = giftMessage);
      _require = undefined;
      giftMessage = giftMessage.giftMessage;
      let obj = require("v1");
      const v4Result = obj.v4();
      _require = v4Result;
      [][0] = v4Result;
      if ("giftSku" === requestType) {
        if (null != selectedSkuId) {
          let tmp6Result;
          let tmp8;
          if (null != giftRecipientId) {
            let obj2 = {
              basePurchaseAnalytics: tmp4,
              onClose() {},
              setCurrentAnalyticsStep() {},
              children: closure_12(GiftPurchaseSKUView, obj3),
            };
            obj3 = { selectedSkuId, giftRecipientId, giftMessage };
            const NativeGiftContextProvider = tmp(10430).NativeGiftContextProvider;
            tmp6Result = closure_12(NativeGiftContextProvider, obj2);
            tmp8 = closure_12;
          }
          const obj4 = { children: tmp6Result };
          return tmp8(require("Sheet/BottomSheet").BottomSheet, obj4);
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
      const Text = tmp(4886).Text;
      if (null != requestType) {
        str = requestType;
      }
      const obj6 = { variant: "text-md/normal", color: "text-feedback-warning", children: items1 };
      items1 = ["Request type: ", str];
      const obj5 = { children: items };
      items[1] = closure_11(Text, obj6);
      tmp6Result = closure_11(View, obj5);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SimpleCreateOTPActionSheetWrapper(arg0) {
      let first;
      let obj3;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const obj2 = { skuIDs: first, activeSubscription: null, children: closure_12(closure_15, obj3) };
        obj3 = {};
        const NativePaymentContextProvider = NativePaymentContext.NativePaymentContextProvider;
        const merged = Object.assign(arg0);
        const tmp11 = closure_12(NativePaymentContextProvider, obj2);
        cResult[1] = arg0;
        cResult[2] = tmp11;
        tmp5 = tmp11;
      } else {
        tmp5 = cResult[2];
      }
      return tmp5;
    }
  : function SimpleCreateOTPActionSheetWrapper(arg0) {
      let obj2;
      const obj = { skuIDs: [], activeSubscription: null, children: closure_12(closure_15, obj2) };
      obj2 = {};
      const NativePaymentContextProvider = NativePaymentContext.NativePaymentContextProvider;
      const merged = Object.assign(arg0);
      return closure_12(NativePaymentContextProvider, obj);
    };
const result = size.fileFinishedImporting("modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx");

export default tmp4;
