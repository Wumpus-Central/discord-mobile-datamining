// === Module 11024: fillProductsWithAdditionalData ===

// Module 11024 (fillProductsWithAdditionalData)
import asyncGeneratorStepDefault from "asyncGeneratorStep" /* 5 */;

let RNIapAmazonModule = require("get ActivityIndicator").NativeModules.RNIapAmazonModule;
RNIapAmazonModule = asyncGeneratorStepDefault((arg0) => {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  return (function*(arg0) {
    if (c4 === 2) {
      c4 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_2 = tmp2;
            let table;
            if (closure_0) {
              obj1 = {};
              table = obj1;
              obj1.CA = "CAD";
              obj1.ES = "EUR";
              obj1.AU = "AUD";
              obj1.DE = "EUR";
              obj1.IN = "INR";
              obj1.US = "USD";
              obj1.JP = "JPY";
              obj1.GB = "GBP";
              obj1.IT = "EUR";
              obj1.BR = "BRL";
              obj1.FR = "EUR";
              c3 = 1;
              c4 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = obj6.getUser();
              return obj2;
            } else {
              c4 = 3;
            }
            obj6 = closure_0;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw arg1;
        } else if (arg0 !== 2) {
          table = table[arg1.userMarketplaceAmazon];
          const item = closure_0.forEach((originalPrice) => {
            if (closure_1) {
              let str = originalPrice.originalPrice;
              originalPrice.currency = closure_1;
              let str2 = str;
              if (str == null) {
                str2 = "0.0";
              }
              originalPrice.price = str2;
              if (str == null) {
                str = "0.0";
              }
              originalPrice.localizedPrice = str;
            }
          });
        }
        c4 = 3;
        obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } catch (tmp12) {
        c4 = tmp;
        throw tmp12;
      }
    }
  })();
});

export const fillProductsWithAdditionalData = function fillProductsWithAdditionalData(closure_0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};