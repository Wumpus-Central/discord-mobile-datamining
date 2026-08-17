// discord_app/modules/premium/premium_marketing/native/showMarketingMomentRewardScreen.tsx
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "updateCategoriesAndProducts" /* 5301 */;

const require = arg1;
function _showMarketingMomentRewardScreen() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (product === 2) {
        product = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          product = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              product = 3;
              throw arg1;
            } else if (arg0 === 2) {
              product = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const table = tmp5;
              let callback2 = tmp2;
              callback2 = undefined;
              let obj3 = callback(closure_1_2[2]);
              c3 = 1;
              product = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj3.fetchCollectiblesProduct(callback);
              return obj1;
            }
          } else if (arg0 === 1) {
            product = 3;
            throw arg1;
          } else if (arg0 === 2) {
            product = 3;
            const obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            callback2 = product.getProduct(callback);
            if (null != callback2) {
              obj = callback2(table[3]);
              obj3 = { product: null, useCategoryImage: true };
              obj3[0] = callback2;
              obj.open(obj3);
            }
            product = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp21) {
          product = tmp;
          throw tmp21;
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/premium/premium_marketing/native/showMarketingMomentRewardScreen.tsx");

export const showMarketingMomentRewardScreen = function showMarketingMomentRewardScreen(arg0) {
  const self = this;
  const apply = _showMarketingMomentRewardScreen.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};