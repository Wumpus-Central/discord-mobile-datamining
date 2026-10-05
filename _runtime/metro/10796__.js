// === Module 10796: ? ===

// Module 10796
import _mod10788 from "module_10788" /* 10788 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react_native from "react-native" /* 17 */;

let c3, c4, c5;

const Linking = react_native.Linking;
const RNIapIos = react_native.NativeModules.RNIapIos;
_asyncToGenerator(async () => {
  let v3;
  if (v3 === 2) {
    v3 = 3;
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
      v3 = 2;
      if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 === 2) {
        v3 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        const obj = v3(dependencyMap[2]);
        const iosModule = obj.getIosModule();
        v3 = 3;
        const obj4 = { value: iosModule.getPendingTransactions(), done: true };
        return obj4;
      }
    } catch (tmp5) {
      v3 = 3;
      throw tmp5;
    }
  }
});
_asyncToGenerator(async (arg0) => {
  let _false;
  closure_0 = arg0;
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      let requestReceipt;
      let forceRefresh;
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
          requestReceipt = tmp4;
          let closure_2 = tmp;
          forceRefresh = closure_0.forceRefresh;
          c4 = 1;
          c5 = 1;
          return { value: "Set", done: true };
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        let rejectResult;
        const obj5 = closure_0(_false[2]);
        if (obj5.isIosStorekit2()) {
          rejectResult = Promise.reject("Only available on Sk1");
        } else {
          _false = forceRefresh;
          requestReceipt = requestReceipt.requestReceipt;
          if (forceRefresh == null) {
            _false = false;
          }
          rejectResult = requestReceipt(_false);
        }
        c5 = 3;
        const obj = { value: rejectResult, done: true };
        return obj;
      }
    } catch (tmp14) {
      c5 = 3;
      throw tmp14;
    }
  }
});
_asyncToGenerator(async () => {
  let v3;
  if (v3 === 2) {
    v3 = 3;
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
      v3 = 2;
      if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 === 2) {
        v3 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        const obj = v3(dependencyMap[2]);
        const iosModule = obj.getIosModule();
        v3 = 3;
        const obj4 = { value: iosModule.presentCodeRedemptionSheet(), done: true };
        return obj4;
      }
    } catch (tmp5) {
      v3 = 3;
      throw tmp5;
    }
  }
});
_asyncToGenerator(async function(arg0, arg1) {
  closure_0 = arg0;
  let closure_1 = arg1;
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let closure_2 = tmp3;
          closure_0 = undefined;
          const _fetch = fetch;
          const request = { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: JSON.stringify(closure_1) };
          const _JSON = JSON;
          c3 = 1;
          c4 = 1;
          const obj4 = { value: fetch(closure_0, request), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        closure_0 = value;
        if (closure_0.ok) {
          c4 = 3;
          const obj6 = { value: closure_0.json(), done: true };
          return obj6;
        } else {
          const _Object = Object;
          const _Error = Error;
          const self = this;
          const self2 = this;
          const error = new Error(closure_0.statusText);
          const obj = { statusCode: closure_0.status };
          throw assign(error, obj);
        }
      }
    } catch (tmp13) {
      c4 = 3;
      throw tmp13;
    }
  }
});
function fetchJsonOrThrow(arg0, arg1) {
  return closure_0(...arguments);
}
_asyncToGenerator(async (arg0) => {
  let closure_2;
  let tmp5;
  let v3;
  closure_0 = arg0;
  let status = tmp;
  await v3("https://buy.itunes.apple.com/verifyReceipt", closure_0);
  if (1 === c3) {
    if (arg0 === 1) {
      v3 = 3;
      throw value;
    } else if (arg0 === 2) {
      v3 = 3;
      const obj5 = { value, done: true };
      return obj5;
    } else {
      status = value;
      const tmp19 = status;
      if (tmp19) {
        if (21007 === status.status) {
          c3 = 2;
          v3 = 1;
          const obj6 = { value: v3("https://sandbox.itunes.apple.com/verifyReceipt", closure_0), done: false };
          return obj6;
        }
      }
      tmp5 = status;
    }
  } else if (arg0 === 1) {
    v3 = 3;
    throw value;
  } else {
    tmp5 = value;
    if (arg0 === 2) {
      v3 = 3;
      const obj = { value, done: true };
      return obj;
    }
  }
  return tmp5;
});
function requestAgnosticReceiptValidationIos(arg0) {
  return closure_0(...arguments);
}
let closure_0 = _asyncToGenerator(async (arg0) => {
  let c0;
  let c1;
  let v3;
  closure_0 = arg0;
  if (v3 === 2) {
    v3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      let str;
      v3 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          let closure_2 = tmp4;
          let closure_1 = tmp;
          c0 = undefined;
          c1 = undefined;
          ({ receiptBody: c0, isTest: c1 } = closure_0);
          str = undefined;
          c3 = 1;
          v3 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === c3) {
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else if (null == c1) {
          c3 = 2;
          v3 = 1;
          const obj5 = { value: requestAgnosticReceiptValidationIos(c0), done: false };
          return obj5;
        } else {
          str = "https://buy.itunes.apple.com/verifyReceipt";
          if (c1) {
            str = "https://sandbox.itunes.apple.com/verifyReceipt";
          }
          c3 = 3;
          v3 = 1;
          const obj6 = { value: v3(str, c0), done: false };
          return obj6;
        }
      } else if (2 === c3) {
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          v3 = 3;
          const obj8 = { value, done: true };
          return obj8;
        }
      } else if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 === 2) {
        v3 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        v3 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp16) {
      v3 = 3;
      throw tmp16;
    }
  }
});

export const getPendingPurchasesIOS = function getPendingPurchasesIOS() {
  return closure_0(...arguments);
};
export const getReceiptIOS = function getReceiptIOS(arg0) {
  return closure_0(...arguments);
};
export const presentCodeRedemptionSheetIOS = function presentCodeRedemptionSheetIOS() {
  return closure_0(...arguments);
};
export const getPromotedProductIOS = () => {
  let rejectResult;
  const obj = _mod10788;
  if (obj.isIosStorekit2()) {
    rejectResult = Promise.reject("Only available on Sk1");
  } else {
    rejectResult = RNIapIos.promotedProduct();
  }
  return rejectResult;
};
export const buyPromotedProductIOS = () => {
  const obj = _mod10788;
  const iosModule = obj.getIosModule();
  return iosModule.buyPromotedProduct();
};
export const validateReceiptIos = function validateReceiptIos(arg0) {
  return closure_0(...arguments);
};
export const clearTransactionIOS = () => {
  const obj = _mod10788;
  const iosModule = obj.getIosModule();
  return iosModule.clearTransaction();
};
export const clearProductsIOS = () => {
  const obj = _mod10788;
  const iosModule = obj.getIosModule();
  return iosModule.clearProducts();
};
export const deepLinkToSubscriptionsIos = () => Linking.openURL("https://apps.apple.com/account/subscriptions");