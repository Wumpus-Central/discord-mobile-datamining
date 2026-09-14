// === Module 13514: showMarketingMomentRewardScreen ===

// Module 13514 (showMarketingMomentRewardScreen)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7644 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7645 */;

require = fn;
let closure_5 = async function _showMarketingMomentRewardScreen(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          let product;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: CollectiblesActionCreators.fetchCollectiblesProduct(closure_0), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        product = closure_130_4.getProduct(closure_129_0);
        if (null != product) {
          const obj7 = { product, useCategoryImage: true };
          closure_130_1(closure_130_2[3]).open(obj7);
          const obj = closure_130_1(closure_130_2[3]);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp21) {
      c4 = tmp;
      throw tmp21;
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/premium_marketing/native/showMarketingMomentRewardScreen.tsx");

export const showMarketingMomentRewardScreen = function showMarketingMomentRewardScreen() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};