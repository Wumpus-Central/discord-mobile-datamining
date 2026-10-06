// === Module 13253: showMarketingMomentRewardScreen ===

// Module 13253 (showMarketingMomentRewardScreen)
import CollectiblesActionCreators from "CollectiblesActionCreators" /* 7065 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7066 */;
import size from "module_2" /* 2 */;

let c3, c4;

let obj = function _showMarketingMomentRewardScreen() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj4;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
        let product;
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
            let closure_2 = tmp4;
            product = undefined;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj4.fetchCollectiblesProduct(closure_0), done: false };
            obj4 = CollectiblesActionCreators;
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
          product = closure_130_4.getProduct(closure_0);
          if (null != product) {
            const obj7 = { product, useCategoryImage: true };
            obj = closure_130_1(closure_130_2[3]);
            obj.open(obj7);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        c4 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
const result = size.fileFinishedImporting("modules/premium/premium_marketing/native/showMarketingMomentRewardScreen.tsx");

export const showMarketingMomentRewardScreen = function showMarketingMomentRewardScreen() {
  return obj(...arguments);
};