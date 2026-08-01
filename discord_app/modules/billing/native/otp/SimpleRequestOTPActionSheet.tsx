// === Module 14810: GiftPurchaseSKUView ===

// Module 14810 (GiftPurchaseSKUView)
import addSku from "addSku";
import _slicedToArray from "_slicedToArray";
import module_4533 from "module_4533";
import { View } from "useMobileCollectiblesPurchaseSKU";
import mergeGuildAvatar from "mergeGuildAvatar";
import closure_8 from "addSku";
import { PriceSetAssignmentPurchaseTypes as closure_9 } from "ME";
import { PremiumTypes } from "GuildFeatures";
import jsxProd from "Stack";

let closure_12;
let unpackModuleId;
const require = arg1;
function GiftPurchaseSKUView(selectedSkuId) {
  let giftMessage;
  let giftRecipientId;
  let tmp16;
  let tmp17;
  selectedSkuId = selectedSkuId.selectedSkuId;
  ({ giftRecipientId, giftMessage } = selectedSkuId);
  let first;
  let dependencyMap;
  let currentUser;
  let callback;
  let React;
  let memo;
  let memo1;
  let closure_8;
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
          return { value: "HermesInternal", done: null };
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
              let closure_1 = tmp3;
              let message = tmp7;
              let c3 = 1;
              if (null == c5) {
                outer1_13.error("Cannot proceed with purchase: collectibleProduct is undefined");
                outer1_1(outer1_2[19]).show({ title: "Product Not Found", body: "The product information could not be loaded. Please try again." });
                c3 = 0;
                c5 = 3;
                let obj1 = { value: null, done: true };
                obj1[0] = undefined;
                return obj1;
              } else {
                if (null != tmp43.googleSkuIds) {
                  if (0 !== outer1_6.length) {
                    c4 = 2;
                    c5 = 1;
                    const obj2 = { value: null, done: false };
                    obj2[0] = outer1_8();
                    return obj2;
                  }
                }
                const _HermesInternal2 = HermesInternal;
                outer1_13.error("No Google SKU IDs available for product " + tmp43.skuId);
                let obj4 = outer1_1(outer1_2[19]);
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
              outer1_13.warn("Error creating gift purchase:", message);
              obj1 = outer1_1(outer1_2[19]);
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
    const _submitGiftPurchase = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  const rect = first(1581)();
  let obj = React;
  const tmp4 = callback(React.useState(false), 2);
  first = tmp4[0];
  dependencyMap = tmp4[1];
  currentUser = memo1.getCurrentUser();
  callback = React.useRef({});
  let obj1 = selectedSkuId(8813);
  const giftStyle = obj1.useNativeGiftContext().giftStyle;
  let obj2 = selectedSkuId(589);
  let items = [closure_8];
  const stateFromStores = obj2.useStateFromStores(items, () => closure_8.get(selectedSkuId));
  let obj3 = selectedSkuId(8048);
  const fetchCollectiblesProduct = obj3.useFetchCollectiblesProduct(selectedSkuId);
  const product = fetchCollectiblesProduct.product;
  React = product;
  let isFetching = fetchCollectiblesProduct.isFetching;
  const items1 = [selectedSkuId];
  const effect = React.useEffect(() => {
    if (null != selectedSkuId) {
      const collectiblesProduct = selectedSkuId(5802).fetchCollectiblesProduct(tmp);
      const obj = selectedSkuId(5802);
    }
  }, items1);
  const items2 = [product, currentUser, selectedSkuId];
  memo = React.useMemo(() => {
    if (null != c5) {
      if (null != tmp.googleSkuIds) {
        const googleSkuIds = tmp.googleSkuIds;
        if (obj.isPremium(currentUser, outer1_10.TIER_2)) {
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
    outer1_13.warn("No googleSkuIds available for product: " + selectedSkuId);
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
            return { value: "HermesInternal", done: null };
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
                let closure_1 = tmp3;
                let callback = tmp7;
                if (null == outer1_7) {
                  if (0 !== outer1_6.length) {
                    if (!outer1_1) {
                      outer1_2(true);
                      let c3 = 1;
                      let obj1 = callback(outer2_2[16]);
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
                outer2_13.error("Unable to fetch product IDs from Google Play store:", callback);
                outer1_2(false);
              } else if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 !== 2) {
                if (null != outer1_7) {
                  ref.current[outer1_7] = true;
                }
                outer1_2(false);
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
      const _loadGoogleSkus = tmp;
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
      first(4161).hideActionSheet();
    },
    onPurchaseError() {
      logger.error("Purchase error occurred");
    },
    onPurchasePending() {
      logger.info("Purchase is pending");
    },
    giftParams: { isGift: true, options: { recipient_id: giftRecipientId, custom_message: giftMessage, gift_style: giftStyle } }
  };
  closure_8 = tmp(11902)(obj);
  const items5 = [product];
  [tmp16, tmp17] = callback(obj.useMemo(() => {
    if (null == c5) {
      let items = ["Loading...", "Loading..."];
    } else {
      items = [selectedSkuId(5815).getFormattedPriceForCollectiblesProduct(tmp, true, true), ];
      const obj = selectedSkuId(5815);
      items[1] = selectedSkuId(5815).getFormattedPriceForCollectiblesProduct(tmp, false, true);
      const obj2 = selectedSkuId(5815);
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
  const items7 = [closure_11(selectedSkuId(4189).Text, { variant: "text-md/medium", color: "text-overlay-light", children: items6 }), , ];
  let str4 = "Send Gift";
  if (isFetching) {
    str4 = "Loading...";
  }
  obj3 = { children: tmp21(tmp7(4604).Button, obj4) };
  items7[1] = closure_12(selectedSkuId(5226).Card, obj3);
  const obj5 = { children: null };
  const items8 = ["Select style: ", giftStyle];
  const items9 = [closure_11(selectedSkuId(4189).Text, { variant: "text-md/medium", color: "text-overlay-light", children: items8 }), closure_12(first(8786), {})];
  obj5[0] = items9;
  items7[2] = closure_11(selectedSkuId(5226).Card, obj5);
  obj1[2] = items7;
  return closure_11(selectedSkuId(4602).Stack, obj1);
}
function SimpleRequestOTPActionSheet(giftMessage) {
  let giftRecipientId;
  let requestType;
  let selectedSkuId;
  ({ selectedSkuId, requestType, giftRecipientId } = giftMessage);
  let _require;
  let obj = _require(514);
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
        let tmp6Result = callback2(tmp(8813).NativeGiftContextProvider, obj);
        let tmp8 = callback2;
      }
      const obj1 = { children: null };
      obj1[0] = tmp6Result;
      return tmp8(tmp(5247).BottomSheet, obj1);
    }
  }
  tmp8 = callback2;
  const items = [callback2(_require(4189).Text, { variant: "text-lg/bold", color: "text-feedback-warning", children: "Gift purchasing is the only supported feature on Android in this version." }), ];
  let str = "none";
  if (null != requestType) {
    str = requestType;
  }
  const obj2 = { children: null };
  const items1 = ["Request type: ", str];
  items[1] = closure_11(_require(4189).Text, { variant: "text-md/normal", color: "text-feedback-warning", children: items1 });
  obj2[0] = items;
  tmp6Result = tmp6(View, obj2);
}
({ jsxs: unpackModuleId, jsx: closure_12 } = jsxProd);
const tmp3 = new require("get ActivityIndicator")("PaymentFlowTest.android");
const result = require("noop").fileFinishedImporting("modules/billing/native/otp/SimpleRequestOTPActionSheet.tsx");

export default function SimpleCreateOTPActionSheetWrapper(arg0) {
  let obj = { skuIDs: [], activeSubscription: null, children: null };
  obj = {};
  const merged = Object.assign(arg0);
  obj[2] = callback2(SimpleRequestOTPActionSheet, obj);
  return callback2(require(8773) /* NativePaymentContextProvider */.NativePaymentContextProvider, obj);
};