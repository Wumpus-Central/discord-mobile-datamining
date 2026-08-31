// discord_app/modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx
import timestampDefault from "../../../debug/Logger.tsx";
import NativePaymentContextProvider from "../../../payments/native/NativePaymentContext.tsx";
import closure_3 from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_7 from "../../../../stores/UserStore.tsx";
import closure_8 from "../../../../stores/game_store/SKUStore.tsx";
import { PriceSetAssignmentPurchaseTypes as closure_9 } from "../../../../Constants.tsx";
import { PremiumTypes } from "../../../premium/PremiumConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import { v1 } from "../../../../../_runtime/00514_v1.js";

require = arg1;
function GiftPurchaseSKUView(selectedSkuId) {
  selectedSkuId = selectedSkuId.selectedSkuId;
  ({ giftRecipientId, giftMessage } = selectedSkuId);
  let first;
  dependencyMap = undefined;
  let currentUser;
  let callback;
  let React;
  let memo;
  let memo1;
  closure_8 = undefined;
  function _submitGiftPurchase() {
    const self = this;
    const tmp = currentUser(function*() {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = tmp3;
              let message = tmp7;
              c3 = 1;
              if (null == c5) {
                closure_1_13.error("Cannot proceed with purchase: collectibleProduct is undefined");
                closure_1_1(closure_1_2[19]).show({ title: "Product Not Found", body: "The product information could not be loaded. Please try again." });
                c3 = 0;
                c5 = 3;
                obj1 = { value: null, done: true };
                obj1[0] = undefined;
                return obj1;
              } else {
                if (null != tmp43.googleSkuIds) {
                  if (0 !== closure_1_6.length) {
                    c4 = 2;
                    c5 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = closure_1_8();
                    return obj2;
                  }
                }
                const _HermesInternal2 = HermesInternal;
                closure_1_13.error("No Google SKU IDs available for product " + tmp43.skuId);
                let obj4 = closure_1_1(closure_1_2[19]);
                obj4.show({ title: "Product Not Available", body: "This product is not available for purchase on Google Play." });
                c3 = 0;
                c5 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = undefined;
                return obj3;
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              message = closure_2;
              closure_1_13.warn("Error creating gift purchase:", message);
              obj1 = closure_1_1(closure_1_2[19]);
              message = undefined;
              if (message != null) {
                message = message.message;
              }
              if (!message) {
                const _JSON = JSON;
                message = JSON.stringify(message);
              }
              obj4 = { title: "Gift Purchase Failed", body: null };
              const _HermesInternal = HermesInternal;
              obj4[1] = "Error: " + message;
              obj1.show(obj4);
              c5 = 3;
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              c3 = 0;
            }
            c3 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp33) {
          closure_2 = tmp33;
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp33;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    closure_9 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const rect = first(1628)();
  let obj = React;
  const tmp4 = callback(React.useState(false), 2);
  first = tmp4[0];
  dependencyMap = tmp4[1];
  currentUser = memo1.getCurrentUser();
  callback = React.useRef({});
  obj1 = selectedSkuId(10438);
  const giftStyle = obj1.useNativeGiftContext().giftStyle;
  let obj2 = selectedSkuId(589);
  let items = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items, () => closure_8.get(selectedSkuId));
  let obj3 = selectedSkuId(8460);
  const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(selectedSkuId);
  const product = fetchCollectiblesProduct.product;
  React = product;
  let isFetching = fetchCollectiblesProduct.isFetching;
  const items1 = [selectedSkuId];
  const effect = React.useEffect(() => {
    if (null != selectedSkuId) {
      const collectiblesProduct = selectedSkuId(7254).fetchCollectiblesProduct(tmp);
      const obj = selectedSkuId(7254);
    }
  }, items1);
  const items2 = [product, currentUser, selectedSkuId];
  memo = React.useMemo(() => {
    if (null != c5) {
      if (null != tmp.googleSkuIds) {
        const googleSkuIds = tmp.googleSkuIds;
        if (obj.isPremium(currentUser, closure_1_10.TIER_2)) {
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
    closure_1_13.warn("No googleSkuIds available for product: " + selectedSkuId);
    return [];
  }, items2);
  const items3 = [memo];
  memo1 = React.useMemo(() => {
    const sorted = memo.sort();
    return sorted.join(",");
  }, items3);
  const items4 = [memo, first, memo1];
  const effect1 = React.useEffect(() => {
    function _loadGoogleSkus() {
      const self = this;
      const tmp = currentUser(function*() {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp6 === 3) {
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
            c5 = 2;
            if (0 === ref) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                closure_1 = tmp3;
                let callback = tmp7;
                if (null == closure_1_7) {
                  if (0 !== closure_1_6.length) {
                    if (!closure_1_1) {
                      closure_1_2(true);
                      c3 = 1;
                      obj1 = callback(closure_2_2[16]);
                      ref = 2;
                      c5 = 1;
                      obj1 = { value: null, done: false };
                      obj1[0] = obj1.loadInAppSkus(tmp27);
                      return obj1;
                    }
                  }
                }
              }
            } else {
              if (1 === tmp7) {
                c3 = 0;
                callback = closure_2;
                closure_2_13.error("Unable to fetch product IDs from Google Play store:", callback);
                closure_1_2(false);
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                if (null != closure_1_7) {
                  ref.current[closure_1_7] = true;
                }
                closure_1_2(false);
                c3 = 0;
              }
              c3 = 0;
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            }
            c5 = 3;
          } catch (tmp33) {
            closure_2 = tmp33;
            if (tmp4 === c3) {
              c5 = tmp2;
              throw tmp33;
            } else {
              ref = tmp;
            }
          }
        }
      });
      closure_0 = tmp;
      const apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    !(function loadGoogleSkus() {
      const self = this;
      const apply = _loadGoogleSkus.apply;
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
    obj = { skuId: null, googleSkuIds: null };
    obj[0] = selectedSkuId;
    obj[1] = {};
    tmp14 = obj;
  }
  obj = {
    product: tmp14,
    onPurchaseComplete() {
      first(4415).hideActionSheet();
    },
    onPurchaseError() {
      logger.error("Purchase error occurred");
    },
    onPurchasePending() {
      logger.info("Purchase is pending");
    },
    giftParams: { isGift: true, options: { recipient_id: giftRecipientId, custom_message: giftMessage, gift_style: giftStyle } }
  };
  closure_8 = tmp(10720)(obj);
  const items5 = [product];
  [tmp16, tmp17] = callback(obj.useMemo(() => {
    if (null == c5) {
      let items = ["Loading...", "Loading..."];
    } else {
      items = [selectedSkuId(7267).getFormattedPriceForCollectiblesProduct(tmp, true, true), ];
      const obj = selectedSkuId(7267);
      items[1] = selectedSkuId(7267).getFormattedPriceForCollectiblesProduct(tmp, false, true);
      const obj2 = selectedSkuId(7267);
    }
    return items;
  }, items5), 2);
  if (!isFetching) {
    isFetching = first;
  }
  if (!isFetching) {
    isFetching = null == product;
  }
  obj1 = { spacing: 24, style: obj2, children: null };
  obj2 = { paddingTop: rect.top, paddingBottom: rect.bottom, paddingHorizontal: 12 };
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
  const items7 = [closure_11(selectedSkuId(4444).Text, { variant: "text-md/medium", color: "text-overlay-light", children: items6 }), , ];
  let str4 = "Send Gift";
  if (isFetching) {
    str4 = "Loading...";
  }
  obj3 = { children: tmp21(tmp7(4896).Button, obj4) };
  items7[1] = closure_12(selectedSkuId(5569).Card, obj3);
  const obj5 = { children: null };
  const items8 = ["Select style: ", giftStyle];
  const items9 = [closure_11(selectedSkuId(4444).Text, { variant: "text-md/medium", color: "text-overlay-light", children: items8 }), closure_12(first(10563), {})];
  obj5[0] = items9;
  items7[2] = closure_11(selectedSkuId(5569).Card, obj5);
  obj1[2] = items7;
  return closure_11(selectedSkuId(4894).Stack, obj1);
}
function SimpleRequestOTPActionSheet(giftMessage) {
  ({ selectedSkuId, requestType, giftRecipientId } = giftMessage);
  let _require;
  let obj = v1;
  const v4Result = obj.v4();
  _require = v4Result;
  [][0] = v4Result;
  if ("giftSku" === requestType) {
    if (null != selectedSkuId) {
      if (null != giftRecipientId) {
        obj = { basePurchaseAnalytics: null, onClose: null, setCurrentAnalyticsStep: null, children: null };
        obj[0] = tmp4;
        obj[1] = function onClose() {

        };
        obj[2] = function setCurrentAnalyticsStep() {

        };
        obj = { selectedSkuId: null, giftRecipientId: null, giftMessage: null };
        obj[0] = selectedSkuId;
        obj[1] = giftRecipientId;
        obj[2] = giftMessage.giftMessage;
        obj[3] = callback2(GiftPurchaseSKUView, obj);
        let tmp6Result = callback2(tmp(10438).NativeGiftContextProvider, obj);
        let tmp8 = callback2;
      }
      obj1 = { children: null };
      obj1[0] = tmp6Result;
      return tmp8(tmp(5590).BottomSheet, obj1);
    }
  }
  tmp8 = callback2;
  const items = [callback2(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-lg/bold", color: "text-feedback-warning", children: "Gift purchasing is the only supported feature on Android in this version." }), ];
  let str = "none";
  if (null != requestType) {
    str = requestType;
  }
  const obj2 = { children: null };
  const items1 = ["Request type: ", str];
  items[1] = closure_11(require("../../../../design/components/Text/native/Text.tsx").Text, { variant: "text-md/normal", color: "text-feedback-warning", children: items1 });
  obj2[0] = items;
  tmp6Result = tmp6(View, obj2);
}
({ jsxs: unpackModuleId, jsx: closure_12 } = jsxProd);
let closure_13 = new timestampDefault("PaymentFlowTest.android");
const tmp3 = new timestampDefault("PaymentFlowTest.android");
const result = require("set").fileFinishedImporting("modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx");

export default function SimpleCreateOTPActionSheetWrapper(arg0) {
  let obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[2] = callback2(SimpleRequestOTPActionSheet, obj);
  return callback2(NativePaymentContextProvider.NativePaymentContextProvider, obj);
};