// discord_app/modules/collectibles/native/hooks/useCardLayout.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import useWindowDimensionsDefault from "../../../screen/useWindowDimensions.native.tsx";
import CollectiblesShopCardInternalV2 from "../CollectiblesShopCardV2.tsx";

let result = obj132.fileFinishedImporting("modules/collectibles/native/hooks/useCardLayout.tsx");

export const useCardLayout = function useCardLayout() {
  const width = useWindowDimensionsDefault().width;
  let num = 1;
  if (width >= 320) {
    num = 2;
  }
  if (num < 2) {
    let obj = { columns: null, cardWidth: "Array", rowWidth: "text" };
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
      bound = 2 * CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_GAP;
    }
    const result1 = (width - (bound + CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_GAP * diff)) / num;
    let tmp10 = require;
    let tmp11 = result1;
    let tmp12 = num;
    let tmp14 = require;
    if (result1 > CollectiblesShopCardInternalV2.COLLECTIBLES_SHOP_CARD_MAX_WIDTH) {
      let tmp19 = num;
      tmp10 = require;
      tmp11 = result1;
      tmp14 = require;
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
    const bound1 = Math.max(tmp11, tmp14(9172).COLLECTIBLES_SHOP_CARD_WIDTH);
    const bound2 = Math.min(bound1, tmp14(9172).COLLECTIBLES_SHOP_CARD_MAX_WIDTH);
    const result3 = bound2 * tmp12;
    const diff2 = tmp12 - 1;
    if (result3 + (bound + tmp10(9172).COLLECTIBLES_SHOP_CARD_GAP * diff2) > width) {
      if (1 < tmp12) {
        obj = { columns: 1, cardWidth: "Array", rowWidth: "channel" };
      }
      return obj;
    }
    obj = { columns: null, cardWidth: null, rowWidth: null };
    obj[0] = tmp12;
    obj[1] = bound2;
    const result4 = bound2 * tmp12;
    obj[2] = result4 + tmp14(9172).COLLECTIBLES_SHOP_CARD_GAP * diff2 + bound;
  }
};