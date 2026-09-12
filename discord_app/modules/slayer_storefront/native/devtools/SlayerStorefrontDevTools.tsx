// === Module 15809: SlayerStorefrontDevTools ===

// Module 15809 (SlayerStorefrontDevTools)
import nativeDefault from "native" /* 576 */;
import GPlayActionCreators from "GPlayActionCreators" /* 9497 */;
import _slicedToArray from "module_32" /* 32 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import SKUStore from "SKUStore" /* 5591 */;
import IAPStore from "IAPStore" /* 7340 */;

require = fn;
let closure_16 = async function _describeStorefrontSkuFailure(arg0) {
  if (c9 === 2) {
    c9 = 3;
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
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp7;
          closure_132_0 = undefined;
          let status;
          let body;
          closure_132_3 = undefined;
          c7 = 1;
          const result = closure_2_11.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(closure_0, closure_1);
          const HTTP = require("HTTPUtils").HTTP;
          let obj1 = { url: result, rejectWithError: false };
          c8 = 2;
          c9 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c7 = 0;
        closure_2 = closure_6;
        if (closure_6 == null) {
          closure_2 = {};
        }
        closure_132_0 = closure_2;
        status = closure_132_0.status;
        body = closure_132_0.body;
        obj1 = closure_133_0(closure_133_2[11]);
        closure_132_3 = obj1.stringifyErrors(body);
        c3 = status;
        if (status == null) {
          c3 = "?";
        }
        if (closure_132_3.length > 0) {
          let json = closure_132_3;
        } else {
          const _JSON = JSON;
          json = JSON.stringify(body);
        }
        const _HermesInternal = HermesInternal;
        const combined = "HTTP " + c3 + " \u00B7 " + json;
        c9 = 3;
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        c9 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        c7 = 0;
        c9 = 3;
        return { value: "retry succeeded, but the SKU never landed in SKUStore", done: true };
      }
    } catch (tmp27) {
      closure_6 = tmp27;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp27;
      } else {
        c8 = tmp;
      }
    }
  }
};
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const Constants = fn(1074);
({ Endpoints: closure_11, PriceSetAssignmentPurchaseTypes: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
fn(4636);
let createStyles = { wrap: null, inputRow: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles.wrap = createStyles;
createStyles.inputRow = { padding: nativeDefault.space.PX_12 };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/slayer_storefront/native/devtools/SlayerStorefrontDevTools.tsx");

export default function SlayerStorefrontDevTools() {
  const tmp = closure_15();
  let obj = first1;
  [str, tmp6] = first(first1.useState(""), 2);
  const tmp4 = first;
  const tmp5 = first(first1.useState(""), 2);
  [str2, tmp8] = first(first1.useState(""), 2);
  const trimmed = str.trim();
  _require = trimmed;
  let trimmed1 = str2.trim();
  let obj1 = require("initialize");
  let items = [stateFromStores2];
  stateFromStores = obj1.useStateFromStores(items, () => {
    value = undefined;
    if (length.length > 0) {
      value = SKUStore.get(tmp);
    }
    return value;
  });
  const tmp11 = first(first1.useState(false), 2);
  first = tmp11[0];
  asyncGeneratorStep = tmp11[1];
  const tmp13 = first(first1.useState(null), 2);
  first1 = tmp13[0];
  closure_6 = tmp13[1];
  let obj2 = require("initialize");
  const items1 = [c8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => _null.getCurrentUser());
  let tmp16;
  if (stateFromStores != null) {
    const googleSkuIds = stateFromStores.googleSkuIds;
    if (googleSkuIds != null) {
      tmp16 = googleSkuIds[constants.DEFAULT];
    }
  }
  if (tmp16 == null) {
    tmp16 = null;
  }
  c8 = tmp16;
  let tmp9Result = tmp9(tmp3[13]);
  const items2 = [stateFromStores3];
  const items3 = [tmp16];
  stateFromStores2 = tmp9Result.useStateFromStores(items2, () => {
    let product = null;
    if (null != c8) {
      product = IAPStore.getProduct(tmp);
    }
    return product;
  }, items3);
  tmp9Result = tmp9(tmp3[13]);
  const items4 = [stateFromStores3];
  stateFromStores3 = tmp9Result.useStateFromStores(items4, () => stateFromStores3.isReady());
  _require = asyncGeneratorStep(async (arg0) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        if (0 === v2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp5;
            closure_2 = tmp2;
            closure_130_0 = length;
            let tmp19 = 0 !== length.length;
            if (tmp19) {
              tmp19 = 0 !== trimmed1.length;
            }
            if (tmp19) {
              closure_1_6(null);
              v2(true);
              let obj3 = length(stateFromStores[14]);
              const obj1 = { withGoogleSkuIds: length(stateFromStores[15]).isAndroid() };
              v2 = 1;
              c5 = 1;
              const obj2 = { value: obj3.fetchSocialLayerStorefrontSkuForApplication(trimmed1, length, obj1), done: false };
              return obj2;
            } else {
              c5 = 3;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj3 = { value, done: true };
            return obj3;
          } else {
            v2(false);
            if (null != stateFromStores2.get(length)) {
              closure_130_0(length);
            } else {
              trimmed1 = closure_1_6;
              v2 = 2;
              c5 = 1;
              const obj4 = {
                value: (function describeStorefrontSkuFailure() {
                            const self = this;
                            const apply = closure_1_16.apply;
                            if (typeof apply === "unknown") {
                              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                            } else {
                              applyArgumentsResult = apply(self, arguments);
                            }
                            return applyArgumentsResult;
                          })(trimmed1, length),
                done: false
              };
              return obj4;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          trimmed1(value);
        }
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp29) {
        c5 = tmp;
        throw tmp29;
      }
    }
  });
  const items5 = [trimmed, trimmed1];
  const callback = obj.useCallback(function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }, items5);
  const items6 = [callback];
  const items7 = [callback];
  const callback1 = obj.useCallback(() => {
    callback((skuId) => {
      length(stateFromStores[16]);
      const obj = { skuId };
      const result = obj.openSocialLayerStorefrontProductDetailsModal(obj);
    });
  }, items6);
  const items8 = [callback, stateFromStores1];
  const callback2 = obj.useCallback(() => {
    callback((skuId) => {
      length(stateFromStores[16]);
      const obj = { skuId };
      const result = obj.openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj);
    });
  }, items7);
  const callback3 = obj.useCallback(() => {
    callback((skuId) => {
      closure_0(stateFromStores[16]);
      const obj = { skuId, recipient: stateFromStores1 };
      const result = obj.openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj);
    });
  }, items8);
  const tmp7 = first(first1.useState(""), 2);
  [tmp25, closure_12] = tmp4(obj.useState(null), 2);
  const items9 = [tmp16];
  let tmp27 = trimmed.length > 0;
  const callback4 = obj.useCallback(() => {
    if (null != c8) {
      constants("Querying Play\u2026");
      const items = [tmp];
      const inAppSkus = GPlayActionCreators.loadInAppSkus(items);
      inAppSkus.then((result) => {
        if (null != result) {
          if (result.length > 0) {
            const _HermesInternal = HermesInternal;
            let combined = "Play returned " + result.length + " product(s) for " + _null;
          }
          tmp(combined);
        }
        combined = "Play returned no products for " + _null;
      }).catch((error) => {
        let obj = error;
        if (error == null) {
          obj = {};
        }
        ({ code, message } = obj);
        let str = "";
        if (null != code) {
          const _HermesInternal = HermesInternal;
          str = " [" + code + "]";
        }
        if (message == null) {
          const _String = String;
          message = String(error);
        }
        closure_1_12("Play query failed" + str + ": " + message);
      });
      const nextPromise = inAppSkus.then((result) => {
        if (null != result) {
          if (result.length > 0) {
            const _HermesInternal = HermesInternal;
            let combined = "Play returned " + result.length + " product(s) for " + _null;
          }
          tmp(combined);
        }
        combined = "Play returned no products for " + _null;
      });
    }
  }, items9);
  if (tmp27) {
    tmp27 = trimmed1.length > 0;
  }
  closure_13 = tmp27;
  let tmp28 = !tmp27;
  if (tmp27) {
    tmp28 = first;
  }
  const items10 = [first1, first, stateFromStores, tmp27, tmp16, stateFromStores2, stateFromStores3];
  obj = { style: tmp.wrap, contentContainerStyle: null, children: null };
  obj = { paddingVertical: null, paddingBottom: null };
  const memo = obj.useMemo(() => {
    if (null != first1) {
      const _HermesInternal5 = HermesInternal;
      let str13 = "Fetch failed: " + tmp;
    } else {
      str13 = "Fetching SKU\u2026";
      if (!first) {
        if (null != stateFromStores) {
          let str3 = stateFromStores3;
          if (null == c8) {
            const _HermesInternal4 = HermesInternal;
            let str2 = "" + tmp3 + " \u00B7 " + "no DEFAULT googleSkuId, so nothing to price";
          } else if (null == stateFromStores2) {
            let str9 = " (billing not connected)";
            if (str3) {
              str9 = "";
            }
            const _HermesInternal3 = HermesInternal;
            str3 = "play id ";
            let combined = "play id " + c8 + " \u00B7 not in IAPStore" + str9;
          } else if (null == stateFromStores2.priceString) {
            const _HermesInternal2 = HermesInternal;
            combined = "play id " + c8 + " \u00B7 product found, no priceString";
          } else {
            const _HermesInternal = HermesInternal;
            combined = "play id " + c8 + " \u00B7 " + stateFromStores2.priceString;
          }
        } else {
          str2 = "Paste a SKU ID and its application ID to enable the modals below.";
          if (closure_13) {
            str2 = "Not fetched yet. Opening a modal fetches it first.";
          }
        }
      }
    }
    return str13;
  }, items10);
  obj.paddingVertical = trimmed1(stateFromStores[10]).space.PX_16;
  obj.paddingBottom = trimmed1(stateFromStores[10]).space.PX_16 + trimmed1(stateFromStores[12])({ includeKeyboardHeight: true }).insets.bottom;
  obj.contentContainerStyle = obj;
  obj1 = { title: "SKU", description: memo, hasIcons: false, children: null };
  obj2 = { style: tmp.inputRow, children: closure_13(tmp9(tmp3[20]).TextInput, { label: "Application ID", value: str2, onChange: tmp8, placeholder: "1234567890123456789", autoCapitalize: "none", autoCorrect: false, keyboardType: "number-pad" }) };
  const items11 = [closure_13(stateFromStores1, obj2), ];
  const tmp31 = closure_6;
  const tmp4Result = tmp4(obj.useState(null), 2);
  items11[1] = closure_13(stateFromStores1, { style: tmp.inputRow, children: closure_13(require("TextInput").TextInput, { label: "SKU ID", value: str, onChange: tmp6, placeholder: "1234567890123456789", autoCapitalize: "none", autoCorrect: false, keyboardType: "number-pad" }) });
  obj1.children = items11;
  const items12 = [closure_14(require("TableRowGroup").TableRowGroup, obj1), , ];
  let obj3 = { style: tmp.inputRow, children: closure_13(require("TextInput").TextInput, { label: "SKU ID", value: str, onChange: tmp6, placeholder: "1234567890123456789", autoCapitalize: "none", autoCorrect: false, keyboardType: "number-pad" }) };
  let isAndroidResult = require("PlatformUtils").isAndroid();
  if (isAndroidResult) {
    let obj4 = { title: "Pricing", description: tmp25, hasIcons: false, children: null };
    let str3 = "needs a fetched SKU with a DEFAULT googleSkuId";
    if (null != tmp16) {
      let _HermesInternal = HermesInternal;
      str3 = "play id " + tmp16;
    }
    const obj5 = { label: "Query Play for this SKU's price", subLabel: str3, onPress: callback4, disabled: null == tmp16, arrow: true };
    obj4.children = tmp30(tmp9(tmp3[21]).TableRow, obj5);
    isAndroidResult = tmp30(tmp9(tmp3[19]).TableRowGroup, obj4);
  }
  items12[1] = isAndroidResult;
  const items13 = [closure_13(require("TableRow").TableRow, { label: "Product details", subLabel: "The PDP, as opened from a gift-code embed", onPress: callback1, disabled: tmp28, arrow: true }), closure_13(require("TableRow").TableRow, { label: "Purchase success (self)", subLabel: "Redeem / link-account screen shown after buying", onPress: callback2, disabled: tmp28, arrow: true }), ];
  let str5;
  if (stateFromStores1 != null) {
    str5 = stateFromStores1.username;
  }
  if (str5 == null) {
    str5 = "you";
  }
  const obj6 = { spacing: 16, children: null };
  const obj7 = { title: "Modals", hasIcons: false, children: null };
  const tmp9Result1 = require("PlatformUtils");
  items13[2] = closure_13(require("TableRow").TableRow, { label: "Purchase success (gift)", subLabel: "Recipient: " + str5 + " (self)", onPress: callback3, disabled: tmp28, arrow: true });
  obj7.children = items13;
  items12[2] = closure_14(require("TableRowGroup").TableRowGroup, obj7);
  obj6.children = items12;
  obj.children = closure_14(require("Stack/Stack").Stack, obj6);
  return closure_13(tmp31, obj);
};