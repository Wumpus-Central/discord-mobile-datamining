// === Module 11059: ? ===

// Module 11059
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

get_ActivityIndicator = fn(17);
const Linking = get_ActivityIndicator.Linking;
const RNIapIos = get_ActivityIndicator.NativeModules.RNIapIos;
asyncGeneratorStep(async (arg0, value) => {
  if (v3 === 2) {
    v3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      v3 = 2;
      if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 === 2) {
        v3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        obj = v3(dependencyMap[2]);
        const iosModule = obj.getIosModule();
        v3 = 3;
        const obj1 = { value: iosModule.getPendingTransactions(), done: true };
        return obj1;
      }
    } catch (tmp6) {
      v3 = tmp;
      throw tmp6;
    }
  }
});
asyncGeneratorStep(async (arg0, value) => {
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
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          let forceRefresh;
          forceRefresh = closure_0.forceRefresh;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        if (obj4.isIosStorekit2()) {
          Promise.reject("Only available on Sk1");
        } else {
          dependencyMap = forceRefresh;
          if (forceRefresh == null) {
            dependencyMap = false;
          }
          const receipt = tmp5.requestReceipt(dependencyMap);
        }
        c5 = 3;
        obj4 = closure_0(dependencyMap[2]);
      }
    } catch (tmp16) {
      c5 = tmp;
      throw tmp16;
    }
  }
});
asyncGeneratorStep(async (arg0, value) => {
  if (v3 === 2) {
    v3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      v3 = 2;
      if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 === 2) {
        v3 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        obj = v3(dependencyMap[2]);
        const iosModule = obj.getIosModule();
        v3 = 3;
        const obj1 = { value: iosModule.presentCodeRedemptionSheet(), done: true };
        return obj1;
      }
    } catch (tmp6) {
      v3 = tmp;
      throw tmp6;
    }
  }
});
let closure_129_0 = asyncGeneratorStep(async (arg0, value) => {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp4;
          closure_130_0 = undefined;
          const _fetch = fetch;
          const request = { method: "POST", headers: { Accept: "application/json", "Content-Type": "application/json" }, body: null };
          const _JSON = JSON;
          request.body = JSON.stringify(closure_1);
          c3 = 1;
          c4 = 1;
          const obj1 = { value: fetch(closure_0, request), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj2 = { value, done: true };
        return obj2;
      } else {
        closure_130_0 = value;
        if (closure_130_0.ok) {
          c4 = 3;
          const obj3 = { value: closure_130_0.json(), done: true };
          return obj3;
        } else {
          const _Object = Object;
          const _Error = Error;
          const error = new Error(closure_130_0.statusText);
          obj = { statusCode: closure_130_0.status };
          throw Object.assign(error, obj);
        }
      }
    } catch (tmp16) {
      c4 = tmp;
      throw tmp16;
    }
  }
});
function fetchJsonOrThrow(arg0, arg1) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
asyncGeneratorStep(async (arg0, value) => {
  closure_1 = tmp2;
  closure_129_0 = closure_0;
  await v3("https://buy.itunes.apple.com/verifyReceipt", closure_0);
  if (1 === tmp5) {
    if (arg0 === 1) {
      v3 = 3;
      throw value;
    } else if (arg0 === 2) {
      v3 = 3;
      return { value, done: true };
    } else {
      closure_129_1 = value;
      if (closure_129_1) {
        if (21007 === closure_129_1.status) {
          c3 = 2;
          v3 = 1;
          return { value: v3("https://sandbox.itunes.apple.com/verifyReceipt", closure_129_0), done: false };
        }
      }
      let tmp6 = closure_129_1;
    }
  } else if (arg0 === 1) {
    v3 = 3;
    throw value;
  } else {
    tmp6 = value;
    if (arg0 === 2) {
      v3 = 3;
      return { value, done: true };
    }
  }
  return tmp6;
});
function requestAgnosticReceiptValidationIos(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_0 = asyncGeneratorStep(async (arg0, value) => {
  if (v3 === 2) {
    v3 = 3;
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
      v3 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          ({ receiptBody: closure_129_0, isTest: closure_129_1 } = closure_0);
          closure_129_2 = undefined;
          c3 = 1;
          v3 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else if (null == closure_129_1) {
          c3 = 2;
          v3 = 1;
          const obj2 = { value: requestAgnosticReceiptValidationIos(closure_129_0), done: false };
          return obj2;
        } else {
          let str = "https://buy.itunes.apple.com/verifyReceipt";
          if (closure_129_1) {
            str = "https://sandbox.itunes.apple.com/verifyReceipt";
          }
          closure_129_2 = str;
          c3 = 3;
          v3 = 1;
          const obj3 = { value: v3(closure_129_2, closure_129_0), done: false };
          return obj3;
        }
      } else if (2 === tmp5) {
        if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          v3 = 3;
          const obj5 = { value, done: true };
          return obj5;
        }
      } else if (arg0 === 1) {
        v3 = 3;
        throw value;
      } else if (arg0 === 2) {
        v3 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        v3 = 3;
        obj = { value, done: true };
        return obj;
      }
    } catch (tmp17) {
      v3 = tmp;
      throw tmp17;
    }
  }
});

export const getPendingPurchasesIOS = function getPendingPurchasesIOS() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getReceiptIOS = function getReceiptIOS(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const presentCodeRedemptionSheetIOS = function presentCodeRedemptionSheetIOS() {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getPromotedProductIOS = () => {
  if (obj.isIosStorekit2()) {
    let rejectResult = Promise.reject("Only available on Sk1");
  } else {
    rejectResult = RNIapIos.promotedProduct();
  }
  return rejectResult;
};
export const buyPromotedProductIOS = () => {
  const iosModule = closure_0(11051).getIosModule();
  return iosModule.buyPromotedProduct();
};
export const validateReceiptIos = function validateReceiptIos(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const clearTransactionIOS = () => {
  const iosModule = closure_0(11051).getIosModule();
  return iosModule.clearTransaction();
};
export const clearProductsIOS = () => {
  const iosModule = closure_0(11051).getIosModule();
  return iosModule.clearProducts();
};
export const deepLinkToSubscriptionsIos = () => Linking.openURL("https://apps.apple.com/account/subscriptions");