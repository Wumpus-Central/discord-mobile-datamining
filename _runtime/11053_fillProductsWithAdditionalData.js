// === Module 11053: fillProductsWithAdditionalData ===

// Module 11053 (fillProductsWithAdditionalData)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

fn(17).NativeModules.RNIapAmazonModule;
const RNIapAmazonModule = asyncGeneratorStep(async (arg0) => {
  const user = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
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
            closure_2 = tmp2;
            closure_130_0 = user;
            closure_130_1 = undefined;
            if (user) {
              obj1 = { CA: "CAD", ES: "EUR", AU: "AUD", DE: "EUR", IN: "INR", US: "USD", JP: "JPY", GB: "GBP", IT: "EUR", BR: "BRL", FR: "EUR" };
              c3 = 1;
              c4 = 1;
              const obj2 = { value: user.getUser(), done: false };
              return obj2;
            } else {
              c4 = 3;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_1 = obj1[value.userMarketplaceAmazon];
          const item = closure_130_0.forEach((originalPrice) => {
            if (currency) {
              let str = originalPrice.originalPrice;
              originalPrice.currency = currency;
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
        obj = { value, done: true };
        return obj;
      } catch (tmp12) {
        c4 = tmp;
        throw tmp12;
      }
    }
  })();
});

export const fillProductsWithAdditionalData = function fillProductsWithAdditionalData(arg0) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};