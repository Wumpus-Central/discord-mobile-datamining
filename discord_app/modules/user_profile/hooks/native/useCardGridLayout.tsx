// === Module 12435: useCardGridLayout ===

// Module 12435 (useCardGridLayout)
import set from "set" /* 2 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1494 */;
import ARBITRARY_LARGE_OFFSET from "ARBITRARY_LARGE_OFFSET" /* 5953 */;

const PROFILE_SIDE_PADDING = ARBITRARY_LARGE_OFFSET.PROFILE_SIDE_PADDING;
let result = set.fileFinishedImporting("modules/user_profile/hooks/native/useCardGridLayout.tsx");

export default function useCardGridLayout() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  let num = obj.minCardSize;
  if (num === undefined) {
    num = 150;
  }
  let num2 = obj.maxCardSize;
  if (num2 === undefined) {
    num2 = 180;
  }
  let num3 = obj.gap;
  if (num3 === undefined) {
    num3 = 16;
  }
  ({ containerWidth, maxWidth, sidePadding } = obj);
  if (sidePadding === undefined) {
    sidePadding = PROFILE_SIDE_PADDING;
  }
  if (containerWidth == null) {
    containerWidth = useWindowDimensionsDefault().width;
  }
  if (maxWidth == null) {
    maxWidth = Infinity;
  }
  const diff = Math.min(containerWidth, maxWidth) - 2 * sidePadding;
  const bound = Math.max(1, Math.floor((diff + num3) / (num + num3)));
  const diff1 = diff;
  let tmp4 = diff1;
  let num4 = 1;
  if (diff1 > num2) {
    let num5 = 1;
    tmp4 = diff1;
    num4 = 1;
    if (1 < bound) {
      const sum = num5 + 1;
      const result = (diff - num3 * (sum - 1)) / sum;
      tmp4 = result;
      num4 = sum;
      while (result > num2) {
        num5 = sum;
        tmp4 = result;
        num4 = sum;
        if (sum >= bound) {
          break;
        }
      }
    }
  }
  const bound1 = Math.min(Math.max(tmp4, num), num2);
  const diff2 = num4 - 1;
  if (diff < bound1 * num4 + num3 * diff2) {
    obj = { columns: 1, cardWidth: "Array", rowWidth: "context", gap: null };
    obj[3] = num3;
  } else {
    obj = { columns: null, cardWidth: null, rowWidth: null, gap: null };
    obj[0] = num4;
    obj[1] = bound1;
    obj[2] = bound1 * num4 + num3 * diff2;
    obj[3] = num3;
  }
  return obj;
};