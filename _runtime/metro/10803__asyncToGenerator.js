// === Module 10803: _asyncToGenerator ===

// Module 10803 (_asyncToGenerator)
import react_native from "react-native" /* 17 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;

let closure_2, obj4;

const RNIapAmazonModule = react_native.NativeModules.RNIapAmazonModule;
let closure_0 = _asyncToGenerator(async (value) => {
  let c3 = 0;
  let c4 = 0;
  return (async (arg0) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        return { value, done: true };
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
            return { value, done: true };
          } else {
            closure_2 = tmp;
            let currency;
            if (value) {
              let str = "CAD";
              let str2 = "EUR";
              c3 = 1;
              c4 = 1;
              obj4 = { CA: "CAD", ES: "EUR", AU: "AUD", DE: "EUR", IN: "INR", US: "USD", JP: "JPY", GB: "GBP", IT: "EUR", BR: "BRL", FR: "EUR" };
              const obj5 = { value: value.getUser(), done: false };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          return { value, done: true };
        } else {
          currency = obj4[value.userMarketplaceAmazon];
          const item = value.forEach((originalPrice) => {
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
        return { value, done: true };
      } catch (tmp10) {
        c4 = 3;
        throw tmp10;
      }
    }
  })();
});

export const fillProductsWithAdditionalData = function fillProductsWithAdditionalData(arg0) {
  return closure_0(...arguments);
};