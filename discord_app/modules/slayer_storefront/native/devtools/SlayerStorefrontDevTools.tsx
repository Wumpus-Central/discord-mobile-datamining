// === Module 15600: SlayerStorefrontDevTools ===

// Module 15600 (SlayerStorefrontDevTools)
import nativeDefault from "native" /* 587 */;
import GPlayActionCreators from "GPlayActionCreators" /* 8872 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import UserStore from "UserStore" /* 1377 */;
import SKUStore from "SKUStore" /* 5695 */;
import IAPStore from "IAPStore" /* 6739 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, c8, c9;

let closure_12;
let closure_14;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let unpackModuleId;
function describeStorefrontSkuFailure() {
  return obj(...arguments);
}
let obj = function _describeStorefrontSkuFailure() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c9 === 2) {
      c9 = 3;
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
      let c7;
      try {
        let status;
        let body;
        let length;
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            let closure_5 = tmp;
            let closure_4 = tmp4;
            closure_0 = undefined;
            status = undefined;
            body = undefined;
            length = undefined;
            c7 = 1;
            const result = unpackModuleId.SOCIAL_LAYER_APPLICATION_STOREFRONT_SKU_BY_APPLICATION_ID(closure_0, closure_1);
            const HTTP = require("HTTPUtils").HTTP;
            const obj5 = { url: result, rejectWithError: false };
            c8 = 2;
            c9 = 1;
            const obj6 = { value: HTTP.get(obj5), done: false };
            return obj6;
          }
        } else if (1 === c8) {
          let json;
          c7 = 0;
          let closure_2 = closure_6;
          if (closure_6 == null) {
            closure_2 = {};
          }
          closure_0 = closure_2;
          status = closure_0.status;
          body = closure_0.body;
          const obj2 = closure_133_0(closure_133_2[11]);
          length = obj2.stringifyErrors(body);
          let c3 = status;
          if (status == null) {
            c3 = "?";
          }
          const tmp17 = c3;
          if (length.length > 0) {
            json = length;
          } else {
            const _JSON = JSON;
            json = JSON.stringify(body);
          }
          const _HermesInternal = HermesInternal;
          c9 = 3;
          const obj7 = { value: "HTTP " + tmp17 + " \u00B7 " + json, done: true };
          return obj7;
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
      } catch (tmp23) {
        closure_6 = tmp23;
        if (0 === c7) {
          c9 = 3;
          throw tmp23;
        } else {
          c8 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ Endpoints: unpackModuleId, PriceSetAssignmentPurchaseTypes: closure_12 } = Constants);
({ jsx: map1, jsxs: closure_14 } = Fragment);
let createStyles = createStyles_mod;
obj = { wrap: obj2, inputRow: obj3 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, paddingHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { padding: nativeDefault.space.PX_12 };
let closure_15 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let arr;
  let arr2;
  let closure_5;
  let closure_6;
  let currentUser;
  let first;
  let ready;
  let str;
  let str2;
  let tmp12;
  let tmp17;
  let tmp19;
  let tmp20;
  let tmp21;
  let tmp25;
  let tmp27;
  let tmp30;
  let tmp31;
  let tmp34;
  let tmp = arr;
  obj = arr(576);
  const cResult = obj.c(74);
  const tmp4 = closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj2 = { includeKeyboardHeight: true };
    cResult[0] = obj2;
    first = obj2;
  } else {
    first = cResult[0];
  }
  let obj3 = react;
  const insets = arr2(6471)(first).insets;
  [str, r10032] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  [str2, r10037] = react.useState("");
  _slicedToArray(react.useState(""), 2);
  if (cResult[1] !== str) {
    const trimmed = str.trim();
    cResult[1] = str;
    cResult[2] = trimmed;
    arr = trimmed;
  } else {
    arr = cResult[2];
  }
  if (cResult[3] !== str2) {
    const trimmed1 = str2.trim();
    cResult[3] = str2;
    cResult[4] = trimmed1;
    arr2 = trimmed1;
  } else {
    arr2 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SKUStore];
    cResult[5] = items;
    tmp12 = items;
  } else {
    tmp12 = cResult[5];
  }
  if (cResult[6] !== arr) {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
    cResult[6] = arr;
    cResult[7] = K;
  } else {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp12, K);
  [tmp17, dependencyMap] = obj3.useState(false);
  _slicedToArray(obj3.useState(false), 2);
  const tmp7Result3 = _slicedToArray(obj3.useState(null), 2);
  [tmp19, _slicedToArray] = tmp7Result3;
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
    const items1 = [UserStore];
    class O {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[8] = items1;
    cResult[9] = O;
    tmp21 = O;
    tmp20 = items1;
  } else {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
    tmp21 = cResult[9];
  }
  const tmpResult4 = tmp(504);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp20, tmp21);
  let tmp23;
  if (stateFromStores != null) {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
    if (tmp24 != null) {
      class K {
        constructor() {
          let value;
          if (arr.length > 0) {
            value = SKUStore.get(tmp);
          }
          return value;
        }
      }
      tmp23 = tmp24[constants.DEFAULT];
    }
  }
  if (tmp23 == null) {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
  }
  react = tmp23;
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
    const items2 = [IAPStore];
    class O {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[10] = items2;
    tmp25 = items2;
  } else {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
  }
  if (cResult[11] !== tmp23) {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
    const items3 = [tmp23];
    class O {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[11] = tmp23;
    cResult[12] = tmp28;
    cResult[13] = items3;
    tmp27 = items3;
  } else {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
    tmp27 = cResult[13];
  }
  const tmpResult5 = tmp(504);
  const stateFromStores2 = tmpResult5.useStateFromStores(tmp25, tmp28, tmp27);
  if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
    const items4 = [IAPStore];
    class O {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    cResult[14] = items4;
    cResult[15] = tmp32;
    tmp31 = tmp32;
    tmp30 = items4;
  } else {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
    tmp31 = cResult[15];
  }
  const tmpResult6 = tmp(504);
  const stateFromStores3 = tmpResult6.useStateFromStores(tmp30, tmp31);
  if (cResult[16] === arr2) {
    class K {
      constructor() {
        let value;
        if (arr.length > 0) {
          value = SKUStore.get(tmp);
        }
        return value;
      }
    }
    if (cResult[19] !== tmp34) {
      class K {
        constructor() {
          let value;
          if (arr.length > 0) {
            value = SKUStore.get(tmp);
          }
          return value;
        }
      }
      cResult[19] = tmp34;
      class O {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      cResult[20] = tmp36;
    } else {
      class K {
        constructor() {
          let value;
          if (arr.length > 0) {
            value = SKUStore.get(tmp);
          }
          return value;
        }
      }
    }
    class O {
      constructor() {
        return currentUser.getCurrentUser();
      }
    }
    if (cResult[23] === stateFromStores1) {
      let combined;
      class K {
        constructor() {
          let value;
          if (arr.length > 0) {
            value = SKUStore.get(tmp);
          }
          return value;
        }
      }
      const first1 = _slicedToArray(obj3.useState(null), 2)[0];
      _slicedToArray(obj3.useState(null), 2);
      class O {
        constructor() {
          return currentUser.getCurrentUser();
        }
      }
      if (cResult[26] !== tmp23) {
        class K {
          constructor() {
            let value;
            if (arr.length > 0) {
              value = SKUStore.get(tmp);
            }
            return value;
          }
        }
        cResult[26] = tmp23;
        class O {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[27] = tmp41;
      } else {
        class K {
          constructor() {
            let value;
            if (arr.length > 0) {
              value = SKUStore.get(tmp);
            }
            return value;
          }
        }
      }
      if (arr.length > 0 && arr2.length > 0) {
        class K {
          constructor() {
            let value;
            if (arr.length > 0) {
              value = SKUStore.get(tmp);
            }
            return value;
          }
        }
      }
      if (null == tmp19) {
        class K {
          constructor() {
            let value;
            if (arr.length > 0) {
              value = SKUStore.get(tmp);
            }
            return value;
          }
        }
        if (!tmp17) {
          class K {
            constructor() {
              let value;
              if (arr.length > 0) {
                value = SKUStore.get(tmp);
              }
              return value;
            }
          }
        }
      } else {
        class K {
          constructor() {
            let value;
            if (arr.length > 0) {
              value = SKUStore.get(tmp);
            }
            return value;
          }
        }
        combined = "Fetch failed: " + tmp19;
      }
      const sum = tmp6(587).space.PX_16 + insets.bottom;
      if (cResult[32] !== sum) {
        class K {
          constructor() {
            let value;
            if (arr.length > 0) {
              value = SKUStore.get(tmp);
            }
            return value;
          }
        }
        tmp47[0] = arr2(587).space.PX_16;
        tmp47[1] = sum;
        class O {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[32] = sum;
        cResult[33] = tmp47;
      } else {
        class K {
          constructor() {
            let value;
            if (arr.length > 0) {
              value = SKUStore.get(tmp);
            }
            return value;
          }
        }
      }
      if (cResult[34] !== str2) {
        class K {
          constructor() {
            let value;
            if (arr.length > 0) {
              value = SKUStore.get(tmp);
            }
            return value;
          }
        }
        let obj4 = { label: "Application ID", value: str2, onChange: null, placeholder: "1234567890123456789", autoCapitalize: "none", autoCorrect: false, keyboardType: "number-pad" };
        class O {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        cResult[34] = str2;
        cResult[35] = closure_13(tmp(6098).TextInput, obj4);
        const tmp49 = closure_13(tmp(6098).TextInput, obj4);
      } else {
        class K {
          constructor() {
            let value;
            if (arr.length > 0) {
              value = SKUStore.get(tmp);
            }
            return value;
          }
        }
      }
      if (cResult[36] === tmp4.inputRow) {
        class K {
          constructor() {
            let value;
            if (arr.length > 0) {
              value = SKUStore.get(tmp);
            }
            return value;
          }
        }
        if (cResult[39] !== str) {
          class K {
            constructor() {
              let value;
              if (arr.length > 0) {
                value = SKUStore.get(tmp);
              }
              return value;
            }
          }
          let obj5 = { label: "SKU ID", value: str, onChange: null, placeholder: "1234567890123456789", autoCapitalize: "none", autoCorrect: false, keyboardType: "number-pad" };
          class O {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          cResult[39] = str;
          cResult[40] = closure_13(tmp(6098).TextInput, obj5);
          const tmp55 = closure_13(tmp(6098).TextInput, obj5);
        } else {
          class K {
            constructor() {
              let value;
              if (arr.length > 0) {
                value = SKUStore.get(tmp);
              }
              return value;
            }
          }
        }
        if (cResult[41] === tmp4.inputRow) {
          class K {
            constructor() {
              let value;
              if (arr.length > 0) {
                value = SKUStore.get(tmp);
              }
              return value;
            }
          }
          if (cResult[44] === combined) {
            class K {
              constructor() {
                let value;
                if (arr.length > 0) {
                  value = SKUStore.get(tmp);
                }
                return value;
              }
            }
          }
          class O {
            constructor() {
              return currentUser.getCurrentUser();
            }
          }
          tmp61[1] = combined;
          const items5 = [tmp50, tmp56];
          tmp61[3] = items5;
          cResult[44] = combined;
          cResult[45] = tmp50;
          cResult[46] = tmp56;
          cResult[47] = closure_14(tmp(6074).TableRowGroup, tmp61);
          const tmp62 = closure_14(tmp(6074).TableRowGroup, tmp61);
        }
        class O {
          constructor() {
            return currentUser.getCurrentUser();
          }
        }
        let obj6 = { style: tmp4.inputRow, children: tmp54 };
        cResult[41] = tmp4.inputRow;
        cResult[42] = tmp54;
        cResult[43] = closure_13(closure_7, obj6);
        const tmp58 = closure_13(closure_7, obj6);
      }
      let obj7 = { style: tmp4.inputRow, children: tmp48 };
      cResult[36] = tmp4.inputRow;
      cResult[37] = tmp48;
      cResult[38] = closure_13(closure_7, obj7);
      const tmp53 = closure_13(closure_7, obj7);
    }
    function se() {
      const tmp = tmp34((skuId) => {
        obj = { skuId, recipient: stateFromStores1 };
        const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = arr(dependencyMap[18]).openSocialLayerStorefrontProductGiftPurchaseSuccessModal;
        arr(dependencyMap[18]);
        const result = openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj);
      });
    }
    cResult[23] = stateFromStores1;
    cResult[24] = tmp34;
    cResult[25] = se;
  }
  _require = stateFromStores1(function*(arg0) {
    let closure_2;
    let closure_3;
    let obj5;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const tmp19 = 0 !== closure_0.length && 0 !== closure_1.length;
            if (tmp19) {
              tmp(null);
              tmp2(true);
              const obj4 = { withGoogleSkuIds: obj5.isAndroid() };
              const fetchSocialLayerStorefrontSkuForApplication = closure_0(dependencyMap[16]).fetchSocialLayerStorefrontSkuForApplication;
              const tmp27 = closure_0(dependencyMap[16]);
              obj5 = closure_0(dependencyMap[17]);
              c4 = 1;
              c5 = 1;
              const obj6 = { value: fetchSocialLayerStorefrontSkuForApplication(closure_1, closure_0, obj4), done: false };
              return obj6;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            tmp2(false);
            if (null != SKUStore.get(closure_0)) {
              closure_0(closure_0);
            } else {
              closure_1 = tmp;
              c4 = 2;
              c5 = 1;
              const obj8 = { value: describeStorefrontSkuFailure(closure_1, closure_0), done: false };
              return obj8;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1(value);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp30) {
        c5 = 3;
        throw tmp30;
      }
    }
  });
  const fn = function() {
    return closure_0(...arguments);
  };
  cResult[16] = arr2;
  cResult[17] = arr;
  cResult[18] = fn;
  tmp34 = fn;
}) : (() => {
  let Stack;
  let TableRow;
  let closure_4;
  let currentUser;
  let first;
  let first1;
  let items11;
  let obj10;
  let obj11;
  let obj5;
  let stateFromStores;
  let stateFromStores2;
  let stateFromStores3;
  let str;
  let str2;
  let tmp25;
  let tmp6;
  let tmp8;
  let trimmed1;
  let tmp = closure_15();
  const tmp2 = trimmed1;
  const tmp3 = stateFromStores;
  obj = first1;
  const insets = trimmed1(stateFromStores[14])({ includeKeyboardHeight: true }).insets;
  const tmp4 = first;
  const tmp5 = first(first1.useState(""), 2);
  [str, tmp6] = tmp5;
  [str2, tmp8] = first(first1.useState(""), 2);
  const tmp7 = first(first1.useState(""), 2);
  const trimmed = str.trim();
  trimmed1 = str2.trim();
  let obj2 = trimmed(stateFromStores[15]);
  let items = [stateFromStores2];
  stateFromStores = obj2.useStateFromStores(items, () => {
    let value;
    if (trimmed.length > 0) {
      value = SKUStore.get(tmp);
    }
    return value;
  });
  const tmp11 = first(first1.useState(false), 2);
  first = tmp11[0];
  _asyncToGenerator = tmp11[1];
  const tmp13 = first(first1.useState(null), 2);
  first1 = tmp13[0];
  let closure_6 = tmp13[1];
  let obj3 = trimmed(stateFromStores[15]);
  const items1 = [c8];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => currentUser.getCurrentUser());
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
  const items2 = [stateFromStores3];
  const items3 = [tmp16];
  const tmp9Result = trimmed(tmp3[15]);
  stateFromStores2 = tmp9Result.useStateFromStores(items2, () => {
    let product = null;
    if (null != c8) {
      product = IAPStore.getProduct(tmp);
    }
    return product;
  }, items3);
  const items4 = [stateFromStores3];
  const tmp9Result3 = trimmed(tmp3[15]);
  stateFromStores3 = tmp9Result3.useStateFromStores(items4, () => stateFromStores3.isReady());
  const useCallback = obj.useCallback;
  let closure_0 = _asyncToGenerator(async (arg0) => {
    let obj5;
    let v2;
    closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
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
        c5 = 2;
        if (0 === v2) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp;
            let closure_2 = tmp2;
            const tmp19 = 0 !== closure_0.length && 0 !== closure_1.length;
            if (tmp19) {
              closure_1_6(null);
              v2(true);
              const obj4 = { withGoogleSkuIds: obj5.isAndroid() };
              const fetchSocialLayerStorefrontSkuForApplication = closure_0(stateFromStores[16]).fetchSocialLayerStorefrontSkuForApplication;
              const tmp27 = closure_0(stateFromStores[16]);
              obj5 = closure_0(stateFromStores[17]);
              v2 = 1;
              c5 = 1;
              const obj6 = { value: fetchSocialLayerStorefrontSkuForApplication(closure_1, closure_0, obj4), done: false };
              return obj6;
            }
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            v2(false);
            if (null != stateFromStores2.get(closure_0)) {
              closure_0(closure_0);
            } else {
              closure_1 = closure_1_6;
              v2 = 2;
              c5 = 1;
              const obj8 = { value: describeStorefrontSkuFailure(closure_1, closure_0), done: false };
              return obj8;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1(value);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp30) {
        c5 = 3;
        throw tmp30;
      }
    }
  });
  const items5 = [trimmed, trimmed1];
  const callback = useCallback(function() {
    return closure_0(...arguments);
  }, items5);
  const items6 = [callback];
  const items7 = [callback];
  const callback1 = obj.useCallback(() => {
    callback((skuId) => {
      obj = trimmed(stateFromStores[18]);
      const obj2 = { skuId };
      const result = obj.openSocialLayerStorefrontProductDetailsModal(obj2);
    });
  }, items6);
  const items8 = [callback, stateFromStores1];
  const callback2 = obj.useCallback(() => {
    callback((skuId) => {
      obj = trimmed(stateFromStores[18]);
      const obj2 = { skuId };
      const result = obj.openSocialLayerStorefrontProductSelfPurchaseSuccessModal(obj2);
    });
  }, items7);
  const callback3 = obj.useCallback(() => {
    const tmp = callback((skuId) => {
      obj = { skuId, recipient: stateFromStores1 };
      const openSocialLayerStorefrontProductGiftPurchaseSuccessModal = trimmed(stateFromStores[18]).openSocialLayerStorefrontProductGiftPurchaseSuccessModal;
      trimmed(stateFromStores[18]);
      const result = openSocialLayerStorefrontProductGiftPurchaseSuccessModal(obj);
    });
  }, items8);
  [tmp25, closure_12] = tmp4(obj.useState(null), 2);
  const items9 = [tmp16];
  let tmp27 = trimmed.length > 0;
  tmp4(obj.useState(null), 2);
  const callback4 = obj.useCallback(() => {
    if (null != c8) {
      let str = "Querying Play\u2026";
      constants("Querying Play\u2026");
      obj = GPlayActionCreators;
      const items = [tmp];
      const inAppSkus = obj.loadInAppSkus(items);
      const nextPromise = inAppSkus.then((result) => {
        if (null != result) {
          let combined;
          if (result.length > 0) {
            const _HermesInternal = HermesInternal;
            combined = "Play returned " + result.length + " product(s) for " + _null;
          }
          tmp(combined);
        }
        combined = "Play returned no products for " + _null;
      });
      nextPromise.catch((error) => {
        let code;
        let message;
        obj = error;
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
    }
  }, items9);
  if (tmp27) {
    tmp27 = trimmed1.length > 0;
  }
  let closure_13 = tmp27;
  let tmp28 = !tmp27;
  if (tmp27) {
    tmp28 = first;
  }
  const items10 = [first1, first, stateFromStores, tmp27, tmp16, stateFromStores2, stateFromStores3];
  const tmp30 = closure_13;
  let obj4 = { style: tmp.wrap, contentContainerStyle: obj5, children: closure_14(Stack, obj11) };
  obj5 = { paddingVertical: tmp2(tmp3[10]).space.PX_16, paddingBottom: tmp2(tmp3[10]).space.PX_16 + insets.bottom };
  const memo = obj.useMemo(() => {
    let str12;
    if (null != first1) {
      const _HermesInternal5 = HermesInternal;
      str12 = "Fetch failed: " + tmp;
    } else {
      str12 = "Fetching SKU\u2026";
      if (!first) {
        let str;
        if (null != stateFromStores) {
          let str2 = "no DEFAULT googleSkuId, so nothing to price";
          const name = stateFromStores.name;
          if (null != c8) {
            let combined;
            if (null == stateFromStores2) {
              let str7 = " (billing not connected)";
              if (tmp5) {
                str7 = "";
              }
              const _HermesInternal3 = HermesInternal;
              combined = "play id " + c8 + " \u00B7 not in IAPStore" + str7;
            } else if (null == stateFromStores2.priceString) {
              const _HermesInternal2 = HermesInternal;
              combined = "play id " + c8 + " \u00B7 product found, no priceString";
            } else {
              const _HermesInternal = HermesInternal;
              combined = "play id " + c8 + " \u00B7 " + stateFromStores2.priceString;
            }
            str2 = combined;
          }
          const _HermesInternal4 = HermesInternal;
          str = "" + name + " \u00B7 " + str2;
        } else {
          str = "Paste a SKU ID and its application ID to enable the modals below.";
          if (closure_13) {
            str = "Not fetched yet. Opening a modal fetches it first.";
          }
        }
        str12 = str;
      }
    }
    return str12;
  }, items10);
  Stack = tmp9(tmp3[23]).Stack;
  let obj6 = { title: "SKU", description: memo, hasIcons: false, children: items11 };
  let obj7 = { style: tmp.inputRow, children: closure_13(tmp9(tmp3[20]).TextInput, { label: "Application ID", value: str2, onChange: tmp8, placeholder: "1234567890123456789", autoCapitalize: "none", autoCorrect: false, keyboardType: "number-pad" }) };
  const TableRowGroup = tmp9(tmp3[21]).TableRowGroup;
  items11 = [closure_13(stateFromStores1, obj7), ];
  let obj8 = { style: tmp.inputRow, children: closure_13(tmp9(tmp3[20]).TextInput, { label: "SKU ID", value: str, onChange: tmp6, placeholder: "1234567890123456789", autoCapitalize: "none", autoCorrect: false, keyboardType: "number-pad" }) };
  items11[1] = closure_13(stateFromStores1, obj8);
  const items12 = [closure_14(TableRowGroup, obj6), , ];
  const tmp9Result4 = trimmed(tmp3[17]);
  let isAndroidResult = tmp9Result4.isAndroid();
  const tmp31 = closure_6;
  if (isAndroidResult) {
    const TableRowGroup2 = tmp9(tmp3[21]).TableRowGroup;
    let str3 = "needs a fetched SKU with a DEFAULT googleSkuId";
    const obj9 = { title: "Pricing", description: tmp25, hasIcons: false, children: tmp30(TableRow, obj10) };
    TableRow = tmp9(tmp3[22]).TableRow;
    if (null != tmp16) {
      let _HermesInternal = HermesInternal;
      str3 = "play id " + tmp16;
    }
    obj10 = { label: "Query Play for this SKU's price", subLabel: str3, onPress: callback4, disabled: null == tmp16, arrow: true };
    isAndroidResult = tmp30(TableRowGroup2, obj9);
  }
  items12[1] = isAndroidResult;
  const TableRowGroup3 = tmp9(tmp3[21]).TableRowGroup;
  const items13 = [tmp30(tmp9(tmp3[22]).TableRow, { label: "Product details", subLabel: "The PDP, as opened from a gift-code embed", onPress: callback1, disabled: tmp28, arrow: true }), tmp30(tmp9(tmp3[22]).TableRow, { label: "Purchase success (self)", subLabel: "Redeem / link-account screen shown after buying", onPress: callback2, disabled: tmp28, arrow: true }), ];
  let str5;
  const TableRow2 = tmp9(tmp3[22]).TableRow;
  if (stateFromStores1 != null) {
    str5 = stateFromStores1.username;
  }
  if (str5 == null) {
    str5 = "you";
  }
  obj11 = { spacing: 16, children: items12 };
  const obj12 = { title: "Modals", hasIcons: false, children: items13 };
  const obj13 = { label: "Purchase success (gift)", subLabel: "Recipient: " + str5 + " (self)", onPress: callback3, disabled: tmp28, arrow: true };
  items13[2] = tmp30(TableRow2, obj13);
  items12[2] = closure_14(TableRowGroup3, obj12);
  return tmp30(tmp31, obj4);
});
let result = size.fileFinishedImporting("modules/slayer_storefront/native/devtools/SlayerStorefrontDevTools.tsx");

export default tmp6;