// === Module 16027: useCardLayout ===

// Module 16027 (useCardLayout)
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8937 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let result = size.fileFinishedImporting("modules/collectibles/native/hooks/useCardLayout.tsx");

export const useCardLayout = ReactCompilerGating.isReactCompilerEnabled() ? (function useCardLayout() {
  const cResult = c.c(11);
  const width = useWindowDimensionsDefault().width;
  let num = 1;
  if (width >= 320) {
    num = 2;
  }
  if (num < 2) {
    if (cResult[0] !== num) {
      const obj2 = { columns: num, cardWidth: "Array", rowWidth: "toCharArray$esjava$1" };
      cResult[0] = num;
      cResult[1] = obj2;
      let tmp31 = obj2;
    } else {
      tmp31 = cResult[1];
    }
    return tmp31;
  } else {
    let num2 = 2;
    if (width >= 768) {
      num2 = 4;
    }
    const result = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH * num;
    const diff = num - 1;
    const diff1 = width - (result + CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP * diff);
    if (diff1 < 2 * CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP) {
      const _Math = Math;
      let bound = Math.max(4, diff1);
    } else {
      bound = 2 * CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP;
    }
    if (cResult[2] === num) {
      if (cResult[3] === bound) {
        if (cResult[4] === width) {
          let tmp9 = cResult[5];
        }
        let tmp12 = require;
        let tmp13 = tmp9;
        let tmp14 = num;
        let tmp16 = require;
        if (tmp9 > CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
          let tmp21 = num;
          tmp12 = require;
          tmp13 = tmp9;
          tmp16 = require;
          tmp14 = num;
          if (num < num2) {
            const sum = tmp21 + 1;
            const result1 = (width - (bound + CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP * (sum - 1))) / sum;
            tmp12 = require;
            tmp13 = result1;
            tmp14 = sum;
            tmp16 = require;
            while (result1 > CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
              tmp21 = sum;
              tmp12 = require;
              tmp13 = result1;
              tmp16 = require;
              tmp14 = sum;
              if (sum >= num2) {
                break;
              }
            }
          }
        }
        const _Math2 = Math;
        const _Math3 = Math;
        const bound1 = Math.max(tmp13, tmp16(8937).COLLECTIBLES_SHOP_CARD_WIDTH);
        const bound2 = Math.min(bound1, tmp16(8937).COLLECTIBLES_SHOP_CARD_MAX_WIDTH);
        const result2 = bound2 * tmp14;
        const diff2 = tmp14 - 1;
        if (result2 + (bound + tmp12(8937).COLLECTIBLES_SHOP_CARD_GAP * diff2) > width) {
          if (1 < tmp14) {
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const obj3 = { columns: 1, cardWidth: "Array", rowWidth: "backgroundColor" };
              cResult[6] = obj3;
              let tmp30 = obj3;
            } else {
              tmp30 = cResult[6];
            }
            return tmp30;
          }
        }
        const result3 = bound2 * tmp14;
        const sum1 = result3 + tmp16(8937).COLLECTIBLES_SHOP_CARD_GAP * diff2;
        if (cResult[7] === bound2) {
          if (cResult[8] === tmp14) {
            if (cResult[9] === sum1) {
              let tmp29 = cResult[10];
            }
            return tmp29;
          }
        }
        const obj4 = { columns: tmp14, cardWidth: bound2, rowWidth: sum1 };
        cResult[7] = bound2;
        cResult[8] = tmp14;
        cResult[9] = sum1;
        cResult[10] = obj4;
        tmp29 = obj4;
      }
    }
    const result4 = (width - (bound + CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP * diff)) / num;
    cResult[2] = num;
    cResult[3] = bound;
    cResult[4] = width;
    cResult[5] = result4;
    tmp9 = result4;
  }
}) : (function useCardLayout() {
  const width = useWindowDimensionsDefault().width;
  let num = 1;
  if (width >= 320) {
    num = 2;
  }
  if (num < 2) {
    const obj2 = { columns: num, cardWidth: "Array", rowWidth: "toCharArray$esjava$1" };
    return obj2;
  } else {
    let num2 = 2;
    if (width >= 768) {
      num2 = 4;
    }
    const result = CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_WIDTH * num;
    const diff = num - 1;
    const diff1 = width - (result + CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP * diff);
    if (diff1 < 2 * CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP) {
      const _Math = Math;
      let bound = Math.max(4, diff1);
    } else {
      bound = 2 * CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP;
    }
    const result1 = (width - (bound + CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP * diff)) / num;
    let tmp10 = require;
    let tmp11 = result1;
    let tmp12 = num;
    let tmp14 = require;
    if (result1 > CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
      let tmp19 = num;
      tmp10 = require;
      tmp11 = result1;
      tmp14 = require;
      tmp12 = num;
      if (num < num2) {
        const sum = tmp19 + 1;
        const result2 = (width - (bound + CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP * (sum - 1))) / sum;
        tmp10 = require;
        tmp11 = result2;
        tmp12 = sum;
        tmp14 = require;
        while (result2 > CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
          tmp19 = sum;
          tmp10 = require;
          tmp11 = result2;
          tmp14 = require;
          tmp12 = sum;
          if (sum >= num2) {
            break;
          }
        }
      }
    }
    const _Math2 = Math;
    const _Math3 = Math;
    const bound1 = Math.max(tmp11, tmp14(8937).COLLECTIBLES_SHOP_CARD_WIDTH);
    const bound2 = Math.min(bound1, tmp14(8937).COLLECTIBLES_SHOP_CARD_MAX_WIDTH);
    const result3 = bound2 * tmp12;
    const diff2 = tmp12 - 1;
    if (result3 + (bound + tmp10(8937).COLLECTIBLES_SHOP_CARD_GAP * diff2) > width) {
      if (1 < tmp12) {
        let obj = { columns: 1, cardWidth: "Array", rowWidth: "backgroundColor" };
      }
      return obj;
    }
    obj = { columns: tmp12, cardWidth: bound2, rowWidth: null };
    const result4 = bound2 * tmp12;
    obj.rowWidth = result4 + tmp14(8937).COLLECTIBLES_SHOP_CARD_GAP * diff2;
  }
});