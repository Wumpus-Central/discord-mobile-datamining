// === Module 15825: useCardLayout ===

// Module 15825 (useCardLayout)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1477 */;
import CollectiblesShopCardInternalV2 from "CollectiblesShopCardInternalV2" /* 8764 */;

let result = set.fileFinishedImporting("modules/collectibles/native/hooks/useCardLayout.tsx");

export const useCardLayout = function useCardLayout() {
  const width = useWindowDimensionsDefault().width;
  let num = 1;
  if (width >= 320) {
    num = 2;
  }
  if (num < 2) {
    let obj = { columns: null, cardWidth: "Array", rowWidth: "isArray" };
    obj[0] = num;
    return obj;
  } else {
    let num2 = 2;
    if (width >= 768) {
      num2 = 4;
    }
    const result = CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_WIDTH * num;
    const diff = num - 1;
    const diff1 = width - (result + CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_GAP * diff);
    if (diff1 < 2 * CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_GAP) {
      const _Math = Math;
      let bound = Math.max(4, diff1);
    } else {
      bound = 2 * tmp2(8764).COLLECTIBLES_SHOP_CARD_GAP;
    }
    const result1 = (width - (bound + tmp2(8764).COLLECTIBLES_SHOP_CARD_GAP * diff)) / num;
    let tmp10 = tmp2;
    let tmp11 = result1;
    let tmp12 = num;
    let tmp14 = tmp2;
    if (result1 > CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
      let tmp19 = num;
      tmp10 = tmp2;
      tmp11 = result1;
      tmp14 = tmp2;
      tmp12 = num;
      if (num < num2) {
        const sum = tmp19 + 1;
        const result2 = (width - (bound + CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_GAP * (sum - 1))) / sum;
        tmp10 = require;
        tmp11 = result2;
        tmp12 = sum;
        tmp14 = require;
        while (result2 > CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
          tmp19 = sum;
          let tmp9 = tmp17;
          tmp10 = tmp16;
          tmp11 = result2;
          let tmp13 = tmp17;
          tmp14 = tmp16;
          tmp12 = sum;
          if (sum >= num2) {
            break;
          }
        }
      }
    }
    const _Math2 = Math;
    const _Math3 = Math;
    const bound1 = Math.max(tmp11, tmp14(8764).COLLECTIBLES_SHOP_CARD_WIDTH);
    const bound2 = Math.min(bound1, tmp14(8764).COLLECTIBLES_SHOP_CARD_MAX_WIDTH);
    const result3 = bound2 * tmp12;
    const diff2 = tmp12 - 1;
    if (result3 + (bound + tmp10(8764).COLLECTIBLES_SHOP_CARD_GAP * diff2) > width) {
      if (1 < tmp12) {
        obj = { columns: 1, cardWidth: "Array", rowWidth: "padding" };
      }
      return obj;
    }
    obj = { columns: null, cardWidth: null, rowWidth: null };
    obj[0] = tmp12;
    obj[1] = bound2;
    const result4 = bound2 * tmp12;
    obj[2] = result4 + tmp14(8764).COLLECTIBLES_SHOP_CARD_GAP * diff2;
  }
};