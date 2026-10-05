// === Module 12805: useCardGridLayout ===

// Module 12805 (useCardGridLayout)
import c from "c" /* 576 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1484 */;
import Constants from "Constants" /* 6707 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const PROFILE_SIDE_PADDING = Constants.PROFILE_SIDE_PADDING;
let result = size.fileFinishedImporting("modules/user_profile/hooks/native/useCardGridLayout.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  if (cResult[0] !== arg0) {
    let obj2 = arg0;
    if (undefined === arg0) {
      obj2 = {};
    }
    cResult[0] = arg0;
    cResult[1] = obj2;
    let tmp3 = obj2;
  } else {
    tmp3 = cResult[1];
  }
  ({ minCardSize, maxCardSize, gap, containerWidth, maxWidth, sidePadding } = tmp3);
  let num3 = 150;
  if (undefined !== minCardSize) {
    num3 = minCardSize;
  }
  let num4 = 180;
  if (undefined !== maxCardSize) {
    num4 = maxCardSize;
  }
  let num5 = 16;
  if (undefined !== gap) {
    num5 = gap;
  }
  if (undefined === sidePadding) {
    sidePadding = PROFILE_SIDE_PADDING;
  }
  if (containerWidth == null) {
    containerWidth = useWindowDimensionsDefault().width;
  }
  if (maxWidth == null) {
    maxWidth = Infinity;
  }
  const diff = Math.min(containerWidth, maxWidth) - 2 * sidePadding;
  const bound = Math.max(1, Math.floor((diff + num5) / (num3 + num5)));
  if (cResult[2] === diff) {
    if (cResult[3] === num5) {
      let tmp6 = cResult[4];
    }
    let tmp8 = tmp6;
    let num6 = 1;
    if (tmp6 > num4) {
      let num7 = 1;
      tmp8 = tmp6;
      num6 = 1;
      if (1 < bound) {
        const sum = num7 + 1;
        const result = (diff - num5 * (sum - 1)) / sum;
        tmp8 = result;
        num6 = sum;
        while (result > num4) {
          num7 = sum;
          tmp8 = result;
          num6 = sum;
          if (sum >= bound) {
            break;
          }
        }
      }
    }
    const _Math = Math;
    const _Math2 = Math;
    const bound1 = Math.min(Math.max(tmp8, num3), num4);
    const diff1 = num6 - 1;
    if (diff < bound1 * num6 + num5 * diff1) {
      if (cResult[5] !== num5) {
        const obj3 = { columns: 1, cardWidth: "Array", rowWidth: "unicodeVersion", gap: num5 };
        cResult[5] = num5;
        cResult[6] = obj3;
        let tmp15 = obj3;
      } else {
        tmp15 = cResult[6];
      }
      return tmp15;
    } else {
      const sum1 = bound1 * num6 + num5 * diff1;
      if (cResult[7] === bound1) {
        if (cResult[8] === num6) {
          if (cResult[9] === num5) {
            if (cResult[10] === sum1) {
              let tmp14 = cResult[11];
            }
            return tmp14;
          }
        }
      }
      const obj4 = { columns: num6, cardWidth: bound1, rowWidth: sum1, gap: num5 };
      cResult[7] = bound1;
      cResult[8] = num6;
      cResult[9] = num5;
      cResult[10] = sum1;
      cResult[11] = obj4;
      tmp14 = obj4;
    }
  }
  const diff2 = diff;
  cResult[2] = diff;
  cResult[3] = num5;
  cResult[4] = diff2;
  tmp6 = diff2;
}) : (() => {
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
    const obj2 = { columns: 1, cardWidth: "Array", rowWidth: "unicodeVersion", gap: num3 };
    let obj3 = obj2;
  } else {
    obj3 = { columns: num4, cardWidth: bound1, rowWidth: bound1 * num4 + num3 * diff2, gap: num3 };
  }
  return obj3;
});